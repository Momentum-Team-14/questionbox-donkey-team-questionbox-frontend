<<<<<<< HEAD
=======
// import { Routes, Route, Link } from "react-router-dom";
>>>>>>> main
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login';
import {ReadAnswers} from "./routes/read-answers"
import {PublicQuestions} from './public-questions'


function App() {
  return (
<<<<<<< HEAD

)}
=======
    <Router>
          <Navbar />
          <Routes>
            <Route path="/"
            element={<PublicQuestions />}/>
            <Route path="/questions/:qId" element={<ReadAnswers token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          /> 
          </Routes>
          <Routes>
            <Route path="/Login"
            element={<Login />} />
          </Routes>          
    </Router>
  )
}
>>>>>>> main

export default App;
