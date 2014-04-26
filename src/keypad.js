var CollectionView = require('backbone.marionette').CollectionView;
var Collection = require('backbone').Collection;
var Key = require('./key');

module.exports = CollectionView.extend({

    className: 'keypad',

    itemView: Key,

    initialize: function () {
        this.collection = new Collection([
            { type: 'number', value: '7' },
            { type: 'number', value: '8' },
            { type: 'number', value: '9' },
            { type: 'operator', value: '+' },
            { type: 'number', value: '4' },
            { type: 'number', value: '5' },
            { type: 'number', value: '6' },
            { type: 'operator', value: '-' },
            { type: 'number', value: '1' },
            { type: 'number', value: '2' },
            { type: 'number', value: '3' },
            { type: 'operator', value: '×' },
            { type: 'number', value: '0' },
            { type: 'number', value: '.' },
            { type: 'equals', value: '=' },
            { type: 'operator', value: '÷' },
            { type: 'clear', value: 'C' }
        ]);
    },

    itemEvents: {
        'keyPress': function (event, item) {
            this.trigger('keyPress', item.model);
        }
    }

});