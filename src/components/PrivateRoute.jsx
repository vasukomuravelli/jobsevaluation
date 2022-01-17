import React from "react";
import { useSelector } from "react-redux";
import {Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const {role} = useSelector((state)=>({role  : state.AuthState.userState}))
    
    if (role === "") {
        return <Navigate to="/login"></Navigate>
    }
    return children;
}