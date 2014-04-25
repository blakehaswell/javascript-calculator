var ItemView = require('backbone.marionette').ItemView;
var Model = require('backbone').Model;

module.exports = ItemView.extend({

    tagName: 'input',

    attributes: {
        type: 'text',
        readonly: 'readonly'
    },

    template: function () {
        return '';
    },

    initialize: function () {
        this.model = new Model({ text: '' });
    },

    getText: function () {
        return this.model.get('text');
    },

    setText: function (value) {
        return this.model.set('text', value);
    },

    modelEvents: {
        'change:text': function () {
            this.$el.val(this.getText());
        }
    }

});