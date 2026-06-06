// Tüm görseller Wikimedia Commons'tan — Public Domain eserler
export const artworkImages: Record<string, { src: string; alt: string; credit: string }[]> = {
  "leonardo-da-vinci": [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      alt: "Mona Lisa",
      credit: "Mona Lisa (1503–1519) — Louvre Müzesi, Paris",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28Louvre%29.jpg/600px-Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28Louvre%29.jpg",
      alt: "Kayalıklardaki Bakire",
      credit: "Kayalıklardaki Bakire (1483–1486) — Louvre Müzesi",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Vitruvian_Man.jpg/600px-The_Vitruvian_Man.jpg",
      alt: "Vitruvius Adamı",
      credit: "Vitruvius Adamı (~1490) — Venedik Accademia",
    },
  ],
  "vincent-van-gogh": [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      alt: "Yıldızlı Gece",
      credit: "Yıldızlı Gece (1889) — MoMA, New York",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_van_Gogh_-_Sunflowers_%281888%2C_National_Gallery_London%29.jpg/800px-Vincent_van_Gogh_-_Sunflowers_%281888%2C_National_Gallery_London%29.jpg",
      alt: "Ayçiçekleri",
      credit: "Ayçiçekleri (1888) — National Gallery, Londra",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/600px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg",
      alt: "Öz Porttre",
      credit: "Öz Portre (1889) — Musée d'Orsay, Paris",
    },
  ],
  "pablo-picasso": [
    {
      src: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
      alt: "Guernica",
      credit: "Guernica (1937) — Reina Sofía Müzesi, Madrid",
    },
  ],
  "claude-monet": [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1200px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
      alt: "Nilüferler",
      credit: "Nilüferler (1906) — Art Institute of Chicago",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1200px-Monet_-_Impression%2C_Sunrise.jpg",
      alt: "Le Havre Limanından İzlenim",
      credit: "İzlenim: Gündoğumu (1872) — Musée Marmottan, Paris",
    },
  ],
  rembrandt: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/De_Nachtwacht_Rijksmuseum.jpg/1200px-De_Nachtwacht_Rijksmuseum.jpg",
      alt: "Gece Nöbeti",
      credit: "Gece Nöbeti (1642) — Rijksmuseum, Amsterdam",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
      alt: "Öz Portre",
      credit: "Öz Portre (1659) — National Gallery of Art, Washington",
    },
  ],
  michelangelo: [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1200px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
      alt: "Adem'in Yaratılışı",
      credit: "Adem'in Yaratılışı (1512) — Sistine Şapeli, Vatikan",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Michelangelo%27s_David_-_right_view_2.jpg/600px-Michelangelo%27s_David_-_right_view_2.jpg",
      alt: "Davut",
      credit: "Davut (1501–1504) — Accademia, Floransa",
    },
  ],
  "osman-hamdi-bey": [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Osman_Hamdi_Bey_-_The_Tortoise_Trainer.jpg/800px-Osman_Hamdi_Bey_-_The_Tortoise_Trainer.jpg",
      alt: "Kaplumbağa Terbiyecisi",
      credit: "Kaplumbağa Terbiyecisi (1906) — Pera Müzesi, İstanbul",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Osman_Hamdi_Bey_-_An_Arms_Dealer.jpg/800px-Osman_Hamdi_Bey_-_An_Arms_Dealer.jpg",
      alt: "Silah Tüccarı",
      credit: "Silah Tüccarı (1908) — Pera Müzesi, İstanbul",
    },
  ],
};

// Sanat Akımları görselleri
export const movementImages: Record<string, { src: string; alt: string; credit: string }> = {
  "yuksek-ronesans": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1200px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    alt: "Atina Okulu",
    credit: "Atina Okulu — Raphael (1511), Vatikan",
  },
  barok: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/De_Nachtwacht_Rijksmuseum.jpg/1200px-De_Nachtwacht_Rijksmuseum.jpg",
    alt: "Gece Nöbeti",
    credit: "Gece Nöbeti — Rembrandt (1642), Rijksmuseum",
  },
  empresyonizm: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1200px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    alt: "Nilüferler",
    credit: "Nilüferler — Monet (1906), Art Institute of Chicago",
  },
  ekspresyonizm: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/800px-The_Scream.jpg",
    alt: "Çığlık",
    credit: "Çığlık — Edvard Munch (1893), Ulusal Galeri, Oslo",
  },
};

// Sinema görselleri — filmlerden değil, yönetmen fotoğrafları veya tematik görseller kullanılmaz
// Bunun yerine SVG illüstrasyonlar tercih edildi

// Geleneksel sanatlar için Wikimedia
export const gelenekselImages: Record<string, { src: string; alt: string; credit: string }> = {
  hat: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bismillah_-_Topkapi.jpg/1200px-Bismillah_-_Topkapi.jpg",
    alt: "Besmele Hat Örneği",
    credit: "Besmele — Osmanlı Hat Sanatı, Topkapı Sarayı",
  },
  tezhip: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tezhib_%28Islamic_Art%29.jpg/800px-Tezhib_%28Islamic_Art%29.jpg",
    alt: "Tezhip Örneği",
    credit: "Klasik Osmanlı Tezhip Örneği",
  },
  minyatur: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Levni_-_Topkapi_Palace_Museum.jpg/800px-Levni_-_Topkapi_Palace_Museum.jpg",
    alt: "Osmanlı Minyatürü",
    credit: "Levni Minyatürü — 18. yy., Topkapı Sarayı",
  },
  ebru: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ebru_art.jpg/800px-Ebru_art.jpg",
    alt: "Ebru Sanatı",
    credit: "Türk Ebru Sanatı Örneği",
  },
  cini: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Iznik_tile_BM.jpg/800px-Iznik_tile_BM.jpg",
    alt: "İznik Çinisi",
    credit: "İznik Çinisi — 16. yy., British Museum",
  },
};
