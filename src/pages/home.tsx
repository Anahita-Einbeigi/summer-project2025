import React from 'react';
import '../styles/home.css'; 
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png'; 
import sideImage from '../assets/side.png';
import img1 from '../assets/about.png';
import img2 from '../assets/shop.png';
import img3 from '../assets/services.png';
import sign from '../assets/sign.png';
import tips1 from '../assets/tips1.png';
import tips2 from '../assets/tips2.png';
import tips3 from '../assets/tips3.png';

const Home: React.FC = () => {
  return (
    <main>

      {/* === SECTION 1: HERO === */}
      <section
        className="d-flex justify-content-center align-items-center text-center text-white hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          borderBottom: '2px solid #000',
        }}
      >
        <h1 className="display-4 fw-bold">Are you ready to take a journey?</h1>
      </section>

      {/* === SECTION 2: INTRO === */}
      <section className="container py-5 min-vh-100 mt-5">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <img src={sideImage} alt="intro" className="img-fluid imgmodel w-100" />
          </div>
          <div className="col-md-7">
            <h1 >Hey, I’m Ania</h1>
            <h5 className="text-muted mb-3">Born to stand out</h5>
            <p>
              Bouquet spring jetsetter disco ball charmed, espresso slippers turquoise blush taupe cultivate tan silk.
              Foliage opal glow turquoise eucalyptus chocolate carefree. Macaron wardrobe glow latte bloom cultivate
              daydream suede leather. Gown twinkle St Tropez ice Tokyo ribbon swank. Cognac luxe Morocco bangles smoothie,
              camel lucky confetti chill camel jetsetter plush.
            </p>
            <p>
              Lit chain leopard beam strawberry sequin bikini sunglasses, perfume charmed macchiatto prosecco. Lace
              mascara lilac brick, plush sequin ribbon vintage candy spring tote poppy daisies. Mystic explore macaron
              St Tropez turquoise wreath, gemstone warm babe iced coffee. Sequin opal iced coffee getaway, brush sugar
              dusty blue dainty shearling luster sparkle sequin filter.
            </p>
            <button className="btn btn-dark mt-3">Read More</button>
          </div>
        </div>
      </section>

      {/* === SECTION 3: CALL TO ACTION === */}
      <section className="min-vh-75 mb-5 pb-5 text-center">
        <div className="container">
          <h1 className="mb-5 w-75 mx-auto">
            Let’s grow a business the easy way with my proven strategies to reach 6 figures. We break the rules, but we do it the right way. Get ready to be inspired and motivated. Let’s do this thing!
          </h1>
          <h2 className="mb-5 w-75 mx-auto">
            What are you waiting for?
          </h2>

          <div className="row mt-5">
            <div className="col-md-6 text-start">
              <p>
                Bouquet spring jetsetter disco ball charmed, espresso slippers turquoise blush taupe cultivate tan silk.
                Foliage opal glow turquoise eucalyptus chocolate carefree. Macaron wardrobe glow latte bloom cultivate
                daydream suede leather. Gown twinkle St Tropez ice Tokyo.
              </p>
            </div>
            <div className="col-md-6 border-start ps-md-4 text-start">
              <p>
                Bouquet spring jetsetter disco ball charmed, espresso slippers turquoise blush taupe cultivate tan silk.
                Foliage opal glow turquoise eucalyptus chocolate carefree. Macaron wardrobe glow latte bloom cultivate
                daydream suede leather. Gown twinkle St Tropez ice Tokyo.
              </p>
              <button className="btn btn-dark">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 4 === */}
      <section
          className="custom-section position-relative d-flex justify-content-center align-items-center"
        >
          <div className="custom-box text-white p-5">
            <h2 className="fw-light fst-italic mb-4">
              We are modern creatives here to bring you the insights into style, lifestyle & design
            </h2>

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className={`d-flex align-items-start py-3 gap-3 ${item < 4 ? 'border-bottom' : ''}`}
              >
                <span className="tick-icon">✓</span>
                <p className="mb-0">Artist out small perfectly bohemian by bohemian love.</p>
              </div>
            ))}
          </div>
        </section>

      {/* === SECTION 5 === */}
      <section className="py-5 text-center">
        <div className="container py-5 min-vh-75">
          <h2 className="fst-italic mb-4">
            Navigate the sites with our <strong>Quick links</strong>
          </h2>
          <p className="text-uppercase text-secondary fw-bold small letter-spacing mb-5 mt-5">
            There’s loads to see
          </p>

          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="cards border-0 bg-transparent">
                <img src={img1} alt="About" className="img-fluid uniform-image" />
                <div className="bg-dark text-white py-2">
                    <Link to="/about" className="card-link-block text-white text-decoration-none">
                      About
                    </Link>             
                </div>
              </div>
            </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards border-0 bg-transparent">
              <img src={img2} alt="The Shop" className="img-fluid uniform-image" />
              <div className="bg-dark text-white py-2">
                <Link to="/shop" className="card-link-block text-white text-decoration-none">
                  The Shop
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="cards border-0 bg-transparent">
              <img src={img3} alt="Services" className="img-fluid uniform-image" />
              <div className="bg-dark text-white py-2">
                <Link to="/shop" className="card-link-block text-white text-decoration-none">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* section 6 */}
    <section
      className='py-5'
      style={{
        backgroundImage: `url(${sign})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% center',
        backgroundSize: '180%',
      }}
    >
      <div className="container py-5 text-center text-white">
        <h1 className="mb-4">Freebies? Yes Yes Yes!</h1>
        <p className="mb-4">
          Mystic explore macaron St Tropez turquoise wreath, gemstone warm babe iced coffee. Sequin opal iced coffee getaway, brush sugar dusty blue dainty shearling luster sparkle sequin filter. Bokeh Instagram gown fluff chic lucky
        </p>

        <form method="POST" action="/subscribe" className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="FIRST NAME" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="LAST NAME" />
            </div>
          </div>
          <div className="my-3">
            <input type="email" className="form-control" placeholder="EMAIL" />
          </div>
          <button type="submit" className="btn btn-dark w-100">SIGN UP</button>
        </form>
      </div>
    </section>

    {/* section 7 */}
    <section className="py-5 text-center">
      <div className="container">
        <h1 className="mb-4">
          All the very best content that our readers love. It’s 100% free, so get reading and build your business with our proven strategies
        </h1>
        <p className="mb-4">Free tips & hints</p>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card border-0 bg-transparent" data-hover-text="Tips 1: Start your journey">
              <img src={tips1} alt="About" className="img-fluid uniform-image" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card border-0 bg-transparent" data-hover-text="Tips 2: Keep improving">
              <img src={tips2} alt="About" className="img-fluid uniform-image" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card border-0 bg-transparent" data-hover-text="Tips 3: Stay consistent">
              <img src={tips3} alt="About" className="img-fluid uniform-image" />
            </div>
          </div>
        </div>
      </div>
    </section>


    </main>
  );
};

export default Home;
