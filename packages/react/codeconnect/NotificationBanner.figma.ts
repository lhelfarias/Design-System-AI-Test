// url=https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=27-81
// source=packages/react/src/components/Content.tsx
// component=NotificationBanner
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const body = instance.getString('Body')
const type = instance.getEnum('Type', { 'Info': 'info', 'Success': 'success', 'Warning': 'warning', 'Error': 'error' })
// The icon changes with Type inside the component; it is not a prop.

export default {
  example: figma.code`<NotificationBanner type="${type}" title="${title}">
  <p>${body}</p>
</NotificationBanner>`,
  imports: ['import { NotificationBanner } from "@lhelfarias/react"'],
  id: 'notification-banner',
  metadata: { nestable: true },
}
