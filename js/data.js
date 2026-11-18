// Contenido del portafolio. Para agregar un proyecto, copia un bloque y sube sus imágenes a /img/<slug>/.
// "n" es la cantidad de imágenes (01.jpg, 02.jpg, ...). Las descripciones son opcionales.
window.PROJECTS = [
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
  },
  { slug: "pataguas", title: "Vivienda en Las Pataguas", type: "Habitacional · Vivienda", place: "Las Pataguas", n: 9 },
  { slug: "melipeuco", title: "Cabaña en Melipeuco", type: "Habitacional · Cabaña", place: "Melipeuco", n: 11 },
  { slug: "loanco", title: "Vivienda en Loanco", type: "Habitacional · Vivienda", place: "Loanco", n: 8 },
  { slug: "vivienda-nw", title: "Vivienda NW", type: "Habitacional · Vivienda", n: 11 },
  { slug: "quincho-ac", title: "Quincho AC", type: "Habitacional · Quincho", n: 5 },
  { slug: "vivienda-ac", title: "Vivienda AC", type: "Habitacional · Vivienda", n: 16 },
  { slug: "cubierta-cancha", title: "Cubierta Cancha", type: "Equipamiento", place: "Proyecto con Mutar Estudio", n: 8 }
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
  languages: "Español nativo · Inglés y italiano básico"
};

window.CONTACT = {
  email: "malvarez.2890@gmail.com",
  phone: "+56 9 6494 9455",
  phoneHref: "+56964949455",
  linkedin: "https://www.linkedin.com/in/matias-alvarez-arq",
  location: "Talca, Región del Maule, Chile"
};
