import { useContext } from 'react';
import { Context } from './App';
import Dice from './Dice'

function DicePool() {
    const {d4, setD4, d6, setD6, d8, setD8, d10, setD10, d12, setD12, take2, setTake2} = useContext<any>(Context);

    //do I need to memoize this? Probably
    const totalDice = d4 + d6 + d8 + d10 + d12;
    //capped for performance reasons
    //if I can make the permutation map generate faster I can raise this higher
    const maxDice = 6;

    return (
        <div>
            <div className="flex flex-row justify-center">
                <Dice
                    die="d4"
                    diceFunctionAdd={() => setD4(totalDice < maxDice ? d4 + 1 : d4)}
                    diceFunctionRemove={() => setD4(d4 > 0 ? d4 - 1 : d4)}
                />
                <Dice
                    die="d6"
                    diceFunctionAdd={() => setD6(totalDice < maxDice ? d6 + 1 : d6)}
                    diceFunctionRemove={() => setD6(d6 > 0 ? d6 - 1 : d6)}
                />
                <Dice
                    die="d8"
                    diceFunctionAdd={() => setD8(totalDice < maxDice ? d8 + 1 : d8)}
                    diceFunctionRemove={() => setD8(d8 > 0 ? d8 - 1 : d8)}
                />
                <Dice
                    die="d10"
                    diceFunctionAdd={() => setD10(totalDice < maxDice ? d10 + 1 : d10)}
                    diceFunctionRemove={() => setD10(d10 > 0 ? d10 - 1 : d10)}
                />
                <Dice
                    die="d12"
                    diceFunctionAdd={() => setD12(totalDice < maxDice ? d12 + 1 : d12)}
                    diceFunctionRemove={() => setD12(d12 > 0 ? d12 - 1 : d12)}
                />
            </div>
            {/* Make this a slider? */}
            <button onClick={() => setTake2(!take2)}>{take2 ? 'Taking 2' : 'Taking 3'}</button>
            <br/>
            {/* I can't move this into the actual image of the die */}
            {/* I thought it would be clearer which die was which from the outline but it's just not */}
            {/* I also can't assume that all users are savvy to that sort of thing, it should be accessible */}
            {/* But then where do I put this?? A readout like this isn't what I want */}
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