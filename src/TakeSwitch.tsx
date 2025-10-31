interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const TakeSwitch = (props: Props) => {
    const { checked, onChange } = props;

    return (
        <label>
            {/* For accessibility, use an underlying checkbox */}
            {/* TODO: ARIA */}
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={e => onChange?.(e.target.checked)}
            />
            <div className="w-34 h-10 bg-neutral-600 rounded-full relative cursor-pointer select-none">
                <div className={`w-16 h-8 m-1 bg-neutral-300 rounded-full absolute top-0 left-0 transition-transform ${props.checked ? "translate-x-16" : ""}`} />
                <div className={`${props.checked ? "text-neutral-300" : "text-neutral-800"} leading-7 absolute top-1 left-3.5 transition-colors duration-250`}>
                    Take 2
                </div>
                <div className={`${props.checked ? "text-neutral-800" : "text-neutral-300"} leading-7 absolute top-1 left-19.5 transition-colors duration-250`}>
                    Take 3
                </div>
            </div>
        </label>
    )
}

export default TakeSwitch;
