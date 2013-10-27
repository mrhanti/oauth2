(function(exports, root) {
  var Storage = (function() {

    if(!root.localStorage) {
      throw new Error("No localStorage");
    }

    var STORAGE_KEY = "myDriver";

    var storage = root.localStorage;

    function set(obj) {
      storage.setItem(STORAGE_KEY, obj);
    }

    function get() {

    }

    return {
      set: set,
      get: get
    }
  })();

  exports.Storage = Storage;
})(window.OAuth2, window);
