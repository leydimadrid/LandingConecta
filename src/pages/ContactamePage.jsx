import iconoWhatsapp from "../assets/icon-whatsapp.svg";
import iconoInstagram from "../assets/icon-instagram.svg";

export const ContactamePage = () => {
  return (
    <section id="contacto" className="contacto" tabIndex={0}>
      <div className="grid grid-col gap-2 justify-center content-center h-80">
        <div className="mb-7">
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-black mx-auto" tabIndex={0}>
            ¿Tienes alguna pregunta?
          </h1>
          <p className="text-xl md:text-2xl text-black mx-auto text-center mt-4 px-4" tabIndex={0}>
            Estoy aquí para ayudarte. Ponte en contacto conmigo en
          </p>
        </div>
        <div className="md:flex-row flex gap-4 justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=3026230690&text=%C2%A1Hola!%20Conecta,%20necesito%20%20tus%20servicios%20en"
            target="_blank"
          >
            <img className="w-14" src={iconoWhatsapp} tabIndex={0} alt="Icono Whatsapp" />
          </a>

          <a
            href="https://www.instagram.com/conecta.agenciadigital/"
            target="_blank"
          >
            <img className="w-14" src={iconoInstagram} tabIndex={0} alt="Icono Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};
