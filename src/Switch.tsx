
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
            <div className="w-32 h-8 bg-gray-300 rounded-full relative cursor-pointer">
                <div className={`w-16 h-8 bg-white rounded-full absolute top-0 left-0 transition-transform transform ${props.checked ? "translate-x-16" : "bg-gray-400"}`}>
                    <div className="text-black">
                        Take 2
                    </div>
                </div>
            </div>
        </label>
    )
})

export default Switch;