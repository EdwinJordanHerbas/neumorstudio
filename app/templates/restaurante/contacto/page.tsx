import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurantConfig } from '../config';

export default function Contacto() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      details: [
        restaurantConfig.contact.address.street,
        `${restaurantConfig.contact.address.city}, ${restaurantConfig.contact.address.postal}`,
        restaurantConfig.contact.address.country
      ]
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: [restaurantConfig.contact.phone, restaurantConfig.contact.phone_secondary]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [restaurantConfig.contact.email, restaurantConfig.contact.email_reservas]
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: [restaurantConfig.schedule.weekdays, restaurantConfig.schedule.weekend]
    }
  ];

  return (
    <div className="min-h-screen px-4 py-12 page-transition">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2c2c2c] mb-4">
            {restaurantConfig.pages.contacto.title}
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            {restaurantConfig.pages.contacto.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="neuro-flat rounded-3xl p-8 neuro-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="neuro-pressed rounded-2xl p-4">
                    <info.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2c2c2c] mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-[#666666] mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="neuro-flat rounded-3xl p-6 h-full min-h-[600px]">
            <div className="neuro-pressed rounded-2xl overflow-hidden h-full">
              <iframe
                src={restaurantConfig.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 neuro-flat rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-[#2c2c2c] mb-4">
            {restaurantConfig.additionalInfo.title}
          </h2>
          <p className="text-[#666666] max-w-3xl mx-auto leading-relaxed">
            {restaurantConfig.additionalInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
}