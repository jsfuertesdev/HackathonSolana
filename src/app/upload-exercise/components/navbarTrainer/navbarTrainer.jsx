import './navbarTrainer.scss';

function NavbarTrainer() {
  return (
    <div className='navbar'>
        <img className="logo" src="/logo.png" alt="Logo AthleteAlly" />
        <div className='left-side'>
          <div className="user-data">
            <p className='trainer'>Trainer</p>
            <p className='user-name'>Welcome, Carlos</p>
            <img className='user-picture' src="/trainer.jpg" alt="Image Profile" />
          </div>
            {/* <button className='btn'>GENERATE ROUTINE!</button> */}
        </div>
    </div>
  )
}

export default NavbarTrainer