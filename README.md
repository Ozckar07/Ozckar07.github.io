# Portafolio Oscar Romero — español e inglés (GitHub Pages)

Portafolio personal estático (HTML, CSS y JavaScript), diseñado para publicarse en **GitHub Pages**. No requiere Node, Laravel, hosting privado, API de traducción ni servicios de pago.

## Novedad: selector de idioma ES / EN

- El selector está junto al de tema claro/oscuro, también en la versión móvil.
- Traduce navegación, portada, habilidades, recorrido, contacto, filtros, búsquedas, tarjetas de los **18 proyectos** y sus ventanas de detalle.
- El texto en español permanece en `index.html` y `assets/projects.js`; las traducciones inglesas están en `assets/i18n.js`.
- El idioma y el tema se almacenan **por separado** en `localStorage` (`oscar-portfolio-lang`, `oscar-portfolio-theme`); si el navegador bloquea el almacenamiento, la web sigue funcionando.
- En inglés, los enlaces del CV indican **(ES)** porque el PDF incluido está en español; puedes cambiarlo por tu CV inglés cuando dispongas de él.
- Las descripciones de proyectos son redactadas a partir de la experiencia profesional. No hay capturas ni código de clientes privados.

## Instalación en tu repositorio existente

1. Haz una copia de seguridad del repositorio `Ozckar07.github.io`.
2. Copia el **contenido** de este ZIP a la **raíz** del repositorio `ozckar07.github.io`, conservando el directorio `.git` original (no está incluido en esta descarga).
3. Reemplaza `index.html`, `assets/app.js` y `assets/styles.css`; agrega el nuevo `assets/i18n.js`. Los demás recursos quedan incluidos.
4. Confirma los cambios en Git, por ejemplo:

```bash
git add .
git commit -m "feat(portfolio): add Spanish and English language switcher"
git push origin main
```

5. GitHub Pages actualizará el sitio cuando termine el despliegue de `main`.

## Archivos principales

| Archivo | Uso |
| --- | --- |
| `index.html` | Contenido HTML y botones ES / EN |
| `assets/styles.css` | Estilos responsive, tema claro/oscuro y selector de idioma |
| `assets/projects.js` | Contenido original de los 18 proyectos en español |
| `assets/i18n.js` | Traducciones inglesas, categorías, roles y etiquetas |
| `assets/app.js` | Cambio de idioma, filtros, modales, tema y eventos |
| `assets/portrait.webp` | Fotografía |
| `docs/CV_Oscar_Romero_Backend_2026.pdf` | CV descargable, en español |
| `.nojekyll` | Mantiene el despliegue estático en GitHub Pages |

## Para actualizar textos

- Cambia los textos **españoles** en `index.html` o las propiedades de `assets/projects.js`.
- Agrega sus correspondientes traducciones al objeto `staticEn` o `projectsEn` de `assets/i18n.js`.
- Para agregar un nuevo proyecto, añade un objeto con un `id` único a `assets/projects.js` y otro con el mismo `id` en `projectsEn`.
- Mantén los nombres de tecnologías y marcas sin traducir.

El selector ES / EN traduce la interfaz existente **sin usar Google Translate**, sin llamadas externas ni suscripciones.
