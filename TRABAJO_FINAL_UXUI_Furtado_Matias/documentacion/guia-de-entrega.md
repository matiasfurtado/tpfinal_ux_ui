# Guía de entrega paso a paso
1. **Repositorio:** en GitHub → New repository → nombre `portfolio-uxui` → Public.
2. **Reemplazá los datos:** correo (`mailto:` en index.html), LinkedIn, fechas de formación, textos [COMPLETAR], link de Figma y URL en el README.
3. **Subí los archivos:** `git init`, `git add .`, `git commit`, `git branch -M main`, `git remote add origin <URL>`, `git push -u origin main`.
4. **Commits sugeridos (mínimo 10, hacelos a medida que realmente trabajes):**
   1. chore: estructura inicial · 2. feat: header y menú móvil · 3. feat: hero y métricas · 4. feat: skills · 5. feat: proyectos · 6. feat: experiencia y sobre mí · 7. feat: contacto y footer · 8. feat: caso de estudio · 9. fix: accesibilidad tras test · 10. docs: README y capturas.
5. **GitHub Pages:** Settings → Pages → Source: **GitHub Actions** (el workflow ya está incluido).
6. **URL HTTPS:** aparece en Settings → Pages (formato `https://matiasfurtado.github.io/portfolio-uxui/`). Verificala vos; no está confirmada.
7. **Verificá:** abrí la URL, probá menú móvil, enlaces y caso de estudio.
8. **Agregá la URL** al README y a la descripción del repo (engranaje “About”).
9. **Lighthouse real:** Chrome → F12 → Lighthouse → Mobile → guardá captura en `documentacion/capturas/`.
10. **Figma:** importá los SVG de `design/` (ver LEEME-figma.md), armá el prototipo y compartí el link.
11. **Test de usabilidad:** hacelo con 3 personas, completá planilla y matriz, y aplicá cambios.
