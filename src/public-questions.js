import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
// import { ReadAnswers } from './routes/readanswers'
import { Link } from 'react-router-dom';
import { AskQuestion } from './ask-question'
 
export const PublicQuestions = () => {


export const PublicQuestions = ({token}) => {
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
            <div>
            <div>
                <AskQuestion token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'} />
            </div>
            <h1 style={{color:'green', textAlign:'center' }}>FANTASY FOOTBALL QUESTIONS</h1>
            <div className="usersQuestions" style={{width: '50%', margin: 'auto', marginTop:'30px', padding:'20px', alignContent: 'center'}}>
                <div>
                    <h1 style={{color:'green', textAlign:'center',  }}>🏈 FANTASY FOOTBALL QUESTIONS 🏈</h1>
                </div>
                <div>
                    <AskQuestion token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>
                </div>

            <div className="usersQuestions" style={{width: '70%', margin: 'auto', marginTop:'30px', padding:'20px', alignContent: 'center', height: '500px', overflow:'scroll', marginBottom:'50px'}}>
            {questions.map((questionList) => (
                <div style={{borderTop: 'dashed', borderBottom:'dashed', borderRight:'solid', borderLeft:'solid', borderColor:'green', textAlign:'center'}}>
                    <Link
                        to={`/questions/${questionList.pk}`}
                        key={questionList.pk}
                        style={{textDecoration:'none'}}>
                    <h1 style={{color:'green'}}>{questionList.question_title}</h1></Link>
                    <p>{questionList.question_field}</p>
                    <p className='showUser' style={{ fontSize:'.5em' }}>By: <strong>{questionList.user}</strong></p>
                </div>))}
            </div>
            </div>
        </>)}
}
