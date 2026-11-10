# Portfolio web · Matias Nicolas Furtado
Trabajo Final de Diseño UX-UI 2026 · Licenciatura en Sistemas de Información · UADER, FCyT, Concepción del Uruguay · Docente: Mg. Ernesto Ledesma.

- **Sitio publicado:** [(https://imaginative-torrone-0374b1.netlify.app/)]
- **Figma:** [COMPLETAR link con permiso de visualización]
- **Repositorio:** https://github.com/matiasfurtado/[NOMBRE-DEL-REPO]

## Descripción y objetivos
Portfolio one-page con 9 secciones (header, hero, métricas, skills, proyectos, experiencia, sobre mí, contacto, footer) y un caso de estudio (Cubrí Seguros). Objetivo: presentar mi perfil con diseño propio, accesible y responsive.

## Tecnologías
HTML5 semántico, CSS3 (variables, Flexbox, Grid), JavaScript vanilla. Tipografías: fuentes de sistema (sin descargas). Sin frameworks ni constructores.

## Estructura
`index.html`, `styles.css`, `script.js`, `404.html`, `favicon.svg`, `assets/images`, `proyectos/caso-estudio.html`, `ux-research/`, `design/`, `documentacion/`, `.github/workflows/pages.yml`.

## Ejecución local
Abrí `index.html` o corré `python3 -m http.server` y entrá a http://localhost:8000.

## Capturas
Ver `documentacion/capturas/` (375, 768 y 1280 px, menú móvil y reporte Lighthouse).

## Accesibilidad y responsive
Enlace “Saltar al contenido”, foco visible, menú con `aria-expanded`/`aria-controls`, `lang="es"`, `prefers-reduced-motion`, contraste AA. Probado a 375, 768 y 1280 px sin scroll horizontal.
Lighthouse mobile **local** (servidor local, no el sitio publicado): Performance 98, Accessibility 100, Best Practices 100, SEO 100. Volvé a medir sobre la URL pública.

## Proceso UX/UI
`ux-research/` (usuario, proto-persona, benchmark, card sorting, test) y `design/` (moodboard, sitemap, wireframes, design system, prototipos). Incluye reseñas de revisión entre pares (Gervasio Ernst, Diego Bua y Lautaro Taffarel) y los cambios aplicados. Falta el test con tareas medidas y puntos pendientes marcados en el benchmark.

## Despliegue
GitHub Pages con GitHub Actions (`.github/workflows/pages.yml`): cada push a `main` publica el sitio. Ver `documentacion/guia-de-entrega.md`.

## Créditos y recursos
Retrato: foto personal del autor. Imágenes de proyectos: ilustraciones generadas para este trabajo (no son capturas reales). Fuentes del sistema. Sin templates de terceros.

## Declaración de uso de IA
Se usó Claude (Anthropic) para generar la estructura inicial del código, textos y documentación. Debo revisar, probar y adaptar el contenido antes de entregarlo. Los datos marcados como [COMPLETAR] son míos.
