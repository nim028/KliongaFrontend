import React from "react";
import { useForm } from "react-hook-form";

export default function PaiementForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Paiement = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Paiement</h1>
      <form
        onSubmit={handleSubmit(submit_Paiement)}
        className="form-control grid grid-cols-2 gap-4"
      >
        <label htmlFor="montant">
          <h4 className="my-3">montant</h4>
          <input
            {...register("montant", {
              required: {
                value: true,
                message: "remplisez le montant",
              },
            })}
            type="number"
            className="input"
            placeholder="montant"
            min={0}
          />
          {errors.montant && (
            <p className="text-error my-2">{errors.montant.message}</p>
          )}
        </label>
        <label htmlFor="date">
          <h4 className="my-3">date de paiement</h4>
          <input
            {...register("date", {
              required: {
                value: true,
                message: "remplisez la date",
              },
            })}
            type="date"
            className="input"
            placeholder="date"
          />
          {errors.adte && (
            <p className="text-error my-2">{errors.adte.message}</p>
          )}
        </label>
        <label htmlFor="type">
          <h4 className="my-3">type de paiement</h4>
          <select
            {...register("type", {
              required: {
                value: true,
                message: "remplisez le type de paiement",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your Type
            </option>
            <option>Aboonement Plateforme</option>
            <option>abinnement service Ecole</option>
          </select>
          {errors.type && (
            <p className="text-error my-2">{errors.type.message}</p>
          )}
        </label>

        <label htmlFor="eleve">
          <h4 className="my-3">Eleve</h4>
          <select
            {...register("eleveId", {
              required: {
                value: true,
                message: "remplissez l'eleve",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your eleve
            </option>
            <option>mr</option>
            <option>md</option>
            <option>mt</option>
          </select>
          {errors.eleveId && (
            <p className="text-error my-2">{errors.eleveId.message}</p>
          )}
        </label>
        <label htmlFor="ecole">
          <h4 className="my-3">ecole</h4>
          <select
            {...register("ecoleId", {
              required: {
                value: true,
                message: "remplissez l'ecole",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your ecole
            </option>
            <option>mr</option>
            <option>md</option>
            <option>mt</option>
          </select>
          {errors.ecoleId && (
            <p className="text-error my-2">{errors.ecoleId.message}</p>
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
