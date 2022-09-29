import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { e } from 'react'
import { username, password } from 'react'
import { Input } from './Forms'
import { Navigate } from 'react-router-dom'



export const PostAnswers = ({ qId, token }) => {
    const [answer] = useState('')
    const [postAnswer, setPostAnswer] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const [questions] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
            axios
            .post('https://team-question-box.herokuapp.com/answers/',
            {
                answer_field: postAnswer,
                question: qId,
            },
            {
                headers: {
                    Authorization: `Token ${token}`, 
                },
            }
            )
            .then((res) => {
                setSubmitted(true)
                setPostAnswer('')
            }) 
            .catch((err) => console.log(err))
        }
        
            
            return (
                <div className="askQuestionPage"> 
                <div className="aqContainer">
                <form onSubmit={handleSubmit}>
                <div className="inputGp">
                    <h1>Post Your Answer</h1>              
                    <label>Answers:</label>
                    <textarea 
                        placeholder="Type your ANSWER here..." 
                        onChange={(e) => {
                            setPostAnswer(e.target.value)
                        }} 
                        />
                </div>
                    <div>
                    <button onClick={handleSubmit}>Submit Answer</button>
                    </div>
                </form>
                </div>
            </div>
        )}
        
