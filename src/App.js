import React from "react";
import Navbar from "./componant/Navbar"
import Logos from "./componant/Logos"
import Hero from "./componant/Hero";
import Lastcard from "./componant/Lastcard"
import Imges from "./componant/Imges";
import Story from "./componant/Story";
import Icons from "./componant/Icons";
import Footer from "./componant/Footer"
import Meets from "./componant/Meets";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Logos/>
       <Hero/>
       <Icons/>
       <Meets/>
       <Story/>
       <Lastcard/>
       <Imges/>
       <Footer/>
    </div>
  );
}

export default App;


