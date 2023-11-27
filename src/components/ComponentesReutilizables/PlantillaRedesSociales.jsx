export const PlantillaRedesSociales = ({ titulo, imagen, urlvistaprevia, alt }) => {
  return (
    <div className="flex justify-center">
      <div
        className="cajaRedesSociales md:w-96 w-80 bg-gray-200 rounded-xl py-8 px-8 shadow-md mb-5 mx-5"
        tabIndex={0}
      >
        <div className="cajaImagenRedes bg-white rounded-xl">
          <img className="rounded-xl shadow-md" src={imagen} tabIndex={0} alt={alt} />
        </div>
        <h1 className="mt-4 mb-8 text-black font-bold" tabIndex={0}>
          {titulo}
        </h1>
        <div className="md:flex justify-center">
          <a
            tabIndex={0}
            href={urlvistaprevia}
            target="_blank"
            id="vistaprevia"
            className="bg-purple-800 block hover:bg-purple-900 font-semibold rounded-lg text-center text-white hover:scale-105 px-8 py-2 mx-auto cursor-pointer shadow-xl text-sm tracking-wide"
          >
            {" "}
            Ver
          </a>
        </div>
      </div>{" "}
    </div>
  );
};
