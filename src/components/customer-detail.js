import React, { Component } from 'react';
import InputMask from 'react-input-mask';

class CustomerDetail extends Component {


  formIsInvalid() {
    const { email, fullName } = this.props;
    // using toString below because you can't check 'length' on a number/integer
    // returns a boolean (true/false) to disable or enable the 'continue' button
    return !email.length || !fullName.length || email.indexOf('@') < 0;
  }

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
            <InputMask mask="(999) 999-9999" className="input-field" onChange={(e) => this.props.update(e, 'phoneNo')} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Move distance: {this.props.moveDistance}</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <button className="btn pull-right" onClick={this.props.submitForm.bind(this)} disabled={this.formIsInvalid()}>
              Get My Instant Quote
            </button>
            <button className="btn btn-secondary" onClick={() => this.props.changeStep(1,2)}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerDetail;
