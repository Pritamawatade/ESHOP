import React, { useEffect, useState } from "react";
import Lightbutton from "../../assets/images/lightf-mode-button-X4OXHFfW.png";
import Darkbutton from "../../assets/images/dark-mode-button-85jBkhOs.png";

function Darkmode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme == "dark") {
      element.classList.remove("light");
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
      element.classList.add("light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={Lightbutton}
        alt="lightbutton"
        className={`w-16 cursor-pointer ${
          theme === "dark" ? "opacity-0 " : "opacity-100 "
        } absolute right-0  z-10 transition-all duration-200`}
      />

      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={Darkbutton}
        alt=""
        className="w-16 cursor-pointer"
      />
    </div>
  );
}

export default Darkmode;
