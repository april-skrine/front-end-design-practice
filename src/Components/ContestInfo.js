import React from "react";
import Ellipse6 from "/home/apesapeingapes/witsports/front-end/src/Ellipse6.png";
import Ellipse7 from "/home/apesapeingapes/witsports/front-end/src/Ellipse7.png";

function ContestInfo() {
  return (
    <div style={{ flex: "1 1 0", width: "0", flexGrow: "2" }}>
      <div id="contest-info-flex">
        <div style={{ paddingRight: "5%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: "2%" }}>
              <img src={Ellipse6} alt="logo" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ marginBottom: "4px", color: "white" }}>
                OUR NEXT CONTEST:
              </p>
              <p
                style={{ fontFamily: "open sans", fontWeight: "bold" }}
                id="next-contest"
              >
                #LOREMIPSUMDOLOR
              </p>
            </div>
          </div>
          <div>
            <div style={{ marginTop: "2%" }}>
              <h1
                style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}
              >
                FAN MOMENTS
              </h1>
            </div>
            <div>
              <p
                style={{ fontFamily: "open sans", maxWidth: "80%" }}
                id="fan-text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pharetra congue libero in finibus. Integer nulla eros, tempus.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div className="pepsi" style={{ fontFamily: "open sans" }}>
                <p className="pepsi-p">PRESENTED BY</p>{" "}
                <p className="pepsi-b">PEPSI</p>
              </div>
              <div>
                <img src={Ellipse7} alt="pepsi logo" />
              </div>
            </div>
          </div>
          <div id="contest-rules-flex">
            <div className="rules">
              <hr className="desc" />
              <p
                style={{
                  fontFamily: "open sans",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Step one id libero imperdiet, lacinia arcu ac, ullamcorper
                ligula. Quisque ut venenatis nulla. Nulla est magna, gravida at
                enim eget, imperdiet lobortis.
              </p>
            </div>
            <div className="rules">
              <hr className="desc" />
              <p
                style={{
                  fontFamily: "open sans",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Step two pulvinar, enim lacinia congue lacinia, enim quam
                imperdiet nisi, vel egestas tellus nisi at ex. Phasellus euismod
                pellentesque.
              </p>
            </div>
            <div className="rules">
              <hr className="desc" />
              <p
                style={{
                  fontFamily: "open sans",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Step three sit amet aliquam quam faucibus sed. Proin nec
                ultricies libero. Vivamus sed urna.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "2%" }}>
            <button className="button">ENTER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContestInfo;
