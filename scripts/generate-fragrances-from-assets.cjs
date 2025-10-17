const fs = require('fs');
const path = require('path');

const ASSETS_BASE = '/home/jordy/Repos/perfumeria/assets/images/fragancias';
const OUT_FILE = '/home/jordy/Repos/perfumeria/src/data/fragrances.ts';

function titleCase(slug) {
  return slug
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

function buildFragranceObject({ id, displayName, gender, fraganciazId, imagePath, images }) {
  return {
    id,
    name: displayName,
    displayName,
    gender, // 'masculino' | 'femenino' | 'unisex'
    category: 'oriental',
    fraganciazId,
    imagePath,
    images,
    notesImages: [],
    hasImages: images.length > 0,
    description: `${displayName} es una fragancia ${gender} que ofrece una experiencia olfativa única e intensa.`,
    notes: { top: [], heart: [], base: [] },
    characteristics: {
      duration: '8-12h',
      projection: 'Moderada',
      intensity: 'Media',
      season: 'todo el año'
    },
    usage: { occasions: [], apply: [] },
    materials: { ingredients: [], quality: [] }
  };
}

function main() {
  const genders = [
    { folder: 'hombre', gender: 'masculino' },
    { folder: 'mujer', gender: 'femenino' },
    { folder: 'unisex', gender: 'unisex' }
  ];

  const list = [];

  for (const g of genders) {
    const genderDir = path.join(ASSETS_BASE, g.folder);
    if (!fs.existsSync(genderDir)) continue;
    const fragFolders = fs.readdirSync(genderDir, { withFileTypes: true }).filter(d => d.isDirectory());

    for (const dirent of fragFolders) {
      const folderName = dirent.name; // e.g., fraganciaz-yara
      if (!folderName.startsWith('fraganciaz-')) continue;

      const slug = folderName.replace(/^fraganciaz-/, '');
      const displayName = titleCase(slug.replace(/-/g, ' ')).replace(/\s+/g, ' ').trim();
      const fraganciazId = folderName;
      const imagePath = `/assets/images/fragancias/${g.folder}/${folderName}`;

      const files = fs
        .readdirSync(path.join(genderDir, folderName))
        .filter(f => ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(f).toLowerCase()))
        .sort();

      // Skip entries without images to avoid placeholders/duplicados vacíos
      if (files.length === 0) {
        continue;
      }

      const fragrance = buildFragranceObject({
        id: slug,
        displayName,
        gender: g.gender,
        fraganciazId,
        imagePath,
        images: files
      });
      list.push(fragrance);
    }
  }

  list.sort((a, b) => a.displayName.localeCompare(b.displayName));

  const tplGetFirst = "\nexport function getFirstImage(fragrance: Fragrance): string {\n  return fragrance.images && fragrance.images.length > 0 \n    ? `${fragrance.imagePath}/${fragrance.images[0]}?v=12` \n    : '/assets/images/placeholder.jpg';\n}\n";

  const tplGetCatalog = "\nexport function getCatalogImage(fragrance: Fragrance): string {\n  return fragrance.images && fragrance.images.length > 0 \n    ? `${fragrance.imagePath}/${fragrance.images[0]}?v=12` \n    : '/assets/images/placeholder.jpg';\n}\n";

  const header = `export interface Fragrance {\n  id: string;\n  name: string;\n  displayName: string;\n  gender: 'masculino' | 'femenino' | 'unisex';\n  category: 'oriental' | 'amaderado' | 'floral' | 'fresco' | 'frutal' | 'especiado';\n  fraganciazId: string;\n  imagePath: string;\n  images: string[];\n  notesImages: string[];\n  hasImages: boolean;\n  description: string;\n  notes: {\n    top: string[];\n    heart: string[];\n    base: string[];\n  };\n  characteristics: {\n    duration: string;\n    projection: string;\n    intensity: string;\n    season: string;\n  };\n  usage: {\n    occasions: string[];\n    apply: string[];\n  };\n  materials: {\n    ingredients: string[];\n    quality: string[];\n  };\n}\n\nexport const fragrances: Fragrance[] = ${JSON.stringify(list, null, 2)};\n${tplGetFirst}${tplGetCatalog}\nexport function getFragranceById(id: string): Fragrance | undefined {\n  return fragrances.find(f => f.id === id);\n}\n`;

  fs.writeFileSync(OUT_FILE, header, 'utf8');
  console.log(`✓ Generado ${OUT_FILE} con ${list.length} fragancias (sin vacías)`);
}

if (require.main === module) {
  main();
}
