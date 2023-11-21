import { TituloPaginas } from "../components/ComponentesReutilizables/TituloPaginas";
import iconoWhatsapp from "../assets/iconoWhatsapp.png";
import iconoBehance from "../assets/iconoBehance.png";

export const ContactamePage = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="flex flex-col justify-center items-center h-96">
        <div className="mb-7">
          <h1 className="text-3xl md:text-4xl font-bold block text-white mx-auto">
            Te gustó mi trabajo ? 🤩{" "}
            <span className="text-2xl font-medium block text-center mt-3">
              Encuéntrame en:
            </span>
          </h1>
        </div>
        <div className="md:flex flex  items-center mt-4">
          <a
            href="https://api.whatsapp.com/send?phone=3026230690&text=%C2%A1Hola!%20Leydi%F0%9F%98%80%20Necesito%20%20tus%20servicios%20en"
            target="_blank"
          >
            <img className="md:w-auto hover:w-10 mr-8" src={iconoWhatsapp} />
          </a>

          <a href="https://www.behance.net/SaromaDG" target="_blank">
            <img className="md:w-auto hover:w-12" src={iconoBehance} />
          </a>
        </div>
      </div>
    </section>
  );
};
