import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';
import Shop from './pages/shop';
import Connect from './pages/connect';
import Service1 from './pages/services/service1';
import BlogPost1 from './pages/blog/blogPost1';
import BlogPost2 from './pages/blog/blogPost2';
import Product1 from './pages/shop/product1';
import Product2 from './pages/shop/product2';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/service1" element={<Service1 />} />
          <Route path="/blog1" element={<BlogPost1 />} />
          <Route path="/blog2" element={<BlogPost2 />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
