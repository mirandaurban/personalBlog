# Componentes

Breve descripción de los componentes que conforman la página.

## BookCard.astro

Componente que construye la visualización de los resumenes de los libros a manera de tarjetas. Contiene información como:

- Title = string
- Author = string
- Excerpt = string
- Genre = string
  - Opciones = ficción, ensayo, poesía, folosofía, historia, otros
- Date = string
- Read time = string

## TagBadge.astro

Componente que permite asignar estilos dependiendo del tipo de género del resumen. Se configura:

- Background color
- Color
- Text

## Ticker.astro

Componente "corazón" de la página, es la barra de la página principal que muestra difentes frases. Le aporta un toque único y movimiento a la interfaz. Se configura:

- Items (frases)
- Background color
- Color
