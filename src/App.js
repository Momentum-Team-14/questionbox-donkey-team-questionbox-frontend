// import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom'
import { Login } from './Login';
import {ReadAnswers} from "./routes/read-answers"
import {PublicQuestions} from './public-questions'
import { ProfilePage } from './routes/profile-page';
import useLocalStorageState from 'use-local-storage-state';
import { Register } from './Register';

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
            element={<PublicQuestions token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>}/>
            <Route path="/questions/:qId" element={<ReadAnswers token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          /> 
            <Route path="/Login"
            element={<Login setAuth={setAuth} />} />
            <Route path='/user/questions' element={<ProfilePage  token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>} />
            <Route path="/Login/Register" element={<Register />} />
          </Routes>          
    </BrowserRouter>
    </>
  )
}

export default App;
