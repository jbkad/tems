import "../styles/about.scss";

export default function About() {
  return (
    <div className="about">
      <section className="section-1">
        <img
          className="hero-image"
          src={require("../assets/images/tems.webp")}
          alt="Tems in Love Me JeJe photoshoot"
        />
        <div className="hero-gradient" />
      </section>

      <section className="bio-section">
        <p className="bio">
          Tems is a Nigerian singer, songwriter, and record producer who has
          made significant waves in the global music scene. Hailing from Lagos,
          Nigeria, she gained widespread recognition for her unique voice and
          genre-blending style that incorporates elements of R&B, neo-soul, and
          afrobeats.
          <br /><br />
          Her breakout came in 2020 when she featured on Wizkid's global hit
          "Essence," a track that earned her international acclaim and marked a
          turning point in her career. She also contributed to the soundtrack of
          Marvel's Black Panther: Wakanda Forever, further cementing her place
          on the world stage.
          <br /><br />
          Known for her soulful and introspective lyrics, Tems continues to be a
          driving force in the contemporary Nigerian music scene, captivating
          audiences worldwide with her emotive performances and innovative
          approach to music. With a growing international fanbase and a sound
          that defies convention, she continues to chart her own course —
          expanding the boundaries of afrobeats while staying rooted in
          authenticity and creative freedom.
        </p>
      </section>
    </div>
  );
}
