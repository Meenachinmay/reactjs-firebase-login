import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === '' && password === '' || email === '' || password === '') {
            alert('Empty fields are not allowed.')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                })
                .catch((error) => {
                    setError(true)
                })
        }

    }
    return (
        <div>
             <h1>login page</h1>
             <div className=''>
                 <form onSubmit={handleLogin}>
                    <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit'>
                        Login
                    </button>
                    {error && <span style={{color: 'red'}}>Wrong email or password!</span>}
                 </form>
             </div>
        </div>
    )
}

export default Login