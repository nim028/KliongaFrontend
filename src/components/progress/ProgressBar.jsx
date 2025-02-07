import React from "react";

export default function ProgressBar({ value }) {
  return (
    <div>
      <progress className="progress w-56" value={value} max="100"></progress>
    </div>
  );
}
