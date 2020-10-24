import React from "react";

export default function InfoWithLogo({ icon, heading, paragraph }) {
  return (
    <div>
      <span className='d-flex align-items-center'>
        <img src={icon} alt='' style={{ width: "40px", height: "40px" }} />
        <h3>{heading}</h3>
      </span>
      <p className='text-muted ml-5'>{paragraph}</p>
    </div>
  );
}
