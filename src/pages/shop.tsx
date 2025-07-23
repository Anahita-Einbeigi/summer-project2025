import { useState } from 'react';

import shop1 from '../assets/s1.png';
import shop2 from '../assets/s2.png';
import shop3 from '../assets/about.png';
import shop4 from '../assets/f2.png';
import shop5 from '../assets/shop.png';
import shop6 from '../assets/familj.png';
import shop7 from '../assets/s1.png';
import shop8 from '../assets/s2.png';
import shop9 from '../assets/about.png';
import shop10 from '../assets/f2.png';
import shop11 from '../assets/shop.png';
import shop12 from '../assets/familj.png';

const allProducts = [
  { img: shop1, price: 129.9 },
  { img: shop2, price: 69.9 },
  { img: shop3, price: 59.9 },
  { img: shop4, price: 89.9 },
  { img: shop5, price: 49.9 },
  { img: shop6, price: 39.9 },
  { img: shop7, price: 89.0 },
  { img: shop8, price: 59.0 },
  { img: shop9, price: 79.0 },
  { img: shop10, price: 99.0 },
  { img: shop11, price: 129.0 },
  { img: shop12, price: 199.0 },
];

const productsPerPage = 6;

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(allProducts);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleSort = (type: string) => {
    const sorted = [...products];

    if (type === 'low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'high') {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProducts(sorted);
    // Återställ till första sidan vid sortering
    setCurrentPage(1); 
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5"><span className="fs-3">the</span> Shop</h1>

      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <p>SHOWING {((currentPage - 1) * productsPerPage + 1)}–{Math.min(currentPage * productsPerPage, products.length)} OF {products.length} RESULTS</p>
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
              <li><button className="dropdown-item" onClick={() => { setProducts(allProducts); setCurrentPage(1); }}>Reset</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {paginatedProducts.map((product, idx) => (
          <div className="col-md-4 col-sm-6 mb-4" key={idx}>
            <div className="card border-0">
              <img
                src={product.img}
                alt={`product-${idx}`}
                className="card-img-top"
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <p className="card-text">£{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="row">
        <div className="col text-center">
          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            1
          </button>
          {totalPages >= 2 && (
            <button
              className="btn btn-outline-dark mx-1"
              onClick={() => setCurrentPage(2)}
              disabled={currentPage === 2}
            >
              2
            </button>
          )}
          <button
            className="btn btn-outline-dark mx-1"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
