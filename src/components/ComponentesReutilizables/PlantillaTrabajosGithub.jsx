import iconoGitHub from "../../assets/icono-github.png";

export const PlantillaTrabajosGithub = ({
  imagen,
  titulo,
  descripcion,
  urlgithub,
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
            href={urlgithub}
            target="_blank"
            id="github"
            className="botonVistayGitHub font-bold rounded-full text-white py-1 md:p-4 md:px-4 cursor-pointer shadow-xl items-center flex justify-center focus:outline-none focus:ring focus:ring-violet-300"
          >
            <img className="md:w-7 w-6 mr-2" src={iconoGitHub} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
