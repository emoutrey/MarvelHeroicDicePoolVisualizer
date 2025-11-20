import Icon from '@mdi/react';
import { mdiHelpCircle } from '@mdi/js';

interface Props {
    modalSetOpenFunction: Function
}

function newUserModalOpenIcon(props: Props) {
    const { modalSetOpenFunction } = props;

    return (
        <div className='flex justify-between'>
            {/* This div won't stick around for long hopefully */}
            <div className="text-left">Early alpha build. Expect frequent updates!</div>
            <div className='cursor-pointer' onClick={() => modalSetOpenFunction(true)}>
                <Icon path={mdiHelpCircle} size={1} />
            </div>
        </div>
    )
}

export default newUserModalOpenIcon