import { Button } from "../Button"
import { useNavigate } from "react-router-dom";

export const UserPageHeader = () => {

    const navigate = useNavigate()

    const backToHome = () => {
        navigate("/")
    }

    const user = JSON.parse(localStorage.getItem('USER'))

    return (
        <header>
            <div>
                <a href={user.html_url} target="_blank">
                    <img src={user.avatar_url} alt="github-avatar" />
                </a>
                <div>
                    <p>{user.login}</p>
                    <a href={user.blog} target="_blank">{user.blog}</a>
                    <p>Seguidores: {user.followers}</p>
                    <p>{user.bio}</p>
                    <p>Criado em: {user.created_at}</p>
                    <p>Seguindo: {user.following}</p>
                </div>
                <Button type="button" content="Home" onclick={backToHome}/>
            </div>
        </header>
    )
}