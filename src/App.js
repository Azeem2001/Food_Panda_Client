import "./App.css";
import React from "react";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Rigester from "./pages/Rigester/Rigester";
import LoginPage from "./pages/Login/LoginPage";
function App() {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Rigester" element={<Rigester/>}></Route>
          <Route path="/LoginPage" element={<LoginPage/>}></Route>
        </Routes>
      </Router>
      
    </Container>
  );
}

export default App;
