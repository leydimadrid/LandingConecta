import CardServicios from "../components/ComponentesReutilizables/CardServicios";
import { Servicios } from "../database/Servicios";

export const ServiciosPage = () => {
  return (
    <section
      className="servicios bg-gray-100 md:h-screen h-auto grid grid-row justify-center place-items-center content-center px-4 py-4"
    >
      <div>
        <h1
          className="text-purple-800 text-2xl md:text-3xl font-semibold text-center tracking-tight mb-10"
          tabIndex={0}
        >
          Servicios
        </h1>
        <p
          className="md:max-w-5xl max-w-md font-normal mx-4 mt-2 text-justify text-black text-lg md:text-xl"
          tabIndex={0}
        >
          Ofrezco servicios de Diseño UX/UI, Desarrollo web y Diseño para Redes
          Sociales.
        </p>
        <p
          className="md:max-w-3xl max-w-md font-normal mx-4 text-justify text-black text-lg md:text-xl mb-12"
          tabIndex={0}
        >
          Mi objetivo es impulsar la visibilidad y el crecimiento en el entorno
          digital, trabajando estrechamente con el cliente para cumplir sus
          objetivos y necesidades.
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:gap-28 gap-10">
        {Servicios.map((servicio) => (
          <CardServicios
            key={servicio.id}
            imagen={servicio.imagen}
            titulo1={servicio.titulo1}
            titulo2={servicio.titulo2}
            descripcion={servicio.descripcion}
            alt={servicio.alt}
            urlboton={servicio.urlboton}
          />
        ))}
      </div>
    </section>
  );
};
