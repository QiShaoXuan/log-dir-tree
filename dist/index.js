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

var path = require("path");

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
    value: function parse(filepath) {
      var getStat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var realPath;

      try {
        realPath = fs.realpathSync(filepath);
      } catch (e) {
        return console.error(e);
      }

      return {
        name: filepath,
        children: this.getDirTree(filepath, getStat)
      };
    }
  }, {
    key: "log",
    value: function log(filepath) {
      logTree.log(this.parse(filepath, false));
    }
  }, {
    key: "getDirTree",
    value: function getDirTree(filepath) {
      var _this = this;

      var getStat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var children = fs.readdirSync(filepath);
      var arr = [];
      children.forEach(function (filename) {
        var pathNow = path.join(filepath, filename);
        var stat = fs.statSync(pathNow);
        var obj = {};

        if (stat.isDirectory()) {
          obj.name = filename;
          obj.children = _this.getDirTree(pathNow);
        }

        if (stat.isFile()) {
          obj.name = filename;
        }

        arr.push(getStat ? Object.assign(stat, obj) : obj);
      });
      return arr;
    }
  }]);

  return logDirTree;
}();

module.exports = new logDirTree();
//# sourceMappingURL=index.js.map
