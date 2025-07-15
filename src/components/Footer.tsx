import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import footer1 from '../assets/f1.png';
import footer2 from '../assets/f2.png';
import footer3 from '../assets/f3.png';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container text-center">
        <h1 className="mb-3">Palmer Design</h1>

        <div className="d-flex justify-content-center gap-3 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
            <CiFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
            <FaInstagram />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
            <ImPinterest2 />
          </a>
        </div>

        <div className="row justify-content-center">
          <div className="col-4 col-sm-3 col-md-2">
            <img src={footer1} alt="style" className="img-fluid footer-img" />
          </div>
          <div className="col-4 col-sm-3 col-md-2">
            <img src={footer2} alt="style" className="img-fluid footer-img" />
          </div>
          <div className="col-4 col-sm-3 col-md-2">
            <img src={footer3} alt="style" className="img-fluid footer-img" />
          </div>
        </div>

        <p className="mb-1">
          St Tropez turquoise wreath, gemstone warm babe iced coffee. Sequin opal iced coffee getaway, brush sugar dusty blue dainty shearling luster sparkle sequin filter.
        </p>
        <p className="text-sm mb-0">
          &copy; {new Date().getFullYear()} Palmer Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
