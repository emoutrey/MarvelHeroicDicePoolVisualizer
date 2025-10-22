import Icon from '@mdi/react';
import { mdiDiceD4, mdiDiceD6, mdiDiceD8, mdiDiceD10, mdiDiceD12 } from '@mdi/js';
import Triangle from './Triangle'

interface Props {
    die: 'd4' | 'd6' | 'd8' | 'd10' | 'd12';
    diceFunctionAdd: Function;
    diceFunctionRemove: Function;
}

function Dice(props: Props) {
    const {die, diceFunctionAdd, diceFunctionRemove} = props;

    return (
        <div className="flex flex-col pr-6 pl-6">
            <Triangle direction='up' handleClick={diceFunctionAdd} />
            {die === 'd4' ?
                <Icon path={mdiDiceD4} />
            : null}
            {die === 'd6' ?
                <Icon path={mdiDiceD6} />
            : null}
            {die === 'd8' ?
                <Icon path={mdiDiceD8} />
            : null}
            {die === 'd10' ?
                <Icon path={mdiDiceD10} />
            : null}
            {die === 'd12' ?
                <Icon path={mdiDiceD12} />
            : null}
            <Triangle direction='down' handleClick={diceFunctionRemove} />
        </div>
    )
}

export default Dice;