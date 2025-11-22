import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Página de inicio',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Título del hero',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo del hero',
      type: 'text',
    }),
  ],
})
