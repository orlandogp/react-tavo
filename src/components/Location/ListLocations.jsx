import React from 'react'
import { CardLocation } from './CardLocation'

export const ListLocations = ({ locations }) => {
  return (
    <>
      {locations.length < 1 ? (
        <div className="flex w-full h-5/6 justify-center items-center">
          <h1 className="text-2xl text-purple-600 font-bold">
            No locations available.
          </h1>
        </div>
      ) : (
        <div className="flex flex-col w-full h-5/6 justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 mx-3">
            {locations.map((location, index) => (
              <CardLocation key={index} location={location} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
