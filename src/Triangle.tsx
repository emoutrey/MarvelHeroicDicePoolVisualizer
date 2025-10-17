import UpTriangle from "./assets/Pictogrammers-Material-Light-Chevron-up.svg";
import DownTriangle from "./assets/Pictogrammers-Material-Light-Chevron-down.svg";

interface Props {
    direction: 'up' | 'down'
}

function Triangle(props: Props) {
    const {direction} = props;

    return (
        <>
            {direction == 'up' ? (
                <UpTriangle />
            ) : null}

            {direction == 'down' ? (
                <DownTriangle />
            ) : null}
        </>
    )
}

export default Triangle;