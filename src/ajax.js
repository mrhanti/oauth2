(function(exports, $) {
  if(typeof $ === undefined) {
    throw new Error('No jQuery');
  }

  var Ajax = (function() {

    var xhrSettings = {
      crossDomain: true
    }

    function post(url, data, fn) {
      console.log('POST:', fn, data);
      xhrSettings.url = url;
      xhrSettings.type = 'POST';
      xhrSettings.data = data;
      xhrSettings.dataType = 'json';
      xhrSettings.success = function() {
        fn.apply(this, arguments);
      }
      xhrSettings.error = function() {
        fn.apply(this, arguments);
      }

      $.ajax(xhrSettings);
    }

    return {
      post: post
    }
  })();

  exports.Ajax = Ajax;
})(window, jQuery);
