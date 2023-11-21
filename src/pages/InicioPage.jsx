import ilustracioninicio from "../assets/ilustracion-inicio.svg";

export const InicioPage = () => {
    return (
    <section id="inicio" className="inicio md:flex justify-center md:pt-24 pt-72">
      <div className="my-auto mx-auto text-left">
        <h1 className="text-3xl md:text-5xl text-white">
        Bienvenido a Conecta Agencia Digital 
        </h1>
        <h3 className=" text-white text-md md:text-3xl">
        Transformo ideas en experiencias digitales extraordinarias
        </h3>
        <a href="#portafolio">
          <button className="botonPortafolio block font-bold rounded-full text-white p-2 px-5 mx-auto cursor-pointer mt-4 mb-12 shadow-xl">
            Portafolio
          </button>
        </a>
      </div>

      <div className="mx-auto w-11/12 md:w-2/5 mt-6 pb-6">
        <img src={ilustracioninicio} />
      </div>
    </section>
  );
};
