import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
// import { ReadAnswers } from './routes/readanswers'
import { Link } from 'react-router-dom';


export const PublicQuestions = () => {
    const [questions, setQuestions] = useState('')
    
    useEffect(() => {
        axios
        .get('https://team-question-box.herokuapp.com/questions/')
        .then((res) => 
            setQuestions(res.data))    
    }, [])
    
    
    if (questions){
        return (
            <>
            <div className="usersQuestions" style={{border:'solid' ,borderColor: 'white', background: 'grey'}}>
            {questions.map((questionList) => (
                <div>
                    <Link
                        to={`/questions/${questionList.pk}`}
                        key={questionList.pk}>
                    <h1>{questionList.question_title}</h1></Link>
                    <p>{questionList.question_field}</p>
                    <p className='showUser' style={{ fontSize:'.5em' }}>By: {questionList.user}</p>
                    {/* make this clickable to go to their profile page */}
                </div>))}
            </div>
        </>)}
}
