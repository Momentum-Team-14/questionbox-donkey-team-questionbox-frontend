import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const AnswersToQuestions = ({qId, token}) => {
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        axios
        .get(`https://team-question-box.herokuapp.com/questions/${qId}`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => setAnswers(res.data.answers))
        
    }, [qId, token])

if (answers) {
    return(
    <>
    <div id={answers.question} style={{margin:'50px'}}>
    {answers.map((ansDetails) => (
        <div style={{border:'solid', borderColor:'black', fontFamily:'fantasy', minHeight:'3rem'}}>
        <p className='showUser' style={{fontSize:'.75em', float: 'left', margin: '10px'}}>From User: <strong>{ansDetails.user}</strong></p>
        <p>{ansDetails.answer_field}</p>
        </div>
    ))}
    </div>
    </>
    )}
}