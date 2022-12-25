
import React from "react";
import Button from "../Button/button";
import MobileDrawer from "./Drawer";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>
        CryptoTracker<span style={{ color: "var(--red)" }}>.</span>
      </h1>
      <div className="links-flex">
        <Link to="/Home">
          <p className="link">Home</p>
        </Link>
        < Link to="/">
          <p className="link">Compare</p>
        </Link>
        <Link to="/">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text="Dashboard"
            onClick={() => {
              console.log("btn-clicked!!!");

            }}
          /> </Link>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;