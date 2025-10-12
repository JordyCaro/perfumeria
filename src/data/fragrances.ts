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
    "fraganciazId": "fraganciaz-17-ajwad",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-17-ajwad",
    "images": [
      "WhatsApp Image 2025-10-10 at 12.15.43 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.43 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.43 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.44 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "alharamain-laventure",
    "name": "Alharamain Laventure",
    "displayName": "Alharamain Laventure",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-1-alharamain-laventure",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-1-alharamain-laventure",
    "images": [
      "WhatsApp Image 2025-10-10 at 2.38.43 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 2.38.44 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 2.38.44 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "amethyste",
    "name": "Amethyste",
    "displayName": "Amethyste",
    "gender": "unisex",
    "category": "oriental",
    "fraganciazId": "fraganciaz-28-amethyste",
    "imagePath": "/assets/images/fragancias/unisex/fraganciaz-28-amethyste",
    "images": [
      "WhatsApp Image 2025-10-10 at 12.15.42 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.42 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.42 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia unisex versátil y refinada con notas orientales únicas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "art-of-universe",
    "name": "Art Of Universe",
    "displayName": "Art Of Universe",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-3-art-of-universe",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-3-art-of-universe",
    "images": [
      "WhatsApp Image 2025-10-10 at 3.13.02 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 3.20.12 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 3.20.12 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 3.20.13 PM (4).jpeg",
      "WhatsApp Image 2025-10-10 at 3.20.13 PM (5).jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "bharara-king",
    "name": "Bharara King",
    "displayName": "Bharara King",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-4-bharara-king",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-4-bharara-king",
    "images": [
      "WhatsApp Image 2025-10-10 at 2.15.00 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 2.15.00 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 2.15.00 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 2.15.01 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 2.15.01 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "bharara-rome",
    "name": "Bharara Rome",
    "displayName": "Bharara Rome",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-5-bharara-rome",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-5-bharara-rome",
    "images": [
      "WhatsApp Image 2025-10-10 at 3.12.53 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.53 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.53 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.54 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.54 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "bharara-rome-women",
    "name": "Bharara Rome Women",
    "displayName": "Bharara Rome Women",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-18-bharara-rome-women",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-18-bharara-rome-women",
    "images": [
      "WhatsApp Image 2025-10-10 at 3.12.52 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.52 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.52 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.52 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "delilah",
    "name": "Delilah",
    "displayName": "Delilah",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-19-delilah",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-19-delilah",
    "images": [
      "WhatsApp Image 2025-10-10 at 1.51.22 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 1.51.22 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 1.51.23 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "hayaati-florence",
    "name": "Hayaati Florence",
    "displayName": "Hayaati Florence",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-20-hayaati-florence",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-20-hayaati-florence",
    "images": [
      "WhatsApp Image 2025-10-10 at 4.04.01 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 4.04.01 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 4.04.01 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 4.04.02 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 4.04.02 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 4.04.02 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "hayaati-maleky-men",
    "name": "Hayaati Maleky Men",
    "displayName": "Hayaati Maleky Men",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-6-hayaati-maleky-men",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-6-hayaati-maleky-men",
    "images": [
      "WhatsApp Image 2025-10-10 at 3.27.29 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 3.27.29 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 3.27.29 PM (4).jpeg",
      "WhatsApp Image 2025-10-10 at 3.27.29 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 3.27.30 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 3.27.30 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 3.27.30 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "khamrah",
    "name": "Khamrah",
    "displayName": "Khamrah",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-7-khamrah",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-7-khamrah",
    "images": [
      "WhatsApp Image 2025-10-10 at 12.15.44 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.45 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.46 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.46 PM (2).jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "khamrah-qawah",
    "name": "Khamrah Qawah",
    "displayName": "Khamrah Qawah",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-8-khamrah-qawah",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-8-khamrah-qawah",
    "images": [
      "WhatsApp Image 2025-10-10 at 12.15.47 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.47 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.48 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "kismet-men",
    "name": "Kismet Men",
    "displayName": "Kismet Men",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-9-kismet-men",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-9-kismet-men",
    "images": [
      "WhatsApp Image 2025-10-10 at 2.05.04 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 2.05.04 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 2.05.05 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 2.05.05 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 2.05.05 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 2.05.05 PM (4).jpeg",
      "WhatsApp Image 2025-10-10 at 2.05.05 PM (5).jpeg",
      "WhatsApp Image 2025-10-10 at 2.05.05 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "kit-yara-and-yara-candy",
    "name": "Kit Yara And Yara Candy",
    "displayName": "Kit Yara And Yara Candy",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-22-kit-yara-and-yara-candy",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-22-kit-yara-and-yara-candy",
    "images": [
      "1_e5d108d7-783c-41ec-b986-264235b6141e.webp",
      "OIP (15).jpg",
      "OIP (17).jpg",
      "c2052bf7-362d-4c81-9611-c2bcdb5da4dd-yara-candy-lattafa-eau-de-parfum-perfume-feminino-100ml.webp",
      "yara-candy-4.jpg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "liam-grey",
    "name": "Liam Grey",
    "displayName": "Liam Grey",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-10-liam-grey",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-10-liam-grey",
    "images": [
      "WhatsApp Image 2025-10-10 at 12.15.48 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.49 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.49 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.50 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "malachite",
    "name": "Malachite",
    "displayName": "Malachite",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-11-malachite",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-11-malachite",
    "images": [
      "WhatsApp Image 2025-10-10 at 4.23.32 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 4.23.32 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 4.23.32 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 4.23.33 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 4.23.33 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "mayar-cherry",
    "name": "Mayar Cherry",
    "displayName": "Mayar Cherry",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-12-mayar-cherry",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-12-mayar-cherry",
    "images": [
      "WhatsApp Image 2025-10-10 at 4.56.39 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 4.57.31 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 4.57.31 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 4.57.31 PM (4).jpeg",
      "WhatsApp Image 2025-10-10 at 4.57.31 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "musaman-white",
    "name": "Musaman White",
    "displayName": "Musaman White",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-24-musaman-white",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-24-musaman-white",
    "images": [
      "WhatsApp Image 2025-10-10 at 1.12.23 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.24 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.40 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.41 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.41 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "now-black",
    "name": "Now Black",
    "displayName": "Now Black",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-13-now-black",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-13-now-black",
    "images": [
      "WhatsApp Image 2025-10-10 at 3.12.54 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.54 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.55 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.55 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.55 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 3.12.55 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "odissey-dubau-chocolate",
    "name": "Odissey Dubau Chocolate",
    "displayName": "Odissey Dubau Chocolate",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-14-odissey-dubau-chocolate",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-14-odissey-dubau-chocolate",
    "images": [
      "WhatsApp Image 2025-10-10 at 1.40.14 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 1.40.14 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 1.51.20 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 1.51.20 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 1.51.21 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "odyssey-mandarine",
    "name": "Odyssey Mandarine",
    "displayName": "Odyssey Mandarine",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-15-odyssey-mandarine",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-15-odyssey-mandarine",
    "images": [
      "WhatsApp Image 2025-10-10 at 1.12.25 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.25 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "sakeena",
    "name": "Sakeena",
    "displayName": "Sakeena",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-25-sakeena",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-25-sakeena",
    "images": [
      "WhatsApp Image 2025-10-10 at 12.15.50 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.50 PM (3).jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "shadenn-gold",
    "name": "Shadenn Gold",
    "displayName": "Shadenn Gold",
    "gender": "masculino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-16-shadenn-gold",
    "imagePath": "/assets/images/fragancias/hombre/fraganciaz-16-shadenn-gold",
    "images": [
      "WhatsApp Image 2025-10-10 at 1.12.20 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.20 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.21 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.21 PM.jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.22 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia masculina intensa y seductora con notas orientales premium.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "sutor",
    "name": "Sutor",
    "displayName": "Sutor",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-26-sutor",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-26-sutor",
    "images": [
      "WhatsApp Image 2025-10-10 at 12.15.39 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.40 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 12.15.40 PM.jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  },
  {
    "id": "yara",
    "name": "Yara",
    "displayName": "Yara",
    "gender": "femenino",
    "category": "oriental",
    "fraganciazId": "fraganciaz-27-yara",
    "imagePath": "/assets/images/fragancias/mujer/fraganciaz-27-yara",
    "images": [
      "WhatsApp Image 2025-10-10 at 1.12.22 PM (2).jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.22 PM (3).jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.23 PM (1).jpeg",
      "WhatsApp Image 2025-10-10 at 1.12.23 PM (2).jpeg"
    ],
    "notesImages": [],
    "hasImages": true,
    "description": "Una fragancia femenina elegante y sofisticada con notas orientales exquisitas.",
    "notes": {
      "top": [
        "Bergamota",
        "Limón",
        "Pimienta"
      ],
      "heart": [
        "Lavanda",
        "Geranio",
        "Jazmín"
      ],
      "base": [
        "Ámbar",
        "Musk",
        "Sándalo"
      ]
    },
    "characteristics": {
      "duration": "6-8 horas",
      "projection": "Moderada",
      "intensity": "Media",
      "season": "Todo el año"
    },
    "usage": {
      "occasions": [
        "Día a día",
        "Eventos especiales",
        "Ocasiones formales"
      ],
      "apply": [
        "Aplicar en puntos de pulso",
        "2-3 sprays",
        "Aplicar 15 minutos antes"
      ]
    },
    "materials": {
      "ingredients": [
        "Aceites esenciales premium",
        "Extractos naturales",
        "Materias primas de Dubai"
      ],
      "quality": [
        "100% auténtico",
        "Certificado de autenticidad",
        "Empaque original"
      ]
    }
  }
];

// Helper functions
export function getFirstImage(fragrance: Fragrance): string {
  return fragrance.images && fragrance.images.length > 0 
    ? `${fragrance.imagePath}/${fragrance.images[0]}?v=11` 
    : '/assets/images/placeholder.jpg';
}

export function getCatalogImage(fragrance: Fragrance): string {
  return fragrance.images && fragrance.images.length > 0 
    ? `${fragrance.imagePath}/${fragrance.images[0]}?v=11` 
    : '/assets/images/placeholder.jpg';
}

export function getFragranceById(id: string): Fragrance | undefined {
  return fragrances.find(fragrance => fragrance.id === id);
}
