import React from "react";
import { useForm } from "react-hook-form";

export default function AbsenceForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    unregister,
  } = useForm();
  const submit_Abs = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-primary-content text-sm w-fit p-5">
      <h1 className="text-2xl my-5 ">Formulaire Absence</h1>
      <form
        onSubmit={handleSubmit(submit_Abs)}
        className="form-control grid grid-cols-2 gap-4"
      >
        <label htmlFor="eleve">
          <h4 className="my-3">eleve</h4>
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

        <label htmlFor="date">
          <h4 className="my-3">date</h4>
          <input
            {...register("date", {
              required: { value: true, message: "remplisez la date" },
            })}
            type="date"
            className="input"
            placeholder="date"
          />
          {errors.date && (
            <p className="text-error my-2">{errors.date.message}</p>
          )}
        </label>
        <label htmlFor="motif">
          <h4 className="my-3">Motif</h4>
          <textarea
            {...register("date", {
              required: { value: true, message: "remplisez la date" },
            })}
            className="textarea"
            placeholder="motif"
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
