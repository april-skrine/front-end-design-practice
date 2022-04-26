import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import prize1 from "/home/apesapeingapes/witsports/front-end/src/prize1.jpg";
import prize2 from "/home/apesapeingapes/witsports/front-end/src/prize2.jpg";
import prize3 from "/home/apesapeingapes/witsports/front-end/src/prize3.jpg";
import prize4 from "/home/apesapeingapes/witsports/front-end/src/prize4.jpg";
import prize5 from "/home/apesapeingapes/witsports/front-end/src/prize5.jpg";

function ContestCarousel() {
  return (
    <div style={{ width: "500px", height: "500px", backgroundColor: "white" }}>
      <Carousel>
        <Carousel.Item>
          <img src={prize1} alt="First prize" />
          <Carousel.Caption>
            <h3 className="h3-prize">1ST PLACE</h3>
            <p
              className="p-prize"
              style={{ fontFamily: "open sans", fontWeight: "bolder" }}
            >
              FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={prize2} alt="Second prize" />

          <Carousel.Caption>
            <h3 className="h3-prize">2ND PLACE</h3>
            <p
              className="p-prize"
              style={{ fontFamily: "open sans", fontWeight: "bolder" }}
            >
              FRESNO STATE BACKPACK, MOPHIE POWER PACK, PEPSI PRODUCT
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={prize3} alt="Third prize" />

          <Carousel.Caption>
            <h3 className="h3-prize">3RD PLACE</h3>
            <p
              className="p-prize"
              style={{ fontFamily: "open sans", fontWeight: "bolder" }}
            >
              FRESNO STATE BLANKET, PEPSI PRODUCT
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={prize4} alt="First prize" />
          <Carousel.Caption>
            <h3 className="h3-prize">4TH PLACE</h3>
            <p
              className="p-prize"
              style={{ fontFamily: "open sans", fontWeight: "bolder" }}
            >
              DAVANTE ADAMS BOBBLEHEAD
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={prize5} alt="First prize" />
          <Carousel.Caption>
            <h3 className="h3-prize">5TH PLACE</h3>
            <p
              className="p-prize"
              style={{ fontFamily: "open sans", fontWeight: "bolder" }}
            >
              BIG 3 BOBBLEHEAD (PAUL GEORGE, AARON JUDGE, DEREK CARR)
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ContestCarousel;
