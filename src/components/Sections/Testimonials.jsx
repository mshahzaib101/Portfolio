import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";
import useWindowDimensions from "./windowDimesion";

const testimonialsData = [
  {
    id: 1,
    content:
      "Working with Shahzaib was awesome! He was responsive, asked great questions, and delivered a great product. Would love to work with him again.",
    authorImage: "images/clients/client1.jpg",
    authorName: "Ofri Markus",
    authorStatus: "Israel",
  },
  {
    id: 6,
    content: "Awesome work by shahzaib, highly recommended",
    authorImage: "images/clients/client5.jpeg",
    authorName: "Sashaboginsky",
    authorStatus: "United States",
  },
  {
    id: 2,
    content:
      "It's hard to put into words what it is like when you are trying to build a business and you find a great resource like mshahzaib101. He did what I needed in 1/10th the time that I was told it would take by some other developers, and he did it right. Speed and quality sometimes go hand in hand, but only when you are dealing with the best. Thank you for being affordable, friendly, and the professional we sought to represent our product!",
    authorImage: "images/clients/client2.jpg",
    authorName: "thecountykid415",
    authorStatus: "United States",
  },
  {
    id: 3,
    content:
      "He is extremely capable and very punctual. This is our third time working with him and we will continue to utilize his help in future as well",
    authorImage: "images/clients/client3.jpg",
    authorName: "Alin shah",
    authorStatus: "United States",
  },
  {
    id: 4,
    content: "Fast delivery. Great experience.",
    authorImage: "images/clients/client4.jpg",
    authorName: "Devlinduldulao",
    authorStatus: "Philippines",
  },
  {
    id: 5,
    content: "Excellent working with him. He knows his stuff.",
    authorImage: "images/clients/client6.jfif",
    authorName: "ccarter1987",
    authorStatus: "United States",
  },
  {
    id: 7,
    content: "Great React/NodeJs Developer Thank you!",
    authorImage: "images/clients/client6.jpeg",
    authorName: "alghoul",
    authorStatus: "Jordan",
  },
];

function Testimonials() {
  const { height, width } = useWindowDimensions();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: width > 700 ? 2 : 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
