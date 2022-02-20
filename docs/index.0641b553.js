// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var _createPin = require("./createPin");
_createPin.getPins();

},{"./createPin":"75BQt"}],"75BQt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pins", ()=>pins
);
// let arr = [
//   {
//     image:
//       "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
//     avatar:
//       "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
//     description: "lotre jndni d",
//     id: 1,
//   },
//   {
//     image:
//       "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//     avatar:
//       "https://media.istockphoto.com/photos/this-vacation-is-just-what-we-needed-picture-id639579050?b=1&k=20&m=639579050&s=170667a&w=0&h=eXDg8mhdvjn5jBxd5g3c1tt6D_ts9sVjtpF-FUBTq34=",
//     description: "fhjsij djoijojon",
//     id: 2,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 3,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 4,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 5,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 6,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 7,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 8,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 9,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 10,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 11,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 12,
//   },
//   {
//     image:
//       "https://a.storyblok.com/f/89243/1050x700/b9aaad5c52/photo-1591035897819-f4bdf739f446.webp",
//     avatar:
//       "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
//     description: "fowjoakwp[fp[",
//     id: 13,
//   },
// ];
parcelHelpers.export(exports, "getPins", ()=>getPins
);
parcelHelpers.export(exports, "createPin", ()=>createPin
);
let pins = [];
function getPins() {
    fetch("https://62027eb74d21c200170b9753.mockapi.io/pin").then((response)=>response.json()
    ).then((data)=>{
        findPins(data);
        pins = data;
        data.forEach((item)=>{
            createPin(item);
        // console.log(item);
        });
    }); // });
}
function createPin(pin) {
    const wrapper = document.querySelector(".pinsWrapper");
    const pinContainer = document.createElement("div");
    pinContainer.classList.add("pinContainer");
    pinContainer.setAttribute("id", `pin-${pin.id}`);
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");
    const pinImg = new Image();
    pinImg.classList.add("pinImg");
    const desWraper = document.createElement("div");
    desWraper.classList.add("description__wraper");
    const avatar = new Image();
    avatar.classList.add("avatar");
    const description = document.createElement("p");
    description.classList.add("description");
    const imgButtonSave = document.createElement("button");
    imgButtonSave.classList.add("img__button", "img__save");
    const imgButtonHide = document.createElement("button");
    imgButtonHide.classList.add("img__button", "img__hide");
    const imgButtonComplain = document.createElement("button");
    imgButtonComplain.classList.add("img__button", "img__complain");
    const pinShadow = document.createElement("div");
    pinShadow.classList.add("img__shadow");
    wrapper.append(pinContainer);
    pinContainer.append(imgContainer);
    imgContainer.append(pinImg);
    imgContainer.append(pinShadow);
    pinShadow.append(imgButtonSave);
    pinShadow.append(imgButtonHide);
    pinShadow.append(imgButtonComplain);
    pinContainer.append(desWraper);
    desWraper.append(avatar);
    desWraper.append(description);
    pinImg.src = pin.image;
    avatar.src = pin.avatar;
    description.innerText = pin.description;
    imgButtonSave.innerText = "Сохранить";
    imgButtonHide.innerText = "Скрыть пин со страницы";
    imgButtonComplain.innerText = "Пожаловаться";
    const size = [
        "small",
        "medium",
        "large"
    ];
    switch(size[Math.round(Math.random() * 2)]){
        case "small":
            imgContainer.classList.add("imgContainer__small");
            pinShadow.classList.add("img__shadow-small");
            pinContainer.classList.add("pinContainer-small");
            break;
        case "medium":
            imgContainer.classList.add("imgContainer__medium");
            pinShadow.classList.add("imgContainer__medium");
            pinContainer.classList.add("pinContainer-medium");
            break;
        case "large":
            imgContainer.classList.add("imgContainer__large");
            pinShadow.classList.add("img__shadow-large");
            pinContainer.classList.add("pinContainer-large");
            break;
    }
    hideElement(imgButtonHide, pin.id);
    openModalComplain(imgButtonComplain);
    closeModalComplain();
    sendModalComplain();
    openModalSave(imgButtonSave, pin.id);
}
function hideElement(hideButton, pinId) {
    hideButton.addEventListener("click", ()=>{
        document.getElementById(`pin-${pinId}`).classList.add("hideElement");
    });
}
function openModalComplain(imgButtonComplain) {
    const modal = document.querySelector(".modal");
    imgButtonComplain.addEventListener("click", ()=>{
        modal.classList.remove("modal-disable");
        modal.classList.add("modal-active");
        document.body.classList.add("body__notScroll");
    });
}
function closeModalComplain() {
    const closeComplainButton = document.querySelector(".modal__delay");
    const modal = document.querySelector(".modal");
    closeComplainButton.addEventListener("click", ()=>{
        modal.classList.remove("modal-active");
        modal.classList.add("modal-disable");
        document.body.classList.remove("body__notScroll");
    });
}
function sendModalComplain() {
    const sendComplainButton = document.querySelector(".modal__send");
    const modal = document.querySelector(".modal");
    sendComplainButton.addEventListener("click", ()=>{
        modal.classList.remove("modal-active");
        modal.classList.add("modal-disable");
        document.body.classList.remove("body__notScroll");
    });
}
function findPins(pin) {
    const input = document.querySelector(".header__find");
    const pinsWrapper = document.querySelector(".pinsWrapper");
    input.addEventListener("input", (event)=>{
        let newData = [];
        let value = event.target.value;
        newData = pin.filter((el)=>el.description.includes(value)
        );
        console.log(newData);
        pinsWrapper.innerHTML = "";
        newData.forEach((el)=>{
            createPin(el);
        });
    });
}
function openModalSave(imgButtonSave, pinId) {
    const saveModal = document.querySelector(".saveModal");
    const saveModalWindow = document.querySelector(".saveModal__window");
    imgButtonSave.addEventListener("click", ()=>{
        saveModalWindow.innerHTML = "";
        saveModal.classList.remove("modal-disable");
        saveModal.classList.add("modal-active");
        document.body.classList.add("body__notScroll");
        addContentToModalSave(pinId);
    });
}
function addContentToModalSave(pinId) {
    const saveModalWindow = document.querySelector(".saveModal__window");
    saveModalWindow.innerHTML = "";
    const container = document.createElement("div");
    container.classList.add("title__container");
    const saveModalTitle = document.createElement("h3");
    saveModalTitle.classList.add("saveModal__title");
    saveModalTitle.innerText = "Сохранить пин";
    // стрелочка выхода
    const lineBox = document.createElement("div");
    lineBox.classList.add("saveModal__lineBox");
    const upLine = document.createElement("div");
    upLine.classList.add("saveModal__upLine");
    const downLine = document.createElement("div");
    downLine.classList.add("saveModal__downLine");
    const createDeskButton = document.createElement("button");
    createDeskButton.classList.add("saveModal__createButton");
    createDeskButton.innerText = "Создать доску";
    const saveModalBoards = document.createElement("div");
    saveModalBoards.classList.add("saveModal__boards");
    if (localStorage.getItem("boards")) {
        let boardsArr = JSON.parse(localStorage.getItem("boards"));
        boardsArr.forEach((obj, index)=>{
            const deskContainer = document.createElement("div");
            deskContainer.classList.add("saveModal__boardsContainer");
            const deskName = document.createElement("p");
            deskName.classList.add("saveModal__boardsTitle");
            deskName.innerText = obj.name;
            deskContainer.addEventListener("click", ()=>{
                const modalSave = document.querySelector(".saveModal");
                if (boardsArr[index].pins.find((item)=>item == pinId
                )) {
                    modalSave.classList.remove("modal-active");
                    modalSave.classList.add("modal-disable");
                    document.body.classList.remove("body__notScroll");
                } else {
                    boardsArr[index].pins.push(pinId);
                    localStorage.setItem("boards", JSON.stringify(boardsArr));
                    modalSave.classList.remove("modal-active");
                    modalSave.classList.add("modal-disable");
                    document.body.classList.remove("body__notScroll");
                }
            });
            saveModalBoards.append(deskContainer);
            deskContainer.append(deskName);
        });
    }
    saveModalWindow.append(container);
    container.append(saveModalTitle);
    container.prepend(lineBox);
    lineBox.append(upLine);
    lineBox.append(downLine);
    saveModalWindow.append(saveModalBoards);
    saveModalWindow.append(createDeskButton);
    addContentToModalCreateDesk(pinId);
    closeModalSave();
}
function closeModalSave() {
    const lineBox = document.querySelector(".saveModal__lineBox");
    const modalSave = document.querySelector(".saveModal");
    lineBox.addEventListener("click", ()=>{
        modalSave.classList.remove("modal-active");
        modalSave.classList.add("modal-disable");
        document.body.classList.remove("body__notScroll");
    });
}
function addContentToModalCreateDesk(pinId) {
    const saveModalWindow = document.querySelector(".saveModal__window");
    const createDeskButton = document.querySelector(".saveModal__createButton");
    createDeskButton.addEventListener("click", ()=>{
        saveModalWindow.innerHTML = "";
        const createDeskTitle = document.createElement("h3");
        createDeskTitle.classList.add("saveModal__title", "saveModal__CreateTitle");
        createDeskTitle.innerText = "Создать доску";
        saveModalWindow.append(createDeskTitle);
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("saveModal__inputContainer");
        saveModalWindow.append(inputContainer);
        const label = document.createElement("label");
        label.innerText = "Название";
        label.classList.add("saveModal__label");
        inputContainer.append(label);
        const input = document.createElement("input");
        input.classList.add("saveModal__input");
        input.setAttribute("placeholder", "Например, «Рецепты» или «Причёски»");
        label.append(input);
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("saveModal__buttonContainer");
        saveModalWindow.append(buttonContainer);
        const delayButton = document.createElement("button");
        delayButton.classList.add("saveModal__delayButton", "saveModal__buttons");
        delayButton.innerText = "Отмена";
        buttonContainer.append(delayButton);
        const readyButton = document.createElement("button");
        readyButton.classList.add("saveModal__readyButton", "saveModal__buttons");
        readyButton.innerText = "Готово";
        buttonContainer.append(readyButton);
        closeModalCreateDesk();
        createNewDesk(pinId);
    });
}
function closeModalCreateDesk() {
    const delayButton = document.querySelector(".saveModal__delayButton");
    const modalSave = document.querySelector(".saveModal");
    delayButton.addEventListener("click", ()=>{
        modalSave.classList.remove("modal-active");
        modalSave.classList.add("modal-disable");
        document.body.classList.remove("body__notScroll");
    });
}
function createNewDesk(pinId) {
    const readyButton = document.querySelector(".saveModal__readyButton");
    const input = document.querySelector(".saveModal__input");
    readyButton.addEventListener("click", ()=>{
        if (localStorage.getItem("boards")) {
            let boards = JSON.parse(localStorage.getItem("boards"));
            boards.push({
                name: input.value,
                deskId: `${Math.random()}`,
                pins: [
                    pinId
                ]
            });
            localStorage.setItem("boards", JSON.stringify(boards));
        } else localStorage.setItem("boards", JSON.stringify([
            {
                name: input.value,
                deskId: `${Math.random()}`,
                pins: [
                    pinId
                ]
            }, 
        ]));
        const modalSave = document.querySelector(".saveModal");
        modalSave.classList.remove("modal-active");
        modalSave.classList.add("modal-disable");
        document.body.classList.remove("body__notScroll");
        createDeskSelect();
    });
}
function createDeskSelect() {
    const select = document.querySelector(".header__select");
    const selectList = document.querySelector(".header__selectList");
    selectList.innerHTML = "";
    select.addEventListener("click", ()=>{
        if (selectList.classList.contains("header__selectList-active")) selectList.classList.remove("header__selectList-active");
        else selectList.classList.add("header__selectList-active");
    });
    let boards = JSON.parse(localStorage.getItem("boards"));
    if (boards) boards.forEach((obj)=>{
        const li = document.createElement("li");
        li.classList.add("header__li");
        selectList.append(li);
        deskFilter(obj, li, selectList);
        li.innerText = obj.name;
    });
}
createDeskSelect();
function deskFilter(obj, li, selectList) {
    const span = document.querySelector(".header__span");
    li.addEventListener("click", ()=>{
        if (li.innerText !== "Доски") {
            const liDesk = document.createElement("li");
            liDesk.innerText = "Доски";
            liDesk.classList.add("header__li");
            selectList.append(liDesk);
            liDesk.addEventListener("click", ()=>{
                span.innerText = "Доски";
                const pinsWrapper = document.querySelector(".pinsWrapper");
                pinsWrapper.innerHTML = "";
                selectList.removeChild(liDesk);
                pins.forEach((item)=>{
                    createPin(item);
                });
            });
        }
        span.innerText = obj.name;
        let filteredArray = pins.filter((item)=>obj.pins.includes(item.id)
        );
        const pinsWrapper1 = document.querySelector(".pinsWrapper");
        pinsWrapper1.innerHTML = "";
        console.log(filteredArray);
        filteredArray.forEach((el)=>{
            createPin(el);
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequire62a5")

//# sourceMappingURL=index.0641b553.js.map
