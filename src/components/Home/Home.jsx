import React from 'react'

export const Home = () => {
  return (
    <>
      <div className="content-body">
        <div className="grid grid-cols-2 px-20">
          <div className="flex flex-col justify-center p-20">
            <h1 className="text-8xl text-left py-10">Rick & Morty</h1>
            <h2 className="text-2xl font-light">
              Rick, an alcoholic sociopath and scientist, lives with his
              daughter Beth&apos;s family. Apart from building gadgets, he takes
              his morally right but dimwit grandson Morty on absurd
              intergalactic adventures.
            </h2>
            <a
              className="button-primary"
              href="https://shorturl.at/cfoR6"
              target="_blank"
              rel="noreferrer"
            >
              More info
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
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fb14bb87efaf64ab5fab6a9/1627914599774-IL6GVB4XUYXQJV7248ZB/rick-and-morty.png"
            alt="Rick & Morty HomePage"
          />
        </div>
      </div>
    </>
  )
}
