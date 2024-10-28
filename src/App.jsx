import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const ref = useRef({ x: 0 })


  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
      <button onClick={() => ref.current.x++}>Useref</button>
      <h1>`Usestate count is ${count}, useref count is ${ref.current.x}`</h1>
    </>
  )
}


export default App