import React from 'react'
import Button from './Button'
import './body.css'
 
const Body = () => {
    return (
        <div className='body'>
          <div className='one'>
              <h2>Save your data <br /> storage here.</h2>
              <p>Insignia is a data storage area that has been <br />
                    tested for security, so you can store your data here <br />
                    safely but not be afraid of being stolen by others.
              </p>
              <div> <Button colr='white' text='Learn More' /> </div>
          </div>
          <div className='two'>
              <img src="./Group.svg" alt="" />
          </div>  
        </div>
    )
}
export default Body