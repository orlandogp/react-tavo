import { useState, useEffect } from 'react'
import axios from 'axios'

export const useEpisode = () => {
  const [episodes, setEpisodes] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/episode`
        )
        const { results } = data
        setIsLoading(false)
        setEpisodes(results)
      } catch (error) {
        setIsError(true)
        setIsLoading(false)
      }
    }
    getEpisodes()
  }, [])
  return { episodes, isLoading, isError }
}
