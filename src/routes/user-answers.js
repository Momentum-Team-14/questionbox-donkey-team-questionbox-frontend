import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'



export const UserAnswerList = ({token}) => {
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
                <h1 style={{marginLeft:'30px'}}> Your Answers </h1>
                <div style={{height: '500px', overflow:'scroll'}}>
                {userAnswers.map((listOfAnswers) => (
                    <div style={{textAlign:'center', marginLeft:'30px', borderTop: 'dashed', borderLeft:'solid', borderBottom:'dashed', borderRight:'solid', borderColor:'grey'}}>
                        <p><mark>{listOfAnswers.answer_field}</mark></p>
                    </div>
                )
                )}
                </div>
            </div>
        </>
    )
}
}