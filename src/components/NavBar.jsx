import { Link } from "react-scroll";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="my-4 mr-1" tabIndex={0}>
        <ul
          className={`py-6 px-4 md:p-0 md:grid md:gap-x-6 md:gap-y-4 md:grid-cols-6 grid-rows-6 md:text-xs sm:text-lg lg:text-xs xl:text-sm 2xl:text-lg text-md w-full absolute md:static md:pb-0 left-0  md:w-auto md:pl-0 font-medium bg-white md:shadow-none shadow-lg ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="cursor-pointer text-black md:text-center text-left decoration-purple-800 hover:underline decoration-2 underline-offset-8 md:mb-0 mb-1">
            <Link
              className="decoration-purple-800 focus:underline decoration-2 underline-offset-8"
              activeClass="active"
              smooth
              spy
              to="inicio"
              tabIndex={0}
              onClick={() => setOpen(!open)}
            >
              Inicio
            </Link>
          </li>
          <li className="cursor-pointer text-black md:text-center text-left decoration-purple-800 hover:underline decoration-2 underline-offset-8 md:mb-0 mb-1">
            <Link
              className="decoration-purple-800 focus:underline decoration-2 underline-offset-8"
              activeClass="active"
              smooth
              spy
              to="quiensoy"
              tabIndex={0}
              onClick={() => setOpen(!open)}
            >
              ¿Quién soy?
            </Link>
          </li>
          <li className="cursor-pointer text-black md:text-center text-left decoration-purple-800 hover:underline decoration-2 underline-offset-8 md:mb-0 mb-1">
            <Link
              className="decoration-purple-800 focus:underline decoration-2 underline-offset-8"
              activeClass="active"
              smooth
              spy
              to="servicios"
              tabIndex={0}
              onClick={() => setOpen(!open)}
            >
              Servicios
            </Link>
          </li>
          <li className="cursor-pointer text-black md:text-center text-left decoration-purple-800 hover:underline decoration-2 underline-offset-8 md:mb-0 mb-1">
            <Link
              className="decoration-purple-800 focus:underline decoration-2 underline-offset-8"
              activeClass="active"
              smooth
              spy
              to="portafolio"
              tabIndex={0}
              onClick={() => setOpen(!open)}
            >
              Portafolio
            </Link>
          </li>
          <li className="cursor-pointer text-black md:text-center text-left decoration-purple-800 hover:underline decoration-2 underline-offset-8 md:mb-0 mb-1">
            <Link
              className="decoration-purple-800 focus:underline decoration-2 underline-offset-8"
              activeClass="active"
              smooth
              spy
              to="testimonios"
              tabIndex={0}
              onClick={() => setOpen(!open)}
            >
              Testimonios
            </Link>
          </li>
          <li className="cursor-pointer text-black md:text-center text-left decoration-purple-800 hover:underline decoration-2 underline-offset-8  md:mb-0 mb-1">
            <Link
              className="decoration-purple-800 focus:underline decoration-2 underline-offset-8"
              activeClass="active"
              smooth
              spy
              to="contacto"
              tabIndex={0}
              onClick={() => setOpen(!open)}
            >
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
