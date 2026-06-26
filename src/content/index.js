// ─────────────────────────────────────────────────────────────────────────────
// NODO STUDIOS — Content Configuration
// Edit all copy, links, data and contact info here.
// Visual components import from this file — design system is untouched.
// ─────────────────────────────────────────────────────────────────────────────

export const meta = {
  title: "NODO — Infraestructura Creativa",
  description:
    "Red de productores, dirección artística y ecosistema musical para artistas que construyen desde adentro. Buenos Aires.",
  url: "https://nodostudios.com",
  ogImage: "/og-image.jpg",
};

export const nav = {
  logo: "NODO",
  links: [
    { label: "Manifiesto", href: "#manifesto" },
    { label: "Red Nodo", href: "#red-nodo" },
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos", href: "#trabajos" },
  ],
  cta: {
    label: "Contacto",
    href: "#contacto",
  },
};
export const hero = {
  eyebrow: "BUENOS AIRES · 2026",
  headline: ["RED CREATIVA", "PARA ARTISTAS."],
  subline:
    "Producción musical, sesiones y una red seleccionada de productores para construir sonido con dirección real.",
  cta: {
    primary: { label: "Explorar la red →", href: "#red-nodo" },
    secondary: { label: "Nuestros trabajos", href: "#trabajos" },
  },
};

export const manifesto = {
  id: "manifesto",
  lines: [
    "Nodo no es un estudio.",
    "Es la estructura detrás",
    "de tu sonido.",
  ],
  descriptor:
    "Una red de productores, ingenieros y especialistas en sonido trabajando sobre una misma visión creativa.",
};

export const pillars = [
  {
    index: "01",
    title: "Red de productores",
    description:
      "Acceso a una red curada de productores activos. Cada colaboración es intencional.",
    tags: ["Curada", "Activa"],
  },
  {
    index: "02",
    title: "Dirección creativa",
    description:
      "Del concepto a la entrega. Identidad, sonido y imagen alineados desde el primer día.",
    tags: ["Concepto", "Identidad"],
  },
  {
    index: "03",
    title: "Ecosistema musical",
    description:
      "Artistas, lanzamientos, productores. Todo dentro de una misma estructura viva.",
    tags: ["Artistas", "Releases"],
  },
];

export const services = {
  id: "servicios",

  eyebrow: "Infraestructura creativa para artistas que buscan desarrollar un sonido propio.",

  title: "Servicios NODO",

  items: [
    {
      title: "Producción completa",

      description:
        "Desde la idea hasta el master. Beat, producción, grabación, dirección sonora, mezcla y master en un mismo proceso.",

      tags: [
        "Beat",
        "Grabación",
        "Producción",
        "Mix",
        "Master",
      ],
    },

    {
      title: "Producción presencial",

      description:
        "Sesiones en estudio enfocadas en construir el sonido del proyecto en tiempo real junto al productor.",

      tags: [
        "Estudio",
        "Sesión",
        "Dirección",
        "Workflow",
      ],
    },

    {
      title: "Producción online",

      description:
        "Producción a distancia para artistas de cualquier parte del mundo. Revisiones, feedback y trabajo remoto internacional.",

      tags: [
        "Online",
        "Remoto",
        "Feedback",
        "Internacional",
      ],
    },

    {
      title: "Mix & master",

      description:
        "Mezcla y masterización profesional adaptada al sonido contemporáneo y a plataformas digitales.",

      tags: [
        "Mixing",
        "Mastering",
        "Stem mix",
        "Streaming",
      ],
    },

    {
      title: "Beats & catálogo",

      description:
        "Beats exclusivos y no exclusivos. Entrega en mp3, wav o stems según la licencia seleccionada.",

      tags: [
        "Beats",
        "Licencias",
        "WAV",
        "Stems",
      ],
    },
  ],
};
export const redNodo = {
  id: "red-nodo",

  eyebrow: "Red Nodo — Productores",

  title: "Acceso a la red.",

  subtitle:
    "Productores curados con identidad, criterio y sonido propio.",

  filters: [
  "Todos",
  "Trap",
  "Reggaetón",
  "Pop",
  "Hip Hop",
  "R&B",
  "Plug",
  "Dancehall",
  "Alternativo",
],

  producers: [
    {
  id: "deo-911",
  alias: "DEO 9:11",

  role: "Productor · Ingeniero",

  location: "Buenos Aires",

  instagram: "https://www.instagram.com/tadedolezor/",

  genres: ["Trap", "Reggaetón", "Pop"],

  filter: "Trap / Reggaetón / Pop",

  credits: "Producción completa · Online · Beats",

  services: [
    "Producción completa",
    "Producción online",
    "Beats",
  ],

  image: "/producers/deo911.jpeg",

  works: [
    {
      title: "DISAM — TOBI",
      type: "Producción",
      link: "https://www.youtube.com/watch?v=Ot6PJlz7QZE&list=RDOt6PJlz7QZE&start_radio=1",
    },

    {
      title: "A PRUEBA — TOBI",
      type: "Producción",
      link: "https://www.youtube.com/watch?v=Vhhl0dJHFco&list=RDVhhl0dJHFco&start_radio=1",
    },
  ],
},
    {
  id: "mozart",
  alias: "MOZART MUZIK",

  role: "Productor",

  location: "Buenos Aires",

  instagram: "https://www.instagram.com/mozartmuzik/",

  genres: ["Hip Hop", "Trap", "Reggaetón", "Pop"],

  filter: "Hip Hop / Trap / Reggaetón / Pop",

  credits: "Producción completa · Online · Beats",

  services: [
    "Producción completa",
    "Producción online",
    "Beats",
  ],

  image: "/producers/mozart.jpeg",

  works: [
    {
      title: "HIELO — ELADIO CARRION, JHAYCO",
      type: "Producción",
      link: "https://www.youtube.com/watch?v=a7QwwvwKdkg&list=RDa7QwwvwKdkg&start_radio=1",
    },

    {
      title: "FABULOSO — SECH, JUSTIN QUILES",
      type: "Producción",
      link: "https://www.youtube.com/watch?v=SfzCpA2Fbpw&list=RDSfzCpA2Fbpw&start_radio=1",
    },
  ],
},
    {
  id: "raz",
  alias: "RAZ",

  role: "Productor",

  location: "Lima, Perú",

  instagram: "https://www.instagram.com/raz.vsnry/",

  genres: ["Trap", "R&B", "Plug", "Dancehall"],

  filter: "Trap / R&B / Plug / Dancehall",

  credits: "Producción completa · Online · Beats",

  services: [
    "Producción completa",
    "Producción online",
    "Beats",
  ],

  image: "/producers/raz.jpeg",

  works: [
    {
      title: "CUANDO QUIERAS — RCMARCK, ZUHK",
      type: "Producción",
      link: "https://www.youtube.com/watch?si=m_arS6QVKPOzcxfO&v=fggSPE6KtmI&feature=youtu.be",
    },

    {
      title: "COMBINAMO — TOBI, ZUHK",
      type: "Producción",
      link: "https://www.youtube.com/watch?v=bS3fjIQYBLg&list=RDbS3fjIQYBLg&start_radio=1",
    },
  ],
},
   {
  id: "donnie-darko",
  alias: "DONNIE DARKO",

  role: "Productor",

  location: "Buenos Aires",

instagram: "https://www.instagram.com/donniedarko499/",

  genres: ["Trap", "Reggaetón"],

  filter: "Trap / Reggaetón",

  credits: "Producción completa · Online · Beats",

  services: [
    "Producción completa",
    "Producción online",
    "Beats",
  ],

  image: "/producers/donniedarko.jpeg",

  works: [
    {
      title: "QUE NOS PASÓ — BLAGH, SEVEN KAYNE, KHEA",
      type: "Producción",
      link: "https://www.youtube.com/watch?v=dKURKiDRSFE&list=RDdKURKiDRSFE&start_radio=1",
    },

    {
      title: "NI SE NOTA — LUCHO SSJ, C.R.O",
      type: "Producción",
      link: "https://www.youtube.com/watch?si=0s3OEtEzMxj2mDGE&v=hxydwVLQm4M&feature=youtu.be",
    },
  ],
},
    {
  id: "sinnombre",
  alias: "SINNOMBRE",

  role: "Productor · Ingeniero",

  location: "Buenos Aires",

  instagram: "https://www.instagram.com/sinnombre.299/",

  genres: ["Trap", "Pop", "Alternativo"],

  filter: "Trap / Pop / Alternativo",

  credits: "Producción completa · Online · Beats",

  services: [
    "Producción completa",
    "Producción online",
    "Beats",
  ],

  image: "/producers/sinnombre.jpeg",

  works: [
    {
      title: "CHANTAS — VALUTO",
      type: "Producción",
      link: "https://www.youtube.com/watch?v=G1c3z-lIcxo&list=RDG1c3z-lIcxo&start_radio=1",
    },

    {
      title: "IMANES — JUGO",
      type: "Producción",
      link: "https://www.youtube.com/watch?v=ZKDSzLe99Xs&list=RDZKDSzLe99Xs&start_radio=1",
    },
  ],
},
    {
  id: "oubial",
  alias: "OUBIAL",
  role: "Productor",
instagram: "https://www.instagram.com/oubi4l/",

  location: "Buenos Aires",
  genres: ["Trap", "Pop", "Alternativo"],
  filter: "Trap / Pop / Alternativo",
  credits: "Beats",
  services: ["Beats"],
  image: "/producers/oubial.jpeg",
  works: [
    {
      title: "PUEDE QUE NO — RAFAEL COCOA",
      type: "Beat",
      link: "https://open.spotify.com/intl-es/track/4sBXsWpOFT2JJGtKRDvJBS?si=gBRrSyEpQh-MlRadQ9wwMA&nd=1&dlsi=67dd0cece744405e",
    },
    {
      title: "ME QUEDÓ GRANDE TU LUGAR — VENTRIP",
      type: "Beat",
      link: "https://open.spotify.com/intl-es/track/2MucHf1xSn1DLxV71ylwJ5?si=aCLZavl6RdOrjRNWk_MOkg",
    },
  ],
},
  ],
};
export const works = {
  id: "trabajos",

  eyebrow: "Trabajos seleccionados",

  title: "Lo que construimos.",

  cta: {
    label: "Ver todos los trabajos →",
    href: "#contacto",
  },

  items: [
    {
      title: "METAMORFOSIS",
      artist: "TOBI",
      producer: "DEO 9:11",
      role: "Mix vocal",
      type: "Álbum",
      tracks: ["POPPIN", "CHYEAH", "SANGRE DOLEZOR", "ANTIMATERIA", "VIVIR ES UN ARTE"],
      image: "/works/metamorfosis.jpeg",
      link: "https://www.youtube.com/watch?v=JAyX7a-ZJY8&list=OLAK5uy_nXSa8Yo1bAUgt79bOGstKuODaJSECtFjg",
    },
    {
      title: "CERO GRADOS",
      artist: "TOBI",
      producer: "DEO 9:11",
      role: "Mix",
      type: "Álbum",
      tracks: ["SI TE SENTÍS SOLA FT. POISON KID", "FALSAS PROMESAS", "TEMPLO", "HENNESSY FT. KNAK"],
      image: "/works/cerogrados.jpeg",
      link: "https://www.youtube.com/watch?v=l7otS5T0ekM&list=OLAK5uy_maM2t7h8jrELoPylo0cYpGQxZJCXLLHxg",
    },
    {
      title: "NUBE 3",
      artist: "TOBI",
      producer: "DEO 9:11",
      role: "Mix",
      type: "Álbum",
      tracks: [],
      image: "/works/nube3.jpeg",
      link: "https://www.youtube.com/watch?v=YWWe-mv5hYY&list=OLAK5uy_lKFz4J4hiATJdx5ySfn4yhmO3KL0198Gc",
    },
    {
      title: "QUIEN VA A SER",
      artist: "TOBI",
      producer: "DEO 9:11",
      role: "Mix",
      type: "Single",
      tracks: [],
      image: "/works/quienvaaser.jpeg",
      link: "https://www.youtube.com/watch?v=sdvjrTLx4uM&list=OLAK5uy_lKM_3zbaAWHoGVkk7zMt7DgFmT4pzLCS8",
    },
  ],
};

export const cta = {
  id: "contacto",
  eyebrow: "Trabajemos juntos",
  headline: "¿Listo para entrar?",
  subline:
    "La estructura ya está construida. Tu lugar está adentro.",
  primary: { label: "Reserva tu sesion", href: "https://wa.me/5492944533345?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20grabar%20en%20NODO" },
  secondary: { label: "Instagram", href: "https://instagram.com/nodo_studios" },
};
export const footer = {
  logo: "NODO",
  tagline: "Infraestructura creativa para artistas.",
  location: "Buenos Aires · Argentina",
  copyright: "© Nodo Studios 2026",
  columns: [
    {
      heading: "Explorar",
      links: [
        { label: "Manifiesto", href: "#manifesto" },
        { label: "Red Nodo", href: "#red-nodo" },
        { label: "Servicios", href: "#servicios" },
        { label: "Trabajos", href: "#trabajos" },
      ],
    },
    {
      heading: "Contacto",
      links: [
        {
          label: "nodostudios00@gmail.com",
          href: "mailto:nodostudios00@gmail.com",
        },
        {
          label: "Instagram",
          href: "https://instagram.com/nodostudios",
        },
      ],
    },
  ],
};