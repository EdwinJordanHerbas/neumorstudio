// scripts/seed-homepage.ts
import { scriptClient } from '../lib/sanity.scriptClient'
import { restaurantConfig } from '../app/templates/restaurante/config'

async function seedHomePage() {
  await scriptClient.createOrReplace({
    _id: 'homePage-default',   // ID fijo, así siempre hay UNA home
    _type: 'homePage',
    heroTitle: restaurantConfig.name,
    heroSubtitle: restaurantConfig.tagline,
  })

  console.log('✅ HomePage creada/actualizada desde restaurantConfig')
}

seedHomePage()
  .then(() => {
    console.log('🎉 Seed completado')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
