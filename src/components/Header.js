import React, { createRef, useRef } from "react";
import { Navbar, Nav, NavDropdown, Carousel } from "react-bootstrap";
import DropdownDemo from "./DropdownDemo";
import FooterPage from "./FooterPage";
import HomePage from "./HomePage";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.footerRef = React.createRef();
  }
  scrollToFooter() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  gotoFooterEnd = () => this.footerRef.current.scrollIntoView();

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="#home">
            <img
              src="https://stellastays.com/static/media/header-logo.76e595a3.svg"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="justify-content-end"
          />
          <Navbar.Collapse
            style={{ marginRight: "75px" }}
            className="justify-content-end"
          >
            <Nav className="justify-content-end">
              <Nav.Link onClick={this.scrollToFooter}>Help Center</Nav.Link>
              <Nav.Link onClick={this.gotoFooterEnd}>Contact Us</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <HomePage />
        <FooterPage inputRef={this.footerRef} />
      </>
    );
  }
}

export default Header;
