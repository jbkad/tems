import "../styles/videos.scss";

const videos = [
   {
    title: "Mine (Visualizer)",
    src: "https://www.youtube.com/embed/5KL3ZVT3Rh4?si=iqCfQ5g6HEuTO9ez",
  },
  {
    title: "I'm Not Sure (Visualizer)",
    src: "https://www.youtube.com/embed/ixsOnhA9wCg?si=Bmv4fN9ROeG1KLPC",
  },
  {
    title: "First (Visualizer)",
    src: "https://www.youtube.com/embed/aePo8JfqtrU?si=UKlAUajtWvvLpr6c",
  },
  {
    title: "Lagos Love (Visualizer)",
    src: "https://www.youtube.com/embed/UEl2YZUG-Kc?si=N08NjL_r0GrjP-Z_",
  },
  {
    title: "Big Daddy (Visualizer)",
    src: "https://www.youtube.com/embed/PhVheAPyX4A?si=bEEmREIsavAZlQbj",
  },



  {
    title: "Boy O Boy",
    src: "https://www.youtube.com/embed/3nbYYssRrEI?si=A8YFcVe61Nx0OG6e",
  },
  {
    title: "Get it Right ft. Asake",
    src: "https://www.youtube.com/embed/UMuxyhgwIOY?si=K4iux_F-rDRADwup",
  },
  {
    title: "Burning",
    src: "https://www.youtube.com/embed/_T94j4P8_nk?si=OTJH8rg-OPmTOdgj",
  },
  {
    title: "Love Me JeJe",
    src: "https://www.youtube.com/embed/Y_NTooezadU?si=Kqa_xc5_1UuExmfS",
  },
  {
    title: "Me & U",
    src: "https://www.youtube.com/embed/1JltlSJH5bY?si=_lz2EfPkVtCN9Rv8",
  },
];

const IFRAME_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

export default function Videos() {
  return (
    <div className="videos">
      <section className="section-1 marginals">
        {videos.map((v) => (
          <div className="video-item" key={v.title}>
            <div className="video-title">{v.title}</div>
            <div className="video">
              <iframe title={v.title} src={v.src} allow={IFRAME_ALLOW} allowFullScreen />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
