import { data } from "../data/about";
import "../styles/about.scss";

export default function About() {
  return (
    <div className="about marginals">
      <section className="section-1">
        <img
          src={require("../assets/images/tems.webp")}
          alt="Tems in Love Me JeJe photoshoot"
        />
        <p className="bio">
          Tems is a Nigerian singer, songwriter, and record producer who has
          made significant waves in the global music scene. Hailing from Lagos,
          Nigeria, she gained widespread recognition for her unique voice and
          genre-blending style that incorporates elements of R&B, neo-soul, and
          afrobeats.
          <br />
          <br />
          In addition to her solo work, Tems has collaborated with several
          high-profile artists. Known for her soulful and introspective lyrics,
          Tems continues to be a driving force in the contemporary Nigerian
          music scene, captivating audiences worldwide with her emotive
          performances and innovative approach to music.
        </p>
      </section>
      <section className="section-2">
        <h2 className="heading">Latest</h2>
        {data.map((article, index) => (
          <a href={article.link} target="blank" className="article-card">
            <div className="content">
              <img
                src={article.img}
                alt="Article cover"
                className="Article image"
              />
              <div className="details">
                <div>
                  <div className="title">{article.title}</div>
                  <p className="snippet">{article.snippet}</p>
                </div>
                <div className="meta">
                  <div className="publisher">{article.publisher}</div>
                  <div className="date">{article.date}</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
