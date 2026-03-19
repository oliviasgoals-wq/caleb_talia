'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface GallerySlideshowProps {
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
  theme?: 'light' | 'dark';
  autoPlayInterval?: number;
}

const GallerySlideshow: React.FC<GallerySlideshowProps> = ({ 
  images,
  theme = 'light',
  autoPlayInterval = 4000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Theme-based colors - light theme with dark accents
  const colors = {
    light: {
      button: 'bg-white/80 hover:bg-white text-gray-800 border border-gray-200',
      buttonHover: 'hover:border-[#1a3b2e]',
      dot: 'bg-gray-300',
      dotActive: 'bg-[#1a3b2e]',
      overlay: 'bg-black/10',
    },
    dark: {
      button: 'bg-gray-900/80 hover:bg-gray-800 text-white border border-[#D2AF26]/30',
      buttonHover: 'hover:border-[#D2AF26]',
      dot: 'bg-white/30',
      dotActive: 'bg-[#D2AF26]',
      overlay: 'bg-black/30',
    }
  };

  const activeColors = colors[theme];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main Slideshow */}
      <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className=""
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${activeColors.button} flex items-center justify-center transition-all duration-300 hover:scale-110 ${activeColors.buttonHover}`}
          aria-label="Previous image"
        >
          ←
        </button>
        
        <button
          onClick={goToNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${activeColors.button} flex items-center justify-center transition-all duration-300 hover:scale-110 ${activeColors.buttonHover}`}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`relative aspect-video rounded-md overflow-hidden transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-2 ring-[#1a3b2e] scale-105' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default GallerySlideshow;