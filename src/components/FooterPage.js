import React, { useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import { Button } from "primereact/button";

const FooterPage = (props) => {
  return (
    <footer ref={props.inputRef}>
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
          {/* <Button label="Primary" className="p-button-text" /> */}
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
    </footer>
  );
};

export default FooterPage;
