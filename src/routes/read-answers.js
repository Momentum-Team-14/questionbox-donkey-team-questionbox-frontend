import { useEffect } from 'react'
import { useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AnswersToQuestions } from './answer-list'


export const ReadAnswers = ({token}) => {
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

        return (
            <>
                <div>
                    <div className="Question-Details">
                        <div style={{width:'50%', margin:'auto'}}>
                            <h1 style={{fontStretch:'extra-expanded'}}>{oneQuestion.question_title}</h1>
                            <p style={{fontSize:'.75rem'}}>
                                From User: 
                                <strong>{oneQuestion.user}</strong>
                            </p>
                            <p style={{font:'message-box'}}>{oneQuestion.question_field}</p>
                            <div>
                                <AnswersToQuestions qId={qId} token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>
                            </div>
                        </div>
                    </div> 
                </div> 
            </>)
}
