import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown({ name, items }) {
  return (
    <div>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Click
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {items.map((item, i) => (
            <Link to={item.link} key={i}>
              {" "}
              <a>{item.name}</a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
