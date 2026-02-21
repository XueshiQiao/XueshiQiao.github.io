import { useState } from 'react';

export default function ScreenshotGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) return null;

  const base = import.meta.env.BASE_URL;
  const getImgUrl = (img: string) => img.startsWith('http') ? img : base + img.slice(1);

  return (
    <div>
      <div className="glass-card rounded-2xl overflow-hidden mb-4">
        <img
          src={getImgUrl(images[selected])}
          alt={`Screenshot ${selected + 1}`}
          className="w-full h-auto"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setSelected(i)}
              className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                i === selected
                  ? 'border-accent-blue'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={getImgUrl(img)}
                alt={`Thumbnail ${i + 1}`}
                className="w-24 h-16 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
