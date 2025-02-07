import React from "react";
import { useForm } from "react-hook-form";

export default function EcoleForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Ecole = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire ecole</h1>
      <form
        onSubmit={handleSubmit(submit_Ecole)}
        className="form-control grid grid-cols-3 gap-5"
      >
        <label htmlFor="nom">
          <h4 className="my-3">nom</h4>
          <input
            {...register("nom", {
              required: { value: true, message: "remplisez le nom" },
            })}
            type="text"
            className="input"
            placeholder="nom"
          />
          {errors.nom && (
            <p className="text-error my-2">{errors.nom.message}</p>
          )}
        </label>

        <label htmlFor="adresse">
          <h4 className="my-3">adresse</h4>
          <input
            {...register("adresse", {
              required: { value: true, message: "remplisez l'email" },
            })}
            type="text"
            className="input"
            placeholder="adresse"
          />
          {errors.adresse && (
            <p className="text-error my-2">{errors.adresse.message}</p>
          )}
        </label>
        <label htmlFor="ville">
          {" "}
          <h4 className="my-3">vile</h4>
          <input
            {...register("ville", {
              required: { value: true, message: "remplisez la ville" },
            })}
            type="text"
            className="input"
            placeholder="ville"
          />
          {errors.ville && (
            <p className="text-error my-2">{errors.ville.message}</p>
          )}
        </label>
        <label htmlFor="code_postal">
          <h4 className="my-3">code postal</h4>
          <input
            {...register("codePostal", {
              required: { value: true, message: "remplisez le code postal" },
            })}
            type="text"
            className="input"
            placeholder="codePostal"
          />
          {errors.codePostal && (
            <p className="text-error my-2">{errors.codePostal.message}</p>
          )}
        </label>
        <label htmlFor="telephone">
          <h4 className="my-3">telephone</h4>
          <input
            {...register("telephone", {
              required: { value: true, message: "remplissez le telephone" },
            })}
            type="text"
            className="input"
            placeholder="telephone"
          />
          {errors.telephone && (
            <p className="text-error my-2">{errors.telephone.message}</p>
          )}
        </label>
        <label htmlFor="email">
          <h4 className="my-3">email</h4>
          <input
            {...register("email", {
              required: { value: true, message: "remplissez l'email" },
            })}
            type="email"
            className="input"
            placeholder="email"
          />
          {errors.email && (
            <p className="text-error my-2">{errors.email.message}</p>
          )}
        </label>
        <label htmlFor="siteWeb">
          <h4 className="my-3">site web</h4>
          <input
            {...register("siteWeb", {
              required: { value: true, message: "remplissez le site web" },
            })}
            type="text"
            className="input"
            placeholder="site web"
          />
          {errors.siteWeb && (
            <p className="text-error my-2">{errors.siteWeb.message}</p>
          )}
        </label>
        <label htmlFor="plateforme">
          <h4 className="my-3">plateforme</h4>
          <select
            {...register("plateforme", {
              required: { value: true, message: "selectionnez un plateforme" },
            })}
            className="select  select-md w-full max-w-xs"
          >
            <option disabled selected>
              Pick your favorite
            </option>
            <option value={"kilonga"}>kilonga</option>
          </select>
          {errors.plateforme && (
            <p className="text-error my-2">{errors.plateforme.message}</p>
          )}
        </label>
        <label htmlFor="dateInscription">
          <h4 className="my-3">date d'inscription</h4>
          <input
            {...register("dateInscription", {
              required: {
                value: true,
                message: "remplissez la date d'inscription",
              },
            })}
            type="date"
            className="input input-md date"
            placeholder="date d'inscription"
          />
          {errors.dateInscription && (
            <p className="text-error my-2">{errors.dateInscription.message}</p>
          )}
        </label>

        {/* //plateform ID */}
        <button type="submit" className="mt-5 btn btn-success">
          create
        </button>
      </form>
      
    </div>
  );
}
