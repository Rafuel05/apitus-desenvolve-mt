import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestTailwind from './components/TestTailwind'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TestTailwind />
  )
}

export default App
