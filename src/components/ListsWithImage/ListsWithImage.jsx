import React from "react";

export default function Lists({ book, children }) {
  return (
    <div className=''>
      <div className='d-flex mb-2 border'>
        <img src={children} alt='' style={{ width: "50px", height: "50px" }} />
        <li
          className='list-group-item align-items-center w-100 list-group-item-light  font-weight-bold border-0'
          style={{ color: "#246ce1" }}
        >
          {book}
        </li>
        <button
          className='btn btn-light border-0 rounded-0  '
          style={{ width: "40px" }}
        >
          <i className='fa fa-arrow-right font-weight-light'></i>
        </button>
      </div>
    </div>
  );
}
