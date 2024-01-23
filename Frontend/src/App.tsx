import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Doctors from "./components/Doctors/Doctors";
  import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  const [doctors, setDoctors] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage setDoctors={setDoctors} />} />
        <Route path="/doctors" element={<Doctors data={doctors}/>} />
      </Routes>
    </Router>
  );
}
{/* <LandingPage setDoctors={setDoctors} />
<Doctors data={doctors} /> */}

export default App;
