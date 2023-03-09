import React from "react";
import Header from "./components/Header";
import SliderComponent from "./components/SliderComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/tmdb-searchmovie-react-app/" element={<Home />} />
        <Route path="/tmdb-searchmovie-react-app/reviews" element={<SliderComponent />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
