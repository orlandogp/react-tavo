import React from 'react'
import { Link } from 'react-router-dom'

export const CardCharacter = ({ character = {} }) => {
  return (
    <>
      <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
        <Link to={`/characters/${character.id}`}>
          <div className="cursor-pointer">
            <figure>
              <img
                src={character.image}
                className="rounded-t h-72 w-full object-cover"
                alt={character.name}
              />

              <figcaption className="p-4">
                <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                  {character.name}
                </p>

                <div className="flex flex-col gap-1">
                  <small className="leading-5 text-gray-500 dark:text-gray-400">
                    Species: {character.species}
                  </small>
                  <small className="leading-5 text-gray-500 dark:text-gray-400">
                    Gender: {character.gender}
                  </small>
                  <small className="leading-5 text-gray-500 dark:text-gray-400">
                    Status: {character.status}
                  </small>
                  <small className="leading-5 text-gray-500 dark:text-gray-400">
                    Origin: {character.origin.name}
                  </small>
                </div>
              </figcaption>
            </figure>
          </div>
        </Link>
      </div>
    </>
  )
}
