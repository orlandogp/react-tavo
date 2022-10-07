import React, { useState, useEffect } from 'react'

const Button = props => {
  const { title, handle } = props
  return (
    <button
      type="button"
      className="bg-green-500 rounded-lg shadow-lg px-5 py-2 my-2 hover:bg-yellow-500 text-white"
      onClick={handle}
    >
      {title}
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: '', lastname: '' })

  const handleAdd = () => setCount(count + 1)
  const handleSub = () => setCount(count - 1)
  const handleInput = e =>
    setUser({ ...user, [e.target.name]: [e.target.value] })

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <div className="flex w-full h-screen justify-center items-center flex-col">
        <h1 className="text-3xl text-blue-800 font-semibold">
          El padrino mágico 🧚‍♂️
        </h1>
        <span className="text-3xl text-orange-500 font-semibold">{count}</span>
        <div className="flex justify-center items-center gap-5">
          <Button title="incrementar ⬆️" handle={handleAdd} />
          <Button title="decrementar ⬇️" handle={handleSub} />
        </div>
        <input
          type="text"
          name="name"
          placeholder="🧔 name"
          className="border-2 placeholder-indigo-500 px-5 py-2 rounded-lg my-2  text-green-600"
          onChange={handleInput}
          value={user.name}
        />
        <input
          type="text"
          name="lastname"
          placeholder="👨‍🦳 lastname"
          className="border-2 placeholder-indigo-500 px-5 py-2 rounded-lg my-2 text-green-600"
          onChange={handleInput}
          value={user.lastname}
        />
      </div>
    </>
  )
}

export default App
