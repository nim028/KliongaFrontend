import React, { useContext } from "react";
import { ThemeContext } from "../context/MyContext";
import AbonnEcolePlateForm from "../components/forms/AbonnEcolePlateForm";
import AbonnEleveServiceForm from "../components/forms/AbonnEleveServiceForm";
import PlateForm from "../components/forms/PlateForm";

export default function Test() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} className="min-h-screen">
      <h1 className="text-3xl text-center">test</h1>
      <AbonnEcolePlateForm />
      <AbonnEleveServiceForm />
      <PlateForm />
    </div>
  );
}
