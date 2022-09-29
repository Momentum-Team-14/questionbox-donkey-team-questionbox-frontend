import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import { ShowQuestions } from './showansersquestions'



export const UserAnswerList = ({token, qId}) => {
    const [userAnswers, setUserAnswers] = useState('')


    useEffect(() => {
    axios
    .get ('https://team-question-box.herokuapp.com/user/answers/', {
        headers:{
            Authorization: `Token ${token}`
    },}
    )
    .then((res) => setUserAnswers(res.data))
}, [token])



if (userAnswers) {
    return (
        <>
            <div>
                <h1 style={{marginLeft:'30px', color:'green', textAlign:'center'}}> Your Answers </h1>
                <div style={{height: '500px', overflow:'scroll'}}>
                {userAnswers.map((listOfAnswers) => (
                <div>
                    <div>
                        <ShowQuestions qId={listOfAnswers.question} token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>
                    </div>
                    <div style={{textAlign:'center', marginLeft:'30px', borderTop: 'solid', borderLeft:'solid', borderBottom:'solid', borderRight:'solid', borderColor:'grey'}}>
                        <p>Your Answer:</p>
                        <p><mark>{listOfAnswers.answer_field}</mark></p>
                    </div>
                </div>
                )
                )}
                </div>
            </div>
        </>
    )
}
}