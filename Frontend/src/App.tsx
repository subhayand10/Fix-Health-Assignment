import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Doctors from "./components/Doctors/Doctors";
  import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  const [doctors, setDoctors] = useState([]);
   const [loading, setLoading] = useState<boolean>(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage setDoctors={setDoctors} setLoading={setLoading} />} />
        <Route path="/doctors" element={<Doctors data={doctors} loading={loading}/>} />
      </Routes>
    </Router>
  );
}
{/* <LandingPage setDoctors={setDoctors} />
<Doctors data={doctors} /> */}

export default App;
