import React from "react";
import { useForm } from "react-hook-form";

export default function DepartForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Depart = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire departement</h1>
      <form
        onSubmit={handleSubmit(submit_Depart)}
        className="form-control grid grid-cols-2 gap-4"
      >
        <label htmlFor="nom">
          <h4 className="my-3">nom departement</h4>
          <input
            {...register("nom", {
              required: { value: true, message: "remplisez le nom du departement" },
            })}
            type="text"
            className="input"
            placeholder="nom du departement"
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

        {/* //plateform ID */}
        <button type="submit" className="mt-5 btn btn-success">
          create
        </button>
      </form>
    </div>
  );
}
