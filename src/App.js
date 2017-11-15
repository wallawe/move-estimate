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
      phoneNo: '',
      storageRequired: 'no',
      storageDuration: 0
    };

    // this = {
    //   update: function(),
    //   state: {
    //     showStep1:
    //   }
    // }

    this.update = this.update.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.changeStep = this.changeStep.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      moveDate: date
    });
  }

  handleRadioChange(e) {
    console.log(e.target.value)
    this.setState({
      storageRequired: e.target.value
    });
  }

  update(e, field) {
    // the slider update function passes in the value as e instead of e.target.value, hence the next line
    const val = (e.target && e.target.value) ? e.target.value : e;
    this.setState({
      [field]: val,
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

    const currentStep = this.state.showStep1 ? 1 : 2;

    return (
      <div className="container">
        <div className="headlines">
          <h1>My Move Quote</h1>
          <h2>Quick, Easy, Free.</h2>
        </div>
        <div className="form">
          <header>
            <h3>Let's Get Started! {this.state.storageDuration}</h3>
            <div>
              <span className="progress">step {currentStep === 1 ? '1' : '2'} of 2</span>
              <span className={`circle ${currentStep === 1 && 'filled'}`}></span>
              <span className={`circle ${currentStep === 2 && 'filled'}`}></span>
            </div>
          </header>
          <main>
          {
            this.state.showStep1 &&
            <MoveDetail
              {...this.state}
              changeStep={this.changeStep}
              handleRadioChange={this.handleRadioChange}
              update={this.update}
              handleDateChange={this.handleDateChange} />
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
          </main>
        </div>
      </div>
    );
  };
};

export default App;
