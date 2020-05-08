'use strict';

const globalEmitter = require('./lib/events.js');
const pickupHandler = require('./lib/pickupHandler');


globalEmitter.on('orderPlaced', pickupHandler);

require('./lib/order.js');
