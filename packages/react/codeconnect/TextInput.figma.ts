// url=https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=16-70
// source=packages/react/src/components/TextInput.tsx
// component=TextInput
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const hint = instance.getBoolean('Show hint') ? instance.getString('Hint') : undefined
const text = instance.getString('Value')
const filled = instance.getEnum('Content', { 'Placeholder': false, 'Filled': true })
const state = instance.getEnum('State', { 'Default': 'default', 'Focus': 'default', 'Error': 'error', 'Disabled': 'disabled' })
// The error text lives in the nested "Error message" instance (layer "error" > text "message").
let error
if (state === 'error') {
  const message = instance.findText('message', { traverseInstances: true, path: ['error'] })
  if (message && message.textContent) error = message.textContent
}

export default {
  example: figma.code`<TextInput label="${label}"${hint ? figma.code` hint="${hint}"` : ''}${filled ? figma.code` defaultValue="${text}"` : figma.code` placeholder="${text}"`}${error ? figma.code` error="${error}"` : ''}${state === 'disabled' ? ' disabled' : ''} />`,
  imports: ['import { TextInput } from "@lhelfarias/react"'],
  id: 'text-input',
  metadata: { nestable: true },
}
