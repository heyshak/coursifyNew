import React, { Component } from "react";
import deepika from "../../assets/deepika.jpg";
import CardWithImage from "../CardWithImage/CardWithImage";

const tutor = [
  { id: 1, name: "Shivani Arora", image: deepika },
  { id: 2, name: "Shivani Arora", image: deepika },
  { id: 3, name: "Shivani Arora", image: deepika },
  { id: 4, name: "Shivani Arora", image: deepika },
];
export default class Experts extends Component {
  render() {
    return (
      <div>
        <div className='container my-5'>
          <h1 className='text-center  text-muted  font-weight-bold my-5'>
            <strong>Meet Our tutor Experts</strong>
          </h1>
          <div className='row'>
            {tutor.map(({ id, image, name }) => (
              <div className='col-md-6 mt-5' key={id}>
                <CardWithImage image={image} name={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
