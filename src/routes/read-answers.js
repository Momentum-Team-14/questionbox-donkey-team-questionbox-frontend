import { useEffect } from 'react'
import { useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AnswersToQuestions } from './answer-list'
import { PostAnswers } from '../post-answers'
import { Link } from 'react-router-dom'


export const ReadAnswers = ({token, isLoggedIn}) => {
    const [oneQuestion, setOneQuestion] = useState('')
    const {qId} = useParams()

    useEffect(() => {
        axios
        .get(`https://team-question-box.herokuapp.com/questions/${qId}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => setOneQuestion(res.data))
        
    }, [qId, token])

    if (!isLoggedIn){
        return(
            <div style={{border:'solid', textAlign:'center'}}>
            <p>Please Log In To Post Questions and Answers</p>
            <div>
            <Link 
            to={'/Login'}
            style={{ fontSize:'3rem', textDecoration:'none', color:'green'}}
            >Log In
            
            </Link>
            </div>
            </div>)
    } 

    else{

        return (
            <>
                <div>
                    
                    <div className="Question-Details">
                        <div style={{width:'50%', margin:'auto'}}>
                            <div style={{border:'solid', marginTop:'30px', textAlign:'center'}}>
                            
                            <h1 style={{fontStretch:'extra-expanded'}}>{oneQuestion.question_title}</h1>
                            <p style={{fontSize:'.75rem'}}>
                                From User: 
                                <strong>{oneQuestion.user}</strong>
                            </p>
                            <p style={{font:'message-box'}}>{oneQuestion.question_field}</p>
                            </div>
                            <div>
                                <h1 style={{textAlign:'center'}}>Answers</h1>
                            </div>
                            <div>
                                <AnswersToQuestions qId={qId} token={token}/>
                            </div>
                            <div>
                                <PostAnswers qId={qId} token={token}/>
                            </div>
                        </div>
                    </div> 
                </div> 
            </>)
}}
