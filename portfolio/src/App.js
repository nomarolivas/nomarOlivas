import './App.css';
import SwePage from './SwePage'
import ItPage from './ItPage';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (

  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SwePage" element={<SwePage />} />
      <Route path="/ItPage" element={<ItPage />} >
        </Route>
    </Routes>
  </Router>
  );
}

export default App;

