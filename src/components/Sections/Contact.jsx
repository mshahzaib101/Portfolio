import React, { useState, useRef } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactData = {
  phone: ["+92 324 3329192", "+971 58 305 1937"],
  email: ["mshahzaib101ed@gmail.com"],
  location: "Upwork",
};

function Contact() {
  const formRef = useRef();

  const [formdata, setFormdata] = useState({
    from_name: "",
    from_email: "",
    from_subject: "",
    from_message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.from_name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.from_email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.from_subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.from_message) {
      setError(true);
      setMessage("Message is required");
    } else {
      emailjs
        .sendForm(
          "service_eg36q6j",
          "template_xrgegwa",
          formRef.current,
          "z9lTIutluZMEOcuT8"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setError(false);
      setMessage("Your message has been sent!!!");
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="contact-info mb-5">
          <i className="icon-phone"></i>
          <div className="details">
            <h5>Phone</h5>
            {contactData.phone.map((singlePhone, index) => (
              <span style={{ display: "block" }} key={index}>
                {singlePhone}
              </span>
            ))}
          </div>
        </div>
        <div className="contact-info mb-5">
          <i className="icon-envelope"></i>
          <div className="details">
            <h5>Email address</h5>
            {contactData.email.map((singleEmail, index) => (
              <span key={index}>{singleEmail}</span>
            ))}
          </div>
        </div>
        <div className="contact-info">
          <i className="icon-location-pin"></i>
          <div className="details">
            <h5>Hire me at</h5>
            <span>
              {" "}
              <a
                href="https://www.upwork.com/freelancers/~0195d000babe5a3a30"
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                {contactData.location}{" "}
                <FaExternalLinkAlt style={{ marginLeft: 5 }} />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <form ref={formRef} className="contact-form" onSubmit={submitHandler}>
          <div className="row">
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="from_name"
                  placeholder="Your name"
                  onChange={handleChange}
                  value={formdata.from_name}
                />
              </div>
            </div>

            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="from_email"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formdata.from_email}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="from_subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  value={formdata.from_subject}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <textarea
                  name="from_message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formdata.from_message}
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-default"
          >
            <i className="icon-paper-plane"></i>Send Message
          </button>
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;
