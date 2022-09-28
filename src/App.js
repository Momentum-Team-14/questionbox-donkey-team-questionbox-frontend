// import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from "react-router-dom" ; 
import AskQuestion from "./ask-question";
import PostAnswer from './post-answers'
function App() {
  return (
  <div>
      <div>
        <AskQuestion token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'}/>
      </div>
      <div><PostAnswer token={'2dc43cc797e571669d4ee81fb0fbbea3bb8de2c1'} /> 
      </div>
      {/* <Routes>
        <Route path="ask-question" element={<AskQuestion />} />
      </Routes> */}
  </div>
)}

export default App;
