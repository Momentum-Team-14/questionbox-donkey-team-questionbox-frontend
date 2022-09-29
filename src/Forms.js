import axios from 'axios'
import { useState, Forms } from 'react'


export const Input = () => {
  const [title, setTitle] = useState('')
  const [question, setAskQuestionText] = useState('')

  const onChange = (e) => {
    setTitle(e.target.value)
    setAskQuestionText(e.target.value) 
  }

  return (
    <div>
        <input type='text' value={title} onChange={onChange} />
        <input type='text' value={question} onChange={onChange} />
    </div>  
  )
}

export default Forms;