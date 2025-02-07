import React from "react";
import Theme from "../../components/Theme/Theme";
import ThemeDash from "../../components/Theme/ThemeDash";

export default function Reglage() {
  return (
    <div className="min-h-screen p-4">
      <div className="collapse collapse-arrow w-fit bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Theme Preference :
        </div>
        <div className="collapse-content">
          <ThemeDash />
        </div>
      </div>
    </div>
  );
}
