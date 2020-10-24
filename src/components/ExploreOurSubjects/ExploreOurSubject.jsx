import React, { Component } from "react";
import Biology from "../../assets/biology.png";
const subjects = [
  { id: 1, subject: "Maths", image: Biology },
  { id: 2, subject: "Physics", image: Biology },
  { id: 3, subject: "Biology", image: Biology },
  { id: 4, subject: "Chemistry", image: Biology },
];
export default class ExploreOurSubject extends Component {
  render() {
    return (
      <div>
        <div className='container my-5'>
          <div className='row'>
            {subjects.map(({ id, subject, image }) => (
              <div className='col-md-3' key={id}>
                <div className='card'>
                  <img
                    className='card-img-top'
                    src={image}
                    alt='Card'
                    style={{ height: "160px" }}
                  />
                  <div className='card-body'>
                    <h5
                      className='card-title text-center font-weight-bold'
                      style={{ color: "#246ce3" }}
                    >
                      {subject}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=' my-4 float-right font-weight-bold'>
            <a style={{ color: " #f70472" }} href='/'>
              View all
            </a>
          </div>
        </div>
      </div>
    );
  }
}
