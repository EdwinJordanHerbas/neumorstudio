// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { defaultDocumentNode } from './sanity/desk/defaultDocumentNode' // 👈 IMPORTANTE

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Neumor Studio – Restaurante',
  apiVersion: '2025-01-01',
  basePath: '/studio', // panel accesible en /studio

  plugins: [
    structureTool({
      defaultDocumentNode,   // 👈 AQUÍ LO ENCHUFAS
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
