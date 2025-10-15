import Triangle from './Triangle'

interface Props {
    diceLabel: string;
    diceFunction: Function;
}

function Dice(props: Props) {
    const {diceLabel, diceFunction} = props;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        diceFunction();
    };

    return (
        <div className="flex flex-col">
            <div className="w-20 h-40">
                <Triangle direction='up' />
            </div>
            {/* this is where the picture of the die will go */}
            {/* I want to make the shape with css rather than use svgs */}
            <button className="bg-blue-500" onClick={handleClick}>{diceLabel}</button>
            <Triangle direction='down' />
        </div>
    )
}

export default Dice;