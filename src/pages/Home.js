import SocialLinks, { navigateToTop } from "../assets/constants";
import { UpcomingTours } from "../components/TourData";
import { Link } from "react-router-dom";
import "../styles/home.scss";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <video
            src={require("../assets/videos/tems_video.mp4")}
            alt="Love Me Jeje Visualiser"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>
    </div>
  );
}

export { Home };
