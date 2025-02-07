import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import picture from "../../assets/images/etude/020.webp";
import { ThemeContext } from "../../context/MyContext";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../../components/navbar/Navbar";

export default function SignInForm() {
  const { theme, isLogin } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { show, setShow } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit_User = (data) => {
    // console.log(data);
    setShow(false);
    axios
      .post(`http://localhost:8000/api/signIn`, data)
      .then((response) => {
        reset();
        // console.log(response.data.message);
        toast.success(response.data.message);
        localStorage.setItem("user", response.data.token);
        return navigate("/dashboard/acceuil");
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        navigate("/login");
        return toast.error(err.response.data.message);
      });
  };
  useEffect(() => {
    isLogin("/dashboard","/login");
  },[]);
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
          <Link to={"/register"} className="btn btn-info">
            Inscription
          </Link>
        }
      />
      <div
        className="bg-primary-content text-primary text-sm p-5 min-h-screen justify-center items-center flex flex-col login"
      >
        <h1 className="text-center font-bold capitalize text-2xl text-white my-4">
          connexion
        </h1>
        <div className="">
          <form
            onSubmit={handleSubmit(submit_User)}
            className="form-control bg-none shadow-md rounded-md glass p-7  w-fit gap-5"
          >
            <label htmlFor="email">
              <h4 className="my-3">email</h4>
              <input
                {...register("email", {
                  required: { value: true, message: "remplisez l'email" },
                })}
                type="email"
                className="input w-full input-primary"
                placeholder="email"
                autoFocus
                autoComplete="off"
              />
              {errors.email && (
                <p className="text-error my-2">{errors.email.message}</p>
              )}
            </label>

            <label htmlFor="password">
              <h4 className="my-3">mot de passe</h4>
              <label
                htmlFor=""
                className="grow input w-fit gap-3 flex items-center"
              >
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "remplisez le mot de passe",
                    },
                  })}
                  type={show ? "text" : "password"}
                  className="w-full"
                  placeholder="mot de passe"
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

            {/* //plateform ID */}
            <button type="submit" className="mt-5 btn uppercase btn-success">
              se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
