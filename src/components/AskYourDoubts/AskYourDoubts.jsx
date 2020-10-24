import React, { Component } from "react";
import cssClass from "./AskYourDoubts.module.css";
import videoLecture from "../../assets/videoLecture.png";
import RoundedCard from "../RoundedCards/RoundedCard";
import frame from "../../assets/colorfulborder.png";
import Button from "../Button/Button";

const info = [
  { id: 1, text: "1,00000+ Video lectures", image: videoLecture },
  { id: 2, text: "5000+ Books covered ", image: videoLecture },
  { id: 3, text: "20+  States Board", image: videoLecture },
  { id: 4, text: "40,000+ Doubts Cleared", image: videoLecture },
];
export default class AskYourDoubts extends Component {
  render() {
    return (
      <div className={`container my-5 ${cssClass.Wrapper}`}>
        <div className='row'>
          <div className={`col-md-6`}>
            <h1 className='' style={{ fontWeight: "800" }}>
              Clarify your{" "}
              <strong style={{ color: "#246ce1", fontWeight: "900" }}>
                doubts
              </strong>
              <br></br>
              in your language
            </h1>
            <Button>
              <span>
                <i className='fa fa-download mx-2'></i>
              </span>
              Ask your doubts now
            </Button>
          </div>
          <div className={`col-md-6`}>
            <div className='col-md-6'>
              <img
                src={frame}
                alt=''
                style={{ width: "400px", height: "250px", background: "white" }}
              />
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className='container'>
          <div className='row'>
            {info.map(({ id, text, image }) => (
              <div className='col-md-3' key={id}>
                <RoundedCard text={text} image={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
