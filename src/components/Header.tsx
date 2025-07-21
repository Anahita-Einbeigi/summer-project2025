import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="custom-header py-3 px-4 shadow-sm">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="logo mb-0">Palmer Design</h1>
          <button
            className="menu-toggle d-lg-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/home" className="nav-link d-inline-block px-2">HOME</Link>
          <Link to="/about" className="nav-link d-inline-block px-2">ABOUT</Link>

          <div className="nav-dropdown d-inline-block px-2">
            <Link to="/services" className="nav-link dropdown-toggle">SERVICES</Link>
            <div className="dropdown-menu">
              <Link to="/service1" className="dropdown-item">Service 1</Link>
            </div>
          </div>

          <Link to="/portfolio" className="nav-link d-inline-block px-2">PORTFOLIO</Link>

          <div className="nav-dropdown d-inline-block px-2">
            <Link to="/blog" className="nav-link dropdown-toggle">BLOG</Link>
            <div className="dropdown-menu">
              <Link to="/blog1" className="dropdown-item">Blog Post 1</Link>
            </div>
          </div>

          <div className="nav-dropdown d-inline-block px-2">
            <Link to="/shop" className="nav-link dropdown-toggle">SHOP</Link>
            <div className="dropdown-menu">
              <Link to="/product1" className="dropdown-item">Product 1</Link>
              <Link to="/product2" className="dropdown-item">Product 2</Link>
            </div>
          </div>

          <Link to="/connect" className="nav-link d-inline-block px-2">CONNECT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
