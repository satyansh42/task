import React from 'react'
import './testimonials.css'
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
  ];

const Testimonials = () => {
    return (
        <div className='testimonials'>
          <div className='tstml'>Testimonials</div>
          <div className='tcardCont'>
              
              <Carousel breakPoints={breakPoints}>
                <Item>
                <div className='tcard'>
                  <div className='dp'><img src="./Ellipse 76 (1).svg" alt="" /></div>
                  <div>
                      <div className='nm'>John Fang </div>
                      <div>
                          <div className='dgn' >Web Designer</div>
                          
                      </div>
                      <div className='review'>Suspendisse ultrices at diam lectus nullam. 
                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                      </div>
                  </div>
              </div>
                </Item>
                <Item>
                <div className='tcard'>
                  <div className='dp'><img src="./Ellipse 76.svg" alt="" /></div>
                  <div className='recont'>
                      <div className='nm'>Jenny Doe</div>
                      <div>
                          <div className='dgn'>UX Designer</div>
                          
                      </div>
                      <div className='review'>Suspendisse ultrices at diam lectus nullam. 
                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                      </div>
                  </div>
              </div>
                </Item>
                <Item>
                <div className='tcard'>
                  <div className='dp'><img src="./Ellipse 76.svg" alt="" /></div>
                  <div>
                      <div className='nm'>Jenny Fang</div>
                      <div>
                          <div className='dgn'>UI Designer</div>
                          
                      </div>
                      <div className='review'>Suspendisse ultrices at diam lectus nullam. 
                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                      </div>
                  </div>
              </div>
                </Item>
                <Item>
                <div className='tcard'>
                  <div className='dp'><img src="./Ellipse 76 (1).svg" alt="" /></div>
                  <div>
                      <div className='nm'>Harry Fang</div>
                      <div>
                          <div className='dgn'>UX Designer</div>
                          
                      </div>
                      <div className='review'>Suspendisse ultrices at diam lectus nullam. 
                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</div>
                  </div>
              </div>
                </Item>
                <Item>
                <div className='tcard'>
                 <div className='dp'><img src="./Ellipse 76 (1).svg" alt="" /></div>
                  <div>
                      <div className='nm'>John Fang</div>
                      <div>
                          <div className='dgn'> Front End Devloper</div>
                          
                      </div>
                      <div className='review'>Suspendisse ultrices at diam lectus nullam. 
                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</div>
                  </div>
               </div>
                </Item>
                
             </Carousel>
             
              
              
              
          </div>
          <div>
              <div></div>
              <div></div>
          </div>
            
        </div>
    )
}

export default Testimonials
