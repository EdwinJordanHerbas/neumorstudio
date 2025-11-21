# Plantilla de Restaurante con Diseño Neumórfico

Una plantilla moderna y elegante para sitios web de restaurantes con estilo neumórfico, completamente personalizable mediante un único archivo de configuración.

## Características

- ✅ Diseño neumórfico suave y profesional
- ✅ Completamente responsive (móvil, tablet, desktop)
- ✅ Optimización de imágenes con Next.js Image
- ✅ Sistema de navegación con estado activo
- ✅ Formulario de reservas funcional
- ✅ Galería de imágenes con hover effects
- ✅ Menú con filtros por categoría
- ✅ Página de contacto con mapa integrado
- ✅ 100% personalizable desde un solo archivo

## Estructura de la Plantilla

```
app/templates/restaurante/
├── config.ts                    # ⭐ Archivo de configuración principal
├── _styles/
│   └── neumorph-restaurant.css  # Estilos neumórficos
├── Components/
│   └── MenuCard.tsx             # Componente de tarjeta de menú
├── layout.tsx                   # Layout con navbar y footer
├── page.tsx                     # Página de inicio
├── menu/page.tsx                # Página del menú
├── galeria/page.tsx             # Galería de fotos
├── reservas/page.tsx            # Formulario de reservas
├── contacto/page.tsx            # Información de contacto
└── README.md                    # Este archivo
```

## Cómo Personalizar la Plantilla

### Opción 1: Edición Manual

Edita el archivo `config.ts` con la información de tu restaurante:

```typescript
export const restaurantConfig = {
  name: "Tu Restaurante",
  tagline: "Tu eslogan aquí",
  contact: {
    phone: "+34 XXX XXX XXX",
    email: "info@turestaurante.com",
    // ... más configuración
  },
  // ... resto de la configuración
};
```

### Opción 2: Script de Generación (Futuro)

Se puede crear un script que tome un archivo JSON/YAML y genere automáticamente una nueva web:

```bash
# Ejemplo de uso futuro
npm run generate-restaurant --config mi-restaurante.json --output ../mi-restaurante
```

## Secciones Configurables

### 1. Información Básica
- Nombre del restaurante
- Eslogan/tagline
- Descripción

### 2. Contacto
- Teléfonos (principal y secundario)
- Emails (info y reservas)
- Dirección completa
- Horarios de apertura

### 3. Características Destacadas
- Hasta 4 características con iconos
- Título y descripción de cada una

### 4. Menú
- Categorías personalizables
- Platos con:
  - Nombre
  - Descripción
  - Precio
  - Categoría
  - Imagen (opcional)
  - Disponibilidad

### 5. Galería
- Imágenes para la página principal (3 imágenes)
- Galería completa (ilimitado)
- Título y descripción de cada imagen

### 6. Mapa
- URL de embed de Google Maps

### 7. Textos de Páginas
- Títulos y subtítulos personalizables
- Mensajes de confirmación
- Información adicional

## Colores del Diseño Neumórfico

Los colores están definidos en `_styles/neumorph-restaurant.css`:

```css
:root {
  --neuro-light: #ffffff;      /* Luz del relieve */
  --neuro-dark: #d1d1d1;       /* Sombra del relieve */
  --neuro-bg: #e6e6e6;         /* Fondo base */
  --accent-gold: #d4af37;      /* Color de acento (dorado) */
  --text-primary: #2c2c2c;     /* Texto principal */
  --text-secondary: #666666;   /* Texto secundario */
}
```

Para cambiar el esquema de colores, modifica estas variables CSS.

## Imágenes

### Opción 1: URLs Externas (Actual)
La plantilla usa Unsplash por defecto. Simplemente cambia las URLs en `config.ts`.

### Opción 2: Imágenes Locales (Recomendado para producción)
1. Coloca tus imágenes en `/public/images/restaurante/`
2. Actualiza las URLs en `config.ts`:
   ```typescript
   homeGallery: [
     "/images/restaurante/ambiente1.jpg",
     "/images/restaurante/ambiente2.jpg",
     "/images/restaurante/ambiente3.jpg"
   ]
   ```

## Rutas de la Plantilla

Cuando está corriendo en desarrollo, las rutas son:

- Home: `http://localhost:3000/templates/restaurante`
- Menú: `http://localhost:3000/templates/restaurante/menu`
- Galería: `http://localhost:3000/templates/restaurante/galeria`
- Reservas: `http://localhost:3000/templates/restaurante/reservas`
- Contacto: `http://localhost:3000/templates/restaurante/contacto`

## Script de Generación (Planificado)

### Estructura del Script

```javascript
// scripts/generate-restaurant.js

const fs = require('fs');
const path = require('path');

function generateRestaurantSite(configPath, outputPath) {
  // 1. Leer configuración
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  // 2. Copiar plantilla
  copyTemplateFiles('app/templates/restaurante', outputPath);

  // 3. Generar config.ts con la nueva configuración
  generateConfigFile(config, outputPath);

  // 4. Actualizar rutas si es necesario
  updateRoutes(outputPath, config.slug || 'restaurante');

  console.log(`✅ Sitio generado en: ${outputPath}`);
}
```

### Archivo de Configuración JSON

```json
{
  "name": "La Bella Italia",
  "slug": "bella-italia",
  "tagline": "Auténtica cocina italiana",
  "contact": {
    "phone": "+34 911 222 333",
    "email": "info@bellaitalia.com"
  },
  "menu": [
    {
      "nombre": "Pizza Margherita",
      "precio": 12,
      "categoria": "Pizzas"
    }
  ]
}
```

## Próximos Pasos

1. **Crear script de generación**: Automatizar la creación de nuevos sitios
2. **CMS Integration**: Conectar con un CMS headless para gestión de contenido
3. **Modo oscuro**: Agregar variante oscura del diseño neumórfico
4. **Más plantillas**: Crear variantes para diferentes tipos de negocio (gym, spa, etc.)
5. **Sistema de temas**: Permitir cambiar colores desde config

## Tecnologías Utilizadas

- **Next.js 16.0.3** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Utilidades CSS
- **Lucide React** - Iconos
- **Next.js Image** - Optimización de imágenes

## Licencia

Esta plantilla es parte del proyecto NeumorStudio.
