import React, { Component } from "react";
import ListsWithImage from "../ListsWithImage/ListsWithImage";
import Hyderabad from "../../assets/hyderabad.webp";
const states = [
  { id: 1, statename: "Hyderabad", image: Hyderabad },
  { id: 2, statename: "West Bengal ", image: Hyderabad },
  { id: 3, statename: "Andhra Pradesh", image: Hyderabad },
  { id: 4, statename: "Uttar Pradesh", image: Hyderabad },
  { id: 5, statename: "Punjab", image: Hyderabad },
  { id: 6, statename: "Rajasthan", image: Hyderabad },
  { id: 7, statename: "Telangana", image: Hyderabad },
  { id: 8, statename: "Gujrat", image: Hyderabad },
];
export default class StateBoards extends Component {
  render() {
    return (
      <div>
        <div className='container my-5'>
          <h1 className='text-center font-weight-bold my-5'>
            <strong style={{ color: "#246ce1" }}>State Boards</strong>
          </h1>
          <div className='row'>
            {states.map(({ id, statename, image }) => (
              <div className='col-md-6' key={id}>
                <ul className='list-group ' style={{ margin: " 0 100px" }}>
                  <ListsWithImage book={statename}>{image}</ListsWithImage>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
