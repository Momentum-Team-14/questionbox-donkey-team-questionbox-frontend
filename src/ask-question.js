import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { e } from 'react'
import { username, password } from 'react'
import { Input } from './Forms'
import { Navigate } from 'react-router-dom'
export default 'ask-question'


export const AskQuestion = ({ token }) => {
    const [title, setTitle] = useState('')
    const [askQuestionText, setAskQuestionText] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const Register = () => {
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('') 
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log('handle submit')
        axios.post('https://team-question-box.herokuapp.com/questions', {
            username: username,
            password: password,
        }
        )
        .then((res) => console.log(res)) 
    }

    // function AskQuestion ({token}) {
    //     const [title, setTitle] = useState("")
    //     const [askQuestionText, setAskQuestionText] = useState("")
        
        useEffect(() => {
            console.log('useEffect runs')
            axios.post('https://team-question-box.herokuapp.com/questions', {
                title: title,
                question: askQuestionText,
            }, {
                headers: {Authorization: `Token ${token}`
                }
            }) 
            .then ((res) => setAskQuestionText (res))
        }, [token]) 
        
        const handleSubmit = (e) => {
            e.preventDefault()
            axios
                .post('https://team-question-box.herokuapp.com/questions', 
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
                .catch((err) => setError(err.response.data.error))
            }
            
            if (submitted) {
                return <Navigate to="/questions" />
            }
            
            const handleChange = (inputType, e) => {
                if (inputType === 'question_title') {
                    setTitle(e.target.value)
                }
                if (inputType === 'question-field') {
                    setAskQuestionText(e.target.value)
                }} 

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
