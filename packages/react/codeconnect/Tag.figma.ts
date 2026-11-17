// url=https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=23-32
// source=packages/react/src/components/Content.tsx
// component=Tag
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const type = instance.getEnum('Type', { 'Neutral': 'neutral', 'Brand': 'brand', 'Success': 'success', 'Error': 'error', 'Warning': 'warning', 'Info': 'info' })

export default {
  example: figma.code`<Tag type="${type}">${label}</Tag>`,
  imports: ['import { Tag } from "@lhelfarias/react"'],
  id: 'tag',
  metadata: { nestable: true, props: { label, type } },
}
