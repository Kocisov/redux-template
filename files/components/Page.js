import styled from 'styled-components'
import styledProps from '../static/styledProps'

export default styled.div`
  ${props => styledProps(props)};
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`
