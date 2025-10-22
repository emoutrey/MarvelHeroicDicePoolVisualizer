import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';

interface Props {
    direction: 'up' | 'down'
    handleClick: Function;
}

function Triangle(props: Props) {
    const {direction, handleClick} = props;

    return (
        <div className="cursor-pointer" onClick={() => handleClick()}>
            {direction === 'up' ? (
                <Icon path={mdiChevronUp} size={4} />
            ) : null}
            {direction === 'down' ? (
                <Icon path={mdiChevronDown} size={4} />
            ) : null}
        </div>
    )
}

export default Triangle;