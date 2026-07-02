# Creates a zip of index.html ready to upload to itch.io
$source = "$PSScriptRoot\index.html"
$dest = "$PSScriptRoot\the-gifted-itchio.zip"
if (Test-Path $dest) { Remove-Item $dest }
Compress-Archive -Path $source -DestinationPath $dest
Write-Host "Created: $dest" -ForegroundColor Green
Write-Host "Upload this file to itch.io as an HTML game!" -ForegroundColor Cyan
