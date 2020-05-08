'use strict';

const inTransitHandler = require('./inTransitHandler.js');

// Handles the event when an order is placed and calls the intransit function 

const pickupHandler = (payload) => {
  // console.log('Order has been placed and picked up for delivery.')
  console.log(payload);
  inTransitHandler(payload);
}

// exports the pickupHandler to be called in index.js when an order is placed

module.exports = pickupHandler;