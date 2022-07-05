import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";

import "./footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href={"mailto:harshrajbhendra@gmail.com"} className="p-text">
            harshrajbhendra@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href={"tel: +91 83406 43631"} className="p-text">
            +91 83406 43631
          </a>
        </div>
      </div>

      {isSubmitted ? (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      ) : (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder={"Your Name"}
              name="name"
              value={formData.name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder={"Your email"}
              name="email"
              value={formData.email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              className="p-text"
              onChange={handleChangeInput}
            />
          </div>

          <button className="p-text" type={"button"} onClick={handleSubmit}>
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
