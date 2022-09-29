import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import PublicQuestions from './public-questions'

export const QuestionsSearchPage =() => {
    const [searchQuestions, setSearchQuestions] = useState('')
    // const [search] = useParams()
    

    // const perfSearch = ((e) => {
    // e.preventDefault()
    useEffect (() => {
    axios
            .get('https://team-question-box.herokuapp.com/questions/?search=Lions' )
            .then((res) => 
                setSearchQuestions(res.data)) 
    },
    [])
    
    if (searchQuestions) {

    return ( 
        <>
        <form> </form>
        <div>
            <label>Search Questions</label>
            <textarea
            placeHolder="Search Here..."
            required
            onChange={(e) => {
                setSearchQuestions (e.target.value)
            }
            }    
            /> 
        </div>
        {searchQuestions.map((find) => (
        <div>
            <div>
                <p>{find.question_title}</p>
                <p>{find.question_field}</p> 
            </div>
        </div> 
        )
    )}</>)}}