import React from 'react'
import styled from 'styled-components'

const Button = ({ className, onPress, disabled, children }) => (
  <div
    className={className}
    role="button"
    onClick={() => {
      disabled ? null : onPress()
    }}
  >
    {children}
  </div>
)

export default styled(Button)`
  align-items: center;
  background: #dedede;
  border: 1px dashed #e7e7e7;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
`
