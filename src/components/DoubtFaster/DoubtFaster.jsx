import React, { Component } from "react";
import edcutionIcon from "../../assets/EductionIcon.png";
import iconAnywhere from "../../assets/icon_anywhere.webp";
import videoIcon from "../../assets/videoIcon.png";
import ImageThings from "../ImageThing.jsx/ImageThings";
import InfoWithLogo from "../InfoWithLogo/InfoWithLogo";
// import cssClass from "./DoubtFaster.module.css";
export default class DoubtFaster extends Component {
  render() {
    return (
      <div className='container' style={{ margin: "120px" }}>
        <div className='row'>
          <div className='col-md-6'>
            <h1>
              Solve your doubt
              <strong style={{ color: "#246ce1" }}> faster</strong>
            </h1>
            <InfoWithLogo
              icon={iconAnywhere}
              heading='Accessible anywhere'
              paragraph='Access to quality education anytime anywhere'
            />
            <InfoWithLogo
              icon={videoIcon}
              heading='1 million+ devices'
              paragraph='Unlimited access to video solution'
            ></InfoWithLogo>
          </div>
          <div className='col-md-6'>
            <ImageThings image={edcutionIcon} />
          </div>
        </div>
      </div>
    );
  }
}
