import './register.scss';
import Registerform from '../registerform/Registerform'
import Card from '../card/Card'

function Register() {
  return (
    <div>
        <h2 className='title'>Upload</h2>
        <hr />
        <div className='form-upload'>
            <div className='review'>
                <h3>review</h3>
                <Card/>
            </div>
            <Registerform/>
        </div>
    </div>
  )
}

export default Register