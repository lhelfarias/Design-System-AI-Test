# Tokens

`tokens.json` es la **única fuente de verdad**. Tokens Studio lo lee y lo escribe (modo "File").
No edites los archivos de `dist/` a mano: se generan.

## Capas

| Set | Contenido | Regla |
|---|---|---|
| `reference` | Valores crudos (rampas de color, escala de 4 px, tamaños) | No se usa directo en componentes |
| `system` | Significado (`color.text.default`, `space.inset.md`) | Solo apunta a `reference` |
| `component` | Decisiones por componente (`button.primary.background`) | Solo apunta a `system` |

Estado en Tokens Studio: `reference` como *Source*, `system` y `component` como *Enabled*.

## Comandos

```
npm run build   # genera dist/dtcg-2025.10/ y dist/tokens.resolved.json
npm run check   # verifica contraste WCAG 2.2 de los pares de color
npm test        # ambos; falla si un alias está roto o un par no cumple
```

Requiere Node 18 o superior. No tiene dependencias.

## Reglas de uso que no se pueden deducir de los valores

- `color.text.muted` (#6B6B6B) no se usa sobre azul 100 o más oscuro (4.05:1); usar `color.text.brand`.
- `color.border.subtle` (#DDDDDD, 1.36:1) es solo decorativo; los controles usan `color.border.control`.
- `color.feedback.warning.solid` (#F5A623) nunca es el único indicador.
- Los tokens deshabilitados están exentos de contraste (WCAG 1.4.3).
