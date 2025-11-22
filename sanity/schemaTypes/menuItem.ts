// sanity/schemaTypes/menuItem.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Plato de la carta',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del plato',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
