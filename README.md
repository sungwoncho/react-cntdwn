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
           onFinished={handleFinish} />
```

## Props

### targetDate

The datetime to count until.

* type: `Date`
* required

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

## Contribution guide

The source code for the component is found in `src/cntdwn.jsx`. It is using
es6 and is compiled using [babel](https://github.com/babel/babel) before being
published to npm.

You may run `npm run compile` at any time to compile `src/cntdwn.jsx` to
`dist/cntdwn.jsx`. But most likely you won't need to, because it is run
automatically before `npm publish`.

## License

MIT
