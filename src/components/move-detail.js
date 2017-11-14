import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class MoveDetail extends Component {

   // handleChange(date) {
   //   this.setState({
   //     moveDate: date
   //   });
   // }
   //
   // update(e, field) {
   //   props.setState({
   //     [field]: e.target.value,
   //   })
   // }

  formIsInvalid() {
    // using toString below because you can't check 'length' on a number/integer
    // returns a boolean (true/false) to disable or enable the 'continue' button
    return this.props.fromZip.toString().length < 5;
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <label>Moving from: </label>
            <input type="number" placeholder="Zip Code" className="full-width" onChange={(e) => this.props.update(e, 'fromZip')}/>
          </div>
          <div className="col-4">
            <label>Moving to: </label>
            <input type="number" className="full-width" placeholder="Zip Code (optional)" onChange={(e) => this.props.update(e, 'toZip')}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <label>Move Size: </label>
            <select className="move-size full-width" value={this.props.moveSize} onChange={(e) => this.props.update(e, 'moveSize')}>
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
              className="full-width"
              minDate={moment()}
              selected={this.props.moveDate}
              onChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <button className="submit-btn" onClick={() => this.props.changeStep(2,1)} disabled={this.formIsInvalid()}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MoveDetail;
