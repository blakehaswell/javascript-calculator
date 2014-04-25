var ItemView = require('backbone.marionette').ItemView;

module.exports = ItemView.extend({

    tagName: 'input',

    attributes: {
        type: 'text',
        readonly: 'readonly'
    },

    template: function () {
        return '';
    }

});