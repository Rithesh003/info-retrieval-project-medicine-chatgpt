import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Evaluation from "./components/pages/Evaluation";
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
          {/* <Route path="/searchbar" element={<SearchBar />} /> */}
          {/* <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
