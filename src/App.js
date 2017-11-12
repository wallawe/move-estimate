import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import MoveDetail from './components/move-detail';
import CustomerDetail from './components/customer-detail';

import 'react-datepicker/dist/react-datepicker.css';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showStepOne: true,
      showStepTwo: false,
    };
  }

  render() {
    const { showStepOne } = this.state;
    return (
      <div className="container">
        <h1 className="headline">Moving Cost Estimate</h1>
        {
          this.state.showStepOne && <MoveDetail />
        }
        {
          this.state.showStepTwo && <CustomerDetail />
        }
      </div>
    );
  };
};

export default App;
