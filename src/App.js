// import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login';
import {ReadAnswers} from "./routes/read-answers"
import {PublicQuestions} from './public-questions'
import { ProfilePage } from './routes/profile-page';


function App() {
  return (
    <Router>
          <Navbar />
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
            element={<Login />} />
            <Route path='/user/questions' element={<ProfilePage  token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>} />
          </Routes>          
    </Router>
  )
}

export default App;
