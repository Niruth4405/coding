import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Carousal from "./components/Carousal";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import About from "./components/About";
// import Chat from "./components/Welcome";

// let name=prompt("Enter your name")

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="bg-black">
      <Navbar />
      {/* <Toggle /> */}
      <Carousal />
      <Faq />
      <About />
      <Footer />
      </div>
    </>
  );
}

export default App;
