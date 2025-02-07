import React, { useContext } from "react";
import { ThemeContext } from "../../context/MyContext";
export default function Contact() {
  const { logoW } = useContext(ThemeContext);
  return (
    <div id="contact" className="min-h-screen bg-info-content p-5">
      <h1
        id="service"
        className="text-center text-info font-bold my-5 text-5xl"
      >
        Contact
      </h1>
      <p className="text-info/60 text-xl font-semibold w-fit lg:w-[500px] mx-auto my-5">
        Vous avez des questions ou souhaitez en savoir plus sur « Kilonga » ?
        Notre équipe est a votre disposition.
      </p>
      <div className="w-[90%] mx-auto">
        <div className="w-[70%] mx-auto my-5 font-semibold flex justify-evenly items-center gap-4 text-accent text-xl p-6">
          <ul className="flex flex-col gap-2">
            <li>Adresse :</li>
            <li className="text-base">Lot 123 ,Antananarivo,Madagascar</li>
            <li>Telephone : </li>
            <li className="text-base">+261 34 36 972 46</li>
            <li>Email : </li>
            <li className="text-base">contact@kilonga.mg</li>
            <li>Heures d'ouverture : </li>
            <li className="text-base">Lundi - Vendredi, 8h-17 h</li>
          </ul>
          <picture>
            <img src={logoW} width={400} alt="" />
          </picture>
        </div>
        <div className="divider text-xl font-bold ">ou</div>
        <form
          action=""
          className="form-control w-fit  lg:w-[500px] my-5 p-5 gap-4 mx-auto"
        >
          <h1 className="uppercase text-xl mb-3">Le formulaire de contact</h1>
          <input type="text" className="input" placeholder="Adresse email" />
          <textarea
            className="textarea textarea-bordered"
            placeholder="Ecrivez-nous ici"
          ></textarea>
          <button type="submit" className="btn btn-primary">Envoyer un message</button>
        </form>
      </div>
    </div>
  );
}
