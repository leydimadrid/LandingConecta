import { HeaderPage } from "./pages/HeaderPage";
import { InicioPage } from "./pages/InicioPage";
import { QuienSoyPage } from "./pages/QuienSoyPage";
import { ServiciosPage } from "./pages/ServiciosPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { Footer } from "./components/Footer";
import { ContactamePage } from "./pages/ContactamePage";

function App() {
  return (
    <div>
      <HeaderPage />
      <InicioPage/>
      <QuienSoyPage />
      <ServiciosPage />
      <PortafolioPage />
      <ContactamePage />
      <Footer />
    </div>
  );
}

export default App;
