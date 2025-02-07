import React from "react";
import { useForm } from "react-hook-form";

export default function MatiereForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Matiere = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Matiere</h1>
      <form
        onSubmit={handleSubmit(submit_Matiere)}
        className="form-control grid grid-cols-2 gap-4"
      >
        <label htmlFor="nom">
          <h4 className="my-3">nom matiere</h4>
          <input
            {...register("nom", {
              required: { value: true, message: "remplisez le nom du matiere" },
            })}
            type="text"
            className="input"
            placeholder="nom du matiere"
          />
          {errors.nom && (
            <p className="text-error my-2">{errors.nom.message}</p>
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
          {errors.ecoleId && (
            <p className="text-error my-2">{errors.ecoleId.message}</p>
          )}
        </label>

        <label htmlFor="departement">
          <h4 className="my-3">Enseignant</h4>
          <select
            {...register("depatementId", {
              required: {
                value: true,
                message: "remplissez le departement",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your departement
            </option>
            <option>science</option>
            <option>litterarure</option>
            <option>droit</option>
          </select>
          {errors.departementId && (
            <p className="text-error my-2">{errors.departementId.message}</p>
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
