// lib/sanity.scriptClient.ts
import { createClient } from '@sanity/client'

export const scriptClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  token: process.env.SANITY_WRITE_TOKEN, // 👈 escribe en Sanity
  useCdn: false,
})
