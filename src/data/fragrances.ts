export interface Fragrance {
  id: string;
  name: string;
  displayName: string;
  gender: 'masculino' | 'femenino' | 'unisex';
  category: 'oriental' | 'amaderado' | 'floral' | 'fresco' | 'frutal' | 'especiado';
  fraganciazId: string;
  imagePath: string;
  images: string[];
  notesImages: string[];
  hasImages: boolean;
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  characteristics: {
    duration: string;
    projection: string;
    intensity: string;
    season: string;
  };
  usage: {
    occasions: string[];
    apply: string[];
  };
  materials: {
    ingredients: string[];
    quality: string[];
  };
}

export const fragrances: Fragrance[] = [
  {
    "id": "ajwad",
    "name": "Ajwad",
    "displayName": "Ajwad",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-ajwad",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-ajwad",
    "images": [
      "ajwad-01.jpeg",
      "ajwad-02.jpeg",
      "ajwad-03.jpeg",
      "ajwad-04.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Ajwad es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Bergamota","Mandarina","Limón"],
      "heart": ["Jazmín","Rosa","Ylang-Ylang"],
      "base": ["Sándalo","Ámbar","Musk"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "alharamain-laventure",
    "name": "Alharamain laventure",
    "displayName": "Alharamain laventure",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-alharamain-laventure",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-alharamain-laventure",
    "images": [
      "alharamain-laventure-01.jpeg",
      "alharamain-laventure-02.jpeg",
      "alharamain-laventure-03.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Alharamain laventure es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Limón","Bergamota","Elemi"],
      "heart": ["Notas Amaderadas","Jazmín","Lirio de los Valles"],
      "base": ["Almizcle","Pachulí","Ámbar"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "amethyst",
    "name": "Amethyst",
    "displayName": "Amethyst",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-amethyst",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-amethyst",
    "images": [
      "amethyst-01.jpeg",
      "amethyst-02.jpeg",
      "amethyst-03.jpeg",
      "amethyst-04.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Amethyst es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Bade'e Al Oud", "Amethyst"],
      "heart": ["Floral", "Oriental"],
      "base": ["Amaderado", "Ámbar"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "amethyste",
    "name": "Amethyste",
    "displayName": "Amethyste",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-amethyste",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-amethyste",
    "images": [
      "amethyste-01.jpeg",
      "amethyste-02.jpeg",
      "amethyste-03.jpeg",
      "amethyste-04.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Amethyste es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cítrico","Fresco Especiado"],
      "heart": ["Rosas","Florales","Floral Blanco","Especiado Suave"],
      "base": ["Oud","Ámbar","Avainillado"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "ansaam-silver",
    "name": "Ansaam silver",
    "displayName": "Ansaam silver",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-ansaam-silver",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-ansaam-silver",
    "images": [
      "ansaam-silver-01.jpeg",
      "ansaam-silver-02.jpeg",
      "ansaam-silver-03.jpeg",
      "ansaam-silver-04.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Ansaam silver es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Aromático", "Cítrico"],
      "heart": ["Atalcado", "Avainillado", "Balsámico", "Fresco Especiado"],
      "base": ["Cálido Especiado", "Lavanda", "Pachulí", "Ámbar"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "art-of-universe",
    "name": "Art of universe",
    "displayName": "Art of universe",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-art-of-universe",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-art-of-universe",
    "images": [
      "art-of-universe-01.jpeg",
      "art-of-universe-02.jpeg",
      "art-of-universe-03.jpeg",
      "art-of-universe-04.jpeg",
      "art-of-universe-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Art of universe es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Aromático","Cítrico"],
      "heart": ["Afrutados","Dulce","Fresco","Fresco Especiado"],
      "base": ["Almizclado","Atalcado","Floral Blanco","Verde"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "art-of-universe-unisex",
    "name": "Art of universe",
    "displayName": "Art of universe",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-art-of-universe-unisex",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-art-of-universe-unisex",
    "images": [
      "art-of-universe-01.jpeg",
      "art-of-universe-02.jpeg",
      "art-of-universe-03.jpeg",
      "art-of-universe-04.jpeg",
      "art-of-universe-05.jpeg",
      "art-of-universe-06.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Art of universe es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": [],
      "heart": [],
      "base": []
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "assam-silver",
    "name": "Assam silver",
    "displayName": "Assam silver",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-assam-silver",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-assam-silver",
    "images": [
      "assam-silver-01.jpeg",
      "assam-silver-02.jpeg",
      "assam-silver-03.jpeg",
      "assam-silver-04.jpeg",
      "assam-silver-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Assam silver es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Aromático","Cítrico"],
      "heart": ["Atalcado","Avainillado","Balsámico","Fresco Especiado"],
      "base": ["Cálido Especiado","Lavanda","Pachulí","Ámbar"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "bharara-king",
    "name": "Bharara king",
    "displayName": "Bharara king",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-bharara-king",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-bharara-king",
    "images": [
      "bharara-king-01.jpeg",
      "bharara-king-02.jpeg",
      "bharara-king-03.jpeg",
      "bharara-king-04.jpeg",
      "bharara-king-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Bharara king es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cítrico","Dulce"],
      "heart": ["Afrutados","Avainillado"],
      "base": ["Almizclado","Atalcado","Ámbar","Fresco Especiado"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "bharara-king-unisex",
    "name": "Bharara king",
    "displayName": "Bharara king",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-bharara-king-unisex",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-bharara-king-unisex",
    "images": [
      "bharara-king-01.jpeg",
      "bharara-king-02.jpeg",
      "bharara-king-03.jpeg",
      "bharara-king-04.jpeg",
      "bharara-king-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Bharara king es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": [],
      "heart": [],
      "base": []
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "bharara-rome",
    "name": "Bharara rome",
    "displayName": "Bharara rome",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-bharara-rome",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-bharara-rome",
    "images": [
      "bharara-rome-02.jpeg",
      "bharara-rome-01.jpeg",
      "bharara-rome-03.jpeg",
      "bharara-rome-04.jpeg",
      "bharara-rome-05.jpeg",
      "bharara-rome-06.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Bharara rome es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Lavanda"],
      "heart": ["Vainilla"],
      "base": ["Vetiver"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "bharara-rome-women",
    "name": "Bharara rome women",
    "displayName": "Bharara rome women",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-bharara-rome-women",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-bharara-rome-women",
    "images": [
      "bharara-rome-women-01.jpeg",
      "bharara-rome-women-02.jpeg",
      "bharara-rome-women-03.jpeg",
      "bharara-rome-women-04.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Bharara rome women es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Rome Pour Femme", "Bharara"],
      "heart": ["Floral", "Oriental"],
      "base": ["Amaderado", "Ámbar"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "delilah",
    "name": "Delilah",
    "displayName": "Delilah",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-delilah",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-delilah",
    "images": [
      "delilah-01.jpeg",
      "delilah-02.jpeg",
      "delilah-03.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Delilah es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Frutal","Cítrico"],
      "heart": ["Floral","Dulce"],
      "base": ["Amaderado","Musk"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "hayaati-florence",
    "name": "Hayaati florence",
    "displayName": "Hayaati florence",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-hayaati-florence",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-hayaati-florence",
    "images": [
      "hayaati-florence-01.jpeg",
      "hayaati-florence-02.jpeg",
      "hayaati-florence-03.jpeg",
      "hayaati-florence-04.jpeg",
      "hayaati-florence-05.jpeg",
      "hayaati-florence-06.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Hayaati florence es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Bergamota","Limón"],
      "heart": ["Rosa","Jazmín"],
      "base": ["Sándalo","Musk"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "hayaati-maleky-men",
    "name": "Hayaati maleky men",
    "displayName": "Hayaati maleky men",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-hayaati-maleky-men",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-hayaati-maleky-men",
    "images": [
      "hayaati-maleky-men-01.jpeg",
      "hayaati-maleky-men-02.jpeg",
      "hayaati-maleky-men-03.jpeg",
      "hayaati-maleky-men-04.jpeg",
      "hayaati-maleky-men-05.jpeg",
      "hayaati-maleky-men-06.jpeg",
      "hayaati-maleky-men-07.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Hayaati maleky men es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Ámbar","Fresco Especiado"],
      "heart": ["Almizclado","Amaderado","Atalcado"],
      "base": ["Cítrico","Animálico","Especiado Suave","Balsámico"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "Khamrah-Qahwa",
    "name": "Khamrah Qahwa",
    "displayName": "Khamrah Qahwa",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-khamrah",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-khamrah",
    "images": [
      "khamrah-01.jpeg",
      "khamrah-02.jpeg",
      "khamrah-03.jpeg",
      "khamrah-04.jpeg",
      "khamrah-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Khamrah es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Vainilla","Canela"],
      "heart": ["Nuez Moscada"],
      "base": ["Amaderadas"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "Khamrah-Qahwa-unisex",
    "name": "Khamrah Qahwa",
    "displayName": "Khamrah Qahwa",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-khamrah-unisex",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-khamrah",
    "images": [
      "khamrah-01.jpeg",
      "khamrah-02.jpeg",
      "khamrah-03.jpeg",
      "khamrah-04.jpeg",
      "khamrah-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Khamrah Qahwa es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": [],
      "heart": [],
      "base": []
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "khamrah",
    "name": "Khamrah",
    "displayName": "Khamrah",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-khamrah",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-khamrah-qahwa",
    "images": [
      "khamrah-qahwa-01.jpeg",
      "khamrah-qahwa-02.jpeg",
      "khamrah-qahwa-03.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Khamrah es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Café","Canela","Vainilla"],
      "heart": ["Cálido Especiado","Dulce"],
      "base": ["Praliné","Haba Tonka","Cardamomo"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "khamrah-unisex",
    "name": "Khamrah",
    "displayName": "Khamrah",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-khamrah-unisex",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-khamrah-qahwa-unisex",
    "images": [
      "khamrah-qahwa-unisex-01.jpeg",
      "khamrah-qahwa-unisex-02.jpeg",
      "khamrah-qahwa-unisex-03.jpeg",
      "khamrah-qahwa-unisex-04.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Khamrah es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": [],
      "heart": [],
      "base": []
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "kismet-men",
    "name": "Kismet men",
    "displayName": "Kismet men",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-kismet-men",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-kismet-men",
    "images": [
      "kismet-men-01.jpeg",
      "kismet-men-02.jpeg",
      "kismet-men-03.jpeg",
      "kismet-men-04.jpeg",
      "kismet-men-05.jpeg",
      "kismet-men-06.jpeg",
      "kismet-men-07.jpeg",
      "kismet-men-08.jpeg",
      "kismet-men-09.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Kismet men es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Amaderado","Cálido Especiado"],
      "heart": ["Pachulí","Vainilla","Fresco Especiado"],
      "base": ["Terroso","Atalcado","Balsámico"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "kismet-womwen",
    "name": "Kismet womwen",
    "displayName": "Kismet womwen",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-kismet-womwen",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-kismet-womwen",
    "images": [
      "kismet-womwen-01.jpeg",
      "kismet-womwen-02.jpeg",
      "kismet-womwen-03.jpeg",
      "kismet-womwen-04.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Kismet womwen es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Frutal","Cítrico"],
      "heart": ["Floral","Oriental"],
      "base": ["Amaderado","Ámbar"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "kit-yara-and-yara-candy",
    "name": "Kit yara and yara candy",
    "displayName": "Kit yara and yara candy",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-kit-yara-and-yara-candy",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-kit-yara-and-yara-candy",
    "images": [
      "kit-yara-and-yara-candy-01.webp",
      "kit-yara-and-yara-candy-02.jpg",
      "kit-yara-and-yara-candy-03.jpg",
      "kit-yara-and-yara-candy-04.jpeg",
      "kit-yara-and-yara-candy-05.webp",
      "kit-yara-and-yara-candy-06.jpg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Kit yara and yara candy es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Dulce","Avainillado","Atalcado"],
      "heart": ["Tropical","Afrutados","Almizclado"],
      "base": ["Florales","Cítrico"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "kit-yara-splash",
    "name": "Kit yara splash",
    "displayName": "Kit yara splash",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-kit-yara-splash",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-kit-yara-splash",
    "images": [
      "kit-yara-splash-01.jpeg",
      "kit-yara-splash-02.jpeg",
      "kit-yara-splash-03.jpeg",
      "kit-yara-splash-04.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Kit yara splash es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Dulce", "Avainillado", "Atalcado"],
      "heart": ["Tropical", "Afrutados", "Almizclado"],
      "base": ["Florales", "Cítrico"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "liam-grey",
    "name": "Liam grey",
    "displayName": "Liam grey",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-liam-grey",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-liam-grey",
    "images": [
      "liam-grey-01.jpeg",
      "liam-grey-02.jpeg",
      "liam-grey-03.jpeg",
      "liam-grey-04.jpeg",
      "liam-grey-05.jpeg",
      "liam-grey-06.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Liam grey es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Iris","Vetiver","Té Dorado"],
      "heart": ["Haba Tonka","Cardamomo","Sándalo"],
      "base": ["Vainilla","Menta","Higos","Jazmín"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "malachite",
    "name": "Malachite",
    "displayName": "Malachite",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-malachite",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-malachite",
    "images": [
      "malachite-01.jpeg",
      "malachite-02.jpeg",
      "malachite-03.jpeg",
      "malachite-04.jpeg",
      "malachite-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Malachite es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cítrico","Aromático"],
      "heart": ["Amaderado","Afrutados","Fresco Especiado"],
      "base": ["Almizclado","Ámbar","Especiado Suave","Verde","Florales"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "mayar-cherry",
    "name": "Mayar cherry",
    "displayName": "Mayar cherry",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-mayar-cherry",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-mayar-cherry",
    "images": [
      "mayar-cherry-01.jpeg",
      "mayar-cherry-02.jpeg",
      "mayar-cherry-03.jpeg",
      "mayar-cherry-04.jpeg",
      "mayar-cherry-05.jpeg",
      "mayar-cherry-06.jpeg",
      "mayar-cherry-07.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Mayar cherry es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cacao","Dulce","Afrutados"],
      "heart": ["Cálido Especiado","Avainillado","Ámbar"],
      "base": ["Atalcado","Pachulí"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "mayar-cherry-unisex",
    "name": "Mayar cherry",
    "displayName": "Mayar cherry",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-mayar-cherry-unisex",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-mayar-cherry-unisex",
    "images": [
      "mayar-cherry-01.jpeg",
      "mayar-cherry-02.jpeg",
      "mayar-cherry-03.jpeg",
      "mayar-cherry-04.jpeg",
      "mayar-cherry-05.jpeg",
      "mayar-cherry-06.jpeg",
      "mayar-cherry-07.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Mayar cherry es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cacao", "Dulce"],
      "heart": ["Afrutados", "Cálido Especiado", "Avainillado"],
      "base": ["Ámbar", "Atalcado", "Pachulí"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "musaman-white",
    "name": "Musaman white",
    "displayName": "Musaman white",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-musaman-white",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-musaman-white",
    "images": [
      "musaman-white-01.jpeg",
      "musaman-white-02.jpeg",
      "musaman-white-03.jpeg",
      "musaman-white-04.jpeg",
      "musaman-white-05.jpeg",
      "musaman-white-06.jpeg",
      "musaman-white-07.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Musaman white es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cítrico","Frutal"],
      "heart": ["Floral","Oriental"],
      "base": ["Amaderado","Musk"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "now-black",
    "name": "Now black",
    "displayName": "Now black",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-now-black",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-now-black",
    "images": [
      "now-black-01.jpeg",
      "now-black-02.jpeg",
      "now-black-03.jpeg",
      "now-black-04.jpeg",
      "now-black-05.jpeg",
      "now-black-06.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Now black es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Afrutados","Dulce"],
      "heart": ["Tropical","Fresco"],
      "base": ["Almizclado","Atalcado","Amaderado"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "odyssey-dubai-chocolat-armaf",
    "name": "Odyssey Dubai Chocolat Armaf",
    "displayName": "Odyssey Dubai Chocolat Armaf",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-odyssey-dubai-chocolat-armaf",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-odyssey-dubai-chocolat-armaf",
    "images": [
      "odyssey-dubai-chocolat-armaf-01.jpeg",
      "odyssey-dubai-chocolat-armaf-02.jpeg",
      "odyssey-dubai-chocolat-armaf-03.jpeg",
      "odyssey-dubai-chocolat-armaf-04.jpeg",
      "odyssey-dubai-chocolat-armaf-05.jpeg",
      "odyssey-dubai-chocolat-armaf-06.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Odyssey Dubai Chocolat Armaf es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Café","Pistacho","Praliné","Avellana","Knafeh"],
      "heart": ["Vainilla","Chocolate","Cardamomo"],
      "base": ["Caramelo","Haba Tonka","Amaderadas"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "odyssey-dubai-chocolat-armaf-unisex",
    "name": "Odyssey Dubai Chocolat Armaf",
    "displayName": "Odyssey Dubai Chocolat Armaf",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-odyssey-dubai-chocolat-armaf-unisex",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-odyssey-dubai-chocolat-armaf-unisex",
    "images": [
      "odyssey-dubai-chocolat-armaf-unisex-01.jpeg",
      "odyssey-dubai-chocolat-armaf-unisex-02.jpeg",
      "odyssey-dubai-chocolat-armaf-unisex-03.jpeg",
      "odyssey-dubai-chocolat-armaf-unisex-04.jpeg",
      "odyssey-dubai-chocolat-armaf-unisex-05.jpeg",
      "odyssey-dubai-chocolat-armaf-unisex-06.jpeg",
      "odyssey-dubai-chocolat-armaf-unisex-07.jpeg",
      "odyssey-dubai-chocolat-armaf-unisex-08.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Odyssey Dubai Chocolat Armaf es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Café", "Pistacho", "Praliné", "Avellana", "Knafeh"],
      "heart": ["Vainilla", "Chocolate", "Cardamomo"],
      "base": ["Caramelo", "Haba Tonka", "Amaderadas"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "odyssey-candee",
    "name": "Odyssey candee",
    "displayName": "Odyssey candee",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-odyssey-candee",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-odyssey-candee",
    "images": [
      "odyssey-candee-01.jpeg",
      "odyssey-candee-02.jpeg",
      "odyssey-candee-03.jpeg",
      "odyssey-candee-04.jpeg",
      "odyssey-candee-05.jpeg",
      "odyssey-candee-06.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Odyssey candee es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Dulce","Frutal"],
      "heart": ["Floral","Oriental"],
      "base": ["Amaderado","Ámbar"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "odyssey-mandarin-sky",
    "name": "Odyssey Mandarin Sky",
    "displayName": "Odyssey Mandarin Sky",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-odyssey-mandarin-sky",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-odyssey-mandarin-sky",
    "images": [
      "odyssey-mandarin-sky-01.jpeg",
      "odyssey-mandarin-sky-02.jpeg",
      "odyssey-mandarin-sky-03.jpeg",
      "odyssey-mandarin-sky-04.jpeg",
      "odyssey-mandarin-sky-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Odyssey Mandarin Sky es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cítrico","Caramelo"],
      "heart": ["Dulce","Ámbar"],
      "base": ["Aromático","Avainillado","Amaderado","Cálido Especiado"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "odyssey-mandarin-sky-unisex",
    "name": "Odyssey Mandarin Sky",
    "displayName": "Odyssey Mandarin Sky",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-odyssey-mandarin-sky-unisex",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-odyssey-mandarin-sky-unisex",
    "images": [
      "odyssey-mandarin-sky-unisex-01.jpeg",
      "odyssey-mandarin-sky-unisex-02.jpeg",
      "odyssey-mandarin-sky-unisex-03.jpeg",
      "odyssey-mandarin-sky-unisex-04.jpeg",
      "odyssey-mandarin-sky-unisex-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Odyssey Mandarin Sky es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cítrico", "Caramelo"],
      "heart": ["Dulce", "Ámbar"],
      "base": ["Aromático", "Avainillado", "Amaderado", "Cálido Especiado"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "sakeena",
    "name": "Sakeena",
    "displayName": "Sakeena",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-sakeena",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-sakeena",
    "images": [
      "sakeena-01.jpeg",
      "sakeena-02.jpeg",
      "sakeena-03.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Sakeena es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cítrico","Frutal"],
      "heart": ["Floral","Dulce"],
      "base": ["Amaderado","Musk"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "shaheen-gold-lattafa-unisex",
    "name": "Shaheen Gold Lattafa",
    "displayName": "Shaheen Gold Lattafa",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-shaheen-gold-lattafa-unisex",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-shaheen-gold-lattafa-unisex",
    "images": [
      "shaheen-gold-lattafa-unisex-01.jpeg",
      "shaheen-gold-lattafa-unisex-02.jpeg",
      "shaheen-gold-lattafa-unisex-03.jpeg",
      "shaheen-gold-lattafa-unisex-04.jpeg",
      "shaheen-gold-lattafa-unisex-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Shaheen Gold Lattafa es una fragancia unisex que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Vainilla", "Piña"],
      "heart": ["Toronja"],
      "base": ["Hojas Verdes"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "shaheen-gold-lattafa",
    "name": "Shaheen Gold Lattafa",
    "displayName": "Shaheen Gold Lattafa",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-shaheen-gold-lattafa",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-shaheen-gold-lattafa",
    "images": [
      "shaheen-gold-lattafa-01.jpeg",
      "shaheen-gold-lattafa-02.jpeg",
      "shaheen-gold-lattafa-03.jpeg",
      "shaheen-gold-lattafa-04.jpeg",
      "shaheen-gold-lattafa-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Shaheen Gold Lattafa es una fragancia masculino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Vainilla", "Piña"],
      "heart": ["Toronja"],
      "base": ["Hojas Verdes"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "sutor",
    "name": "Sutor",
    "displayName": "Sutor",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-sutor",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-sutor",
    "images": [
      "sutor-01.jpeg",
      "sutor-02.jpeg",
      "sutor-03.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Sutor es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Cítrico","Frutal"],
      "heart": ["Floral","Oriental"],
      "base": ["Amaderado","Ámbar"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "yara",
    "name": "Yara",
    "displayName": "Yara",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-yara",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-yara",
    "images": [
      "yara-01.jpeg",
      "yara-02.jpeg",
      "yara-03.jpeg",
      "yara-04.jpeg",
      "yara-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Yara es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Dulce","Avainillado","Atalcado"],
      "heart": ["Tropical","Afrutados","Almizclado"],
      "base": ["Florales","Cítrico"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  },
  {
    "id": "yum-yum",
    "name": "Yum yum",
    "displayName": "Yum yum",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-yum-yum",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-yum-yum",
    "images": [
      "yum-yum-01.jpeg",
      "yum-yum-02.jpeg",
      "yum-yum-03.jpeg",
      "yum-yum-04.jpeg",
      "yum-yum-05.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Yum yum es una fragancia femenino que ofrece una experiencia olfativa única e intensa.",
    "notes": {
      "top": ["Dulce","Frutal"],
      "heart": ["Floral","Oriental"],
      "base": ["Amaderado","Musk"]
    },
    "characteristics": {
      "duration": "8-12h",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "todo el año"
    },
    "usage": {
      "occasions": [],
      "apply": []
    },
    "materials": {
      "ingredients": [],
      "quality": []
    }
  }
];

export function getFirstImage(fragrance: Fragrance): string {
  return fragrance.images && fragrance.images.length > 0 
    ? `${fragrance.imagePath}/${fragrance.images[0]}?v=13` 
    : '/assets/images/placeholder.jpg';
}

export function getCatalogImage(fragrance: Fragrance): string {
  return fragrance.images && fragrance.images.length > 0 
    ? `${fragrance.imagePath}/${fragrance.images[0]}?v=13` 
    : '/assets/images/placeholder.jpg';
}

export function getFragranceById(id: string): Fragrance | undefined {
  return fragrances.find(f => f.id === id);
}
