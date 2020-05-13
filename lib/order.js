'use strict';

const globalEmitter = require('./events.js');
const faker = require('faker');

// This sets creates an order every 5 seconds
setInterval(() => {
  // here we are creating garbage data to pass as a payload
  let name = faker.name.firstName() + ' ' + faker.name.lastName();
  let store = faker.company.companyName();
  let address = faker.address.streetAddress() + ' ' + faker.address.city();
  let orderNumber = faker.random.number();
  let product = faker.commerce.product();

  // Here we are creating the event itself and naming it orderPlaced, which is what is being listened for on index, and passing the garbage data from above 
  globalEmitter.emit('orderPlaced', { name, store, address, orderNumber, product });
}, 5000)


