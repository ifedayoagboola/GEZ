import "./ClientsCarousel.css";
import logo from "../img/logo.jpeg";
import Bitshub from "../img/Bitshub.png";
import Diginat from "../img/Diginat.png";
import learnpod from "../img/learnpod.png";
import lg from "../img/lg.png";
function ClientsCarousel() {
  return (
    <div>
      <section className="carousel">
        <div className="slider">
          <div className="slider-track">
            <div className="slide">
              <img src={logo} alt="" />
            </div>
            <div className="slide">
              <img src={lg} alt="" />
            </div>
            <div className="slide">
              <img src={Bitshub} alt="" />
            </div>
            <div className="slide">
              <img src={Diginat} alt="" />
            </div>
            <div className="slide">
              <img src={learnpod} alt="" />
            </div>
            <div className="slide">
              <img src={logo} alt="" />
            </div>
            <div className="slide">
              <img src={lg} alt="" />
            </div>
            <div className="slide">
              <img src={Bitshub} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ClientsCarousel;
