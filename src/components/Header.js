import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import DropdownDemo from "./DropdownDemo";
import FooterPage from "./FooterPage";
import HomePage from "./HomePage";
import ImageList from "./ImageList";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.footerRef = React.createRef();
  }
  //scroll using window
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
        {" "}
        <Navbar
          scrolling
          dark
          expand="md"
          fixed="top"
          className="fixed-nav-bar"
        >
          <Navbar.Brand href="#home">
            <img
              src="https://stellastays.com/static/media/header-logo.76e595a3.svg"
              alt=" Brand logo"
              width="100"
              height="90"
              className="d-inline-block align-top"
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
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <HomePage />
        <div class="container pt-5" style={{ marginTop: "-40px" }}>
          <div class="row">
            <div class="col-12">
              <DropdownDemo />
            </div>
            <br />

            <div class="col-12">
              <ImageList />
            </div>
          </div>
        </div>
        <FooterPage inputRef={this.footerRef} />
      </>
    );
  }
}

export default Header;
