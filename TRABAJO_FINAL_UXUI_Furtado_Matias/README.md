# Portfolio web · Matias Nicolas Furtado
Trabajo Final de Diseño UX-UI 2026 · Licenciatura en Sistemas de Información · UADER, FCyT, Concepción del Uruguay · Docente: Mg. Ernesto Ledesma.

- **Sitio publicado:** https://imaginative-torrone-0374b1.netlify.app
- **Figma:** https://www.figma.com/design/K0HI5zbvwZAjYaYTO5PZPb/tp-final?node-id=0-1&p=f
- **Repositorio y carpeta del trabajo:** https://github.com/matiasfurtado/tpfinal_ux_ui/tree/main/TRABAJO_FINAL_UXUI_Furtado_Matias

- **Contacto:** matufurtado@gmail.com

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
`ux-research/` (usuario, proto-persona, benchmark, card sorting, test) y `design/` (moodboard, sitemap, wireframes, design system, prototipos). Incluye reseñas de revisión entre pares (Gervasio Ernst, Diego Bua y Lautaro Taffarel), transcritas en `ux-research/revision-entre-pares-verificada.md`. No se atribuyen cambios a esas reseñas sin evidencia. Falta confirmar el test con tareas medidas y puntos pendientes marcados en el benchmark.

## Despliegue
**Sitio actual:** Netlify, https://imaginative-torrone-0374b1.netlify.app. **Declarado por el autor:** Netlify está conectado a GitHub. **Verificación pendiente:** registrar una captura del panel de deploys o un push a `main` y su publicación automática. Existe además un workflow de GitHub Pages en el proyecto, pero no es evidencia de que Netlify tenga CI/CD configurado.

## Créditos y recursos
Retrato: foto personal del autor. Imágenes de proyectos: ilustraciones generadas para este trabajo (no son capturas reales). Fuentes del sistema. Sin templates de terceros.

## Declaración de uso de IA
Se usó Claude (Anthropic) para generar la estructura inicial del código, textos y documentación. Debo revisar, probar y adaptar el contenido antes de entregarlo. Los datos personales y enlaces fueron completados. El contenido generado con IA requiere revisión del autor.

## Estado de entrega actualizado
Ver `documentacion/estado-final-y-pendientes.md` y `ux-research/test-usabilidad-para-completar.md`. No se declaran como realizados los tests ni el Lighthouse público sin evidencia.
