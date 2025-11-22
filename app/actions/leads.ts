'use server'

import { supabase } from '@/lib/supabase'

export type LeadData = {
  nombre: string
  email: string
  tipo_negocio: string
  mensaje?: string
}

export async function crearLead(data: LeadData) {
  const { error } = await supabase
    .from('cliente_potencial')
    .insert([
      {
        nombre: data.nombre,
        email: data.email,
        tipo_negocio: data.tipo_negocio,
        mensaje: data.mensaje || null,
      }
    ])

  if (error) {
    console.error('Error al guardar lead:', error)
    return { success: false, error: error.message }
  }

  return { success: true }
}
