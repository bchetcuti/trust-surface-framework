from pathlib import Path
import json
import re
import sys

root = Path(__file__).resolve().parents[1]
errors = []

required = [
    root / 'assets' / 'docs.json',
    root / 'data' / 'glossary.json',
    root / 'diagrams' / 'trust-surface.svg',
    root / 'spec' / 'print' / 'index.html',
    root / '_redirects',
    root / '_headers',
]
for path in required:
    if not path.exists():
        errors.append(f'Missing required file: {path.relative_to(root)}')

manifest = json.loads((root / 'assets' / 'docs.json').read_text(encoding='utf-8'))
for item in manifest.get('items', []):
    rel = item.get('path', '')
    target = root / rel
    if not target.exists():
        errors.append(f'docs.json references missing file: {rel}')
    if 'status' not in item:
        errors.append(f'docs.json missing status for: {rel}')
    if 'updated' not in item:
        errors.append(f'docs.json missing updated for: {rel}')

normative = [i['path'] for i in manifest.get('items', []) if i.get('status') == 'Normative']
if len(normative) not in (2, 3):
    errors.append(f'Expected 2 or 3 normative docs, found {len(normative)}: {normative}')

redirect_lines = []
for raw in (root / '_redirects').read_text(encoding='utf-8').splitlines():
    line = raw.strip()
    if not line or line.startswith('#'):
        continue
    parts = line.split()
    if len(parts) < 3:
        errors.append(f'Invalid redirect line: {raw}')
        continue
    redirect_lines.append(parts[:3])

seen = {}
for src, dest, code in redirect_lines:
    if src in seen and seen[src] != (dest, code):
        errors.append(f'Conflicting redirect for {src}: {seen[src]} vs {(dest, code)}')
    seen[src] = (dest, code)
    if src == dest:
        errors.append(f'Self-redirect detected: {src}')

# Simple route existence checks for canonical pages.
canonical_paths = [
    'docs/index.html', 'framework/index.html', 'app/index.html', 'spec/index.html',
    'spec/print/index.html', 'example/index.html', 'origin/index.html', 'adoption/index.html',
    'comparative/index.html', 'changelog/index.html'
]
for rel in canonical_paths:
    if not (root / rel).exists():
        errors.append(f'Missing canonical route file: {rel}')

# Ensure print page references Poppins and inline svg.
print_html = (root / 'spec' / 'print' / 'index.html').read_text(encoding='utf-8')
if 'family=Poppins' not in print_html or '<svg ' not in print_html:
    errors.append('Print spec must load Poppins and inline the SVG diagram.')

if errors:
    for err in errors:
        print(f'ERROR: {err}')
    sys.exit(1)

print('Repository validation passed.')
