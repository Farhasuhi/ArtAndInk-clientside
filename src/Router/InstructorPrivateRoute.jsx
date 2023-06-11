import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useInstructor from '../Hooks/useInstructor';

const InstructorPrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isInstructor,isInstructorLoading]=useInstructor();
    if (loading||isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user&&isInstructor) {
        return children;
    }
    return <Navigate to="/registration/login" state={{ from: location }} replace></Navigate>
};

export default InstructorPrivateRoute;