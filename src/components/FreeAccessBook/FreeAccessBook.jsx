import React, { Component } from "react";
import Lists from "../Lists/Lists";

const books = [
  { id: 1, book: "NCERT" },
  { id: 2, book: "NCERT" },
  { id: 3, book: "NCERT" },
  { id: 14, book: "HC VERMA" },
  { id: 15, book: "HC VERMA" },
  { id: 16, book: "HC VERMA" },
  { id: 4, book: "NCERT" },
  { id: 5, book: "NCERT" },
  { id: 6, book: "NCERT" },
  { id: 7, book: "NCERT" },
  { id: 8, book: "NCERT" },
  { id: 9, book: "NCERT" },
  { id: 10, book: "HC VERMA" },
  { id: 11, book: "HC VERMA" },
  { id: 12, book: "HC VERMA" },
  { id: 13, book: "HC VERMA" },
];

export default class FreeAccessBook extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center font-weight-bold my-5'>
          <strong style={{ color: "#246ce1" }}>Free access</strong> to 5000+
          books
        </h1>
        <div className='container'>
          <div className='row'>
            {books.map(({ id, book }) => (
              <div className='col-md-3' key={id}>
                <ul className='list-group '>
                  <Lists book={book} />
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
