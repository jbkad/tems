import "../styles/music.scss";

export default function Music() {
  return (
    <div className="music marginals">
      {/* <h2 className="heading">Music</h2> */}
      <a className="album" href="https://tems.lnk.to/BITW" target="blank">
        <img
          src={require("../assets/images/born-in-the-wild.webp")}
          alt="Tems album"
        />
        <div className="name">Born in the wild</div>
        <div className="year">2024</div>
      </a>
      <a
        className="album"
        href="https://tems.lnk.to/iforangewasaplace"
        target="blank"
      >
        <img
          src={require("../assets/images/if-orange-was-a-place.webp")}
          alt="Tems album"
        />
        <div className="name">If orange was a place</div>
        <div className="year">2021</div>
      </a>
      <a className="album" href="https://orcd.co/forbrokenears" target="blank">
        <img
          src={require("../assets/images/for-broken-ears.webp")}
          alt="Tems album"
        />
        <div className="name">For broken ears</div>
        <div className="year">2020</div>
      </a>
    </div>
  );
}
