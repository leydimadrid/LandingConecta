import LogoBlanco from "../assets/logo_blanco.svg";

export const Footer = () => {
  return (
    <footer className="footer flex justify-center bg-purple-700 h-16" tabIndex={0}>
          <img className="w-32" src={LogoBlanco} tabIndex={0} alt="Imagotipo Conecta"/>
    </footer>
  );
};
