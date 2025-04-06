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
          className="hero-video desktop"
            src={require("../assets/videos/hero_desktop.mp4")}
            alt="Love Me Jeje Visualiser"
            autoPlay
            muted
            loop
            playsInline
          />
          <video
          className="hero-video mobile"
            src={require("../assets/videos/hero_mobile.mp4")}
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
