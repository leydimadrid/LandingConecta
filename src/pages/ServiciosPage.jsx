import animacion from "../assets/animacion.png";
import disenoDigital from "../assets/disenoDigital.png";
import disenoUIUX from "../assets/disenoUIUX.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javaScript.png";
import react from "../assets/react.png";
import { TituloPaginas } from "../components/ComponentesReutilizables/TituloPaginas";
import { TituloServicios } from "../components/ComponentesReutilizables/TituloServicios";
import PlantillaServicios from "../components/ComponentesReutilizables/PlantillaServicios";

export const ServiciosPage = () => {
  return (
    <section className="servicios">
      <PlantillaServicios />
      <TituloPaginas titulo="Servicios" />
      <TituloServicios titulo="Diseño gráfico" />
      <div className="flex flex-cols-3 mx-4 items-center mb-14 pt-7">
        <div className="mx-auto">
          <div className="md:flex items-center text-center">
            <img className="mx-auto" src={animacion} />
            <span className="font-bold text-xl md:text-2xl ml-3">
              Animación 2D
            </span>
          </div>
        </div>
        <div className="mx-auto">
          <div className="md:flex items-center text-center">
            <img className="mx-auto" src={disenoDigital} />
            <span className="font-bold text-xl md:text-2xl ml-3">
              Diseño digital
            </span>
          </div>
        </div>
        <div className="mx-auto">
          <div className="md:flex items-center text-center">
            <img className="mx-auto" src={disenoUIUX} />
            <span className="font-bold text-xl md:text-2xl ml-3">
              Diseño UI/UX
            </span>
          </div>
        </div>
      </div>
      <TituloServicios titulo="Desarrollo web" />
      <div className="flex flex-cols-4 mx-4 items-center pb-7">
        <div className="mx-auto">
          <div className="md:flex items-center text-center">
            {" "}
            <img className="mx-auto" src={html} />{" "}
            <span className="font-bold text-xl md:text-2xl ml-3">HTML</span>
          </div>
        </div>
        <div className="mx-auto">
          <div className="md:flex items-center text-center">
            <img className="mx-auto" src={css} />
            <span className="font-bold text-xl md:text-2xl ml-3">CSS</span>
          </div>
        </div>
        <div className="mx-auto">
          <div className="md:flex items-center  text-center">
            <img className="mx-auto" src={javaScript} />
            <span className="font-bold text-xl md:text-2xl ml-3">
              JavaScript
            </span>
          </div>
        </div>
        <div className="mx-auto">
          <div className="md:flex items-center text-center">
            <img className="mx-auto" src={react} />
            <span className="font-bold text-xl md:text-2xl ml-3">React</span>
          </div>
        </div>
      </div>
    </section>
  );
};
