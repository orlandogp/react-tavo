import React from 'react'

import { Navigation, Footer } from '../../components'

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      {/* <Footer /> */}
    </>
  )
}
