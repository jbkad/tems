import SocialLinks, { socialLinks } from "../assets/constants.js";
import {
  instagram_svg,
  x_svg,
  facebook_svg,
  youtube_svg,
  rca_svg,
} from "../assets/svgs/footer.js";
import "../styles/footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <section>
          <SocialLinks />
        </section>
        <section className="section-2">
          <a href="https://www.sonymusic.com/privacy-policy/" target="blank">
            Privacy
          </a>
          <a
            href="https://www.sonymusic.com/how-we-use-your-data/"
            target="blank"
          >
            How We Use Your Data
          </a>
          <a href="https://www.sonymusic.com/ccpa-contact-form/" target="blank">
            Do Not Sell or Share My Personal Data
          </a>
          <a
            href="https://www.sonymusic.com/terms-and-conditions/"
            target="blank"
          >
            Terms and Conditions
          </a>
        </section>
        <section className="section-3">
          © {year} Sony Music Entertainment. All Rights Reserved.
        </section>
        <section className="section-4">
          <a href="https://www.rcarecords.com/" target="blank">
            {rca_svg}
          </a>
        </section>
      </div>
    </div>
  );
}

export { Footer };
