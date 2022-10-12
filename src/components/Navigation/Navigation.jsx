import { useNavigation } from '../../hooks'
import { Link } from 'react-router-dom'
import React from 'react'

export const Navigation = () => {
  const { response } = useNavigation()
  return (
    <>
      <nav className="bg-black bg-opacity-80 sticky top-0 px-60 z-50 flex justify-between items-center gap-10 text-green-600 ">
        <a href="/">
          <img
            className="w-32"
            src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
            alt="Logo Home"
          />
        </a>
        <ul className="flex justify-center items-center gap-10">
          {response &&
            Object.keys(response).map((key, index) => (
              <li
                className="cursor-pointer hover:text-orange-500 font-bold"
                key={index}
              >
                <Link to={`/${key}`}>{key.toUpperCase()}</Link>
              </li>
            ))}
          <li className="cursor-pointer hover:text-orange-500 font-bold uppercase">
            <Link to={`/favorites`}>Favorites</Link>
          </li>
          <a
            className="button-primary-menu"
            href="https://shorturl.at/JLS67"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
              />
            </svg>
            Join Us
          </a>
        </ul>
      </nav>
    </>
  )
}
