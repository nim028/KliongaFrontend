import React from "react";
import { Link } from "react-router-dom";

export default function CardnoImage({ titre, description, link }) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{titre}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={link} className="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
