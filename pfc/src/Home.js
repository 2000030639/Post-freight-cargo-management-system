import React from 'react';
import img1 from './img/HOME.jpg';
import video1 from'./img/bgvid.mp4';

function Home() {
    return (
        <div>
             <div>              

               
                <center>
               
                

    <video autoPlay loop muted >
            <source src={video1} type='video/mp4' />
            
    </video>
    <img src={img1} alt="HOME" height ="100px" float="right"/>
        
            </center>
            <center>
                <p>FREIGHT WITH US - ONE OF THE MOST RELIABLE FREIGHT FORWARDING AND LOGISTICS COMPANIES</p>
             </center>
           
                
            </div>
           
            
            </div>
    )
}

export default Home
