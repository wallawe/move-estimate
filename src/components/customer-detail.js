import React, { Component } from 'react';


class CustomerDetail extends Component {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <label>Full Name </label>
            <input type="text" className="full-width" onChange={(e) => this.props.update(e, 'fullName')}/>
          </div>
          <div className="col-4">
            <label>Email Addresss: </label>
            <input type="text" className="full-width" onChange={(e) => this.props.update(e, 'email')}/>
          </div>
        </div>
        <div className="row">
          <div className="col-4 offset-2">
            <label>Phone: </label>
            <input type="number" className="full-width" onChange={(e) => this.props.update(e, 'phoneNo')}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <button className="submit-btn" onClick={this.props.submitForm.bind(this)}>
              Calculate Estimate
            </button>
            <button className="submit-btn" onClick={() => this.props.changeStep(1,2)}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerDetail;
