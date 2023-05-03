export interface iButtonProps {
    content: "Pesquisar" | "Histórico" | "Home"
    type: "button" | "submit" 
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}