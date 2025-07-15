import './Header.css';
import { useState } from 'react';

function Header(){
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
            <a href="#home" className="nav-link d-inline-block px-2">HOME</a>
            <a href="#about" className="nav-link d-inline-block px-2">ABOUT</a>

            <div className="nav-dropdown d-inline-block px-2">
                <a href="#services" className="nav-link dropdown-toggle">
                SERVICES
                </a>
                <div className="dropdown-menu">
                    <a href="#service1" className="dropdown-item">Service 1</a>
                    <a href="#service2" className="dropdown-item">Service 2</a>
                    <a href="#service3" className="dropdown-item">Service 3</a>
                </div>
            </div>

            <a href="#portfolio" className="nav-link d-inline-block px-2">PORTFOLIO</a>

            <div className="nav-dropdown d-inline-block px-2">
                <a href="#blog" className="nav-link dropdown-toggle">
                BLOG 
                </a>
                <div className="dropdown-menu">
                    <a href="#blog1" className="dropdown-item">Blog Post 1</a>
                    <a href="#blog2" className="dropdown-item">Blog Post 2</a>
                </div>
            </div>

            <div className="nav-dropdown d-inline-block px-2">
                <a href="#shop" className="nav-link dropdown-toggle">
                SHOP 
                </a>
                <div className="dropdown-menu">
                    <a href="#product1" className="dropdown-item">Product 1</a>
                    <a href="#product2" className="dropdown-item">Product 2</a>
                </div>
            </div>

            <a href="#connect" className="nav-link d-inline-block px-2">CONNECT</a>
            </nav>
        </div>
    </header>
  );
};

export default Header;
