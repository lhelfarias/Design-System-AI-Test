// url=https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=6-82
// source=packages/react/src/components/Button.tsx
// component=Button
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Type', { 'Primary': 'primary', 'Secondary': 'secondary' })
// State: Default, Hover, Pressed and Focus are interaction states in CSS; only Disabled is a prop.
const disabled = instance.getEnum('State', { 'Default': false, 'Hover': false, 'Pressed': false, 'Focus': false, 'Disabled': true })
const iconStart = instance.getBoolean('Icon start') ? instance.getInstanceSwap('Icon start swap') : null
let iconStartCode
if (iconStart && iconStart.type === 'INSTANCE') {
  iconStartCode = iconStart.executeTemplate().example
}
// "Icon end" has no prop in code: the code Button only supports iconStart (decision: one icon, before the label).

export default {
  example: figma.code`<Button variant="${variant}"${iconStartCode ? figma.code` iconStart={${iconStartCode}}` : ''}${disabled ? ' disabled' : ''}>${label}</Button>`,
  imports: ['import { Button } from "@lhelfarias/react"'],
  id: 'button',
  metadata: { nestable: true },
}
