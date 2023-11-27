export const PlantillaTrabajosWeb = ({
  titulo,
  descripcion,
  imagen,
  urlvistaprevia,
  alt
}) => {
  return (
    <div className="flex justify-center">
      <div
        className="cajaTrabajosDesarrollo md:w-96 w-80 md:h-auto bg-gray-200 rounded-xl py-8 px-8 shadow-md mb-5 mx-5"
        tabIndex={0}
      >
        <div className="cajaImagenPagWeb bg-white rounded-xl">
          <img className="rounded-xl shadow-md" src={imagen} tabIndex={0} alt={alt} />
        </div>
        <p className="mt-4 mb-4 text-black" tabIndex={0}>
          <span className="font-bold text-black">
            {titulo}
          </span>{" "}
          <br />
          {descripcion}
        </p>
        <div className="md:flex justify-center">
          <a
            tabIndex={0}
            href={urlvistaprevia}
            target="_blank"
            id="vistaprevia"
            className="bg-purple-800 block hover:bg-purple-900 font-semibold text-center rounded-lg text-white hover:scale-105 px-8 py-2 mx-auto cursor-pointer shadow-xl text-sm tracking-wide"
          >
            Vista previa
          </a>
        </div>
      </div>
    </div>
  );
};
