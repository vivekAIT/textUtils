import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
// import About from "./components/About";
import "./App.css";
import { useState } from "react";


function App() {
  const [mode, setmode] = useState('light')
  const toggleMode =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042748';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
   
  }
  return (
    <>
      <Navbar title='TextUtils' aboutText = 'About' mode={mode} toggleMode={toggleMode}/>
      <TextForms heading ='Enter your text to analyze'mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
