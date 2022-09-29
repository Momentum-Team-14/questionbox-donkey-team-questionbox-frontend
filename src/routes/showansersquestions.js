import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'

export const ShowQuestions =({qId, token}) => {
    const [showQ, setShowQ] = useState('')

useEffect(() => {
    axios
    .get(`https://team-question-box.herokuapp.com/questions/${qId}`, {
        headers: {
            Authorization: `Token ${token}`,
        },
    })
    .then((res) => setShowQ(res.data))
    
}, [qId, token])

    return (
        <div style={{textAlign:'center', marginLeft:'30px', borderTop: 'solid', borderLeft:'solid', borderBottom:'solid', borderRight:'solid', borderColor:'grey'}}>
        <p >Question:</p>
        <p>{showQ.question_field}</p>
        </div>
    )


}

