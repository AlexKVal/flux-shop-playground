var assign = require('react/lib/Object.assign');

var _callbacks = [];

var Dispatcher = function() {};
Dispatcher.prototype = assign({}, Dispatcher.prototype, {

  /**
   * Register a Store's callback so that it may be invoked by an action.
   * @param {function} callback The callback to be registered.
   * @return {number} The index of the callback within the _callbacks array.
   */
  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
  },

  /**
   * Dispatch to callbacks.
   * @param  {object} payload The data from the action.
   */
  dispatch: function(payload) {
    _callbacks.forEach(function(callback) { callback(payload); });
  }
});

module.exports = Dispatcher;
