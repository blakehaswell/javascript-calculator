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

function isValidKey(equation, key) {
    var type = key.get('type');
    var value = key.get('value');
    if (type === 'clear' || (type === 'number' && value !== '.')) {
        return true;
    } else if (value === '.') {
        if (isEquationEmpty(equation) ||
                !isDecimalPlaceSinceLastOperator(equation)) {
            return true;
        }
    } else if (value === '-') {
        if (isEquationEmpty(equation) || equation.slice(-1) !== '-') {
            return true;
        }
    } else if (type === 'operator' || type === 'equals') {
        if (!isEquationEmpty(equation) && isLastCharNumber(equation)) {
            return true;
        }
    }
    return false;
}

function isEquationEmpty(equation) {
    return equation === '';
}

function isLastCharNumber(equation) {
    if (isEquationEmpty(equation)) return false;
    return !!equation.slice(-1).match(/[0-9]/);
}

function isDecimalPlaceSinceLastOperator(equation) {
    var numbers = equation.split(/[+|-|\xD7|\xF7]/);
    var lastNumber = numbers[numbers.length - 1];
    console.log('Last number:', lastNumber, lastNumber.indexOf('.'));
    return lastNumber.indexOf('.') !== -1;
}

function getResult(equation) {
    equation = equation.replace(/\xD7/g, '*').replace(/\xF7/g, '/');
    return eval(equation).toString();
}