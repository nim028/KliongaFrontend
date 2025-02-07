import React, { useContext } from "react";
import { ThemeContext } from "../../context/MyContext";
import toast from "react-hot-toast";

export default function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="dropdown  dropdown-hover lg:dropdown-left">
        <label tabIndex={0} className=" badge m-1 capitalize">
          {theme}
        </label>
        <div
          tabIndex={0}
          className="join join-vertical dropdown-content z-[1] menu p-0 shadow bg-base-100 rounded-box w-52"
        >
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Dark"
            value="Dark"
            onClick={(e) => {
              toast(`Mode Dark activé`, { position: "bottom-right" });
              setTheme(e.target.value);
              localStorage.setItem("theme", e.target.value);
            }}
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Synthwave"
            value="synthwave"
            onClick={(e) => {
              toast(`Mode Dark activé`, { position: "bottom-right" });
              setTheme(e.target.value);
              localStorage.setItem("theme", e.target.value);
            }}
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Retro"
            value="retro"
            onClick={(e) => {
              toast(`Mode Retro activé`, { position: "bottom-right" });
              setTheme(e.target.value);
              localStorage.setItem("theme", e.target.value);
            }}
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Cyberpunk"
            value="cyberpunk"
            onClick={(e) => {
              toast(`Mode Cyberpunk activé`, { position: "bottom-right" });
              setTheme(e.target.value);
              localStorage.setItem("theme", e.target.value);
            }}
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Valentine"
            value="valentine"
            onClick={(e) => {
              toast(`Mode Valentine activé`, { position: "bottom-right" });
              setTheme(e.target.value);
              localStorage.setItem("theme", e.target.value);
            }}
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Forest"
            value="forest"
            onClick={(e) => {
              toast(`Mode Forest activé`, { position: "bottom-right" });
              setTheme(e.target.value);
              localStorage.setItem("theme", e.target.value);
            }}
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn theme-controller join-item"
            aria-label="Light"
            value="light"
            onClick={(e) => {
              toast(`Mode Light activé`, {
                position: "bottom-right",
              });
              setTheme(e.target.value);
              localStorage.setItem("theme", e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
