import { createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children}: any) => {

    const [searchError, setSearchError] = useState<number | null>(null)
    const [historic, setHistoric] = useState<any[]>([])

    const navigate = useNavigate()

    const getUserInfos = async (username: string) => {
        try {
            const { data } = await api.get(`users/${username.search}`)
            localStorage.setItem('USER', JSON.stringify(data));
        }
        catch (error){
            setSearchError(error.response.status)
        }
    }

    const getUserRepositories = async (username: string) => {
        try {
            const { data } = await api.get(`users/${username.search}/repos`)
            localStorage.setItem('REPOS', JSON.stringify(data));
            navigate("/user")
        }
        catch (error){
            console.error(error)
        }
    }

    const addUsersInHistoric = () => {
        const user = JSON.parse(localStorage.getItem('USER'))
        const repos = JSON.parse(localStorage.getItem('REPOS'))
        user.repos = repos
        
        setHistoric([...historic, user])
    }
    // Não colocar no histórico um usuário que já está no histórico
    // Limitar histórico a os últimos 10 usuários pesquisados.
    historic.length !== 0 && localStorage.setItem('HISTORIC', JSON.stringify(historic));

    return(
        <UserContext.Provider value={{getUserInfos, searchError, getUserRepositories, addUsersInHistoric, historic}}>
            {children}
        </UserContext.Provider>
    )
}