import { Footer } from "../../components/Footer";
import { RepositoriesList } from "../../components/RepositoriesList";
import { UserPageHeader } from "../../components/UserPageHeader";
import { Navigate } from "react-router-dom";

export const UserPage = (): JSX.Element => {

  const user: string | null = localStorage.getItem('USER')
  
  return user === null  ? <Navigate to="/"/> : <div className="flex flex-col justify-between h-full">
    <div>
      <UserPageHeader/>
      <RepositoriesList/>
    </div>
    <Footer/>
  </div>
  
};
