'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { restaurantConfig } from './config';
import './_styles/neumorph-restaurant.css';

export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Inicio', path: '/templates/restaurante' },
    { name: 'Menú', path: '/templates/restaurante/menu' },
    { name: 'Galería', path: '/templates/restaurante/galeria' },
    { name: 'Reservar', path: '/templates/restaurante/reservas' },
    { name: 'Contacto', path: '/templates/restaurante/contacto' }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-[#e6e6e6]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#e6e6e6] px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="neuro-flat rounded-3xl px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/templates/restaurante" prefetch={true} className="flex items-center gap-3 neuro-hover rounded-2xl px-4 py-2">
                <div className="neuro-pressed rounded-full p-3">
                  <UtensilsCrossed className="w-6 h-6 text-[#d4af37]" />
                </div>
                <span className="text-xl font-bold text-[#2c2c2c] hidden sm:block">{restaurantConfig.name}</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    prefetch={true}
                    className={`neuro-hover rounded-2xl px-6 py-3 text-sm font-medium transition-all ${
                      isActive(item.path)
                        ? 'neuro-pressed text-[#d4af37]'
                        : 'text-[#2c2c2c] hover:text-[#d4af37]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden neuro-hover rounded-2xl p-3"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#2c2c2c]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#2c2c2c]" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-[#d1d1d1] space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block neuro-hover rounded-2xl px-6 py-3 text-sm font-medium transition-all ${
                      isActive(item.path)
                        ? 'neuro-pressed text-[#d4af37]'
                        : 'text-[#2c2c2c]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-20 px-4 py-12 bg-[#e6e6e6]">
        <div className="max-w-7xl mx-auto">
          <div className="neuro-flat rounded-3xl px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-4">{restaurantConfig.name}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {restaurantConfig.description}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-4">Horarios</h3>
                <p className="text-[#666666] text-sm">{restaurantConfig.schedule.weekdays}</p>
                <p className="text-[#666666] text-sm">{restaurantConfig.schedule.weekend}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2c2c2c] mb-4">Contacto</h3>
                <p className="text-[#666666] text-sm">Tel: {restaurantConfig.contact.phone}</p>
                <p className="text-[#666666] text-sm">{restaurantConfig.contact.email}</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#d1d1d1] text-center">
              <p className="text-[#666666] text-sm">© 2024 {restaurantConfig.name}. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}