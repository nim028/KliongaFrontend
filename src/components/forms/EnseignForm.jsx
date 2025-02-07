import React from "react";
import { useForm } from "react-hook-form";

export default function EnseignForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Enseignant = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Enseignant</h1>
      <form
        onSubmit={handleSubmit(submit_Enseignant)}
        className="form-control grid grid-cols-2 gap-4"
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
        <label htmlFor="prenom">
          <h4 className="my-3">prenom</h4>
          <input
            {...register("prenom", {
              required: { value: true, message: "remplisez le prenom" },
            })}
            type="text"
            className="input"
            placeholder="prnom"
          />
          {errors.prenom && (
            <p className="text-error my-2">{errors.prenom.message}</p>
          )}
        </label>

        <label htmlFor="ecole">
          <h4 className="my-3">ecole</h4>
          <select
            {...register("ecoleId", {
              required: {
                value: true,
                message: "remplissez le ecole",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your ecole
            </option>
            <option>espic</option>
            <option>itu</option>
            <option>Eni</option>
          </select>
          {errors.ecole && (
            <p className="text-error my-2">{errors.ecole.message}</p>
          )}
        </label>

        <label htmlFor="departement">
          <h4 className="my-3">classe</h4>
          <select
            {...register("departementId", {
              required: {
                value: true,
                message: "remplissez la classe",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your departement
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          {errors.depatementId && (
            <p className="text-error my-2">{errors.depatementId.message}</p>
          )}
        </label>

        <label htmlFor="telephone">
          <h4 className="my-3">telephone</h4>
          <input
            {...register("telephone", {
              required: { value: true, message: "remplisez le telephone" },
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
              required: { value: true, message: "remplisez l'email" },
            })}
            type="email"
            placeholder="email"
            className="input"
          />
          {errors.email && (
            <p className="text-error my-2">{errors.email.message}</p>
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
