var Application = require('backbone.marionette').Application;
var Keypad = require('./keypad');

var calculator = module.exports = new Application();

calculator.addRegions({
    keypad: '#keypad'
});

calculator.addInitializer(function () {
    calculator.keypad.show(new Keypad());
});