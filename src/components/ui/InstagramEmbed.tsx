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
    <div className="flex w-full min-w-0 justify-center bg-white">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          margin: 0,
          maxWidth: '540px',
          minWidth: 0,
          padding: 0,
          width: '100%',
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