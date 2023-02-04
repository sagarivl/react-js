import React from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector, useDispatch } from "react-redux";

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
  const store = useSelector((state) => state.cart.items);
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
            <li>
              {" "}
              <Link to="/cart">Cart--{store.length}</Link>
            </li>
          </ul>
          <h2>{online ? "online" : "offline"}</h2>
        </div>
      </div>
    </>
  );
};
export default Header;
