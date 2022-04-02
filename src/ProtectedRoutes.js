import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const ProtectedRoutes = () => {
    const { currentUser } = useContext(AuthContext)

    return currentUser ? <Outlet /> : <Navigate to='/login' />
    
}

export default ProtectedRoutes;