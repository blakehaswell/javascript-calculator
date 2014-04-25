var Application = require('backbone.marionette').Application;

var calculator = module.exports = new Application();

calculator.addInitializer(function () {
    global.alert('Initialising!');
});