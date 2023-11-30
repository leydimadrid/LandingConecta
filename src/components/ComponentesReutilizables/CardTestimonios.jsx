import React from "react";

const CardTestimonios = ({ icono, parrafo, imagen, nombre, cargo, alt }) => {
  return (
    <div className="flex justify-center">
      <div className="cajaTrabajosDesarrollo md:w-96 w-80 md:h-auto bg-gray-100 rounded-xl py-8 px-8 shadow-lg mb-5 mx-5">
        <div className="cajaImagenPagWeb flex justify-center">
          <img
            className="w-32 h-6"
            src={icono}
            tabIndex={0}
            alt="Icono estrellas"
          />
        </div>
        <p className="mt-4 mb-4 text-black text-justify" tabIndex={0}>
          {parrafo}
        </p>
        <div className="flex justify-center">
          <img
            className="rounded-full w-16 h-16"
            src={imagen}
            tabIndex={0}
            alt="Imagen testimonio"
          />
        </div>
        <h1 className="text-center font-bold" tabIndex={0}>
          {" "}
          {nombre}{" "}
        </h1>
        <h2 className="text-center font-normal" tabIndex={0}>
          {" "}
          {cargo}{" "}
        </h2>
      </div>
    </div>
  );
};

export default CardTestimonios;
