import React, { useContext, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../context/MyContext";
import Content from "./content/Content";
import Footer from "../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBoxArchive,
  FaCartShopping,
  FaChartBar,
  FaChartLine,
  FaCubes,
  FaHouse,
  FaPeopleGroup,
  FaPhoneFlip,
  FaQuestion,
} from "react-icons/fa6";
export default function Landing() {
  const { theme, isLogin, logoW, logoB } = useContext(ThemeContext);
  useEffect(() => {
    isLogin("/dashboard/acceuil");
  });
  return (
    <div data-theme={"black"} className="min-h-screen relative">
      <Navbar
        logo={
          <Link href="/#home" className=" w-[80px] text-xl">
            <img
              src={
                theme == "Dark"
                  ? logoW
                  : theme == "synthwave"
                  ? logoW
                  : theme == "forest"
                  ? logoW
                  : logoB
              }
              className="w-full"
            />
          </Link>
        }
        children1={
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#home">Acceuil</a>
            </li>
            <li>
              <a href="#service">
                <FaCubes /> Service
              </a>
            </li>
            <li>
              <a href="#apropos">
                <FaCubes /> À propos
              </a>
            </li>
            <li>
              <a href="#team"></a>
            </li>
            <li>
              <a href="#abonnement">Abonnement</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            {/* <li>
              <Link to={"/register"}>S'enregistrer</Link>
            </li> */}
          </ul>
        }
        children2={
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home">
                <FaHouse /> Acceuil
              </a>
            </li>
            <li>
              <a href="#service">
                <FaCartShopping /> Service
              </a>
            </li>
            <li>
              <a href="#apropos">
                <FaCubes /> À propos
              </a>
            </li>
            <li>
              <a href="#team">
                <FaPeopleGroup /> Teams
              </a>
            </li>
            <li>
              <a href="#abonnement">
                <FaChartBar /> Abonnement
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaPhoneFlip /> Contact
              </a>
            </li>
            <li>
              <a href="#faq">
                <FaQuestion /> FAQ
              </a>
            </li>
            {/* <li>
              <Link to={"/register"}>S'enregistrer</Link>
            </li> */}
          </ul>
        }
        button={
          <Link to={"/login"} className="btn btn-md uppercase btn-success">
            connexion
          </Link>
        }
      />
      <Content />
      <Footer />
    </div>
  );
}
