import { Link } from "react-scroll";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" my-4 mr-1" tabIndex={0}>
        <ul
          className={`py-6 px-4 md:p-0 md:grid gap-x-6 gap-y-4 grid-cols-6 md:text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-lg text-sm w-full absolute md:static md:pb-0 left-0  md:w-auto md:pl-0 font-medium ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-black hover:underline text-center"
          >
            <Link activeClass="active" smooth spy to="inicio" tabIndex={0}>
              Inicio
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-black hover:underline text-center"
          >
            <Link activeClass="active" smooth spy to="quiensoy" tabIndex={0}>
              ¿Quién soy?
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-black hover:underline text-center"
          >
            <Link activeClass="active" smooth spy to="servicios" tabIndex={0}>
              Servicios
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-black hover:underline text-center"
          >
            <Link activeClass="active" smooth spy to="portafolio" tabIndex={0}>
              Portafolio
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-black hover:underline text-center"
          >
            <Link activeClass="active" smooth spy to="testimonios" tabIndex={0}>
              Testimonios
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className="cursor-pointer text-black hover:underline text-center"
          >
            <Link activeClass="active" smooth spy to="contacto" tabIndex={0}>
              Contáctame
            </Link>
          </li>
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </nav>
    </>
  );
};
