//does single quotes vs double quotes matter here?
//don't think it does but not sure how I feel about mixing them

interface Props {
    direction: 'up' | 'down'
}

function Triangle(props: Props) {
    const {direction} = props;

    return (
        <>
            {direction == 'up' ? (
                <svg xmlns="http://www.w3.org/2000/svg" id="mdil-chevron-up" viewBox="0 0 24 24"><path d="M5.84,15.41L11.5,9.75L17.16,15.41L16.45,16.11L11.5,11.16L6.55,16.11L5.84,15.41Z" /></svg>
            ) : null}

            {direction == 'down' ? (
                <svg xmlns="http://www.w3.org/2000/svg" id="mdil-chevron-down" viewBox="0 0 24 24"><path d="M5.84,9.59L11.5,15.25L17.16,9.59L16.45,8.89L11.5,13.84L6.55,8.89L5.84,9.59Z" /></svg>
            ) : null}
        </>
    )
}

export default Triangle;