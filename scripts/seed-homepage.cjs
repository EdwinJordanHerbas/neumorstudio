// scripts/seed-homepage.cjs
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

// Contenido base que quieres migrar (lo mismo que en restaurantConfig)
const restaurantConfig = {
  name: "Le Gourmet",
  tagline:
    "Una experiencia gastronómica inolvidable donde cada plato cuenta una historia",
};

// Cliente de Sanity solo para este script
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  token: process.env.SANITY_WRITE_TOKEN, // token tipo Editor
  useCdn: false,
});

async function seedHomePage() {
  if (!client.config().projectId || !client.config().token) {
    console.error("❌ Falta PROJECT_ID o SANITY_WRITE_TOKEN en .env.local");
    process.exit(1);
  }

  await client.createOrReplace({
    _id: "homePage-default", // ID fijo: siempre la misma home
    _type: "homePage",
    heroTitle: restaurantConfig.name,
    heroSubtitle: restaurantConfig.tagline,
  });

  console.log(
    "✅ HomePage creada/actualizada en Sanity desde restaurantConfig"
  );
}

seedHomePage()
  .then(() => {
    console.log("🎉 Seed completado");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error en seed-homepage:", err);
    process.exit(1);
  });
