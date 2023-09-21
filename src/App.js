import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import ImageGallery from "./Components/ImageGallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
