import React from "react";

const CardTestimonios = ({ icono, parrafo, imagen, nombre, cargo, alt
}) => {
  return (
    <div className="flex justify-center">
      <div className="cajaTrabajosDesarrollo md:w-96 w-80 md:h-auto bg-gray-100 rounded-xl py-8 px-8 shadow-lg mb-5 mx-5" tabIndex={0}>
        <div className="cajaImagenPagWeb flex justify-center">
          <img src={icono} tabIndex={0} alt={alt} />
        </div>
        <p className="mt-4 mb-4 text-black text-justify" tabIndex={0}>
          {parrafo}
        </p>
        <div className="flex justify-center">
          <img className="rounded-full" src={imagen} tabIndex={0} />
        </div>
        <h1 className="text-center font-bold" tabIndex={0}> {nombre} </h1>
        <h2 className="text-center font-normal" tabIndex={0}> {cargo} </h2>
      </div>
    </div>
  );
};


export default CardTestimonios;
