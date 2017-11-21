import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
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
      moveSize: '',
      moveDate: moment(),
      fullName: '',
      email: '',
      phoneNo: '',
      storageRequired: 'no',
      storageDuration: 6
    };

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
    });
  }


  localFunc(requiresStorage, sqft, incrementer) {
    if (!sqft || !incrementer) {
      console.log('Must provide all params');
      return;
    }

    requiresStorage = requiresStorage === 'yes' ? true : false;

    if (requiresStorage) {

    } else {
      const baseCost = 3150;
      const multiplier = (sqft / 500) - 2;
      const result = multiplier * incrementer + baseCost;
      console.log(result)
    }
  }

  submitForm() {
    let requestInfo = {...this.state};

    delete requestInfo.showStep1;
    delete requestInfo.showStep2;

    if (requestInfo.storageRequired === 'no') {
        requestInfo.storageDuration = 0;
    }

    const { storageRequired, moveSize } = requestInfo;

    this.localFunc(storageRequired, moveSize, 1400);
    // const options = {
    //   url: 'http://www.findlayluxurymoving.com/quotes/new',
    //   method: 'POST', // patch/put (update)
    //   params: requestInfo
    // }
    //
    // axios
    //   .request(options)
    //   .then((res) => {
    //     // local storage
    //     // local no storage
    //     // long distance storage
    //     // long distance no storage
    //
    //     //
    //     console.log(res);
        //
        // if (distanceBetweenZips < 500) {
        //   if (storageRequired) {
        //     localFunc(true,)
        //   } else {
        //     localFunc(false, sqft, 1400)
        //   }
        // } else {
        //   if (storageRequired) {
        //
        //   } else {
        //
        //   }
        // }
        // make calculation based on whether or not it's interstate
        // storage required?
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  }

  render() {
    const { showStep1, showStep2 } = this.state;
    const introText = showStep1 ? 'Let\'s Get Started' : 'Just One More Thing...';

    return (
      <div className="container">
        <div className="headlines">
          <h1>My Move Quote</h1>
          <h2>Quick, Easy, Free.</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-12">
            <div className="form">
              <header>
                <h3>{introText}</h3>
                <div>
                  <span className="progress">step {showStep1 ? '1' : '2'} of 2</span>
                  <span className={`circle ${showStep1 && 'filled'}`}></span>
                  <span className={`circle ${showStep2 && 'filled'}`}></span>
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
                  {...this.state}
                  changeStep={this.changeStep}
                  update={this.update}
                  submitForm={this.submitForm} />
              }
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
