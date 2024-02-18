'use client';
import './navbar.scss';
import { useState } from 'react';

function Navbar() {
  const [showModal, setShowDisplay] = useState(false);

  const onShowModal = () => {
    setShowDisplay(!showModal);
    alert('CBT Assistant to generate routines available soon!')
  }

  return (
    <div className='navbar'>
        <img className="logo" src="/logo.png" alt="Logo AthleteAlly" />
        <div className='left-side'>
          <div className="user-data">
          <p className='user'>User</p>
            <p className='user-name'>Welcome, Zara</p>
            <img className='user-picture' src="/person.jpg" alt="Image Profile" />
          </div>
            <button className='btn' onClick={onShowModal}>GENERATE ROUTINE!</button>
        </div>
    </div>
  )
}

export default Navbar