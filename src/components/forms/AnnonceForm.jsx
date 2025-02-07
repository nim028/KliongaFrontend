import React from "react";
import { useForm } from "react-hook-form";

export default function AnnonceForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Annonce = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Annnonce</h1>
      <form
        onSubmit={handleSubmit(submit_Annonce)}
        className="form-control grid grid-cols-1 gap-4"
      >
        <label htmlFor="titre">
          <h4 className="my-3">titre</h4>
          <input
            {...register("titre", {
              required: { value: true, message: "remplisez le titre" },
            })}
            type="text"
            placeholder="titre"
            className="input"
          />
          {errors.titre && (
            <p className="text-error my-2">{errors.titre.message}</p>
          )}
        </label>

        <label htmlFor="contenu" className="flex flex-col">
          <h4 className="my-3">contenu</h4>
          <input type="file" className="file-input my-3 file-input-bordered w-full max-w-xs" />
          <textarea
            {...register("date", {
              required: { value: true, message: "remplisez le contenu" },
            })}
            className="textarea"
            placeholder="contenue"
          ></textarea>
          {errors.date && (
            <p className="text-error my-2">{errors.date.message}</p>
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
