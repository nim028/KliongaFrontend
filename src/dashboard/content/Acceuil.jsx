import React, { useContext, useEffect } from "react";
import StatsActeur from "../../components/stats/StatsActeur";
import StatsPaiement from "../../components/stats/StatsPaiement";
import StatsProgramme from "../../components/stats/StatsProgramme";
import { ThemeContext } from "../../context/MyContext";
import Aos from "aos";

export default function Acceuil() {
  const { USER, User, isLogin } = useContext(ThemeContext);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
    isLogin("/dashboard/acceuil", "/login");
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="capitalize hidden sm:block  font-light text-center">
        bienvenue{" "}
        {USER.sexe == "m"
          ? "Monsieur"
          : USER.sexe == "f"
          ? "Madame"
          : "utilisateur"}{" "}
        {USER.prenom}
      </h1>
      <div className="my-4">
        <h1 className="capitalize my-2 text-center sm:text-start ">
          Communanute éducative
        </h1>
        <StatsActeur />
      </div>
      <div className="my-10">
        <h1 className="capitalize my-2 text-center sm:text-start ">
          Prgramme d'étude
        </h1>
        <StatsProgramme />
      </div>
      <div className="my-10">
        <h1 className="capitalize my-2 text-center sm:text-start ">
          Abonnement et paiement
        </h1>
        <StatsPaiement />
      </div>
      <div className="my-10">
        <h1 className="capitalize my-2 text-center sm:text-start ">Schema</h1>
        <StatsPaiement />
      </div>
    </div>
  );
}
