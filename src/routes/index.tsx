import { Routes, Route, Navigate } from 'react-router-dom';
import { InitialPage } from '../pages/initialPage';
import { UserPage } from '../pages/userPage';

export const MainRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<InitialPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            {/* <Route path="*" element={<Navigate to={"/"}/>}/> */}
        </Routes>
    )
}