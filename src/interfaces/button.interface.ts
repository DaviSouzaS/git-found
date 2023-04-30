export interface iButtonProps {
    content: "Pesquisar" | "Histórico"
    type: "button" | "submit"
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}