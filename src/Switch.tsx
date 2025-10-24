
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
                <div className={`w-16 h-8 m-1 bg-white rounded-full absolute top-0 left-0 transition-transform transform ${props.checked ? "translate-x-16" : ""}`}>
                    <div className="text-black leading-7">
                        {/* TODO: put this underneath the button and have it slide over */}
                        { checked ? "Take 3" : "Take 2" }
                    </div>
                </div>
            </div>
        </label>
    )
})

export default Switch;