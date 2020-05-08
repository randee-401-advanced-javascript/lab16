'use strict';

const inTransitHandler = require('./inTransitHandler.js');

const pickupHandler = (payload) => {
  console.log('Order has been placed and picked up for delivery.')
  console.log(payload);
  inTransitHandler(payload);
}

module.exports = pickupHandler;