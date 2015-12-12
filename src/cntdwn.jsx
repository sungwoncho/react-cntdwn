import React, {Component, PropTypes} from 'react';
import moment from 'moment';

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

  render() {
    if (this.state.status === NOT_STARTED) {
      return <span></span>;
    }
    return (
      <div>
        {this.state.remainingTime}
      </div>
    );
  }
}

Countdown.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
  interval: PropTypes.number,
  startDelay: PropTypes.number,
  onFinished: PropTypes.func
};

Countdown.defaultProps = {
  interval: 1000,
  startDelay: 0
};

module.exports = Countdown;
