//import './App.css';//
import React from "react";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Wwa from "./components/Wwa"
import Projects from "./components/Projects";
import Contributions from "./components/Contributions"

function App() {
  return (
    <div >
      <Navbar />
      <Wwa />
      <Projects />
      <Contributions />
      <Footer /> 
    </div>
  );
}

export default App;
