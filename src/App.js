
import Booking from "./Booking";
import ErrorHandle from "./components/ErrorHandle";
import ShowSummary from "./components/ShowSummary";
import Stories from "./components/Stories";

import "./total.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <div>

    <Router>
      <Routes>
        <Route path="/" Component={Stories}></Route>
        <Route path="/show" Component={ShowSummary}></Route>
        <Route path="/book" Component={Booking}></Route>
        <Route path="/error" Component={ErrorHandle}></Route>
      </Routes>
    </Router>
    
      </div>
  );
}

export default App;
