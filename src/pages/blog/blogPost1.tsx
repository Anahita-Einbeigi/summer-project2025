import React from 'react';
import './BlogPost1.css';

import mainImage from '../../assets/f1.png';
import lifestyleImg from '../../assets/lifestyleImg.png';
import fashionImg from '../../assets/fashion.png';
import familyImg from '../../assets/familj.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import img1 from '../../assets/sunset.png';
import img2 from '../../assets/f1.png';
import img3 from '../../assets/f2.png';
import img4 from '../../assets/f3.png';

const images = [
  { src: img1, label: 'LIFESTYLE' },
  { src: img2, label: 'FASHION' },
  { src: img3, label: 'FAMILY' },
  { src: img4, label: 'TRAVEL' },
];

const blogPost1: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Main Blog Content */}
        <div className="col-lg-8 col-md-12">
          <h1 className='text-center mt-5'>The digital nomad life</h1>
          <h3 className='text-center text-muted mb-5'>Featured, Travel</h3>
          <p>
            Bouquet spring jetsetter disco ball charmed, espresso slippers turquoise blush taupe cultivate tan silk.
            Foliage opal glow turquoise eucalyptus chocolate carefree. Macaron wardrobe glow latte bloom cultivate
            daydream suede leather. Gown twinkle St Tropez ice Tokyo ribbon swank. Cognac luxe Morocco bangles
            smoothie, camel lucky confetti chill camel jetsetter plush. Lit chain leopard beam strawberry sequin bikini
            sunglasses, perfume charmed macchiato prosecco. Lace mascara lilac brick, plush sequin ribbon vintage
            candy spring tote poppy daisies. Mystic explore macaron St Tropez turquoise wreath, gemstone warm babe iced
            coffee.
          </p>

          <img src={mainImage} alt="blog main" className="img-fluid mx-auto my-4 w-75 d-block" />

          <p className='mb-5'>
            Sequin opal iced coffee getaway, brush sugar dusty blue dainty shearling luster sparkle sequin filter.
            Bokeh aesthetic vinyl polaroid artisan photo journal film craft. Eucalyptus sundress espresso honey glow
            brush powdery. Suede espresso swank dusty plush cult-favorite twinkle Tokyo cocktail.
          </p>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 border-start border-1 border-secondary ps-lg-5">
          <div className="mb-5">
            <h4 className="mb-3 text-center fs-2">Recent News</h4>
            <div className="card border-0">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="image-slide position-relative">
                      <img src={img.src} alt={img.label} className="img-fluid" />
                      <div className="overlay">
                        <h5 className="card-title text-white text-center">An italian sunset for cocktails</h5>
                        <button className="btn btn-light mt-2">{img.label}</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <div className="card-body text-center">
                <a href="#" className="text-dark text-decoration-none fs-6 fw-bold">READ MORE</a>
              </div> */}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-3 text-center fs-2">Categories</h4>

            <div className="mb-3 category-card">
              <img src={lifestyleImg} className="img-fluid" alt="Lifestyle" />
              <button className="position-absolute top-50 start-50 translate-middle btn btn-light">
                LIFESTYLE
              </button>
            </div>

            <div className="mb-3 category-card">
              <img src={fashionImg} className="img-fluid" alt="Fashion" />
              <button className="position-absolute top-50 start-50 translate-middle btn btn-light">
                FASHION
              </button>
            </div>

            <div className="mb-3 category-card">
              <img src={familyImg} className="img-fluid" alt="Family" />
              <button className="position-absolute top-50 start-50 translate-middle btn btn-light">
                FAMILY
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default blogPost1;
