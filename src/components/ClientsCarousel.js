import "./ClientsCarousel.css";
import logo2 from "../img/logo2.png";
import Bitshub from "../img/Bitshub.png";
import cl1 from "../img/cl1.png";
import cl2 from "../img/cl2.png";
import cl3 from "../img/cl3.png";
import cl4 from "../img/cl4.png";
function ClientsCarousel({ sliderDirection }) {
  console.log(sliderDirection);
  return (
    <div>
      <section className="carousel">
        <div className="slider">
          <div className={sliderDirection}>
            <div className="slide w-100 h-100">
              {/* <img src="" alt="" /> */}
            </div>
            <div className="slide w-100 h-100">
              <img src={cl1} alt="" />
            </div>
            <div className="slide">
              <img src={cl3} alt="" />
            </div>
            <div className="slide" style={{ width: "150px", height: "100px" }}>
              <img src={cl4} alt="" />
            </div>
            <div className="slide">
              <img src={logo2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ClientsCarousel;
