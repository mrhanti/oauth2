(function(exports) {
  var Helpers = {

    // underscore.js #each method, check http://underscorejs.org/#each

    each: function(obj, iterator, context) {
      var breaker = {};
      /* jshint eqnull: true */
      if (obj == null) return;
      if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (iterator.call(context, obj[i], i, obj) === breaker) return;
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (iterator.call(context, obj[key], key, obj) === breaker) return;
          }
        }
      }
    },

    extend: function(obj) {
      each(slice.call(arguments, 1), function(source) {
        if (source) {
          for (var prop in source) {
            obj[prop] = source[prop];
          }
        }
      });

      return obj;
    }
  }

  exports.Helpers = Helpers;
})(window.OAuth2);
