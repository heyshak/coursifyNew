import React, { Component } from "react";
import Slider from "react-slick";
import frame from "../../assets/colorfulborder.png";
import CardWithImage from "../CardWithImage/CardWithImage";
import deepika from "../../assets/deepika.jpg";
import Button from "../Button/Button";

const students = [
  { id: 1, name: "Shivani Arora", image: deepika },
  { id: 2, name: "Shivani Arora", image: deepika },
  { id: 3, name: "Shivani Arora", image: deepika },
  { id: 4, name: "Shivani Arora", image: deepika },
];
export default class StudentReview extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <h1 className='text-center text-muted my-5 font-text-bold'>
          <strong> See what Our Students have to say </strong>
        </h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img
                src={frame}
                alt=''
                style={{ width: "400px", height: "250px", background: "white" }}
              />
            </div>
            <div className='col-md-6'>
              <Slider {...settings} autoplay={true}>
                {students.map(({ image, id, name }) => (
                  <CardWithImage key={id} image={image} name={name} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <Button>Download the app free now</Button>
        </div>
      </div>
    );
  }
}
