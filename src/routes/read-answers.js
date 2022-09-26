import { useEffect } from 'react'
import { useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { Routes, Route, useParams } from 'react-router-dom';

export const ReadAnswers = ({token}) => {
    const [answers, setAnswers] = useState('')
    const [oneQuestion, setOneQuestion] = useState()
    const {qId} = useParams()

    useEffect(() => {
        axios
        .get(`https://team-question-box.herokuapp.com/questions/${qId}`)
        .then((res) => setOneQuestion(res.data))
        
    }, [qId])

    useEffect(() => {
        axios
        .get(`https://team-question-box.herokuapp.com/answers/`)
        .then((res) => setAnswers(res.data))
        
    }, [])

    // if (oneQuestion, answers){
        return (
            <>
                <div>
                    <div className="Question-And-Answers">
                        <p>hi</p>
                    {/* {oneQuestion((details) => 
                        <div>
                            <h1>{details.question_title}</h1>
                            <p>{details.question_field}</p>
                        </div>)}
                    
                    {answers.map((ansDetails) => 
                        <div style={{border:'solid', borderColor:'black'}}>
                        <p className='showUser' style={{fontSize:'.5em' }}>{ansDetails.user}</p>
                        <p>{ansDetails.answser_field}</p>
                        </div>
                    )}*/}
                    </div> 
                </div> 
            </>
    )
    // }
}
{/* make this clickable to go to their profile page */}