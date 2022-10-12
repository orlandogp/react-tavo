import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const useOneCharacter = () => {
  const [character, setCharacter] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getOneCharacter = async () => {
      try {
        if (typeof id !== 'string') throw new Error('Invalid character id')
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        )
        setCharacter(data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      }
    }

    getOneCharacter()
  }, [])

  return {
    character,
    isLoading,
    isError
  }
}
