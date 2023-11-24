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
            className="bg-purple-800 block hover:bg-purple-900 font-semibold rounded-lg text-white hover:scale-105 px-8 py-2 mx-auto cursor-pointer shadow-xl text-sm tracking-wide"
          >
            Vista previa
          </a>
        </div>
      </div>
    </div>
  );
};
