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
})({"d2Pb4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2e42caa825ce630e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2nAwO":[function(require,module,exports) {
// Includes only the "core" of graphlib
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Graph", ()=>(0, _graphJs.Graph));
parcelHelpers.export(exports, "version", ()=>version);
var _graphJs = require("./graph.js");
const version = "2.1.9-pre";

},{"./graph.js":"9V8F8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9V8F8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.
// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.
parcelHelpers.export(exports, "Graph", ()=>Graph);
var _lodashEs = require("lodash-es");
var DEFAULT_EDGE_NAME = "\0";
var GRAPH_NODE = "\0";
var EDGE_KEY_DELIM = "\x01";
class Graph {
    constructor(opts = {}){
        this._isDirected = _lodashEs.has(opts, "directed") ? opts.directed : true;
        this._isMultigraph = _lodashEs.has(opts, "multigraph") ? opts.multigraph : false;
        this._isCompound = _lodashEs.has(opts, "compound") ? opts.compound : false;
        // Label for the graph itself
        this._label = undefined;
        // Defaults to be set when creating a new node
        this._defaultNodeLabelFn = _lodashEs.constant(undefined);
        // Defaults to be set when creating a new edge
        this._defaultEdgeLabelFn = _lodashEs.constant(undefined);
        // v -> label
        this._nodes = {};
        if (this._isCompound) {
            // v -> parent
            this._parent = {};
            // v -> children
            this._children = {};
            this._children[GRAPH_NODE] = {};
        }
        // v -> edgeObj
        this._in = {};
        // u -> v -> Number
        this._preds = {};
        // v -> edgeObj
        this._out = {};
        // v -> w -> Number
        this._sucs = {};
        // e -> edgeObj
        this._edgeObjs = {};
        // e -> label
        this._edgeLabels = {};
    }
    /* === Graph functions ========= */ isDirected() {
        return this._isDirected;
    }
    isMultigraph() {
        return this._isMultigraph;
    }
    isCompound() {
        return this._isCompound;
    }
    setGraph(label) {
        this._label = label;
        return this;
    }
    graph() {
        return this._label;
    }
    /* === Node functions ========== */ setDefaultNodeLabel(newDefault) {
        if (!_lodashEs.isFunction(newDefault)) newDefault = _lodashEs.constant(newDefault);
        this._defaultNodeLabelFn = newDefault;
        return this;
    }
    nodeCount() {
        return this._nodeCount;
    }
    nodes() {
        return _lodashEs.keys(this._nodes);
    }
    sources() {
        var self = this;
        return _lodashEs.filter(this.nodes(), function(v) {
            return _lodashEs.isEmpty(self._in[v]);
        });
    }
    sinks() {
        var self = this;
        return _lodashEs.filter(this.nodes(), function(v) {
            return _lodashEs.isEmpty(self._out[v]);
        });
    }
    setNodes(vs, value) {
        var args = arguments;
        var self = this;
        _lodashEs.each(vs, function(v) {
            if (args.length > 1) self.setNode(v, value);
            else self.setNode(v);
        });
        return this;
    }
    setNode(v, value) {
        if (_lodashEs.has(this._nodes, v)) {
            if (arguments.length > 1) this._nodes[v] = value;
            return this;
        }
        // @ts-expect-error
        this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
        if (this._isCompound) {
            this._parent[v] = GRAPH_NODE;
            this._children[v] = {};
            this._children[GRAPH_NODE][v] = true;
        }
        this._in[v] = {};
        this._preds[v] = {};
        this._out[v] = {};
        this._sucs[v] = {};
        ++this._nodeCount;
        return this;
    }
    node(v) {
        return this._nodes[v];
    }
    hasNode(v) {
        return _lodashEs.has(this._nodes, v);
    }
    removeNode(v) {
        var self = this;
        if (_lodashEs.has(this._nodes, v)) {
            var removeEdge = function(e) {
                self.removeEdge(self._edgeObjs[e]);
            };
            delete this._nodes[v];
            if (this._isCompound) {
                this._removeFromParentsChildList(v);
                delete this._parent[v];
                _lodashEs.each(this.children(v), function(child) {
                    self.setParent(child);
                });
                delete this._children[v];
            }
            _lodashEs.each(_lodashEs.keys(this._in[v]), removeEdge);
            delete this._in[v];
            delete this._preds[v];
            _lodashEs.each(_lodashEs.keys(this._out[v]), removeEdge);
            delete this._out[v];
            delete this._sucs[v];
            --this._nodeCount;
        }
        return this;
    }
    setParent(v, parent) {
        if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
        if (_lodashEs.isUndefined(parent)) parent = GRAPH_NODE;
        else {
            // Coerce parent to string
            parent += "";
            for(var ancestor = parent; !_lodashEs.isUndefined(ancestor); ancestor = this.parent(ancestor)){
                if (ancestor === v) throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
            }
            this.setNode(parent);
        }
        this.setNode(v);
        this._removeFromParentsChildList(v);
        this._parent[v] = parent;
        this._children[parent][v] = true;
        return this;
    }
    _removeFromParentsChildList(v) {
        delete this._children[this._parent[v]][v];
    }
    parent(v) {
        if (this._isCompound) {
            var parent = this._parent[v];
            if (parent !== GRAPH_NODE) return parent;
        }
    }
    children(v) {
        if (_lodashEs.isUndefined(v)) v = GRAPH_NODE;
        if (this._isCompound) {
            var children = this._children[v];
            if (children) return _lodashEs.keys(children);
        } else if (v === GRAPH_NODE) return this.nodes();
        else if (this.hasNode(v)) return [];
    }
    predecessors(v) {
        var predsV = this._preds[v];
        if (predsV) return _lodashEs.keys(predsV);
    }
    successors(v) {
        var sucsV = this._sucs[v];
        if (sucsV) return _lodashEs.keys(sucsV);
    }
    neighbors(v) {
        var preds = this.predecessors(v);
        if (preds) return _lodashEs.union(preds, this.successors(v));
    }
    isLeaf(v) {
        var neighbors;
        if (this.isDirected()) neighbors = this.successors(v);
        else neighbors = this.neighbors(v);
        return neighbors.length === 0;
    }
    filterNodes(filter) {
        // @ts-expect-error
        var copy = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
        });
        copy.setGraph(this.graph());
        var self = this;
        _lodashEs.each(this._nodes, function(value, v) {
            if (filter(v)) copy.setNode(v, value);
        });
        _lodashEs.each(this._edgeObjs, function(e) {
            // @ts-expect-error
            if (copy.hasNode(e.v) && copy.hasNode(e.w)) copy.setEdge(e, self.edge(e));
        });
        var parents = {};
        function findParent(v) {
            var parent = self.parent(v);
            if (parent === undefined || copy.hasNode(parent)) {
                parents[v] = parent;
                return parent;
            } else if (parent in parents) return parents[parent];
            else return findParent(parent);
        }
        if (this._isCompound) _lodashEs.each(copy.nodes(), function(v) {
            copy.setParent(v, findParent(v));
        });
        return copy;
    }
    /* === Edge functions ========== */ setDefaultEdgeLabel(newDefault) {
        if (!_lodashEs.isFunction(newDefault)) newDefault = _lodashEs.constant(newDefault);
        this._defaultEdgeLabelFn = newDefault;
        return this;
    }
    edgeCount() {
        return this._edgeCount;
    }
    edges() {
        return _lodashEs.values(this._edgeObjs);
    }
    setPath(vs, value) {
        var self = this;
        var args = arguments;
        _lodashEs.reduce(vs, function(v, w) {
            if (args.length > 1) self.setEdge(v, w, value);
            else self.setEdge(v, w);
            return w;
        });
        return this;
    }
    /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */ setEdge() {
        var v, w, name, value;
        var valueSpecified = false;
        var arg0 = arguments[0];
        if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
            v = arg0.v;
            w = arg0.w;
            name = arg0.name;
            if (arguments.length === 2) {
                value = arguments[1];
                valueSpecified = true;
            }
        } else {
            v = arg0;
            w = arguments[1];
            name = arguments[3];
            if (arguments.length > 2) {
                value = arguments[2];
                valueSpecified = true;
            }
        }
        v = "" + v;
        w = "" + w;
        if (!_lodashEs.isUndefined(name)) name = "" + name;
        var e = edgeArgsToId(this._isDirected, v, w, name);
        if (_lodashEs.has(this._edgeLabels, e)) {
            if (valueSpecified) this._edgeLabels[e] = value;
            return this;
        }
        if (!_lodashEs.isUndefined(name) && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
        // It didn't exist, so we need to create it.
        // First ensure the nodes exist.
        this.setNode(v);
        this.setNode(w);
        // @ts-expect-error
        this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
        var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
        // Ensure we add undirected edges in a consistent way.
        v = edgeObj.v;
        w = edgeObj.w;
        Object.freeze(edgeObj);
        this._edgeObjs[e] = edgeObj;
        incrementOrInitEntry(this._preds[w], v);
        incrementOrInitEntry(this._sucs[v], w);
        this._in[w][e] = edgeObj;
        this._out[v][e] = edgeObj;
        this._edgeCount++;
        return this;
    }
    edge(v, w, name) {
        var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
        return this._edgeLabels[e];
    }
    hasEdge(v, w, name) {
        var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
        return _lodashEs.has(this._edgeLabels, e);
    }
    removeEdge(v, w, name) {
        var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
        var edge = this._edgeObjs[e];
        if (edge) {
            v = edge.v;
            w = edge.w;
            delete this._edgeLabels[e];
            delete this._edgeObjs[e];
            decrementOrRemoveEntry(this._preds[w], v);
            decrementOrRemoveEntry(this._sucs[v], w);
            delete this._in[w][e];
            delete this._out[v][e];
            this._edgeCount--;
        }
        return this;
    }
    inEdges(v, u) {
        var inV = this._in[v];
        if (inV) {
            var edges = _lodashEs.values(inV);
            if (!u) return edges;
            return _lodashEs.filter(edges, function(edge) {
                return edge.v === u;
            });
        }
    }
    outEdges(v, w) {
        var outV = this._out[v];
        if (outV) {
            var edges = _lodashEs.values(outV);
            if (!w) return edges;
            return _lodashEs.filter(edges, function(edge) {
                return edge.w === w;
            });
        }
    }
    nodeEdges(v, w) {
        var inEdges = this.inEdges(v, w);
        if (inEdges) return inEdges.concat(this.outEdges(v, w));
    }
}
/* Number of nodes in the graph. Should only be changed by the implementation. */ Graph.prototype._nodeCount = 0;
/* Number of edges in the graph. Should only be changed by the implementation. */ Graph.prototype._edgeCount = 0;
function incrementOrInitEntry(map, k) {
    if (map[k]) map[k]++;
    else map[k] = 1;
}
function decrementOrRemoveEntry(map, k) {
    if (!--map[k]) delete map[k];
}
function edgeArgsToId(isDirected, v_, w_, name) {
    var v = "" + v_;
    var w = "" + w_;
    if (!isDirected && v > w) {
        var tmp = v;
        v = w;
        w = tmp;
    }
    return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (_lodashEs.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
}
function edgeArgsToObj(isDirected, v_, w_, name) {
    var v = "" + v_;
    var w = "" + w_;
    if (!isDirected && v > w) {
        var tmp = v;
        v = w;
        w = tmp;
    }
    var edgeObj = {
        v: v,
        w: w
    };
    if (name) edgeObj.name = name;
    return edgeObj;
}
function edgeObjToId(isDirected, edgeObj) {
    return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6zYa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "acyclic", ()=>_acyclicJs);
parcelHelpers.export(exports, "normalize", ()=>_normalizeJs);
parcelHelpers.export(exports, "rank", ()=>(0, _indexJs.rank));
parcelHelpers.export(exports, "layout", ()=>(0, _layoutJs.layout));
var _acyclicJs = require("./acyclic.js");
var _layoutJs = require("./layout.js");
var _normalizeJs = require("./normalize.js");
var _indexJs = require("./rank/index.js");

},{"./acyclic.js":"bbklD","./layout.js":"bcmBm","./normalize.js":"1tgHq","./rank/index.js":"6TvWk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbklD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "run", ()=>run);
parcelHelpers.export(exports, "undo", ()=>undo);
var _lodashEs = require("lodash-es");
var _greedyFasJs = require("./greedy-fas.js");
function run(g) {
    var fas = g.graph().acyclicer === "greedy" ? (0, _greedyFasJs.greedyFAS)(g, weightFn(g)) : dfsFAS(g);
    _lodashEs.forEach(fas, function(e) {
        var label = g.edge(e);
        g.removeEdge(e);
        label.forwardName = e.name;
        label.reversed = true;
        g.setEdge(e.w, e.v, label, _lodashEs.uniqueId("rev"));
    });
    function weightFn(g) {
        return function(e) {
            return g.edge(e).weight;
        };
    }
}
function dfsFAS(g) {
    var fas = [];
    var stack = {};
    var visited = {};
    function dfs(v) {
        if (_lodashEs.has(visited, v)) return;
        visited[v] = true;
        stack[v] = true;
        _lodashEs.forEach(g.outEdges(v), function(e) {
            if (_lodashEs.has(stack, e.w)) fas.push(e);
            else dfs(e.w);
        });
        delete stack[v];
    }
    _lodashEs.forEach(g.nodes(), dfs);
    return fas;
}
function undo(g) {
    _lodashEs.forEach(g.edges(), function(e) {
        var label = g.edge(e);
        if (label.reversed) {
            g.removeEdge(e);
            var forwardName = label.forwardName;
            delete label.reversed;
            delete label.forwardName;
            g.setEdge(e.w, e.v, label, forwardName);
        }
    });
}

},{"lodash-es":"bXNwz","./greedy-fas.js":"cBKMy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBKMy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */ parcelHelpers.export(exports, "greedyFAS", ()=>greedyFAS);
var _lodashEs = require("lodash-es");
var _indexJs = require("../graphlib/index.js");
var _listJs = require("./data/list.js");
var DEFAULT_WEIGHT_FN = _lodashEs.constant(1);
function greedyFAS(g, weightFn) {
    if (g.nodeCount() <= 1) return [];
    var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
    var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);
    // Expand multi-edges
    return _lodashEs.flatten(_lodashEs.map(results, function(e) {
        return g.outEdges(e.v, e.w);
    }));
}
function doGreedyFAS(g, buckets, zeroIdx) {
    var results = [];
    var sources = buckets[buckets.length - 1];
    var sinks = buckets[0];
    var entry;
    while(g.nodeCount()){
        while(entry = sinks.dequeue())removeNode(g, buckets, zeroIdx, entry);
        while(entry = sources.dequeue())removeNode(g, buckets, zeroIdx, entry);
        if (g.nodeCount()) for(var i = buckets.length - 2; i > 0; --i){
            entry = buckets[i].dequeue();
            if (entry) {
                results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
                break;
            }
        }
    }
    return results;
}
function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
    var results = collectPredecessors ? [] : undefined;
    _lodashEs.forEach(g.inEdges(entry.v), function(edge) {
        var weight = g.edge(edge);
        var uEntry = g.node(edge.v);
        if (collectPredecessors) results.push({
            v: edge.v,
            w: edge.w
        });
        uEntry.out -= weight;
        assignBucket(buckets, zeroIdx, uEntry);
    });
    _lodashEs.forEach(g.outEdges(entry.v), function(edge) {
        var weight = g.edge(edge);
        var w = edge.w;
        var wEntry = g.node(w);
        wEntry["in"] -= weight;
        assignBucket(buckets, zeroIdx, wEntry);
    });
    g.removeNode(entry.v);
    return results;
}
function buildState(g, weightFn) {
    var fasGraph = new (0, _indexJs.Graph)();
    var maxIn = 0;
    var maxOut = 0;
    _lodashEs.forEach(g.nodes(), function(v) {
        fasGraph.setNode(v, {
            v: v,
            in: 0,
            out: 0
        });
    });
    // Aggregate weights on nodes, but also sum the weights across multi-edges
    // into a single edge for the fasGraph.
    _lodashEs.forEach(g.edges(), function(e) {
        var prevWeight = fasGraph.edge(e.v, e.w) || 0;
        var weight = weightFn(e);
        var edgeWeight = prevWeight + weight;
        fasGraph.setEdge(e.v, e.w, edgeWeight);
        maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
        maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
    });
    var buckets = _lodashEs.range(maxOut + maxIn + 3).map(function() {
        return new (0, _listJs.List)();
    });
    var zeroIdx = maxIn + 1;
    _lodashEs.forEach(fasGraph.nodes(), function(v) {
        assignBucket(buckets, zeroIdx, fasGraph.node(v));
    });
    return {
        graph: fasGraph,
        buckets: buckets,
        zeroIdx: zeroIdx
    };
}
function assignBucket(buckets, zeroIdx, entry) {
    if (!entry.out) buckets[0].enqueue(entry);
    else if (!entry["in"]) buckets[buckets.length - 1].enqueue(entry);
    else buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
}

},{"lodash-es":"bXNwz","../graphlib/index.js":"2nAwO","./data/list.js":"gBDGi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gBDGi":[function(require,module,exports) {
/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "List", ()=>List);
class List {
    constructor(){
        var sentinel = {};
        sentinel._next = sentinel._prev = sentinel;
        this._sentinel = sentinel;
    }
    dequeue() {
        var sentinel = this._sentinel;
        var entry = sentinel._prev;
        if (entry !== sentinel) {
            unlink(entry);
            return entry;
        }
    }
    enqueue(entry) {
        var sentinel = this._sentinel;
        if (entry._prev && entry._next) unlink(entry);
        entry._next = sentinel._next;
        sentinel._next._prev = entry;
        sentinel._next = entry;
        entry._prev = sentinel;
    }
    toString() {
        var strs = [];
        var sentinel = this._sentinel;
        var curr = sentinel._prev;
        while(curr !== sentinel){
            strs.push(JSON.stringify(curr, filterOutLinks));
            curr = curr._prev;
        }
        return "[" + strs.join(", ") + "]";
    }
}
function unlink(entry) {
    entry._prev._next = entry._next;
    entry._next._prev = entry._prev;
    delete entry._next;
    delete entry._prev;
}
function filterOutLinks(k, v) {
    if (k !== "_next" && k !== "_prev") return v;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bcmBm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "layout", ()=>layout);
var _lodashEs = require("lodash-es");
var _indexJs = require("../graphlib/index.js");
var _addBorderSegmentsJs = require("./add-border-segments.js");
var _coordinateSystemJs = require("./coordinate-system.js");
var _acyclicJs = require("./acyclic.js");
var _normalizeJs = require("./normalize.js");
var _indexJs1 = require("./rank/index.js");
var _nestingGraphJs = require("./nesting-graph.js");
var _indexJs2 = require("./order/index.js");
var _parentDummyChainsJs = require("./parent-dummy-chains.js");
var _indexJs3 = require("./position/index.js");
var _utilJs = require("./util.js");
function layout(g, opts) {
    var time = opts && opts.debugTiming ? _utilJs.time : _utilJs.notime;
    time("layout", function() {
        var layoutGraph = time("  buildLayoutGraph", function() {
            return buildLayoutGraph(g);
        });
        time("  runLayout", function() {
            runLayout(layoutGraph, time);
        });
        time("  updateInputGraph", function() {
            updateInputGraph(g, layoutGraph);
        });
    });
}
function runLayout(g, time) {
    time("    makeSpaceForEdgeLabels", function() {
        makeSpaceForEdgeLabels(g);
    });
    time("    removeSelfEdges", function() {
        removeSelfEdges(g);
    });
    time("    acyclic", function() {
        _acyclicJs.run(g);
    });
    time("    nestingGraph.run", function() {
        _nestingGraphJs.run(g);
    });
    time("    rank", function() {
        (0, _indexJs1.rank)(_utilJs.asNonCompoundGraph(g));
    });
    time("    injectEdgeLabelProxies", function() {
        injectEdgeLabelProxies(g);
    });
    time("    removeEmptyRanks", function() {
        _utilJs.removeEmptyRanks(g);
    });
    time("    nestingGraph.cleanup", function() {
        _nestingGraphJs.cleanup(g);
    });
    time("    normalizeRanks", function() {
        _utilJs.normalizeRanks(g);
    });
    time("    assignRankMinMax", function() {
        assignRankMinMax(g);
    });
    time("    removeEdgeLabelProxies", function() {
        removeEdgeLabelProxies(g);
    });
    time("    normalize.run", function() {
        _normalizeJs.run(g);
    });
    time("    parentDummyChains", function() {
        (0, _parentDummyChainsJs.parentDummyChains)(g);
    });
    time("    addBorderSegments", function() {
        (0, _addBorderSegmentsJs.addBorderSegments)(g);
    });
    time("    order", function() {
        (0, _indexJs2.order)(g);
    });
    time("    insertSelfEdges", function() {
        insertSelfEdges(g);
    });
    time("    adjustCoordinateSystem", function() {
        _coordinateSystemJs.adjust(g);
    });
    time("    position", function() {
        (0, _indexJs3.position)(g);
    });
    time("    positionSelfEdges", function() {
        positionSelfEdges(g);
    });
    time("    removeBorderNodes", function() {
        removeBorderNodes(g);
    });
    time("    normalize.undo", function() {
        _normalizeJs.undo(g);
    });
    time("    fixupEdgeLabelCoords", function() {
        fixupEdgeLabelCoords(g);
    });
    time("    undoCoordinateSystem", function() {
        _coordinateSystemJs.undo(g);
    });
    time("    translateGraph", function() {
        translateGraph(g);
    });
    time("    assignNodeIntersects", function() {
        assignNodeIntersects(g);
    });
    time("    reversePoints", function() {
        reversePointsForReversedEdges(g);
    });
    time("    acyclic.undo", function() {
        _acyclicJs.undo(g);
    });
}
/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */ function updateInputGraph(inputGraph, layoutGraph) {
    _lodashEs.forEach(inputGraph.nodes(), function(v) {
        var inputLabel = inputGraph.node(v);
        var layoutLabel = layoutGraph.node(v);
        if (inputLabel) {
            inputLabel.x = layoutLabel.x;
            inputLabel.y = layoutLabel.y;
            if (layoutGraph.children(v).length) {
                inputLabel.width = layoutLabel.width;
                inputLabel.height = layoutLabel.height;
            }
        }
    });
    _lodashEs.forEach(inputGraph.edges(), function(e) {
        var inputLabel = inputGraph.edge(e);
        var layoutLabel = layoutGraph.edge(e);
        inputLabel.points = layoutLabel.points;
        if (_lodashEs.has(layoutLabel, "x")) {
            inputLabel.x = layoutLabel.x;
            inputLabel.y = layoutLabel.y;
        }
    });
    inputGraph.graph().width = layoutGraph.graph().width;
    inputGraph.graph().height = layoutGraph.graph().height;
}
var graphNumAttrs = [
    "nodesep",
    "edgesep",
    "ranksep",
    "marginx",
    "marginy"
];
var graphDefaults = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb"
};
var graphAttrs = [
    "acyclicer",
    "ranker",
    "rankdir",
    "align"
];
var nodeNumAttrs = [
    "width",
    "height"
];
var nodeDefaults = {
    width: 0,
    height: 0
};
var edgeNumAttrs = [
    "minlen",
    "weight",
    "width",
    "height",
    "labeloffset"
];
var edgeDefaults = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
};
var edgeAttrs = [
    "labelpos"
];
/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */ function buildLayoutGraph(inputGraph) {
    var g = new (0, _indexJs.Graph)({
        multigraph: true,
        compound: true
    });
    var graph = canonicalize(inputGraph.graph());
    g.setGraph(_lodashEs.merge({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), _lodashEs.pick(graph, graphAttrs)));
    _lodashEs.forEach(inputGraph.nodes(), function(v) {
        var node = canonicalize(inputGraph.node(v));
        g.setNode(v, _lodashEs.defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
        g.setParent(v, inputGraph.parent(v));
    });
    _lodashEs.forEach(inputGraph.edges(), function(e) {
        var edge = canonicalize(inputGraph.edge(e));
        g.setEdge(e, _lodashEs.merge({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), _lodashEs.pick(edge, edgeAttrs)));
    });
    return g;
}
/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */ function makeSpaceForEdgeLabels(g) {
    var graph = g.graph();
    graph.ranksep /= 2;
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        edge.minlen *= 2;
        if (edge.labelpos.toLowerCase() !== "c") {
            if (graph.rankdir === "TB" || graph.rankdir === "BT") edge.width += edge.labeloffset;
            else edge.height += edge.labeloffset;
        }
    });
}
/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */ function injectEdgeLabelProxies(g) {
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.width && edge.height) {
            var v = g.node(e.v);
            var w = g.node(e.w);
            var label = {
                rank: (w.rank - v.rank) / 2 + v.rank,
                e: e
            };
            _utilJs.addDummyNode(g, "edge-proxy", label, "_ep");
        }
    });
}
function assignRankMinMax(g) {
    var maxRank = 0;
    _lodashEs.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.borderTop) {
            node.minRank = g.node(node.borderTop).rank;
            node.maxRank = g.node(node.borderBottom).rank;
            // @ts-expect-error
            maxRank = _lodashEs.max(maxRank, node.maxRank);
        }
    });
    g.graph().maxRank = maxRank;
}
function removeEdgeLabelProxies(g) {
    _lodashEs.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.dummy === "edge-proxy") {
            g.edge(node.e).labelRank = node.rank;
            g.removeNode(v);
        }
    });
}
function translateGraph(g) {
    var minX = Number.POSITIVE_INFINITY;
    var maxX = 0;
    var minY = Number.POSITIVE_INFINITY;
    var maxY = 0;
    var graphLabel = g.graph();
    var marginX = graphLabel.marginx || 0;
    var marginY = graphLabel.marginy || 0;
    function getExtremes(attrs) {
        var x = attrs.x;
        var y = attrs.y;
        var w = attrs.width;
        var h = attrs.height;
        minX = Math.min(minX, x - w / 2);
        maxX = Math.max(maxX, x + w / 2);
        minY = Math.min(minY, y - h / 2);
        maxY = Math.max(maxY, y + h / 2);
    }
    _lodashEs.forEach(g.nodes(), function(v) {
        getExtremes(g.node(v));
    });
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (_lodashEs.has(edge, "x")) getExtremes(edge);
    });
    minX -= marginX;
    minY -= marginY;
    _lodashEs.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        node.x -= minX;
        node.y -= minY;
    });
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        _lodashEs.forEach(edge.points, function(p) {
            p.x -= minX;
            p.y -= minY;
        });
        if (_lodashEs.has(edge, "x")) edge.x -= minX;
        if (_lodashEs.has(edge, "y")) edge.y -= minY;
    });
    graphLabel.width = maxX - minX + marginX;
    graphLabel.height = maxY - minY + marginY;
}
function assignNodeIntersects(g) {
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        var nodeV = g.node(e.v);
        var nodeW = g.node(e.w);
        var p1, p2;
        if (!edge.points) {
            edge.points = [];
            p1 = nodeW;
            p2 = nodeV;
        } else {
            p1 = edge.points[0];
            p2 = edge.points[edge.points.length - 1];
        }
        edge.points.unshift(_utilJs.intersectRect(nodeV, p1));
        edge.points.push(_utilJs.intersectRect(nodeW, p2));
    });
}
function fixupEdgeLabelCoords(g) {
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (_lodashEs.has(edge, "x")) {
            if (edge.labelpos === "l" || edge.labelpos === "r") edge.width -= edge.labeloffset;
            switch(edge.labelpos){
                case "l":
                    edge.x -= edge.width / 2 + edge.labeloffset;
                    break;
                case "r":
                    edge.x += edge.width / 2 + edge.labeloffset;
                    break;
            }
        }
    });
}
function reversePointsForReversedEdges(g) {
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.reversed) edge.points.reverse();
    });
}
function removeBorderNodes(g) {
    _lodashEs.forEach(g.nodes(), function(v) {
        if (g.children(v).length) {
            var node = g.node(v);
            var t = g.node(node.borderTop);
            var b = g.node(node.borderBottom);
            var l = g.node(_lodashEs.last(node.borderLeft));
            var r = g.node(_lodashEs.last(node.borderRight));
            node.width = Math.abs(r.x - l.x);
            node.height = Math.abs(b.y - t.y);
            node.x = l.x + node.width / 2;
            node.y = t.y + node.height / 2;
        }
    });
    _lodashEs.forEach(g.nodes(), function(v) {
        if (g.node(v).dummy === "border") g.removeNode(v);
    });
}
function removeSelfEdges(g) {
    _lodashEs.forEach(g.edges(), function(e) {
        if (e.v === e.w) {
            var node = g.node(e.v);
            if (!node.selfEdges) node.selfEdges = [];
            node.selfEdges.push({
                e: e,
                label: g.edge(e)
            });
            g.removeEdge(e);
        }
    });
}
function insertSelfEdges(g) {
    var layers = _utilJs.buildLayerMatrix(g);
    _lodashEs.forEach(layers, function(layer) {
        var orderShift = 0;
        _lodashEs.forEach(layer, function(v, i) {
            var node = g.node(v);
            node.order = i + orderShift;
            _lodashEs.forEach(node.selfEdges, function(selfEdge) {
                _utilJs.addDummyNode(g, "selfedge", {
                    width: selfEdge.label.width,
                    height: selfEdge.label.height,
                    rank: node.rank,
                    order: i + ++orderShift,
                    e: selfEdge.e,
                    label: selfEdge.label
                }, "_se");
            });
            delete node.selfEdges;
        });
    });
}
function positionSelfEdges(g) {
    _lodashEs.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (node.dummy === "selfedge") {
            var selfNode = g.node(node.e.v);
            var x = selfNode.x + selfNode.width / 2;
            var y = selfNode.y;
            var dx = node.x - x;
            var dy = selfNode.height / 2;
            g.setEdge(node.e, node.label);
            g.removeNode(v);
            node.label.points = [
                {
                    x: x + 2 * dx / 3,
                    y: y - dy
                },
                {
                    x: x + 5 * dx / 6,
                    y: y - dy
                },
                {
                    x: x + dx,
                    y: y
                },
                {
                    x: x + 5 * dx / 6,
                    y: y + dy
                },
                {
                    x: x + 2 * dx / 3,
                    y: y + dy
                }
            ];
            node.label.x = node.x;
            node.label.y = node.y;
        }
    });
}
function selectNumberAttrs(obj, attrs) {
    return _lodashEs.mapValues(_lodashEs.pick(obj, attrs), Number);
}
function canonicalize(attrs) {
    var newAttrs = {};
    _lodashEs.forEach(attrs, function(v, k) {
        newAttrs[k.toLowerCase()] = v;
    });
    return newAttrs;
}

},{"lodash-es":"bXNwz","../graphlib/index.js":"2nAwO","./add-border-segments.js":"dZTpT","./coordinate-system.js":"5KPlM","./acyclic.js":"bbklD","./normalize.js":"1tgHq","./rank/index.js":"6TvWk","./nesting-graph.js":"5DBc0","./order/index.js":"c6jVW","./parent-dummy-chains.js":"b31hh","./position/index.js":"2dcSZ","./util.js":"dmcmW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZTpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addBorderSegments", ()=>addBorderSegments);
var _lodashEs = require("lodash-es");
var _utilJs = require("./util.js");
function addBorderSegments(g) {
    function dfs(v) {
        var children = g.children(v);
        var node = g.node(v);
        if (children.length) _lodashEs.forEach(children, dfs);
        if (_lodashEs.has(node, "minRank")) {
            node.borderLeft = [];
            node.borderRight = [];
            for(var rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank){
                addBorderNode(g, "borderLeft", "_bl", v, node, rank);
                addBorderNode(g, "borderRight", "_br", v, node, rank);
            }
        }
    }
    _lodashEs.forEach(g.children(), dfs);
}
function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
    var label = {
        width: 0,
        height: 0,
        rank: rank,
        borderType: prop
    };
    var prev = sgNode[prop][rank - 1];
    var curr = _utilJs.addDummyNode(g, "border", label, prefix);
    sgNode[prop][rank] = curr;
    g.setParent(curr, sg);
    if (prev) g.setEdge(prev, curr, {
        weight: 1
    });
}

},{"lodash-es":"bXNwz","./util.js":"dmcmW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmcmW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addDummyNode", ()=>addDummyNode);
parcelHelpers.export(exports, "simplify", ()=>simplify);
parcelHelpers.export(exports, "asNonCompoundGraph", ()=>asNonCompoundGraph);
parcelHelpers.export(exports, "successorWeights", ()=>successorWeights);
parcelHelpers.export(exports, "predecessorWeights", ()=>predecessorWeights);
parcelHelpers.export(exports, "intersectRect", ()=>intersectRect);
parcelHelpers.export(exports, "buildLayerMatrix", ()=>buildLayerMatrix);
parcelHelpers.export(exports, "normalizeRanks", ()=>normalizeRanks);
parcelHelpers.export(exports, "removeEmptyRanks", ()=>removeEmptyRanks);
parcelHelpers.export(exports, "addBorderNode", ()=>addBorderNode);
parcelHelpers.export(exports, "maxRank", ()=>maxRank);
parcelHelpers.export(exports, "partition", ()=>partition);
parcelHelpers.export(exports, "time", ()=>time);
parcelHelpers.export(exports, "notime", ()=>notime);
var _lodashEs = require("lodash-es");
var _indexJs = require("../graphlib/index.js");
/*
 * Adds a dummy node to the graph and return v.
 */ function addDummyNode(g, type, attrs, name) {
    var v;
    do v = _lodashEs.uniqueId(name);
    while (g.hasNode(v));
    attrs.dummy = type;
    g.setNode(v, attrs);
    return v;
}
/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */ function simplify(g) {
    var simplified = new (0, _indexJs.Graph)().setGraph(g.graph());
    _lodashEs.forEach(g.nodes(), function(v) {
        simplified.setNode(v, g.node(v));
    });
    _lodashEs.forEach(g.edges(), function(e) {
        var simpleLabel = simplified.edge(e.v, e.w) || {
            weight: 0,
            minlen: 1
        };
        var label = g.edge(e);
        simplified.setEdge(e.v, e.w, {
            weight: simpleLabel.weight + label.weight,
            minlen: Math.max(simpleLabel.minlen, label.minlen)
        });
    });
    return simplified;
}
function asNonCompoundGraph(g) {
    var simplified = new (0, _indexJs.Graph)({
        multigraph: g.isMultigraph()
    }).setGraph(g.graph());
    _lodashEs.forEach(g.nodes(), function(v) {
        if (!g.children(v).length) simplified.setNode(v, g.node(v));
    });
    _lodashEs.forEach(g.edges(), function(e) {
        simplified.setEdge(e, g.edge(e));
    });
    return simplified;
}
function successorWeights(g) {
    var weightMap = _lodashEs.map(g.nodes(), function(v) {
        var sucs = {};
        _lodashEs.forEach(g.outEdges(v), function(e) {
            sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
        });
        return sucs;
    });
    return _lodashEs.zipObject(g.nodes(), weightMap);
}
function predecessorWeights(g) {
    var weightMap = _lodashEs.map(g.nodes(), function(v) {
        var preds = {};
        _lodashEs.forEach(g.inEdges(v), function(e) {
            preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
        });
        return preds;
    });
    return _lodashEs.zipObject(g.nodes(), weightMap);
}
/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */ function intersectRect(rect, point) {
    var x = rect.x;
    var y = rect.y;
    // Rectangle intersection algorithm from:
    // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
    var dx = point.x - x;
    var dy = point.y - y;
    var w = rect.width / 2;
    var h = rect.height / 2;
    if (!dx && !dy) throw new Error("Not possible to find intersection inside of the rectangle");
    var sx, sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        // Intersection is top or bottom of rect.
        if (dy < 0) h = -h;
        sx = h * dx / dy;
        sy = h;
    } else {
        // Intersection is left or right of rect.
        if (dx < 0) w = -w;
        sx = w;
        sy = w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
}
/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */ function buildLayerMatrix(g) {
    var layering = _lodashEs.map(_lodashEs.range(maxRank(g) + 1), function() {
        return [];
    });
    _lodashEs.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        var rank = node.rank;
        if (!_lodashEs.isUndefined(rank)) layering[rank][node.order] = v;
    });
    return layering;
}
/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */ function normalizeRanks(g) {
    var min = _lodashEs.min(_lodashEs.map(g.nodes(), function(v) {
        return g.node(v).rank;
    }));
    _lodashEs.forEach(g.nodes(), function(v) {
        var node = g.node(v);
        if (_lodashEs.has(node, "rank")) node.rank -= min;
    });
}
function removeEmptyRanks(g) {
    // Ranks may not start at 0, so we need to offset them
    var offset = _lodashEs.min(_lodashEs.map(g.nodes(), function(v) {
        return g.node(v).rank;
    }));
    var layers = [];
    _lodashEs.forEach(g.nodes(), function(v) {
        var rank = g.node(v).rank - offset;
        if (!layers[rank]) layers[rank] = [];
        layers[rank].push(v);
    });
    var delta = 0;
    var nodeRankFactor = g.graph().nodeRankFactor;
    _lodashEs.forEach(layers, function(vs, i) {
        if (_lodashEs.isUndefined(vs) && i % nodeRankFactor !== 0) --delta;
        else if (delta) _lodashEs.forEach(vs, function(v) {
            g.node(v).rank += delta;
        });
    });
}
function addBorderNode(g, prefix, rank, order) {
    var node = {
        width: 0,
        height: 0
    };
    if (arguments.length >= 4) {
        node.rank = rank;
        node.order = order;
    }
    return addDummyNode(g, "border", node, prefix);
}
function maxRank(g) {
    return _lodashEs.max(_lodashEs.map(g.nodes(), function(v) {
        var rank = g.node(v).rank;
        if (!_lodashEs.isUndefined(rank)) return rank;
    }));
}
/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */ function partition(collection, fn) {
    var result = {
        lhs: [],
        rhs: []
    };
    _lodashEs.forEach(collection, function(value) {
        if (fn(value)) result.lhs.push(value);
        else result.rhs.push(value);
    });
    return result;
}
/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */ function time(name, fn) {
    var start = _lodashEs.now();
    try {
        return fn();
    } finally{
        console.log(name + " time: " + (_lodashEs.now() - start) + "ms");
    }
}
function notime(name, fn) {
    return fn();
}

},{"lodash-es":"bXNwz","../graphlib/index.js":"2nAwO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5KPlM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "adjust", ()=>adjust);
parcelHelpers.export(exports, "undo", ()=>undo);
var _lodashEs = require("lodash-es");
function adjust(g) {
    var rankDir = g.graph().rankdir.toLowerCase();
    if (rankDir === "lr" || rankDir === "rl") swapWidthHeight(g);
}
function undo(g) {
    var rankDir = g.graph().rankdir.toLowerCase();
    if (rankDir === "bt" || rankDir === "rl") reverseY(g);
    if (rankDir === "lr" || rankDir === "rl") {
        swapXY(g);
        swapWidthHeight(g);
    }
}
function swapWidthHeight(g) {
    _lodashEs.forEach(g.nodes(), function(v) {
        swapWidthHeightOne(g.node(v));
    });
    _lodashEs.forEach(g.edges(), function(e) {
        swapWidthHeightOne(g.edge(e));
    });
}
function swapWidthHeightOne(attrs) {
    var w = attrs.width;
    attrs.width = attrs.height;
    attrs.height = w;
}
function reverseY(g) {
    _lodashEs.forEach(g.nodes(), function(v) {
        reverseYOne(g.node(v));
    });
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        _lodashEs.forEach(edge.points, reverseYOne);
        if (_lodashEs.has(edge, "y")) reverseYOne(edge);
    });
}
function reverseYOne(attrs) {
    attrs.y = -attrs.y;
}
function swapXY(g) {
    _lodashEs.forEach(g.nodes(), function(v) {
        swapXYOne(g.node(v));
    });
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        _lodashEs.forEach(edge.points, swapXYOne);
        if (_lodashEs.has(edge, "x")) swapXYOne(edge);
    });
}
function swapXYOne(attrs) {
    var x = attrs.x;
    attrs.x = attrs.y;
    attrs.y = x;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tgHq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "run", ()=>run);
parcelHelpers.export(exports, "undo", ()=>undo);
var _lodashEs = require("lodash-es");
var _utilJs = require("./util.js");
/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */ function run(g) {
    g.graph().dummyChains = [];
    _lodashEs.forEach(g.edges(), function(edge) {
        normalizeEdge(g, edge);
    });
}
function normalizeEdge(g, e) {
    var v = e.v;
    var vRank = g.node(v).rank;
    var w = e.w;
    var wRank = g.node(w).rank;
    var name = e.name;
    var edgeLabel = g.edge(e);
    var labelRank = edgeLabel.labelRank;
    if (wRank === vRank + 1) return;
    g.removeEdge(e);
    var dummy, attrs, i;
    for(i = 0, ++vRank; vRank < wRank; ++i, ++vRank){
        edgeLabel.points = [];
        attrs = {
            width: 0,
            height: 0,
            edgeLabel: edgeLabel,
            edgeObj: e,
            rank: vRank
        };
        dummy = _utilJs.addDummyNode(g, "edge", attrs, "_d");
        if (vRank === labelRank) {
            attrs.width = edgeLabel.width;
            attrs.height = edgeLabel.height;
            // @ts-expect-error
            attrs.dummy = "edge-label";
            // @ts-expect-error
            attrs.labelpos = edgeLabel.labelpos;
        }
        g.setEdge(v, dummy, {
            weight: edgeLabel.weight
        }, name);
        if (i === 0) g.graph().dummyChains.push(dummy);
        v = dummy;
    }
    g.setEdge(v, w, {
        weight: edgeLabel.weight
    }, name);
}
function undo(g) {
    _lodashEs.forEach(g.graph().dummyChains, function(v) {
        var node = g.node(v);
        var origLabel = node.edgeLabel;
        var w;
        g.setEdge(node.edgeObj, origLabel);
        while(node.dummy){
            w = g.successors(v)[0];
            g.removeNode(v);
            origLabel.points.push({
                x: node.x,
                y: node.y
            });
            if (node.dummy === "edge-label") {
                origLabel.x = node.x;
                origLabel.y = node.y;
                origLabel.width = node.width;
                origLabel.height = node.height;
            }
            v = w;
            node = g.node(v);
        }
    });
}

},{"lodash-es":"bXNwz","./util.js":"dmcmW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TvWk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rank", ()=>rank);
var _feasibleTreeJs = require("./feasible-tree.js");
var _networkSimplexJs = require("./network-simplex.js");
var _utilJs = require("./util.js");
/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */ function rank(g) {
    switch(g.graph().ranker){
        case "network-simplex":
            networkSimplexRanker(g);
            break;
        case "tight-tree":
            tightTreeRanker(g);
            break;
        case "longest-path":
            longestPathRanker(g);
            break;
        default:
            networkSimplexRanker(g);
    }
}
// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = (0, _utilJs.longestPath);
function tightTreeRanker(g) {
    (0, _utilJs.longestPath)(g);
    (0, _feasibleTreeJs.feasibleTree)(g);
}
function networkSimplexRanker(g) {
    (0, _networkSimplexJs.networkSimplex)(g);
}

},{"./feasible-tree.js":"4Q9br","./network-simplex.js":"5HTxY","./util.js":"5skas","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Q9br":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "feasibleTree", ()=>feasibleTree);
var _lodashEs = require("lodash-es");
var _indexJs = require("../../graphlib/index.js");
var _utilJs = require("./util.js");
/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */ function feasibleTree(g) {
    var t = new (0, _indexJs.Graph)({
        directed: false
    });
    // Choose arbitrary node from which to start our tree
    var start = g.nodes()[0];
    var size = g.nodeCount();
    t.setNode(start, {});
    var edge, delta;
    while(tightTree(t, g) < size){
        edge = findMinSlackEdge(t, g);
        delta = t.hasNode(edge.v) ? (0, _utilJs.slack)(g, edge) : -(0, _utilJs.slack)(g, edge);
        shiftRanks(t, g, delta);
    }
    return t;
}
/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */ function tightTree(t, g) {
    function dfs(v) {
        _lodashEs.forEach(g.nodeEdges(v), function(e) {
            var edgeV = e.v, w = v === edgeV ? e.w : edgeV;
            if (!t.hasNode(w) && !(0, _utilJs.slack)(g, e)) {
                t.setNode(w, {});
                t.setEdge(v, w, {});
                dfs(w);
            }
        });
    }
    _lodashEs.forEach(t.nodes(), dfs);
    return t.nodeCount();
}
/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */ function findMinSlackEdge(t, g) {
    return _lodashEs.minBy(g.edges(), function(e) {
        if (t.hasNode(e.v) !== t.hasNode(e.w)) return (0, _utilJs.slack)(g, e);
    });
}
function shiftRanks(t, g, delta) {
    _lodashEs.forEach(t.nodes(), function(v) {
        g.node(v).rank += delta;
    });
}

},{"lodash-es":"bXNwz","../../graphlib/index.js":"2nAwO","./util.js":"5skas","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5skas":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "longestPath", ()=>longestPath);
parcelHelpers.export(exports, "slack", ()=>slack);
var _lodashEs = require("lodash-es");
/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */ function longestPath(g) {
    var visited = {};
    function dfs(v) {
        var label = g.node(v);
        if (_lodashEs.has(visited, v)) return label.rank;
        visited[v] = true;
        var rank = _lodashEs.min(_lodashEs.map(g.outEdges(v), function(e) {
            return dfs(e.w) - g.edge(e).minlen;
        }));
        if (rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
        rank === undefined || // return value of _.map([]) for Lodash 4
        rank === null) // return value of _.map([null])
        rank = 0;
        return label.rank = rank;
    }
    _lodashEs.forEach(g.sources(), dfs);
}
/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */ function slack(g, e) {
    return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5HTxY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "networkSimplex", ()=>networkSimplex);
var _lodashEs = require("lodash-es");
var _indexJs = require("../../graphlib/alg/index.js");
var _utilJs = require("../util.js");
var _feasibleTreeJs = require("./feasible-tree.js");
var _utilJs1 = require("./util.js");
// Expose some internals for testing purposes
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;
/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */ function networkSimplex(g) {
    g = (0, _utilJs.simplify)(g);
    (0, _utilJs1.longestPath)(g);
    var t = (0, _feasibleTreeJs.feasibleTree)(g);
    initLowLimValues(t);
    initCutValues(t, g);
    var e, f;
    while(e = leaveEdge(t)){
        f = enterEdge(t, g, e);
        exchangeEdges(t, g, e, f);
    }
}
/*
 * Initializes cut values for all edges in the tree.
 */ function initCutValues(t, g) {
    var vs = _indexJs.postorder(t, t.nodes());
    vs = vs.slice(0, vs.length - 1);
    _lodashEs.forEach(vs, function(v) {
        assignCutValue(t, g, v);
    });
}
function assignCutValue(t, g, child) {
    var childLab = t.node(child);
    var parent = childLab.parent;
    t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}
/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */ function calcCutValue(t, g, child) {
    var childLab = t.node(child);
    var parent = childLab.parent;
    // True if the child is on the tail end of the edge in the directed graph
    var childIsTail = true;
    // The graph's view of the tree edge we're inspecting
    var graphEdge = g.edge(child, parent);
    // The accumulated cut value for the edge between this node and its parent
    var cutValue = 0;
    if (!graphEdge) {
        childIsTail = false;
        graphEdge = g.edge(parent, child);
    }
    cutValue = graphEdge.weight;
    _lodashEs.forEach(g.nodeEdges(child), function(e) {
        var isOutEdge = e.v === child, other = isOutEdge ? e.w : e.v;
        if (other !== parent) {
            var pointsToHead = isOutEdge === childIsTail, otherWeight = g.edge(e).weight;
            cutValue += pointsToHead ? otherWeight : -otherWeight;
            if (isTreeEdge(t, child, other)) {
                var otherCutValue = t.edge(child, other).cutvalue;
                cutValue += pointsToHead ? -otherCutValue : otherCutValue;
            }
        }
    });
    return cutValue;
}
function initLowLimValues(tree, root) {
    if (arguments.length < 2) root = tree.nodes()[0];
    dfsAssignLowLim(tree, {}, 1, root);
}
function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
    var low = nextLim;
    var label = tree.node(v);
    visited[v] = true;
    _lodashEs.forEach(tree.neighbors(v), function(w) {
        if (!_lodashEs.has(visited, w)) nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    });
    label.low = low;
    label.lim = nextLim++;
    if (parent) label.parent = parent;
    else // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
    return nextLim;
}
function leaveEdge(tree) {
    return _lodashEs.find(tree.edges(), function(e) {
        return tree.edge(e).cutvalue < 0;
    });
}
function enterEdge(t, g, edge) {
    var v = edge.v;
    var w = edge.w;
    // For the rest of this function we assume that v is the tail and w is the
    // head, so if we don't have this edge in the graph we should flip it to
    // match the correct orientation.
    if (!g.hasEdge(v, w)) {
        v = edge.w;
        w = edge.v;
    }
    var vLabel = t.node(v);
    var wLabel = t.node(w);
    var tailLabel = vLabel;
    var flip = false;
    // If the root is in the tail of the edge then we need to flip the logic that
    // checks for the head and tail nodes in the candidates function below.
    if (vLabel.lim > wLabel.lim) {
        tailLabel = wLabel;
        flip = true;
    }
    var candidates = _lodashEs.filter(g.edges(), function(edge) {
        return flip === isDescendant(t, t.node(edge.v), tailLabel) && flip !== isDescendant(t, t.node(edge.w), tailLabel);
    });
    return _lodashEs.minBy(candidates, function(edge) {
        return (0, _utilJs1.slack)(g, edge);
    });
}
function exchangeEdges(t, g, e, f) {
    var v = e.v;
    var w = e.w;
    t.removeEdge(v, w);
    t.setEdge(f.v, f.w, {});
    initLowLimValues(t);
    initCutValues(t, g);
    updateRanks(t, g);
}
function updateRanks(t, g) {
    var root = _lodashEs.find(t.nodes(), function(v) {
        return !g.node(v).parent;
    });
    var vs = _indexJs.preorder(t, root);
    vs = vs.slice(1);
    _lodashEs.forEach(vs, function(v) {
        var parent = t.node(v).parent, edge = g.edge(v, parent), flipped = false;
        if (!edge) {
            edge = g.edge(parent, v);
            flipped = true;
        }
        g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
    });
}
/*
 * Returns true if the edge is in the tree.
 */ function isTreeEdge(tree, u, v) {
    return tree.hasEdge(u, v);
}
/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */ function isDescendant(tree, vLabel, rootLabel) {
    return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}

},{"lodash-es":"bXNwz","../../graphlib/alg/index.js":"3QDeu","../util.js":"dmcmW","./feasible-tree.js":"4Q9br","./util.js":"5skas","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3QDeu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "components", ()=>(0, _componentsJs.components));
parcelHelpers.export(exports, "dijkstra", ()=>(0, _dijkstraJs.dijkstra));
parcelHelpers.export(exports, "dijkstraAll", ()=>(0, _dijkstraAllJs.dijkstraAll));
parcelHelpers.export(exports, "findCycles", ()=>(0, _findCyclesJs.findCycles));
parcelHelpers.export(exports, "floydWarshall", ()=>(0, _floydWarshallJs.floydWarshall));
parcelHelpers.export(exports, "isAcyclic", ()=>(0, _isAcyclicJs.isAcyclic));
parcelHelpers.export(exports, "postorder", ()=>(0, _postorderJs.postorder));
parcelHelpers.export(exports, "preorder", ()=>(0, _preorderJs.preorder));
parcelHelpers.export(exports, "prim", ()=>(0, _primJs.prim));
parcelHelpers.export(exports, "tarjan", ()=>(0, _tarjanJs.tarjan));
parcelHelpers.export(exports, "topsort", ()=>(0, _topsortJs.topsort));
var _componentsJs = require("./components.js");
var _dijkstraJs = require("./dijkstra.js");
var _dijkstraAllJs = require("./dijkstra-all.js");
var _findCyclesJs = require("./find-cycles.js");
var _floydWarshallJs = require("./floyd-warshall.js");
var _isAcyclicJs = require("./is-acyclic.js");
var _postorderJs = require("./postorder.js");
var _preorderJs = require("./preorder.js");
var _primJs = require("./prim.js");
var _tarjanJs = require("./tarjan.js");
var _topsortJs = require("./topsort.js");

},{"./components.js":"QWMNy","./dijkstra.js":"04Jdn","./dijkstra-all.js":"bUmIh","./find-cycles.js":"3eGKz","./floyd-warshall.js":"f8RXS","./is-acyclic.js":"39tTa","./postorder.js":"W6C8Y","./preorder.js":"1XbKD","./prim.js":"dpD91","./tarjan.js":"8LJB9","./topsort.js":"jrImm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"QWMNy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "components", ()=>components);
var _lodashEs = require("lodash-es");
function components(g) {
    var visited = {};
    var cmpts = [];
    var cmpt;
    function dfs(v) {
        if (_lodashEs.has(visited, v)) return;
        visited[v] = true;
        cmpt.push(v);
        _lodashEs.each(g.successors(v), dfs);
        _lodashEs.each(g.predecessors(v), dfs);
    }
    _lodashEs.each(g.nodes(), function(v) {
        cmpt = [];
        dfs(v);
        if (cmpt.length) cmpts.push(cmpt);
    });
    return cmpts;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04Jdn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dijkstra", ()=>dijkstra);
var _lodashEs = require("lodash-es");
var _priorityQueueJs = require("../data/priority-queue.js");
var DEFAULT_WEIGHT_FUNC = _lodashEs.constant(1);
function dijkstra(g, source, weightFn, edgeFn) {
    return runDijkstra(g, String(source), weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function(v) {
        return g.outEdges(v);
    });
}
function runDijkstra(g, source, weightFn, edgeFn) {
    var results = {};
    var pq = new (0, _priorityQueueJs.PriorityQueue)();
    var v, vEntry;
    var updateNeighbors = function(edge) {
        var w = edge.v !== v ? edge.v : edge.w;
        var wEntry = results[w];
        var weight = weightFn(edge);
        var distance = vEntry.distance + weight;
        if (weight < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + edge + " Weight: " + weight);
        if (distance < wEntry.distance) {
            wEntry.distance = distance;
            wEntry.predecessor = v;
            pq.decrease(w, distance);
        }
    };
    g.nodes().forEach(function(v) {
        var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
        results[v] = {
            distance: distance
        };
        pq.add(v, distance);
    });
    while(pq.size() > 0){
        v = pq.removeMin();
        vEntry = results[v];
        if (vEntry.distance === Number.POSITIVE_INFINITY) break;
        edgeFn(v).forEach(updateNeighbors);
    }
    return results;
}

},{"lodash-es":"bXNwz","../data/priority-queue.js":"26vKj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26vKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PriorityQueue", ()=>PriorityQueue);
var _lodashEs = require("lodash-es");
/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */ class PriorityQueue {
    constructor(){
        this._arr = [];
        this._keyIndices = {};
    }
    /**
   * Returns the number of elements in the queue. Takes `O(1)` time.
   */ size() {
        return this._arr.length;
    }
    /**
   * Returns the keys that are in the queue. Takes `O(n)` time.
   */ keys() {
        return this._arr.map(function(x) {
            return x.key;
        });
    }
    /**
   * Returns `true` if **key** is in the queue and `false` if not.
   */ has(key) {
        return _lodashEs.has(this._keyIndices, key);
    }
    /**
   * Returns the priority for **key**. If **key** is not present in the queue
   * then this function returns `undefined`. Takes `O(1)` time.
   *
   * @param {Object} key
   */ priority(key) {
        var index = this._keyIndices[key];
        if (index !== undefined) return this._arr[index].priority;
    }
    /**
   * Returns the key for the minimum element in this queue. If the queue is
   * empty this function throws an Error. Takes `O(1)` time.
   */ min() {
        if (this.size() === 0) throw new Error("Queue underflow");
        return this._arr[0].key;
    }
    /**
   * Inserts a new key into the priority queue. If the key already exists in
   * the queue this function returns `false`; otherwise it will return `true`.
   * Takes `O(n)` time.
   *
   * @param {Object} key the key to add
   * @param {Number} priority the initial priority for the key
   */ add(key, priority) {
        var keyIndices = this._keyIndices;
        key = String(key);
        if (!_lodashEs.has(keyIndices, key)) {
            var arr = this._arr;
            var index = arr.length;
            keyIndices[key] = index;
            arr.push({
                key: key,
                priority: priority
            });
            this._decrease(index);
            return true;
        }
        return false;
    }
    /**
   * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
   */ removeMin() {
        this._swap(0, this._arr.length - 1);
        var min = this._arr.pop();
        delete this._keyIndices[min.key];
        this._heapify(0);
        return min.key;
    }
    /**
   * Decreases the priority for **key** to **priority**. If the new priority is
   * greater than the previous priority, this function will throw an Error.
   *
   * @param {Object} key the key for which to raise priority
   * @param {Number} priority the new priority for the key
   */ decrease(key, priority) {
        var index = this._keyIndices[key];
        if (priority > this._arr[index].priority) throw new Error("New priority is greater than current priority. Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
        this._arr[index].priority = priority;
        this._decrease(index);
    }
    _heapify(i) {
        var arr = this._arr;
        var l = 2 * i;
        var r = l + 1;
        var largest = i;
        if (l < arr.length) {
            largest = arr[l].priority < arr[largest].priority ? l : largest;
            if (r < arr.length) largest = arr[r].priority < arr[largest].priority ? r : largest;
            if (largest !== i) {
                this._swap(i, largest);
                this._heapify(largest);
            }
        }
    }
    _decrease(index) {
        var arr = this._arr;
        var priority = arr[index].priority;
        var parent;
        while(index !== 0){
            parent = index >> 1;
            if (arr[parent].priority < priority) break;
            this._swap(index, parent);
            index = parent;
        }
    }
    _swap(i, j) {
        var arr = this._arr;
        var keyIndices = this._keyIndices;
        var origArrI = arr[i];
        var origArrJ = arr[j];
        arr[i] = origArrJ;
        arr[j] = origArrI;
        keyIndices[origArrJ.key] = i;
        keyIndices[origArrI.key] = j;
    }
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUmIh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dijkstraAll", ()=>dijkstraAll);
var _lodashEs = require("lodash-es");
var _dijkstraJs = require("./dijkstra.js");
function dijkstraAll(g, weightFunc, edgeFunc) {
    return _lodashEs.transform(g.nodes(), function(acc, v) {
        acc[v] = (0, _dijkstraJs.dijkstra)(g, v, weightFunc, edgeFunc);
    }, {});
}

},{"lodash-es":"bXNwz","./dijkstra.js":"04Jdn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3eGKz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findCycles", ()=>findCycles);
var _lodashEs = require("lodash-es");
var _tarjanJs = require("./tarjan.js");
function findCycles(g) {
    return _lodashEs.filter((0, _tarjanJs.tarjan)(g), function(cmpt) {
        return cmpt.length > 1 || cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]);
    });
}

},{"lodash-es":"bXNwz","./tarjan.js":"8LJB9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LJB9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tarjan", ()=>tarjan);
var _lodashEs = require("lodash-es");
function tarjan(g) {
    var index = 0;
    var stack = [];
    var visited = {}; // node id -> { onStack, lowlink, index }
    var results = [];
    function dfs(v) {
        var entry = visited[v] = {
            onStack: true,
            lowlink: index,
            index: index++
        };
        stack.push(v);
        g.successors(v).forEach(function(w) {
            if (!_lodashEs.has(visited, w)) {
                dfs(w);
                entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
            } else if (visited[w].onStack) entry.lowlink = Math.min(entry.lowlink, visited[w].index);
        });
        if (entry.lowlink === entry.index) {
            var cmpt = [];
            var w;
            do {
                w = stack.pop();
                visited[w].onStack = false;
                cmpt.push(w);
            }while (v !== w);
            results.push(cmpt);
        }
    }
    g.nodes().forEach(function(v) {
        if (!_lodashEs.has(visited, v)) dfs(v);
    });
    return results;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8RXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "floydWarshall", ()=>floydWarshall);
var _lodashEs = require("lodash-es");
var DEFAULT_WEIGHT_FUNC = _lodashEs.constant(1);
function floydWarshall(g, weightFn, edgeFn) {
    return runFloydWarshall(g, weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function(v) {
        return g.outEdges(v);
    });
}
function runFloydWarshall(g, weightFn, edgeFn) {
    var results = {};
    var nodes = g.nodes();
    nodes.forEach(function(v) {
        results[v] = {};
        results[v][v] = {
            distance: 0
        };
        nodes.forEach(function(w) {
            if (v !== w) results[v][w] = {
                distance: Number.POSITIVE_INFINITY
            };
        });
        edgeFn(v).forEach(function(edge) {
            var w = edge.v === v ? edge.w : edge.v;
            var d = weightFn(edge);
            results[v][w] = {
                distance: d,
                predecessor: v
            };
        });
    });
    nodes.forEach(function(k) {
        var rowK = results[k];
        nodes.forEach(function(i) {
            var rowI = results[i];
            nodes.forEach(function(j) {
                var ik = rowI[k];
                var kj = rowK[j];
                var ij = rowI[j];
                var altDistance = ik.distance + kj.distance;
                if (altDistance < ij.distance) {
                    ij.distance = altDistance;
                    ij.predecessor = kj.predecessor;
                }
            });
        });
    });
    return results;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39tTa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAcyclic", ()=>isAcyclic);
var _topsortJs = require("./topsort.js");
function isAcyclic(g) {
    try {
        (0, _topsortJs.topsort)(g);
    } catch (e) {
        if (e instanceof (0, _topsortJs.CycleException)) return false;
        throw e;
    }
    return true;
}

},{"./topsort.js":"jrImm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jrImm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "topsort", ()=>topsort);
parcelHelpers.export(exports, "CycleException", ()=>CycleException);
var _lodashEs = require("lodash-es");
topsort.CycleException = CycleException;
function topsort(g) {
    var visited = {};
    var stack = {};
    var results = [];
    function visit(node) {
        if (_lodashEs.has(stack, node)) throw new CycleException();
        if (!_lodashEs.has(visited, node)) {
            stack[node] = true;
            visited[node] = true;
            _lodashEs.each(g.predecessors(node), visit);
            delete stack[node];
            results.push(node);
        }
    }
    _lodashEs.each(g.sinks(), visit);
    if (_lodashEs.size(visited) !== g.nodeCount()) throw new CycleException();
    return results;
}
function CycleException() {}
CycleException.prototype = new Error(); // must be an instance of Error to pass testing

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"W6C8Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "postorder", ()=>postorder);
var _dfsJs = require("./dfs.js");
function postorder(g, vs) {
    return (0, _dfsJs.dfs)(g, vs, "post");
}

},{"./dfs.js":"3JvED","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3JvED":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dfs", ()=>dfs);
var _lodashEs = require("lodash-es");
/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */ function dfs(g, vs, order) {
    if (!_lodashEs.isArray(vs)) vs = [
        vs
    ];
    var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);
    var acc = [];
    var visited = {};
    _lodashEs.each(vs, function(v) {
        if (!g.hasNode(v)) throw new Error("Graph does not have node: " + v);
        doDfs(g, v, order === "post", visited, navigation, acc);
    });
    return acc;
}
function doDfs(g, v, postorder, visited, navigation, acc) {
    if (!_lodashEs.has(visited, v)) {
        visited[v] = true;
        if (!postorder) acc.push(v);
        _lodashEs.each(navigation(v), function(w) {
            doDfs(g, w, postorder, visited, navigation, acc);
        });
        if (postorder) acc.push(v);
    }
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XbKD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preorder", ()=>preorder);
var _dfsJs = require("./dfs.js");
function preorder(g, vs) {
    return (0, _dfsJs.dfs)(g, vs, "pre");
}

},{"./dfs.js":"3JvED","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpD91":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prim", ()=>prim);
var _lodashEs = require("lodash-es");
var _priorityQueueJs = require("../data/priority-queue.js");
var _graphJs = require("../graph.js");
function prim(g, weightFunc) {
    var result = new (0, _graphJs.Graph)();
    var parents = {};
    var pq = new (0, _priorityQueueJs.PriorityQueue)();
    var v;
    function updateNeighbors(edge) {
        var w = edge.v === v ? edge.w : edge.v;
        var pri = pq.priority(w);
        if (pri !== undefined) {
            var edgeWeight = weightFunc(edge);
            if (edgeWeight < pri) {
                parents[w] = v;
                pq.decrease(w, edgeWeight);
            }
        }
    }
    if (g.nodeCount() === 0) return result;
    _lodashEs.each(g.nodes(), function(v) {
        pq.add(v, Number.POSITIVE_INFINITY);
        result.setNode(v);
    });
    // Start from an arbitrary node
    pq.decrease(g.nodes()[0], 0);
    var init = false;
    while(pq.size() > 0){
        v = pq.removeMin();
        if (_lodashEs.has(parents, v)) result.setEdge(v, parents[v]);
        else if (init) throw new Error("Input graph is not connected: " + g);
        else init = true;
        g.nodeEdges(v).forEach(updateNeighbors);
    }
    return result;
}

},{"lodash-es":"bXNwz","../data/priority-queue.js":"26vKj","../graph.js":"9V8F8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DBc0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "run", ()=>run);
parcelHelpers.export(exports, "cleanup", ()=>cleanup);
var _lodashEs = require("lodash-es");
var _utilJs = require("./util.js");
/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */ function run(g) {
    var root = _utilJs.addDummyNode(g, "root", {}, "_root");
    var depths = treeDepths(g);
    var height = _lodashEs.max(_lodashEs.values(depths)) - 1; // Note: depths is an Object not an array
    var nodeSep = 2 * height + 1;
    g.graph().nestingRoot = root;
    // Multiply minlen by nodeSep to align nodes on non-border ranks.
    _lodashEs.forEach(g.edges(), function(e) {
        g.edge(e).minlen *= nodeSep;
    });
    // Calculate a weight that is sufficient to keep subgraphs vertically compact
    var weight = sumWeights(g) + 1;
    // Create border nodes and link them up
    _lodashEs.forEach(g.children(), function(child) {
        dfs(g, root, nodeSep, weight, height, depths, child);
    });
    // Save the multiplier for node layers for later removal of empty border
    // layers.
    g.graph().nodeRankFactor = nodeSep;
}
function dfs(g, root, nodeSep, weight, height, depths, v) {
    var children = g.children(v);
    if (!children.length) {
        if (v !== root) g.setEdge(root, v, {
            weight: 0,
            minlen: nodeSep
        });
        return;
    }
    var top = _utilJs.addBorderNode(g, "_bt");
    var bottom = _utilJs.addBorderNode(g, "_bb");
    var label = g.node(v);
    g.setParent(top, v);
    label.borderTop = top;
    g.setParent(bottom, v);
    label.borderBottom = bottom;
    _lodashEs.forEach(children, function(child) {
        dfs(g, root, nodeSep, weight, height, depths, child);
        var childNode = g.node(child);
        var childTop = childNode.borderTop ? childNode.borderTop : child;
        var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
        var thisWeight = childNode.borderTop ? weight : 2 * weight;
        var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
        g.setEdge(top, childTop, {
            weight: thisWeight,
            minlen: minlen,
            nestingEdge: true
        });
        g.setEdge(childBottom, bottom, {
            weight: thisWeight,
            minlen: minlen,
            nestingEdge: true
        });
    });
    if (!g.parent(v)) g.setEdge(root, top, {
        weight: 0,
        minlen: height + depths[v]
    });
}
function treeDepths(g) {
    var depths = {};
    function dfs(v, depth) {
        var children = g.children(v);
        if (children && children.length) _lodashEs.forEach(children, function(child) {
            dfs(child, depth + 1);
        });
        depths[v] = depth;
    }
    _lodashEs.forEach(g.children(), function(v) {
        dfs(v, 1);
    });
    return depths;
}
function sumWeights(g) {
    return _lodashEs.reduce(g.edges(), function(acc, e) {
        return acc + g.edge(e).weight;
    }, 0);
}
function cleanup(g) {
    var graphLabel = g.graph();
    g.removeNode(graphLabel.nestingRoot);
    delete graphLabel.nestingRoot;
    _lodashEs.forEach(g.edges(), function(e) {
        var edge = g.edge(e);
        if (edge.nestingEdge) g.removeEdge(e);
    });
}

},{"lodash-es":"bXNwz","./util.js":"dmcmW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6jVW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "order", ()=>order);
var _lodashEs = require("lodash-es");
var _indexJs = require("../../graphlib/index.js");
var _utilJs = require("../util.js");
var _addSubgraphConstraintsJs = require("./add-subgraph-constraints.js");
var _buildLayerGraphJs = require("./build-layer-graph.js");
var _crossCountJs = require("./cross-count.js");
var _initOrderJs = require("./init-order.js");
var _sortSubgraphJs = require("./sort-subgraph.js");
/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */ function order(g) {
    var maxRank = _utilJs.maxRank(g), downLayerGraphs = buildLayerGraphs(g, _lodashEs.range(1, maxRank + 1), "inEdges"), upLayerGraphs = buildLayerGraphs(g, _lodashEs.range(maxRank - 1, -1, -1), "outEdges");
    var layering = (0, _initOrderJs.initOrder)(g);
    assignOrder(g, layering);
    var bestCC = Number.POSITIVE_INFINITY, best;
    for(var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest){
        sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
        layering = _utilJs.buildLayerMatrix(g);
        var cc = (0, _crossCountJs.crossCount)(g, layering);
        if (cc < bestCC) {
            lastBest = 0;
            best = _lodashEs.cloneDeep(layering);
            bestCC = cc;
        }
    }
    assignOrder(g, best);
}
function buildLayerGraphs(g, ranks, relationship) {
    return _lodashEs.map(ranks, function(rank) {
        return (0, _buildLayerGraphJs.buildLayerGraph)(g, rank, relationship);
    });
}
function sweepLayerGraphs(layerGraphs, biasRight) {
    var cg = new (0, _indexJs.Graph)();
    _lodashEs.forEach(layerGraphs, function(lg) {
        var root = lg.graph().root;
        var sorted = (0, _sortSubgraphJs.sortSubgraph)(lg, root, cg, biasRight);
        _lodashEs.forEach(sorted.vs, function(v, i) {
            lg.node(v).order = i;
        });
        (0, _addSubgraphConstraintsJs.addSubgraphConstraints)(lg, cg, sorted.vs);
    });
}
function assignOrder(g, layering) {
    _lodashEs.forEach(layering, function(layer) {
        _lodashEs.forEach(layer, function(v, i) {
            g.node(v).order = i;
        });
    });
}

},{"lodash-es":"bXNwz","../../graphlib/index.js":"2nAwO","../util.js":"dmcmW","./add-subgraph-constraints.js":"iavT1","./build-layer-graph.js":"66uAV","./cross-count.js":"6oE9n","./init-order.js":"i7hQY","./sort-subgraph.js":"eWcRO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iavT1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addSubgraphConstraints", ()=>addSubgraphConstraints);
var _lodashEs = require("lodash-es");
function addSubgraphConstraints(g, cg, vs) {
    var prev = {}, rootPrev;
    _lodashEs.forEach(vs, function(v) {
        var child = g.parent(v), parent, prevChild;
        while(child){
            parent = g.parent(child);
            if (parent) {
                prevChild = prev[parent];
                prev[parent] = child;
            } else {
                prevChild = rootPrev;
                rootPrev = child;
            }
            if (prevChild && prevChild !== child) {
                cg.setEdge(prevChild, child);
                return;
            }
            child = parent;
        }
    });
/*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */ }

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66uAV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildLayerGraph", ()=>buildLayerGraph);
var _lodashEs = require("lodash-es");
var _indexJs = require("../../graphlib/index.js");
/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */ function buildLayerGraph(g, rank, relationship) {
    var root = createRootNode(g), result = new (0, _indexJs.Graph)({
        compound: true
    }).setGraph({
        root: root
    }).setDefaultNodeLabel(function(v) {
        return g.node(v);
    });
    _lodashEs.forEach(g.nodes(), function(v) {
        var node = g.node(v), parent = g.parent(v);
        if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
            result.setNode(v);
            result.setParent(v, parent || root);
            // This assumes we have only short edges!
            _lodashEs.forEach(g[relationship](v), function(e) {
                var u = e.v === v ? e.w : e.v, edge = result.edge(u, v), weight = !_lodashEs.isUndefined(edge) ? edge.weight : 0;
                result.setEdge(u, v, {
                    weight: g.edge(e).weight + weight
                });
            });
            if (_lodashEs.has(node, "minRank")) result.setNode(v, {
                borderLeft: node.borderLeft[rank],
                borderRight: node.borderRight[rank]
            });
        }
    });
    return result;
}
function createRootNode(g) {
    var v;
    while(g.hasNode(v = _lodashEs.uniqueId("_root")));
    return v;
}

},{"lodash-es":"bXNwz","../../graphlib/index.js":"2nAwO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6oE9n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crossCount", ()=>crossCount);
var _lodashEs = require("lodash-es");
/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */ function crossCount(g, layering) {
    var cc = 0;
    for(var i = 1; i < layering.length; ++i)cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
    return cc;
}
function twoLayerCrossCount(g, northLayer, southLayer) {
    // Sort all of the edges between the north and south layers by their position
    // in the north layer and then the south. Map these edges to the position of
    // their head in the south layer.
    var southPos = _lodashEs.zipObject(southLayer, _lodashEs.map(southLayer, function(v, i) {
        return i;
    }));
    var southEntries = _lodashEs.flatten(_lodashEs.map(northLayer, function(v) {
        return _lodashEs.sortBy(_lodashEs.map(g.outEdges(v), function(e) {
            return {
                pos: southPos[e.w],
                weight: g.edge(e).weight
            };
        }), "pos");
    }));
    // Build the accumulator tree
    var firstIndex = 1;
    while(firstIndex < southLayer.length)firstIndex <<= 1;
    var treeSize = 2 * firstIndex - 1;
    firstIndex -= 1;
    var tree = _lodashEs.map(new Array(treeSize), function() {
        return 0;
    });
    // Calculate the weighted crossings
    var cc = 0;
    _lodashEs.forEach(// @ts-expect-error
    southEntries.forEach(function(entry) {
        var index = entry.pos + firstIndex;
        tree[index] += entry.weight;
        var weightSum = 0;
        // @ts-expect-error
        while(index > 0){
            // @ts-expect-error
            if (index % 2) weightSum += tree[index + 1];
            // @ts-expect-error
            index = index - 1 >> 1;
            tree[index] += entry.weight;
        }
        cc += entry.weight * weightSum;
    }));
    return cc;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7hQY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initOrder", ()=>initOrder);
var _lodashEs = require("lodash-es");
/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */ function initOrder(g) {
    var visited = {};
    var simpleNodes = _lodashEs.filter(g.nodes(), function(v) {
        return !g.children(v).length;
    });
    var maxRank = _lodashEs.max(_lodashEs.map(simpleNodes, function(v) {
        return g.node(v).rank;
    }));
    var layers = _lodashEs.map(_lodashEs.range(maxRank + 1), function() {
        return [];
    });
    function dfs(v) {
        if (_lodashEs.has(visited, v)) return;
        visited[v] = true;
        var node = g.node(v);
        layers[node.rank].push(v);
        _lodashEs.forEach(g.successors(v), dfs);
    }
    var orderedVs = _lodashEs.sortBy(simpleNodes, function(v) {
        return g.node(v).rank;
    });
    _lodashEs.forEach(orderedVs, dfs);
    return layers;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eWcRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sortSubgraph", ()=>sortSubgraph);
var _lodashEs = require("lodash-es");
var _barycenterJs = require("./barycenter.js");
var _resolveConflictsJs = require("./resolve-conflicts.js");
var _sortJs = require("./sort.js");
function sortSubgraph(g, v, cg, biasRight) {
    var movable = g.children(v);
    var node = g.node(v);
    var bl = node ? node.borderLeft : undefined;
    var br = node ? node.borderRight : undefined;
    var subgraphs = {};
    if (bl) movable = _lodashEs.filter(movable, function(w) {
        return w !== bl && w !== br;
    });
    var barycenters = (0, _barycenterJs.barycenter)(g, movable);
    _lodashEs.forEach(barycenters, function(entry) {
        if (g.children(entry.v).length) {
            var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
            subgraphs[entry.v] = subgraphResult;
            if (_lodashEs.has(subgraphResult, "barycenter")) mergeBarycenters(entry, subgraphResult);
        }
    });
    var entries = (0, _resolveConflictsJs.resolveConflicts)(barycenters, cg);
    expandSubgraphs(entries, subgraphs);
    var result = (0, _sortJs.sort)(entries, biasRight);
    if (bl) {
        result.vs = _lodashEs.flatten([
            bl,
            result.vs,
            br
        ]);
        if (g.predecessors(bl).length) {
            var blPred = g.node(g.predecessors(bl)[0]), brPred = g.node(g.predecessors(br)[0]);
            if (!_lodashEs.has(result, "barycenter")) {
                result.barycenter = 0;
                result.weight = 0;
            }
            result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
            result.weight += 2;
        }
    }
    return result;
}
function expandSubgraphs(entries, subgraphs) {
    _lodashEs.forEach(entries, function(entry) {
        entry.vs = _lodashEs.flatten(entry.vs.map(function(v) {
            if (subgraphs[v]) return subgraphs[v].vs;
            return v;
        }));
    });
}
function mergeBarycenters(target, other) {
    if (!_lodashEs.isUndefined(target.barycenter)) {
        target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
        target.weight += other.weight;
    } else {
        target.barycenter = other.barycenter;
        target.weight = other.weight;
    }
}

},{"lodash-es":"bXNwz","./barycenter.js":"dNogg","./resolve-conflicts.js":"ldr4W","./sort.js":"3Znyg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dNogg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "barycenter", ()=>barycenter);
var _lodashEs = require("lodash-es");
function barycenter(g, movable) {
    return _lodashEs.map(movable, function(v) {
        var inV = g.inEdges(v);
        if (!inV.length) return {
            v: v
        };
        else {
            var result = _lodashEs.reduce(inV, function(acc, e) {
                var edge = g.edge(e), nodeU = g.node(e.v);
                return {
                    sum: acc.sum + edge.weight * nodeU.order,
                    weight: acc.weight + edge.weight
                };
            }, {
                sum: 0,
                weight: 0
            });
            return {
                v: v,
                barycenter: result.sum / result.weight,
                weight: result.weight
            };
        }
    });
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldr4W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveConflicts", ()=>resolveConflicts);
var _lodashEs = require("lodash-es");
/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */ function resolveConflicts(entries, cg) {
    var mappedEntries = {};
    _lodashEs.forEach(entries, function(entry, i) {
        var tmp = mappedEntries[entry.v] = {
            indegree: 0,
            in: [],
            out: [],
            vs: [
                entry.v
            ],
            i: i
        };
        if (!_lodashEs.isUndefined(entry.barycenter)) {
            // @ts-expect-error
            tmp.barycenter = entry.barycenter;
            // @ts-expect-error
            tmp.weight = entry.weight;
        }
    });
    _lodashEs.forEach(cg.edges(), function(e) {
        var entryV = mappedEntries[e.v];
        var entryW = mappedEntries[e.w];
        if (!_lodashEs.isUndefined(entryV) && !_lodashEs.isUndefined(entryW)) {
            entryW.indegree++;
            entryV.out.push(mappedEntries[e.w]);
        }
    });
    var sourceSet = _lodashEs.filter(mappedEntries, function(entry) {
        // @ts-expect-error
        return !entry.indegree;
    });
    return doResolveConflicts(sourceSet);
}
function doResolveConflicts(sourceSet) {
    var entries = [];
    function handleIn(vEntry) {
        return function(uEntry) {
            if (uEntry.merged) return;
            if (_lodashEs.isUndefined(uEntry.barycenter) || _lodashEs.isUndefined(vEntry.barycenter) || uEntry.barycenter >= vEntry.barycenter) mergeEntries(vEntry, uEntry);
        };
    }
    function handleOut(vEntry) {
        return function(wEntry) {
            wEntry["in"].push(vEntry);
            if (--wEntry.indegree === 0) sourceSet.push(wEntry);
        };
    }
    while(sourceSet.length){
        var entry = sourceSet.pop();
        entries.push(entry);
        _lodashEs.forEach(entry["in"].reverse(), handleIn(entry));
        _lodashEs.forEach(entry.out, handleOut(entry));
    }
    return _lodashEs.map(_lodashEs.filter(entries, function(entry) {
        return !entry.merged;
    }), function(entry) {
        return _lodashEs.pick(entry, [
            "vs",
            "i",
            "barycenter",
            "weight"
        ]);
    });
}
function mergeEntries(target, source) {
    var sum = 0;
    var weight = 0;
    if (target.weight) {
        sum += target.barycenter * target.weight;
        weight += target.weight;
    }
    if (source.weight) {
        sum += source.barycenter * source.weight;
        weight += source.weight;
    }
    target.vs = source.vs.concat(target.vs);
    target.barycenter = sum / weight;
    target.weight = weight;
    target.i = Math.min(source.i, target.i);
    source.merged = true;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Znyg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sort", ()=>sort);
var _lodashEs = require("lodash-es");
var _utilJs = require("../util.js");
function sort(entries, biasRight) {
    var parts = _utilJs.partition(entries, function(entry) {
        return _lodashEs.has(entry, "barycenter");
    });
    var sortable = parts.lhs, unsortable = _lodashEs.sortBy(parts.rhs, function(entry) {
        return -entry.i;
    }), vs = [], sum = 0, weight = 0, vsIndex = 0;
    sortable.sort(compareWithBias(!!biasRight));
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    _lodashEs.forEach(sortable, function(entry) {
        vsIndex += entry.vs.length;
        vs.push(entry.vs);
        sum += entry.barycenter * entry.weight;
        weight += entry.weight;
        vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
    });
    var result = {
        vs: _lodashEs.flatten(vs)
    };
    if (weight) {
        result.barycenter = sum / weight;
        result.weight = weight;
    }
    return result;
}
function consumeUnsortable(vs, unsortable, index) {
    var last;
    while(unsortable.length && (last = _lodashEs.last(unsortable)).i <= index){
        unsortable.pop();
        vs.push(last.vs);
        index++;
    }
    return index;
}
function compareWithBias(bias) {
    return function(entryV, entryW) {
        if (entryV.barycenter < entryW.barycenter) return -1;
        else if (entryV.barycenter > entryW.barycenter) return 1;
        return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
    };
}

},{"lodash-es":"bXNwz","../util.js":"dmcmW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b31hh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parentDummyChains", ()=>parentDummyChains);
var _lodashEs = require("lodash-es");
function parentDummyChains(g) {
    var postorderNums = postorder(g);
    _lodashEs.forEach(g.graph().dummyChains, function(v) {
        var node = g.node(v);
        var edgeObj = node.edgeObj;
        var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
        var path = pathData.path;
        var lca = pathData.lca;
        var pathIdx = 0;
        var pathV = path[pathIdx];
        var ascending = true;
        while(v !== edgeObj.w){
            node = g.node(v);
            if (ascending) {
                while((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank)pathIdx++;
                if (pathV === lca) ascending = false;
            }
            if (!ascending) {
                while(pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node.rank)pathIdx++;
                pathV = path[pathIdx];
            }
            g.setParent(v, pathV);
            v = g.successors(v)[0];
        }
    });
}
// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
    var vPath = [];
    var wPath = [];
    var low = Math.min(postorderNums[v].low, postorderNums[w].low);
    var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
    var parent;
    var lca;
    // Traverse up from v to find the LCA
    parent = v;
    do {
        parent = g.parent(parent);
        vPath.push(parent);
    }while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
    lca = parent;
    // Traverse from w to LCA
    parent = w;
    while((parent = g.parent(parent)) !== lca)wPath.push(parent);
    return {
        path: vPath.concat(wPath.reverse()),
        lca: lca
    };
}
function postorder(g) {
    var result = {};
    var lim = 0;
    function dfs(v) {
        var low = lim;
        _lodashEs.forEach(g.children(v), dfs);
        result[v] = {
            low: low,
            lim: lim++
        };
    }
    _lodashEs.forEach(g.children(), dfs);
    return result;
}

},{"lodash-es":"bXNwz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2dcSZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "position", ()=>position);
var _lodashEs = require("lodash-es");
var _utilJs = require("../util.js");
var _bkJs = require("./bk.js");
function position(g) {
    g = _utilJs.asNonCompoundGraph(g);
    positionY(g);
    _lodashEs.forEach((0, _bkJs.positionX)(g), function(x, v) {
        g.node(v).x = x;
    });
}
function positionY(g) {
    var layering = _utilJs.buildLayerMatrix(g);
    var rankSep = g.graph().ranksep;
    var prevY = 0;
    _lodashEs.forEach(layering, function(layer) {
        var maxHeight = _lodashEs.max(_lodashEs.map(layer, function(v) {
            return g.node(v).height;
        }));
        _lodashEs.forEach(layer, function(v) {
            g.node(v).y = prevY + maxHeight / 2;
        });
        prevY += maxHeight + rankSep;
    });
}

},{"lodash-es":"bXNwz","../util.js":"dmcmW","./bk.js":"5VWUv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VWUv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */ parcelHelpers.export(exports, "positionX", ()=>positionX);
parcelHelpers.export(exports, "findType1Conflicts", ()=>findType1Conflicts);
parcelHelpers.export(exports, "findType2Conflicts", ()=>findType2Conflicts);
parcelHelpers.export(exports, "addConflict", ()=>addConflict);
parcelHelpers.export(exports, "hasConflict", ()=>hasConflict);
parcelHelpers.export(exports, "verticalAlignment", ()=>verticalAlignment);
parcelHelpers.export(exports, "horizontalCompaction", ()=>horizontalCompaction);
parcelHelpers.export(exports, "alignCoordinates", ()=>alignCoordinates);
parcelHelpers.export(exports, "findSmallestWidthAlignment", ()=>findSmallestWidthAlignment);
parcelHelpers.export(exports, "balance", ()=>balance);
var _lodashEs = require("lodash-es");
var _indexJs = require("../../graphlib/index.js");
var _utilJs = require("../util.js");
/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */ function findType1Conflicts(g, layering) {
    var conflicts = {};
    function visitLayer(prevLayer, layer) {
        var // segment.
        k0 = 0, // Tracks the last node in this layer scanned for crossings with a type-1
        // segment.
        scanPos = 0, prevLayerLength = prevLayer.length, lastNode = _lodashEs.last(layer);
        _lodashEs.forEach(layer, function(v, i) {
            var w = findOtherInnerSegmentNode(g, v), k1 = w ? g.node(w).order : prevLayerLength;
            if (w || v === lastNode) {
                _lodashEs.forEach(layer.slice(scanPos, i + 1), function(scanNode) {
                    _lodashEs.forEach(g.predecessors(scanNode), function(u) {
                        var uLabel = g.node(u), uPos = uLabel.order;
                        if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) addConflict(conflicts, u, scanNode);
                    });
                });
                // @ts-expect-error
                scanPos = i + 1;
                k0 = k1;
            }
        });
        return layer;
    }
    _lodashEs.reduce(layering, visitLayer);
    return conflicts;
}
function findType2Conflicts(g, layering) {
    var conflicts = {};
    function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
        var v;
        _lodashEs.forEach(_lodashEs.range(southPos, southEnd), function(i) {
            v = south[i];
            if (g.node(v).dummy) _lodashEs.forEach(g.predecessors(v), function(u) {
                var uNode = g.node(u);
                if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) addConflict(conflicts, u, v);
            });
        });
    }
    function visitLayer(north, south) {
        var prevNorthPos = -1, nextNorthPos, southPos = 0;
        _lodashEs.forEach(south, function(v, southLookahead) {
            if (g.node(v).dummy === "border") {
                var predecessors = g.predecessors(v);
                if (predecessors.length) {
                    nextNorthPos = g.node(predecessors[0]).order;
                    scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
                    // @ts-expect-error
                    southPos = southLookahead;
                    prevNorthPos = nextNorthPos;
                }
            }
            scan(south, southPos, south.length, nextNorthPos, north.length);
        });
        return south;
    }
    _lodashEs.reduce(layering, visitLayer);
    return conflicts;
}
function findOtherInnerSegmentNode(g, v) {
    if (g.node(v).dummy) return _lodashEs.find(g.predecessors(v), function(u) {
        return g.node(u).dummy;
    });
}
function addConflict(conflicts, v, w) {
    if (v > w) {
        var tmp = v;
        v = w;
        w = tmp;
    }
    var conflictsV = conflicts[v];
    if (!conflictsV) conflicts[v] = conflictsV = {};
    conflictsV[w] = true;
}
function hasConflict(conflicts, v, w) {
    if (v > w) {
        var tmp = v;
        v = w;
        w = tmp;
    }
    return _lodashEs.has(conflicts[v], w);
}
/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */ function verticalAlignment(g, layering, conflicts, neighborFn) {
    var root = {}, align = {}, pos = {};
    // We cache the position here based on the layering because the graph and
    // layering may be out of sync. The layering matrix is manipulated to
    // generate different extreme alignments.
    _lodashEs.forEach(layering, function(layer) {
        _lodashEs.forEach(layer, function(v, order) {
            root[v] = v;
            align[v] = v;
            pos[v] = order;
        });
    });
    _lodashEs.forEach(layering, function(layer) {
        var prevIdx = -1;
        _lodashEs.forEach(layer, function(v) {
            var ws = neighborFn(v);
            if (ws.length) {
                ws = _lodashEs.sortBy(ws, function(w) {
                    return pos[w];
                });
                var mp = (ws.length - 1) / 2;
                for(var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i){
                    var w = ws[i];
                    if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
                        align[w] = v;
                        align[v] = root[v] = root[w];
                        prevIdx = pos[w];
                    }
                }
            }
        });
    });
    return {
        root: root,
        align: align
    };
}
function horizontalCompaction(g, layering, root, align, reverseSep) {
    // This portion of the algorithm differs from BK due to a number of problems.
    // Instead of their algorithm we construct a new block graph and do two
    // sweeps. The first sweep places blocks with the smallest possible
    // coordinates. The second sweep removes unused space by moving blocks to the
    // greatest coordinates without violating separation.
    var xs = {}, blockG = buildBlockGraph(g, layering, root, reverseSep), borderType = reverseSep ? "borderLeft" : "borderRight";
    function iterate(setXsFunc, nextNodesFunc) {
        var stack = blockG.nodes();
        var elem = stack.pop();
        var visited = {};
        while(elem){
            if (visited[elem]) setXsFunc(elem);
            else {
                visited[elem] = true;
                stack.push(elem);
                stack = stack.concat(nextNodesFunc(elem));
            }
            elem = stack.pop();
        }
    }
    // First pass, assign smallest coordinates
    function pass1(elem) {
        xs[elem] = blockG.inEdges(elem).reduce(function(acc, e) {
            return Math.max(acc, xs[e.v] + blockG.edge(e));
        }, 0);
    }
    // Second pass, assign greatest coordinates
    function pass2(elem) {
        var min = blockG.outEdges(elem).reduce(function(acc, e) {
            return Math.min(acc, xs[e.w] - blockG.edge(e));
        }, Number.POSITIVE_INFINITY);
        var node = g.node(elem);
        if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) xs[elem] = Math.max(xs[elem], min);
    }
    iterate(pass1, blockG.predecessors.bind(blockG));
    iterate(pass2, blockG.successors.bind(blockG));
    // Assign x coordinates to all nodes
    _lodashEs.forEach(align, function(v) {
        xs[v] = xs[root[v]];
    });
    return xs;
}
function buildBlockGraph(g, layering, root, reverseSep) {
    var blockGraph = new (0, _indexJs.Graph)(), graphLabel = g.graph(), sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
    _lodashEs.forEach(layering, function(layer) {
        var u;
        _lodashEs.forEach(layer, function(v) {
            var vRoot = root[v];
            blockGraph.setNode(vRoot);
            if (u) {
                var uRoot = root[u], prevMax = blockGraph.edge(uRoot, vRoot);
                blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
            }
            u = v;
        });
    });
    return blockGraph;
}
/*
 * Returns the alignment that has the smallest width of the given alignments.
 */ function findSmallestWidthAlignment(g, xss) {
    return _lodashEs.minBy(_lodashEs.values(xss), function(xs) {
        var max = Number.NEGATIVE_INFINITY;
        var min = Number.POSITIVE_INFINITY;
        _lodashEs.forIn(xs, function(x, v) {
            var halfWidth = width(g, v) / 2;
            max = Math.max(x + halfWidth, max);
            min = Math.min(x - halfWidth, min);
        });
        return max - min;
    });
}
/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */ function alignCoordinates(xss, alignTo) {
    var alignToVals = _lodashEs.values(alignTo), alignToMin = _lodashEs.min(alignToVals), alignToMax = _lodashEs.max(alignToVals);
    _lodashEs.forEach([
        "u",
        "d"
    ], function(vert) {
        _lodashEs.forEach([
            "l",
            "r"
        ], function(horiz) {
            var alignment = vert + horiz, xs = xss[alignment], delta;
            if (xs === alignTo) return;
            var xsVals = _lodashEs.values(xs);
            delta = horiz === "l" ? alignToMin - _lodashEs.min(xsVals) : alignToMax - _lodashEs.max(xsVals);
            if (delta) xss[alignment] = _lodashEs.mapValues(xs, function(x) {
                return x + delta;
            });
        });
    });
}
function balance(xss, align) {
    return _lodashEs.mapValues(xss.ul, function(ignore, v) {
        if (align) return xss[align.toLowerCase()][v];
        else {
            var xs = _lodashEs.sortBy(_lodashEs.map(xss, v));
            return (xs[1] + xs[2]) / 2;
        }
    });
}
function positionX(g) {
    var layering = _utilJs.buildLayerMatrix(g);
    var conflicts = _lodashEs.merge(findType1Conflicts(g, layering), findType2Conflicts(g, layering));
    var xss = {};
    var adjustedLayering;
    _lodashEs.forEach([
        "u",
        "d"
    ], function(vert) {
        adjustedLayering = vert === "u" ? layering : _lodashEs.values(layering).reverse();
        _lodashEs.forEach([
            "l",
            "r"
        ], function(horiz) {
            if (horiz === "r") adjustedLayering = _lodashEs.map(adjustedLayering, function(inner) {
                return _lodashEs.values(inner).reverse();
            });
            var neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
            var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
            var xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === "r");
            if (horiz === "r") xs = _lodashEs.mapValues(xs, function(x) {
                return -x;
            });
            xss[vert + horiz] = xs;
        });
    });
    var smallestWidth = findSmallestWidthAlignment(g, xss);
    alignCoordinates(xss, smallestWidth);
    return balance(xss, g.graph().align);
}
function sep(nodeSep, edgeSep, reverseSep) {
    return function(g, v, w) {
        var vLabel = g.node(v);
        var wLabel = g.node(w);
        var sum = 0;
        var delta;
        sum += vLabel.width / 2;
        if (_lodashEs.has(vLabel, "labelpos")) switch(vLabel.labelpos.toLowerCase()){
            case "l":
                delta = -vLabel.width / 2;
                break;
            case "r":
                delta = vLabel.width / 2;
                break;
        }
        if (delta) sum += reverseSep ? delta : -delta;
        delta = 0;
        sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
        sum += wLabel.width / 2;
        if (_lodashEs.has(wLabel, "labelpos")) switch(wLabel.labelpos.toLowerCase()){
            case "l":
                delta = wLabel.width / 2;
                break;
            case "r":
                delta = -wLabel.width / 2;
                break;
        }
        if (delta) sum += reverseSep ? delta : -delta;
        delta = 0;
        return sum;
    };
}
function width(g, v) {
    return g.node(v).width;
}

},{"lodash-es":"bXNwz","../../graphlib/index.js":"2nAwO","../util.js":"dmcmW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d2Pb4"], null, "parcelRequire54bf")

//# sourceMappingURL=flowDiagram-42bb1e4d.25ce630e.js.map
