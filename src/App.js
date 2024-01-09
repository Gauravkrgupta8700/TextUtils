// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg :message,
        type:type

      })
      setTimeout(()=>{
          setAlert(null);   
      },  1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "Success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "Success");
      document.title='TextUtils - Light Mode';
    }
  }

    
   
      
//         <Route path='/about' element={<About />} />
//         <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter text" mode={mode} />} />
     
//     </Router>
   
//     </>
//      );
// }

// export default App;



// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert('Dark mode has been enabled', 'Success');
//       document.title = 'TextUtils - Dark Mode';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert('Light mode has been enabled', 'Success');
//       document.title = 'TextUtils - Light Mode';
//     }
//   };

  return (
    <>
    
        <Navbar title="TextUtils" about="aboutTextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
<Routes>
      
          <Route  exact path="/About"  Component={()=> <About   mode={mode}/>}/>
          <Route path="/" Component={()=> <TextForm showAlert={showAlert} heading="Try TextUtils- Word Counter | Character Counter" mode={mode} />} />
     
      </Routes>
    </>
  );
}

export default App;
