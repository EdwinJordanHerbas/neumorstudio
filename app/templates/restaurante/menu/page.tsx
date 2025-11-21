'use client';

import React, { useState } from 'react';
import MenuCard from '../Components/MenuCard';
import { restaurantConfig } from '../config';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredItems = selectedCategory === 'Todos'
    ? restaurantConfig.menu
    : restaurantConfig.menu.filter(item => item.categoria === selectedCategory);

  return (
    <div className="min-h-screen px-4 py-12 page-transition">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2c2c2c] mb-4">
            {restaurantConfig.pages.menu.title}
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            {restaurantConfig.pages.menu.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="neuro-flat rounded-3xl p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {restaurantConfig.menuCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-2xl px-6 py-3 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'neuro-pressed text-[#d4af37]'
                      : 'neuro-flat neuro-hover text-[#2c2c2c]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items */}
        {filteredItems.length === 0 ? (
          <div className="neuro-flat rounded-3xl p-12 text-center">
            <p className="text-[#666666] text-lg">
              No hay items en esta categoría
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
