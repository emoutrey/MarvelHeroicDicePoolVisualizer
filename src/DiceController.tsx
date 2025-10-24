import { useContext } from 'react';
import { Context } from './App';
import DieController from './DieController'
import DicePool from './DicePool';
import TakeSwitch from './TakeSwitch';

//I don't like calling things on the frontend 'controllers'
//But that is what it does technically
//When I think of something better I'll change it again

function DiceController() {
    const {d4, setD4, d6, setD6, d8, setD8, d10, setD10, d12, setD12} = useContext<any>(Context);

    //do I need to memoize this? Probably
    const totalDice = d4 + d6 + d8 + d10 + d12;
    //capped for performance reasons
    //if I can make the permutation map generate faster I can raise this higher
    const maxDice = 6;

    return (
        <div>
            <div className="flex flex-row justify-center">
                <DieController
                    die="d4"
                    diceFunctionAdd={() => setD4(totalDice < maxDice ? d4 + 1 : d4)}
                    diceFunctionRemove={() => setD4(d4 > 0 ? d4 - 1 : d4)}
                />
                <DieController
                    die="d6"
                    diceFunctionAdd={() => setD6(totalDice < maxDice ? d6 + 1 : d6)}
                    diceFunctionRemove={() => setD6(d6 > 0 ? d6 - 1 : d6)}
                />
                <DieController
                    die="d8"
                    diceFunctionAdd={() => setD8(totalDice < maxDice ? d8 + 1 : d8)}
                    diceFunctionRemove={() => setD8(d8 > 0 ? d8 - 1 : d8)}
                />
                <DieController
                    die="d10"
                    diceFunctionAdd={() => setD10(totalDice < maxDice ? d10 + 1 : d10)}
                    diceFunctionRemove={() => setD10(d10 > 0 ? d10 - 1 : d10)}
                />
                {/* This isn't what a d12 is shaped like and it bothers me */}
                <DieController
                    die="d12"
                    diceFunctionAdd={() => setD12(totalDice < maxDice ? d12 + 1 : d12)}
                    diceFunctionRemove={() => setD12(d12 > 0 ? d12 - 1 : d12)}
                />
            </div>
            <div className="flex flex-row justify-between items-center pt-8 pb-4">
                <div className="pl-10">
                    <DicePool />
                </div>
                <div className="pr-10">
                    <TakeSwitch />
                </div>
            </div>
        </div>
    );
}

export default DiceController;
