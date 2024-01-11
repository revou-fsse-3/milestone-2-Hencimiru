
import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLParagraphElement> {
    children: string;
}

const Text = ({children, ...props } : Props) => {

    return (
        <p {...props}>
            {children}
        </p>
    )
}

export default Text