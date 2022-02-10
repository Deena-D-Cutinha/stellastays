import React, { useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";

const FooterPage = (props) => {
  return (
    <div ref={props.inputRef}>
      {/* <Footer
        columns={[
          {
            icon: <i className="pi pi-phone"></i>,
            title: "About us",
          },
          {
            icon: <i className="pi pi-facebook"></i>,
            title: "follow us",
          },
        ]}
        bottom="test"
      /> */}

      {/* <div style={{ backgroundColor: "black" }} id="footer">
        <button class="left">
          <i className="pi pi-phone"> about us</i>
        </button>
        <button class="right">
          <i className="pi pi-facebook"> follow us</i>
        </button>
        <p class="centered">Center Text here</p>
      </div> */}

      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Product</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Product 1
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Company</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title">Contact & Support</span>
                </li>
                <li class="nav-item">
                  <span class="nav-link">
                    <a class="nav-link" href="#">
                      <i className="pi pi-phone"> call us</i>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
const footerStyle = {
  backgroundColor: "purple",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  // position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};
