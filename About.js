import React from 'react'
import about from './images/about.png.jpg';
import './Stud.css'


function About() {
  return (
   
    <div>
         <img  className='about' src={about} alt='lay'/>
         <div className='Ahead'>
            <h2 className='text10'> About Us</h2>
             <h1 className='heading'>Learn <span>Anytime</span> And <br></br> Anywhere Now</h1>
             <p className='para'>Online Learning is education that delivers instructions to <br></br>students  who are separated from the  instructors,and<br></br>  that supports regular and  substantive interaction.</p>
             <button class="read-more-button">Read More About us</button>
         </div>
    </div>
  )
}

export default About;
