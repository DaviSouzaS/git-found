import { useContext } from "react";
import { UserCard } from "../UserCard";
import { UserContext } from "../../contexts/UserContext";
import { iHistoricRepos } from "../../contexts/types";

export const HistoricModal = (): JSX.Element => {

    const { closeHistoricModal, setHistoric } = useContext(UserContext)

    const repos: iHistoricRepos[] = JSON.parse(localStorage.getItem('HISTORIC') || '[]')

    const clearHistoric = () => {

        setHistoric([])

        localStorage.removeItem("HISTORIC")
    }
    
    return (
        <div className="bg-modalBg fixed h-screen w-full flex justify-center items-center">
            <div className="w-11/12 h-96 bg-one rounded-xl max-w-xl absolute">
                <div className="p-4">
                    <span className="flex justify-between items-center h-8 mb-3">
                        <p className="font-bold text-lg text-white">HISTÓRICO ({repos !== null ? repos.length : 0})</p>
                        <button onClick={closeHistoricModal}>
                            <svg className="w-8 hover:fill-white transition" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#C4CCD4"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                        </button>
                    </span>
                    <hr className="mb-4 border-four"/>
                    <ul className="h-60 overflow-y-scroll flex flex-col gap-4 scrollbar-thin scrollbar-thumb-five pr-1">
                        {repos.length !== 0 ? repos.map(repo => <UserCard key={repo.id} userInfos={repo}/>) : 
                        <div className="w-full h-full flex justify-center items-center">
                            <p className="text-lg text-white">Histórico Vazio</p>
                        </div>}
                    </ul>
                    <hr className="mb-4 mt-4 border-four"/>
                    <div className="flex justify-end">
                        <button className="text-eight" onClick={clearHistoric}>Limpar histórico</button>
                    </div>
                </div>
            </div>
        </div>
    )
}