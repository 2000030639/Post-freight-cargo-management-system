import React from 'react';
import img2 from './img/inland.png';
import img3 from './img/aircargo.jpg';
import img4 from './img/watercargo.jpg';
export default function Dashboard() {
    
    return (
        <div className="text">
           <div >
<button type="button"  ><img style={{width:"750px"}}src={img2} alt=""></img></button>
 <button type="button" ><img style={{width:"550px"}}src={img3} alt=""></img></button>
<button type="button" ><img style={{width:"550px"}}src={img4} alt=""></img></button>
</div>
        </div>
        
    )
}
