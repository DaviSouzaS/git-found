import { FieldValues } from "react-hook-form"

export const SearchBar = ({register}: FieldValues) => {
    return (
        <div>
            <img src="../src/assets/search.svg" alt="search-icon" />
            <input type="text" placeholder="Nome do usuário" {...register("search")}/>
        </div>
    )
}