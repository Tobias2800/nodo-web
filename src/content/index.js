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
  eyebrow: "Buenos Aires · Est. 2019",
  headline: ["INFRAESTRUCTURA", "CREATIVA."],
  subline: "Para artistas que construyen desde adentro.",
  cta: {
    primary: { label: "Explorar la red →", href: "#red-nodo" },
    secondary: { label: "Nuestros trabajos", href: "#trabajos" },
  },
  scrollLabel: "scroll",
};

export const manifesto = {
  id: "manifesto",
  lines: [
    "Nodo no es un estudio.",
    "Es la estructura detrás",
    "de tu sonido.",
  ],
  descriptor:
    "Una red curada de productores, directores creativos y especialistas en sonido — conectados bajo una sola infraestructura.",
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
  eyebrow: "Lo que construimos contigo",
  title: "Servicios",
  items: [
    {
      title: "Producción musical",
      description:
        "Desde la idea hasta el master. Trabajamos con productores especializados en el género de cada artista.",
      tags: ["Trap", "R&B", "Pop", "Drill", "Afrobeat", "Experimental"],
    },
    {
      title: "Dirección artística",
      description:
        "Concepto, estética y narrativa. Construimos la identidad visual y sonora del proyecto de forma integral.",
      tags: ["Concepto", "Imagen", "Narrativa"],
    },
    {
      title: "Mezcla y masterización",
      description:
        "Procesamiento profesional con ingenieros que entienden el sonido contemporáneo.",
      tags: ["Mixing", "Mastering", "Stem mixing"],
    },
    {
      title: "Identidad sonora",
      description:
        "Desarrollo del universo sonoro propio. Firmas, texturas y referencias que definen el sello del artista.",
      tags: ["Sound design", "Branding", "References"],
    },
    {
      title: "Visual creative direction",
      description:
        "Arte de tapa, sesiones fotográficas, video. La imagen como extensión del sonido.",
      tags: ["Cover art", "Video", "Fotografía"],
    },
  ],
};

export const redNodo = {
  id: "red-nodo",
  eyebrow: "Red Nodo — Productores",
  title: "Acceso a la red.",
  subtitle:
    "No es una lista. Es una estructura curada. Cada productor tiene una identidad, un enfoque y un proceso.",
  filters: ["Todos", "Trap / Drill", "R&B / Soul", "Pop / Electro", "Experimental"],
  producers: [
    {
      id: "prod-01",
      alias: "TANO",
      role: "Productor",
      location: "Buenos Aires",
      genres: ["Trap", "Drill"],
      filter: "Trap / Drill",
      mood: "Oscuro. Denso. Arquitectónico.",
      credits: "12 releases · 2M streams",
      available: true,
      image: null, // placeholder — replace with real image path
    },
    {
      id: "prod-02",
      alias: "MEVA",
      role: "Productora",
      location: "Córdoba",
      genres: ["R&B", "Soul", "Afrobeat"],
      filter: "R&B / Soul",
      mood: "Cálido. Rítmico. Emocional.",
      credits: "8 releases · 1.4M streams",
      available: true,
      image: null,
    },
    {
      id: "prod-03",
      alias: "CERO",
      role: "Productor",
      location: "Buenos Aires",
      genres: ["Pop", "Electro"],
      filter: "Pop / Electro",
      mood: "Limpio. Contemporáneo. Expansivo.",
      credits: "20 releases · 5.2M streams",
      available: false,
      image: null,
    },
    {
      id: "prod-04",
      alias: "FARO",
      role: "Productor",
      location: "Rosario",
      genres: ["Experimental", "Ambient"],
      filter: "Experimental",
      mood: "Extraño. Cinematic. Profundo.",
      credits: "6 releases · 800K streams",
      available: true,
      image: null,
    },
    {
      id: "prod-05",
      alias: "LUKE",
      role: "Productor",
      location: "Buenos Aires",
      genres: ["Trap", "Latin"],
      filter: "Trap / Drill",
      mood: "Intenso. Urgente. Callejero.",
      credits: "15 releases · 3.8M streams",
      available: true,
      image: null,
    },
    {
      id: "prod-06",
      alias: "SIA",
      role: "Productora",
      location: "Mendoza",
      genres: ["R&B", "Pop"],
      filter: "R&B / Soul",
      mood: "Suave. Íntimo. Sofisticado.",
      credits: "10 releases · 2.1M streams",
      available: true,
      image: null,
    },
  ],
};

export const works = {
  id: "trabajos",
  eyebrow: "Trabajos seleccionados",
  title: "Lo que construimos.",
  cta: { label: "Ver todos los trabajos →", href: "#" },
  items: [
    {
      id: "work-01",
      artist: "CORRO BEVERLY",
      title: "A cada mal",
      type: "Producción · Mezcla",
      year: "2024",
      genre: "Trap",
      image: null,
      spotify: "#",
    },
    {
      id: "work-02",
      artist: "MAEL",
      title: "Sombra de luz",
      type: "Dirección artística · Producción",
      year: "2024",
      genre: "R&B",
      image: null,
      spotify: "#",
    },
    {
      id: "work-03",
      artist: "VERO S.",
      title: "Marea",
      type: "Identidad sonora · Visual",
      year: "2023",
      genre: "Pop",
      image: null,
      spotify: "#",
    },
    {
      id: "work-04",
      artist: "DOBLE K",
      title: "Sistema",
      type: "Producción · Masterización",
      year: "2023",
      genre: "Experimental",
      image: null,
      spotify: "#",
    },
  ],
};

export const cta = {
  id: "contacto",
  eyebrow: "Trabajemos juntos",
  headline: "¿Listo para entrar?",
  subline:
    "La estructura ya está construida. Tu lugar está adentro.",
  primary: { label: "Escribinos", href: "mailto:hola@nodostudios.com" },
  secondary: { label: "Instagram", href: "https://instagram.com/nodostudios" },
};

export const footer = {
  logo: "NODO",
  tagline: "Infraestructura creativa para artistas.",
  location: "Buenos Aires · Argentina",
  copyright: "© Nodo Studios 2019–2025",
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
        { label: "hola@nodostudios.com", href: "mailto:hola@nodostudios.com" },
        { label: "Instagram", href: "https://instagram.com/nodostudios" },
        { label: "Spotify", href: "https://open.spotify.com" },
        { label: "SoundCloud", href: "https://soundcloud.com" },
      ],
    },
  ],
};
