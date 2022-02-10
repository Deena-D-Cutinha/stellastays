import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import ReactDOM from "react-dom";

import React, { Component } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { addLocale } from "primereact/api";

export class CalendarDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date11: null,
      date12: null,
    };
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="p-fluid grid formgrid">
            <div className="field col-8 md:col-2">
              <label htmlFor="multiplemonths">Multiple Months</label>
              <Calendar
                id="multiplemonths"
                value={this.state.date11}
                onChange={(e) => this.setState({ date11: e.value })}
                numberOfMonths={2}
                showButtonBar
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CalendarDemo />, rootElement);
