import Dice from './Dice'

interface Props {
    d4: number,
    setD4: Function,
    d6: number,
    setD6: Function,
    d8: number,
    setD8: Function,
    d10: number,
    setD10: Function,
    d12: number,
    setD12: Function,
}

function DicePool(props: Props) {
    const {d4, setD4, d6, setD6, d8, setD8, d10, setD10, d12, setD12} = props;

    const totalDice = d4 + d6 + d8 + d10 + d12;
    //for performance reasons
    //if I can make the permutation map generate faster I can raise this higher
    const maxDice = 6;

    {/* TODO: Make these pictures of dice or something, buttons and labels are just placeholders */}
    return (
        <div>
            <Dice diceLabel="Add d4" diceFunction={() => setD4(totalDice < maxDice ? d4 + 1 : d4)} />
            <Dice diceLabel="Add d6" diceFunction={() => setD6(totalDice < maxDice ? d6 + 1 : d6)} />
            <Dice diceLabel="Add d8" diceFunction={() => setD8(totalDice < maxDice ? d8 + 1 : d8)} />
            <Dice diceLabel="Add d10" diceFunction={() => setD10(totalDice < maxDice ? d10 + 1 : d10)} />
            <Dice diceLabel="Add d12" diceFunction={() => setD12(totalDice < maxDice ? d12 + 1 : d12)} />
            <br/>
            <Dice diceLabel="Remove d4" diceFunction={() => setD4(d4 > 0 ? d4 - 1 : d4)} />
            <Dice diceLabel="Remove d6" diceFunction={() => setD6(d6 > 0 ? d6 - 1 : d6)} />
            <Dice diceLabel="Remove d8" diceFunction={() => setD8(d8 > 0 ? d8 - 1 : d8)} />
            <Dice diceLabel="Remove d10" diceFunction={() => setD10(d10 > 0 ? d10 - 1 : d10)} />
            <Dice diceLabel="Remove d12" diceFunction={() => setD12(d12 > 0 ? d12 - 1 : d12)} />
            <div className="card">
                d4 is {d4}&nbsp;
                d6 is {d6}&nbsp;
                d8 is {d8}&nbsp;
                d10 is {d10}&nbsp;
                d12 is {d12}
            </div>
        </div>
    );
}

export default DicePool;