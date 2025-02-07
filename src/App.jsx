import Aos from "aos";
import "./App.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/MyContext";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Menu from "./components/menu/Menu";
import { BsSearch } from "react-icons/bs";
export default function App() {
  const { theme, isLogin, token } = useContext(ThemeContext);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  if (!token) {
    return (
      <div className="min-h-screen bg-base-200 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-xl text-center">
          Vous de se connecter pour accéder cette page !
        </h1>
        <Link to={"/login"} className="btn btn-success">
          se connencter
        </Link>
      </div>
    );
  }
  return (
    <div data-theme={theme} className="min-h-screen bg-base-200  text-2xl">
      <>
        {" "}
        {/* side bar */}
        <Menu />
        {/* content bar */}
        <div className="lg:w-[calc(100%-256px)] min-h-screen  lg:ml-64">
          <NavBar />
          <h1 className="capitalize block sm:hidden  my-2 font-light text-center">
            bienvenue monsieur nimrod
          </h1>
          <form className="join my-4 sm:hidden block  w-fit mx-auto shadow-md ">
            <input
              type="text"
              className="  input input-md  join-item"
              placeholder="recherche"
            />
            <button className="join-item btn btn-md">
              <BsSearch />
            </button>
          </form>

          <Outlet />
          <footer className="footer  p-10 bg-neutral text-neutral-content">
            <nav>
              <header className="footer-title">Services</header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Legal</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
        </div>
      </>
    </div>
  );
}
