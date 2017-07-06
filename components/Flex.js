import { createComponent } from 'react-fela'

export default createComponent(
  ({ ai = 'inherit', jc = 'inherit', fd = 'row' }) => ({
    alignItems: ai,
    display: 'flex',
    flexDirection: fd,
    justifyContent: jc,
  }),
  'div'
)
