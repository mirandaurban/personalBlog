# Miranda's blog 🌈✨🦋🧠🍃🌌
Mi blog personal de reseñas, opiniones y más. Aquí es posible experimentar el mundo a través de mi mente, te invito a leerlo. 
Todo lo comparto con mucho cariño y con ganas de compartirle al mundo un poco de lo que encuentro valioso.

**¿Qué vas a encontrar?**
- Reseñas y resumenes de los libros que he leído
- Recomendaciones
- Sección “TBR” (To Be Read)
- (Próximamente) opiniones, tips, y más

---

## Cómo funciona este repositorio

**Reglas y flujo de trabajo** 

- **Branch principal**: `main` → siempre en producción (GitHub Pages lo deployea automáticamente).
- **Branch de desarrollo**: `develop` → aquí pruebo todo nuevo.
- **Commits**: especificar tipo de commit y breve descripción (ej. `feat: nuevo post sobre El libro X`).
- **Posts nuevos**: siempre en `src/content/blog/` con formato `titulo-del-post.md`.
- **Imágenes**: solo en carpeta `public/images/` (portadas, collages, etc.).
- **Cambios grandes**: primero en `develop`, luego merge a `main` con Pull Request.
- **Issues**: uso las plantillas que están en `.github/ISSUE_TEMPLATE/`.
- **Pull Requests**: siempre con descripción clara y pruebas locales (`npm run build`).

**Licencias**  
- Código fuente (Astro, componentes, estilos): **MIT License** (ver `LICENSE`).  
- Contenido (reseñas, textos, opiniones): **Creative Commons BY-NC-SA 4.0** (ver `CONTENT-LICENSE.md`).  
Puedes compartir mis textos con atribución y sin fines comerciales.

---

## Estructura de archvios
blog personal/                    # Raíz del repositorio
├── .github/                      # Para workflows, ISSUE_TEMPLATE, etc.
├── public/                       # Archivos estáticos
│   ├── images/                   # Imágenes del blog
├── src/                          # Todo el código fuente
│   ├── components/               # Componentes reutilizables
│   ├── content/                  # Posts y colecciones
│   │   ├── blog/                 # Colección de reseñas/resúmenes
│   ├── layouts/                  # Plantillas base para páginas
│   ├── pages/                    # Rutas automáticas (filename = URL)
│   │   ├── index.astro           # Home: lista de lecturas recientes, collage, intro
│   │   ├── blog/                 # Carpeta para sección /blog
│   │   │   ├── index.astro       # Lista de todos los posts (/blog)
│   ├── styles/                   # CSS global o por página
│   │   ├── global.css
├── README.md                     
├── LICENSE                       # MIT para código
└── CONTENT-LICENSE.md            # CC para textos

---

## 🚀 Cómo correr el blog localmente

```bash
npm install
npm run dev
