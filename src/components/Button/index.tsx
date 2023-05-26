import { iButtonProps } from "../../interfaces/button.interface"

export const Button = ({content, type, onclick}: iButtonProps): JSX.Element => {
    return (
        <button className="bg-two p-1 h-8 rounded-md w-24 sm:w-28 sm:h-9 sm:text-base text-sm border border-five text-six hover:bg-three hover:text-seven transition" type={type} onClick={onclick}>
            {content}
        </button>
    )
}