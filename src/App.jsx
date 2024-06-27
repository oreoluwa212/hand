import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
