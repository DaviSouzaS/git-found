import { Routes, Route, Navigate } from 'react-router-dom';
import { InitalPage } from '../pages/InitalPage';
import { UserPage } from '../pages/userPage';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<InitalPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
        </Routes>
    )
}