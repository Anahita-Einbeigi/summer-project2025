import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';
import heroImage from '../assets/hero.png';
import sideImage from '../assets/side.png';

import '../styles/about.css';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      
      {/* === SECTION 1: PROFILE === */}
      <section className="min-vh-75 flex flex-col items-center justify-center text-center p-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-6 text-center mb-4">
              <img
                src={about1}
                alt="Profile"
                className="img-fluid mb-4"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  borderRadius: '0 0 280px 0',
                }}
              />
            </div>
            <div className="col-12 col-sm-8 col-md-6 d-flex flex-column justify-content-center text-center mb-4 mt-5">
              <h3 className="text-4xl font-bold mb-4">My Mantra</h3>
              <h2 className="text-lg mb-2">
                The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience
              </h2>
              <p className="text-lg">Eleanor Roosevelt</p>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 2: INTRO === */}
      <section className="py-5 min-vh-100 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mt-5">
              <h1 className="mb-5">Hey, I’m Ania</h1>
              <h5 className="text-muted mb-5">Born to stand out</h5>
              <p className="fs-5">
                Bouquet spring jetsetter disco ball charmed, espresso slippers turquoise blush taupe cultivate tan silk.
                Foliage opal glow turquoise eucalyptus chocolate carefree. Macaron wardrobe glow latte bloom cultivate
                daydream suede leather. Gown twinkle St Tropez ice Tokyo ribbon swank. Cognac luxe Morocco bangles smoothie,
                camel lucky confetti chill camel jetsetter plush.
              </p>
              <p className="fs-5">
                Bouquet spring jetsetter disco ball charmed, espresso slippers turquoise blush taupe cultivate tan silk.
                Macaron wardrobe glow latte bloom cultivate daydream suede leather. Gown twinkle St Tropez.
                Lit chain leopard beam strawberry sequin bikini sunglasses, perfume charmed macchiatto prosecco.
              </p>
              <div className="mt-4">
                <p className="name">Ania xo xo</p>
              </div>
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <img src={about2} alt="intro" className="imgmodelabout img-fluid w-100" />
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 3: TIMELINE === */}
      <section className="py-5" style={{ backgroundColor: '#2f2f2f', color: '#fff' }}>
        <div className="container">
          <p className="mb-5 text-center text-white">IN A NUTSHELL</p>
          <h1 className="mb-5 text-center text-white fs-2">
            Let’s grow a business the easy way with my proven strategies to reach 6 figures.
            We break the rules, but we do it the right way. Get ready to be inspired and motivated. Let’s do this thing!
          </h1>

          <div className="row text-center">
            {/* ITEM 1 */}
            <div className="col-md-4 mb-5 position-relative d-flex flex-column align-items-center" style={{ marginTop: '0px' }}>
              <div className="position-absolute top-0 start-50 translate-middle-x text-white"
                   style={{ fontSize: '8rem', opacity: 0.1, zIndex: 200, marginTop: '-140px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
                2011
              </div>
              <img
                src={about3}
                alt="2011"
                className="img-fluid mb-3"
                style={{ height: '400px', objectFit: 'cover', zIndex: 1, position: 'relative' }}
              />
              <h5 className="fst-italic mb-3" style={{ zIndex: 1 }}>It all started</h5>
              <p style={{ maxWidth: '90%', margin: '0 auto', zIndex: 1 }}>
                Bouquet spring jetsetter disco ball charmed, espresso slippers turquoise blush taupe cultivate tan silk.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="col-md-4 mb-5 position-relative d-flex flex-column align-items-center" style={{ marginTop: '40px' }}>
              <div className="position-absolute top-0 start-50 translate-middle-x text-white"
                   style={{ fontSize: '8rem',  opacity: 0.1, zIndex: 200, marginTop: '-140px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
                2014
              </div>
              <img
                src={heroImage}
                alt="2014"
                className="img-fluid mb-3"
                style={{ height: '400px', objectFit: 'cover', zIndex: 1, position: 'relative' }}
              />
              <h5 className="fst-italic mb-3" style={{ zIndex: 1 }}>Built my first website</h5>
              <p style={{ maxWidth: '90%', margin: '0 auto', zIndex: 1 }}>
                Macaron wardrobe glow latte bloom cultivate daydream suede leather.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="col-md-4 mb-5 position-relative d-flex flex-column align-items-center" style={{ marginTop: '80px' }}>
              <div className="position-absolute top-0 start-50 translate-middle-x text-white"
                   style={{ fontSize: '8rem', opacity: 0.1, zIndex: 200, marginTop: '-140px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
                2015
              </div>
              <img
                src={sideImage}
                alt="2015"
                className="img-fluid mb-3"
                style={{ height: '400px', objectFit: 'cover', zIndex: 1, position: 'relative' }}
              />
              <h5 className="fst-italic mb-3" style={{ zIndex: 1 }}>Won an award</h5>
              <p style={{ maxWidth: '90%', margin: '0 auto', zIndex: 1 }}>
                Gown twinkle St Tropez ice Tokyo. Iced coffee getaway, brush sugar dusty blue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
