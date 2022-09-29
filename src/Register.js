import { useState } from "react"
import axios from "axios"


export const Register = (setAuth) => {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState(null)
    
        const handleSubmit = (e) => {
            console.log(username, password)
        e.preventDefault()
            console.log('handle submit')
        axios
            .post('https://team-question-box.herokuapp.com/auth/users/', {
                username: username,
                password: password,
            })
            .then(() =>
                axios.post(
                'https://team-question-box.herokuapp.com/auth/token/login',
                {
                username: username,
                password: password,
                }
            )
            )
            .then((res) => {
                console.log(res.data.auth_token)
                // setAuth(username, res.data.auth_token)})
            })
            .catch((err) => {
                console.log(err)
                setError(err.message)
            })
        }

    return (  
        <>
        <h1>Registration Page</h1>
        <form id="registration-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input 
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                autoComplete="on"
                value={username}
                required
                />
                <br />
                <br />

<label htmlFor="password">Password: </label>
            
            <input 
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                required
                />
                <br />
                <br />

                <button>Sign Up</button>
        </form>

        <br />
            Already have an account?
            <div className="back-to-login-link">
                <a href="Login">Back to Login</a>
            </div>
        </>
    )
}

