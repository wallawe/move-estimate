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

    return (
      <div className="container">
        <h1 className="headline">Moving Cost Estimate</h1>
        {
          this.state.showStep1 && <MoveDetail changeStep={this.changeStep} />
        }
        {
          this.state.showStep2 && <CustomerDetail changeStep={this.changeStep} />
        }
      </div>
    );
  };
};

export default App;
