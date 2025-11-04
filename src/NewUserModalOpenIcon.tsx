import Icon from '@mdi/react';
import { mdiHelpCircle } from '@mdi/js';

interface Props {
    modalSetOpenFunction: Function
}

//This kinda overlaps with the D12 up arrow
//I'll see how big of a deal it is when I get to mobile
function newUserModalOpenIcon(props: Props) {
    const { modalSetOpenFunction } = props;

    return (
        <div className='relative'>
            <div className='absolute top-0 right-0 cursor-pointer' onClick={() => modalSetOpenFunction(true)}>
                <Icon path={mdiHelpCircle} size={1} />
            </div>
        </div>
    )
}

export default newUserModalOpenIcon