import { useEffect, useState } from 'react'
import axios from 'axios'

export const useCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const {
          data: { results }
        } = await axios.get(`https://rickandmortyapi.com/api/character`)
        setCharacters(results)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      }
    }

    getCharacters()
  }, [])

  return {
    characters,
    isLoading,
    isError
  }
}
