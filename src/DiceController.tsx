import { useContext } from 'react';
import { Context } from './App';
import DieController from './DieController'
import DicePool from './DicePool';
import Switch from './Switch'

//I don't like calling things on the frontend 'controllers'
//But that is what it does technically
//When I think of something better I'll change it again

function DiceController() {
    const {d4, setD4, d6, setD6, d8, setD8, d10, setD10, d12, setD12, take2, setTake2} = useContext<any>(Context);

    return (
        <div>
            <div className="flex flex-row justify-center">
                <DieController die="d4" dieAmount={d4} dieFunction={setD4} />
                <DieController die="d6" dieAmount={d6} dieFunction={setD6} />
                <DieController die="d8" dieAmount={d8} dieFunction={setD8} />
                <DieController die="d10" dieAmount={d10} dieFunction={setD10} />
                <DieController die="d12" dieAmount={d12} dieFunction={setD12} />
            </div>
            <div className="flex flex-row justify-between items-center pt-8 pb-4">
                <div className="pl-8">
                    <DicePool />
                </div>
                <div className="pr-8">
                    <Switch checked={!take2} onChange={() => setTake2(!take2)} />
                </div>
            </div>
        </div>
    );
}

export default DiceController;
