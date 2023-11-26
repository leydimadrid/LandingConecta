import iconoWhatsapp from "../assets/icon-whatsapp.svg";
import iconoInstagram from "../assets/icon-instagram.svg";
import LogoBlanco from "../assets/logo_blanco.svg";

export const Footer = () => {
  return (
    <footer className="footer text-center bg-purple-700 ">
      <div className="md:grid-col grid justify-center mt-4">
        <div>
          <img className="w-28" src={LogoBlanco} />
        </div>
        <div className="md:flex-row flex justify-center mt-4">
          <a
            href="https://api.whatsapp.com/send?phone=3026230690&text=%C2%A1Hola!%20Conecta,%20necesito%20%20tus%20servicios%20en"
            target="_blank"
          >
            <img className="w-12" src={iconoWhatsapp} />
          </a>

          <a
            href="https://www.instagram.com/conecta.agenciadigital/"
            target="_blank"
          >
            <img className="w-12" src={iconoInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};
