import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class MoveDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromZip: '',
      toZip: '',
      moveSize: 'studio',
      moveDate: moment()
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
      [field]: e.target.value,
    })
  }

  formIsInvalid() {
    // using toString below because you can't check 'length' on a number/integer
    // returns a boolean (true/false) to disable or enable the 'continue' button
    return this.state.fromZip.toString().length < 5;
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <label className="label">Moving from: </label>
            <input type="number" placeholder="Zip Code" className="input-field" onChange={(e) => this.update(e, 'fromZip')}/>
          </div>
          <div className="col-4">
            <label className="label">Moving to: </label>
            <input type="number" className="input-field" placeholder="Zip Code (optional)" onChange={(e) => this.update(e, 'toZip')}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <label className="label">Move Size: </label>
            <select className="dropdown" value={this.state.moveSize} onChange={(e) => this.update(e, 'moveSize')}>
              <option value="studio">Studio</option>
              <option value="1-bedroom">1 Bedroom</option>
              <option value="2-bedroom">2 Bedroom</option>
              <option value="3-bedroom">3 Bedroom</option>
              <option value="4-bedrooms">4+ Bedrooms</option>
            </select>
          </div>
          <div className="col-4">
            <label className="label">Move Date: </label>
            <DatePicker
              className="input-field"
              minDate={moment()}
              selected={this.state.moveDate}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <button className="btn" onClick={() => this.props.changeStep(2,1)} disabled={this.formIsInvalid()}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MoveDetail;
