'use strict';

const deliveredHandler = require('./deliveredHandler.js');

const inTransitHandler = (payload) => {
  console.log('Order is now in transit. Due to unusual circumstances in the world delivery time could be between 2 days and 7 weeks. We thank you in advance for your understanding in our complete lack of ability to tell you more.');
  console.log(payload);
  deliveredHandler(payload);
}

module.exports = inTransitHandler; 