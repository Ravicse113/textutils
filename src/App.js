import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from "react"

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  //const [btn, setBtn] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const [mode, setMode] = useState('light');
  const toggleStyle = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'grey';
      // setBtn('Enable DarkMode')
      showAlert("The Light mode has been enabled", "success");
      document.title = "TextUtils-lightMode";
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      //setBtn('Enable LightMode')
      showAlert("The Dark mode has been enabled", "success");
      document.title = "TextUtils-DarkMode";
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleStyle={toggleStyle} />
      <Alert alert={alert} />
      {/* <BrowserRouter>


        <Routes>
          <div className="container">

            <Route path="/about" element={<About />} />



            <Route path="/">
              <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>

          </div>

        </Routes>

      </BrowserRouter> */}
      <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </>
  );
}

export default App;
