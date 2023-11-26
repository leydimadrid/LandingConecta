import { PlantillaRedesSociales } from "../components/ComponentesReutilizables/PlantillaRedesSociales";
import { PlantillaTrabajosWeb } from "../components/ComponentesReutilizables/PlantillaTrabajosWeb";
import { ProyectosUIUX } from "../database/ProyectosUIUX";
import { proyectosDesarrolloWeb } from "../database/proyectosDesarrolloWeb";
import { proyectosRedesSociales} from "../database/proyectosRedesSociales";

export const PortafolioPage = () => {
  return (
    <section id="portafolio" className="seccionPortafolio h-screen">
      <h1 className="text-black text-2xl md:text-3xl font-bold text-center mt-4 tracking-tight">
        Portafolio
      </h1>
      <h1 className="tituloServicios text-center text-2xl font-bold mt-8 mb-6">
        Proyectos Diseño UI/UX
      </h1>
      <div className="flex flex-col gap-6 px-4">
        <div className="flex md:flex-row flex-col justify-center">
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
        <h1 className="tituloServicios text-center text-2xl font-bold mt-4">
          Proyectos Desarrollo Web
        </h1>
        <div className="flex md:flex-row flex-col justify-center">
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
        <h1 className="tituloServicios text-center text-2xl font-bold mt-4 mb-6">
          Proyectos Redes Sociales
        </h1>
        <div className="flex md:flex-row justify-center">
          {proyectosRedesSociales.map((proyecto) => (
            <PlantillaRedesSociales
              key={proyecto.id}
              imagen={proyecto.imagen}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              urlvistaprevia={proyecto.urlvistaprevia}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
