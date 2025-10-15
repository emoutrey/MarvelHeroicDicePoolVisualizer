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
        <>
            <Triangle direction='up' />
            <button className="bg-blue-500" onClick={handleClick}>{diceLabel}</button>
            <Triangle direction='down' />
        </>
    )
}

export default Dice;