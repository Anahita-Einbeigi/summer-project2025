import photo from '../assets/f1.png';

function Services() {
  return (
    <section>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 border-end border-2 border-dark px-4">
            <h1 className='text-center mt-5 fs-2'>
              Let’s grow a business the easy way with my proven strategies to reach 6 figures. 
              We break the rules, but we do it the right way. Get ready to be inspired and motivated. 
              Let’s do this thing!
            </h1>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <img src={photo} alt="photography" className="w-50 h-auto" />
          </div>
        </div>
        <div>
          <h1 className='text-center mt-5 fs-3'>What are you waiting for?</h1>
        </div>
      </div>
    </section>
  );
}

export default Services;
