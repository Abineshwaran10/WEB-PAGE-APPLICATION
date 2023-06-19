import React from 'react'
import './Stud.css'
import board from './images/board.jpg';
import { FaPlayCircle } from 'react-icons/fa';
function Study() {
    return (
        <div className='how'>
            <h1 className='work'>How its works</h1>
            <h1 className='work1'>Why We Are <span> Best For</span> You</h1>
            <div className='imageover'>
                <img className='boardimage' src={board} alt="Profile" />
                <span className='playicon'>< FaPlayCircle /></span>
                <button class="View-Course-Module">View Course Module </button>
            </div>
            
        </div>
    )
}

export default Study;