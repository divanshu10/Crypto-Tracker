import React from "react";
import Button from "../Common/Button/button";
import "./style.css";
import iPhone from "../../assets/iPhone.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePageComponent() {
  return ( <div className="landing-wrapper">
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
      Track crypto through a public api in real time. Visit the dashboard to
      do so!
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
          <Button text="Share App" outlined={true} />
        </motion.div>
      </div>
      <div className="landing-right">
        {/* <img src={gradient} className="gradient" /> */}
        <img src={iPhone} className="iphone" width="460px" />
      </div>
    </div>
    )
}
export default HomePageComponent;