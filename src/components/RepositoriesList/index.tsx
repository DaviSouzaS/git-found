import { RepositoryCard } from "../RepositoryCard"

export const RepositoriesList = () => {

    const repos = JSON.parse(localStorage.getItem('REPOS'))

    return (
        <div>
            <h1>Repositórios ({repos.length})</h1>
            <ul>
                { repos.map(repo => <RepositoryCard key={repo.id} repo={repo}/>) }
            </ul>
        </div>
    )
}