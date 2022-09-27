import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TestPublicQuestions } from './TestPublicQuestions';
import Login from './Login';


function App() {
  return (
    <Router>
          <Navbar />
          <Routes>
            <Route path="/"
            element={<TestPublicQuestions />} />
          </Routes>
          <Routes>
            <Route path="/Login"
            element={<Login />} />
          </Routes>          
    </Router>
  )
}

export default App;
