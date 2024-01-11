
import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = (props : InputProps) => {

    return (
        <input type="text" {...props} className={`${props.className} block border-neutral-400 border w-full p-2`} />
    )
}

export default Input