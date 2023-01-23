import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useRoutes,
// } from "react-router-dom";



function App() {


  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {

    setalert({

      msg: message,
      type: type

    })

    setTimeout(() => {

      setalert(null);

    }, 1900);

  }


  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark');

      document.body.style.backgroundColor = '#001428'

      showalert("Dark mode has been enabled", "success")


    }

    else {

      setMode('light');
      document.body.style.backgroundColor = 'white'
      showalert("light mode has been enabled", "success")


    }

  }

  return (
    <>
     {/* <Router> */}
    <Navbar title="TextOPS" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <Textform showalert={showalert} heading="Enter Your text Below" mode={mode}/>
          </Route> */}

          {/* <Route exact path="/about" element={<About title="about"/>} />
          <Route exact path="/" element={<Textform  showalert={showalert} heading="Enter text to analyze"  mode={mode}  />} /> */}
        <Textform  showalert={showalert} heading="Enter text to analyze"  mode={mode}  />

    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
