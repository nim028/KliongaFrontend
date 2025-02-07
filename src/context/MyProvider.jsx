import React, { useEffect, useState } from "react";
import { ThemeContext } from "./MyContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast } from "react-hot-toast";
import logoW from "../assets/logo/k.png";
import logoB from "../assets/logo/output-onlinepngtools.png";

export default function MyProvider({ children }) {
  const fond = localStorage.getItem("theme");
  const token = localStorage.getItem("user");
  const API = `http://localhost:8000/api`;
  // console.log(API);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("");
  const [USER, setUSER] = useState("");

  const isLogin = (link1, link2) => {
    if (token) {
      setUSER(jwtDecode(token));
      return navigate(link1);
    }
    navigate(link2);
    return setUSER(USER);
  };

  // console.log(USER);

  useEffect(() => {
    if (fond) {
      if (fond == "") {
        return setTheme("light");
      }
      return setTheme(fond);
    }
    return setTheme("light");
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        logoW,
        logoB,
        theme,
        setTheme,
        show,
        setShow,
        token,
        isLogin,
        USER,
        API,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
