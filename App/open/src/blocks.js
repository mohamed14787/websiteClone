
import Line from "./line";
function Block2({ image }) {
    return (
      <div className="le">
        <div  className="circular-photo-container2">
          <img  src={require(`${image}`)}  />
        </div>
        <div >
        <h1 className="bl">Landing template for startups</h1>

        <Line/>
        <p className="bl">
          Our landing page template works on all devices, so you only have to set
          it up once, and get beautiful results forever.
        </p>
        </div>
      </div>
    );
  }
  
  export default Block2;