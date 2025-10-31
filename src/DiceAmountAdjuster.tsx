import { useContext } from 'react';
import { Context } from './App';
import type { ContextType } from './types';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';
import colors from 'tailwindcss/colors'

interface Props {
    direction: 'up' | 'down'
    diceAmount: number;
    diceFunction: Function
}

function DiceAmountAdjuster(props: Props) {
    const {totalDice, maxDice} = useContext<ContextType>(Context);
    const {direction, diceAmount, diceFunction} = props;

    const handleClickUp = () => diceFunction(totalDice < maxDice ? diceAmount + 1 : diceAmount);
    const handleClickDown = () => diceFunction(diceAmount > 0 ? diceAmount - 1 : diceAmount);
    const disabled = (direction === 'up' && totalDice >= maxDice) || (direction === 'down' && diceAmount <= 0);
    
    return (
        //TODO: check if this library is open source, Icon should support onClick natively
        <div className="cursor-pointer" onClick={direction === 'up' ? handleClickUp : handleClickDown}>
            <Icon path={direction === 'up' ? mdiChevronUp : mdiChevronDown} size={4} color={disabled ? colors.neutral[600] : colors.neutral[300]} />
        </div>
    )
}

export default DiceAmountAdjuster;
