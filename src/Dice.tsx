import Triangle from './Triangle'

//making the dice svgs their own components would introduce prop drilling or context bloat
//not sure if it's worth it just to make the file look a bit cleaner
//this also centralizes control over color, etc.
//will see how it plays out

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
                <svg xmlns="http://www.w3.org/2000/svg" id="mdi-dice-d4" viewBox="0 0 24 24"><path d="M10.25 15.15L11.92 12.47V15.15H10.25M21.92 21H2.08C1.24 21 .72 20.08 1.16 19.36L11.08 3.13C11.5 2.44 12.5 2.44 12.92 3.13L22.84 19.36C23.28 20.08 22.76 21 21.92 21M14.29 15.15H13.43V10.42H11.91L8.75 15.41L8.82 16.36H11.92V18H13.43V16.36H14.29V15.15Z" /></svg>
            : null}
            {die == 'd6' ?
                <svg xmlns="http://www.w3.org/2000/svg" id="mdi-dice-d6" viewBox="0 0 24 24"><path d="M13.05 13.5C13.05 14.27 12.61 14.83 12 14.83S10.85 14.27 10.85 13.5L10.83 12.78C10.83 12.78 11.21 12 11.95 12.1C12.56 12.1 13.05 12.73 13.05 13.5M21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5M14.55 13.41C14.5 11.45 13.19 10.87 12.53 10.87C11.41 10.87 10.86 11.53 10.86 11.53S10.89 9.5 13.39 9.53V8.33C13.39 8.33 9.33 7.94 9.3 12.66C9.27 16.86 12.77 16 12.77 16S14.61 15.47 14.55 13.41Z" /></svg>
            : null}
            {die == 'd8' ?
                <svg xmlns="http://www.w3.org/2000/svg" id="mdi-dice-d8" viewBox="0 0 24 24"><path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 8.25C13.31 8.25 14.38 9.2 14.38 10.38C14.38 11.07 14 11.68 13.44 12.07C14.14 12.46 14.6 13.13 14.6 13.9C14.6 15.12 13.44 16.1 12 16.1C10.56 16.1 9.4 15.12 9.4 13.9C9.4 13.13 9.86 12.46 10.56 12.07C10 11.68 9.63 11.07 9.63 10.38C9.63 9.2 10.69 8.25 12 8.25M12 9.5C11.5 9.5 11.1 9.95 11.1 10.5C11.1 11.05 11.5 11.5 12 11.5C12.5 11.5 12.9 11.05 12.9 10.5C12.9 9.95 12.5 9.5 12 9.5M12 12.65C11.39 12.65 10.9 13.14 10.9 13.75C10.9 14.36 11.39 14.85 12 14.85C12.61 14.85 13.1 14.36 13.1 13.75C13.1 13.14 12.61 12.65 12 12.65Z" /></svg>
            : null}
            {die == 'd10' ?
                <svg xmlns="http://www.w3.org/2000/svg" id="mdi-dice-d10" viewBox="0 0 24 24"><path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M14.07 8.21C15.5 8.21 16.64 9.36 16.64 10.78V13.42C16.64 14.84 15.5 16 14.07 16C12.64 16 11.5 14.84 11.5 13.42V10.78C11.5 9.36 12.65 8.21 14.07 8.21M10.36 8.41H10.5V16H9V10.21L7.22 10.76V9.53L10.36 8.41M14.06 9.65C13.47 9.65 13 10.13 13 10.71V13.5C13 14.07 13.47 14.54 14.06 14.54C14.64 14.54 15.14 14.06 15.14 13.5V10.71C15.14 10.12 14.64 9.65 14.06 9.65Z" /></svg>
            : null}
            {die == 'd12' ?
                <svg xmlns="http://www.w3.org/2000/svg" id="mdi-dice-d12" viewBox="0 0 24 24"><path d="M12 2L1.5 9.64L5.5 22H18.5L22.5 9.64L12 2M10.5 17H8.89V10.89L7 11.47V10.19L10.31 9H10.5V17M17 17H11.66V15.91C11.66 15.91 15.23 12.45 15.23 11.4C15.23 10.12 14.18 10.25 14.18 10.25C13.5 10.3 13 10.87 13 11.55H11.44C11.5 10.09 12.72 8.94 14.27 9C16.74 9 16.77 10.85 16.77 11.3C16.77 13.07 13.58 15.77 13.58 15.77L17 15.75V17Z" /></svg>
            : null}
            <Triangle direction='down' />
        </div>
    )
}

export default Dice;