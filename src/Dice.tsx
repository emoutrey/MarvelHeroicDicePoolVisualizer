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
            <div className="border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0"></div>
            <button className="bg-blue-500" onClick={handleClick}>{diceLabel}</button>
        </>
    )
}

export default Dice;