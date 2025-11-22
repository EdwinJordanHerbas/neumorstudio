// sanity/desk/defaultDocumentNode.ts
import type { DefaultDocumentNodeResolver } from 'sanity/structure'
import { Iframe }from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  // Solo queremos preview para el tipo homePage
  if (schemaType === 'homePage') {
    return S.document().views([
      // Vista normal de edición de campos
      S.view.form().title('Editor'),

      // Vista de preview con tu web real
      S.view
        .component(Iframe)
        .title('Preview')
        .options({
          // En local, tu plantilla restaurante:
          url: 'http://localhost:3000/templates/restaurante',
          // Cuando lo subas a Vercel, lo cambias por:
          // url: 'https://TU-PROYECTO.vercel.app/templates/restaurante',
        }),
    ])
  }

  // Para el resto de tipos, solo el formulario normal
  return S.document().views([S.view.form()])
}
