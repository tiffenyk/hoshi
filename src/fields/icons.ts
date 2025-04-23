import type { Field, Option } from 'payload'
import deepMerge from '@/utilities/deepMerge'

import flowbiteIconsData from '@iconify-json/flowbite/icons.json' assert { type: 'json' }

export function generateFlowbiteIconOptions(): Option[] {
  const iconNames = Object.keys(flowbiteIconsData.icons || {})

  const flowbiteIconOptions: Option[] = iconNames.map((iconName) => ({
    label: `${iconName}`,
    value: `flowbite:${iconName}`,
  }))

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
