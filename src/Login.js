import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useNavigate, Switch } from "react-router-dom"
import { Register } from "./Register";

export const Login = ({setAuth}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const handleSubmit = (event) => {
        console.log({ username, password })
        event.preventDefault()
        setError(null)
        axios
        .post('https://team-question-box.herokuapp.com/auth/token/login/', {
            username: username,
            password: password,
        })
        .then((res) => {
            console.log(res.data)
            const token = res.data.auth_token
            setAuth(username, token)
            navigate('/')

        })
        .catch((error) => {
            console.log(error)
            if (error.response.data.username)
            setError(error.response.data.username);
        
        if (error.response.data.password)
            setError(error.response.data.password)
        })
        console.log(username, password)
    }
    
    return (  
        <>
        <div style={{border:'solid', margin:'auto'}}>
        <h1>Sign In</h1>
        <form id="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input 
                style={{maxWidth:'100px'}}
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                // ref={usernameRef}
                autoComplete="on"
                value={username}
                required
                />
                <br />
                <br />

<label htmlFor="password">Password: </label>
            <input 
                style={{maxWidth:'100px'}}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                required
                />
                <br />
                <br />

                <button style={{borderRadius:'10px'}}>Sign In</button>
        </form>
            <br />
            <div className="register-link">
                Don't have an account? <br />
            <a href="./Register">Sign Up</a>
            </div>
        </div>
        </>
    )
}