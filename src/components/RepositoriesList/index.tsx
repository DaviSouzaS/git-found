import { RepositoryCard } from "../RepositoryCard"

export const RepositoriesList = () => {

    const repos = JSON.parse(localStorage.getItem('REPOS'))

    return (
        <div className="mb-5">
            <div className="flex justify-center items-center mb-4">
                <h1 className="text-six font-bold text-lg">REPOSITÓRIOS ({repos.length})</h1>
            </div>
            <div className="flex justify-center">
                <ul className="flex flex-wrap justify-center gap-2 sm:gap-5 h-96 overflow-y-scroll max-w-xl lg:max-w-2xl scrollbar-thin scrollbar-thumb-five">
                    { repos.map(repo => <RepositoryCard key={repo.id} repo={repo}/>) }
                </ul>
            </div>
        </div>
    )
}