import { Navigate, useParams } from "react-router-dom";
import Listings from "../../Data/Listings.json";
import FicheLogement from "../../Pages/FicheLogement/FicheLogement";

export function PageFicheLogement() {
  let { locId } = useParams();

  const foundListing = Listings.find((element) => element.id === locId);

  if (!foundListing) {
    return <Navigate to="/404" replace={true} />;
  } else {
    return <FicheLogement Listing={foundListing} />;
  }
}
