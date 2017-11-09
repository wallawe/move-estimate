import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromZip: "",
      toZip: "",
      moveSize: "1-bedroom",
      moveDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this)
  }

  handleChange(date) {
    this.setState({
      moveDate: date
    });
  }

  update(e, field) {
    this.setState({
      [field]: e.target.value
    })
  }

  submitForm() {
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <h1 className="headline">Moving Cost Estimate</h1>
        <div className="row justify-content-center">
          <div className="col-4">
            <label>Moving from: </label>
            <input type="number" className="full-width" onChange={(e) => this.update(e, 'fromZip')}/>
          </div>
          <div className="col-4">
            <label>Moving to: </label>
            <input type="number" className="full-width" onChange={(e) => this.update(e, 'toZip')}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <label>Move Size: </label>
            <select className="move-size full-width" value={this.state.moveSize}>
              <option value="studio">Studio</option>
              <option value="1-bedroom">1 Bedroom</option>
              <option value="2-bedroom">2 Bedroom</option>
              <option value="3-bedroom">3 Bedroom</option>
              <option value="4-bedrooms">4+ Bedrooms</option>
            </select>
          </div>
          <div className="col-4">
            <label>Move Date: </label>
            <DatePicker
              selected={this.state.moveDate}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <button className="submit-btn" onClick={this.submitForm.bind(this)}>
              Calculate Estimate
            </button>
            <h1>{this.state.fromZip}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
