import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-3xl  bg-amber-50 font-bold underline'>
        Hello Vite + React!
        </p>
    </>
  )
}

export default App
