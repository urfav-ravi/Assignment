import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

function Header() {
  return (
    <div className="header v-center bg1">
      <div className="logoImg plr12">
        <img src="/images/logo.png" alt="logo" className="logo df" />
      </div>
      <div className="headerComps v-center jcsb wrapper w100 brd-b1">
        <div className="searchBar v-center ptb16">
          <input
            type="search"
            placeholder="Search"
            className="bg9 pl40 pr12 w100 h40 br4 fc5"
          />
          <CiSearch className="searchIcon pa p8 fs20 cp" />
        </div>
        <div className="headerBtns v-center">
          <div className="mailBtn bg9 p8 br50 ml16 v-center fc1 fs20">
            <CiMail />
          </div>
          <div className="settingBtn bg9 p8 br50 ml16 v-center fc1 fs20">
            <IoSettingsOutline />
          </div>
          <div className="notifiBtn bg9 p8 br50 ml16 v-center fc1 fs20">
            <IoMdNotificationsOutline />
          </div>
          <div className="profileBtn bg9 p8 br50 ml16 v-center fc1 fs20">
            <IoPerson />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
