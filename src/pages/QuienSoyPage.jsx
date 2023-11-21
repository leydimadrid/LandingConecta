import fotoLeydi from "../assets/foto-leydi.png";
import { TituloPaginas } from "../components/ComponentesReutilizables/TituloPaginas";

export const QuienSoyPage = () => {
  return (
    <section id="quiensoy">
      <TituloPaginas titulo="¿Quién soy?" />

      <div className="bg-white md:flex">
        <div className="w-96 md:w-1/3">
          <img src={fotoLeydi} />
        </div>

        <div className="block my-auto mx-auto w-96 md:w-2/5 pt-6 pb-6">
          <h1 className="text-black font-black text-4xl md:text-5xl text-left block mx-4">
            ¡Hola! 😊{" "}
            <span className="saludoHola block font-black text-black text-2xl md:text-3xl text-left mt-2">
              Mi nombre es Leydi
            </span>
          </h1>

          <p className=" text-black text-xl md:text-2xl mx-4 mt-2 text-justify">
          Creadora de Conecta Agencia Digital, <span className="font-black">diseñadora gráfica </span> y{" "}
            <span className="font-black"> desarrolladora Front-End. </span>
            Mi objetivo es llevar tu negocio al siguiente nivel mediante soluciones innovadoras y creativas.
          </p>
        </div>
      </div>
    </section>
  );
};
