const fs = require('fs');
const path = require('path');

const SRC_BASE = '/home/jordy/Descargas/fragancias(5)/fragancias';
const DEST_BASE = '/home/jordy/Repos/perfumeria/assets/images/fragancias';

function slugify(input) {
  return input
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function cleanCategoryDir(categoryDestPath) {
  if (!fs.existsSync(categoryDestPath)) return;
  fs.rmSync(categoryDestPath, { recursive: true, force: true });
}

function importCategory(srcCategoryPath, categorySlug) {
  const destCategoryPath = path.join(DEST_BASE, categorySlug);
  ensureDir(destCategoryPath);

  const entries = fs.readdirSync(srcCategoryPath, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.toUpperCase() === 'NOTAS') continue;

    const fragranceName = entry.name;
    const fragranceSlug = slugify(fragranceName);
    const destFragPath = path.join(destCategoryPath, `fraganciaz-${fragranceSlug}`);

    // Replace any existing folder
    if (fs.existsSync(destFragPath)) {
      fs.rmSync(destFragPath, { recursive: true, force: true });
    }
    ensureDir(destFragPath);

    const srcFragPath = path.join(srcCategoryPath, entry.name);
    const files = fs.readdirSync(srcFragPath, { withFileTypes: true });
    let imageIndex = 1;

    for (const f of files) {
      if (f.isDirectory()) {
        // Skip NOTAS folders now
        if (f.name.toUpperCase() === 'NOTAS') continue;
        continue;
      }
      const ext = path.extname(f.name).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

      const newFile = `${fragranceSlug}-${String(imageIndex).padStart(2, '0')}${ext}`;
      fs.copyFileSync(path.join(srcFragPath, f.name), path.join(destFragPath, newFile));
      imageIndex += 1;
    }

    console.log(`✓ ${categorySlug}/${fragranceSlug} importado (${imageIndex - 1} imágenes)`);
  }
}

function main() {
  console.log('🚀 Importando fragancias desde carpeta fuente...');

  const map = { HOMBRE: 'hombre', MUJER: 'mujer', UNISEX: 'unisex' };

  // Clean existing categories first to avoid duplicates
  for (const slug of Object.values(map)) {
    cleanCategoryDir(path.join(DEST_BASE, slug));
  }

  for (const [srcName, slug] of Object.entries(map)) {
    const srcPath = path.join(SRC_BASE, srcName);
    if (!fs.existsSync(srcPath)) {
      console.warn(`⚠ No existe: ${srcPath}`);
      continue;
    }
    importCategory(srcPath, slug);
  }

  console.log('✨ Importación completada.');
}

if (require.main === module) {
  main();
}

