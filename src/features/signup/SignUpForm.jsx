import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../../context/MyContext";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
export default function SignUpForm() {
  const {theme, show, setShow, isLogin } = useContext(ThemeContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submit_User = (data) => {
    setShow(false);
    console.log(data);
    axios
      .post("http://localhost:8000/api/signUp", data)
      .then((response) => {
        reset();
        toast.success(response.data.message);
        return navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        return navigate("/register");
      });
  };
  useEffect(() => {
    isLogin("/dashboard/acceuil");
  });
  return (
    <div data-theme={theme}>
      <Navbar
        logo={
          <Link to="/#home" className="btn btn-ghost text-xl">
            Kilonga
          </Link>
        }
        children1={
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/#home">Home</Link>
            </li>
            <li>
              <Link>Service</Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#team"></Link>
            </li>
            <li>
              <Link to="/#abonnement">Abonnement</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <Link to="/#faq">FAQ</Link>
            </li>
          </ul>
        }
        children2={
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/#home">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Service</summary>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/#team">Teams</Link>
            </li>
            <li>
              <Link to="/#abonnement">Abonnement</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <Link to="/#faq">FAQ</Link>
            </li>
          </ul>
        }
        button={
          <Link to={"/login"} className="btn btn-success">
            Connexion
          </Link>
        }
      />
      <div
        className="bg-primary-content text-primary flex flex-col items-center justify-center min-h-screen text-sm register p-5"
      >
        <h1 className="text-center font-bold capitalize text-2xl text-white my-4">
          Inscrivez-vous au plateforme
        </h1>
        <div className="glass p-5 bg-none rounded-md shadow-md">
          <form
            onSubmit={handleSubmit(submit_User)}
            className="form-control grid grid-cols-2 h-fit w-fit gap-4"
            id="register"
          >
            <label htmlFor="nom">
              <h4 className="my-3">nom</h4>
              <input
                {...register("nom", {
                  required: { value: true, message: "remplisez le nom" },
                })}
                type="text"
                className="input w-full"
                placeholder="nom"
                autoFocus
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
                className="input w-full"
                placeholder="prenom"
              />
              {errors.prenom && (
                <p className="text-error my-2">{errors.prenom.message}</p>
              )}
            </label>

            <label htmlFor="email">
              <h4 className="my-3">email</h4>
              <input
                {...register("email", {
                  required: { value: true, message: "remplisez l'email" },
                })}
                className="input w-full"
                placeholder="email"
                autoComplete="off"
              />
              {errors.email && (
                <p className="text-error my-2">{errors.email.message}</p>
              )}
            </label>

            <label htmlFor="role">
              <h4 className="my-3">profile</h4>
              <select
                {...register("role", {
                  required: {
                    value: true,
                    message: "remplissez votre profil",
                  },
                })}
                className="select w-full max-w-xs"
              >
                <option value={""} disabled selected>
                  Selectionnez votre profile
                </option>
                <option value={"etudiant"}>je suis un(e) Élève(e)</option>
                <option value={"parent"}>je suis Parent</option>
                <option value={"enseignant"}>
                  je suis un(e) Enseignant(e)
                </option>
                <option value={"personnel"}>je suis un(e) Personnel</option>
              </select>
              {errors.role && (
                <p className="text-error my-2">{errors.role.message}</p>
              )}
            </label>
            <label htmlFor="password">
              <h4 className="my-3">mot de passe</h4>
              <label htmlFor="" className="grow input flex items-center gap-3">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "remplisez le mot de passe",
                    },
                  })}
                  type={show ? "text" : "password"}
                  className="w-full"
                  placeholder="password"
                />
                <div
                  onClick={() => {
                    setShow((show) => !show);
                  }}
                  className="btn btn-circle btn-xs btn-ghost"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>
              </label>

              {errors.password && (
                <p className="text-error my-2">{errors.password.message}</p>
              )}
            </label>
            <label htmlFor="confirme">
              <h4 className="my-3">confirme</h4>
              <label htmlFor="" className="grow input flex items-center gap-3">
                <input
                  {...register("confirme", {
                    required: {
                      value: true,
                      message: "remplisez le confirmation",
                    },
                  })}
                  type={show ? "text" : "password"}
                  className="w-full"
                  placeholder="confirme"
                />
                <div
                  onClick={() => {
                    setShow((show) => !show);
                  }}
                  className="btn btn-circle btn-xs btn-ghost"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>
              </label>

              {errors.confirme && (
                <p className="text-error my-2">{errors.confirme.message}</p>
              )}
            </label>

            {/* //plateform ID */}
          </form>
          <button
            form="register"
            type="submit"
            className="mt-[45px] btn w-[200px] focus:ring btn-success"
          >
            S'Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
