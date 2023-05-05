import { createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children}: any) => {

    const [searchError, setSearchError] = useState<number | null>(null)
    const [historic, setHistoric] = useState<any[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)

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
            setOpenModal(false)
        }
        catch (error){
            console.error(error)
        }
    }

    const addUsersInHistoric = () => {
        const user = JSON.parse(localStorage.getItem('USER'))
        const repos = JSON.parse(localStorage.getItem('REPOS'))
        user.repos = repos
       
        const userExistInHistoric = historic.find(item => item.id === user.id)


        if (!userExistInHistoric && historic.length <= 10) {
            setHistoric([user, ...historic])
        }

    }
    const historicStorage = JSON.parse(localStorage.getItem('HISTORIC'))

    if (historic.length === 0 && historicStorage !== null) {
        setHistoric(historicStorage)
    }

    if (historic.length !== 0) {
        localStorage.setItem('HISTORIC', JSON.stringify(historic));
    }

    const openHistoricModal = () => {
        setOpenModal(true)
    }

    const closeHistoricModal = () => {
        setOpenModal(false)
    }

    return(
        <UserContext.Provider value={{getUserInfos, searchError, getUserRepositories, addUsersInHistoric, historic, openHistoricModal, closeHistoricModal, openModal, setHistoric}}>
            {children}
        </UserContext.Provider>
    )
}