import React from "react";
import { useForm } from "react-hook-form";

export default function PlateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Plate = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Plateforme</h1>
      <form
        onSubmit={handleSubmit(submit_Plate)}
        className="form-control grid grid-cols-1 gap-4"
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

        <label htmlFor="description">
          <h4 className="my-3">adresse</h4>
          < input
            {...register("description", {
              required: { value: true, message: "remplisez le description" },
            })}
            type="text"
            className=" input w-full"
            placeholder="description"
          />
          {errors.description && (
            <p className="text-error my-2">{errors.description.message}</p>
          )}
        </label>

        <label htmlFor="coutAbonnement">
          <h4 className="my-3">Coût d'Abonnement</h4>
          <input
            {...register("coutAbonnement", {
              required: { value: true, message: "remplissez le coût d'abonnement" },
            })}
            type="email"
            className="input"
            placeholder="cout abonnement"
          />
          {errors.coutAbonnement && (
            <p className="text-error my-2">{errors.coutAbonnement.message}</p>
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
