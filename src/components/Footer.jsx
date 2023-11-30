import LogoBlanco from "../assets/logo_blanco.svg";

export const Footer = () => {
  return (
    <footer className="footer flex justify-center place-items-center bg-purple-700 h-16" tabIndex={0}>
          <img className="w-28 h-8 md:w-32 md:h-8" src={LogoBlanco} tabIndex={0} alt="Imagotipo Conecta"/>
    </footer>
  );
};
