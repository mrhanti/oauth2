;(function(exports) {
  var


  OAuth2 = {},


  slice = Array.prototype.slice,
  shift = Array.prototype.shift;

  has   = Object.prototype.hasOwnProperty;

  OAuth2.Client = (function() {
    var _options;

    function Client(options) {
      if(!options.grant_type) {
        throw new Error('Missing grant_type');
      }

      if(!options.username && !options.password) {
        throw new Error('Missing username and password');
      }

      if(!options.client_id) {
        throw new Error('Missing client_id');
      }

      if(!options.client_secret) {
        throw new Error('Missing client_secret');
      }

      _options = options;
    }

    Client.prototype.getGrantType = function() {
      return _options.grant_type;
    }

    Client.prototype.getOptions = function() {
      return _options || {};
    }

    Client.prototype.connect = function(fn) {
      var

      client = this,

      options = client.getOptions();

      Ajax.post('http://localhost:3000/oauth/token', options, function() {
        if(fn) {
          fn.apply(this, arguments);
        }
      });
    }

    return Client;
  })();

  exports.OAuth2 = OAuth2;
})(window);
