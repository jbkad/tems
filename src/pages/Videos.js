import { AllDates } from "../components/TourData";
import "../styles/videos.scss";

export default function Vidoes() {
  return (
    <div className="videos">
      <section className="section-1 marginals">
        <div className="video">
          <iframe
            title="Boy O Boy"
            src="https://www.youtube.com/embed/3nbYYssRrEI?si=A8YFcVe61Nx0OG6e"
            allow="
              accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <iframe
            title="Get it Right ft. Asake"
            src="https://www.youtube.com/embed/UMuxyhgwIOY?si=K4iux_F-rDRADwup"
            allow="
              accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>{" "}
        <div className="video">
          <iframe
            title="Burning"
            src="https://www.youtube.com/embed/_T94j4P8_nk?si=OTJH8rg-OPmTOdgj"
            allow="
              accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <iframe
            title="Love Me JeJe"
            src="https://www.youtube.com/embed/Y_NTooezadU?si=Kqa_xc5_1UuExmfS"
            allow="
              accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <iframe
            title="Me & U"
            src="https://www.youtube.com/embed/1JltlSJH5bY?si=_lz2EfPkVtCN9Rv8"
            allow="
              accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
