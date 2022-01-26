import "./ClientsCarousel.css";
import logo2 from "../img/logo2.png";
import Bitshub from "../img/Bitshub.png";
import cl1 from "../img/cl1.png";
import cl2 from "../img/cl2.png";
import cl3 from "../img/cl3.png";
import cl4 from "../img/cl4.png";
function ClientsCarousel() {
  return (
    <div>
      <section className="carousel">
        <div className="slider">
          <div className="slider-track">
            <div className="slide w-100 h-100">
              <img src={cl1} alt="" />
            </div>
            <div className="slide">
              <img src={cl2} alt="" />
            </div>
            <div className="slide">
              <img src={cl3} alt="" />
            </div>
            <div className="slide">
              <img src={cl4} alt="" />
            </div>
            {/* <div className="slide">
              <img src={learnpod} alt="" />
            </div> */}
            <div className="slide">
              <img src={logo2} alt="" />
            </div>
            {/* <div className="slide">
              <img src={lg} alt="" />
            </div> */}
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
