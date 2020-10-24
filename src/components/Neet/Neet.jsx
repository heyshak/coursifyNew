import React from "react";
import ImageThings from "../ImageThing.jsx/ImageThings";
import teacher from "../../assets/teacher.png";
import Button from "../Button/Button";
export default function Neet() {
  return (
    <div>
      <h1 className='text-center my-5 font-text-bold'>
        <strong style={{ color: "#246ce3" }}>NEET </strong>Preparation
      </h1>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <ImageThings image={teacher} />
          </div>
          <div className='col-md-6'>
            <div className='align-items-center'>
              <h2 className='font-weight-bold'>Micro concept Videos</h2>
              <p className='text-muted'>
                Find multilingual videos explanations important and frequently
                and frequnetly confused concepts from every subject
              </p>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <Button>Prepare for NEET now </Button>
        </div>
      </div>
    </div>
  );
}
