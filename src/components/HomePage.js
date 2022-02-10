import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import DropdownDemo from "./DropdownDemo";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="https://stellastays.com/static/media/w1440-mtl-stj-53.21475e0e.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="https://stellastays.com/static/media/w1440-mtl-stj-23.2c246d3d.webp"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src="https://stellastays.com/static/media/w1440-dxb-sparkle-2803.8d6163a0.webp"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <DropdownDemo />

        {/* <CalendarDemo /> */}
      </div>
    );
  }
}
