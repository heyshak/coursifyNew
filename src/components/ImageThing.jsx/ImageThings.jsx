import React from "react";

export default function ImageThings({ image }) {
  return (
    <div>
      <div className=''>
        <img
          style={{ height: "300px", marginLeft: "130px" }}
          src={image}
          alt=''
        />
      </div>
    </div>
  );
}
