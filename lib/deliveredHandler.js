'use strict';

//The deliveredHandler that lets everyone know the order has been completed and delivered.
const deliveredHandler = (payload) => {
  // console.log('Whoa, that was fast! Aim low and be pleasently surprised. Am I right?')
  console.log(payload);
}

// exporting the handler to be used in the inTransitHandler
module.exports = deliveredHandler;
