import React, { Component } from 'react';
import moment from 'moment';
import MoveDetail from './components/move-detail';
import CustomerDetail from './components/customer-detail';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showStep1: true,
      showStep2: false,
      fromZip: '',
      toZip: '',
      moveSize: 'studio',
      moveDate: moment(),
      fullName: '',
      email: '',
      phoneNo: ''
    };

    // this = {
    //   update: function(),
    //   state: {
    //     showStep1:
    //   }
    // }

    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeStep = this.changeStep.bind(this);
    this.submitForm = this.submitForm.bind(this);
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

  changeStep(toStep, fromStep) {
    this.setState({
      [`showStep${toStep}`]: true,
      [`showStep${fromStep}`]: false,
    })
  }

  submitForm() {
    console.log(this.state)
  }

  render() {

    return (
      <div className="container">
        <h1 className="headline">Moving Cost Estimate</h1>
        {
          this.state.showStep1 &&
          <MoveDetail
            changeStep={this.changeStep}
            fromZip={this.state.fromZip}
            toZip={this.state.toZip}
            moveSize={this.state.moveSize}
            moveDate={this.state.moveDate}
            update={this.update}
            handleChange={this.handleChange} />
        }
        {
          this.state.showStep2 &&
          <CustomerDetail
            changeStep={this.changeStep}
            update={this.update}
            submitForm={this.submitForm}
            fullName={this.state.fullName}
            email={this.state.email}
            phoneNo={this.state.phoneNo} />
        }
      </div>
    );
  };
};

export default App;
