import { HeaderPage } from "./pages/HeaderPage";
import { InicioPage } from "./pages/InicioPage";
import { QuienSoyPage } from "./pages/QuienSoyPage";
import { ServiciosPage } from "./pages/ServiciosPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { Footer } from "./components/Footer";
import { ContactamePage } from "./pages/ContactamePage";
import { Testimonios } from "./pages/Testimonios";

function App() {
  return (
    <div>
      <HeaderPage />
      <InicioPage/>
      <QuienSoyPage />
      <ServiciosPage />
      <PortafolioPage />
      <Testimonios />
      <ContactamePage />
      <Footer />
    </div>
  );
}

export default App;
