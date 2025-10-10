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
        <button onClick={handleClick}>{diceLabel}</button>
    )
}

export default Dice;