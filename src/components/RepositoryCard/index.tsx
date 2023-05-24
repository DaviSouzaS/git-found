export const RepositoryCard = ({repo}: any) => {

    return (
        <li className="w-36 xs:w-44 xs:h-20 ss:w-48 ss:h-24 sm:w-56 lg:w-72 lg:h-24 h-16 bg-two rounded-md border border-five">
            <div className="p-1 xs:p-2 flex flex-col justify-between h-full">
                <span className="flex justify-between">
                    <div className="w-20 xs:w-28 lg:w-full overflow-x-scroll scrollbar-none">
                        <a className="text-xs text-eight whitespace-nowrap hover:underline" href={repo.html_url} target="_blank">{repo.name}</a>
                    </div>

                    <div className="bg-two border border-five rounded-xl h-5 w-10 flex justify-center items-center">
                        <p className="text-vs text-six">Public</p>
                    </div>
                </span>
                <p className="text-xs text-six">{repo.language}</p>
            </div>
        </li>
    )
}