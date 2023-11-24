import fotoLeydi from "../assets/foto-leydi.png";

export const QuienSoyPage = () => {
  return (
    <section id="quiensoy" className="bg-purple-900 md:h-screen h-auto grid grid-col justify-center place-items-center px-4 py-4">
      <h1 className="text-white text-2xl md:text-3xl font-bold text-center tracking-tight">
        ¿Quién soy?
      </h1>

      <div className="flex flex-col items-center md:flex-row md:max-w-6xl md:text-xl text-base">
        <img
          className="object-cover w-full h-auto md:h-auto md:w-auto rounded-md md:mr-14 shadow-md"
          src={fotoLeydi}
          tabIndex={0}
        />
        <div className="block my-auto mx-auto w-96 md:w-2/5 pt-6 pb-6">
          <h1 className="text-yellow-500 font-bold text-2xl md:text-4xl text-left block mx-4">
            ¡Hola! Soy Leydi😊{" "}
          </h1>
          <div className="md:max-w-7xl">
          <p className=" text-white text-xl md:text-2xl mx-4 mt-2 text-justify font-normal">
            Creadora de Conecta Agencia Digital,{" "}
            <span className="font-bold">diseñadora gráfica </span> y{" "}
            <span className="font-bold"> desarrolladora Front-End. </span>
            Mi objetivo es llevar tu negocio al siguiente nivel mediante
            soluciones innovadoras y creativas.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};
