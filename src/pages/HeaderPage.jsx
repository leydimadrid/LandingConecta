import logoConecta from "../assets/logo-conecta.svg";
import { NavBar } from "../components/NavBar";

export const HeaderPage = () => {
  return (
    <header className="header w-full fixed md:w-full md:flex md:justify-between px-4 py-2" tabIndex={0}>
      <a href="#inicio">
        <img src={logoConecta} className="w-28 md:w-32 my-4 ml-4" />
      </a>
      <NavBar />
    </header>
  );
};
