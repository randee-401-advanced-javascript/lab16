'use strict';

const globalEmitter = require('./events.js');
const faker = require('faker');

setInterval(() => {
  let name = faker.name.firstName() + ' ' + faker.name.lastName();
  let store = faker.company.companyName();
  let address = faker.address.streetAddress() + ' ' + faker.address.city();
  let orderNumber = faker.random.number();
  let product = faker.commerce.product();

  globalEmitter.emit('orderPlaced', { name, store, address, orderNumber, product });
}, 10000)
