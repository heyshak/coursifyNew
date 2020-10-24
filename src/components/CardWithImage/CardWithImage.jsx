import React from "react";

export default function CardWithImage({ image, name }) {
  return (
    <div>
      <div className='d-flex'>
        <img
          className='card-img-top'
          src={image}
          alt='Card'
          style={{ height: "120px", width: "120px" }}
        />
        <div className='card border-0'>
          <div className='card-body'>
            <h5
              className='card-title font-weight-bold'
              style={{ color: "#246ce3" }}
            >
              {name}
            </h5>
            <div className='card-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
