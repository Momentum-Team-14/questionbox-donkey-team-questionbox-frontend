// import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom'
import { Login } from './Login';
import {ReadAnswers} from "./routes/read-answers"
import {PublicQuestions} from './public-questions'
import axios from 'axios';
import { Register } from './Register';
import { useState } from 'react';
import { useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'


function App() {
  const [token, setToken] = useLocalStorageState('ExtraPointersToken', null )
  const [username, setUsername] =  useLocalStorageState('ExtraPointersUsername', null)

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)

  }

  return (
    <>
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
          <Routes>
            <Route path="/"
            element={<PublicQuestions />}/>
            <Route path="/questions/:qId" element={<ReadAnswers/>} />

          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          /> 
            <Route path="/Login"
            element={<Login setAuth={setAuth}/>} />
            <Route path="/Register"
            element={<Register setAuth={setAuth} />} />
          </Routes>          
    </BrowserRouter>
    </>
  )
}

export default App;
