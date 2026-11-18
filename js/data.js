// Versión del contenido: súbela (ej. "2") cada vez que reemplaces imágenes con el mismo nombre, para que los navegadores no muestren copias antiguas.
window.SITE_VERSION = "5";
// Contenido del portafolio. Para agregar un proyecto, copia un bloque y sube sus imágenes a /img/<slug>/.
// "wide": imágenes (1, 2, ...) que ocupan todo el ancho en la galería. "n" es la cantidad de imágenes (01.jpg, 02.jpg, ...). Las descripciones son opcionales.
window.PROJECTS = [
  {
    slug: "haras-huilquilemu", title: "Vivienda Haras de Huilquilemu", type: "Habitacional · Vivienda", place: "Haras de Huilquilemu", year: "2026", n: 13,
    // rows: filas de la galería (números de imagen). ar: proporción ancho/alto de cada imagen, para alinear las alturas de cada fila.
    rows: [[1], [2, 3], [4, 5], [6, 7], [8, 9], [10], [11], [12], [13]],
    ar: { 1: 1.339, 2: 1.339, 3: 1.25, 4: 1.25, 5: 1.25, 6: 1.339, 7: 1.25, 8: 1.339, 9: 0.8, 10: 1.41, 11: 1.41, 12: 1.41, 13: 1.41 },
    text: ["Vivienda de un nivel en el Haras de Huilquilemu, organizada en tres cuerpos de cubierta inclinada que se articulan en torno a terrazas y una piscina. Un volumen reúne el estacionamiento cubierto y los recintos de servicio; otro, la cocina, el comedor, el living y el dormitorio principal; y un tercero, girado en diagonal hacia el terreno, los dormitorios y un estar.", "Estructura de acero y panel SIP, con revestimiento vertical de WPC color negro, amplios paños vidriados hacia el jardín y la terraza, y el piso elevado sobre el terreno natural. Suma 173 m² útiles. Se presentan renders exteriores e interiores, axonométrica, planta, elevaciones, cortes, escantillón y cuadros de superficies.", "Proyecto realizado en conjunto con Natalia Herrera."]
  },
  { slug: "vivienda-ac", title: "Vivienda AC", type: "Habitacional · Vivienda", n: 21,
    rows: [[1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13], [14, 15], [16, 17], [18], [19], [20], [21]],
    ar: { 1: 1.778, 2: 1.778, 3: 1.778, 4: 1.778, 5: 1.778, 6: 1.778, 7: 1.778, 8: 1.778, 9: 1.778, 10: 1.778, 11: 1.778, 12: 1.778, 13: 1.778, 14: 1.778, 15: 1.778, 16: 1.778, 17: 1.778 },
    text: ["Vivienda de un nivel revestida en tablas verticales oscuras y organizada en torno a un patio central con lucarna, que lleva luz natural y vegetación al interior. Un volumen superior de iluminación cenital corona la cubierta.", "Incluye planta, elevaciones, cortes, axonométrica y renders exteriores e interiores.", "Estructura de acero y panel SIP.", "Obra construida."]
  },
  { slug: "vivienda-nw", title: "Vivienda NW", type: "Habitacional · Vivienda", n: 11,
    rows: [[1], [2, 3], [4, 5], [6, 7], [8, 9], [10, 11]],
    ar: {1: 1.777, 2: 1.789, 3: 1.772, 4: 1.789, 5: 1.415, 6: 1.388, 7: 1.569, 8: 1.038, 9: 1.358, 10: 1.282, 11: 1.291},
    text: ["Vivienda de dos niveles de volúmenes blancos y líneas puras: un cuerpo alto y otro bajo con pérgola de madera, que se abren al jardín mediante ventanas y una celosía vertical que marca el acceso.", "Incluye plantas, elevaciones, cortes, axonométrica y renders exteriores e interiores.", "Estructura de albañilería.", "Obra construida."]
  },
  {
    slug: "tiny-house", title: "Tiny House", type: "Habitacional · Tiny house", place: "Vilches, San Clemente", year: "2025", n: 9,
    rows: [[1], [2, 3], [4], [5], [6], [7], [8], [9]],
    ar: {1: 1.5, 2: 1.5, 3: 0.667, 4: 1.674, 5: 1.674, 6: 1.674, 7: 1.674, 8: 1.674, 9: 1.674},
    text: ["Tiny house de 34 m² emplazada en una ladera en Vilches, San Clemente. Tres volúmenes de cubierta de una sola agua se articulan en ángulo y se elevan sobre pilares circulares de madera, apoyados en la pendiente, para abrir el living, el comedor y la cocina hacia un gran ventanal de marco de madera negra que enmarca el paisaje.", "El programa se resuelve en un solo nivel: living, comedor y cocina (18 m²), dormitorio y baño, con una terraza de acceso. Estructura de tabiquería de madera sobre pilares de madera, con entramado de vigas, cubierta de plancha de zinc aluminio y revestimiento vertical de madera. Se presentan imágenes del proyecto, vistas y axonométricas, planta, cubierta y entramado de piso, elevaciones, cortes y el detalle de ventanas y puertas.", "Proyecto realizado en conjunto con Natalia Herrera. Obra construida."]
  },
  { slug: "pataguas", title: "Vivienda en Las Pataguas", type: "Habitacional · Vivienda", place: "Las Pataguas", n: 9,
    rows: [[1], [2, 3], [4, 5], [6], [7, 8], [9]],
    ar: {1: 1.812, 2: 1.814, 3: 0.997, 4: 1.549, 5: 1.383, 6: 1.449, 7: 1.578, 8: 0.914, 9: 1.639},
    text: ["Vivienda unifamiliar de un nivel en Las Pataguas, compuesta por volúmenes de techumbre a dos aguas que se enlazan en planta y se abren con grandes paños vidriados hacia el paisaje.", "Combina revestimientos de tonos cálidos con una cubierta oscura y un cobertizo para vehículos integrado al conjunto. Se documenta con emplazamiento, planta, elevaciones, cortes y axonométrica.", "Estructura de acero y metalcón.", "Proyecto realizado en conjunto con Victor Luarte."]
  },
  { slug: "melipeuco", title: "Cabaña en Melipeuco", type: "Habitacional · Cabaña", place: "Melipeuco", n: 11,
    rows: [[1], [2, 3], [4, 5], [6, 7], [8], [9, 10], [11]],
    ar: {1: 1.78, 2: 1.809, 3: 1.781, 4: 1.804, 5: 1.338, 6: 0.65, 7: 2.197, 8: 1.519, 9: 1.085, 10: 1.009, 11: 2.066},
    text: ["Cabaña de planta alargada en Melipeuco, emplazada entre árboles. Su cubierta de una sola agua, el revestimiento de madera y los ventanales corridos la abren al bosque, con una terraza cubierta a lo largo de la fachada.", "El proyecto incluye emplazamiento, planta, elevaciones, cortes, axonométrica estructural y renders exteriores e interiores.", "Estructura de tabiquería de madera.", "Proyecto realizado en conjunto con Ma. de la Luz Figueroa."]
  },
  { slug: "loanco", title: "Vivienda en Loanco", type: "Habitacional · Vivienda", place: "Loanco", n: 8,
    rows: [[1], [2, 3], [4], [5, 6], [7, 8]],
    ar: {1: 1.558, 2: 1.762, 3: 1.791, 4: 1.549, 5: 0.939, 6: 0.946, 7: 1.46, 8: 0.743},
    text: ["Vivienda de dos niveles en Loanco, formada por volúmenes de madera y paños oscuros que se desplazan entre sí. Hacia el acceso, una galería con pérgola y vegetación suaviza el encuentro con el jardín.", "Se presentan plantas de ambos niveles, elevaciones, cortes, axonométrica y renders exteriores e interiores.", "Estructura de acero y metalcón.", "Proyecto realizado en conjunto con Victor Luarte. Obra construida."]
  },
  { slug: "quincho-ac", title: "Quincho AC", type: "Habitacional · Quincho", n: 5,
    rows: [[1, 2], [3], [4, 5]],
    ar: {1: 1.182, 2: 0.932, 3: 1.576, 4: 1.168, 5: 1.083},
    text: ["Quincho de planta poligonal irregular que se adapta a un terreno en pendiente, bajo una cubierta liviana inclinada.", "Se documenta con planta, elevaciones, cortes, axonométrica explotada y croquis volumétricos."]
  },
  {
    slug: "oficina-408", group: "planimetria", title: "Oficina 408", type: "Regularización · Oficina", place: "Talca", year: "2026", n: 4,
    rows: [[1, 2], [3], [4]],
    ar: {1: 1.57, 2: 1.532, 3: 1.415, 4: 1.415},
    text: ["Regularización de la planimetría de una oficina de 91 m² en el cuarto piso de un edificio en Talca. Se levantó el estado actual de los recintos: cinco oficinas, recepción, tres baños, kitchenette, bodega de archivos y bodega de aseo, con 76 m² útiles.", "Se presentan la planta de arquitectura, el cuadro de superficies por recinto, el emplazamiento dentro del piso, cortes e isométricas seccionadas. El mobiliario se muestra solo como referencia de uso."]
  },
  {
    slug: "consulta-kinesiologica", group: "planimetria", title: "Consulta Kinesiológica", type: "Regularización · Salud", year: "2026", n: 4,
    rows: [[1], [2, 3], [4]],
    ar: {1: 4.558, 2: 1.471, 3: 1.176, 4: 1.667},
    text: ["Regularización de la planimetría de una consulta kinesiológica de 94 m², realizada para su presentación ante la autoridad sanitaria (MINSAL) en la tramitación de patentes de funcionamiento.", "Se levantó el estado actual de los recintos: sala de espera, recepción, cuatro boxes con camilla, gimnasio, área limpia y sucia, comedor, circulación y un baño universal accesible con rampa de 8 % de pendiente. Se presentan la planta de arquitectura, el cuadro de superficies, una isométrica seccionada y el detalle del baño universal."]
  },
  {
    slug: "centro-comercial", group: "planimetria", title: "Centro Comercial", type: "Equipamiento · Centro comercial", year: "2026", n: 11,
    rows: [[1], [2, 3], [4, 5], [6], [7], [8], [9], [10], [11]],
    ar: {1: 1.631, 2: 0.777, 3: 0.819, 4: 1.447, 5: 0.413, 6: 1.413, 7: 1.413, 8: 1.413, 9: 1.413, 10: 1.413, 11: 1.413},
    text: ["Centro comercial de un nivel organizado en torno a un patio interior de mesas, con ocho locales distribuidos en tres de sus lados, baños y estacionamientos, además de accesos peatonal y vehicular. Una cubierta continua de líneas quebradas envuelve el conjunto, y celosías verticales marcan los accesos. Suma 395 m² útiles en 1.142 m² brutos.", "Proyecto de arquitectura de Spreaad Arquitectos, a cargo de la arquitecta Blanca Zúñiga. Modelación BIM: Matías Álvarez Cifuentes. Se presentan axonométricas, plantas, cubierta, elevaciones, cortes, vistas 3D, detalle de ventanas y puertas, planta de cielo reflejado y plantas eléctricas."]
  },
  {
    slug: "confluencia",
    title: "Confluencia en Potencia",
    type: "Proyecto de título · Espacio público",
    place: "Corralones, San Clemente, Región del Maule",
    year: "2019–2020",
    n: 9,
    rows: [[1, 2], [3, 4], [5, 6], [7], [8, 9]],
    ar: {1: 1.78, 2: 1.334, 3: 1.453, 4: 1.486, 5: 1.396, 6: 1.383, 7: 1.434, 8: 1.308, 9: 1.318},
    text: [
      "Obra de la Escuela de Arquitectura de la Universidad de Talca, ubicada en el villorrio El Olivo, en Corralones, formado hace más de 30 años por un grupo de personas que vivían alrededor de la zona.",
      "El proyecto nace de la propuesta de poner en valor el espacio público de la comunidad, que se encontraba en condiciones inhóspitas: una cancha autoconstruida en mal estado, usada como basural y como vía alternativa para vehículos.",
      "La obra se inserta en el espacio poniendo en valor no solo el espacio público, sino también el valle y el paisaje, con carácter de conector visual. Extraer la tierra del lugar y moldear el terreno en distintas alturas fortalece el espacio público: el uso se centra en la persona que recorre caminando o en bicicleta.",
      "Un recorrido casi sin fin —subir, bajar, bajar más aún y volver a subir— es como confluyen las personas."
    ]
  }
];

window.PROFILE = {
  intro: "Arquitecto titulado de la Universidad de Talca, con más de seis años de experiencia en vivienda, regularizaciones y documentación técnica. Trabajo con metodología BIM, haciendo proyectos propios, regularizaciones y modelando proyectos de otros arquitectos. Hoy me desempeño como arquitecto BIM en el Hospital Regional de Talca.",
  experience: [
    ["2025 — Actualidad", "Arquitecto BIM", "Hospital Regional de Talca", "Modelado en Revit de la infraestructura interna del hospital y actualización de la planimetría oficial."],
    ["2023 — 2025", "Arquitecto", "La Provincia SpA, Talca", "Proyectos de vivienda, edificios y equipamiento; regularizaciones y tramitación municipal."],
    ["2023", "Arquitecto revisor (reemplazo)", "SERVIU Región del Maule", "Revisión técnica y normativa de proyectos DS10 y DS19."],
    ["2022", "Arquitecto", "InteredilGroup, Roma", "Proyectos de rehabilitación bajo el Superbonus 110%: eficiencia energética y reducción del riesgo sísmico."],
    ["2020 — 2021", "Arquitecto", "Mauricio Farías Arquitectura, Curicó", "Subdivisión predial, vivienda y equipamiento."]
  ],
  education: [
    ["2025", "Diplomado BIM Arquitectura", "Pontificia Universidad Católica de Chile"],
    ["2020–21", "Diploma en Gestión en Política Habitacional", "Universidad de Chile, FAU"],
    ["2013–20", "Arquitecto, Licenciado en Arquitectura", "Universidad de Talca"]
  ],
  skills: [
    ["BIM y CAD", "Revit, AutoCAD, Edificius, SketchUp"],
    ["Visualización", "D5 Render, Lumion, LayOut"],
    ["Diseño gráfico", "Photoshop, Illustrator, InDesign"],
    ["Otros", "QGIS, Premiere Pro, IA aplicada a BIM"]
  ],
  languages: "Español nativo · Inglés Medio e italiano básico"
};

window.CONTACT = {
  email: "malvarez.2890@gmail.com",
  phone: "+56 9 6494 9455",
  phoneHref: "+56964949455",
  linkedin: "https://www.linkedin.com/in/matias-alvarez-arq",
  location: "Talca, Región del Maule, Chile",
  whatsapp: "https://wa.me/56964949455",
  instagram: "https://www.instagram.com/matias_arq_"
};

// Sección "BIM + IA": trabajos del curso y trabajos personales (enlaces externos).
window.BIM = {
  intro: "Mi trabajo con metodología BIM e inteligencia artificial: la entrega final del workshop BIM + Claude IA y herramientas propias para trabajar con modelos IFC.",
  course: {
    name: "Workshop BIM + Claude IA",
    org: "The BIM Co-Work",
    meta: "40 h · Ago – Nov 2026",
    text: "Curso sobre el uso de IA en el flujo de trabajo BIM: prompts, especificaciones técnicas, revisión normativa, análisis de planos y MCP.",
    works: [
      {
        title: "Pausa Maule — Entrega final",
        sub: "Habitáculo para ciclistas · Talca, Región del Maule",
        text: "Punto de descanso para ciclistas de ruta: un volumen con patio central bajo una retícula de nueve cuadrantes. Incluye concepto, planimetría, materialidad, documentación técnica (PEB, NDI, nomenclatura IFC), proveedores y el modelo Revit con cantidades y visor IFC.",
        img: "img/bim/pausa-maule.jpg",
        url: "https://malvarez2890-lang.github.io/pausa-maule/"
      }
    ]
  },
  personal: [
    {
      title: "Visor IFC en línea",
      sub: "Herramienta gratuita",
      text: "Abre un archivo IFC y lo explora en 3D: giros, zoom, cortes y medición de distancias; activa o desactiva capas y consulta las propiedades de cada pieza. Todo se procesa en tu equipo, el archivo no sale del navegador.",
      img: "img/bim/visor-ifc.jpg",
      url: "https://malvarez2890-lang.github.io/visor-ifc/"
    }
  ]
};

// Servicio de dibujo planimétrico y modelación BIM (proyectos para otros arquitectos y regularizaciones).
window.SERVICE = {
  title: "Planimetría BIM",
  lead: "Dibujo planimétrico y modelación BIM como servicio: levantamientos, regularizaciones y planimetría de proyectos de otros arquitectos.",
  items: ["Modelación BIM en Revit", "Planimetría de arquitectura: plantas, elevaciones y cortes", "Cuadros de superficie y láminas de presentación", "Regularizaciones y levantamiento de lo existente"]
};
