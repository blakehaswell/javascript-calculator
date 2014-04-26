var ItemView = require('backbone.marionette').ItemView;

module.exports = ItemView.extend({

    tagName: 'button',

    className: function () {
        return 'key key--' + this.model.get('type');
    },

    attributes: {
        type: 'button'
    },

    template: function (key) {
        return key.value;
    },

    events: {
        'click': function () {
            this.$el.blur();
            this.trigger('keyPress');
        }
    }

});