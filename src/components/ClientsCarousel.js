import React, { useState } from "react";
import Carousel from "react-simply-carousel";

function ClientsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "blue",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        itemsToShow={4}
        speed={400}
      >
        {Array.from({ length: 10 }).map((item, index) => (
          <div
            style={{
              background: "red",
              width: 200,
              height: 200,
              border: "30px solid #ddd",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box",
            }}
            key={index}
          >
            <img src="../assets/lg.png" alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default ClientsCarousel;
