import { useContext } from 'react';
import { Context } from './App';
import type { ContextType } from './types';
import Dice from './Dice'
import DicePoolReadout from './DicePoolReadout';
import TakeSwitch from './TakeSwitch'

function DicePool() {
    const {d4, setD4, d6, setD6, d8, setD8, d10, setD10, d12, setD12, take2, setTake2} = useContext<ContextType>(Context);

    return (
        <div>
            <div className="flex flex-row justify-around">
                <Dice dice="d4" diceAmount={d4} diceFunction={setD4} />
                <Dice dice="d6" diceAmount={d6} diceFunction={setD6} />
                <Dice dice="d8" diceAmount={d8} diceFunction={setD8} />
                <Dice dice="d10" diceAmount={d10} diceFunction={setD10} />
                <Dice dice="d12" diceAmount={d12} diceFunction={setD12} />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 py-8">
                <div className="sm:pl-8">
                    <DicePoolReadout />
                </div>
                <div className="sm:pr-8">
                    <TakeSwitch checked={!take2} onChange={() => setTake2(!take2)} />
                </div>
            </div>
        </div>
    );
}

export default DicePool;
