import React from 'react'

import { Layout, Loading, Error } from '../../components'

export const Favorites = () => {
  const isError = false
  const isLoading = false
  return (
    <Layout>
      <h1 className="title">Favorites</h1>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error page="favorites" />
      ) : (
        <p>facilito el tutorial</p>
      )}
    </Layout>
  )
}
