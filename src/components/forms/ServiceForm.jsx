import React from "react";
import { useForm } from "react-hook-form";

export default function ServiceForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Service = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Service</h1>
      <form
        onSubmit={handleSubmit(submit_Service)}
        className="form-control grid grid-cols-2 gap-4"
      >
        <label htmlFor="nom">
          <h4 className="my-3">nom</h4>
          <input
            {...register("nom", {
              required: { value: true, message: "remplisez le nom du service" },
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
          <h4 className="my-3">description</h4>
          <textarea
            {...register("description", {
              required: { value: true, message: "remplisez la description" },
            })}
            className="textarea"
            placeholder="description"
          ></textarea>
          {errors.description && (
            <p className="text-error my-2">{errors.description.message}</p>
          )}
        </label>
        <label htmlFor="cout ">
          <h4 className="my-3">cout en ariary</h4>
          <input
            {...register("date", {
              required: { value: true, message: "remplisez le cout" },
            })}
            type="number"
            className="input"
            placeholder="cout"
            min={0}
          />
          {errors.cout && (
            <p className="text-error my-2">{errors.cout.message}</p>
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
