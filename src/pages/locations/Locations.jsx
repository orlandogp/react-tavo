import React from 'react'
import { Layout, Loading, ListLocations, Error } from '../../components'
import { useLocation } from '../../hooks'

export const Locations = () => {
  const { locations, isLoading, isError } = useLocation()
  return (
    <Layout>
      <h1 className="title">Explore all locations</h1>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error page="locations" />
      ) : (
        <ListLocations locations={locations} />
      )}
    </Layout>
  )
}
