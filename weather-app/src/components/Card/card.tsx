import { ReactNode } from "react";

interface Props{
    border: boolean;
    children: ReactNode;
}

const Card = ({border, children} : Props) => {

    return(
        <div className={`${border && 'border && w-96 bg-teal-200 rounded border-emerald-700 border shadow-md m-auto	'} p-8 `}>
            {children}
        </div>
    )
        
}    

export default Card