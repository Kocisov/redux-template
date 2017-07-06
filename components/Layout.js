import React from 'react'
import { createComponent } from 'react-fela'

const Layout = ({ children, className }) =>
  <div className={className}>
    {children}
  </div>

const css = () => ({
  display: 'flex',
  alignItems: 'center',
})

export default createComponent(css, Layout)
