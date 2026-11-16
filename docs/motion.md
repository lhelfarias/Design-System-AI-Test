# Motion

Rules for when to animate and when not to. Motion can cause dizziness, nausea and headaches for people with vestibular disorders, and it distracts everyone when it has no purpose.

**Principle:** motion must explain a change. If it explains nothing, do not animate.

## Use motion for

| Where | Why | Example |
|---|---|---|
| Focus on TV | Shows where the remote moved | Focused card scales to `layout.tv.focus-scale` (1.05) |
| State changes | Shows that something opened, closed or arrived | Accordion panel, Dialog, Notification banner |
| Feedback | Confirms the control received the action | Button hover and pressed |
| Data | Draws attention to the values once | Bar chart bars grow on first load |
| Continuity | Shows that an element is the same one in a new place | A card that expands into a page |

## Do not use motion

- **Behind or beside long text or forms.** Help articles, the simulator form, tables. Moving backgrounds lower legibility.
- **Loops that play next to content.** Anything that starts by itself, lasts more than 5 seconds and sits beside other content needs a pause, stop or hide control (WCAG 2.2.2, Level A). Prefer no loop.
- **Large movement.** No parallax, no full-screen slides tied to scroll, no spinning or zooming of large areas.
- **Flashing.** Nothing flashes more than three times in one second (WCAG 2.3.1, Level A).
- **Errors.** Do not shake fields. Use the Error message and the Notification banner.
- **Auto-advancing carousels.**
- **Waiting.** An animation never blocks input. The user can act before it ends.

## Rules

1. **Reduced motion.** When the operating system setting "reduce motion" is on, remove movement and scaling. Change instantly or fade opacity with `motion.duration.fast`. This follows WCAG 2.3.3 (Level AAA), which this system adopts although the target is AA.
2. **Three durations only.** Use the tokens below. Small changes are fast; larger areas are slower. Exits are faster than entrances.
3. **Ambient motion.** Allowed only in header bands and TV backgrounds. It is slow, it never sits behind body text, and text contrast must hold on every frame.
4. **One animation at a time.** Do not animate several unrelated elements together.
5. **Motion is never the only signal.** A state change also changes text, icon or color.
6. **TV.** Focus transitions use `motion.duration.fast`. Spacing between items absorbs the 1.05 scale.

## Tokens (proposed, not yet in tokens.json)

| Token | Value | Use |
|---|---|---|
| `motion.duration.fast` | 100ms | Hover, pressed, focus, fades |
| `motion.duration.base` | 200ms | Accordion, banner, small panels |
| `motion.duration.slow` | 400ms | Dialog, page-level changes, chart bars |
| `motion.easing.enter` | cubic-bezier(0, 0, 0.2, 1) | Elements entering or growing |
| `motion.easing.exit` | cubic-bezier(0.4, 0, 1, 1) | Elements leaving |

The values are a starting point chosen for this system, inside the 100–500 ms range commonly recommended for interface animation. They are not taken from a standard.

## In code

```css
.accordion-panel {
  transition: height var(--motion-duration-base) var(--motion-easing-enter);
}

@media (prefers-reduced-motion: reduce) {
  .accordion-panel {
    transition: none;
  }
}
```

## In Figma

Figma designs are static. Document motion with an annotation on the frame (what moves, which duration token, what happens with reduced motion) and, when needed, a prototype with Smart Animate using the same milliseconds.

## Sources

- WCAG 2.3.3 Animation from Interactions (Level AAA): https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions
- WCAG 2.2.2 Pause, Stop, Hide (Level A): https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide
- WCAG 2.3.1 Three Flashes or Below Threshold (Level A): https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold
- WCAG technique C39, `prefers-reduced-motion`: https://www.w3.org/WAI/WCAG22/Techniques/css/C39
- Nielsen Norman Group, "Executing UX Animations: Duration and Motion Characteristics": https://www.nngroup.com/articles/animation-duration/
