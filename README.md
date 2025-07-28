# Omar Gaxiola Portfolio

Portfolio personal desarrollado con Astro framework, optimizado para mostrar proyectos, blog posts y información profesional.

## 🚀 Características

- **Framework**: Astro v4 (Fast & SEO-friendly)
- **Estilos**: TailwindCSS + CSS personalizado
- **Temas**: Modo oscuro/claro automático
- **Contenido**: Blog con markdown/MDX
- **Búsqueda**: Integración con Pagefind
- **Optimización**: Astro Assets para imágenes
- **RSS**: Feed automático
- **SEO**: Meta tags y Open Graph optimizados

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── MyBlogs.astro # Grid de proyectos personales
│   │   ├── Summary.astro # Sección de presentación
│   │   └── layout/       # Header, Footer
│   ├── content/          # Blog posts en markdown
│   ├── layouts/          # Layouts base y blog
│   ├── pages/            # Páginas del sitio
│   │   ├── index.astro   # Página principal
│   │   ├── about.astro   # Sobre mí
│   │   ├── projects.astro# Videos y renders
│   │   ├── music.astro   # Contenido musical
│   │   └── posts/        # Blog posts dinámicos
│   ├── styles/           # CSS global y personalizado
│   └── site.config.ts    # Configuración del sitio
├── public/               # Assets estáticos
└── images/               # Imágenes del portafolio
```

## 🎨 Páginas Principales

### 🏠 Inicio (index.astro)
- **Summary**: Presentación personal con foto
- **Projects**: Grid de 5 proyectos principales
- **Technologies**: Stack tecnológico con links
- **CV Download**: Enlace directo al CV
- **Recent Posts**: Últimas 20 entradas del blog

### 📝 About
Información personal y profesional detallada.

### 🎵 Music
Contenido relacionado con música y audio.

### 🎬 Projects (Videos)
Videos y renders de proyectos técnicos:
- PCB 360 (Vimeo embed)
- Pick and Place v.1
- Imágenes de proyectos electrónicos

### 📖 Blog
Sistema de blog con:
- Posts en markdown/MDX
- Categorización por tags
- Búsqueda integrada
- RSS feed automático

## 🛠️ Proyectos Actuales

### En el Grid Principal (MyBlogs.astro):
1. **The Jr Dev** - Blog personal de desarrollo
   - URL: https://thejrdev.online
   - Logo: GitHub Assets

2. **Archivo Culinario** - Archivo de recetas
   - URL: https://www.nuestrolibroderecetas.site/
   - Logo: GitHub Assets

3. **Social App** - Aplicación social con Supabase
   - URL: https://auth-supabase-frontend.vercel.app/
   - Logo: GitHub Assets

4. **Piano Scale** - Herramienta musical interactiva
   - URL: https://musical-grid-git-main-oiggs-projects.vercel.app/
   - Logo: GitHub Assets

5. **Git Poster** - Generador de posters de GitHub
   - URL: https://og-git-poster.vercel.app/
   - Logo: GitHub Assets

6. **Flutter Expenses** - Tracker de gastos personales
   - URL: https://flutter-expenses-og.web.app/
   - Tech: Flutter Web, Personal Finance
   - Logo: GitHub Assets

7. **Community Hub** - Plataforma comunitaria
   - URL: https://chicas-club.vercel.app/
   - Tech: Web Application Platform
   - Logo: GitHub Assets

## 🎨 Configuración de Temas

### Variables CSS Personalizadas:
```css
/* Tema Claro */
--theme-bg: 0deg 0% 98%;
--theme-text: 203deg 11% 15%;
--theme-accent: 351deg 66% 48%;

/* Tema Oscuro */
--theme-bg: 210deg 6% 12%;
--theme-text: 220deg 3% 79%;
--theme-accent: 159deg 64% 45%;
```

### Fix Aplicado - Cards Responsivas:
- Fondo dinámico que se adapta al tema
- Bordes suaves con opacidad
- Transiciones suaves entre temas
- Color de texto adaptativo

## 📱 Responsive Design

### Grid de Proyectos:
- **Desktop**: 4 columnas (7 proyectos total)
- **Tablet (≤1024px)**: 3 columnas  
- **Mobile (≤768px)**: 2 columnas
- **Small Mobile (≤480px)**: 1 columna centrada

### Cards de Proyectos:
- Tamaño fijo: 12.5rem x 12.5rem
- En mobile: width 80%, height auto
- Imágenes adaptativas

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev              # localhost:3000

# Build de producción
pnpm build
pnpm postbuild        # Genera índice de búsqueda

# Preview del build
pnpm preview

# Formateo de código
pnpm format

# Type checking
pnpm check
```

## 🔧 Configuración Personalizada

### site.config.ts:
- **Autor**: Omar Gaxiola
- **Descripción**: "Omar Gaxiola Porfolio, Electronics and Music"
- **Idioma**: en-GB
- **Webmentions**: Configurado con webmention.io

### Stack Tecnológico Mostrado:
- Angular & Angular Material
- Git & CI/CD
- Bootstrap
- HTML/CSS/JavaScript
- TypeScript
- Astro
- Vercel

## 📈 SEO y Optimización

- **Open Graph**: Imágenes automáticas con Satori
- **Sitemap**: Generación automática
- **RSS Feed**: Posts automáticos
- **Meta Tags**: Optimizados por página
- **Lazy Loading**: Imágenes optimizadas
- **Bundle Splitting**: Carga optimizada

## 🐛 Bugs Solucionados

### ✅ Fondo Blanco en Cards:
**Problema**: Las cards de proyectos tenían fondo blanco fijo que no se adaptaba al modo oscuro.

**Solución**: 
- Cambio de `background-color: #ffffff` a `background-color: hsl(var(--theme-bg))`
- Agregado de borde sutil adaptativo
- Color de texto dinámico para h3
- Transiciones suaves entre temas

### ✅ Script de Edad Dinámico:
**Problema**: Script hacía referencia a elemento HTML inexistente (dyn_age).

**Solución**: 
- Removido script no utilizado que causaba errores en consola
- Limpieza de código JavaScript innecesario

### ✅ Console.log en Producción:
**Problema**: Mensaje de debug en webmentions.ts visible en producción.

**Solución**: 
- Reemplazado console.log por comentario
- Mantenimiento de funcionalidad sin ruido en consola

### ✅ Grid Responsive Mejorado:
**Problema**: Layout no optimizado para 7 proyectos en diferentes pantallas.

**Solución**: 
- Desktop: 4 columnas para mejor distribución
- Tablet: 3 columnas balanceadas
- Mobile: 2 columnas aprovechando espacio
- Mobile pequeño: 1 columna centrada

## 🚀 Deploy

- **Hosting**: Netlify (configurado en netlify.toml)
- **Build**: Automático en push a main
- **Domain**: Configurar en astro.config.ts

## 📧 Contacto

- **Portfolio**: [URL del portfolio]
- **GitHub**: Enlazado en SocialList.astro
- **CV**: Disponible para descarga directa

---

## ✅ Tareas Completadas

- [x] 2 nuevos proyectos agregados al grid
  - Flutter Expenses (tracker de gastos personales)
  - Community Hub (plataforma comunitaria)
- [x] Layout responsive optimizado para 7 proyectos
- [x] Bug del fondo blanco solucionado
- [x] Limpieza de código y optimizaciones
- [x] Documentación completa actualizada

## 🆕 Próximas Mejoras Sugeridas

- [ ] Implementar logos personalizados SVG para los nuevos proyectos
- [ ] Agregar animaciones CSS al hover de las cards
- [ ] Implementar lazy loading para las imágenes de GitHub
- [ ] Optimizar performance con Service Worker
- [ ] Agregar meta tags específicos por proyecto

**Última actualización**: 2025-07-26