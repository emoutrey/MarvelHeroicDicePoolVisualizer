import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';

interface Props {
    direction: 'up' | 'down'
    handleClick: Function;
}

function Triangle(props: Props) {
    const {direction, handleClick} = props;

    return (
        //TODO: check if this library is open source, Icon should support onClick natively
        <div className="cursor-pointer" onClick={() => handleClick()}>
            <Icon path={direction === 'up' ? mdiChevronUp : mdiChevronDown} size={4} />
        </div>
    )
}

export default Triangle;
