import React from 'react'
import Carousel from "react-elastic-carousel";
import Items from "./Items";
import './features.css'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];
const Features = () => {
    return (
        <div className='features'>
            <div className='ftr'>Features</div>
            <div className='crsl'>
            <Carousel breakPoints={breakPoints}>
                <Items><div className='card' >
                    <div className='imct'><img src="ClipboardText.svg" alt="" /></div>
                    <div>
                        <h3>Search Data</h3>
                        <p>Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                    </div>
                    <div className='lm'>Learn More -</div>
                </div>
                </Items>
                <Items>
                <div className='card'>
                    <div className='imct'> <img src="Printer.svg" alt="" /></div>
                    <div>
                        <h3>Print Out</h3>
                        <p>Print out service gives you convenience if someday you need print data, just edit it all and just print it.</p>
                    </div>
                    <div className='lm'> Learn More -</div>
                </div>
                </Items>
                <Items>
                <div className='card'>
                    <div className='imct'><img src="ShieldCheck.svg" alt="" /></div>
                    <div>
                        <h3>Security Code</h3>
                        <p>Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</p>
                    </div>
                    <div className='lm'>Learn More -</div>
                </div>
                </Items>
                
            </Carousel>
                
                
                
            </div>
            <div></div>
        </div>
    )
}

export default Features
