'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var fs = require('fs');

var logTree = require("console-log-tree");

var logDirTree =
/*#__PURE__*/
function () {
  function logDirTree() {
    _classCallCheck(this, logDirTree);

    this.setting = {};
  }

  _createClass(logDirTree, [{
    key: "parse",
    value: function parse(path) {
      var realPath = this.getRealPath(path);
      fs.readdirSync(path);
    }
  }, {
    key: "getRealPath",
    value: function getRealPath(path) {
      try {
        return fs.realpathSync(path);
      } catch (e) {
        return e;
      }
    }
  }]);

  return logDirTree;
}();

module.exports = new logDirTree();
//# sourceMappingURL=index.js.map
