# David Ríos Ruedas Audiovisuales

Portfolio personal de David Ríos Ruedas, preparado para mantenimiento y publicación en GitHub Pages.

## Estado de la información

La información se ha consolidado comparando el PDF `Portfolio David Ríos .pdf` con el texto de LinkedIn proporcionado. LinkedIn tiene prioridad para la experiencia reciente: David trabaja actualmente en Xerppa como Especialista en creación y postproducción de contenido audiovisual, con el posicionamiento de Especialista en IA generativa y Editor de vídeo.

El contenido confirmado incluye producción audiovisual, edición, fotografía, redes sociales, eventos, making-of, motion graphics, avatares virtuales, voces sintéticas, clonación de voz, doblaje multilingüe y sincronización labial. No se han inventado nombres de herramientas de IA; sí se han mantenido las herramientas explícitas de las fuentes: Adobe Premiere, Adobe After Effects, Canon EOS 60D y Sony a6500.

## Tecnología elegida

Se utiliza **Vite + JavaScript vanilla + CSS**, sin backend ni dependencias de ejecución. Para este portfolio estático ofrece carga rápida, estructura sencilla y una publicación directa en GitHub Pages sin introducir complejidad innecesaria.

## Ejecutar localmente

Requisitos: Node.js 20.19 o superior y npm.

```bash
npm install
npm run dev
```

Abre la URL que indique Vite, normalmente `http://localhost:5173`.
`npm install` genera `package-lock.json`; inclúyelo en el primer commit para fijar las versiones instaladas en futuras versiones.

## Generar producción

```bash
npm run build
npm run preview
```

La carpeta generada es `dist/`.

Antes de publicar una versión, ejecuta `npm run build` y revisa la salida con `npm run preview`. No se debe versionar `dist/` ni `node_modules/`.

## Estructura

```text
.
├── .github/workflows/deploy-pages.yml  # Build y despliegue automático
├── public/
│   ├── assets/                          # Fotografías y recursos audiovisuales
│   └── favicon.svg
├── src/
│   ├── main.js                          # Contenido y comportamiento
│   └── styles.css                       # Diseño responsive y temas
├── index.html                           # Entrada y metadatos SEO
├── package.json
├── vite.config.js                       # base relativa para Pages
└── README.md
```

## Modificar el contenido

- Edita el contenido y las URLs de vídeo en `src/main.js`.
- Edita colores, tipografías, responsive y temas en `src/styles.css`.
- Guarda imágenes y otros recursos en `public/assets/` usando nombres ASCII, minúsculas y guiones.
- Usa rutas relativas como `./assets/nombre-del-archivo.jpg`; son compatibles con GitHub Pages bajo una subruta.
- No añadas datos profesionales, herramientas o proyectos que no estén respaldados por una fuente verificable.

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` compila y publica automáticamente cada push a `main`.

1. Ejecuta `npm install` y `npm run build` localmente antes de subir el proyecto.
2. Crea un repositorio público vacío en GitHub, sin README ni `.gitignore` automáticos.
3. Inicializa y conecta el repositorio local con los comandos de la sección siguiente.
4. Sube la rama `main`.
5. En **Settings > Pages > Build and deployment**, selecciona **GitHub Actions**.
6. Espera a que finalice la acción `Deploy to GitHub Pages`.
7. GitHub mostrará la URL pública en **Settings > Pages**. El workflow usa HTTPS automáticamente.

La URL exacta no puede conocerse todavía porque depende de tu usuario y del nombre final del repositorio. Será `https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/`.

## Versionado Git

Desde la carpeta del proyecto:

```bash
git init -b main
git add .
git commit -m "Preparar portfolio para GitHub Pages"
git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPOSITORIO.git
git push -u origin main
```

Para publicar cambios posteriores:

```bash
git add .
git commit -m "Actualizar portfolio"
git push
```

## Interacciones incluidas

- Navegación anclada responsive.
- Menú móvil accesible.
- Indicador de progreso de lectura.
- Cambio entre tema claro y oscuro.
- Animaciones de entrada respetando `prefers-reduced-motion`.
- Botón para volver al inicio.
- Enlace externo a LinkedIn.
- Tres publicaciones audiovisuales de LinkedIn incrustadas mediante iframe.
- Cuatro vídeos de YouTube incrustados mediante iframe.

## Pendientes de contenido

- Miniaturas y enlaces individuales de todos los proyectos del PDF.
- Nombres concretos de las herramientas de IA, si se desean publicar y aparecen en una fuente verificable.
- Formación y certificaciones, si existen.
- CV descargable, solo cuando exista un archivo real.
