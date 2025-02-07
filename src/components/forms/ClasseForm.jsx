import React from "react";
import { useForm } from "react-hook-form";

export default function ClasseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Classe = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Classe</h1>
      <form
        onSubmit={handleSubmit(submit_Classe)}
        className="form-control grid grid-cols-2 gap-4"
      >
        <label htmlFor="nom">
          <h4 className="my-3">nom classe</h4>
          <input
            {...register("nom classe", {
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
        <label htmlFor="année scolaire">
          <h4 className="my-3">année scolaire</h4>
          <input
            {...register("anneScolaire", {
              required: { value: true, message: "remplisez l'anné Scolaire" },
            })}
            type="text"
            className="input"
            placeholder="annee scolaire"
          />
          {errors.anneScolaire && (
            <p className="text-error my-2">{errors.anneScolaire.message}</p>
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
          {errors.ecoleId&& (
            <p className="text-error my-2">{errors.ecoleId.message}</p>
          )}
        </label>

        <label htmlFor="enseignant">
          <h4 className="my-3">Enseignant</h4>
          <select
            {...register("enseignantId", {
              required: {
                value: true,
                message: "remplissez la classe",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your ensegannt
            </option>
            <option>mr</option>
            <option>md</option>
            <option>mr</option>
          </select>
          {errors.enseignantId && (
            <p className="text-error my-2">{errors.enseignantId.message}</p>
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
