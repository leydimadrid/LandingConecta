import CardTestimonios from "../components/ComponentesReutilizables/CardTestimonios";
import { testimonios } from "../database/Testimonios";

export const Testimonios = () => {
  return (
    <section id="testimonios" className="seccionPortafolio h-screen">
      <h1 className="text-black text-2xl md:text-3xl font-bold text-center mt-4 tracking-tight mb-8">
        Testimonios
      </h1>
      <div className="flex flex-col gap-6 px-4">
        <div className="flex md:flex-row flex-col justify-center">
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
