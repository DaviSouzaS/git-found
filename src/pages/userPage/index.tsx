import { Footer } from "../../components/Footer";
import { RepositoriesList } from "../../components/RepositoriesList";
import { UserPageHeader } from "../../components/UserPageHeader";
import { Navigate } from "react-router-dom";

export const UserPage = () => {

  const user = JSON.parse(localStorage.getItem('USER'))
  const repos = JSON.parse(localStorage.getItem('REPOS'))
  
  return user === null || repos === null ? <Navigate to="/"/> : <div className="flex flex-col justify-between h-full">
    <div>
      <UserPageHeader/>
      <RepositoriesList/>
    </div>
    <Footer/>
  </div>
  
};
