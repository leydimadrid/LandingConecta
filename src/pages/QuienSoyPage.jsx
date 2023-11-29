import fotoLeydi from "../assets/foto-leydi.webp";

export const QuienSoyPage = () => {
  return (
    <main className="wave md:bg-cover lg:bg-cover bg-auto bg-no-repeat">
      <section
        id="quiensoy"
        className=" md:h-screen h-auto grid grid-col justify-center place-items-center px-4 py-4"
      >
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center tracking-tight" tabIndex={0}>
          ¿Quién soy?
        </h1>
        <div className="flex flex-col md:gap-16 gap-4 justify-center items-center md:flex-row md:text-xl text-base">
          <img
            className="md:w-auto md:h-auto w-60 h-60 rounded-full shadow-xl object-cover"
            src={fotoLeydi}
            tabIndex={0}
            alt="Foto de Leydi Creadora de Conecta Agencia Digital"
          />
          <div className="mt-8 w-86 md:w-2/5 pt-6 pb-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-purple-700 font-bold text-2xl md:text-3xl text-left block md:mx-4 mx-8" tabIndex={0}>
              ¡Hola! Soy Leydi😊{" "}
            </h1>
            <div className="">
              <p className=" text-black text-lg md:text-xl md:mx-4 mx-8 mt-2 text-justify font-normal md:max-w-5xl" tabIndex={0}>
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
      </main>
  );
};
