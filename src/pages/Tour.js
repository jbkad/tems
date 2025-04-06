import { AllDates } from "../components/TourData";
import "../styles/tour.scss";

export default function Tour() {
  return (
    <div className="tour marginals">
      {/* <h1 className="heading" id="tour">
        Tour
      </h1> */}
      <AllDates />
    </div>
  );
}
