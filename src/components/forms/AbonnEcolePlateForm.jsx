import React from "react";
import { useForm } from "react-hook-form";

export default function AbonnEcolePlateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_AbonnEcolePlate = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">
        Formulaire Abonnenment ecole au plateforme
      </h1>
      <form
        onSubmit={handleSubmit(submit_AbonnEcolePlate)}
        className="form-control grid grid-cols-2 gap-4"
      >
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
        <label htmlFor="plateforme">
          <h4 className="my-3">plateforme</h4>
          <select
            {...register("plateformeId", {
              required: {
                value: true,
                message: "remplissez l'plateforme",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your plateforme
            </option>
            <option>mr</option>
            <option>md</option>
            <option>mt</option>
          </select>
          {errors.plateformeId && (
            <p className="text-error my-2">{errors.plateformeId.message}</p>
          )}
        </label>
        <label htmlFor="debut">
          <h4 className="my-3">debut</h4>
          <input
            {...register("debut", {
              required: {
                value: true,
                message: "remplisez le debut",
              },
            })}
            type="date"
            className="input"
            placeholder="nom"
          />
          {errors.debut && (
            <p className="text-error my-2">{errors.debut.message}</p>
          )}
        </label>
        <label htmlFor="fin">
          <h4 className="my-3">fin</h4>
          <input
            {...register("fin", {
              required: {
                value: true,
                message: "remplisez la fin",
              },
            })}
            type="date"
            className="input"
            placeholder="nom"
          />
          {errors.fin && (
            <p className="text-error my-2">{errors.fin.message}</p>
          )}
        </label>
        <label htmlFor="type">
          <h4 className="my-3">type</h4>
          <select
            {...register("type", {
              required: {
                value: true,
                message: "remplisez le type",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your Type
            </option>
            <option>Annuel</option>
            <option>Mensuel</option>
          </select>
          {errors.type && (
            <p className="text-error my-2">{errors.type.message}</p>
          )}
        </label>
        <label htmlFor="status">
          <h4 className="my-3">status</h4>
          <select
            {...register("status", {
              required: {
                value: true,
                message: "remplisez le status",
              },
            })}
            className="select w-full max-w-xs"
          >
            <option disabled selected>
              Pick your status
            </option>
            <option>Actif</option>
            <option>suspendue</option>
            <option >expire</option>
          </select>
          {errors.status && (
            <p className="text-error my-2">{errors.status.message}</p>
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
