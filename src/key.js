var ItemView = require('backbone.marionette').ItemView;

module.exports = ItemView.extend({

    tagName: 'button',

    attributes: {
        type: 'button'
    },

    template: function (key) {
        return key.value;
    }

});