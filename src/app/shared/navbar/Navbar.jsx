import './navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
        <img className="logo" src="/logo.png" alt="Logo AthleteAlly" />
        <div className='left-side'>
          <div className="user-data">
            <p className='user-name'>Welcome, Zara</p>
            <img className='user-picture' src="/person.jpg" alt="Image Profile" />
          </div>
            <button className='btn'>GENERATE ROUTINE!</button>
        </div>
    </div>
  )
}

export default Navbar