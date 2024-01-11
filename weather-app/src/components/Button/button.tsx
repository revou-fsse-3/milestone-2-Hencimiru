import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string;
}

const Button = ({label, ...props} : Props) => {

    return (
        <button  {...props} className=" bg-green-600 hover:bg-green-900 text-white font-bold py-1 px-2 my-2 mx-3 ">{label}</button>

    )
}

export default Button