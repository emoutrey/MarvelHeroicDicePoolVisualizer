import { useContext } from 'react';
import { Context } from './App';
import Switch from 'react-switch';

function TakeSwitch() {
    const {take2, setTake2} = useContext<any>(Context);

    return (
        <Switch
            onChange={() => setTake2(!take2)}
            checked={!take2}
            handleDiameter={20}
            width={100}
            borderRadius={6}
            uncheckedIcon={'Take 3'}
            checkedIcon={'Take 2'}
            uncheckedHandleIcon={'Take 2'}
            checkedHandleIcon={
                <div className="flex justify-center items-center h-full w-full">
                    Take 3
                </div>
            }
        />
    );
}

export default TakeSwitch;