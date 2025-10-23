import Icon from '@mdi/react';
import { mdiDiceD4, mdiDiceD6, mdiDiceD8, mdiDiceD10, mdiDiceD12 } from '@mdi/js';

interface Props {
    die: 'd4' | 'd6' | 'd8' | 'd10' | 'd12';
}

function Die(props: Props) {
    const {die} = props;

    const paths: Record<Props['die'], string> = {
        d4: mdiDiceD4,
        d6: mdiDiceD6,
        d8: mdiDiceD8,
        d10: mdiDiceD10,
        d12: mdiDiceD12,
    };

    return (
        <>
            <Icon path={paths[die]} size={4} />
        </>
    )
}

export default Die;