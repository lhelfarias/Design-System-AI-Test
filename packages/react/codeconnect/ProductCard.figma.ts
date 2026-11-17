// url=https://www.figma.com/design/M0pBcAnDr1iLJXpcyZ2Epa/UI-Kit-AI-Test?node-id=45-202
// source=packages/react/src/components/Content.tsx
// component=ProductCard
import figma from 'figma'
const instance = figma.selectedInstance

const name = instance.getString('Name')
const description = instance.getString('Description')
const price = instance.getString('Price')
// The tag is a nested Tag instance; its template exposes label and type as metadata props.
let tagLabel
let tagType
if (instance.getBoolean('Show tag')) {
  const tag = instance.findInstance('tag')
  if (tag && tag.type === 'INSTANCE') {
    const props = tag.executeTemplate().metadata.props
    tagLabel = props && props.label
    tagType = props && props.type
  }
}
// State (Default, Hover, Focus) is CSS. "Show action": the code card always shows "Add to cart" (decision of this system).

export default {
  example: figma.code`<ProductCard
  name="${name}"
  description="${description}"
  price="${price}"${tagLabel ? figma.code`
  tag={{ label: "${tagLabel}", type: "${tagType}" }}` : ''}
/>`,
  imports: ['import { ProductCard } from "@lhelfarias/react"'],
  id: 'product-card',
  metadata: { nestable: false },
}
