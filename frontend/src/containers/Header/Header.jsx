import React from "react";
import { motion } from "framer-motion";

import "./header.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className={"app__header app__flex"}>
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className={"app__header-badge"}>
          <div className={"badge-cmp app__flex"}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={"p-text"}> Hello, I am </p>
              <h1 className={"head-text"}>Harsh</h1>
            </div>
          </div>

          <div className={"tag-cmp app__flex"}>
            <p className={"p-text"}> React Developer </p>
            <p className={"p-text"}> Backend Developer </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.git, images.react, images.node].map((c, i) => (
          <div className={"circle-cmp app__flex"} key={`circle-${i}`}>
            <img src={c} alt={`${c}${i}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Header, "app__home"),
  "home",
  "app__primarybg"
);
