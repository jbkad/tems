import { Link } from "react-router-dom";
import SocialLinks from "../assets/constants";
import "../styles/navbar.scss";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`navbar  ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container">
        <section className="section-1">
          <Link to="/">
            <h1 className="heading">Tems</h1>
          </Link>
        </section>
        <section className="section-2">
          <div className="container">
            {/* <Link className="menu-item" to="/about">
              Bio
            </Link> */}
            <Link to="/music" className="item">
              Music
            </Link>
            <Link to="/videos" className="item">
              Videos
            </Link>
            {/* <Link className="menu-item" to="/tour">
              Tour
            </Link> */}
            <a
              className="menu-item"
              href="https://www.amazon.com/stores/page/12191104-3E04-4AA5-A248-41B6E7FF0BD0?channel=AMMerch_Tems_RCA"
              target="blank"
              rel="noopener noreferrer"
            >
              Merch
            </a>
            {/* <Link to="/videos" className="item">
              Videos
            </Link> */}
            {/* <a className="menu-item" href="/#subscribe">
              Subscribe
            </a> */}
          </div>
        </section>
        <section className="section-3">{/* <SocialLinks /> */}</section>
      </div>
    </nav>
  );
}

export { Navbar };
