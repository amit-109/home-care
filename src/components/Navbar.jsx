import { Link } from "react-router-dom";
import { FiActivity, FiCalendar, FiHeart, FiHome, FiInfo, FiPhone } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand-block">
          <span className="brand-mark">
            <FiActivity className="icon" />
          </span>
          <span className="navbar-brand">
            <span className="brand-title">HomeCare Nursing</span>
            <span className="brand-subtitle">Hospital-grade care at home</span>
          </span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link"><FiHome className="icon" /> Home</Link>
          <Link to="/services" className="nav-link"><FiHeart className="icon" /> Services</Link>
          <Link to="/about" className="nav-link"><FiInfo className="icon" /> About</Link>
          <Link to="/contact" className="nav-link"><FiPhone className="icon" /> Contact</Link>
          <Link to="/appointment" className="nav-cta"><FiCalendar className="icon" /> Book Visit</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
