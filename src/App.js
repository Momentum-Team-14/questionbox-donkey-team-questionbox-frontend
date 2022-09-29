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
import { QuestionsSearchPage } from './search-page';
import axios from 'axios';

function App() {
  const [token, setToken] = useLocalStorageState('ExtraPointersToken', null )
  const [username, setUsername] =  useLocalStorageState('ExtraPointersUsername', '')

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)

  }

  const handleLogout = () => {
    // send request to log out on the server
    axios
      .post(
        'https://team-question-box.herokuapp.com/auth/token/logout',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() =>
        // log out in React
        setAuth('', null)
      )
  }

  const isLoggedIn = username && token

  return (
    <>
    <BrowserRouter>
      <header>
      {<Navbar handleLogout={handleLogout} token={token} isLoggedIn={isLoggedIn} />}
      </header>
          <Routes>
            <Route path="/"
            element={<PublicQuestions token={token} isLoggedIn={isLoggedIn}/>}/>
            <Route path="/questions/:qId" element={<ReadAnswers token={token} isLoggedIn={isLoggedIn}/>} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          /> 
            <Route path='/searchquestion' element={<QuestionsSearchPage token={token} isLoggedIn={isLoggedIn} /> } /> 
            <Route path="/Login"
            element={<Login setAuth={setAuth} isLoggedIn={isLoggedIn} />} />
            <Route path='/user/questions' element={<ProfilePage  token={token} isLoggedIn={isLoggedIn}/>} />
            <Route path="/Login/Register" element={<Register setAuth={setAuth} isLoggedIn={isLoggedIn} />} />
          </Routes>          
    </BrowserRouter>
    </>
  )
}

export default App;
