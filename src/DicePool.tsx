import { useContext } from 'react';
import { Context } from './App';
import Dice from './Dice'

function DicePool() {
    const {d4, setD4, d6, setD6, d8, setD8, d10, setD10, d12, setD12, take2, setTake2} = useContext<any>(Context);

    const totalDice = d4 + d6 + d8 + d10 + d12;
    //capped for performance reasons
    //if I can make the permutation map generate faster I can raise this higher
    const maxDice = 6;

    {/* TODO: Make these pictures of dice or something, buttons and labels are just placeholders */}
    return (
        <div>
            <div className="flex flex-row">
                <Dice diceLabel="Add d4" diceFunction={() => setD4(totalDice < maxDice ? d4 + 1 : d4)} />
                <Dice diceLabel="Add d6" diceFunction={() => setD6(totalDice < maxDice ? d6 + 1 : d6)} />
                <Dice diceLabel="Add d8" diceFunction={() => setD8(totalDice < maxDice ? d8 + 1 : d8)} />
                <Dice diceLabel="Add d10" diceFunction={() => setD10(totalDice < maxDice ? d10 + 1 : d10)} />
                <Dice diceLabel="Add d12" diceFunction={() => setD12(totalDice < maxDice ? d12 + 1 : d12)} />
            </div>
            <button onClick={() => setTake2(!take2)}>{take2 ? 'Taking 2' : 'Taking 3'}</button>
            <br/>
            <div className="card">
                d4 is {d4}&nbsp;
                d6 is {d6}&nbsp;
                d8 is {d8}&nbsp;
                d10 is {d10}&nbsp;
                d12 is {d12}
            </div>
        </div>
    );
}

export default DicePool;