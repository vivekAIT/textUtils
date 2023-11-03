import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import "./App.css";


function App() {
  return (
    <>
      <Navbar title='TextUtils' aboutText = 'About'/>
      <TextForms heading ='Enter your text to analyze'/>
    </>
  );
}

export default App;
