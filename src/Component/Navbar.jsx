import './Navbar.css';

function Navbar({ setShowNavbar }) {
  return (
    <div className="navbar-container">
      <div className="close-button" onClick={() => setShowNavbar(false)}>✕</div>

      <div className="textcontainer">
        {/* WORK */}
        <div className="navbar-item">
          <div className="hover-box">
            <span className="hover-text">WORK</span>
            <span className="hover-marquee">See EVERYTHING IS POSSIBLE &nbsp; SEE EVERYTHING IS POSSIBLE &nbsp;</span>
          </div>
        </div>

        {/* AGENCY */}
        <div className="navbar-item">
          <div className="hover-box">
            <span className="hover-text">AGENCY</span>
            <span className="hover-marquee">Know Us;    Know About The Company</span>
          </div>
        </div>

        {/* CONTACT */}
        <div className="navbar-item">
          <div className="hover-box">
            <span className="hover-text">CONTACT</span>
            <span className="hover-marquee">Send Us A FAX</span>
          </div>
        </div>

        {/* BLOG */}
        <div className="navbar-item">
          <div className="hover-boxlast">
            <span className="hover-text">BLOG</span>
            <span className="hover-marquee">EVERYTHING IS POSSIBLE &nbsp; EVERYTHING IS POSSIBLE &nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;