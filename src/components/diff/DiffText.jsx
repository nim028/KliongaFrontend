import React from "react";

export default function DiffText({ text1, text2 }) {
  return (
    <div>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
            {text1}
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-success text-9xl font-black grid place-content-center">
            {text2}
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
}
