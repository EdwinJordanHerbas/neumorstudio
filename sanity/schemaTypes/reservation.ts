// sanity/schemaTypes/reservation.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'reservation',
  title: 'Reserva',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del cliente',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Fecha y hora',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'people',
      title: 'Número de personas',
      type: 'number',
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'notes',
      title: 'Notas',
      type: 'text',
    }),
  ],
})
