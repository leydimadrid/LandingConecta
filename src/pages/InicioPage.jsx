export const InicioPage = () => {
  return (
      <section id="inicio" className="area py-40 md:h-screen h-auto">
        <div className="mt-2 md:my-40 mx-auto text-center flex flex-col justify-center items-center w-full md:w-2/4">
          <h1 className="my-4 text-3xl md:text-6xl leading-tight text-black font-semibold">
            Bienvenid@ a
          </h1>
          <h1 className="mb-8 text-3xl md:text-6xl leading-tight text-purple-900 font-semibold">
            Conecta Agencia Digital
          </h1>
          <h3 className=" text-black text-2xl md:text-3xl leading-tight mb-4 font-normal">
            Transformo ideas en experiencias digitales extraordinarias
          </h3>

          <a href="#portafolio">
            <button
              className="bg-purple-900 block font-medium rounded-lg text-white px-8 py-2 mx-auto cursor-pointer shadow-xl my-6 text-xl tracking-wide
"
            >
              Portafolio
            </button>
          </a>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
  );
};
