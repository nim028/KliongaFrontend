import React from "react";

export default function AccordionPlus({ titre, description }) {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">{titre}</div>
        <div className="collapse-content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
