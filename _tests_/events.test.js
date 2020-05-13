'use strict';

const globalEmitter = require('../lib/events');
const pickupHandler = require('../lib/pickupHandler');
const inTransitHandler = require('../lib/inTransitHandler');
const deliveredHandler = require('../lib/deliveredHandler');

let consoleSpy = jest.spyOn(console, 'log');

describe('test the pickupHandler independently', () => {
  it('pickupHandler works', () => {
    consoleSpy.mockClear();

    let payload = {
      name: 'Marta Mighty',
      order: 'Some really rad stuff.'
    }

    expect(pickupHandler(payload)).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalled();
  })


})