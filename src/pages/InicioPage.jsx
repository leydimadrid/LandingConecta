export const InicioPage = () => {
  return (
    <section id="inicio" className="area py-40 md:h-screen h-auto" tabIndex={0}>
      <div className="mt-2 md:my-40 mx-auto text-center flex flex-col justify-center items-center w-full md:w-2/4">
        <h1 className="my-4 text-3xl md:text-6xl leading-tight text-black font-semibold" tabIndex={0}>
          Bienvenido/a a
        </h1>
        <h1 className="bienvenida mb-8 text-3xl md:text-6xl leading-tight text-purple-900 font-semibold" tabIndex={0}>
          Conecta Agencia Digital
        </h1>
        <h3 className=" text-black text-2xl md:text-3xl leading-tight mb-4 font-normal"  tabIndex={0}>
          Transformo ideas en experiencias digitales extraordinarias
        </h3>

        <a href="#portafolio">
          <button
            className= "bg-purple-800 block hover:bg-purple-900 font-semibold rounded-lg text-white hover:scale-105 px-8 py-2 mx-auto cursor-pointer shadow-xl my-6 text-xl tracking-wide z-40"
            tabIndex={0}
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
