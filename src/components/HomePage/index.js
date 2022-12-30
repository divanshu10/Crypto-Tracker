import React from "react";
import Button from "../Common/Button/button";
import "./style.css";
import iPhone from "../../assets/iPhone.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";

function HomePageComponent() {
  return (<div className="landing-wrapper">
    <div className="landing-left">
      <motion.h1
        className="heading-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Track Crypto
      </motion.h1>
      <motion.h1
        className="heading-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Real Time.
      </motion.h1>
      <motion.p
        className="para"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get all the Info regarding your favorite Crypto Currency. Visit the dashboard to
        do so!<br></br><span class="happy">Happy Trading !</span>
      </motion.p>
      <motion.div
        className="btn-flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link to="/dashboard">

          <Button text="Dashboard" />
        </Link>
        <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://divanshu-cryptotracker.netlify.app/",
              title: "CryptoTracker.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>
      </motion.div>
    </div>
    <div className="landing-right">
      {/* <img src={gradient} className="gradient" /> */}
      {/* <img src={iPhone} className="iphone" width="460px" /> */}
      <motion.img
        src={iPhone}
        className="iphone"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  </div>
  )
}
export default HomePageComponent;