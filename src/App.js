import React, { Component } from 'react';
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
    };

    this.changeStep = this.changeStep.bind(this);
  }

  changeStep(toStep, fromStep) {
    this.setState({
      [`showStep${toStep}`]: true,
      [`showStep${fromStep}`]: false,
    })
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
            <h3>Let's Get Started!</h3>
            <div>
              <span className="progress">step {currentStep === 1 ? '1' : '2'} of 2</span>
              <span className={`circle ${currentStep === 1 && 'filled'}`}></span>
              <span className={`circle ${currentStep === 2 && 'filled'}`}></span>
            </div>
          </header>
          <main>
            { this.state.showStep1 && <MoveDetail changeStep={this.changeStep} /> }
            { this.state.showStep2 && <CustomerDetail changeStep={this.changeStep} /> }
          </main>
        </div>
      </div>
    );
  };
};

export default App;
