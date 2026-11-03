'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { VideoReel } from '@/data/mediaGallery';

interface CleanVideoCardProps {
  video: VideoReel;
}

export function CleanVideoCard({ video }: CleanVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      onClick={togglePlay}
      className="group relative aspect-[9/15] w-full max-w-[340px] cursor-pointer overflow-hidden rounded-[2rem] bg-slate-900 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-pink-100/80"
    >
      {/* Vídeo Nativo */}
      <video
        ref={videoRef}
        src={video.videoSrc}
        poster={video.thumbnail}
        playsInline
        muted={isMuted}
        loop
        onEnded={() => setIsPlaying(false)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Degradê sutil para legibilidade dos textos sem cobrir a imagem */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

      {/* Badge de Categoria no topo */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-pink-600 shadow-xs">
        <Sparkles className="h-3 w-3 text-pink-500" />
        <span>{video.category}</span>
      </div>

      {/* Botão de Som no topo à direita */}
      {isPlaying && (
        <button
          onClick={toggleSound}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/40 backdrop-blur-md p-2 text-white hover:bg-black/60 transition-colors"
          aria-label="Alternar áudio"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}

      {/* Botão Central de Play / Pause */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isPlaying ? 'opacity-0 group-hover:opacity-90' : 'opacity-100'
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/90 text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
          {isPlaying ? (
            <Pause className="h-6 w-6 fill-current" />
          ) : (
            <Play className="h-6 w-6 fill-current ml-1" />
          )}
        </div>
      </div>

      {/* Informações na base do Card */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
        <h4 className="text-base font-bold leading-snug drop-shadow-sm">
          {video.title}
        </h4>
        <span className="mt-1.5 block text-[11px] text-pink-200 font-medium">
          {isPlaying ? 'Toque para pausar' : 'Toque para assistir'}
        </span>
      </div>
    </div>
  );
}