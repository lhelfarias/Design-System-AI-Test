# Tokens

`tokens.json` es la **única fuente de verdad**. Tokens Studio lo lee y lo escribe (modo "File").
No edites los archivos de `dist/` a mano: se generan.

## Capas

| Set | Contenido | Regla |
|---|---|---|
| `reference` | Valores crudos (rampas de color, escala de 4 px, tamaños) | No se usa directo en componentes |
| `system` | Significado (`color.text.default`, `space.inset.md`) | Solo apunta a `reference` |
| `component` | Decisiones propias de un componente (`button.primary.background`) | Solo apunta a `system` |

Estado en Tokens Studio: `reference` como *Source*, `system` y `component` como *Enabled*.

## Comandos

```
npm run build   # genera dist/dtcg-2025.10/ y dist/tokens.resolved.json
npm run check   # verifica contraste WCAG 2.2 de los pares de color
npm test        # ambos; falla si un alias está roto o un par no cumple
```

Requiere Node 18 o superior. No tiene dependencias.

## Cuándo crear un token de componente

Solo cuando el componente toma una decisión propia: un tamaño, un padding, un color de variante (Primary, Secondary, Tag success).
Si el componente usa el mismo valor y el mismo significado que system, usa la variable de system directamente.
Ejemplos: fondo de campo → `color.surface.default`; borde de control → `color.border.control`; foco → `focus.ring.color`; deshabilitado → `color.action.disabled.*`; alto mínimo → `size.target-min`.
Motivo: cada variable de más es una opción más para quien diseña y para el agente de Figma, y más texto que el agente lee en cada tarea.

Las descripciones de los tokens tienen como máximo 8 palabras. El detalle va en esta sección.

## Reglas de uso que no se pueden deducir de los valores

- `color.text.muted` (#6B6B6B) no se usa sobre azul 100 o más oscuro (4.05:1); usar `color.text.brand`.
- `color.border.subtle` (#DDDDDD, 1.36:1) es solo decorativo; los controles usan `color.border.control`.
- `color.feedback.warning.solid` (#F5A623) nunca es el único indicador.
- Los tokens deshabilitados están exentos de contraste (WCAG 1.4.3).
- `neutral.600` da 5.33:1 sobre blanco y 4.05:1 sobre azul 100: por eso no se usa como texto sobre azul 100 o más oscuro.
- `amber.500` da 2.03:1 sobre blanco: solo como relleno con texto oscuro encima (7.75:1).
- Interlineado en porcentaje (125%, 150%): en Figma un número sin unidad se lee como píxeles. WCAG 1.4.12 pide tolerar 1.5.
- `size.target-min` (44 px) es una decisión del sistema: WCAG 2.2 AA exige 24 px y AAA 44 px.
- Borde de error de 2 px en campos (el normal es 1 px), para que el error no dependa solo del color. Si se agregan tamaños, cada tamaño define su grosor.
