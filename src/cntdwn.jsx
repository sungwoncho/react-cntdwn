import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import milliSec from 'millisec';

const NOT_STARTED = 1;
const STARTED = 2;
const FINISHED = 3;

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: 0,
      status: NOT_STARTED
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.tick();
      this.setState({status: STARTED});

      this.timer = setInterval(() => {
        this.tick();
      }, this.props.interval);
    }, this.props.startDelay);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  calculateRemainingTime() {
    let now = moment().toDate();
    return moment(this.props.targetDate).diff(moment(now));
  }

  tick() {
    this.setState({remainingTime: this.calculateRemainingTime()});

    if (this.state.remainingTime <= 0) {
      this.setState({status: FINISHED});

      if (this.props.onFinished) {
        this.props.onFinished();
      }

      clearInterval(this.timer);
    }
  }

  renderRemainingTime() {
    let time = milliSec(this.state.remainingTime);
    let html = [];

    if (this.props.format.day) {
      html.push(
        <span className="react-cntdwn-day" key="day">
          {time.format(this.props.format.day)}&nbsp;
        </span>
      );
    }

    if (this.props.format.hour) {
      html.push(
        <span className="react-cntdwn-hour" key="hour">
          {time.format(this.props.format.hour)}&nbsp;
        </span>
      );
    }

    if (this.props.format.minute) {
      html.push(
        <span className="react-cntdwn-minute" key="minute">
          {time.format(this.props.format.minute)}&nbsp;
        </span>
      );
    }

    if (this.props.format.second) {
      html.push(
        <span className="react-cntdwn-second" key="second">
          {time.format(this.props.format.second)}
        </span>
      );
    }

    return html;
  }

  render() {
    if (this.state.status === NOT_STARTED) {
      return <span></span>;
    }
    return (
      <div className="react-cntdwn-timer">
        {this.renderRemainingTime()}
      </div>
    );
  }
}

Countdown.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  interval: PropTypes.number,
  startDelay: PropTypes.number,
  onFinished: PropTypes.func,
  format: PropTypes.object
};

Countdown.defaultProps = {
  interval: 1000,
  startDelay: 0,
  format: {
    hour: 'HH',
    minute: 'MM',
    second: 'SS'
  }
};

module.exports = Countdown;
