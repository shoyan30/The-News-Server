/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({children}) => {
   
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>       
};

export default PrivateRoute;