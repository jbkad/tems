import { Link } from "react-router-dom";
import SocialLinks from "../assets/constants";
import { useEffect, useState } from "react";
import { spotify_svg, apple_svg, tidal_svg, amazon_svg, deezer_svg, soundcloud_svg, youtube_svg } from "../assets/svgs/navbar";
import "../styles/modal.scss";
import "../styles/navbar.scss";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/687cZJR45JO7jhk1LHIbgq?si=GTTSs_0MTnOKGfhb_grNOw",
      svg: spotify_svg,
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/gb/artist/tems/1413909060",
      svg: apple_svg,
    },
    {
      name: "Amazon Music",
      url: "https://music.amazon.com/albums/B0D654D755?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_twy9VquTaLXBhCB8j4Vl2tjRp",
      svg: amazon_svg,
    },
    {
      name: "YouTube Music",
      url: "https://music.youtube.com/channel/UCXg6YtKpgC59gRKUfxQw8Fw?si=ZGdjoNdzJK0eDBPU",
      svg: youtube_svg,
    },
    {
      name: "Deezer",
      url: "https://link.deezer.com/s/30JYjQ5KQqvUD4hTR6rKZ",
      svg: deezer_svg,
    },
    {
      name: "SoundCloud",
      url: "https://on.soundcloud.com/GE02tQJrE4Z9eZyGtv",
      svg: soundcloud_svg,
    },
    {
      name: "Tidal",
      url: "https://tidal.com/browse/artist/9357897?u",
      svg: tidal_svg,
    },
  ];

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container">
          <section className="section-1">
            <Link to="/">
              <h1 className="heading">Tems</h1>
            </Link>
            
            <div className="nav-links">
              <div onClick={openModal} className="item">Music</div>
              <Link to="/videos" className="item" onClick={scrollToTop}>
                Videos
              </Link>
              <Link className="menu-item" to="/tour" onClick={scrollToTop}>
                Tour
              </Link>
              <a
                className="menu-item"
                href="https://www.amazon.com/stores/page/12191104-3E04-4AA5-A248-41B6E7FF0BD0?channel=AMMerch_Tems_RCA"
                target="blank"
              >
                Merch
              </a>
              <a href="https://www.leadingvibe.org/" target="blank" className="item">
            Initiative
            </a>
            </div>
          </section>
          <section className="section-2">
            {links.map((link) => (
              <a
                href={link.url}
                className="music-link"
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.svg}
              </a>
            ))}
          </section>
        </div>
      </nav>

      {showModal && (
        <div className="modal-backdrop" onClick={openModal}>
          <div className="modal-panel music-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={openModal} aria-label="Close">✕</button>
            <p className="modal-label">Listen on</p>
            <ul className="stream-list">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <span className="stream-icon">{link.svg}</span>
                    <span className="stream-name">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export { Navbar };
