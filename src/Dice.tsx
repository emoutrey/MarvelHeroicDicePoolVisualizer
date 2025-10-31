import DiceIcon from './DiceIcon'
import DiceAmountAdjuster from './DiceAmountAdjuster'
import type { DiceType } from './types';

interface Props {
    dice: DiceType;
    diceAmount: number;
    diceFunction: Function;
}

function Dice(props: Props) {
    const {dice, diceAmount, diceFunction} = props;

    return (
        <div className="flex flex-col pr-4 pl-4">
            <DiceAmountAdjuster direction='up' diceAmount={diceAmount} diceFunction={diceFunction} />
            <DiceIcon dice={dice} />
            <DiceAmountAdjuster direction='down' diceAmount={diceAmount} diceFunction={diceFunction} />
        </div>
    )
}

export default Dice;
