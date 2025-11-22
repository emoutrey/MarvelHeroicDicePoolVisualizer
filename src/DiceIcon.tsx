import type { DiceType } from './types';
import Icon from '@mdi/react';
import { mdiDiceD4, mdiDiceD6, mdiDiceD8, mdiDiceD10, mdiDiceD12 } from '@mdi/js';

interface Props {
    dice: DiceType;
}

function DiceIcon(props: Props) {
    const {dice} = props;

    const paths: Record<DiceType, string> = {
        d4: mdiDiceD4,
        d6: mdiDiceD6,
        d8: mdiDiceD8,
        d10: mdiDiceD10,
        d12: mdiDiceD12,
    };

    return (
        <>
            <Icon className="sm:hidden" path={paths[dice]} size={2} />
            <Icon className="max-sm:hidden" path={paths[dice]} size={4} />
        </>
    )
}

export default DiceIcon;
