import React from 'react';

function Block({ image }) {
  return (
    <div className="cent3">
      <div  className="circular-photo-container">
        <img  src={require(`${image}`)}  />
      </div>
      <h1>Landing template for startups</h1>
      <p>
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </p>
    </div>
  );
}

export default Block;
