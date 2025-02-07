import React from "react";
import { Link } from "react-router-dom";

export default function DropdownHover({ hover, items }) {
  return (
    <div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          {hover}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {items.map((item, i) => (
            <Link key={i} to={item.link}>
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
