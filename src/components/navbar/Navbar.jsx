import React, { useContext, useState } from "react";
import pic from "../../assets/images/anonyme.jpg";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/MyContext";

export default function NavBar() {
  const { USER } = useContext(ThemeContext);
  const [global, setGlobal] = useState("");
  const navigate = useNavigate();
  return (
    <div className="sticky w-full top-0 shadow-sm z-10">
      <div className="navbar bg-base-200 rounded-0">
        <div className="drawer lg:hidden flex">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}

            <label
              htmlFor="my-drawer"
              className="btn btn-circle drawer-button swap swap-rotate"
            >
              <input type="checkbox" />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 gap-3 w-fit h-full rounded-box overflow-y-auto ">
              <li className="font-bold">
                <a>Acceuil</a>
              </li>
              <li className="font-bold">
                <a>User</a>
              </li>
              <li className="font-bold">
                <a>Établissements</a>
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
                    <a>Élève</a>
                  </li>
                  <li>
                    <a>Enseignant</a>
                  </li>
                  <li>
                    <a>Parent</a>
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
                    <a>Ecole au plateforme</a>
                  </li>
                  <li>
                    <a>Eleve au service</a>
                  </li>
                  <li>
                    <a>Paiement</a>
                  </li>
                </div>
              </div>
              <li className="font-bold">
                <a>Statistique</a>
              </li>
              <div
                tabIndex={0}
                className="collapse collapse-arrow w-full bg-base-200"
              >
                <div className="collapse-title  font-bold">
                  Programme d'étude
                </div>
                <div className="collapse-content">
                  <li>
                    <a>Matiére</a>
                  </li>
                  <li>
                    <a>Classe</a>
                  </li>
                  <li>
                    <a>Département</a>
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
                    <a>Note</a>
                  </li>
                  <li>
                    <a>Absence</a>
                  </li>
                  <li>
                    <a>Service</a>
                  </li>
                </div>
              </div>
              <li className="font-bold">
                <a>Plateforme</a>
              </li>

              <li className="font-bold">
                <a>Emplois du temp</a>
              </li>
            </ul>
          </div>
          <Link to={"/dashboard/acceuil"} className="text- font-bold">
            Kilonga
          </Link>
        </div>
        <div className="flex-1 px-2 hidden lg:flex">
          <a className="text-lg font-bold">Kilonga</a>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex  items-center">
            <form
              id="search"
              className="mx-4 w-fit  join shadow-md  hidden sm:flex "
            >
              <input
                type="text"
                className="input join-item shadow-sm w-[300px]"
                placeholder="recherche"
                value={global}
                onChange={(e) => {
                  setGlobal(e.target.value);
                }}
                onFocus={() => {
                  navigate("/dashboard/search");
                }}
              />
              <div className="btn">
                <BsSearch className="text-xl" />
              </div>
            </form>
            <a className="mx-4 text-sm lg:text-base join-item">{USER.prenom}</a>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar online">
                <div className="w-[45px] rounded-full">
                  <img src={pic} />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <Link to={"/dashboard/profile"}>Mon profile {USER.role}</Link>
                </li>
                <li>
                  <Link to={"/dashboard/reglage"}>Paramètre</Link>
                </li>
                <li
                  onClick={() => {
                    localStorage.removeItem("user");
                    return window.location.replace("/login")
                  }}
                  className="font-bold"
                >
                  <a>Déconnexion</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
