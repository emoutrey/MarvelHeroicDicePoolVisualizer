import Die from './Die'
import Triangle from './Triangle'

interface Props {
    die: 'd4' | 'd6' | 'd8' | 'd10' | 'd12';
    diceFunctionAdd: Function;
    diceFunctionRemove: Function;
}

function Dice(props: Props) {
    const {die, diceFunctionAdd, diceFunctionRemove} = props;

    return (
        <div className="flex flex-col pr-4 pl-4">
            <Triangle direction='up' handleClick={diceFunctionAdd} />
            <Die die={die} />
            <Triangle direction='down' handleClick={diceFunctionRemove} />
        </div>
    )
}

export default Dice;