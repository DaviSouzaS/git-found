import { createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children}: any) => {

    const [searchError, setSearchError] = useState<number | null>(null)

    const navigate = useNavigate()

    const getUserInfos = async (username:any) => {
        try {
            const { data } = await api.get(`users/${username.search}`)
            console.log(data)
        }
        catch (error){
            setSearchError(error.response.status)
        }
    }

    const getUserRepositories = async (username: any) => {
        try {
            const { data } = await api.get(`users/${username.search}/repos`)
            navigate("/user")
            console.log(data)
        }
        catch (error){
            console.error(error)
        }
    }

    return(
        <UserContext.Provider value={{getUserInfos, searchError, getUserRepositories}}>
            {children}
        </UserContext.Provider>
    )
}