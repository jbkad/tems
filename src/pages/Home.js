import "../styles/home.scss";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <video
            className="hero-video desktop"
            src={require("../assets/videos/hero_desktop.mp4")}
            autoPlay
            muted
            loop
            playsInline
          />
          <video
            className="hero-video mobile"
            src={require("../assets/videos/hero_mobile.mp4")}
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
