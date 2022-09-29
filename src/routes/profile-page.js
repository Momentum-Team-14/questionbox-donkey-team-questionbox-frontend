import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import { UserAnswerList } from './user-answers'
import {Link} from 'react-router-dom'
import { AllUserQuestions } from './user-questions'


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
                <h1> Hello {userProfile.user}</h1>
            </div>
            <div style={{ display:'flex',  flexDirection:'row'  }}>
                <div>
                    <AllUserQuestions token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>
                </div>
            
                <div style={{marginLeft:'100px'}}>
                    <UserAnswerList token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>
                </div>
            </div>
        </div>
        </>
    )}
