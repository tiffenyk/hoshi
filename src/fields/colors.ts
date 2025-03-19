import type { Field, Option } from 'payload'
import deepMerge from '@/utilities/deepMerge'

export function generateColorOptions(): Option[] {
  const tailwindColors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
    'white',
    'black',
  ]

  const colorOptions: Option[] = tailwindColors.map((color) => ({
    label: color,
    value: color,
  }))

  return colorOptions
}

export function tailwindColors({ overrides = {} } = {}): Field {
  const colors: Field = {
    name: 'color',
    type: 'select',
    options: generateColorOptions(),
  }
  return deepMerge(colors, overrides)
}
