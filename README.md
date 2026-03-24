# Miranda Urban — Blog personal 🌈✨🦋🧠🍃🌌

Mi blog personal de reseñas, reflexiones y todo lo que encuentro valioso en los libros.
Aquí es posible experimentar el mundo a través de mi mente — te invito a leerlo.
Todo lo comparto con mucho cariño y con ganas de compartirle al mundo un poco de lo que encuentro valioso.

**¿Qué vas a encontrar?**

- Reseñas y reflexiones de los libros que he leído
- Notas libres sobre leer, pensar y todo lo demás
- Archivo cronológico de lecturas y notas

🔗 [mirandaurban.com](https://buttondown.com/mirandaurban) · 📬 [Suscríbete](https://buttondown.com/mirandaurban)

---

## Cómo funciona este repositorio

**Reglas y flujo de trabajo**

- **Branch principal**: `main` → siempre en producción (Vercel lo deployea automáticamente).
- **Branch de desarrollo**: `develop` → aquí pruebo todo nuevo.
- **Commits**: especificar tipo de commit y breve descripción (ej. `feat: nueva reseña de El libro X`).
- **Lecturas nuevas**: en `src/content/lecturas/` con formato `titulo-del-libro.md`.
- **Notas nuevas**: en `src/content/notas/` con formato `titulo-de-la-nota.md`.
- **Imágenes**: en `public/images/` (collages, fotos) y `public/images/covers/` (portadas de libros).
- **Cambios grandes**: primero en `develop`, luego merge a `main` con Pull Request.
- **Issues**: uso las plantillas que están en `.github/ISSUE_TEMPLATE/`.
- **Pull Requests**: siempre con descripción clara y pruebas locales (`npm run build`).

**Licencias**  
- Código fuente (Astro, componentes, estilos): **MIT License** (ver `CODE-LICENSE`).  
- Contenido (reseñas, textos, opiniones): **Creative Commons BY-NC-SA 4.0** (ver `CONTENT-LICENSE.md`).  
Puedes compartir mis textos con atribución y sin fines comerciales.

---

## Estructura de archivos

```
personalBlog/
├── .github/
│   └── ISSUE_TEMPLATE/
├── public/
│   └── images/
│       └── covers/        ← portadas de libros
├── src/
│   ├── components/
│   │   ├── BookCard.astro
│   │   ├── TagBadge.astro
│   │   └── Ticker.astro
│   ├── content/
│   │   ├── lecturas/      ← reseñas de libros (.md)
│   │   └── notas/         ← reflexiones libres (.md)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── lecturas.astro
│   │   ├── notas.astro
│   │   ├── archivo.astro
│   │   ├── sobre-mi.astro
│   │   ├── suscripcion.astro
│   │   ├── terminos.astro
│   │   ├── lecturas/
│   │   │   └── [slug].astro
│   │   └── notas/
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── src/content.config.ts  ← schema de Content Collections
├── astro.config.mjs
└── README.md
```

---

## Frontmatter de una lectura

```yaml
---
title: "Título del libro"
author: "Nombre del autor"
genre: ficcion # ficcion | ensayo | poesia | filosofia | historia | otro
coverImage: "/images/covers/nombre.jpg" # opcional
rating: 4 # 1-5, opcional
date: 2026-03-20T12:00:00 # fecha de publicación de la reseña
readTime: "10 min"
excerpt: "Una línea que aparece en la card."
readYear: 2023 # opcional — año en que se leyó, si difiere del año de publicación
year: 1985 # año de publicación del libro, opcional
publisher: "Editorial" # opcional
---
```

## Frontmatter de una nota

```yaml
---
title: "Título de la nota"
date: 2026-03-20T12:00:00
readTime: "4 min"
excerpt: "Una línea que resume la nota."
---
```

---

## 🚀 Cómo correr el blog localmente

```bash
npm install
npm run dev
```

Visita `http://localhost:4321` en tu navegador.

```bash
npm run build
npm run preview
```
