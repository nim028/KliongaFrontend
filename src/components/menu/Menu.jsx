import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="fixed hidden lg:block top-0 h-full bg-base-200 w-[256px] shadow-lg overflow-auto">
        <Link to={"/dashboard/acceuil"}>
          <h1 className="uppercase text-center font-extrabold  my-5">
            DASHBOARD
          </h1>
        </Link>
        <ul className="menu bg-base-200 gap-3 ml-4 w-fit h-full rounded-box ">
          <li className="font-bold">
            <Link to={"/dashboard/acceuil"}>Acceuil</Link>
          </li>
          <li>
            <Link to={"/dashboard/user"} className="font-bold">
              <a>User</a>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/ecole"} className="font-bold">
              <a>Établissements</a>
            </Link>
          </li>

          <div
            tabIndex={0}
            className="collapse collapse-arrow w-full bg-base-200"
          >
            <div className="collapse-title  font-bold">
              Communauté éducative
            </div>
            <div className="collapse-content">
              <li>
                <Link to={"/dashboard/eleve"}>Élève</Link>
              </li>
              <li>
                <Link to={"/dashboard/enseignant"}>Enseignant</Link>
              </li>
              <li>
                <Link to={"/dashboard/parent"}>Parent</Link>
              </li>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow w-full bg-base-200"
          >
            <div className="collapse-title  font-bold">
              Abonnement et Paiement
            </div>
            <div className="collapse-content">
              <li>
                <Link to={"/dashboard/aboEcole"}>Ecole au plateforme</Link>
              </li>
              <li>
                <Link to={"/dashboard/aboEleve"}>Eleve au service</Link>
              </li>
              <li>
                <Link to={"/dashboard/paiement"}>Paiement</Link>
              </li>
            </div>
          </div>
          <li className="font-bold">
            <Link to={"/dashboard/charts"}>Statistique</Link>
          </li>
          <div
            tabIndex={0}
            className="collapse collapse-arrow w-full bg-base-200"
          >
            <div className="collapse-title  font-bold">Programme d'étude</div>
            <div className="collapse-content">
              <li>
                <Link to={"/dashboard/matiere"}>Matiére</Link>
              </li>
              <li>
                <Link to={"/dashboard/classe"}>Classe</Link>
              </li>
              <li>
                <Link to={"/dashboard/depart"}>Département</Link>
              </li>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow w-full bg-base-200"
          >
            <div className="collapse-title  font-bold">
              Suivi Académique Étudiant
            </div>
            <div className="collapse-content">
              <li>
                <Link to={"/dashboard/note"}>Note</Link>
              </li>
              <li>
                <Link to={"/dashboard/absence"}>Absence</Link>
              </li>
              <li>
                <Link to={"/dashboard/service"}>Service</Link>
              </li>
            </div>
          </div>
          <li className="font-bold">
            <Link to={"/dashboard/plateforme"}>Plateforme</Link>
          </li>

          <li className="font-bold">
            <Link to={"/dashboard/planning"}>Emplois du temp</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
