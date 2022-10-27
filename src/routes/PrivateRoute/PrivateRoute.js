import React, { createContext, useContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth } from "firebase/auth";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // if (loading) {
    //     return <Spinner animation="border" variant="primary" />
    // }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
};

export default PrivateRoute;