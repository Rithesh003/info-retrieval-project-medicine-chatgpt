import React from "react";
import "../App.css";
import { Button } from "./Button";
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
// const url = "https://www.youtube.com/watch?v=UW-dskGK7II";

function HeroSection() {
  // let navigate = useNavigate();
  // const routeChange = () =>{
  //   let path = `/searchbar`;
  //   navigate(path);
  // }
  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted />
      <h1>{`AI Mem Assist`}</h1>
      <p style={{ fontSize: "5rem", fontFamily: "cursive" }}>Awaits </p>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          // onClick={routeChange}
        >
          GET STARTED
        </Button>

        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        //   onClick={console.log('hey')}
        onClick={() => window.open(url, '_blank')} 
        >
          WATCH TUTORIAL <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
