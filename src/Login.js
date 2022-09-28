import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const errorRef = useRef()
    const usernameRef = useRef()

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    useEffect(() => {
    }, [username, password])

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(null)
        // when the form submits, make an ajax request to the login endpoint
        // capture the auth token in state
        axios
        .post('https://team-question-box.herokuapp.com/auth/token/login/', {
            username: username,
            password: password,
        })
        .then((res) => {
            // const token = res.data.auth_token
            // setAuth(username, token)
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    return (  
        <>
        <p ref={errorRef} className={error ? 'error' : 'offscreen'}
        aria-live='assertive'>{error}</p>
        <h1>Sign In</h1>
        <form id="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                ref={usernameRef}
                autoComplete="on"
                value={username}
                required
                />

<label htmlFor="password">Password:</label>
            <input 
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                required
                />

                <button>Sign In</button>
        </form>
        <p>
            Not a member? <br />
            <div className="register-link">
                {/* route to reigster link*/}
                <a href="sign-up">Sign Up</a>
            </div>
        </p>
        </>
    )
}


export default Login;