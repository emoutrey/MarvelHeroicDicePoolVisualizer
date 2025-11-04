import Icon from '@mdi/react';
import { mdiHelpCircle } from '@mdi/js';

function newUserModalOpenIcon() {
    return (
        <div className='relative'>
            <div className='absolute top-0 right-0'>
                <Icon path={mdiHelpCircle} size={1} />
            </div>
        </div>
    )
}

export default newUserModalOpenIcon