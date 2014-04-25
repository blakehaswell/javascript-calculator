var Application = require('backbone.marionette').Application;
var Display = require('./display');
var Keypad = require('./keypad');

var calculator = module.exports = new Application();

calculator.addRegions({
    display: '#display',
    keypad: '#keypad'
});

calculator.addInitializer(function () {
    calculator.display.show(new Display());
    calculator.keypad.show(new Keypad());
});