import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <>
      <nav className=" my-4 mr-1">
        <ul className="md:flex md:text-base text-lg text-center">
          <li className="cursor-pointer text-black hover:underline mx-3">
            <Link activeClass="active" smooth spy to="inicio">
              Inicio
            </Link>
          </li>
          <li className="cursor-pointer text-black hover:underline mx-3">
            <Link activeClass="active" smooth spy to="quiensoy">
              ¿Quién soy?
            </Link>
          </li>
          <li className="cursor-pointer text-black hover:underline mx-3">
            <Link activeClass="active" smooth spy to="servicios">
              Servicios
            </Link>
          </li>
          <li className="cursor-pointer text-black hover:underline mx-3">
            <Link activeClass="active" smooth spy to="portafolio">
              Portafolio
            </Link>
          </li>
          <li className="cursor-pointer text-black hover:underline mx-3">
            <Link activeClass="active" smooth spy to="Testimonios">
              Testimonios
            </Link>
          </li>
          <li className="cursor-pointer text-black hover:underline ">
            <Link activeClass="active" smooth spy to="contacto">
              Contáctame
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
