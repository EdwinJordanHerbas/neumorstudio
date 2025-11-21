import React from 'react';
import Image from 'next/image';
import { restaurantConfig } from '../config';

export default function Galeria() {

  return (
    <div className="min-h-screen px-4 py-12 page-transition">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2c2c2c] mb-4">
            {restaurantConfig.pages.galeria.title}
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            {restaurantConfig.pages.galeria.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantConfig.gallery.map((image, index) => (
            <div
              key={index}
              className="neuro-flat rounded-3xl p-4 neuro-hover group"
            >
              <div className="neuro-pressed rounded-2xl overflow-hidden h-80 relative">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}