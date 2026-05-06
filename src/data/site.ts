export const site = {
  name: "Transporte Gioia e Hijos SRL",
  shortName: "Transporte Gioia",
  tagline: "Mudanzas y guardamuebles con profesionalismo, puntualidad y seguridad.",
  url: "https://transportegioiaehijos.com.ar",
  logoPath: "/tg2.avif",
  phoneDisplay: "11 5499-8345",
  phoneIntl: "+5491154998345",
  whatsappNumber: "5491154998345",
  whatsappMessage:
    "Hola Transporte Gioia, quisiera una cotización para una mudanza.",
  email: "transportegioiaehijos@gmail.com",
  address: {
    street: "Mendoza 2765",
    city: "Lanús",
    region: "Buenos Aires",
    country: "Argentina",
    postalCode: "1824",
  },
  social: {
    instagram: "https://instagram.com/transportegioia.ehijos",
    instagramHandle: "@transportegioia.ehijos",
  },
  hours: "Lunes a Sábado · 8:00 a 20:00",
};

export const whatsappLink = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
