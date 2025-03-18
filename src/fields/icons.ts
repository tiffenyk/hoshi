import type { Field, Option } from 'payload'
import * as icons from 'flowbite-react-icons/solid'
import * as flowbiteSolidIcons from 'flowbite-react-icons/solid'
import deepMerge from '@/utilities/deepMerge'

export function generateFlowbiteIconOptions(): Option[] {
  const flowbiteIconOptions: Option[] = []
  Object.keys(icons).forEach((icon) => {
    flowbiteIconOptions.push({
      label: icon,
      value: icon,
    })
  })
  console.debug('flowbiteIconOptions', flowbiteIconOptions)
  return flowbiteIconOptions
}

export function flowbiteIcons({ overrides = {} } = {}): Field {
  const flowbiteIcon: Field = {
    name: 'icon',
    type: 'select',
    options: generateFlowbiteIconOptions(),
  }
  return deepMerge(flowbiteIcon, overrides)
}
