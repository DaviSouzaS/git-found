import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { iHistoric, iHistoricRepos } from "../../contexts/types";
import { iUserCardRequest } from "../../interfaces/userCard.interface";

export const UserCard = ({userInfos}: iUserCardRequest): JSX.Element => {

    const { setHistoric, closeHistoricModal, addUsersInHistoric } = useContext(UserContext)

    const navigate: NavigateFunction = useNavigate()

    const deleteUserInHistoric = () => {
        const historic: iHistoricRepos[] = JSON.parse(localStorage.getItem('HISTORIC') || '[]')

        const filtredHistoric: iHistoricRepos[] = historic.filter(item => item.id !== userInfos.id)

        setHistoric(filtredHistoric)

        if (filtredHistoric.length === 0) {
            localStorage.removeItem("HISTORIC")
        }
    }

    const openUserProfile = () => {
        localStorage.removeItem("USER")
        localStorage.removeItem("REPOS")

        localStorage.setItem('REPOS', JSON.stringify(userInfos.repos));

        const infos: iHistoric = userInfos

        delete infos.repos

        localStorage.setItem('USER', JSON.stringify(infos))
        
        addUsersInHistoric()
        navigate("/user")
        closeHistoricModal()
    }

    return (
        <li className="w-full h-14 min-h-56 flex bg-two items-center rounded-md">
            
            <img className="w-10 h-10 rounded-full ml-2 mr-2 hover:outline outline-eight transition-opacity cursor-pointer" onClick={openUserProfile} src={userInfos.avatar_url} alt="profile-img"/>
            
            <div className="flex justify-between w-full items-center">
                <span className="flex flex-col justify-center">
                    <p className="text-sm text-six font-bold">{userInfos.login}</p>
                    <p className="text-sm text-six">Repositórios: {userInfos.repos.length}</p>
                </span>

                <button className="w-7 h-7 border border-five bg-three rounded-md mr-3 flex justify-center items-center hover:bg-two transition" onClick={deleteUserInHistoric}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" fill="#ffffff"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>
                </button>
            </div>
        </li>
    )
}