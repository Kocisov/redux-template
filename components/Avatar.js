import { createComponent } from 'react-fela'

export default createComponent(
  ({ w, h }) => ({
    height: h || 40,
    margin: 0,
    objectFit: 'cover',
    width: w || 40,
  }),
  'img',
  ['src', 'alt']
)
