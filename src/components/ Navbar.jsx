import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <ul>
                <li onClick={() => navigate('/')} style={{ cursor: "pointer"}}>Home</li>
                <li onClick={() => navigate('/test')} style={{ cursor: "pointer"}}>Test</li>
                <li onClick={() => navigate('/login')} style={{ cursor: "pointer"}}>Login</li>
            </ul>
        </div>
    )
}

export default Navbar