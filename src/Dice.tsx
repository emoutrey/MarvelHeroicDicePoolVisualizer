import Triangle from './Triangle'
import D4 from "./assets/Pictogrammers-Material-Dice-d4.svg";
import D6 from "./assets/Pictogrammers-Material-Dice-d6.svg";
import D8 from "./assets/Pictogrammers-Material-Dice-d8.svg";
import D10 from "./assets/Pictogrammers-Material-Dice-d10.svg";
import D12 from "./assets/Pictogrammers-Material-Dice-d12.svg";

interface Props {
    die: 'd4' | 'd6' | 'd8' | 'd10' | 'd12';
    diceFunction: Function;
}

function Dice(props: Props) {
    const {die, diceFunction} = props;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        diceFunction();
    };

    return (
        <div className="flex flex-col">
            <Triangle direction='up' />
            {/* may break this out into its own component later */}
            {/* not sure how much control I'll want to have yet (disabling, graying out, color, etc) */}
            {die == 'd4' ?
                <D4 />
            : null}
            {die == 'd6' ?
                <D6 />
            : null}
            {die == 'd8' ?
                <D8 />
            : null}
            {die == 'd10' ?
                <D10 />
            : null}
            {die == 'd12' ?
                <D12 />
            : null}
            <Triangle direction='down' />
            <img src="" alt="Up arrow" />
        </div>
    )
}

export default Dice;