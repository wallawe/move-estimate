import React, { Component } from 'react';


class CustomerDetail extends Component {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <label className="label">Full Name</label>
            <input type="text" className="input-field" onChange={(e) => this.props.update(e, 'fullName')}/>
          </div>
          <div className="col-6">
            <label className="label">Email Addresss</label>
            <input type="text" className="input-field" onChange={(e) => this.props.update(e, 'email')}/>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="label">Phone</label>
            <input type="number" className="input-field" onChange={(e) => this.props.update(e, 'phoneNo')}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <button className="btn pull-right" onClick={this.props.submitForm.bind(this)}>
              Calculate Estimate
            </button>
            <button className="btn" onClick={() => this.props.changeStep(1,2)}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerDetail;
