import { useContext } from 'react';
import { Context } from './App';
import Switch from './Switch'

function TakeSwitch() {
    const {take2, setTake2} = useContext<any>(Context);

    return (
        <Switch checked={!take2} onChange={() => setTake2(!take2)} />
    );
}

export default TakeSwitch;