import React from 'react'

export const CharacterSingle = ({ character = {} }) => {
  return (
    <>
      <div className="flex gap-4 pt-10 mx-3">
        <div className="my-8 w-full rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
          <figure className="flex items-center gap-24 px-48 py-20">
            <img
              src={character.image}
              className="rounded-t object-cover w-1/3"
              alt={character.name}
            />

            <figcaption className="p-4">
              <div className="flex flex-col gap-1">
                <small className="text-3xl leading-10 text-gray-500 dark:text-gray-400">
                  Species: {character.species}
                </small>
                <small className="text-3xl leading-10 text-gray-500 dark:text-gray-400">
                  Gender: {character.gender}
                </small>
                <small className="text-3xl leading-10 text-gray-500 dark:text-gray-400">
                  Status: {character.status}
                </small>
                <small className="text-3xl leading-10 text-gray-500 dark:text-gray-400">
                  Origin: {character.origin.name}
                </small>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}
