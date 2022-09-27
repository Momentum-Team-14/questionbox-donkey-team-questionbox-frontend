import { useState, useEffect, useRef } from "react";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const errorRef = useRef()
    const usernameRef = useRef()

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    useEffect(() => {

    }, [username, password])

    return (  
        <>
        <p ref={errorRef} className={error ? 'error' : 'offscreen'}
        aria-live='assertive'>{error}</p>
        <h1>Sign In</h1>
        <form>
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
        </form>
        </>
    )
}

export default Login;