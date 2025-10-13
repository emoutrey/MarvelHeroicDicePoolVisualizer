import { useState } from 'react'
import './App.css'
import DicePool from './DicePool'
import ProbabilityChart from './Chart'

function App() {
  const [d4, setD4] = useState(0)
  const [d6, setD6] = useState(0)
  const [d8, setD8] = useState(0)
  const [d10, setD10] = useState(0)
  const [d12, setD12] = useState(0)
  const [take2, setTake2] = useState(true)

  return (
    <>
      <div>
        <DicePool
          d4={d4} setD4={setD4}
          d6={d6} setD6={setD6}
          d8={d8} setD8={setD8}
          d10={d10} setD10={setD10}
          d12={d12} setD12={setD12}
        />
        <button onClick={() => setTake2(!take2)}>{take2 ? 'Taking 2' : 'Taking 3'}</button>
      </div>
      <ProbabilityChart d4={d4} d6={d6} d8={d8} d10={d10} d12={d12} take2={take2} />
    </>
  )
}

export default App
