import { PlantillaTrabajosVistaPrevia } from "../components/ComponentesReutilizables/PlantillaTrabajosVistaPrevia";
import { PlantillaTrabajosWeb } from "../components/ComponentesReutilizables/PlantillaTrabajosWeb";
import { TituloServicios } from "../components/ComponentesReutilizables/TituloServicios";
import { ProyectosUIUX } from "../database/ProyectosUIUX";
import { proyectosDesarrolloWeb } from "../database/proyectosDesarrolloWeb";
import { ProyectoLanding } from "../database/ProyectoLanding";
import { PlantillaTrabajosGithub } from "../components/ComponentesReutilizables/PlantillaTrabajosGithub";

export const PortafolioPage = () => {
  return (
    <section
      id="portafolio"
      className="seccionPortafolio h-screen"
    >
      <h1 className="text-black text-2xl md:text-3xl font-bold text-center mt-4 tracking-tight">
        Portafolio
      </h1>
      <TituloServicios titulo="Diseño UI/UX" />
    <div className="flex flex-col gap-8">
      {ProyectosUIUX.map((proyecto) => (
        <PlantillaTrabajosVistaPrevia
          key={proyecto.id}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          urlvistaprevia={proyecto.urlvistaprevia}
        />
      ))}
      <TituloServicios titulo="Desarrollo web" />

      {ProyectoLanding.map((proyecto) => (
        <PlantillaTrabajosGithub
          key={proyecto.id}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          urlgithub={proyecto.urlgithub}
        />
      ))}

      {proyectosDesarrolloWeb.map((proyecto) => (
        <PlantillaTrabajosWeb
          key={proyecto.id}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          urlvistaprevia={proyecto.urlvistaprevia}
          urlgithub={proyecto.urlgithub}
        />
      ))}
      </div>
    </section>
  );
};
