'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { restaurantConfig } from '../config';

export default function Reservas() {
  const [formData, setFormData] = useState({
    nombre_cliente: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: 2,
    notas: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre_cliente: '',
        email: '',
        telefono: '',
        fecha: '',
        hora: '',
        personas: 2,
        notas: ''
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen px-4 py-20 flex items-center justify-center">
        <div className="neuro-flat rounded-[3rem] p-12 text-center max-w-2xl">
          <div className="neuro-pressed rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-[#d4af37]" />
          </div>
          <h2 className="text-4xl font-bold text-[#2c2c2c] mb-4">
            {restaurantConfig.pages.reservas.successMessage}
          </h2>
          <p className="text-[#666666] text-lg">
            {restaurantConfig.pages.reservas.successDescription}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 page-transition">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2c2c2c] mb-4">
            {restaurantConfig.pages.reservas.title}
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            {restaurantConfig.pages.reservas.subtitle}
          </p>
        </div>

        {/* Form */}
        <div className="neuro-flat rounded-[3rem] p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#2c2c2c] flex items-center gap-2">
                  <User className="w-4 h-4 text-[#d4af37]" />
                  Nombre Completo
                </label>
                <div className="neuro-pressed rounded-2xl p-4">
                  <input
                    required
                    type="text"
                    value={formData.nombre_cliente}
                    onChange={(e) => handleChange('nombre_cliente', e.target.value)}
                    className="bg-transparent border-0 w-full outline-none text-[#2c2c2c]"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#2c2c2c] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  Email
                </label>
                <div className="neuro-pressed rounded-2xl p-4">
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-transparent border-0 w-full outline-none text-[#2c2c2c]"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#2c2c2c] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                Teléfono
              </label>
              <div className="neuro-pressed rounded-2xl p-4">
                <input
                  required
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => handleChange('telefono', e.target.value)}
                  className="bg-transparent border-0 w-full outline-none text-[#2c2c2c]"
                  placeholder="+34 912 345 678"
                />
              </div>
            </div>

            {/* Reservation Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#2c2c2c] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  Fecha
                </label>
                <div className="neuro-pressed rounded-2xl p-4">
                  <input
                    required
                    type="date"
                    value={formData.fecha}
                    onChange={(e) => handleChange('fecha', e.target.value)}
                    className="bg-transparent border-0 w-full outline-none text-[#2c2c2c]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#2c2c2c] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  Hora
                </label>
                <div className="neuro-pressed rounded-2xl p-4">
                  <input
                    required
                    type="time"
                    value={formData.hora}
                    onChange={(e) => handleChange('hora', e.target.value)}
                    className="bg-transparent border-0 w-full outline-none text-[#2c2c2c]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#2c2c2c] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#d4af37]" />
                  Personas
                </label>
                <div className="neuro-pressed rounded-2xl p-4">
                  <input
                    required
                    type="number"
                    min="1"
                    max="20"
                    value={formData.personas}
                    onChange={(e) => handleChange('personas', parseInt(e.target.value))}
                    className="bg-transparent border-0 w-full outline-none text-[#2c2c2c]"
                  />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#2c2c2c] flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#d4af37]" />
                Notas Especiales (Opcional)
              </label>
              <div className="neuro-pressed rounded-2xl p-4">
                <textarea
                  value={formData.notas}
                  onChange={(e) => handleChange('notas', e.target.value)}
                  className="bg-transparent border-0 w-full outline-none text-[#2c2c2c] min-h-[100px] resize-none"
                  placeholder="Alergias, preferencias de mesa, ocasiones especiales..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full neuro-flat neuro-hover rounded-2xl py-6 text-lg font-semibold text-[#2c2c2c] bg-transparent border-0"
            >
              {isSubmitting ? 'Enviando...' : 'Confirmar Reserva'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}