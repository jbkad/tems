import "../styles/stylesheet.scss";
import { instagram_svg, facebook_svg, x_svg, youtube_svg } from "./svgs/footer";

export const navigateToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
    delay: 0,
  });
};

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        className="link"
        href="https://www.instagram.com/temsbaby/"
        target="blank"
      >
        {instagram_svg}
      </a>
      <a
        className="link"
        href="https://www.facebook.com/temsbaby/"
        target="blank"
      >
        {facebook_svg}
      </a>
      <a className="link" href="https://x.com/temsbaby" target="blank">
        {x_svg}
      </a>
      <a
        className="link"
        href="https://www.youtube.com/@temsbaby"
        target="blank"
      >
        {youtube_svg}
      </a>
    </div>
  );
}
