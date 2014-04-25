module.exports = function (equation, key) {
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
    return lastNumber.indexOf('.') !== -1;
}