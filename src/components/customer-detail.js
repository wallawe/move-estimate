import React, { Component } from 'react';


class CustomerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: ""
    };

    this.update = this.update.bind(this)
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
        <div className="row justify-content-center">
          <div className="col-4">
            <label>First Name </label>
            <input type="text" className="full-width" onChange={(e) => this.update(e, 'firstName')}/>
          </div>
          <div className="col-4">
            <label>Last Name: </label>
            <input type="text" className="full-width" onChange={(e) => this.update(e, 'lastName')}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <label>Email Addresss: </label>
            <input type="text" className="full-width" onChange={(e) => this.update(e, 'email')}/>
          </div>
          <div className="col-4">
            <label>Phone: </label>
            <input type="number" className="full-width" onChange={(e) => this.update(e, 'phoneNo')}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <button className="submit-btn" onClick={this.submitForm.bind(this)}>
              Calculate Estimate
            </button>
            <h5>{this.state.phone}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerDetail;
