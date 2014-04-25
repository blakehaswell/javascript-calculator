var CollectionView = require('backbone.marionette').CollectionView;
var Collection = require('backbone').Collection;
var Key = require('./key');

module.exports = CollectionView.extend({

    itemView: Key,

    initialize: function () {
        this.collection = new Collection([
            { type: 'number', value: '0' },
            { type: 'number', value: '1' },
            { type: 'number', value: '2' },
            { type: 'number', value: '3' },
            { type: 'number', value: '4' },
            { type: 'number', value: '5' },
            { type: 'number', value: '6' },
            { type: 'number', value: '7' },
            { type: 'number', value: '8' },
            { type: 'number', value: '9' },
            { type: 'number', value: '.' },
            { type: 'operator', value: '+' },
            { type: 'operator', value: '-' },
            { type: 'operator', value: '\xD7' },
            { type: 'operator', value: '\xF7' },
            { type: 'equals', value: '=' },
            { type: 'clear', value: 'C' }
        ]);
    }

});