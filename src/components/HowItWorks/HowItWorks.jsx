import React, { Component } from "react";
import RoundedCard from "../RoundedCards/RoundedCard";
import haveADoubt from "../../assets/havaADoubt.png";
import Button from "../Button/Button";

const info = [
  { id: 1, text: "Hava A Doubt?", image: haveADoubt },
  { id: 2, text: "Type your question or upload a image ?", image: haveADoubt },
  { id: 3, text: "Get your solutions?", image: haveADoubt },
];
export default class HowItWorks extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center font-weight-bold my-5'>How it Works</h1>
        <div className='container'>
          <div className='row'>
            {info.map(({ id, text, image }) => (
              <div className='col-md-4' key={id}>
                <RoundedCard text={text} image={image} />
              </div>
            ))}
          </div>
        </div>
        <div className='text-center my-5'>
          <Button className=''>Clarify your doubts now !</Button>
        </div>
      </div>
    );
  }
}
