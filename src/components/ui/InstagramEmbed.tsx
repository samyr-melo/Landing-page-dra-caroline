'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface InstagramEmbedProps {
  postUrl: string; // Ex: 'https://www.instagram.com/reel/C_xyz123/' ou '/p/C_xyz123/'
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export function InstagramEmbed({ postUrl }: InstagramEmbedProps) {
  useEffect(() => {
    // Se o script do Instagram já estiver carregado na janela, processa os novos embeds
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  return (
    <div className="flex justify-center w-full overflow-hidden rounded-3xl border border-pink-100 bg-white p-2 shadow-xs">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          margin: '1px',
          maxWidth: '540px',
          minWidth: '300px',
          padding: 0,
          width: '99.375%',
        }}
      />
      {/* Script oficial do Instagram carregado de forma assíncrona e inteligente */}
      <Script
        src="//www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm?.Embeds) {
            window.instgrm.Embeds.process();
          }
        }}
      />
    </div>
  );
}