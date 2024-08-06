import React from "react";
import { FaStar } from "react-icons/fa6";

const Feedback = () => {
  return (
    <>
      <div className="feedback w100 bg1 br4">
        <div className="feedback-box ptb12 plr16 pr8">
          <h2 className="feedback-heading fs24 fw6 pt8 pb12">
            Customer's Feedback
          </h2>
          <ul className="feedback-lists">
            <li className="brd-b1 ptb12">
              <div className="v-center mb12 fw6">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Jenny Wilson
              </div>
              <div className="df mb12">
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fs20 mr4" />
              </div>
              <p className="lh20 fs13 fc1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                sapiente consequatur, illum doloribus inventore sit. At
                repellendus modi nostrum beatae itaque delectus totam blanditiis
                neque saepe deserunt enim architecto minima dolorem sunt, ipsum
                inventore fuga, officia veritatis rerum. Officiis, repudiandae!
              </p>
            </li>
            <li className="brd-b1 ptb12">
              <div className="v-center mb12 fw6">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Dianne Russell
              </div>
              <div className="df mb12">
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
              </div>
              <p className="lh20 fs13 fc1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                sapiente consequatur, illum doloribus inventore sit. At
                repellendus.
              </p>
            </li>
            <li className="brd-b1 ptb12">
              <div className="v-center mb12 fw6">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Devon Lane
              </div>
              <div className="df mb12">
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fc10 fs20 mr4" />
                <FaStar className="fs20 mr4" />
              </div>
              <p className="lh20 fs13 fc1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                sapiente consequatur, illum doloribus inventore sit. At
                repellendus modi nostrum beatae itaque delectus totam blanditiis
                neque.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Feedback;
