import { PlantillaRedesSociales } from "../components/ComponentesReutilizables/PlantillaRedesSociales";
import { PlantillaTrabajosWeb } from "../components/ComponentesReutilizables/PlantillaTrabajosWeb";
import { ProyectosUIUX } from "../database/ProyectosUIUX";
import { proyectosDesarrolloWeb } from "../database/proyectosDesarrolloWeb";
import { proyectosRedesSociales } from "../database/proyectosRedesSociales";

export const PortafolioPage = () => {
  return (
    <section
      id="portafolio"
      className="seccionPortafolio h-screen"
      tabIndex={0}
    >
      <div className="flex flex-col md:gap-10 gap-6 px-4">
        <h1
          className="text-purple-800 text-2xl md:text-3xl font-semibold text-center md:mt-16 mt-8 tracking-tight"
          tabIndex={0}
        >
          Portafolio
        </h1>
        <h1 className="text-black text-center text-2xl font-bold" tabIndex={0}>
          Proyectos Diseño UI/UX
        </h1>
        <div className="flex md:flex-row flex-col justify-center" tabIndex={0}>
          {ProyectosUIUX.map((proyecto) => (
            <PlantillaTrabajosWeb
              key={proyecto.id}
              imagen={proyecto.imagen}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              urlvistaprevia={proyecto.urlvistaprevia}
            />
          ))}
        </div>
        <h1 className="text-black text-center text-2xl font-bold" tabIndex={0}>
          Proyectos Desarrollo Web
        </h1>
        <div className="flex md:flex-row flex-col justify-center" tabIndex={0}>
          {proyectosDesarrolloWeb.map((proyecto) => (
            <PlantillaTrabajosWeb
              key={proyecto.id}
              imagen={proyecto.imagen}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              urlvistaprevia={proyecto.urlvistaprevia}
            />
          ))}
        </div>
        <h1 className="text-black text-center text-2xl font-bold" tabIndex={0}>
          Proyectos Redes Sociales
        </h1>
        <div className="flex md:flex-row justify-center">
          {proyectosRedesSociales.map((proyecto) => (
            <PlantillaRedesSociales
              key={proyecto.id}
              imagen={proyecto.imagen}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              alt={proyecto.alt}
              urlvistaprevia={proyecto.urlvistaprevia}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
