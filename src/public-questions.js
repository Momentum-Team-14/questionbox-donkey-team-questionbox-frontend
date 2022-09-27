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
            <div className="usersQuestions" style={{width: '50%', margin: 'auto', padding:'10px', alignContent: 'center', border:'solid', borderColor: 'grey'}}>
            {questions.map((questionList) => (
                <div style={{borderTop: 'dashed' , borderColor:'grey'}}>
                    <Link
                        to={`/questions/${questionList.pk}`}
                        key={questionList.pk}>
                    <h1>{questionList.question_title}</h1></Link>
                    <p>{questionList.question_field}</p>
                    <p className='showUser' style={{ fontSize:'.5em' }}>By: {questionList.user}</p>
                </div>))}
            </div>
        </>)}
}
