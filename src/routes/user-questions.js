import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import { UserAnswerList } from './user-answers'
import {Link} from 'react-router-dom'


export const AllUserQuestions = ({token}) => {
    const [userQuestions, setUserQuestions] = useState('')

    useEffect(() => {
    axios
    .get('https://team-question-box.herokuapp.com/user/questions/', {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    .then((res) => setUserQuestions(res.data))
}, [token])

    if (userQuestions) {
        return (
        <>
            <div>
                <h1 style={{ color:'green', textAlign:'center'}}> Your Questions </h1>
                <div style={{height: '500px', overflow:'scroll'}}>
                    {userQuestions.map((questionsForUser) => (
                        <div>
                            <div style={{textAlign:'center', marginLeft:'30px', borderTop: 'dashed', borderLeft:'solid', borderBottom:'dashed', borderRight:'solid', borderColor:'grey'}}>
                                <Link 
                                to={`/questions/${questionsForUser.pk}`}
                                key={questionsForUser.pk}
                                style={{textDecoration:'none'}}>
                                <h1 style={{color:'green'}}>{questionsForUser.question_title}</h1></Link>
                                <p>{questionsForUser.question_field}</p>
                            </div>
                        </div>
                        ))}</div>
            </div>
        </>
    )}
}