import { createContext } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { iUserProviderValue, iUserProviderProps, iRepos, iUser, iHistoric, iSearch } from "./types";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserProviderValue)

export const UserProvider = ({children}: iUserProviderProps): JSX.Element => {

    const [searchError, setSearchError] = useState<number | null>(null)
    const [historic, setHistoric] = useState<iUser[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)

    const navigate: NavigateFunction = useNavigate()

    const getUserInfos = async (username: string) => {
        try {
            const { data } = await api.get(`users/${username}`)
            localStorage.setItem('USER', JSON.stringify(data));
        }
        catch (error){
            if (error instanceof AxiosError) {
                if (error.response !== undefined) {
                    setSearchError(error.response.status)
                }
            } else {
                console.error('Unexpected error', error);
            }
        }
    }

    const getUserRepositories = async (username: string) => {
        try {
            const { data } = await api.get(`users/${username}/repos`)
            localStorage.setItem('REPOS', JSON.stringify(data));
            navigate("/user")
            setSearchError(null)
            setOpenModal(false)
        }
        catch (error){
            console.error(error)
        }
    }

    const addUsersInHistoric = () => {
        const user: iHistoric = JSON.parse(localStorage.getItem('USER') || '{}')
        const repos: iRepos[] = JSON.parse(localStorage.getItem('REPOS')  || '[]')
        user.repos = repos
       
        const userExistInHistoric: iUser | undefined = historic.find(item => item.id === user.id)

        if (userExistInHistoric !== undefined && historic.length < 10) {
            const historicList: iUser[] = JSON.parse(localStorage.getItem('HISTORIC') || '[]')

            const filtredHistoric: iUser[] = historicList.filter(item => item.id !== userExistInHistoric.id)

            if (filtredHistoric.length === 0) {
                localStorage.removeItem("HISTORIC")
            }

            setHistoric([user, ...filtredHistoric])
        }

        if (!userExistInHistoric && historic.length < 10) {
            setHistoric([user, ...historic])
        }

        if (historic.length === 10) {
            const historicList: iUser[] = JSON.parse(localStorage.getItem('HISTORIC') || '[]')
            
            if (userExistInHistoric !== undefined){
                const filtredHistoric: iUser[] = historicList.filter(item => item.id !== userExistInHistoric.id)

                setHistoric([user, ...filtredHistoric])
            } else {
                historicList.pop()
                setHistoric([user, ...historicList])
            }
        }
        
    }
    
    const historicStorage: iUser[] = JSON.parse(localStorage.getItem('HISTORIC') || '[]')

    if (historic.length === 0 && historicStorage.length !== 0) {
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

    const search = async (data: iSearch) => {
        await getUserInfos(data.search)
        await getUserRepositories(data.search)
        addUsersInHistoric()
    }

    return(
        <UserContext.Provider value={{
            getUserInfos,
            searchError,
            getUserRepositories,
            addUsersInHistoric,
            historic,
            openHistoricModal,
            closeHistoricModal,
            openModal,
            setHistoric,
            search
            }}
        >
            {children}
        </UserContext.Provider>
    )
}