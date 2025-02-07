import { createBrowserRouter, Navigate } from "react-router-dom";
import MyProvider from "../context/MyProvider";
import App from "../App";
import Landing from "../pages/Landing";
import SingIn from "../features/signin/SignInForm";
import SingUp from "../features/signup/SignUpForm";
import Test from "../test/Test";
import Acceuil from "../dashboard/content/Acceuil";
import User from "../dashboard/content/User";
import Ecole from "../dashboard/content/Ecole";
import Eleve from "../dashboard/content/Eleve";
import Enseignant from "../dashboard/content/Enseignant";
import Parent from "../dashboard/content/Parent";
import AboEcole from "../dashboard/content/AboEcole";
import AboEleve from "../dashboard/content/AboEleve";
import Paiement from "../dashboard/content/Paiement";
import Statistique from "../dashboard/content/Statistique";
import Matiere from "../dashboard/content/Matiere";
import Classe from "../dashboard/content/Classe";
import Departement from "../dashboard/content/Departement";
import Note from "../dashboard/content/Note";
import Absence from "../dashboard/content/Absence";
import Service from "../dashboard/content/Service";
import Plateforme from "../dashboard/content/Plateforme";
import Planning from "../dashboard/content/Planning";
import Profile from "../dashboard/setting/Profile";
import Reglage from "../dashboard/setting/Reglage";
import GlobalSearch from "../dashboard/content/GlobalSearch";

export const Routes = createBrowserRouter([
  { path: "/test", element: <MyProvider children={<Test />}></MyProvider> },
  {
    path: "/",
    element: <MyProvider children={<Landing />}></MyProvider>,
  },
  {
    path: "/dashboard",
    element: <MyProvider children={<App />}></MyProvider>,
    children: [
      {
        path: "",
        element: <Navigate to={"/dashboard/acceuil"} />,
      },
      {
        path: "acceuil",
        element: <Acceuil />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "ecole",
        element: <Ecole />,
      },
      {
        path: "eleve",
        element: <Eleve />,
      },
      {
        path: "enseignant",
        element: <Enseignant />,
      },
      {
        path: "parent",
        element: <Parent />,
      },
      {
        path: "aboEcole",
        element: <AboEcole />,
      },
      {
        path: "aboEleve",
        element: <AboEleve />,
      },
      {
        path: "paiement",
        element: <Paiement />,
      },
      {
        path: "charts",
        element: <Statistique />,
      },
      {
        path: "matiere",
        element: <Matiere />,
      },
      {
        path: "classe",
        element: <Classe />,
      },
      {
        path: "depart",
        element: <Departement />,
      },
      {
        path: "note",
        element: <Note />,
      },
      {
        path: "absence",
        element: <Absence />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "plateforme",
        element: <Plateforme />,
      },
      {
        path: "planning",
        element: <Planning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "reglage",
        element: <Reglage />,
      },
      {
        path: "search",
        element: <GlobalSearch />,
      },
    ],
  },
  {
    path: "/login",
    element: <MyProvider children={<SingIn />}></MyProvider>,
  },
  {
    path: "/register",
    element: <MyProvider children={<SingUp />}></MyProvider>,
  },
]);
