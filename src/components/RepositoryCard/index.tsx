export const RepositoryCard = ({repo}: any) => {

    return (
        <li>
            <span>
                <a href={repo.html_url} target="_blank">{repo.name}</a>
                <p>Public</p>
            </span>
            <p>{repo.language}</p>
        </li>
    )
}