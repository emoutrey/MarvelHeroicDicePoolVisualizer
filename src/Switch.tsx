
import { type Ref, forwardRef } from "react"

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const Switch = forwardRef((props: Props, forwardRef: Ref<HTMLInputElement>) => {
    const { checked, onChange } = props;

    return (
        <label>
            {/* For accessibility, use an underlying checkbox */}
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={e => onChange?.(e.target.checked)}
                ref={forwardRef}
            />
            <div className="w-34 h-10 bg-gray-300 rounded-full relative cursor-pointer select-none">
                <div className={`w-16 h-8 m-1 bg-white rounded-full absolute top-0 left-0 transition-transform transform ${props.checked ? "translate-x-16" : ""}`} />
                {/* TODO: color these disabled or enabled when I decide on a color scheme */}
                <div className="text-black leading-7 absolute top-1 left-3.5">
                    Take 2
                </div>
                <div className="text-black leading-7 absolute top-1 left-19.5">
                    Take 3
                </div>
            </div>
        </label>
    )
})

export default Switch;
