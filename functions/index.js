const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

initializeApp();
const db = getFirestore();

// ── SERVER-SIDE MODERATION PATTERNS ────────────────────────────────────────
const BANNED_PATTERNS = [
  /\bf+u+c+k+\b/i, /\bs+h+i+t+\b/i, /\ba+s+s+h+o+l+e\b/i, /\bb+i+t+c+h\b/i,
  /\bc+u+n+t\b/i,  /\bporn\b/i,      /\bnude\b/i,           /\bsex\b/i,
  /\bnsfw\b/i,     /\bkys\b/i,       /\bsuicide\b/i,        /https?:\/\//i,
  /\bpassword\b/i, /\bkill\s+your\s?self\b/i,
];
function hasBadContent(text) {
  return BANNED_PATTERNS.some(p => p.test(text));
}

// ── AUTO-MODERATE NEW IDEAS ─────────────────────────────────────────────────
// Runs server-side after every new idea is written — client can't bypass this
exports.moderateIdea = onDocumentCreated('ideas/{ideaId}', async (event) => {
  const data = event.data.data();
  if (hasBadContent(data.text) || hasBadContent(data.name || '')) {
    await event.data.ref.delete();
    await db.collection('bans').doc(data.uid).set({
      reason: 'Automated: inappropriate content',
      ts: FieldValue.serverTimestamp()
    });
  }
});

// ── SUBMIT SCORE (callable) ─────────────────────────────────────────────────
exports.submitScore = onCall(async (request) => {
  const uid = request.auth?.uid;
  if (!uid) throw new HttpsError('unauthenticated', 'Must be signed in');
  const { score, username, character } = request.data;
  if (typeof score !== 'number' || score < 0 || score > 999999) {
    throw new HttpsError('invalid-argument', 'Invalid score');
  }
  // Prevent spam: only one entry per user per 60s
  const recent = await db.collection('leaderboard')
    .where('uid', '==', uid)
    .orderBy('ts', 'desc')
    .limit(1)
    .get();
  if (!recent.empty) {
    const lastTs = recent.docs[0].data().ts?.toMillis() || 0;
    if (Date.now() - lastTs < 60000) {
      throw new HttpsError('resource-exhausted', 'Please wait before submitting again');
    }
  }
  await db.collection('leaderboard').add({
    uid, score,
    username: String(username || 'Hero').slice(0, 20),
    character: String(character || 'Unknown').slice(0, 30),
    ts: FieldValue.serverTimestamp()
  });
  return { ok: true };
});

// ── GET LEADERBOARD (callable) ──────────────────────────────────────────────
exports.getLeaderboard = onCall(async () => {
  const snap = await db.collection('leaderboard')
    .orderBy('score', 'desc')
    .limit(20)
    .get();
  return snap.docs.map(d => ({
    id: d.id,
    username: d.data().username,
    character: d.data().character,
    score: d.data().score,
    ts: d.data().ts?.toMillis() || 0
  }));
});

// ── CLOUD SAVE (callable) ───────────────────────────────────────────────────
exports.saveGame = onCall(async (request) => {
  const uid = request.auth?.uid;
  if (!uid) throw new HttpsError('unauthenticated', 'Must be signed in');
  const { slot, level, score, hp } = request.data;
  if (slot < 0 || slot > 2) throw new HttpsError('invalid-argument', 'Invalid slot');
  const field = `slot${slot}`;
  await db.collection('saves').doc(uid).set({
    [field]: { level, score, hp: hp || 100, ts: Date.now() }
  }, { merge: true });
  return { ok: true };
});

exports.loadGame = onCall(async (request) => {
  const uid = request.auth?.uid;
  if (!uid) throw new HttpsError('unauthenticated', 'Must be signed in');
  const doc = await db.collection('saves').doc(uid).get();
  return doc.exists ? doc.data() : { slot0: null, slot1: null, slot2: null };
});
