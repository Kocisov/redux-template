import { createComponent } from 'react-fela'

export default createComponent(
  props => ({
    margin: 0,
    borderRadius: 3,
    border: 0,
    outline: 0,
    padding: '5px 10px',
    minWidth: 200,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  }),
  'button'
)
