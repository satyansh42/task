import React from 'react'
import './subscribe.css'
import Button from './Button'
const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='sub'>
                <h2>Subscribe !</h2>
                <p>Join our newsletter to never miss any latest news.</p>
            </div>
            <div className='email'> 
              <input name='e-mail' id='email' type="email" placeholder='Enter your e-mail address' /> 
              <div className='join'><Button text='Join Us' colr='white'/></div>
              {/* <Button text='Join Us' colr='white'/> */}
            </div>
            
        </div>
    )
}

export default Subscribe
