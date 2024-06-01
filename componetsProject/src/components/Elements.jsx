import React from "react";
import "./elements.css";

function Elements(props) {
  return (
    <div className="inp">
      <label htmlFor="">{props.titulo}</label>
      {props.type === "textarea" ? (
        <textarea name="" id=""></textarea>
      ) : (
        <input type={props.type} />
      )}
    </div>
  );
}

export default Elements;
