import React from "react";
import { useForm } from "react-hook-form";

export default function PlanningForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Planning = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Emploi du temp</h1>
      <form
        onSubmit={handleSubmit(submit_Planning)}
        className="form-control grid grid-cols-2 gap-4"
      >
        <label htmlFor="matiere">
          <h4 className="my-3">matiere</h4>
          <select
            {...register("matiereId", {
              required: {
                value: true,
                message: "remplissez la matiere",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your matiere
            </option>
            <option>espic</option>
            <option>itu</option>
            <option>Eni</option>
          </select>
          {errors.matiereId && (
            <p className="text-error my-2">{errors.matiereId.message}</p>
          )}
        </label>
        <label htmlFor="classe">
          <h4 className="my-3">classe</h4>
          <select
            {...register("classeId", {
              required: {
                value: true,
                message: "remplissez la classe",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your classe
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          {errors.classeId && (
            <p className="text-error my-2">{errors.classeId.message}</p>
          )}
        </label>

        <label htmlFor="enseignant">
          <h4 className="my-3">Enseignant</h4>
          <select
            {...register("enseignantId", {
              required: {
                value: true,
                message: "remplissez le departement",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your enseignant
            </option>
            <option>mr</option>
            <option>md</option>
            <option>mt</option>
          </select>
          {errors.enseignantId && (
            <p className="text-error my-2">{errors.enseignant.message}</p>
          )}
        </label>
        <label htmlFor="jour">
          <h4 className="my-3">Jour</h4>
          <input
            {...register("jour", {
              required: { value: true, message: "remplisez le nom du jour" },
            })}
            type="text"
            className="input"
            placeholder="nom du matiere"
          />
          {errors.jour && (
            <p className="text-error my-2">{errors.jour.message}</p>
          )}
        </label>
        <label htmlFor="heurDebut">
          <h4 className="my-3">debut</h4>
          <input
            {...register("debut", {
              required: { value: true, message: "remplisez le debut" },
            })}
            type="time"
            className="input"
            placeholder="debut"
          />
          {errors.debut && (
            <p className="text-error my-2">{errors.debut.message}</p>
          )}
        </label>
        <label htmlFor="heurFin">
          <h4 className="my-3">fin</h4>
          <input
            {...register("fin", {
              required: { value: true, message: "remplisez la fin" },
            })}
            type="time"
            className="input"
            placeholder="fin"
          />
          {errors.fin && (
            <p className="text-error my-2">{errors.fin.message}</p>
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
