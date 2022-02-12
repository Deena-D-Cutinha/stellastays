import React, { Component } from "react";
import "./home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Badge, Carousel as CarouselB } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import SmartphoneContainer from "react-smartphone";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
const header = (
  <img
    alt="Card"
    src="images/usercard.png"
    onError={(e) =>
      (e.target.src =
        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
    }
  />
);
const footer = (
  <span>
    <Button label="Save" icon="pi pi-check" />
    <Button
      label="Cancel"
      icon="pi pi-times"
      className="p-button-secondary ml-2"
    />
  </span>
);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default class ImageList extends Component {
  render() {
    return (
      <div className="container pt-5">
        <h1 style={{ textAlign: "center" }}>Featured Stays </h1>
        <p style={{ textAlign: "center" }}>
          Beachfroont villas to high rise apartments and penthouses, experience
          your next stay with Stella.
        </p>

        <Carousel responsive={responsive}>
          <div style={{ padding: "20px 0 20px 20px" }}>
            <img
              src="https://storage.googleapis.com/hermeez/d48e2b52-3e59-4f33-8e68-3114defdbe66.jpg"
              className="imageList"
              alt="React Bootstrap logo"
            />
            <Badge className="top-right" pill bg="info">
              from AED 2000/night
            </Badge>{" "}
          </div>
          <div style={{ padding: "20px 0 20px 20px" }}>
            <img
              src="https://storage.googleapis.com/hermeez/d48e2b52-3e59-4f33-8e68-3114defdbe66.jpg"
              className="imageList"
              alt="React Bootstrap logo"
            />
            <Badge className="top-right" pill bg="info">
              from AED 3000/night
            </Badge>{" "}
          </div>
          <div style={{ padding: "20px 0 20px 20px" }}>
            <img
              src="https://storage.googleapis.com/hermeez/d48e2b52-3e59-4f33-8e68-3114defdbe66.jpg"
              className="imageList"
              alt="React Bootstrap logo"
            />
            <Badge className="top-right" pill bg="info">
              from AED 1000/night
            </Badge>{" "}
          </div>
          <div style={{ padding: "20px 0 20px 20px" }}>
            <img
              src="https://storage.googleapis.com/hermeez/d48e2b52-3e59-4f33-8e68-3114defdbe66.jpg"
              className="imageList"
              alt="React Bootstrap logo"
            />
            <Badge className="top-right" pill bg="info">
              from AED 2400/night
            </Badge>{" "}
          </div>
          <div style={{ padding: "20px 0 20px 20px" }}>
            <img
              src="https://storage.googleapis.com/hermeez/d48e2b52-3e59-4f33-8e68-3114defdbe66.jpg"
              className="imageList"
              alt="React Bootstrap logo"
            />
            <Badge className="top-right" pill bg="info">
              Info
            </Badge>{" "}
          </div>
        </Carousel>
        <br />
        <br />
        <br />
        <div class="row justify-content-between">
          <div class="col-6">
            <h3>Duis aute irure dolor in reprehenderit in voluptate</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div
            class="col-6"
            style={{
              textAlign: "-webkit-right",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <SmartphoneContainer
              width="auto"
              height="auto"
              caseColor="rgb(30,30,30)"
              shadowColor="rgb(200,200,230)"
              text="hello"
              margin-left="auto"
            >
              <SimpleImageSlider
                width={296}
                height={600}
                images={images}
                // showBullets={true}
                showNavs={true}
                slideDuration={0.3}
                autoPlay={true}
              />
            </SmartphoneContainer>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const images = [
  {
    url: "https://stellastays.com/static/media/reservation.a5848dac.jpg",
  },
  {
    url: "https://stellastays.com/static/media/home.280c73ff.jpg",
  },
  {
    url: "https://stellastays.com/static/media/search.e1016aeb.jpg",
  },
];
