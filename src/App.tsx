import { createContext, useState } from 'react'
import './App.css'
import DicePool from './DicePool'
import ProbabilityChart from './ProbabilityChart'

//make a type definition for this at some point
export const Context = createContext<any>(null);

function App() {
  const [d4, setD4] = useState(0)
  const [d6, setD6] = useState(0)
  const [d8, setD8] = useState(0)
  const [d10, setD10] = useState(0)
  const [d12, setD12] = useState(0)
  const [take2, setTake2] = useState(true)

  return (
    <Context.Provider value={{d4, setD4, d6, setD6, d8, setD8, d10, setD10, d12, setD12, take2, setTake2}}>
      <DicePool />
      <ProbabilityChart />
    </Context.Provider>
  )
}

export default App
