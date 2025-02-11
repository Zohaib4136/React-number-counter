import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let incCounter=()=>{
    setCount (count+1);
  }

  return (
    <>
      <h1>Counter = {count}</h1>
      <button onClick={incCounter}>+</button>
    </>
  )
}

export default App
