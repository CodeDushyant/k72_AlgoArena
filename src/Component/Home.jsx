import video from "../assets/69496b2d.mp4";
import './Home.css';
import Navbar from "./Navbar";
import { useState } from "react";

function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleSidebarClick = () => {
    setShowNavbar(true); // show navbar
  };

  return (
    <div>
      {/* Sidebar trigger */}
      <div className="sidebar-container" onClick={handleSidebarClick}>
        <div className="sidebar-icon">
          ☰
        </div>
      </div>

      {/* Conditional rendering */}
      {showNavbar ? (
        <Navbar   setShowNavbar={setShowNavbar}/>
      ) : (
        <div className="video-container">
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M0,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L0,0.0057591623 L0,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            />
          </svg>

          <video autoPlay muted loop playsInline className="background-video">
            <source src={video} type="video/mp4" />
          </video>

          <div className="overlay-text">
            <h1>
              The spark for <br/>
              <span>all</span>
              <span className="video-wrapper">
                <video autoPlay muted loop playsInline>
                  <source src={video} type="video/mp4" />
                </video>
              </span>
              <span>things </span> 
              <span className="creative-wrapper">
                <svg className="creative-circle" viewBox="0 0 300 120">
                  <ellipse cx="150" cy="60" rx="140" ry="45"></ellipse>
                </svg>
                <span className="creative-text">creative</span>
              </span>
            </h1>
          </div>

          <div className="bottom-text">
            <p>
              K72 is an agency that builds brands from every angle. Today, tomorrow and
              years from now. We think the best sparks fly when comfort zones get left
              behind and friction infuses our strategies, brands and communications
              with real feeling. We’re transparent, honest and say what we mean, and
              when we believe in something, we’re all in.
            </p>
          </div>

          <div className="nav-buttons">
            <div className="capsule">WORK</div>
            <div className="capsule">AGENCY</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home;