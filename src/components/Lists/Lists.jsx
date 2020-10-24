import React from "react";

export default function Lists({ book }) {
  return (
    <div>
      <div className='d-flex mb-2 border'>
        <li className='list-group-item align-items-center w-100 list-group-item-light border-0'>
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
