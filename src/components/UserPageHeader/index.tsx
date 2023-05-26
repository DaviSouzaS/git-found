import { NavigateFunction, useNavigate } from "react-router-dom";
import { iUser } from "../../contexts/types";

export const UserPageHeader = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  const user: iUser = JSON.parse(localStorage.getItem("USER") || '{}');

  const date: Date = new Date(user.created_at);

  const day = String(date.getDate());
  const mounth = String(date.getMonth() + 1);
  const year = date.getFullYear();

  return (
    <header>
      <div className="flex flex-wrap pt-3 pb-3 pr-3 pl-3 justify-between sm:justify-around max-w-4xl mt-0 mb-0 mr-auto ml-auto">
        <a className="mb-3" href={user.html_url} target="_blank">
          <img
            className="rounded-full w-16 h-16 hover:opacity-90 transition" src={user.avatar_url} alt="github-avatar"
          />
        </a>
        <div className="flex justify-center items-center gap-3 sm:gap-10 lg:gap-12 ml-3 xs:mr-3 grow">
          <div>
            <p className="text-xs sm:text-base text-six font-bold mb-3">
              {user.login}
            </p>
            <p className="text-xs sm:text-base text-six font-bold">
              Seguidores: {user.followers}
            </p>
          </div>
          <div>
            <p className="text-xs sm:text-base text-six font-bold mb-3">
              Criado em:{" "}
              {`${day.length === 1 ? "0" : ""}` +
                day +
                "/" +
                `${mounth.length === 1 ? "0" : ""}` +
                mounth +
                "/" +
                year}
            </p>
            <p className="text-xs sm:text-base text-six font-bold">
              Seguindo: {user.following}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <button
            className="bg-two p-1 h-8 rounded-md w-16 sm:w-28 sm:h-9 sm:text-base text-sm border border-five text-six hover:bg-three hover:text-seven transition"
            type={"button"}
            onClick={backToHome}
          >
            Home
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <hr className="w-11/12 mb-4 border-three" />
      </div>
    </header>
  );
};
