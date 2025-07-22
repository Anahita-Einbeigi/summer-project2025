import img1 from '../../assets/about.png';
import img2 from '../../assets/f2.png';
import img3 from '../../assets/sign.png';
import img4 from '../../assets/shop.png';

function Product1() {
  return (
    <div className="container py-5">
      <div className="row">

        {/* Vänster sida */}
        <div className="col-md-6">
          <div className="mb-4">
            <img src={img1} alt="Main Product" className="img-fluid w-100" style={{ height: '400px', objectFit: 'cover' }} />
          </div>

          <div className="row">
            {[img2, img3, img4, img1].map((img, index) => (
              <div className="col-3" key={index}>
                <img src={img} alt={`Sub ${index}`} className="img-fluid" style={{ height: '100px',width: '145px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Höger sida */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="mb-3">Product</h1>
          <p>
            Velvet glossy luxe planner stripes beam dusty blue blazer. Cactus wreath wardrobe daydream espresso carefree doughnuts...
          </p>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h2 className="text-primary">$49.99</h2>
            <button className="btn btn-dark px-4 py-2">Add to Cart</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Product1;
