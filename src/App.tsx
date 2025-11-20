import { createContext, useState } from 'react'
import NewUserModal from './NewUserModal';
import NewUserModalOpenIcon from './NewUserModalOpenIcon';
import DicePool from './DicePool'
import ProbabilityChart from './ProbabilityChart'
import type { ContextType } from './types';
import { defaultContextObject } from './types';

export const Context = createContext<ContextType>(defaultContextObject);

function App() {
  const [d4, setD4] = useState(0)
  const [d6, setD6] = useState(0)
  const [d8, setD8] = useState(0)
  const [d10, setD10] = useState(0)
  const [d12, setD12] = useState(0)
  const [take2, setTake2] = useState(true)
  const totalDice = d4 + d6 + d8 + d10 + d12;
  //capped for performance reasons
  //if I can make the permutation map generate faster I can raise this higher
  //TODO: add a loading spinner and some async logic to make higher dice pools more bearable
  const maxDice = 5;

  const modalSeen = localStorage.getItem('modalSeen');
  const [modalOpen, setModalOpen] = useState(modalSeen == 'true' ? false : true)

  return (
    <>
      <NewUserModal modalOpen={modalOpen} modalSetOpenFunction={setModalOpen} />
      <NewUserModalOpenIcon modalSetOpenFunction={setModalOpen} />
      <Context.Provider value={{d4, setD4, d6, setD6, d8, setD8, d10, setD10, d12, setD12, take2, setTake2, totalDice, maxDice}}>
        <DicePool />
        <ProbabilityChart />
      </Context.Provider>
    </>
  )
}

export default App
