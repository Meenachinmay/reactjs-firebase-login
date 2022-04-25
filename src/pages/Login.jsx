import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === '' && password === '' || email === '' || password === '') {
            alert('Empty fields are not allowed.')
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    dispatch({
                        type: "LOGIN",
                        payload: user
                    })
                    navigate('/')
                })
                .catch((error) => {
                    setError(true)
                })
            setEmail('')
            setPassword('')
        }

    }

    // const handleRegister = () => {
    //     e.preventDefault()
    //     if (email === '' && password === '' || email === '' || password === '') {
    //         alert('Empty fields are not allowed.')
    //     } else {
    //         createUserWithEmailAndPassword(auth, email, password)
    //             .then((userCredential) => {
    //                 const user = userCredential.user
    //             })
    //             .catch((error) => {
    //                 setError(true)
    //             })
    //     }
    // }

    return (
        <div>
             <h1>login page</h1>
             <div className=''>
                 <form onSubmit={handleLogin}>
                    <input style={{ padding: '10px', marginRight: '5px'}} type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    <input style={{ padding: '10px'}} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <button style={{ padding: '10px', marginLeft: '5px', cursor: 'pointer'}} type='submit'>
                        Login
                    </button>
                    {error && <span style={{color: 'red'}}>Wrong email or password!</span>}
                 </form>
             </div>
        </div>
    )
}

export default Login