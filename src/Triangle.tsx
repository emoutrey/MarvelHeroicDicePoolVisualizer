import { useContext } from 'react';
import { Context } from './App';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';

interface Props {
    direction: 'up' | 'down'
    dieAmount: number;
    dieFunction: Function
}

function Triangle(props: Props) {
    const {totalDice, maxDice} = useContext<any>(Context);
    const {direction, dieAmount, dieFunction} = props;

    const handleClickUp = () => dieFunction(totalDice < maxDice ? dieAmount + 1 : dieAmount);
    const handleClickDown = () => dieFunction(dieAmount > 0 ? dieAmount - 1 : dieAmount);
    const disabled = (direction === 'up' && totalDice >= maxDice) || (direction === 'down' && dieAmount <= 0);
    
    return (
        //TODO: check if this library is open source, Icon should support onClick natively
        //How to use Tailwind colors here?
        <div className="cursor-pointer" onClick={direction === 'up' ? handleClickUp : handleClickDown}>
            <Icon path={direction === 'up' ? mdiChevronUp : mdiChevronDown} size={4} color={disabled ? "#525252" : "#d7d7d7"} />
        </div>
    )
}

export default Triangle;
