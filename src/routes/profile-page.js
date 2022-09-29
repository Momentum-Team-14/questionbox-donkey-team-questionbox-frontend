import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import { UserAnswerList } from './user-answers'
import {Link} from 'react-router-dom'
import { AllUserQuestions } from './user-questions'
import { DisplayUser } from './display-user'


export const ProfilePage = ({token}) => {
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
    )}
