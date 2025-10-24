'use client';

import Image from "next/image";
import { useState } from "react";

interface Photo {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: number;
  showTitles?: boolean;
  className?: string;
}

export default function PhotoGallery({ 
  photos, 
  columns = 3, 
  showTitles = true, 
  className = "" 
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <>
      <div className={`grid gap-6 ${gridCols[columns as keyof typeof gridCols]} ${className}`}>
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="relative overflow-hidden rounded-lg bg-slate-100 aspect-square">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {showTitles && (photo.title || photo.description) && (
              <div className="mt-3">
                {photo.title && (
                  <h4 className="font-semibold text-slate-900 text-sm">{photo.title}</h4>
                )}
                {photo.description && (
                  <p className="text-slate-600 text-xs mt-1">{photo.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors"
              aria-label="Close photo lightbox"
              title="Close photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              {selectedPhoto.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                  <h3 className="font-semibold">{selectedPhoto.title}</h3>
                  {selectedPhoto.description && (
                    <p className="text-sm text-slate-200 mt-1">{selectedPhoto.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}