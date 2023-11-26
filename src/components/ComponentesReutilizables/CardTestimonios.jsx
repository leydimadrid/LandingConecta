import React from "react";

const CardTestimonios = ({ icono, parrafo, imagen, nombre, cargo
}) => {
  return (
    <div className="flex justify-center">
      <div className="cajaTrabajosDesarrollo md:w-96 w-80 md:h-auto bg-gray-100 rounded-xl py-8 px-8 shadow-md mb-5 mx-5">
        <div className="cajaImagenPagWeb flex justify-center">
          <img src={icono} />
        </div>
        <p className="mt-4 mb-4 text-black text-justify">
          {parrafo}
        </p>
        <div className="flex justify-center">
          <img className="rounded-full" src={imagen} />
        </div>
        <h1 className="text-center font-bold"> {nombre} </h1>
        <h2 className="text-center font-normal"> {cargo} </h2>
      </div>
    </div>
  );
};


export default CardTestimonios;
