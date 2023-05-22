import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/residencies/Residencies";
import Companies from "./components/Companies/Companies";
import Value from "./components/Value/Value";
const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
    </div>
  );
};

export default App;
