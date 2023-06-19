import React from 'react'
import student from './images/student.jpg';
import './Stud.css'
import { FaGraduationCap } from 'react-icons/fa';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { BsFillLaptopFill } from 'react-icons/bs';
import { GiChemicalDrop }from 'react-icons/gi';
import { GiGlobe } from 'react-icons/gi';
import { MdColorLens } from 'react-icons/md';
import { GiMaterialsScience }from 'react-icons/gi';
function Home() {
  return (
    <div className='image-container'>
      <img src={student} alt='lay' className="overlay-image" />
      <div className='overlay-text'>
        <h2>Online Eduaction</h2>
        <h1 className='head'> Providing <span>Multilingual</span>Online Courses</h1>
      </div>
      <div className='content'>
        <p>
          Online courses are often made up of pre-recorded videos, <br></br>but they can also include several other elements  for an engaging <br></br>online learning experience</p>
      </div>
        <div class="search-box">
          <input type="text" id="search-input" placeholder="Search course here" />
          <button id="search-btn">Search Course</button>
        </div>
      <div className='capicon'>
        <h3 className='cap'> <span className='icon'><FaGraduationCap /></span>Over 3 Million Students</h3>
        <h3 className='cap1'> <span className='icon1'> <BsCollectionPlayFill /></span>   Over 20,000 Courses</h3>
        <h3 className='cap2'> <span className='icon2'> <BsFillLaptopFill /></span> Learn Anything Online</h3>
      </div>
      <div class="flex-container">
        <div className='box1'>
           <span className='boxicon1'><MdColorLens/></span>
           <h4> Arts & Crafts</h4>
           <p>Craft is the designing <br></br> making individual artefacts<br></br> objects, encouraging the <br></br>development of intellectual,</p>
        </div>
        <div className='box2'><span  className='boxicon2'><GiChemicalDrop/></span>
           <h4>Chemistry</h4>
           <p>Craft is the designing <br></br>making individual artefacts <br></br> objects, encouraging the <br></br> development of intellectual,</p> 
           </div>
        <div className='box3'><span  className='boxicon3'><GiMaterialsScience/></span>
           <h4> Physics</h4>
           <p>Craft is the designing <br></br> making individual artefacts <br></br> objects, encouraging the <br></br>development of intellectual,</p></div>
        <div className='box4'><span  className='boxicon4'><GiGlobe/></span>
           <h4> Geography</h4>
           <p>Craft is the designing <br></br> making individual artefacts <br></br> objects, encouraging the<br></br> development of intellectual,</p></div>
    </div>
    </div>
  )
}

export default Home;