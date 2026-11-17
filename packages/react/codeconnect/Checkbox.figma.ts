// url=https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=25-54
// source=packages/react/src/components/Choice.tsx
// component=Checkbox
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const checked = instance.getEnum('Checked', { 'False': false, 'True': true })
// State: Focus is CSS; Error is shown by the parent Fieldset (error prop); Disabled is a prop.
const state = instance.getEnum('State', { 'Default': 'default', 'Focus': 'default', 'Error': 'error', 'Disabled': 'disabled' })

export default {
  example: figma.code`<Checkbox label="${label}"${checked ? ' defaultChecked' : ''}${state === 'error' ? ' aria-invalid' : ''}${state === 'disabled' ? ' disabled' : ''} />`,
  imports: ['import { Checkbox } from "@lhelfarias/react"'],
  id: 'checkbox',
  metadata: { nestable: true },
}
