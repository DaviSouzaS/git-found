import { iButtonProps } from "../../interfaces/button.interface"

export const Button = ({content, type, onclick}: iButtonProps) => {
    return (
        <button type={type} onClick={onclick}>
            {content}
        </button>
    )
}