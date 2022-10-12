import React from 'react'

import { Layout, Loading, Error, ListEpisode } from '../../components'

import { useEpisode } from '../../hooks'

export const Episodes = () => {
  const { episodes, isError, isLoading } = useEpisode()
  return (
    <Layout>
      <h1 className="title">Explore all episodes</h1>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error page="episodes" />
      ) : (
        <ListEpisode episodes={episodes} />
      )}
    </Layout>
  )
}
