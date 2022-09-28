import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { e } from 'react'
import { username, password } from 'react'
import { Input } from './Forms'
import { Navigate } from 'react-router-dom'



const AskQuestion = ({ token }) => {
    const [title, setTitle] = useState('')
    const [askQuestionText, setAskQuestionText] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
        
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post('https://team-question-box.herokuapp.com/questions/', 
            {
                title: title,
                question: askQuestionText,
            },
            {
                headers: {
                    Authorization: `Token ${token}`, 
                },
            }
            )
            .then((res) => {
                setSubmitted(true)
                setTitle('')
                setAskQuestionText('')
            }) 
            .catch((err) => console.log(err))
        }
            
        // if (submitted) {
        //     return <Navigate to="/questions/" />
        // }
        
        const handleChange = (inputType, e) => {
            if (inputType === 'question_title') {
                setTitle(e.target.value)
            }
            if (inputType === 'question-field') {
                setAskQuestionText(e.target.value)
            }
        } 

        return (
            <div className="askQuestionPage"> 
                <div className="aqContainer">
                    <form onSubmit={handleSubmit}>
                <div className="inputGp">
                    <h1>Ask a Question</h1>
                    <label>Title:</label>
                    <input 
                        placeholder="Type the TITLE of your question here..." 
                        onChange={(e) => {
                            setTitle(e.target.value)
                    }}
                    />
                </div>
                <div className="inputGp">
                    <label>Question:</label>
                    <textarea 
                        placeholder="Type your QUESTION here..." 
                        onChange={(e) => {
                            setAskQuestionText(e.target.value)
                        }} 
                    />
                </div>
                        <div>
                        <button onClick={handleSubmit}>Submit Question</button>
                        </div>
                    </form>
                </div>
            </div>
        )
        }

export default AskQuestion