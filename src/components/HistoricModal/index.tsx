import { useContext, useState } from "react"
import { UserCard } from "../UserCard"
import { UserContext } from "../../contexts/UserContext"

export const HistoricModal = () => {

    const { closeHistoricModal, setHistoric }: any = useContext(UserContext)

    const repos = JSON.parse(localStorage.getItem('HISTORIC'))

    const clearHistoric = () => {

        setHistoric([])

        localStorage.removeItem("HISTORIC")
    }

    return (
        <div>
            <div>
                <div>
                    <span>
                        <p>HISTÓRICO ({repos !== null ? repos.length : 0})</p>
                        <button onClick={closeHistoricModal}>
                            <img src="../src/assets/close.svg" alt="close-icon" />
                        </button>
                    </span>
                    <ul>
                        {repos !== null ? repos.map(repo => <UserCard key={repo.id} userInfos={repo}/>) : <p>Histórico Vazio</p>}
                    </ul>
                    <button onClick={clearHistoric}>Limpar histórico</button>
                </div>
            </div>
        </div>
    )
}