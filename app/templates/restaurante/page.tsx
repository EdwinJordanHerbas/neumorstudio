import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChefHat, Award, Clock, MapPin } from 'lucide-react';
import { restaurantConfig } from './config';

// Mapeo de iconos (necesario porque los iconos no se pueden serializar en config)
const iconMap = {
  ChefHat,
  Award,
  Clock,
  MapPin
};

export default function Home() {
  const features = restaurantConfig.features.map(f => ({
    ...f,
    icon: iconMap[f.icon as keyof typeof iconMap]
  }));

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section className="px-4 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="neuro-flat rounded-[3rem] p-12 md:p-20">
              <div className="neuro-pressed rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <ChefHat className="w-12 h-12 text-[#d4af37]" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-[#2c2c2c] mb-6 tracking-tight">
                {restaurantConfig.name}
              </h1>

              <p className="text-xl md:text-2xl text-[#666666] mb-8 max-w-3xl mx-auto leading-relaxed">
                {restaurantConfig.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/templates/restaurante/menu" prefetch={true}>
                  <button className="neuro-flat neuro-hover rounded-2xl px-8 py-4 text-[#2c2c2c] font-semibold w-full sm:w-auto">
                    Ver Menú
                  </button>
                </Link>
                <Link href="/templates/restaurante/reservas" prefetch={true}>
                  <button className="neuro-pressed rounded-2xl px-8 py-4 text-[#d4af37] font-semibold w-full sm:w-auto">
                    Reservar Mesa
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4">
              Por Qué Elegirnos
            </h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Comprometidos con la excelencia en cada detalle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="neuro-flat rounded-3xl p-8 text-center neuro-hover"
                style={{ 
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="neuro-pressed rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-[#2c2c2c] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="neuro-flat rounded-[3rem] p-8 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4">
                Ambiente Único
              </h2>
              <p className="text-[#666666] text-lg">
                Un espacio diseñado para crear momentos memorables
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {restaurantConfig.homeGallery.map((imageUrl, i) => (
                <div
                  key={i}
                  className="neuro-pressed rounded-2xl overflow-hidden h-64 neuro-hover relative"
                >
                  <Image
                    src={imageUrl}
                    alt={`Ambiente ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/templates/restaurante/galeria">
                <button className="neuro-flat neuro-hover rounded-2xl px-8 py-4 text-[#2c2c2c] font-semibold">
                  Ver Galería Completa
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}