import { createRenderer } from 'fela'
import webPreset from 'fela-preset-web'

const renderer = createRenderer({
  plugins: [
    ...webPreset
  ]
})

export const getRenderer = () => renderer
export const getMountNode = () => document.getElementById('fela-style')
