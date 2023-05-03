import { Footer } from "../../components/Footer";
import { RepositoriesList } from "../../components/RepositoriesList";
import { UserPageHeader } from "../../components/UserPageHeader";
import { Navigate } from "react-router-dom";

export const UserPage = () => {

  const user = JSON.parse(localStorage.getItem('USER'))
  const repos = JSON.parse(localStorage.getItem('REPOS'))
  
  return user === null || repos === null ? <Navigate to="/"/> : <>
    <UserPageHeader/>
    <RepositoriesList/>
    <Footer/>
  </>
  
};
