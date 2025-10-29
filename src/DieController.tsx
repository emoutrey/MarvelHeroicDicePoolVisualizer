import Die from './Die'
import Triangle from './Triangle'

// This one could definitely have a better name

interface Props {
    die: 'd4' | 'd6' | 'd8' | 'd10' | 'd12'; //central type def for this? it repeats
    dieAmount: number;
    dieFunction: Function;
}

function DieController(props: Props) {
    const {die, dieAmount, dieFunction} = props;

    return (
        <div className="flex flex-col pr-4 pl-4">
            <Triangle direction='up' dieAmount={dieAmount} dieFunction={dieFunction} />
            <Die die={die} />
            <Triangle direction='down' dieAmount={dieAmount} dieFunction={dieFunction} />
        </div>
    )
}

export default DieController;
