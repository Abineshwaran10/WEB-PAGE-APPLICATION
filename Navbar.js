import './Stud.css'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import logoimg from './images/logoimg.png';
import { FaCartArrowDown } from 'react-icons/fa';
import { RiContactsLine } from 'react-icons/ri';
// import './Navbar.css';

function Navbar() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className='nav'>
      <img className='Logo' src={logoimg} alt='logo' />
      <h2 className='edu'>Education</h2>
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/study">Study</Link></li>
          <li><a>Blog</a></li>
          <li><a>Certificate</a></li>
        </ul>
      </div>
      <div className='butn'>
        <div className='search'>
          <Link to="/cart">
            <FaCartArrowDown />
            <span >{cartItems.length}</span>
          </Link>
          {cartItems.length > 0 && (
            <div className="cart-dropdown">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                    <div className="quantity-control">
                      <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button onClick={() => handleAddToCart(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
              <Link to="/checkout" className="checkout-button">
                Go to Checkout
              </Link>
            </div>
          )}
        </div>
        <Link to="/login" className='Login'>
          <RiContactsLine /> Login
        </Link>
        <Link to="/register" className='Login'>
          <RiContactsLine /> Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
