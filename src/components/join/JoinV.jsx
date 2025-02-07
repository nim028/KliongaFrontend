import React from "react";

export default function JoinV({ data }) {
  return (
    <div>
      <div className="join join-vertical w-full">
        {data.map((d, i) => (
          <div key={i} className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">{d.titre}</div>
            <div className="collapse-content">
              <p>{d.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
