import React from "react";

export default function ProgresssRadial({ value }) {
  return (
    <div>
      <div
        className="radial-progress"
        style={{ "--value": value }}
        role="progressbar"
      >
        {value}%
      </div>
    </div>
  );
}
