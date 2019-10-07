import React from "react";
import NavbarContainer from  "./components/navbar";
import ImageContainer from "./components/imageContainer";
import CardContainer from "./components/cardContainer";



function App() {
  return (
    <div>
        <NavbarContainer />
        <ImageContainer />
        <div className="intense-shadow"></div>
        <div className="shadow"></div>
        <CardContainer />
    </div>
  );
}

export default App;
