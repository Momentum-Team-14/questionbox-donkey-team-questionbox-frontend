// import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import {PublicQuestions} from './public-questions'
import {Route, Routes} from "react-router-dom"
import {ReadAnswers} from "./routes/read-answers"

function App() {
  return (
    <div className="App">
        <Routes> 
        <Route path="/" element={<PublicQuestions />}/>
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
    </div>
  );
}

export default App;
