import { useState } from 'react'
import './App.css'
import Dice from './Dice'

function App() {
  const [d4, setd4] = useState(0)
  const [d6, setd6] = useState(0)
  const [d8, setd8] = useState(0)
  const [d10, setd10] = useState(0)
  const [d12, setd12] = useState(0)

  return (
    <>
      <div>
        <Dice diceLabel="Add d4" diceFunction={() => setd4(d4 + 1)} />
        <Dice diceLabel="Add d6" diceFunction={() => setd6(d6 + 1)} />
        <Dice diceLabel="Add d8" diceFunction={() => setd8(d8 + 1)} />
        <Dice diceLabel="Add d10" diceFunction={() => setd10(d10 + 1)} />
        <Dice diceLabel="Add d12" diceFunction={() => setd12(d12 + 1)} />
        <br/>
        <Dice diceLabel="Remove d4" diceFunction={() => setd4(d4 > 0 ? d4 - 1 : d4)} />
        <Dice diceLabel="Remove d6" diceFunction={() => setd6(d6 > 0 ? d6 - 1 : d6)} />
        <Dice diceLabel="Remove d8" diceFunction={() => setd8(d8 > 0 ? d8 - 1 : d8)} />
        <Dice diceLabel="Remove d10" diceFunction={() => setd10(d10 > 0 ? d10 - 1 : d10)} />
        <Dice diceLabel="Remove d12" diceFunction={() => setd12(d12 > 0 ? d12 - 1 : d12)} />
        <br/>
        <Dice diceLabel="Reset d4" diceFunction={() => setd4(0)} />
        <Dice diceLabel="Reset d6" diceFunction={() => setd6(0)} />
        <Dice diceLabel="Reset d8" diceFunction={() => setd8(0)} />
        <Dice diceLabel="Reset d10" diceFunction={() => setd10(0)} />
        <Dice diceLabel="Reset d12" diceFunction={() => setd12(0)} />
      </div>
      <div className="card">
        d4 is {d4}&nbsp;
        d6 is {d6}&nbsp;
        d8 is {d8}&nbsp;
        d10 is {d10}&nbsp;
        d12 is {d12}
      </div>
    </>
  )
}

export default App
