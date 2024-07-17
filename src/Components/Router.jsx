//--- Import de fonction React ---
import { PageError } from "../Pages/Error/PageError";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

//--- Import des pages pour chaque route ---
import { PageAccueil } from "../Pages/Accueil/PageAccueil";
import { PageAPropos } from "../Pages/APropos/PageAPropos";
import { PageHeader } from "./Header/Header";
import { PageFooter } from "./Footer/Footer";
import { PageFicheLogement } from "./RedirectLogement/RedirectLogement";

//--- Fonction qui retourne les composants approprier en fonction de l'URL ---
export function Router() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/A-Propos" element={<PageAPropos />} />
        <Route path="/:locId" element={<PageFicheLogement />} />

        {/* Pour gérer les erreurs */}
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageError />} />
      </Routes>
      <PageFooter />
    </BrowserRouter>
  );
}

export default Router;
