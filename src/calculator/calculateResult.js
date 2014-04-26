module.exports = function (equation) {
    equation = equation.replace(/×/g, '*').replace(/÷/g, '/');
    return eval(equation).toString();
}