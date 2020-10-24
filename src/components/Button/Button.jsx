import React from "react";
import cssClass from "./Button.module.css";
export default function Button({ children }) {
  return (
    <div>
      <button className={`btn btn-light ${cssClass.Button}`}>{children}</button>
    </div>
  );
}
