import React from "react";
import { Link } from "react-router-dom";

export default function CardBadge({ img, titre, badge, description, link }) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {titre}
            <div className="badge badge-secondary uppercase">{badge}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {link.map((li, i) => (
              <Link key={i} to={li.path} className="badge badge-outline">
                {li.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
