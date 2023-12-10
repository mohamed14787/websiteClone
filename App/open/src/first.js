

import mg from './cover.jpeg'; 
import Block from './block';

function First() {
  return (
    <div className="cent">
        <div >
      <h1>Landing template for startups</h1>
      </div>
      <div>
        <p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
      </div>
      <div  > 
        <button className="login_button">start free trial </button>
        <button className="login_button">learn more</button> 
        </div>

        <img src={require("./programmer.jpg")}  style={{width:"80vh",marginTop:"100px"}} />

    

      
    </div>
    
  );
}

export default First;