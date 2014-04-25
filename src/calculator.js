var Application = require('backbone.marionette').Application;
var Display = require('./display');
var Keypad = require('./keypad');
var isValidKey = require('./isValidKey');

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
    var equation = display.getText();
    if (isValidKey(equation, key)) {
        switch (key.get('type')) {
        case 'clear':
            equation = '';
            break;
        case 'equals':
            equation = getResult(equation);
            break;
        default:
            equation += key.get('value');
        }
    }
    display.setText(equation);
});

function getResult(equation) {
    equation = equation.replace(/\xD7/g, '*').replace(/\xF7/g, '/');
    return eval(equation).toString();
}