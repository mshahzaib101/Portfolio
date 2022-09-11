import React from "react";
import Slider from "react-slick";
import useWindowDimensions from "./windowDimesion";

const clientsData = [
  {
    id: 1,
    image: "images/tech/tech1.png",
  },
  {
    id: 2,
    image: "images/tech/tech2.png",
  },
  {
    id: 3,
    image: "images/tech/tech3.png",
  },
  {
    id: 4,
    image: "images/tech/tech5.png",
  },
  {
    id: 5,
    image: "images/tech/tech4.png",
  },
];

function Clients() {
  const { height, width } = useWindowDimensions();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: width > 700 ? 4 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="shadow-dark background-blue color-white padding-50">
      <h2 className="d-none">Clients</h2>

      <div className="clients-wrapper">
        <Slider {...settings} className="padding-slider">
          {clientsData.map((client) => (
            <div className="client-item" key={client.id}>
              <div className="inner">
                <img
                  src={client.image}
                  alt="client-name"
                  style={{
                    filter: "grayscale(50%)",
                    width: 150,
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
