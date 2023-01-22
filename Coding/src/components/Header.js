import React from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        />
      </a>
    </>
  );
};

const Header = () => {
  const online = useOnline();
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/instamart">InstaMart</Link>
            </li>
            <li>Cart</li>
          </ul>
          <h2>{online ? "online" : "offline"}</h2>
        </div>
      </div>
    </>
  );
};
export default Header;
