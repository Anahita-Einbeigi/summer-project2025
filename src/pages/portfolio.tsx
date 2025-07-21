import backgroundImage from '../assets/portfolio.png';


function portfolio() {
  return (
     <> 
    <section style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '60vh', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',  }}>
      <div className="container">
        <div className="content text-center text-white" >
          <h1 className="pt-5">The Portfolio</h1>
          <p className="pb-4">Browse our work</p>
          <p className="pb-5 text-center mx-auto" style={{ maxWidth: '44%' }}>Bouquet spring jetsetter disco ball charmed, espresso slippers turquoise blush taupe cultivate tan silk. Foliage opal glow turquoise eucalyptus chocolate carefree. Macaron wardrobe glow latte bloom cultivate daydream suede leather. Gown twinkle St Tropez ice Tokyo ribbon swank. Cognac luxe Morocco bangles smoothie, camel lucky confetti chill camel jetsetter plush.</p>
        </div>
      </div>
    </section>

    <section className="bg-light py-5">
        <div className="container text-center">
          <div className="mb-5">
            <p className='mb-0'>The</p>
            <h1>Galleries</h1>
          </div>
          <p className="mb-5">Here are some of the recent works we’ve done for our amazing clients.</p>
        </div>
      </section>
    </>
  );
}   
export default portfolio;