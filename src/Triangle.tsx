import { useContext } from 'react';
import { Context } from './App';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';

interface Props {
    direction: 'up' | 'down'
    handleClick: Function;
}

function Triangle(props: Props) {
    const {totalDice, maxDice} = useContext<any>(Context);

    const {direction, handleClick} = props;

    //need to make the triangle know which die its for
    //probably need to move this up for it to work
    const disabled = (direction === 'up' && totalDice >= maxDice) || (direction === 'down' && totalDice <= 0);

    return (
        //TODO: check if this library is open source, Icon should support onClick natively
        <div className="cursor-pointer" onClick={() => handleClick()}>
            <Icon path={direction === 'up' ? mdiChevronUp : mdiChevronDown} size={4} color={disabled ? "#525252" : "rgba(255, 255, 255, 0.80)"} />
        </div>
    )
}

export default Triangle;
