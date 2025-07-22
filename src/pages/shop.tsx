import { useState } from 'react';

import shop1 from '../assets/s1.png';
import shop2 from '../assets/s2.png';
import shop3 from '../assets/about.png';
import shop4 from '../assets/f2.png';
import shop5 from '../assets/shop.png';
import shop6 from '../assets/familj.png';

const initialProducts = [
  { img: shop1, price: 129.9 },
  { img: shop2, price: 69.9 },
  { img: shop3, price: 59.9 },
  { img: shop4, price: 89.9 },
  { img: shop5, price: 49.9 },
  { img: shop6, price: 39.9 },
];

function Shop() {
  const [products, setProducts] = useState(initialProducts);

  const handleSort = (type: string) => {
    const sorted = [...products];

    if (type === 'low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'high') {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProducts(sorted);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5"><span className="fs-3">the</span> Shop</h1>

      {/* Header row */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <p>SHOWING 1–6 OF 12 RESULTS</p>
        </div>
        <div className="col-md-6 text-md-end">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><button className="dropdown-item" onClick={() => handleSort('low')}>Price: Low to High</button></li>
              <li><button className="dropdown-item" onClick={() => handleSort('high')}>Price: High to Low</button></li>
              <li><button className="dropdown-item" onClick={() => setProducts(initialProducts)}>Reset</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {products.map((product, idx) => (
          <div className="col-md-4 col-sm-6 mb-4" key={idx}>
            <div className="card border-0">
              <img
                src={product.img}
                alt={`product-${idx}`}
                className="card-img-top"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body card-price text-center">
                <p className="card-text">£{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="row">
        <div className="col text-center">
          <button className="btn btn-outline-dark mx-1">1</button>
          <button className="btn btn-outline-dark mx-1">2</button>
          <button className="btn btn-outline-dark mx-1">→</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
