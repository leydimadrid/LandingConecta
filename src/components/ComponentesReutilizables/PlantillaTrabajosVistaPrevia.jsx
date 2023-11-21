export const PlantillaTrabajosVistaPrevia = ({
  imagen,
  titulo,
  descripcion,
  urlvistaprevia,
}) => {
  return (
    <div className="flex justify-center">
      <div className="cajaTrabajosDesarrollo bg-gray-300 rounded-xl py-8 px-8 shadow-md mb-5 mx-5">
        <div className="cajaImagenPagWeb bg-white rounded-xl">
          <img className="rounded-xl shadow-md" src={imagen} />
        </div>
        <p className="mt-4 mb-4 text-black">
          <span className="font-bold text-black">{titulo}</span> <br />
          {descripcion}
        </p>
        <div className="md:flex justify-center">
          <a
            href={urlvistaprevia}
            target="_blank"
            id="vistaprevia"
            className="botonVistayGitHub font-bold rounded-full text-white py-1 md:p-4 md:px-4 cursor-pointer shadow-xl items-center flex justify-center focus:outline-none focus:ring focus:ring-violet-300"
          >
            Vista previa
          </a>
        </div>
      </div>
    </div>
  );
};
