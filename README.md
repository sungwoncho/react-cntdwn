# react-cntdwn

A simple React component that displays a countdown timer which is customizable.

## Installation

    npm install --save react-cntdwn

## Usage example

Below is an example of how this component might be used.

```js
var Countdown = require('react-cntdwn');
var handleFinish = function () {
  console.log('Skynet has become self-aware!');
}

<Countdown targetDate={new Date('August 29, 1997')}
           startDelay={2000}
           interval={1000}
           timeSeparator={':'}
           leadingZero
           onFinished={handleFinish} />
```

## Props

### targetDate

The datetime to count until.

* type: `Date`
* required

### [format]

The format used to display the remaining time. It is an object with keys `day`,
`hour`, `minute`, and `second`.

* type: `Object`
* optional
* default:

```js
{
  hour: 'HH',
  minute: 'MM',
  second: 'SS'
}
```

The component uses [millisec](https://github.com/sungwoncho/millisec) npm
module to convert the remaining time into human a readable format. You can use
any format type supported by `millisec` to customize the output to a great
degree.

Find all available formats [here](https://github.com/sungwoncho/millisec#formatoutput).


### [startDelay]

The time in millisecond until the countdown begins.

* type: `Number`
* optional
* default: `0`

### [interval]

The interval in millisecond for each tick in countdown.

* type: `Number`
* optional
* default: `1000`

### [onFinished]

The callback function to be called when the countdown ends.

* type: `Function`
* optional

### [timeSeparator]

The string used to separate the different parts of the time

* type: `String`
* optional
* default: `&nbsp;`
 
### [leadingZero]

Prepends a leading zero onto the time elements for consistant width

* type: `Bool`
* optional
* default: 
 


## Contribution guide

The source code for the component is found in `src/cntdwn.jsx`. It is using
es6 and is compiled using [babel](https://github.com/babel/babel) before being
published to npm.

You may run `npm run compile` at any time to compile `src/cntdwn.jsx` to
`dist/cntdwn.jsx`. But most likely you won't need to, because it is run
automatically before `npm publish`.

## License

MIT
