import React from "react";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdInsertChartOutlined } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="navbar dib ">
      <div className="navbar-container bg1 df jcsb fdc">
        <ul className="navlist">
          <li className="navitem mtb24">
            <NavLink
              to="/"
              className="navlink ptb4 plr24 fc-h4 fs22 pr aft transit2"
            >
              <GoHomeFill />
            </NavLink>
          </li>
          <li className="navitem mtb24">
            <NavLink
              to="/chart"
              className="navlink ptb4 plr24 fc-h4 fs22 pr aft transit2"
            >
              <MdInsertChartOutlined />
            </NavLink>
          </li>
          <li className="navitem mtb24">
            <NavLink
              to="/bord"
              className="navlink ptb4 plr24 fc-h4 fs22 pr aft transit2"
            >
              <FaRegClipboard />
            </NavLink>
          </li>
          <li className="navitem mtb24">
            <NavLink
              to="/wallet"
              className="navlink ptb4 plr24 fc-h4 fs22 pr aft transit2"
            >
              <CiWallet />
            </NavLink>
          </li>
          <li className="navitem mtb24">
            <NavLink
              to="/cart"
              className="navlink ptb4 plr24 fc-h4 fs22 pr aft transit2"
            >
              <HiOutlineShoppingBag />
            </NavLink>
          </li>
        </ul>
        <div className="logOutBtn mb32">
          <div className="btn ptb4 plr24 fc-h4 fs22 transit2">
            <LiaSignOutAltSolid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
