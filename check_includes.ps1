$htmlFiles = Get-ChildItem -Path . -Filter "*.html" | Where-Object { $_.FullName -notmatch 'assets\\plugins' }
$scripts = @()
$stylesheets = @()

foreach ($h in $htmlFiles) {
    $text = Get-Content $h.FullName -Raw
    $srcMatches = [regex]::Matches($text, '<script[^>]+src=["'']([^"'']+)["'']')
    foreach ($m in $srcMatches) {
        $scripts += [PSCustomObject]@{ File = $h.Name; Src = $m.Groups[1].Value }
    }
    $hrefMatches = [regex]::Matches($text, '<link[^>]+href=["'']([^"'']+)["'']')
    foreach ($m in $hrefMatches) {
        $stylesheets += [PSCustomObject]@{ File = $h.Name; Href = $m.Groups[1].Value }
    }
}

Write-Host "=== Unique Scripts Referenced ==="
$scripts.Src | Sort-Object -Unique | ForEach-Object { Write-Host $_ }

Write-Host "`n=== Unique Stylesheets Referenced ==="
$stylesheets.Href | Sort-Object -Unique | ForEach-Object { Write-Host $_ }
