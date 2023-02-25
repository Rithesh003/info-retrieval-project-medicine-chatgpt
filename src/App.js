import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Evaluation from "./components/pages/Evaluation";
import TableWithSelection from "./components/pages/form";
import App1 from "./components/pages/app1";
import Login from "./components/pages/Login";
import Admin from "./components/pages/admin";
// import { SearchBar } from "./components/pages/searchbar/searchbar";
// import QuestionData from "./Data.json";
// import Services from './components/Services';
// import Products from './components/Products';
// import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/form" element={<TableWithSelection />} />
          <Route path="/app1" element={<App1 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
