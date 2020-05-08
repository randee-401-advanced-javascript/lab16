'use strict';

const deliveredHandler = (payload) => {
  console.log('Whoa, that was fast! Aim low and be pleasently surprised. Am I right?')
  console.log(payload);
}

module.exports = deliveredHandler;
