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
      "ajwad-01.jpeg",
      "ajwad-02.jpeg",
      "ajwad-03.jpeg",
      "ajwad-04.jpeg"
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
      "alharamain-laventure-01.jpeg",
      "alharamain-laventure-02.jpeg",
      "alharamain-laventure-03.jpeg"
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
      "amethyste-01.jpeg",
      "amethyste-02.jpeg",
      "amethyste-03.jpeg"
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
      "art-of-universe-01.jpeg",
      "art-of-universe-02.jpeg",
      "art-of-universe-03.jpeg",
      "art-of-universe-04.jpeg",
      "art-of-universe-05.jpeg"
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
      "bharara-king-01.jpeg",
      "bharara-king-02.jpeg",
      "bharara-king-03.jpeg",
      "bharara-king-04.jpeg",
      "bharara-king-05.jpeg"
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
      "bharara-rome-01.jpeg",
      "bharara-rome-02.jpeg",
      "bharara-rome-03.jpeg",
      "bharara-rome-04.jpeg",
      "bharara-rome-05.jpeg"
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
      "bharara-rome-women-01.jpeg",
      "bharara-rome-women-02.jpeg",
      "bharara-rome-women-03.jpeg",
      "bharara-rome-women-04.jpeg"
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
      "delilah-01.jpeg",
      "delilah-02.jpeg",
      "delilah-03.jpeg"
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
      "hayaati-florence-01.jpeg",
      "hayaati-florence-02.jpeg",
      "hayaati-florence-03.jpeg",
      "hayaati-florence-04.jpeg",
      "hayaati-florence-05.jpeg",
      "hayaati-florence-06.jpeg"
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
      "khamrah-01.jpeg",
      "khamrah-02.jpeg",
      "khamrah-03.jpeg",
      "khamrah-04.jpeg"
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
      "khamrah-qawah-01.jpeg",
      "khamrah-qawah-02.jpeg",
      "khamrah-qawah-03.jpeg"
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
      "kismet-men-01.jpeg",
      "kismet-men-02.jpeg",
      "kismet-men-03.jpeg",
      "kismet-men-04.jpeg",
      "kismet-men-05.jpeg",
      "kismet-men-06.jpeg",
      "kismet-men-07.jpeg",
      "kismet-men-08.jpeg"
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
      "kit-yara-and-yara-candy-01.jpeg",
      "kit-yara-and-yara-candy-02.jpeg",
      "kit-yara-and-yara-candy-03.jpeg",
      "kit-yara-and-yara-candy-04.jpeg",
      "kit-yara-and-yara-candy-05.jpeg"
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
      "liam-grey-01.jpeg",
      "liam-grey-02.jpeg",
      "liam-grey-03.jpeg",
      "liam-grey-04.jpeg"
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
      "malachite-01.jpeg",
      "malachite-02.jpeg",
      "malachite-03.jpeg",
      "malachite-04.jpeg",
      "malachite-05.jpeg"
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
      "mayar-cherry-01.jpeg",
      "mayar-cherry-02.jpeg",
      "mayar-cherry-03.jpeg",
      "mayar-cherry-04.jpeg",
      "mayar-cherry-05.jpeg"
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
      "musaman-white-01.jpeg",
      "musaman-white-02.jpeg",
      "musaman-white-03.jpeg",
      "musaman-white-04.jpeg",
      "musaman-white-05.jpeg"
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
      "now-black-01.jpeg",
      "now-black-02.jpeg",
      "now-black-03.jpeg",
      "now-black-04.jpeg",
      "now-black-05.jpeg",
      "now-black-06.jpeg"
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
      "odissey-dubau-chocolate-01.jpeg",
      "odissey-dubau-chocolate-02.jpeg",
      "odissey-dubau-chocolate-03.jpeg",
      "odissey-dubau-chocolate-04.jpeg",
      "odissey-dubau-chocolate-05.jpeg"
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
      "odyssey-mandarine-01.jpeg",
      "odyssey-mandarine-02.jpeg"
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
      "sakeena-01.jpeg",
      "sakeena-02.jpeg"
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
      "shadenn-gold-01.jpeg",
      "shadenn-gold-02.jpeg",
      "shadenn-gold-03.jpeg",
      "shadenn-gold-04.jpeg",
      "shadenn-gold-05.jpeg"
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
      "sutor-01.jpeg",
      "sutor-02.jpeg",
      "sutor-03.jpeg"
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
      "yara-01.jpeg",
      "yara-02.jpeg",
      "yara-03.jpeg",
      "yara-04.jpeg"
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
