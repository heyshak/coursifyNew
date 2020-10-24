import React from "react";
import iconAnywhere from "../../assets/icon_anywhere.webp";
import ImageThings from "../ImageThing.jsx/ImageThings";
import InfoWithLogo from "../InfoWithLogo/InfoWithLogo";
import BookAClass from "../../assets/BookFreeClass.webp";
import Button from "../Button/Button";
export default function LiveClasses() {
  return (
    <div>
      <div>
        <h1 className='text-center font-weight-bold my-5'>LIVE CLASSES</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <ImageThings image={BookAClass} />
            </div>
            <div className='col-md-6 my-4'>
              <div className=''>
                <InfoWithLogo
                  icon={iconAnywhere}
                  heading='Accessible anywhere'
                  paragraph='Access to quality education anytime anywhere'
                />
                <InfoWithLogo
                  icon={iconAnywhere}
                  heading='Accessible anywhere'
                  paragraph='Access to quality education anytime anywhere'
                />
                <InfoWithLogo
                  icon={iconAnywhere}
                  heading='Accessible anywhere'
                  paragraph='Access to quality education anytime anywhere'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='text-center my-5'>
          <h4 className='font-weight-bold '>FIRST CLASS FREE!</h4>
          <Button>Book a class now!</Button>
        </div>
      </div>
    </div>
  );
}
