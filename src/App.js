import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({})

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      alertType: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#02171c';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toogleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} />} />
            <Route path="/About" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

