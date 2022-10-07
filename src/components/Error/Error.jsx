import React from 'react'

export const Error = ({ page }) => {
  return (
    <>
      <h1 className="message-error">
        Ha ocurrido un error en {page || 'esta pagina'}, intenta de nuevo o
        vuelve mas tarde 😢
      </h1>
    </>
  )
}
