import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";


    const Features = () => {
        const images = [
            { url: "Slide2.jpeg" },
            { url:  "Slide3.png" },
            { url:  "Slide4.jpg" },
            { url:"Slide1.jpg" },
          ];
          return (
            
            
              <div  className="slider"      >
                  <center>
             <SimpleImageSlider
                width={1000}
                height={600}
                images={images}
                showBullets={true}
                showNavs={true}
              /></center>
             
  
   


 
    <p style={{color:'black',fontSize:"0.75cm",height:'10px',paddingright:'100px'}}>
UNIQUE FEATURES RELIABILITY, PUNCTUALITY  COMMITMENT</p><p>For more than 20 years, Freightrus has been functional in this industry.</p><p> Since that time to till now, we have been delivering logistic services on time.</p> <p>Further, multitude services are our valuable offering to our customers, so that they may choose services according to their business needs. We invest time as well as efforts in technology as we believe it adds to the customer’s experience by enhancing our efficiency in terms of the output.</p>

<p>HEAVY MACHINERY TRANSPORTATION SERVICE</p>
<p>Every day we take challenges to meet the evolving dynamic needs of this industry. Everytime we succeed in it as we have developed a network of related industries in order to ensure quality solution of even most complex service demands.
</p>

</div>
    
   );
}


export default Features
