import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';

interface Props {
    direction: 'up' | 'down'
    handleClick: Function;
}

function Triangle(props: Props) {
    const {direction, handleClick} = props;

    return (
        <div className="cursor-pointer min-h-24 min-w-24" onClick={() => handleClick()}>
            {direction === 'up' ? (
                <Icon path={mdiChevronUp} />
            ) : null}
            {direction === 'down' ? (
                <Icon path={mdiChevronDown} />
            ) : null}
        </div>
    )
}

export default Triangle;