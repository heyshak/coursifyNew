import React from "react";
import cssClass from "../AskYourDoubts/AskYourDoubts.module.css";

export default function RoundedCard({ text, image }) {
  return (
    <div>
      <div className={`card ${cssClass.Card}`}>
        <div className={`card-body `}>
          <img
            className=''
            src={image}
            alt='Card'
            style={{
              width: "120px",
              height: "120px",
              textAlign: "center",
            }}
          />

          <p
            className='card-text'
            style={{ textAlign: "center", marginTop: "30px" }}
          >
            <small className='text-muted font-weight-bold'>{text}</small>
          </p>
        </div>
      </div>
    </div>
  );
}
