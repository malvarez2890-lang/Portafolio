// Contenido del portafolio. Para agregar un proyecto, copia un bloque y sube sus imágenes a /img/<slug>/.
// "wide": imágenes (1, 2, ...) que ocupan todo el ancho en la galería. "n" es la cantidad de imágenes (01.jpg, 02.jpg, ...). Las descripciones son opcionales.
window.PROJECTS = [
  {
    slug: "haras-huilquilemu", title: "Vivienda Haras de Huilquilemu", type: "Habitacional · Vivienda", place: "Haras de Huilquilemu", year: "2026", n: 13,
    wide: [1, 10, 11, 12, 13],
    text: ["Vivienda de un nivel en el Haras de Huilquilemu, organizada en tres cuerpos de cubierta inclinada que se articulan en torno a terrazas y una piscina. Un volumen reúne el estacionamiento cubierto y los recintos de servicio; otro, la cocina, el comedor, el living y el dormitorio principal; y un tercero, girado en diagonal hacia el terreno, los dormitorios y un estar.", "Estructura de pino radiado con revestimiento vertical de WPC color negro, amplios paños vidriados hacia el jardín y la terraza, y el piso elevado sobre el terreno natural. Suma 173 m² útiles. Se presentan renders exteriores e interiores, axonométrica, planta, elevaciones, cortes, escantillón y cuadros de superficies.", "Proyecto realizado en conjunto con Natalia Herrera."]
  },
  { slug: "vivienda-ac", title: "Vivienda AC", type: "Habitacional · Vivienda", n: 16,
    text: ["Vivienda de un nivel revestida en tablas verticales oscuras y organizada en torno a un patio central con lucarna, que lleva luz natural y vegetación al interior. Un volumen superior de iluminación cenital corona la cubierta.", "Incluye planta, elevaciones, cortes, axonométrica y renders exteriores e interiores.", "Obra construida."]
  },
  { slug: "vivienda-nw", title: "Vivienda NW", type: "Habitacional · Vivienda", n: 11,
    text: ["Vivienda de dos niveles de volúmenes blancos y líneas puras: un cuerpo alto y otro bajo con pérgola de madera, que se abren al jardín mediante ventanas y una celosía vertical que marca el acceso.", "Incluye plantas, elevaciones, cortes, axonométrica y renders exteriores e interiores.", "Obra construida."]
  },
  {
    slug: "tiny-house", title: "Tiny House", type: "Habitacional · Tiny house", place: "Vilches, San Clemente", year: "2025", n: 9,
    wide: [1, 4, 5, 6, 7, 8, 9],
    text: ["Tiny house de 34 m² emplazada en una ladera en Vilches, San Clemente. Tres volúmenes de cubierta de una sola agua se articulan en ángulo y se elevan sobre pilares circulares de madera, apoyados en la pendiente, para abrir el living, el comedor y la cocina hacia un gran ventanal de marco de madera negra que enmarca el paisaje.", "El programa se resuelve en un solo nivel: living, comedor y cocina (18 m²), dormitorio y baño, con una terraza de acceso. Estructura de madera sobre entramado de vigas, cubierta de plancha de zinc aluminio y revestimiento vertical de madera. Se presentan imágenes del proyecto, vistas y axonométricas, planta, cubierta y entramado de piso, elevaciones, cortes y el detalle de ventanas y puertas.", "Proyecto realizado en conjunto con Natalia Herrera. Obra construida."]
  },
  { slug: "pataguas", title: "Vivienda en Las Pataguas", type: "Habitacional · Vivienda", place: "Las Pataguas", n: 9,
    text: ["Vivienda unifamiliar de un nivel en Las Pataguas, compuesta por volúmenes de techumbre a dos aguas que se enlazan en planta y se abren con grandes paños vidriados hacia el paisaje.", "Combina revestimientos de tonos cálidos con una cubierta oscura y un cobertizo para vehículos integrado al conjunto. Se documenta con emplazamiento, planta, elevaciones, cortes y axonométrica.", "Proyecto realizado en conjunto con Victor Luarte."]
  },
  { slug: "melipeuco", title: "Cabaña en Melipeuco", type: "Habitacional · Cabaña", place: "Melipeuco", n: 11,
    text: ["Cabaña de planta alargada en Melipeuco, emplazada entre árboles. Su cubierta de una sola agua, el revestimiento de madera y los ventanales corridos la abren al bosque, con una terraza cubierta a lo largo de la fachada.", "El proyecto incluye emplazamiento, planta, elevaciones, cortes, axonométrica estructural y renders exteriores e interiores.", "Proyecto realizado en conjunto con Ma. de la Luz Figueroa."]
  },
  { slug: "loanco", title: "Vivienda en Loanco", type: "Habitacional · Vivienda", place: "Loanco", n: 8,
    text: ["Vivienda de dos niveles en Loanco, formada por volúmenes de madera y paños oscuros que se desplazan entre sí. Hacia el acceso, una galería con pérgola y vegetación suaviza el encuentro con el jardín.", "Se presentan plantas de ambos niveles, elevaciones, cortes, axonométrica y renders exteriores e interiores.", "Proyecto realizado en conjunto con Victor Luarte. Obra construida."]
  },
  { slug: "quincho-ac", title: "Quincho AC", type: "Habitacional · Quincho", n: 5,
    text: ["Quincho de planta poligonal irregular que se adapta a un terreno en pendiente, bajo una cubierta liviana inclinada.", "Se documenta con planta, elevaciones, cortes, axonométrica explotada y croquis volumétricos."]
  },
  {
    slug: "oficina-408", title: "Oficina 408", type: "Regularización · Oficina", place: "Talca", year: "2026", n: 4,
    wide: [3, 4],
    text: ["Regularización de la planimetría de una oficina de 91 m² en el cuarto piso de un edificio en Talca. Se levantó el estado actual de los recintos: cinco oficinas, recepción, tres baños, kitchenette, bodega de archivos y bodega de aseo, con 76 m² útiles.", "Se presentan la planta de arquitectura, el cuadro de superficies por recinto, el emplazamiento dentro del piso, cortes e isométricas seccionadas. El mobiliario se muestra solo como referencia de uso."]
  },
  {
    slug: "centro-comercial", title: "Centro Comercial", type: "Equipamiento · Centro comercial", year: "2026", n: 11,
    wide: [1, 6, 7, 8, 9, 10, 11],
    text: ["Centro comercial de un nivel organizado en torno a un patio interior de mesas, con ocho locales distribuidos en tres de sus lados, baños y estacionamientos, además de accesos peatonal y vehicular. Una cubierta continua de líneas quebradas envuelve el conjunto, y celosías verticales marcan los accesos. Suma 395 m² útiles en 1.142 m² brutos.", "Proyecto de arquitectura de Spreaad Arquitectos, a cargo de la arquitecta Blanca Zúñiga. Modelación BIM: Matías Álvarez Cifuentes. Se presentan axonométricas, plantas, cubierta, elevaciones, cortes, vistas 3D, detalle de ventanas y puertas, planta de cielo reflejado y plantas eléctricas."]
  },
  {
    slug: "confluencia",
    title: "Confluencia en Potencia",
    type: "Proyecto de título · Espacio público",
    place: "Corralones, San Clemente, Región del Maule",
    year: "2019–2020",
    n: 9,
    text: [
      "Obra de la Escuela de Arquitectura de la Universidad de Talca, ubicada en el villorrio El Olivo, en Corralones, formado hace más de 30 años por un grupo de personas que vivían alrededor de la zona.",
      "El proyecto nace de la propuesta de poner en valor el espacio público de la comunidad, que se encontraba en condiciones inhóspitas: una cancha autoconstruida en mal estado, usada como basural y como vía alternativa para vehículos.",
      "La obra se inserta en el espacio poniendo en valor no solo el espacio público, sino también el valle y el paisaje, con carácter de conector visual. Extraer la tierra del lugar y moldear el terreno en distintas alturas fortalece el espacio público: el uso se centra en la persona que recorre caminando o en bicicleta.",
      "Un recorrido casi sin fin —subir, bajar, bajar más aún y volver a subir— es como confluyen las personas."
    ]
  }
];

window.PROFILE = {
  intro: "Arquitecto titulado de la Universidad de Talca con más de seis años de experiencia en proyectos de arquitectura, metodología BIM y documentación técnica. Trabajo en vivienda, edificación y equipamiento, y hoy me desempeño como arquitecto BIM en el Hospital Regional de Talca.",
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
