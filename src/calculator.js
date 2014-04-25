var Application = require('backbone.marionette').Application;
var Display = require('./display');
var Keypad = require('./keypad');

var calculator = module.exports = new Application();
var display = new Display();
var keypad = new Keypad();

calculator.addInitializer(function () {
    calculator.addRegions({
        display: '#display',
        keypad: '#keypad'
    });
    calculator.display.show(display);
    calculator.keypad.show(keypad);
});

keypad.on('keyPress', function (key) {
    global.alert('Key press! ' + key.get('value'));
});