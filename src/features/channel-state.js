var debug = require('../helpers/debug');
var template = require('../templates/channel-state');
var chatHelpers = require('../chat/helpers');

module.exports = function(user, $event) {
    return;

    $('.chat-container .chat-header').append(template());
}