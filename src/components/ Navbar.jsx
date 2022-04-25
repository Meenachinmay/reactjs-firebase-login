import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
    const navigate = useNavigate()
    const { currentUser, dispatch } = useContext(AuthContext)

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <div>
            <ul>
                <li onClick={() => navigate('/')} style={{ cursor: "pointer"}}>Home</li>
                <li onClick={() => navigate('/test')} style={{ cursor: "pointer"}}>Test</li>
                {
                    currentUser ? <li onClick={handleLogout} style={{ cursor: "pointer"}}>Logout</li> : 
                    <li onClick={() => navigate('/login')} style={{ cursor: "pointer"}}>Login</li>
                }
            </ul>
        </div>
    )
}

export default Navbar