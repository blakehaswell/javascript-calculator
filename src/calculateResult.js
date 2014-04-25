module.exports = function (equation) {
    equation = equation.replace(/\xD7/g, '*').replace(/\xF7/g, '/');
    return eval(equation).toString();
}