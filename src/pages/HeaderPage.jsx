import logoConecta from "../assets/logo-conecta.svg";
import { NavBar } from "../components/NavBar";

export const HeaderPage = () => {
  return (
    <header className="header w-full fixed md:w-full md:flex md:justify-between px-4 py-2" tabIndex={0}>
      <a href="#inicio">
        <img src={logoConecta} className="w-28 h-auto md:w-32 md:h-auto my-4 ml-4" tabIndex={0} alt="Imagotipo Conecta"/>
      </a>
      <NavBar />
    </header>
  );
};
