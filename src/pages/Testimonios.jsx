import CardTestimonios from "../components/ComponentesReutilizables/CardTestimonios";
import { testimonios } from "../database/Testimonios";

export const Testimonios = () => {
  return (
    <section id="testimonios" className="testimonios h-screen bg-purple-600 grid grid-col justify-center content-center md:gap-10 gap-6" tabIndex={0}>
      <h1 className= "text-white text-2xl md:text-3xl font-semibold text-center tracking-tight" tabIndex={0}>
        Testimonios
      </h1>
      <div className="flex flex-col gap-6 px-4">
        <div className="flex md:flex-row flex-col justify-center" tabIndex={0}>
          {testimonios.map((testimonio) => (
            <CardTestimonios
              key={testimonio.id}
              icono={testimonio.icono}
              parrafo={testimonio.parrafo}
              imagen={testimonio.imagen}
              nombre={testimonio.nombre}
              cargo={testimonio.cargo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
