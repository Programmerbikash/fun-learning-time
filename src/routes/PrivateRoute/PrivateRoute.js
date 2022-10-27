import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const PrivateRoute = () => {
    return (
        <div>
            <h1>Private Route</h1>
        </div>
    );
};

export default PrivateRoute;