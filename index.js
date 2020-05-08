'use strict';

const globalEmitter = require('./lib/events.js');
const pickupHandler = require('./lib/pickupHandler');

// This listens for the order to have been placed and calls the pickupHandler
globalEmitter.on('orderPlaced', pickupHandler);

//This triggers the order 
require('./lib/order.js');
