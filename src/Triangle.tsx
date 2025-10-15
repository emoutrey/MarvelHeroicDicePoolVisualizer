interface Props {
    direction: 'up' | 'down'
}

function Triangle(props: Props) {
    const size = 20;
    const color = 'red-500';
    const {direction} = props;

    return (
        <>
            {direction == 'up' ? (
                <div className={`inline-block w-0 h-0 border-solid border-t-0 border-r-[${size}px] border-l-[${size}px] border-b-[${size}px] border-l-transparent border-r-transparent border-t-transparent border-b-${color}`}></div>
            ) : null}

            {direction == 'down' ? (
                <div className={`inline-block w-0 h-0 border-solid border-t-[${size}px] border-r-[${size}px] border-l-[${size}px] border-b-0 border-l-transparent border-r-transparent border-t-${color} border-b-transparent`}></div>
            ) : null}
        </>
    )
}

export default Triangle;