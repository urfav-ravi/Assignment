import React from "react";

const Ordertable = () => {
  return (
    <>
      <table className="w100">
        <thead className="w100 pb12 brd-b1 fs14">
          <tr className="fw6">
            <td>Customer</td>
            <td>Order No.</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody className="w100 fs12">
          <tr className="pb8">
            <td>
              <span className="v-center">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Wade Warren
              </span>
            </td>
            <td>15478256</td>
            <td>$124.00</td>
            <td>
              <span className="bg11 fc2 br24 ptb4 plr12">Delivered</span>
            </td>
          </tr>
          <tr className="pb8">
            <td>
              <span className="v-center">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Jane Cooper
              </span>
            </td>
            <td>48965786</td>
            <td>$365.02</td>
            <td>
              <span className="bg11 fc2 br24 ptb4 plr12">Delivered</span>
            </td>
          </tr>
          <tr className="pb8">
            <td>
              <span className="v-center">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Guy Hawkins
              </span>
            </td>
            <td>78958215</td>
            <td>$45.88</td>
            <td>
              <span className="bg12 fc3 br24 ptb4 plr12">Cancelled</span>
            </td>
          </tr>
          <tr className="pb8">
            <td>
              <span className="v-center">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Kristin Watson
              </span>
            </td>
            <td>20965732</td>
            <td>$65.00</td>
            <td>
              <span className="bg12 fc3 br24 ptb4 plr12">Pending</span>
            </td>
          </tr>
          <tr className="pb8">
            <td>
              <span className="v-center">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Cody Fisher
              </span>
            </td>
            <td>95715620</td>
            <td>$545.00</td>
            <td>
              <span className="bg11 fc2 br24 ptb4 plr12">Delivered</span>
            </td>
          </tr>
          <tr className="pb8">
            <td>
              <span className="v-center">
                <img
                  src="images/client-01.webp"
                  alt="profile"
                  className="cust-profile mr8"
                />{" "}
                Savannah Nguyen
              </span>
            </td>
            <td>78514568</td>
            <td>$128.20</td>
            <td>
              <span className="bg11 fc2 br24 ptb4 plr12">Delivered</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Ordertable;
