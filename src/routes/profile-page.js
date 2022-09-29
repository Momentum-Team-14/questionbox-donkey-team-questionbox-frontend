import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import { UserAnswerList } from './user-answers'
import {Link} from 'react-router-dom'
import { AllUserQuestions } from './user-questions'
import { DisplayUser } from './display-user'


export const ProfilePage = ({token, isLoggedIn}) => {
    const [userProfile, setUserProfile] = useState('')

    useEffect(() => {
    axios
    .get('https://team-question-box.herokuapp.com/user/questions/', {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    .then((res) => setUserProfile(res.data))
}, [token])

if (!isLoggedIn){
    return(
        <div style={{border:'solid', textAlign:'center'}}>
        <p>Please Log In To View Your Profile</p>
        <div>
        <Link 
        to={'/Login'}
        style={{textDecoration:'none', fontSize:'3rem', color:'green'}}
        >Log In
        </Link>
        </div>
        </div>)
} 

else{

    return (
        <>
        <div>
            <div style={{textAlign:'center'}}>
                <h1 style={{color:'green'}}>Profile For: <mark><DisplayUser token={token}/></mark></h1>
            </div>
            <div style={{ display:'flex',  flexDirection:'row'  }}>
                <div>
                    <AllUserQuestions token={token}/>
                </div>
            
                <div style={{marginLeft:'100px'}}>
                    <UserAnswerList token={token}/>
                </div>
            </div>
        </div>
        </>
    )}}
