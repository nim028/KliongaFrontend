import React from "react";
import Home from "./Home";
import Service from "./Service";
import Teams from "./Teams";
import Suscribe from "./Suscribe";
import Contact from "./Contact";
import FAQ from "./FAQ";
import "../../assets/svg/svg.css";
import Apropos from "./Apropos";

export default function Content() {
  return (
    <div className="min-h-screen">
      <Home />
      <Service />
      <Apropos/>
      <Teams />
      <Suscribe />
      <Contact />
      <FAQ />
    </div>
  );
}
