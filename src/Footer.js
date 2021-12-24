import React from 'react'
import Button from './Button'
import './footer.css'
const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                       <section className='try'>
                           <div>
                               <h1>Try for free!</h1>
                               <p className='pr'>Get limited 1 week free try our features!</p>
                           </div>
                           <div>
                                 <Button colr='white' text='Learn More'  />
                           </div>
                           <div>
                               <Button colr='#9C69E2' text='Request Demo ->'  />
                           </div>
                       </section>
                       <section className='mainFooter'>
                            <div className='log'>
                                <h2><li><img src='./logo.png' alt="logo" /> <a href="index.html"> Insignia</a></li> </h2>
                                
                                <li>Insifnia Socity,234 <br/> Bahagia Ave Street PRBW 29281 </li>
                                <li>info@insignia.com <br/>1-232-3434 (Main) </li>
                            </div>
                            <div className='games'>
                                <h2>About</h2>
                                <ul>
                                    <li> <a href="index.html">Profile</a></li>
                                    <li><a href="index.html">Features</a></li>
                                    <li> <a href="index.html">Careers</a></li>
                                    <li> <a href="index.html">DW News</a></li>
                                    {/* <li><img src="./img/frnt.png" alt="" /> <a href="index.html">FORTNITE</a></li>
                                    <li><img src="./img/bgmi.jfif" alt="" /> <a href="index.html">BGMI</a></li> */}
                                </ul>
                           </div>
                            <div className='social'>
                                <h2>Help</h2>
                                <ul>
                                    <li> <a href="index.html">Support</a></li>
                                    <li> <a href="index.html">Sign up</a></li>
                                    <li> <a href="index.html">Guide</a></li>
                                    <li> <a href="index.html">Report</a></li>
                                    <li> <a href="index.html">Q&amp;A</a></li>
                                </ul>
                            </div>
                            <div className='download'>
                                <h2>Social Media</h2>
                                <ul>
                                    <li> <a href="index.html"><img src="./img/gplay.png" alt="" /></a></li>
                                    <li> <a href="index.html"><img src="./img/app.png" alt="" /></a></li>
                                    <li></li>
                                </ul>
                            </div>
                       </section>
                       <section className='creditFooter'>
                           <div>
                              <div>
                                    <div> <p>©Insignia&trade;, 2020.All rights reserved.</p> </div>
                                    <div className='prt'>PARTER</div>
                              </div>
                              {/* <div>
                                  <p className='c'>Spaim Gaming isn't endorsed by Riot Games and doesn't reflect the views or opinions 
                                     of Riot Games or anyone officially involved in producing or managing League of Legends.
                                     League of Legends™ and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
                                  </p>
                              </div> */}
                           </div>
                            
                       </section>
                     
             </footer>
        </div>
    )
}

export default Footer
