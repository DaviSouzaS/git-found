import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export const UserCard = ({userInfos}: any) => {

    const { setHistoric, closeHistoricModal }: any = useContext(UserContext)

    const navigate = useNavigate()

    const deleteUserInHistoric = () => {
        const repos = JSON.parse(localStorage.getItem('HISTORIC'))

        const filtredRepos = repos.filter(item => item.id !== userInfos.id)

        setHistoric(filtredRepos)

        if (filtredRepos.length === 0) {
            localStorage.removeItem("HISTORIC")
        }
    }

    const openUserProfile = () => {
        localStorage.removeItem("USER")
        localStorage.removeItem("REPOS")

        localStorage.setItem('REPOS', JSON.stringify(userInfos.repos));

        const infos = userInfos

        delete infos.repos

        localStorage.setItem('USER', JSON.stringify(infos))

        navigate("/user")
        closeHistoricModal()
    }

    return (
        <li>
            <div onClick={openUserProfile}>
                <img src={userInfos.avatar_url} alt="profile-img" />
                <span>
                    <p>{userInfos.login}</p>
                    <p>Repositórios: {userInfos.repos.length}</p>
                    <p>criado em: {userInfos.created_at}</p>
                </span>
            </div>
            <button onClick={deleteUserInHistoric}>
                <img src="../src/assets/delete.svg" alt="delete-icon" />
            </button>
        </li>
    )
}