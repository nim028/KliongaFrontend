import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/MyContext";
import axios from "axios";
import UserForm from "../../components/forms/UserForm";
import Aos from "aos";
import {
  FaEyeDropper,
  FaEyeLowVision,
  FaRegEye,
  FaTrash,
} from "react-icons/fa6";

export default function User() {
  const { USER, API, token, User, isLogin } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  async function getUser() {
    await axios
      .get(API + "/user", { headers: { Authorization: token } })
      .then((response) => {
        return setData(response.data);
      })
      .catch((err) => err.response.data.message);
  }

  useEffect(() => {
    getUser();
    Aos.init();
    Aos.refresh();
    isLogin("/dashboard/user", "/login");
  }, []);
  return (
    <div className="min-h-screen ">
      <div className="flex flex-wrap  justify-evenly">
        <UserForm />
        <div className="my-[100px]">
          <h1 className="mb-3 font-bold">Pourcentage Utilisateur :</h1>
          <div className="glass bg-none rounded-xl shadow-md w-fit p-5">
            <div
              className="radial-progress glass text-primary shadow-md "
              style={{
                "--value": data.length,
                "--size": "300px",
                "--thickness": "30px",
              }}
              max="100"
              role="progressbar"
            >
              {data.length}%
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-auto shadow-md my-4 p-4 h-96">
        <table className="table table-zebra-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Nombre</th>
              <th>identifient</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>sexe</th>
              <th>role</th>
              <th>
                <b>Action</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>{user.id}</th>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.sexe == "m" ? "Masculin" : "Feminin"}</td>
                <td>{user.role == USER.role ? "Vous" : user.role}</td>
                <td>
                  <ul className="flex join">
                    <li className="btn btn-square shadow-sm join-item">
                      <FaRegEye />
                    </li>
                    <li className="btn btn-square shadow-sm join-item">
                      <FaEyeDropper />
                    </li>
                    <li className="btn btn-square shadow-sm join-item">
                      <FaTrash />
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>TOTAL : {data.length}</th>
              <th>identifient</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>sexe</th>
              <th>role</th>
              <th>
                <b>Action</b>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
