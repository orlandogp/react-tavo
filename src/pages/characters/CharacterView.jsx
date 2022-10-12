import { Layout, Loading, Error, CharacterSingle } from '../../components'
import { useOneCharacter } from '../../hooks'
import React from 'react'

export const CharacterView = () => {
  const { character, isError, isLoading } = useOneCharacter()
  return (
    <Layout>
      <h1 className="title">{character.name}</h1>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error page="character-view" />
      ) : (
        <CharacterSingle character={character} />
      )}
    </Layout>
  )
}
