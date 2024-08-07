import React from "react";
import Navbar from "./Navbar";
import { FaBasketShopping } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineAim } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";

import { PiHamburgerLight } from "react-icons/pi";
import { BiFoodMenu } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import Ordertable from "./Ordertable";
import Feedback from "./Feedback";
import ActivityChart from "./Activitychart";

const Dashbord = () => {
  const circleWedth = 100;
  const redius = 45;
  const dashArray = redius * Math.PI * 2;
  const deshOffset = dashArray - (dashArray * 70) / 100;
  return (
    <>
      <div className="container bg10 df">
        <Navbar />
        <div className="wrapper dashbord">
          <div className="main-heading ptb16">
            <h2 className="fs28 fw6">Dashbord</h2>
          </div>
          <div className="row-1 df mb24 fww">
            <div className="ordersCards flx60 df fww">
              <div className="totalOrder flx25 pr16">
                <div className="card-inner bg1 ptb12 pl12 pr8 br4">
                  <FaBasketShopping className="cardIcon bg4 p8 br8 fs20 mb8 fc6" />
                  <h3 className="cardHeading fs14 mb16">Total Orders</h3>
                  <div className="v-center jcsb">
                    <h2 className="value fs28 fw6">75</h2>
                    <span className="pAndL v-center fs14 fc2">
                      <IoMdArrowDropup className="fs16 mr4" />
                      3%
                    </span>
                  </div>
                </div>
              </div>
              <div className="totalDelivered flx25 pr16">
                <div className="card-inner bg1 ptb12 pl12 pr8 br4">
                  <GiShoppingBag className="cardIcon bg8 p8 br8 fs20 mb8 fc7" />
                  <h3 className="cardHeading fs14 mb16">Total Delivered</h3>
                  <div className="v-center jcsb">
                    <h2 className="value fs28 fw6">70</h2>
                    <span className="pAndL v-center fs14 fc3">
                      <IoMdArrowDropdown className="fs16 mr4" />
                      4%
                    </span>
                  </div>
                </div>
              </div>
              <div className="totalCancelled flx25 pr16">
                <div className="card-inner bg1 ptb12 pl12 pr8 br4">
                  <GiShoppingBag className="cardIcon bg5 p8 br8 fs20 mb8 fc8" />
                  <h3 className="cardHeading fs14 mb16">Total Cancelled</h3>
                  <div className="v-center jcsb">
                    <h2 className="value fs28 fw6">05</h2>
                    <span className="pAndL v-center fs14 fc2">
                      <IoMdArrowDropup className="fs16 mr4" />
                      2%
                    </span>
                  </div>
                </div>
              </div>
              <div className="totalRevenue flx25 pr16">
                <div className="card-inner bg1 ptb12 pl12 pr8 br4">
                  <FaCircleDollarToSlot className="cardIcon bg6 p8 br8 fs20 mb8 fc9" />
                  <h3 className="cardHeading fs14 mb16">Total Revenue</h3>
                  <div className="v-center jcsb">
                    <h2 className="value fs28 fw6">$12k</h2>
                    <span className="pAndL v-center fs14 fc3">
                      <IoMdArrowDropdown className="fs16 mr4" />
                      6%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="netProfitContainer flx40  bg1 br4">
              <div className="netProfit w100 v-center jcsb">
                <div className="card-inner ptb12 pl12 pr8">
                  <h3 className="cardHeading fs14 mb16">Net Profit</h3>
                  <h2 className="value fs32 fw6 mb16">$6759.25</h2>
                  <span className="pAndL v-center fs14 fc2">
                    <IoMdArrowDropup className="fs16 mr4" />
                    6%
                  </span>
                </div>
                <div className="percent tac">
                  <div className="percircle pr p4">
                    <svg
                      width={circleWedth}
                      height={circleWedth}
                      viewBox={`0 0 ${circleWedth} ${circleWedth}`}
                    >
                      <circle
                        cx={circleWedth / 2}
                        cy={circleWedth / 2}
                        r={redius}
                        strokeWidth="10px"
                        className="circle-background"
                      />
                      <circle
                        cx={circleWedth / 2}
                        cy={circleWedth / 2}
                        r={redius}
                        strokeWidth="10px"
                        className="circle-progress"
                        style={{
                          strokeDasharray: dashArray,
                          strokeDashoffset: deshOffset,
                        }}
                        transform={`rotate(-90 ${circleWedth / 2} ${
                          circleWedth / 2
                        })`}
                      />
                    </svg>
                    <div className="perValue pa t0 l0 w100 h100 box-center fdc">
                      <h2 className="value fs24 fw6 mb4">70%</h2>
                      <p className="sub-heading fs10 fc1">
                        Goal <br /> Completed
                      </p>
                    </div>
                  </div>
                  <div className="text">
                    <p className="fs10 fc1">
                      *The values hare has been rounded off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-2 df mb24 fww">
            <div className="activityChart flx60 df pr16">
              <div className="orders w100 p16 bg1 br4">
                <div className="v-center jcsb">
                  <h2 className="order-heading fs24 fw6 pt8 pb12">Activity</h2>
                  <span className="bg9 br24 ptb8 plr12 v-center fs12">
                    Weekly
                    <FaCaretDown
                      className="
                      ml8"
                    />
                  </span>
                </div>
                <ActivityChart />
              </div>
            </div>
            <div className="optionsContainer flx40  v-center bg1 br4">
              <div className="options w100 p24 ">
                <div className="option-1 v-center jcsb mb12">
                  <div className="option-inner v-center">
                    <AiOutlineAim className="fc8 fs24 p12 bg5 br50 mr16" />
                    Goals
                  </div>
                  <span>
                    <FaAngleRight className="bg9 fs13 p8 br50" />
                  </span>
                </div>
                <div className="option-2 v-center jcsb mb12">
                  <div className="option-inner v-center">
                    <PiHamburgerLight className="fc6 fs24 p12 bg4 br50 mr16" />
                    Popular Dishes
                  </div>
                  <span>
                    <FaAngleRight className="bg9 fs13 p8 br50" />
                  </span>
                </div>
                <div className="option-3 v-center jcsb mb12">
                  <div className="option-inner v-center">
                    <BiFoodMenu className="fc9 fs24 p12 bg6 br50 mr16" />
                    Menu
                  </div>
                  <span>
                    <FaAngleRight className="bg9 fs13 p8 br50" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row-3 df fww">
            <div className="recent-order flx60 pr16 df">
              <div className="orders w100 bg1 br4">
                <div className="order-box ptb12 plr16 pr8">
                  <h2 className="order-heading fs24 fw6 pt8 pb12">
                    Recent Orders
                  </h2>
                  <Ordertable />
                </div>
              </div>
            </div>
            <div className="customer-feedback flx40">
              <Feedback />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
