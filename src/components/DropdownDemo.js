import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import ReactDOM from "react-dom";
import "./home.css";
import React, { Component } from "react";
import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
import { Container, Navbar } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import { Button, ButtonModule } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import FooterPage from "./FooterPage";
import ImageList from "./ImageList";
export default class DropdownDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lazyItems: [],
      lazyLoading: false,
      selectedCity1: null,
      selectedCity2: null,
      selectedCountry: null,
      selectedGroupedCity: null,
      selectedItem: null,
      selectedItem2: null,
      guestCount: 0,
    };

    this.countries = [
      { name: "Dubai", code: "DB" },
      { name: "Montreal", code: "ML" },
      { name: "Manama", code: "MM" },
    ];

    this.onCountryChange = this.onCountryChange.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  componentDidMount() {
    this.setState({
      lazyItems: Array.from({ length: 100000 }),
      lazyLoading: false,
    });
  }

  onCountryChange(e) {
    this.setState({ selectedCountry: e.value });
  }
  incrementCount() {
    var count = this.state.guestCount + 1;
    this.setState({ guestCount: count });
  }
  decrementCount() {
    if (this.state.guestCount >= 1) {
      var count = this.state.guestCount - 1;
      this.setState({ guestCount: count });
    }
  }
  render() {
    return (
      <>
        <Navbar
          variant="light"
          bg="light"
          expand="lg"
          className="inputContainer"
          style={{ borderRadius: "40px", marginTop: "-40px" }}
        >
          <div className="p-fluid grid formgrid">
            <div
              style={{ marginLeft: "45px" }}
              className="field col-12 md:col-4"
            >
              &nbsp;&nbsp;
              <label htmlFor="multiplemonths">CITY</label>
              <Dropdown
                value={this.state.selectedCountry}
                options={this.countries}
                onChange={this.onCountryChange}
                optionLabel="name"
                filter
                showClear
                filterBy="name"
                placeholder="Select a Country"
              />{" "}
            </div>
          </div>
          &nbsp; &nbsp; |
          <div className="p-fluid grid formgrid">
            <div
              style={{ marginLeft: "45px" }}
              className="field col-12 md:col-4"
            >
              &nbsp;
              <label htmlFor="multiplemonths">DATES</label>
              <Calendar
                id="multiplemonths"
                value={this.state.date11}
                onChange={(e) => this.setState({ date11: e.value })}
                numberOfMonths={2}
                selectionMode="range"
                readOnlyInput
                showButtonBar
                placeholder="Select dates"
              />
            </div>
          </div>
          &nbsp; &nbsp;
          <div className="p-fluid grid formgrid">
            <div
              style={{ marginLeft: "55px" }}
              className="field col-12 md:col-3"
            >
              <label htmlFor="multiplemonths">
                &nbsp; GUEST <br />
                &nbsp;
                {this.state.guestCount === 0
                  ? " ADD GUEST "
                  : " " + this.state.guestCount + " " + "guest"}
                &nbsp;
              </label>

              <Button
                icon="pi pi-minus"
                className="p-button-rounded p-button-text"
                onClick={this.decrementCount}
              />
              <Button
                icon="pi pi-plus"
                className="p-button-rounded p-button-text"
                onClick={this.incrementCount}
              />
            </div>
          </div>
          &nbsp; &nbsp;
          <Button
            style={{ backgroundColor: "#75969f" }}
            label="Search"
            icon="pi pi-search"
          />
        </Navbar>
      </>
    );
  }
}
