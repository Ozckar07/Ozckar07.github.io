# Oscar Romero — Portafolio Backend

Portafolio web **estático, responsive e interactivo**, preparado para **GitHub Pages**.

## Incluye

- Página de presentación con fotografía en blanco y negro y descarga de CV.
- 18 proyectos y colaboraciones, filtrables por categoría y buscables por tecnología.
- Modal de detalles técnicos por proyecto: reto, enfoque, aportes y herramientas.
- Caso destacado de IPSOMARY con diagrama **conceptual** de flujo (no captura de un sistema privado).
- Secciones de habilidades, experiencia, formación y contacto.
- Tema oscuro/claro, menú móvil, accesibilidad básica, animaciones con soporte para `prefers-reduced-motion`.
- Metadatos SEO, favicon SVG y datos estructurados `Person`.
- Sin frameworks ni dependencias remotas obligatorias, ni hosting backend, ni formularios que prometan envíos inexistentes.

## Publicarlo gratis en GitHub Pages

### Opción A: repositorio `portfolio` (no reemplaza tu página actual)

1. Descomprime el ZIP y abre la carpeta `portfolio_oscar_github_pages`.
2. En GitHub crea el repositorio público **`portfolio`** en la cuenta **`ozckar07`**.
3. Sube **el contenido de la carpeta** a la raíz del repositorio (`index.html`, `assets/`, `docs/`, `README.md`, etc.), no la carpeta contenedora.
4. En GitHub, ve a **Settings → Pages → Build and deployment → Deploy from a branch**.
5. Selecciona rama `main`, carpeta `/(root)` y guarda.
6. Espera a que GitHub Pages publique la página. La dirección esperada es:

   `https://ozckar07.github.io/portfolio/`

### Opción B: sitio personal en la raíz

Si quieres usar `https://ozckar07.github.io/`, el repositorio debe llamarse **`ozckar07.github.io`**. **Atención:** publicar en ese repositorio puede sustituir el sitio actual si ya existe.

Todos los enlaces de esta entrega son **relativos**, por eso funciona tanto en la raíz como dentro de `/portfolio/`.

## Personalización

- **Contenido de proyectos:** `assets/projects.js`. Cada proyecto incluye `title`, `category`, `years`, `role`, `description`, `challenge`, `solution`, `highlights` y `stack`.
- **Estilos y colores:** `assets/styles.css`; variables CSS al inicio (`--accent`, `--bg`, `--surface`...); el cambio claro/oscuro ya funciona.
- **Textos generales y enlaces:** `index.html`.
- **Foto:** `assets/portrait.webp` (imagen exportada de la fotografía de CV aportada por el propietario; conservar la ruta).
- **CV:** `docs/CV_Oscar_Romero_Backend_2026.pdf`.

Si vas a crear un enlace de LinkedIn, agrega **solo tu URL verificada**, no una inventada. Puedes añadir demos o capturas más adelante únicamente cuando sean públicas y autorizadas por los clientes.

## Probar localmente

Puedes abrir `index.html` directamente: no utiliza `fetch()` de archivos locales. También puedes ejecutar:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Privacidad y exactitud

El portafolio se ha redactado tomando como base el CV PDF y la matriz Excel facilitados. Algunos proyectos tienen autoría compartida, mantenimiento de sistemas existentes o fechas por confirmar; estos matices se conservan. **No se sube código privado ni capturas internas de clientes**. Las ilustraciones de tarjetas y el diagrama de IPSOMARY son **conceptuales**.

## Arquitectura

```text
index.html
assets/
  app.js               # interactividad
  projects.js          # fuente de datos de 18 proyectos
  styles.css           # diseño responsive
  portrait.webp        # fotografía
  favicon.svg          # icono de sitio
docs/
  CV_Oscar_Romero_Backend_2026.pdf
README.md
.nojekyll
```

Este es un sitio público (GitHub Pages): toda la información y los archivos aquí incluidos son accesibles para cualquier visitante.
