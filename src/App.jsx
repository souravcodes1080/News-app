import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";
import './app.css'
function App() {
  return (
    <>
        <Navbar />
      <div className="container">
        <MainSection />
      </div>
        <Footer />
    </>
  );
}

export default App;
