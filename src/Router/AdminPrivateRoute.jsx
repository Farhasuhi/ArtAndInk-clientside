import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useAdmin from '../Hooks/useAdmin';

const AdminPrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const[isAdmin,isAdminLoading]=useAdmin() 
     if (loading||isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user&&isAdmin) {
        return children;
    }
    return <Navigate to="/registration/login" state={{ from: location }} replace></Navigate>
};


export default AdminPrivateRoute;