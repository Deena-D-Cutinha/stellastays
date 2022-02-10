import React, { Component } from "react";
import "./home.css";
import {
  Container,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Dropdown } from "primereact/dropdown";

// import Select from "react-select";
// import SelectSearch from "react-select-search";
// import Select, { OnChangeValue, StylesConfig } from "react-select";
// import { defaultTheme } from "react-select";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: null,
      selectedCheckInDate: "",
      selectedCheckOutDate: "",
      guestCount: 0,
    };
    this.onCountryChange = this.onCountryChange.bind(this);
  }
  onCountryChange(e) {
    this.setState({ selectedCity: e.value });
  }
  selectedCountryTemplate(option, props) {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src="images/flag/flag_placeholder.png"
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  }

  countryOptionTemplate(option) {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src="images/flag/flag_placeholder.png"
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  }
  render() {
    return (
      <div className=" container" style={{ height: "600px" }}>
        <div>
          <Navbar
            variant="light"
            bg="light"
            expand="lg"
            className="inputContainer"
          >
            <Container fluid>
              <Navbar.Toggle aria-controls="navbar-light-example" />
              <Navbar.Collapse id="navbar-light-example">
                {/* <label>City</label> */}
                {/* <Select options={options} /> */}
                {/* <Select
                  defaultValue={options[0]}
                  isClearable
                  isSearchable
                  name="dog"
                  options={options}
                  getOptionValue={(option) => `${option["id"]}`}
                /> */}
                <p>CITY</p>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Dropdown
            value={this.state.selectedCity}
            options={countries}
            onChange={this.onCountryChange}
            optionLabel="name"
            filter
            showClear
            filterBy="name"
            placeholder="Select a Country"
            valueTemplate={this.selectedCountryTemplate}
            itemTemplate={this.countryOptionTemplate}
          />
          <div className="checkIn"></div>
          <div className="checkOut"></div>
          <div className="guests"></div>
        </div>
        <br />
        <h4>Featured Stays</h4>
        <p>
          We provide villas, apartments, and penthouses , | Experience your next
          stay with Stella
        </p>
      </div>
    );
  }
}
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// const options = [
//   { name: "Swedish", value: "sv" },
//   { name: "English", value: "en" },
//   {
//     type: "group",
//     name: "Group name",
//     items: [{ name: "Spanish", value: "es" }],
//   },
// ];

const countries = [
  { name: "Australia", code: "AU" },
  { name: "Brazil", code: "BR" },
  { name: "China", code: "CN" },
  { name: "Egypt", code: "EG" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "India", code: "IN" },
  { name: "Japan", code: "JP" },
  { name: "Spain", code: "ES" },
  { name: "United States", code: "US" },
];
