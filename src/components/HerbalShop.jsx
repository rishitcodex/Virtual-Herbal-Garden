import { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaChevronDown 
} from 'react-icons/fa';
import './HerbalShop.css';

const HerbalShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products when category or search term changes
  useEffect(() => {
    if (products.length > 0) {
      filterProducts();
    }
  }, [selectedCategory, searchTerm, products]);

  const filterProducts = () => {
    const filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      filterProducts();
    }
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="herbal-shop-container">
      {/* Header Section */}
      <header className="herbal-shop-header">
        <div className="top-bar">
          <div className="contact-info">
            <span><FaMapMarkerAlt className="icon" /> Bennett University, Greater Noida, PIN - 201310</span>
            <span><FaEnvelope className="icon" /> support.ayush@gmail.com</span>
            <span><FaPhoneAlt className="icon" /> +91-8368570100</span>
          </div>
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        <div className="logo-container">
          <h1>AYUSH</h1>
          <p>The Virtual Herbal Garden</p>
        </div>
      </header>

      {/* Products Section */}
      <section className="products-section">
        <div className="search-filter-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearch}
            />
            <button onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Products</option>
              <option value="herbs">Herbs</option>
              <option value="medicines">Herbal Medicines</option>
              <option value="healthcare">Healthcare Products</option>
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>

        <h2 className="section-title">Our Products</h2>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id || product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="price">{product.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found matching your criteria.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="herbal-shop-footer">
        <p>© 2025 Virtual Herbal Garden | <a href="/Privacy Policy">Privacy Policy</a> | <a href="#">Contact Us</a></p>
      </footer>
    </div>
  );
};

export default HerbalShop;