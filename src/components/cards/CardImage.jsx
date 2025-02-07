import React from "react";
import { Link } from "react-router-dom";
export default function CardImage({ image, title, content, icon }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={image} alt="Service" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{icon } {title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
