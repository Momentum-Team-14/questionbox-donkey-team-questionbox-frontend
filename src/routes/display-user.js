import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'

export const DisplayUser = ({token, isLoggedIn}) => {
    const [userDisplay, setUserDisplay] = useState('')

    useEffect(() => {
    axios
    .get('https://team-question-box.herokuapp.com/auth/users/me/', {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    .then((res) => setUserDisplay(res.data))
}, [token])

    return(
        <p>{userDisplay.username} </p>
    )


}