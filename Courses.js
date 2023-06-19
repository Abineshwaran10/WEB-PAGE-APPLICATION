import './Stud.css'
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import lap1 from './images/lap1.jpg';
import lap2 from './images/lap2.jpg';
import lap3 from './images/lap3.jpg';
import subimage1 from './images/subimage1.jpg';
import subimage2 from './images/subimage2.jpg';
import subimage3 from './images/subimage3.jpg';
// import './Courses.css';

function Courses() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className='our'>
      <h2 className='courses'>Our Courses</h2>
      <div>
        <h1 className='popular'>Our Most<span> Popular</span> Course</h1>
      </div>
      <div className='all-course'>
        <button className="new-course">New Courses</button>
        <button className="feature-course">Feature Course</button>
        <button className="popular-course">Popular Course</button>
      </div>
      <div className="container1">
        <div className="column1">
          <img src={lap1} alt="pro" />
          <div className="content1">
            <div className="profile1">
              <img src={subimage1} alt="Profile" />
              <h4 className='name'>Mariya</h4>
              <h4 className='lesson'>16 Lessons</h4>
            </div>
            <p className="text1">The Completed Guide to Build RESTful API Application</p>
            <hr className="line" />
            <span className="number">$45.00</span>
            <button className='addtocart' onClick={() => handleAddToCart({ id: 1, name: "RESTful API Application", price: 45.00 })}>
              <MdOutlineAddShoppingCart /> Add to cart
            </button>
          </div>
        </div>
        <div className="column2">
          <img src={lap2} alt="pro" />
          <div className="content2">
            <div className="profile2">
              <img src={subimage2} alt="Profile" />
              <h4 className='name'>Tom Cruse</h4>
              <h4 className='lesson'>26 Lessons</h4>
            </div>
            <p className="text1">The Completed HTML & CSS Bootcamp 2023 Edition for you now</p>
            <hr className="line" />
            <span className="number">$45.00</span>
            <button className='addtocart' onClick={() => handleAddToCart({ id: 2, name: "HTML & CSS Bootcamp", price: 45.00 })}>
              <MdOutlineAddShoppingCart /> Add to cart
            </button>
          </div>
        </div>
        <div className="column3">
          <img src={lap3} alt="pro" />
          <div className="content3">
            <div className="profile3">
              <img src={subimage3} alt="Profile" />
              <h4 className='name'>Salena Gomez</h4>
              <h4 className='lesson'>25 Lessons</h4>
            </div>
            <p className="text1">Grow Personal Financial Security Thinking & Principles</p>
            <hr className="line" />
            <span className="number">$45.00</span>
            <button className='addtocart' onClick={() => handleAddToCart({ id: 3, name: "Financial Security", price: 45.00 })}>
              <MdOutlineAddShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses;

