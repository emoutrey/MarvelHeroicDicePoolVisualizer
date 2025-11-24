import Icon from '@mdi/react';
import { mdiHelpCircle } from '@mdi/js';

interface Props {
    modalSetOpenFunction: Function
}

function newUserModalOpenIcon(props: Props) {
    const { modalSetOpenFunction } = props;

    return (
        <div className='absolute top-1 right-1 cursor-pointer' onClick={() => modalSetOpenFunction(true)}>
            <Icon path={mdiHelpCircle} size={1} />
        </div>
    )
}

export default newUserModalOpenIcon