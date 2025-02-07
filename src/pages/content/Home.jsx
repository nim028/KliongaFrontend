import React from "react";
import { ThemeContext } from "../../context/MyContext";
import { useContext } from "react";

export default function Home() {
  const { theme, logoW, logoB } = useContext(ThemeContext);
  return (
    <div id="home" className="min-h-screen home relative">
      <div className="p-[20px] bg-none h-screen w-full justify-center">
        <div className="left w-fit ml-14 mt-10">
          <h1
            style={{letterSpacing:"4px"}}
            className={`${
              theme == "Dark"
                ? "text-white"
                : theme == "synthwave"
                ? "text-white"
                : theme == "forest"
                ? "text-white"
                : theme == "cyberpunk"
                ? "text-white"
                : theme == "light"
                ? "text-white"
                : logoB
            } text-shadow text-base-content text-[90px] uppercase font-extrabold`}
          >
            Kilonga
          </h1>

          <div className="glass  bg-non font-semibold w-[600px] text-base-content rounded-md p-4">
            <p className="my-3" style={{ lineBreak: "anywhere" }}>
              Bienvenu sur Kilonga, la plateforme de gestion scolaire qui
              simplifie la vie des écoles , des enseiganants, des parents et des
              élèves . Nous centralisons toutes les tâches administratives et
              pedagogiques en une seule solution intuitive.
            </p>
            <p style={{ lineBreak: "anywhere" }}>
              Que vous souhaitez suivre les notes de cotre enfant ,gérer les
              paiement des frais de scolarité,ou encore planifier les emplois du
              temps, " Kilonga " est là pour vous aider à rendre ces processus
              simples, rapides et accessibles de n'importe où .
            </p>
          </div>

          <a
            href="/#service"
            className=" btn my-5 btn-lg  shadow-md w-[200px] focus:ring"
          >
            {" "}
            Découvrir
          </a>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1725700164">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
