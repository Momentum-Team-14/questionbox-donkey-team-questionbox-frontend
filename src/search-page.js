import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
import PublicQuestions from './public-questions'

export const QuestionsSearchPage =() => {
    const [questions, setQuestions] = useState('')
    
    useEffect(() => {
    axios
    .get('https://team-question-box.herokuapp.com/questions/', )
    .then((res) => 
            setQuestions(res.data)) 
    }, [])
    

    if (questions) {
        return (  
        <>
            <div>
                <div style={{ display:'flex',  flexDirection:'row'  }}>
                    <div>
                        <Link
                        to={`/Questions`}
                        key={question_field}
                        style={{textDecoration:'none'}}>
                        <h1 style={{color:'green'}}>{PublicQuestions}</h1></Link>
                        </div>
                        <div style={{marginLeft:'100px'}}>
                        </div>
                    </div>
            </div>    
        </>
    )}}