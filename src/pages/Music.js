import "../styles/music.scss";

const albums = [
  {
    name: "Born in the wild",
    year: "2024",
    href: "https://tems.lnk.to/BITW",
    img: require("../assets/images/born-in-the-wild.webp"),
  },
  {
    name: "If orange was a place",
    year: "2021",
    href: "https://tems.lnk.to/iforangewasaplace",
    img: require("../assets/images/if-orange-was-a-place.webp"),
  },
  {
    name: "For broken ears",
    year: "2020",
    href: "https://orcd.co/forbrokenears",
    img: require("../assets/images/for-broken-ears.webp"),
  },
];

export default function Music() {
  return (
    <div className="music">
      <div className="albums">
        {albums.map((album) => (
          <a
            className="album"
            key={album.name}
            href={album.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={album.img} alt={album.name} />
            <div className="name">{album.name}</div>
            <div className="year">{album.year}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
