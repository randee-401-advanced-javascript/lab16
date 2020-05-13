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
    pickupHandler(payload)

    expect(consoleSpy).toHaveBeenCalledWith({
      name: 'Marta Mighty',
      order: 'Some really rad stuff.'
    });

  });

});

describe('test handler by emitting events', () => {

    it('calls handler on shout', () => {
      consoleSpy.mockClear();

      let payload = {
        name: 'Marta Mighty',
        order: 'Some really rad stuff.'
      };

      globalEmitter.on('orderPlaced', pickupHandler);
      globalEmitter.emit('orderPlaced', payload);
      expect(consoleSpy).toHaveBeenCalledWith(payload);
    });
});