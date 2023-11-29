import React from "react";

const CardServicios = ({ imagen, titulo1, titulo2, descripcion, urlboton, alt }) => {
  return (
      <div className="flip-card md:w-80 md:h-80 w-80 h-80 bg-black">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-purple-700 shadow-lg rounded-2xl flex flex-col items-center justify-center border border-gray-300">
              <img
                className="w-16 h-auto md:h-auto md:w-16"
                src={imagen}
                tabIndex={0}
                alt={alt}

              />
            <h1 className="font-semibold mt-6 text-xl" tabIndex={0}>{titulo1}</h1>{" "}
            <h1 className="font-semibold text-xl" tabIndex={0}>{titulo2}</h1>{" "}
          </div>
          <div className="flip-card-back shadow-lg rounded-2xl flex flex-col items-center justify-center bg-gray-100" tabIndex={0}>
            <p className="px-4 pb-4 text-justify" tabIndex={0}> {descripcion}</p>
            <a
              href={urlboton}
              target="_black"
            >
              <button
                tabIndex={0} className=" bg-purple-800 block hover:bg-purple-900 font-semibold rounded-lg text-white hover:scale-105 px-8 py-2 mx-auto cursor-pointer shadow-xl text-sm tracking-wide
"
              >
                Ver paquetes
              </button>
            </a>
          </div>
        </div>
      </div>
  );
};

export default CardServicios;
