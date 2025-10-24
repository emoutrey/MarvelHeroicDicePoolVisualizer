import { useContext } from 'react';
import { Context } from './App';
import Icon from '@mdi/react';
import { mdiTriangle, mdiSquare, mdiRhombus, mdiPentagon } from '@mdi/js';

function DicePool() {
    const {d4, d6, d8, d10, d12} = useContext<any>(Context);

    return (
        <div className="flex flex-row">
            <Icon path={mdiTriangle} size={1} />
            <div className="pl-1 pr-3">{d4}</div>
            <Icon path={mdiSquare} size={1} />
            <div className="pl-1 pr-3">{d6}</div>
            <Icon path={mdiRhombus} size={1} />
            <div className="pl-1 pr-3">{d8}</div>
            <Icon path={mdiRhombus} size={1} />
            <div className="pl-1 pr-3">{d10}</div>
            <Icon path={mdiPentagon} size={1} />
            <div className="pl-1 pr-3">{d12}</div>
        </div>
    )
}

export default DicePool;
