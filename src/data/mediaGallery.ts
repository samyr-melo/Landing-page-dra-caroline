export interface VideoReel {
  id: string;
  title: string;
  category: string;
  // Coloque o poster/print do vídeo na pasta public/videos/ ou use link direto
  thumbnail: string;
  // Link direto do arquivo .mp4 (armazenado em public/videos/ ou Cloudinary/Supabase)
  videoSrc: string;
}

export const clinicReels: VideoReel[] = [
  {
    id: '1',
    category: 'Sedação Consciente',
    title: '3 situações em que indicamos a sedação consciente',
    thumbnail: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80',
    videoSrc: 'https://www.instagram.com/reel/De634glh4tT/', // Substitua pelo mp4 real
  },
  {
    id: '2',
    category: 'Acolhimento TEA & PCD',
    title: 'Ser dentista é transformar vidas com afeto',
    thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', // Substitua pelo mp4 real
  },
  {
    id: '3',
    category: 'Odontopediatria',
    title: 'Como realizamos a consulta de adaptação lúdica',
    thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80',
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', // Substitua pelo mp4 real
  },
];