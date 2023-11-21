import logoConecta from "../assets/logo-conecta.svg";
import { NavBar } from "../components/NavBar";

export const HeaderPage = () => {
  return (
    <header className="header w-full md:w-full fixed md:flex md:justify-between block px-6 py-5">
      <a href="#inicio">
        <img src={logoConecta} className="w-28 md:w-32 my-4 ml-4" />
      </a>
      <NavBar />
    </header>
  );
};
