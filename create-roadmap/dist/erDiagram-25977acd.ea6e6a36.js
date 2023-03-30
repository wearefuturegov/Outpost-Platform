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
})({"hpIM8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "79249fedea6e6a36";
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

},{}],"5FIVu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diagram", ()=>diagram);
var _config389B86FfJs = require("./config-389b86ff.js");
var _mermaidAPI0716C7C2Js = require("./mermaidAPI-0716c7c2.js");
var _commonDb2Ace122BJs = require("./commonDb-2ace122b.js");
var _indexJs = require("dagre-d3-es/src/graphlib/index.js");
var _d3 = require("d3");
var _indexJs1 = require("dagre-d3-es/src/dagre/index.js");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
var _setupGraphViewboxE35E4124Js = require("./setupGraphViewbox-e35e4124.js");
var _uuid = require("uuid");
var _dompurify = require("dompurify");
var _dayjs = require("dayjs");
var _khroma = require("khroma");
var _stylis = require("stylis");
var _errorRendererD05351B9Js = require("./errorRenderer-d05351b9.js");
var _isEmptyJs = require("lodash-es/isEmpty.js");
var _sanitizeUrl = require("@braintree/sanitize-url");
var _memoizeJs = require("lodash-es/memoize.js");
var parser = function() {
    var o = function(k, v, o2, l) {
        for(o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v);
        return o2;
    }, $V0 = [
        1,
        2
    ], $V1 = [
        1,
        5
    ], $V2 = [
        6,
        9,
        11,
        23,
        25,
        27,
        29,
        30,
        31,
        51
    ], $V3 = [
        1,
        17
    ], $V4 = [
        1,
        18
    ], $V5 = [
        1,
        19
    ], $V6 = [
        1,
        20
    ], $V7 = [
        1,
        21
    ], $V8 = [
        1,
        22
    ], $V9 = [
        1,
        25
    ], $Va = [
        1,
        30
    ], $Vb = [
        1,
        31
    ], $Vc = [
        1,
        32
    ], $Vd = [
        1,
        33
    ], $Ve = [
        6,
        9,
        11,
        15,
        20,
        23,
        25,
        27,
        29,
        30,
        31,
        44,
        45,
        46,
        47,
        51
    ], $Vf = [
        1,
        45
    ], $Vg = [
        30,
        31,
        48,
        49
    ], $Vh = [
        4,
        6,
        9,
        11,
        23,
        25,
        27,
        29,
        30,
        31,
        51
    ], $Vi = [
        44,
        45,
        46,
        47
    ], $Vj = [
        22,
        37
    ], $Vk = [
        1,
        65
    ], $Vl = [
        1,
        64
    ], $Vm = [
        22,
        37,
        39,
        41
    ];
    var parser2 = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "start": 3,
            "ER_DIAGRAM": 4,
            "document": 5,
            "EOF": 6,
            "directive": 7,
            "line": 8,
            "SPACE": 9,
            "statement": 10,
            "NEWLINE": 11,
            "openDirective": 12,
            "typeDirective": 13,
            "closeDirective": 14,
            ":": 15,
            "argDirective": 16,
            "entityName": 17,
            "relSpec": 18,
            "role": 19,
            "BLOCK_START": 20,
            "attributes": 21,
            "BLOCK_STOP": 22,
            "title": 23,
            "title_value": 24,
            "acc_title": 25,
            "acc_title_value": 26,
            "acc_descr": 27,
            "acc_descr_value": 28,
            "acc_descr_multiline_value": 29,
            "ALPHANUM": 30,
            "ENTITY_NAME": 31,
            "attribute": 32,
            "attributeType": 33,
            "attributeName": 34,
            "attributeKeyTypeList": 35,
            "attributeComment": 36,
            "ATTRIBUTE_WORD": 37,
            "attributeKeyType": 38,
            "COMMA": 39,
            "ATTRIBUTE_KEY": 40,
            "COMMENT": 41,
            "cardinality": 42,
            "relType": 43,
            "ZERO_OR_ONE": 44,
            "ZERO_OR_MORE": 45,
            "ONE_OR_MORE": 46,
            "ONLY_ONE": 47,
            "NON_IDENTIFYING": 48,
            "IDENTIFYING": 49,
            "WORD": 50,
            "open_directive": 51,
            "type_directive": 52,
            "arg_directive": 53,
            "close_directive": 54,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            4: "ER_DIAGRAM",
            6: "EOF",
            9: "SPACE",
            11: "NEWLINE",
            15: ":",
            20: "BLOCK_START",
            22: "BLOCK_STOP",
            23: "title",
            24: "title_value",
            25: "acc_title",
            26: "acc_title_value",
            27: "acc_descr",
            28: "acc_descr_value",
            29: "acc_descr_multiline_value",
            30: "ALPHANUM",
            31: "ENTITY_NAME",
            37: "ATTRIBUTE_WORD",
            39: "COMMA",
            40: "ATTRIBUTE_KEY",
            41: "COMMENT",
            44: "ZERO_OR_ONE",
            45: "ZERO_OR_MORE",
            46: "ONE_OR_MORE",
            47: "ONLY_ONE",
            48: "NON_IDENTIFYING",
            49: "IDENTIFYING",
            50: "WORD",
            51: "open_directive",
            52: "type_directive",
            53: "arg_directive",
            54: "close_directive"
        },
        productions_: [
            0,
            [
                3,
                3
            ],
            [
                3,
                2
            ],
            [
                5,
                0
            ],
            [
                5,
                2
            ],
            [
                8,
                2
            ],
            [
                8,
                1
            ],
            [
                8,
                1
            ],
            [
                8,
                1
            ],
            [
                7,
                4
            ],
            [
                7,
                6
            ],
            [
                10,
                1
            ],
            [
                10,
                5
            ],
            [
                10,
                4
            ],
            [
                10,
                3
            ],
            [
                10,
                1
            ],
            [
                10,
                2
            ],
            [
                10,
                2
            ],
            [
                10,
                2
            ],
            [
                10,
                1
            ],
            [
                17,
                1
            ],
            [
                17,
                1
            ],
            [
                21,
                1
            ],
            [
                21,
                2
            ],
            [
                32,
                2
            ],
            [
                32,
                3
            ],
            [
                32,
                3
            ],
            [
                32,
                4
            ],
            [
                33,
                1
            ],
            [
                34,
                1
            ],
            [
                35,
                1
            ],
            [
                35,
                3
            ],
            [
                38,
                1
            ],
            [
                36,
                1
            ],
            [
                18,
                3
            ],
            [
                42,
                1
            ],
            [
                42,
                1
            ],
            [
                42,
                1
            ],
            [
                42,
                1
            ],
            [
                43,
                1
            ],
            [
                43,
                1
            ],
            [
                19,
                1
            ],
            [
                19,
                1
            ],
            [
                19,
                1
            ],
            [
                12,
                1
            ],
            [
                13,
                1
            ],
            [
                16,
                1
            ],
            [
                14,
                1
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 1:
                    break;
                case 3:
                    this.$ = [];
                    break;
                case 4:
                    $$[$0 - 1].push($$[$0]);
                    this.$ = $$[$0 - 1];
                    break;
                case 5:
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                case 8:
                    this.$ = [];
                    break;
                case 12:
                    yy.addEntity($$[$0 - 4]);
                    yy.addEntity($$[$0 - 2]);
                    yy.addRelationship($$[$0 - 4], $$[$0], $$[$0 - 2], $$[$0 - 3]);
                    break;
                case 13:
                    yy.addEntity($$[$0 - 3]);
                    yy.addAttributes($$[$0 - 3], $$[$0 - 1]);
                    break;
                case 14:
                    yy.addEntity($$[$0 - 2]);
                    break;
                case 15:
                    yy.addEntity($$[$0]);
                    break;
                case 16:
                case 17:
                    this.$ = $$[$0].trim();
                    yy.setAccTitle(this.$);
                    break;
                case 18:
                case 19:
                    this.$ = $$[$0].trim();
                    yy.setAccDescription(this.$);
                    break;
                case 20:
                case 43:
                    this.$ = $$[$0];
                    break;
                case 21:
                case 41:
                case 42:
                    this.$ = $$[$0].replace(/"/g, "");
                    break;
                case 22:
                case 30:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 23:
                    $$[$0].push($$[$0 - 1]);
                    this.$ = $$[$0];
                    break;
                case 24:
                    this.$ = {
                        attributeType: $$[$0 - 1],
                        attributeName: $$[$0]
                    };
                    break;
                case 25:
                    this.$ = {
                        attributeType: $$[$0 - 2],
                        attributeName: $$[$0 - 1],
                        attributeKeyTypeList: $$[$0]
                    };
                    break;
                case 26:
                    this.$ = {
                        attributeType: $$[$0 - 2],
                        attributeName: $$[$0 - 1],
                        attributeComment: $$[$0]
                    };
                    break;
                case 27:
                    this.$ = {
                        attributeType: $$[$0 - 3],
                        attributeName: $$[$0 - 2],
                        attributeKeyTypeList: $$[$0 - 1],
                        attributeComment: $$[$0]
                    };
                    break;
                case 28:
                case 29:
                case 32:
                    this.$ = $$[$0];
                    break;
                case 31:
                    $$[$0 - 2].push($$[$0]);
                    this.$ = $$[$0 - 2];
                    break;
                case 33:
                    this.$ = $$[$0].replace(/"/g, "");
                    break;
                case 34:
                    this.$ = {
                        cardA: $$[$0],
                        relType: $$[$0 - 1],
                        cardB: $$[$0 - 2]
                    };
                    break;
                case 35:
                    this.$ = yy.Cardinality.ZERO_OR_ONE;
                    break;
                case 36:
                    this.$ = yy.Cardinality.ZERO_OR_MORE;
                    break;
                case 37:
                    this.$ = yy.Cardinality.ONE_OR_MORE;
                    break;
                case 38:
                    this.$ = yy.Cardinality.ONLY_ONE;
                    break;
                case 39:
                    this.$ = yy.Identification.NON_IDENTIFYING;
                    break;
                case 40:
                    this.$ = yy.Identification.IDENTIFYING;
                    break;
                case 44:
                    yy.parseDirective("%%{", "open_directive");
                    break;
                case 45:
                    yy.parseDirective($$[$0], "type_directive");
                    break;
                case 46:
                    $$[$0] = $$[$0].trim().replace(/'/g, '"');
                    yy.parseDirective($$[$0], "arg_directive");
                    break;
                case 47:
                    yy.parseDirective("}%%", "close_directive", "er");
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: $V0,
                7: 3,
                12: 4,
                51: $V1
            },
            {
                1: [
                    3
                ]
            },
            o($V2, [
                2,
                3
            ], {
                5: 6
            }),
            {
                3: 7,
                4: $V0,
                7: 3,
                12: 4,
                51: $V1
            },
            {
                13: 8,
                52: [
                    1,
                    9
                ]
            },
            {
                52: [
                    2,
                    44
                ]
            },
            {
                6: [
                    1,
                    10
                ],
                7: 15,
                8: 11,
                9: [
                    1,
                    12
                ],
                10: 13,
                11: [
                    1,
                    14
                ],
                12: 4,
                17: 16,
                23: $V3,
                25: $V4,
                27: $V5,
                29: $V6,
                30: $V7,
                31: $V8,
                51: $V1
            },
            {
                1: [
                    2,
                    2
                ]
            },
            {
                14: 23,
                15: [
                    1,
                    24
                ],
                54: $V9
            },
            o([
                15,
                54
            ], [
                2,
                45
            ]),
            o($V2, [
                2,
                8
            ], {
                1: [
                    2,
                    1
                ]
            }),
            o($V2, [
                2,
                4
            ]),
            {
                7: 15,
                10: 26,
                12: 4,
                17: 16,
                23: $V3,
                25: $V4,
                27: $V5,
                29: $V6,
                30: $V7,
                31: $V8,
                51: $V1
            },
            o($V2, [
                2,
                6
            ]),
            o($V2, [
                2,
                7
            ]),
            o($V2, [
                2,
                11
            ]),
            o($V2, [
                2,
                15
            ], {
                18: 27,
                42: 29,
                20: [
                    1,
                    28
                ],
                44: $Va,
                45: $Vb,
                46: $Vc,
                47: $Vd
            }),
            {
                24: [
                    1,
                    34
                ]
            },
            {
                26: [
                    1,
                    35
                ]
            },
            {
                28: [
                    1,
                    36
                ]
            },
            o($V2, [
                2,
                19
            ]),
            o($Ve, [
                2,
                20
            ]),
            o($Ve, [
                2,
                21
            ]),
            {
                11: [
                    1,
                    37
                ]
            },
            {
                16: 38,
                53: [
                    1,
                    39
                ]
            },
            {
                11: [
                    2,
                    47
                ]
            },
            o($V2, [
                2,
                5
            ]),
            {
                17: 40,
                30: $V7,
                31: $V8
            },
            {
                21: 41,
                22: [
                    1,
                    42
                ],
                32: 43,
                33: 44,
                37: $Vf
            },
            {
                43: 46,
                48: [
                    1,
                    47
                ],
                49: [
                    1,
                    48
                ]
            },
            o($Vg, [
                2,
                35
            ]),
            o($Vg, [
                2,
                36
            ]),
            o($Vg, [
                2,
                37
            ]),
            o($Vg, [
                2,
                38
            ]),
            o($V2, [
                2,
                16
            ]),
            o($V2, [
                2,
                17
            ]),
            o($V2, [
                2,
                18
            ]),
            o($Vh, [
                2,
                9
            ]),
            {
                14: 49,
                54: $V9
            },
            {
                54: [
                    2,
                    46
                ]
            },
            {
                15: [
                    1,
                    50
                ]
            },
            {
                22: [
                    1,
                    51
                ]
            },
            o($V2, [
                2,
                14
            ]),
            {
                21: 52,
                22: [
                    2,
                    22
                ],
                32: 43,
                33: 44,
                37: $Vf
            },
            {
                34: 53,
                37: [
                    1,
                    54
                ]
            },
            {
                37: [
                    2,
                    28
                ]
            },
            {
                42: 55,
                44: $Va,
                45: $Vb,
                46: $Vc,
                47: $Vd
            },
            o($Vi, [
                2,
                39
            ]),
            o($Vi, [
                2,
                40
            ]),
            {
                11: [
                    1,
                    56
                ]
            },
            {
                19: 57,
                30: [
                    1,
                    60
                ],
                31: [
                    1,
                    59
                ],
                50: [
                    1,
                    58
                ]
            },
            o($V2, [
                2,
                13
            ]),
            {
                22: [
                    2,
                    23
                ]
            },
            o($Vj, [
                2,
                24
            ], {
                35: 61,
                36: 62,
                38: 63,
                40: $Vk,
                41: $Vl
            }),
            o([
                22,
                37,
                40,
                41
            ], [
                2,
                29
            ]),
            o([
                30,
                31
            ], [
                2,
                34
            ]),
            o($Vh, [
                2,
                10
            ]),
            o($V2, [
                2,
                12
            ]),
            o($V2, [
                2,
                41
            ]),
            o($V2, [
                2,
                42
            ]),
            o($V2, [
                2,
                43
            ]),
            o($Vj, [
                2,
                25
            ], {
                36: 66,
                39: [
                    1,
                    67
                ],
                41: $Vl
            }),
            o($Vj, [
                2,
                26
            ]),
            o($Vm, [
                2,
                30
            ]),
            o($Vj, [
                2,
                33
            ]),
            o($Vm, [
                2,
                32
            ]),
            o($Vj, [
                2,
                27
            ]),
            {
                38: 68,
                40: $Vk
            },
            o($Vm, [
                2,
                31
            ])
        ],
        defaultActions: {
            5: [
                2,
                44
            ],
            7: [
                2,
                2
            ],
            25: [
                2,
                47
            ],
            39: [
                2,
                46
            ],
            45: [
                2,
                28
            ],
            52: [
                2,
                23
            ]
        },
        parseError: function parseError(str, hash) {
            if (hash.recoverable) this.trace(str);
            else {
                var error = new Error(str);
                error.hash = hash;
                throw error;
            }
        },
        parse: function parse(input) {
            var self = this, stack = [
                0
            ], tstack = [], vstack = [
                null
            ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, TERROR = 2, EOF = 1;
            var args = lstack.slice.call(arguments, 1);
            var lexer2 = Object.create(this.lexer);
            var sharedState = {
                yy: {}
            };
            for(var k in this.yy)if (Object.prototype.hasOwnProperty.call(this.yy, k)) sharedState.yy[k] = this.yy[k];
            lexer2.setInput(input, sharedState.yy);
            sharedState.yy.lexer = lexer2;
            sharedState.yy.parser = this;
            if (typeof lexer2.yylloc == "undefined") lexer2.yylloc = {};
            var yyloc = lexer2.yylloc;
            lstack.push(yyloc);
            var ranges = lexer2.options && lexer2.options.ranges;
            if (typeof sharedState.yy.parseError === "function") this.parseError = sharedState.yy.parseError;
            else this.parseError = Object.getPrototypeOf(this).parseError;
            function lex() {
                var token;
                token = tstack.pop() || lexer2.lex() || EOF;
                if (typeof token !== "number") {
                    if (token instanceof Array) {
                        tstack = token;
                        token = tstack.pop();
                    }
                    token = self.symbols_[token] || token;
                }
                return token;
            }
            var symbol, state, action, r, yyval = {}, p, len, newState, expected;
            while(true){
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) action = this.defaultActions[state];
                else {
                    if (symbol === null || typeof symbol == "undefined") symbol = lex();
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    expected = [];
                    for(p in table[state])if (this.terminals_[p] && p > TERROR) expected.push("'" + this.terminals_[p] + "'");
                    if (lexer2.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                    else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                    this.parseError(errStr, {
                        text: lexer2.match,
                        token: this.terminals_[symbol] || symbol,
                        line: lexer2.yylineno,
                        loc: yyloc,
                        expected
                    });
                }
                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                switch(action[0]){
                    case 1:
                        stack.push(symbol);
                        vstack.push(lexer2.yytext);
                        lstack.push(lexer2.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        yyleng = lexer2.yyleng;
                        yytext = lexer2.yytext;
                        yylineno = lexer2.yylineno;
                        yyloc = lexer2.yylloc;
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) yyval._$.range = [
                            lstack[lstack.length - (len || 1)].range[0],
                            lstack[lstack.length - 1].range[1]
                        ];
                        r = this.performAction.apply(yyval, [
                            yytext,
                            yyleng,
                            yylineno,
                            sharedState.yy,
                            action[1],
                            vstack,
                            lstack
                        ].concat(args));
                        if (typeof r !== "undefined") return r;
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };
    var lexer = function() {
        var lexer2 = {
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) this.yy.parser.parseError(str, hash);
                else throw new Error(str);
            },
            // resets the lexer, sets new input
            setInput: function(input, yy) {
                this.yy = yy || this.yy || {};
                this._input = input;
                this._more = this._backtrack = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = "";
                this.conditionStack = [
                    "INITIAL"
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) this.yylloc.range = [
                    0,
                    0
                ];
                this.offset = 0;
                return this;
            },
            // consumes and returns one char from the input
            input: function() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else this.yylloc.last_column++;
                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
            },
            // unshifts one char (or a string) into the input
            unput: function(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len);
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) this.yylloc.range = [
                    r[0],
                    r[0] + this.yyleng - len
                ];
                this.yyleng = this.yytext.length;
                return this;
            },
            // When called from action, caches matched text and appends it on next action
            more: function() {
                this._more = true;
                return this;
            },
            // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
            reject: function() {
                if (this.options.backtrack_lexer) this._backtrack = true;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
                return this;
            },
            // retain first n characters of the match
            less: function(n) {
                this.unput(this.match.slice(n));
            },
            // displays already matched input, i.e. for error messages
            pastInput: function() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
            },
            // displays upcoming input, i.e. for error messages
            upcomingInput: function() {
                var next = this.match;
                if (next.length < 20) next += this._input.substr(0, 20 - next.length);
                return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            // displays the character position where the lexing error occurred, i.e. for error messages
            showPosition: function() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            // test the lexed token: return FALSE when not a match, otherwise return token
            test_match: function(match, indexed_rule) {
                var token, lines, backup;
                if (this.options.backtrack_lexer) {
                    backup = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    };
                    if (this.options.ranges) backup.yylloc.range = this.yylloc.range.slice(0);
                }
                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                };
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) this.yylloc.range = [
                    this.offset,
                    this.offset += this.yyleng
                ];
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) this.done = false;
                if (token) return token;
                else if (this._backtrack) {
                    for(var k in backup)this[k] = backup[k];
                    return false;
                }
                return false;
            },
            // return next match in input
            next: function() {
                if (this.done) return this.EOF;
                if (!this._input) this.done = true;
                var token, match, tempMatch, index;
                if (!this._more) {
                    this.yytext = "";
                    this.match = "";
                }
                var rules = this._currentRules();
                for(var i = 0; i < rules.length; i++){
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (this.options.backtrack_lexer) {
                            token = this.test_match(tempMatch, rules[i]);
                            if (token !== false) return token;
                            else if (this._backtrack) {
                                match = false;
                                continue;
                            } else return false;
                        } else if (!this.options.flex) break;
                    }
                }
                if (match) {
                    token = this.test_match(match, rules[index]);
                    if (token !== false) return token;
                    return false;
                }
                if (this._input === "") return this.EOF;
                else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            // return next match that has a token
            lex: function lex() {
                var r = this.next();
                if (r) return r;
                else return this.lex();
            },
            // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            // pop the previously active lexer condition state off the condition stack
            popState: function popState() {
                var n = this.conditionStack.length - 1;
                if (n > 0) return this.conditionStack.pop();
                else return this.conditionStack[0];
            },
            // produce the lexer rule set which is active for the currently active lexer condition state
            _currentRules: function _currentRules() {
                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                else return this.conditions["INITIAL"].rules;
            },
            // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
            topState: function topState(n) {
                n = this.conditionStack.length - 1 - Math.abs(n || 0);
                if (n >= 0) return this.conditionStack[n];
                else return "INITIAL";
            },
            // alias for begin(condition)
            pushState: function pushState(condition) {
                this.begin(condition);
            },
            // return the number of states currently on the stack
            stateStackSize: function stateStackSize() {
                return this.conditionStack.length;
            },
            options: {
                "case-insensitive": true
            },
            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                switch($avoiding_name_collisions){
                    case 0:
                        this.begin("acc_title");
                        return 25;
                    case 1:
                        this.popState();
                        return "acc_title_value";
                    case 2:
                        this.begin("acc_descr");
                        return 27;
                    case 3:
                        this.popState();
                        return "acc_descr_value";
                    case 4:
                        this.begin("acc_descr_multiline");
                        break;
                    case 5:
                        this.popState();
                        break;
                    case 6:
                        return "acc_descr_multiline_value";
                    case 7:
                        this.begin("open_directive");
                        return 51;
                    case 8:
                        this.begin("type_directive");
                        return 52;
                    case 9:
                        this.popState();
                        this.begin("arg_directive");
                        return 15;
                    case 10:
                        this.popState();
                        this.popState();
                        return 54;
                    case 11:
                        return 53;
                    case 12:
                        break;
                    case 13:
                        break;
                    case 14:
                        return 11;
                    case 15:
                        break;
                    case 16:
                        return 9;
                    case 17:
                        return 31;
                    case 18:
                        return 50;
                    case 19:
                        return 4;
                    case 20:
                        this.begin("block");
                        return 20;
                    case 21:
                        return 39;
                    case 22:
                        break;
                    case 23:
                        return 40;
                    case 24:
                        return 37;
                    case 25:
                        return 37;
                    case 26:
                        return 41;
                    case 27:
                        break;
                    case 28:
                        break;
                    case 29:
                        break;
                    case 30:
                        this.popState();
                        return 22;
                    case 31:
                        return yy_.yytext[0];
                    case 32:
                        return 44;
                    case 33:
                        return 46;
                    case 34:
                        return 46;
                    case 35:
                        return 46;
                    case 36:
                        return 44;
                    case 37:
                        return 44;
                    case 38:
                        return 45;
                    case 39:
                        return 45;
                    case 40:
                        return 45;
                    case 41:
                        return 45;
                    case 42:
                        return 45;
                    case 43:
                        return 46;
                    case 44:
                        return 45;
                    case 45:
                        return 46;
                    case 46:
                        return 47;
                    case 47:
                        return 47;
                    case 48:
                        return 47;
                    case 49:
                        return 47;
                    case 50:
                        return 44;
                    case 51:
                        return 45;
                    case 52:
                        return 46;
                    case 53:
                        return 48;
                    case 54:
                        return 49;
                    case 55:
                        return 49;
                    case 56:
                        return 48;
                    case 57:
                        return 48;
                    case 58:
                        return 48;
                    case 59:
                        return 30;
                    case 60:
                        return yy_.yytext[0];
                    case 61:
                        return 6;
                }
            },
            rules: [
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:[\}])/i,
                /^(?:[^\}]*)/i,
                /^(?:%%\{)/i,
                /^(?:((?:(?!\}%%)[^:.])*))/i,
                /^(?::)/i,
                /^(?:\}%%)/i,
                /^(?:((?:(?!\}%%).|\n)*))/i,
                /^(?:%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:[\n]+)/i,
                /^(?:\s+)/i,
                /^(?:[\s]+)/i,
                /^(?:"[^"%\r\n\v\b\\]+")/i,
                /^(?:"[^"]*")/i,
                /^(?:erDiagram\b)/i,
                /^(?:\{)/i,
                /^(?:,)/i,
                /^(?:\s+)/i,
                /^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,
                /^(?:(.*?)[~](.*?)*[~])/i,
                /^(?:[A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,
                /^(?:"[^"]*")/i,
                /^(?:[\n]+)/i,
                /^(?:%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:\})/i,
                /^(?:.)/i,
                /^(?:one or zero\b)/i,
                /^(?:one or more\b)/i,
                /^(?:one or many\b)/i,
                /^(?:1\+)/i,
                /^(?:\|o\b)/i,
                /^(?:zero or one\b)/i,
                /^(?:zero or more\b)/i,
                /^(?:zero or many\b)/i,
                /^(?:0\+)/i,
                /^(?:\}o\b)/i,
                /^(?:many\(0\))/i,
                /^(?:many\(1\))/i,
                /^(?:many\b)/i,
                /^(?:\}\|)/i,
                /^(?:one\b)/i,
                /^(?:only one\b)/i,
                /^(?:1\b)/i,
                /^(?:\|\|)/i,
                /^(?:o\|)/i,
                /^(?:o\{)/i,
                /^(?:\|\{)/i,
                /^(?:\.\.)/i,
                /^(?:--)/i,
                /^(?:to\b)/i,
                /^(?:optionally to\b)/i,
                /^(?:\.-)/i,
                /^(?:-\.)/i,
                /^(?:[A-Za-z][A-Za-z0-9\-_]*)/i,
                /^(?:.)/i,
                /^(?:$)/i
            ],
            conditions: {
                "acc_descr_multiline": {
                    "rules": [
                        5,
                        6
                    ],
                    "inclusive": false
                },
                "acc_descr": {
                    "rules": [
                        3
                    ],
                    "inclusive": false
                },
                "acc_title": {
                    "rules": [
                        1
                    ],
                    "inclusive": false
                },
                "open_directive": {
                    "rules": [
                        8
                    ],
                    "inclusive": false
                },
                "type_directive": {
                    "rules": [
                        9,
                        10
                    ],
                    "inclusive": false
                },
                "arg_directive": {
                    "rules": [
                        10,
                        11
                    ],
                    "inclusive": false
                },
                "block": {
                    "rules": [
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31
                    ],
                    "inclusive": false
                },
                "INITIAL": {
                    "rules": [
                        0,
                        2,
                        4,
                        7,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59,
                        60,
                        61
                    ],
                    "inclusive": true
                }
            }
        };
        return lexer2;
    }();
    parser2.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser2;
    parser2.Parser = Parser;
    return new Parser();
}();
parser.parser = parser;
const erParser = parser;
let entities = {};
let relationships = [];
const Cardinality = {
    ZERO_OR_ONE: "ZERO_OR_ONE",
    ZERO_OR_MORE: "ZERO_OR_MORE",
    ONE_OR_MORE: "ONE_OR_MORE",
    ONLY_ONE: "ONLY_ONE"
};
const Identification = {
    NON_IDENTIFYING: "NON_IDENTIFYING",
    IDENTIFYING: "IDENTIFYING"
};
const parseDirective = function(statement, context, type) {
    (0, _mermaidAPI0716C7C2Js.m).parseDirective(this, statement, context, type);
};
const addEntity = function(name) {
    if (entities[name] === void 0) {
        entities[name] = {
            attributes: []
        };
        (0, _config389B86FfJs.l).info("Added new entity :", name);
    }
    return entities[name];
};
const getEntities = ()=>entities;
const addAttributes = function(entityName, attribs) {
    let entity = addEntity(entityName);
    let i;
    for(i = attribs.length - 1; i >= 0; i--){
        entity.attributes.push(attribs[i]);
        (0, _config389B86FfJs.l).debug("Added attribute ", attribs[i].attributeName);
    }
};
const addRelationship = function(entA, rolA, entB, rSpec) {
    let rel = {
        entityA: entA,
        roleA: rolA,
        entityB: entB,
        relSpec: rSpec
    };
    relationships.push(rel);
    (0, _config389B86FfJs.l).debug("Added new relationship :", rel);
};
const getRelationships = ()=>relationships;
const clear = function() {
    entities = {};
    relationships = [];
    (0, _commonDb2Ace122BJs.f)();
};
const erDb = {
    Cardinality,
    Identification,
    parseDirective,
    getConfig: ()=>(0, _config389B86FfJs.g)().er,
    addEntity,
    addAttributes,
    getEntities,
    addRelationship,
    getRelationships,
    clear,
    setAccTitle: (0, _commonDb2Ace122BJs.s),
    getAccTitle: (0, _commonDb2Ace122BJs.g),
    setAccDescription: (0, _commonDb2Ace122BJs.b),
    getAccDescription: (0, _commonDb2Ace122BJs.a),
    setDiagramTitle: (0, _commonDb2Ace122BJs.d),
    getDiagramTitle: (0, _commonDb2Ace122BJs.e)
};
const ERMarkers = {
    ONLY_ONE_START: "ONLY_ONE_START",
    ONLY_ONE_END: "ONLY_ONE_END",
    ZERO_OR_ONE_START: "ZERO_OR_ONE_START",
    ZERO_OR_ONE_END: "ZERO_OR_ONE_END",
    ONE_OR_MORE_START: "ONE_OR_MORE_START",
    ONE_OR_MORE_END: "ONE_OR_MORE_END",
    ZERO_OR_MORE_START: "ZERO_OR_MORE_START",
    ZERO_OR_MORE_END: "ZERO_OR_MORE_END"
};
const insertMarkers = function(elem, conf2) {
    let marker;
    elem.append("defs").append("marker").attr("id", ERMarkers.ONLY_ONE_START).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M9,0 L9,18 M15,0 L15,18");
    elem.append("defs").append("marker").attr("id", ERMarkers.ONLY_ONE_END).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M3,0 L3,18 M9,0 L9,18");
    marker = elem.append("defs").append("marker").attr("id", ERMarkers.ZERO_OR_ONE_START).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    marker.append("circle").attr("stroke", conf2.stroke).attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6);
    marker.append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M9,0 L9,18");
    marker = elem.append("defs").append("marker").attr("id", ERMarkers.ZERO_OR_ONE_END).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    marker.append("circle").attr("stroke", conf2.stroke).attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6);
    marker.append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M21,0 L21,18");
    elem.append("defs").append("marker").attr("id", ERMarkers.ONE_OR_MORE_START).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27");
    elem.append("defs").append("marker").attr("id", ERMarkers.ONE_OR_MORE_END).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
    marker = elem.append("defs").append("marker").attr("id", ERMarkers.ZERO_OR_MORE_START).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    marker.append("circle").attr("stroke", conf2.stroke).attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6);
    marker.append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
    marker = elem.append("defs").append("marker").attr("id", ERMarkers.ZERO_OR_MORE_END).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    marker.append("circle").attr("stroke", conf2.stroke).attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6);
    marker.append("path").attr("stroke", conf2.stroke).attr("fill", "none").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
    return;
};
const erMarkers = {
    ERMarkers,
    insertMarkers
};
const BAD_ID_CHARS_REGEXP = /[^\dA-Za-z](\W)*/g;
let conf = {};
let entityNameIds = /* @__PURE__ */ new Map();
const setConf = function(cnf) {
    const keys = Object.keys(cnf);
    for (const key of keys)conf[key] = cnf[key];
};
const drawAttributes = (groupNode, entityTextNode, attributes)=>{
    const heightPadding = conf.entityPadding / 3;
    const widthPadding = conf.entityPadding / 3;
    const attrFontSize = conf.fontSize * 0.85;
    const labelBBox = entityTextNode.node().getBBox();
    const attributeNodes = [];
    let hasKeyType = false;
    let hasComment = false;
    let maxTypeWidth = 0;
    let maxNameWidth = 0;
    let maxKeyWidth = 0;
    let maxCommentWidth = 0;
    let cumulativeHeight = labelBBox.height + heightPadding * 2;
    let attrNum = 1;
    attributes.forEach((item)=>{
        if (item.attributeKeyTypeList !== void 0 && item.attributeKeyTypeList.length > 0) hasKeyType = true;
        if (item.attributeComment !== void 0) hasComment = true;
    });
    attributes.forEach((item)=>{
        const attrPrefix = `${entityTextNode.node().id}-attr-${attrNum}`;
        let nodeHeight = 0;
        const attributeType = (0, _config389B86FfJs.p)(item.attributeType);
        const typeNode = groupNode.append("text").classed("er entityLabel", true).attr("id", `${attrPrefix}-type`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", (0, _config389B86FfJs.g)().fontFamily).style("font-size", attrFontSize + "px").text(attributeType);
        const nameNode = groupNode.append("text").classed("er entityLabel", true).attr("id", `${attrPrefix}-name`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", (0, _config389B86FfJs.g)().fontFamily).style("font-size", attrFontSize + "px").text(item.attributeName);
        const attributeNode = {};
        attributeNode.tn = typeNode;
        attributeNode.nn = nameNode;
        const typeBBox = typeNode.node().getBBox();
        const nameBBox = nameNode.node().getBBox();
        maxTypeWidth = Math.max(maxTypeWidth, typeBBox.width);
        maxNameWidth = Math.max(maxNameWidth, nameBBox.width);
        nodeHeight = Math.max(typeBBox.height, nameBBox.height);
        if (hasKeyType) {
            const keyTypeNodeText = item.attributeKeyTypeList !== void 0 ? item.attributeKeyTypeList.join(",") : "";
            const keyTypeNode = groupNode.append("text").classed("er entityLabel", true).attr("id", `${attrPrefix}-key`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", (0, _config389B86FfJs.g)().fontFamily).style("font-size", attrFontSize + "px").text(keyTypeNodeText);
            attributeNode.kn = keyTypeNode;
            const keyTypeBBox = keyTypeNode.node().getBBox();
            maxKeyWidth = Math.max(maxKeyWidth, keyTypeBBox.width);
            nodeHeight = Math.max(nodeHeight, keyTypeBBox.height);
        }
        if (hasComment) {
            const commentNode = groupNode.append("text").classed("er entityLabel", true).attr("id", `${attrPrefix}-comment`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", (0, _config389B86FfJs.g)().fontFamily).style("font-size", attrFontSize + "px").text(item.attributeComment || "");
            attributeNode.cn = commentNode;
            const commentNodeBBox = commentNode.node().getBBox();
            maxCommentWidth = Math.max(maxCommentWidth, commentNodeBBox.width);
            nodeHeight = Math.max(nodeHeight, commentNodeBBox.height);
        }
        attributeNode.height = nodeHeight;
        attributeNodes.push(attributeNode);
        cumulativeHeight += nodeHeight + heightPadding * 2;
        attrNum += 1;
    });
    let widthPaddingFactor = 4;
    if (hasKeyType) widthPaddingFactor += 2;
    if (hasComment) widthPaddingFactor += 2;
    const maxWidth = maxTypeWidth + maxNameWidth + maxKeyWidth + maxCommentWidth;
    const bBox = {
        width: Math.max(conf.minEntityWidth, Math.max(labelBBox.width + conf.entityPadding * 2, maxWidth + widthPadding * widthPaddingFactor)),
        height: attributes.length > 0 ? cumulativeHeight : Math.max(conf.minEntityHeight, labelBBox.height + conf.entityPadding * 2)
    };
    if (attributes.length > 0) {
        const spareColumnWidth = Math.max(0, (bBox.width - maxWidth - widthPadding * widthPaddingFactor) / (widthPaddingFactor / 2));
        entityTextNode.attr("transform", "translate(" + bBox.width / 2 + "," + (heightPadding + labelBBox.height / 2) + ")");
        let heightOffset = labelBBox.height + heightPadding * 2;
        let attribStyle = "attributeBoxOdd";
        attributeNodes.forEach((attributeNode)=>{
            const alignY = heightOffset + heightPadding + attributeNode.height / 2;
            attributeNode.tn.attr("transform", "translate(" + widthPadding + "," + alignY + ")");
            const typeRect = groupNode.insert("rect", "#" + attributeNode.tn.node().id).classed(`er ${attribStyle}`, true).attr("x", 0).attr("y", heightOffset).attr("width", maxTypeWidth + widthPadding * 2 + spareColumnWidth).attr("height", attributeNode.height + heightPadding * 2);
            const nameXOffset = parseFloat(typeRect.attr("x")) + parseFloat(typeRect.attr("width"));
            attributeNode.nn.attr("transform", "translate(" + (nameXOffset + widthPadding) + "," + alignY + ")");
            const nameRect = groupNode.insert("rect", "#" + attributeNode.nn.node().id).classed(`er ${attribStyle}`, true).attr("x", nameXOffset).attr("y", heightOffset).attr("width", maxNameWidth + widthPadding * 2 + spareColumnWidth).attr("height", attributeNode.height + heightPadding * 2);
            let keyTypeAndCommentXOffset = parseFloat(nameRect.attr("x")) + parseFloat(nameRect.attr("width"));
            if (hasKeyType) {
                attributeNode.kn.attr("transform", "translate(" + (keyTypeAndCommentXOffset + widthPadding) + "," + alignY + ")");
                const keyTypeRect = groupNode.insert("rect", "#" + attributeNode.kn.node().id).classed(`er ${attribStyle}`, true).attr("x", keyTypeAndCommentXOffset).attr("y", heightOffset).attr("width", maxKeyWidth + widthPadding * 2 + spareColumnWidth).attr("height", attributeNode.height + heightPadding * 2);
                keyTypeAndCommentXOffset = parseFloat(keyTypeRect.attr("x")) + parseFloat(keyTypeRect.attr("width"));
            }
            if (hasComment) {
                attributeNode.cn.attr("transform", "translate(" + (keyTypeAndCommentXOffset + widthPadding) + "," + alignY + ")");
                groupNode.insert("rect", "#" + attributeNode.cn.node().id).classed(`er ${attribStyle}`, "true").attr("x", keyTypeAndCommentXOffset).attr("y", heightOffset).attr("width", maxCommentWidth + widthPadding * 2 + spareColumnWidth).attr("height", attributeNode.height + heightPadding * 2);
            }
            heightOffset += attributeNode.height + heightPadding * 2;
            attribStyle = attribStyle === "attributeBoxOdd" ? "attributeBoxEven" : "attributeBoxOdd";
        });
    } else {
        bBox.height = Math.max(conf.minEntityHeight, cumulativeHeight);
        entityTextNode.attr("transform", "translate(" + bBox.width / 2 + "," + bBox.height / 2 + ")");
    }
    return bBox;
};
const drawEntities = function(svgNode, entities2, graph) {
    const keys = Object.keys(entities2);
    let firstOne;
    keys.forEach(function(entityName) {
        const entityId = generateId(entityName, "entity");
        entityNameIds.set(entityName, entityId);
        const groupNode = svgNode.append("g").attr("id", entityId);
        firstOne = firstOne === void 0 ? entityId : firstOne;
        const textId = "text-" + entityId;
        const textNode = groupNode.append("text").classed("er entityLabel", true).attr("id", textId).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "middle").style("font-family", (0, _config389B86FfJs.g)().fontFamily).style("font-size", conf.fontSize + "px").text(entityName);
        const { width: entityWidth , height: entityHeight  } = drawAttributes(groupNode, textNode, entities2[entityName].attributes);
        const rectNode = groupNode.insert("rect", "#" + textId).classed("er entityBox", true).attr("x", 0).attr("y", 0).attr("width", entityWidth).attr("height", entityHeight);
        const rectBBox = rectNode.node().getBBox();
        graph.setNode(entityId, {
            width: rectBBox.width,
            height: rectBBox.height,
            shape: "rect",
            id: entityId
        });
    });
    return firstOne;
};
const adjustEntities = function(svgNode, graph) {
    graph.nodes().forEach(function(v) {
        if (v !== void 0 && graph.node(v) !== void 0) svgNode.select("#" + v).attr("transform", "translate(" + (graph.node(v).x - graph.node(v).width / 2) + "," + (graph.node(v).y - graph.node(v).height / 2) + " )");
    });
};
const getEdgeName = function(rel) {
    return (rel.entityA + rel.roleA + rel.entityB).replace(/\s/g, "");
};
const addRelationships = function(relationships2, g) {
    relationships2.forEach(function(r) {
        g.setEdge(entityNameIds.get(r.entityA), entityNameIds.get(r.entityB), {
            relationship: r
        }, getEdgeName(r));
    });
    return relationships2;
};
let relCnt = 0;
const drawRelationshipFromLayout = function(svg, rel, g, insert, diagObj) {
    relCnt++;
    const edge = g.edge(entityNameIds.get(rel.entityA), entityNameIds.get(rel.entityB), getEdgeName(rel));
    const lineFunction = (0, _d3.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    }).curve((0, _d3.curveBasis));
    const svgPath = svg.insert("path", "#" + insert).classed("er relationshipLine", true).attr("d", lineFunction(edge.points)).style("stroke", conf.stroke).style("fill", "none");
    if (rel.relSpec.relType === diagObj.db.Identification.NON_IDENTIFYING) svgPath.attr("stroke-dasharray", "8,8");
    let url = "";
    if (conf.arrowMarkerAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replace(/\(/g, "\\(");
        url = url.replace(/\)/g, "\\)");
    }
    switch(rel.relSpec.cardA){
        case diagObj.db.Cardinality.ZERO_OR_ONE:
            svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.ZERO_OR_ONE_END + ")");
            break;
        case diagObj.db.Cardinality.ZERO_OR_MORE:
            svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.ZERO_OR_MORE_END + ")");
            break;
        case diagObj.db.Cardinality.ONE_OR_MORE:
            svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.ONE_OR_MORE_END + ")");
            break;
        case diagObj.db.Cardinality.ONLY_ONE:
            svgPath.attr("marker-end", "url(" + url + "#" + erMarkers.ERMarkers.ONLY_ONE_END + ")");
            break;
    }
    switch(rel.relSpec.cardB){
        case diagObj.db.Cardinality.ZERO_OR_ONE:
            svgPath.attr("marker-start", "url(" + url + "#" + erMarkers.ERMarkers.ZERO_OR_ONE_START + ")");
            break;
        case diagObj.db.Cardinality.ZERO_OR_MORE:
            svgPath.attr("marker-start", "url(" + url + "#" + erMarkers.ERMarkers.ZERO_OR_MORE_START + ")");
            break;
        case diagObj.db.Cardinality.ONE_OR_MORE:
            svgPath.attr("marker-start", "url(" + url + "#" + erMarkers.ERMarkers.ONE_OR_MORE_START + ")");
            break;
        case diagObj.db.Cardinality.ONLY_ONE:
            svgPath.attr("marker-start", "url(" + url + "#" + erMarkers.ERMarkers.ONLY_ONE_START + ")");
            break;
    }
    const len = svgPath.node().getTotalLength();
    const labelPoint = svgPath.node().getPointAtLength(len * 0.5);
    const labelId = "rel" + relCnt;
    const labelNode = svg.append("text").classed("er relationshipLabel", true).attr("id", labelId).attr("x", labelPoint.x).attr("y", labelPoint.y).style("text-anchor", "middle").style("dominant-baseline", "middle").style("font-family", (0, _config389B86FfJs.g)().fontFamily).style("font-size", conf.fontSize + "px").text(rel.roleA);
    const labelBBox = labelNode.node().getBBox();
    svg.insert("rect", "#" + labelId).classed("er relationshipLabelBox", true).attr("x", labelPoint.x - labelBBox.width / 2).attr("y", labelPoint.y - labelBBox.height / 2).attr("width", labelBBox.width).attr("height", labelBBox.height);
};
const draw = function(text, id, _version, diagObj) {
    conf = (0, _config389B86FfJs.g)().er;
    (0, _config389B86FfJs.l).info("Drawing ER diagram");
    const securityLevel = (0, _config389B86FfJs.g)().securityLevel;
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, _d3.select)("#i" + id);
    const root = securityLevel === "sandbox" ? (0, _d3.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, _d3.select)("body");
    const svg = root.select(`[id='${id}']`);
    erMarkers.insertMarkers(svg, conf);
    let g;
    g = new _indexJs.Graph({
        multigraph: true,
        directed: true,
        compound: false
    }).setGraph({
        rankdir: conf.layoutDirection,
        marginx: 20,
        marginy: 20,
        nodesep: 100,
        edgesep: 100,
        ranksep: 100
    }).setDefaultEdgeLabel(function() {
        return {};
    });
    const firstEntity = drawEntities(svg, diagObj.db.getEntities(), g);
    const relationships2 = addRelationships(diagObj.db.getRelationships(), g);
    (0, _indexJs1.layout)(g);
    adjustEntities(svg, g);
    relationships2.forEach(function(rel) {
        drawRelationshipFromLayout(svg, rel, g, firstEntity, diagObj);
    });
    const padding = conf.diagramPadding;
    (0, _utilsD5Eeff82Js.u).insertTitle(svg, "entityTitleText", conf.titleTopMargin, diagObj.db.getDiagramTitle());
    const svgBounds = svg.node().getBBox();
    const width = svgBounds.width + padding * 2;
    const height = svgBounds.height + padding * 2;
    (0, _setupGraphViewboxE35E4124Js.c)(svg, height, width, conf.useMaxWidth);
    svg.attr("viewBox", `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`);
};
const MERMAID_ERDIAGRAM_UUID = "28e9f9db-3c8d-5aa5-9faf-44286ae5937c";
function generateId(str = "", prefix = "") {
    const simplifiedStr = str.replace(BAD_ID_CHARS_REGEXP, "");
    return `${strWithHyphen(prefix)}${strWithHyphen(simplifiedStr)}${(0, _uuid.v5)(str, MERMAID_ERDIAGRAM_UUID)}`;
}
function strWithHyphen(str = "") {
    return str.length > 0 ? `${str}-` : "";
}
const erRenderer = {
    setConf,
    draw
};
const getStyles = (options)=>`
  .entityBox {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${options.attributeBackgroundColorOdd};
    stroke: ${options.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${options.attributeBackgroundColorEven};
    stroke: ${options.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${options.tertiaryColor};
    opacity: 0.7;
    background-color: ${options.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${options.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }    
`;
const erStyles = getStyles;
const diagram = {
    parser: erParser,
    db: erDb,
    renderer: erRenderer,
    styles: erStyles
};

},{"./config-389b86ff.js":"hnpRM","./mermaidAPI-0716c7c2.js":"bdkW7","./commonDb-2ace122b.js":"kBdnX","dagre-d3-es/src/graphlib/index.js":"2nAwO","d3":"17XFv","dagre-d3-es/src/dagre/index.js":"g6zYa","./utils-d5eeff82.js":"2zv2d","./setupGraphViewbox-e35e4124.js":"jv1OR","uuid":"j4KJi","dompurify":"9Kzno","dayjs":"NJZFB","khroma":"lMw0x","stylis":"bMCXt","./errorRenderer-d05351b9.js":"d3Vzc","lodash-es/isEmpty.js":"e1Kmi","@braintree/sanitize-url":"hrxAd","lodash-es/memoize.js":"5zdei","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBdnX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>getAccDescription);
parcelHelpers.export(exports, "b", ()=>setAccDescription);
parcelHelpers.export(exports, "c", ()=>commonDb$1);
parcelHelpers.export(exports, "d", ()=>setDiagramTitle);
parcelHelpers.export(exports, "e", ()=>getDiagramTitle);
parcelHelpers.export(exports, "f", ()=>clear);
parcelHelpers.export(exports, "g", ()=>getAccTitle);
parcelHelpers.export(exports, "s", ()=>setAccTitle);
var _config389B86FfJs = require("./config-389b86ff.js");
let title = "";
let diagramTitle = "";
let description = "";
const sanitizeText = (txt)=>(0, _config389B86FfJs.b)(txt, (0, _config389B86FfJs.g)());
const clear = function() {
    title = "";
    description = "";
    diagramTitle = "";
};
const setAccTitle = function(txt) {
    title = sanitizeText(txt).replace(/^\s+/g, "");
};
const getAccTitle = function() {
    return title || diagramTitle;
};
const setAccDescription = function(txt) {
    description = sanitizeText(txt).replace(/\n\s+/g, "\n");
};
const getAccDescription = function() {
    return description;
};
const setDiagramTitle = function(txt) {
    diagramTitle = sanitizeText(txt);
};
const getDiagramTitle = function() {
    return diagramTitle;
};
const commonDb = {
    setAccTitle,
    getAccTitle,
    setDiagramTitle,
    getDiagramTitle,
    getAccDescription,
    setAccDescription,
    clear
};
const commonDb$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    clear,
    default: commonDb,
    getAccDescription,
    getAccTitle,
    getDiagramTitle,
    setAccDescription,
    setAccTitle,
    setDiagramTitle
}, Symbol.toStringTag, {
    value: "Module"
}));

},{"./config-389b86ff.js":"hnpRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv1OR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>configureSvgSize);
parcelHelpers.export(exports, "s", ()=>setupGraphViewbox);
var _config389B86FfJs = require("./config-389b86ff.js");
const d3Attrs = function(d3Elem, attrs) {
    for (let attr of attrs)d3Elem.attr(attr[0], attr[1]);
};
const calculateSvgSizeAttrs = function(height, width, useMaxWidth) {
    let attrs = /* @__PURE__ */ new Map();
    if (useMaxWidth) {
        attrs.set("width", "100%");
        attrs.set("style", `max-width: ${width}px;`);
    } else {
        attrs.set("height", height);
        attrs.set("width", width);
    }
    return attrs;
};
const configureSvgSize = function(svgElem, height, width, useMaxWidth) {
    const attrs = calculateSvgSizeAttrs(height, width, useMaxWidth);
    d3Attrs(svgElem, attrs);
};
const setupGraphViewbox = function(graph, svgElem, padding, useMaxWidth) {
    const svgBounds = svgElem.node().getBBox();
    const sWidth = svgBounds.width;
    const sHeight = svgBounds.height;
    (0, _config389B86FfJs.l).info(`SVG bounds: ${sWidth}x${sHeight}`, svgBounds);
    let width = 0;
    let height = 0;
    (0, _config389B86FfJs.l).info(`Graph bounds: ${width}x${height}`, graph);
    width = sWidth + padding * 2;
    height = sHeight + padding * 2;
    (0, _config389B86FfJs.l).info(`Calculated bounds: ${width}x${height}`);
    configureSvgSize(svgElem, height, width, useMaxWidth);
    const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${svgBounds.width + 2 * padding} ${svgBounds.height + 2 * padding}`;
    svgElem.attr("viewBox", vBox);
};

},{"./config-389b86ff.js":"hnpRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":false,"./v5.js":"i3cfs","./nil.js":false,"./version.js":false,"./validate.js":"eHPgI","./stringify.js":"5Y9F1","./parse.js":"6aVVs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3cfs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)("v5", 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"f7cVj","./sha1.js":"BVVut","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7cVj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === "string") value = stringToBytes(value);
        if (typeof namespace === "string") namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
exports.default = v35;

},{"./stringify.js":"5Y9F1","./parse.js":"6aVVs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6aVVs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Invalid UUID");
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BVVut":[function(require,module,exports) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Vzc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "r", ()=>renderer);
var _d3 = require("d3");
var _config389B86FfJs = require("./config-389b86ff.js");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
let conf = {};
const setConf = function(cnf) {
    conf = {
        ...conf,
        ...cnf
    };
};
const draw = (_text, id, mermaidVersion)=>{
    try {
        (0, _config389B86FfJs.l).debug("Renering svg for syntax error\n");
        const svg = (0, _d3.select)("#" + id);
        const g = svg.append("g");
        g.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z");
        g.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z");
        g.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z");
        g.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z");
        g.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z");
        g.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z");
        g.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in graph");
        g.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text("mermaid version " + mermaidVersion);
        svg.attr("height", 100);
        svg.attr("width", 500);
        svg.attr("viewBox", "768 0 912 512");
    } catch (e) {
        (0, _config389B86FfJs.l).error("Error while rendering info diagram");
        (0, _config389B86FfJs.l).error((0, _utilsD5Eeff82Js.h)(e));
    }
};
const renderer = {
    setConf,
    draw
};

},{"d3":"17XFv","./config-389b86ff.js":"hnpRM","./utils-d5eeff82.js":"2zv2d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hpIM8"], null, "parcelRequire54bf")

//# sourceMappingURL=erDiagram-25977acd.ea6e6a36.js.map
