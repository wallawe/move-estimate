import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import 'react-datepicker/dist/react-datepicker.css';

const Handle = Slider.Handle;
const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} months`}
      visible={true}
      placement="bottom"
      key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const handleSize = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} SQFT`}
      visible={true}
      placement="bottom"
      key={index}>
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class MoveDetail extends Component {

  formIsInvalid() {
    return this.props.fromZip.toString().length < 5;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label className="label">Moving from</label>
            <input
              type="number"
              placeholder="Zip Code"
              value={this.props.fromZip}
              className="input-field"
              onChange={(e) => this.props.update(e, 'fromZip')}
            />
          </div>
          <div className="col-6">
            <label className="label">Moving to</label>
            <input
              type="number"
              className="input-field"
              placeholder="Zip Code (optional)"
              value={this.props.toZip}
              onChange={(e) => this.props.update(e, 'toZip')}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="label label-question">Will you need storage in the interim?</label>
            <label className="label label-radio">
              <input type="radio"
                     value="no"
                     checked={this.props.storageRequired === 'no'}
                     onChange={(e) => this.props.handleRadioChange(e) } />
              No
            </label>
            <label className="label label-radio">
              <input type="radio"
                     value="yes"
                     checked={this.props.storageRequired === 'yes'}
                     onChange={(e) => this.props.handleRadioChange(e) } />
              Yes
            </label>
          </div>
          <div className="col-6">
            {
              this.props.storageRequired === 'yes' &&
              <div>
                <label className="label label-question">How long?</label>
                <Slider
                  min={0}
                  max={36}
                  defaultValue={this.props.storageDuration}
                  handle={handle}
                  onChange={(e) => this.props.update(e, 'storageDuration')} />
              </div>
            }
          </div>
        </div>
        <div className="row">
        <div className="col-6">
          <label className="label">Move Date</label>
          <DatePicker
            className="input-field"
            minDate={moment()}
            selected={this.props.moveDate}
            onChange={this.props.handleDateChange}
          />
        </div>
          <div className="col-6">
            <label className="label label-question">How big is your move?</label>
            <Slider
              min={1000}
              max={10000}
              defaultValue={this.props.moveSize}
              step={500}
              handle={handleSize}
              onChange={(e) => this.props.update(e, 'moveSize')} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button className="btn pull-right" onClick={() => this.props.changeStep(2,1)} disabled={this.formIsInvalid()}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MoveDetail;
