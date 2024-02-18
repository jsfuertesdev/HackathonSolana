import './navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
        <h2 className='title'>Company Name</h2>
        <div className='left-side'>
            <p>Welcome, User</p>
            <button>Generate Routine!</button>
        </div>
    </div>
  )
}

export default Navbar