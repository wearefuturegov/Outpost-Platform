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
})({"lDOCE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "22f66ed091492e79";
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

},{}],"1JAnq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "D", ()=>DEFAULT_DIAGRAM_DIRECTION);
parcelHelpers.export(exports, "S", ()=>STMT_RELATION);
parcelHelpers.export(exports, "a", ()=>DEFAULT_STATE_TYPE);
parcelHelpers.export(exports, "b", ()=>DIVIDER_TYPE);
parcelHelpers.export(exports, "c", ()=>STMT_STATE);
parcelHelpers.export(exports, "d", ()=>db);
parcelHelpers.export(exports, "e", ()=>DEFAULT_NESTED_DOC_DIR);
parcelHelpers.export(exports, "p", ()=>parser$1);
parcelHelpers.export(exports, "s", ()=>styles);
var _config389B86FfJs = require("./config-389b86ff.js");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
var _mermaidAPI0716C7C2Js = require("./mermaidAPI-0716c7c2.js");
var _commonDb2Ace122BJs = require("./commonDb-2ace122b.js");
var parser = function() {
    var o = function(k, v, o2, l) {
        for(o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v);
        return o2;
    }, $V0 = [
        1,
        2
    ], $V1 = [
        1,
        3
    ], $V2 = [
        1,
        5
    ], $V3 = [
        1,
        7
    ], $V4 = [
        2,
        5
    ], $V5 = [
        1,
        15
    ], $V6 = [
        1,
        17
    ], $V7 = [
        1,
        21
    ], $V8 = [
        1,
        22
    ], $V9 = [
        1,
        23
    ], $Va = [
        1,
        24
    ], $Vb = [
        1,
        37
    ], $Vc = [
        1,
        25
    ], $Vd = [
        1,
        26
    ], $Ve = [
        1,
        27
    ], $Vf = [
        1,
        28
    ], $Vg = [
        1,
        29
    ], $Vh = [
        1,
        32
    ], $Vi = [
        1,
        33
    ], $Vj = [
        1,
        34
    ], $Vk = [
        1,
        35
    ], $Vl = [
        1,
        36
    ], $Vm = [
        1,
        39
    ], $Vn = [
        1,
        40
    ], $Vo = [
        1,
        41
    ], $Vp = [
        1,
        42
    ], $Vq = [
        1,
        38
    ], $Vr = [
        1,
        45
    ], $Vs = [
        1,
        4,
        5,
        16,
        17,
        19,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29,
        33,
        35,
        37,
        38,
        42,
        50,
        51,
        52,
        53,
        56,
        60
    ], $Vt = [
        1,
        4,
        5,
        14,
        15,
        16,
        17,
        19,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29,
        33,
        35,
        37,
        38,
        42,
        50,
        51,
        52,
        53,
        56,
        60
    ], $Vu = [
        1,
        4,
        5,
        7,
        16,
        17,
        19,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29,
        33,
        35,
        37,
        38,
        42,
        50,
        51,
        52,
        53,
        56,
        60
    ], $Vv = [
        4,
        5,
        16,
        17,
        19,
        21,
        22,
        24,
        25,
        26,
        27,
        28,
        29,
        33,
        35,
        37,
        38,
        42,
        50,
        51,
        52,
        53,
        56,
        60
    ];
    var parser2 = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "start": 3,
            "SPACE": 4,
            "NL": 5,
            "directive": 6,
            "SD": 7,
            "document": 8,
            "line": 9,
            "statement": 10,
            "classDefStatement": 11,
            "cssClassStatement": 12,
            "idStatement": 13,
            "DESCR": 14,
            "-->": 15,
            "HIDE_EMPTY": 16,
            "scale": 17,
            "WIDTH": 18,
            "COMPOSIT_STATE": 19,
            "STRUCT_START": 20,
            "STRUCT_STOP": 21,
            "STATE_DESCR": 22,
            "AS": 23,
            "ID": 24,
            "FORK": 25,
            "JOIN": 26,
            "CHOICE": 27,
            "CONCURRENT": 28,
            "note": 29,
            "notePosition": 30,
            "NOTE_TEXT": 31,
            "direction": 32,
            "acc_title": 33,
            "acc_title_value": 34,
            "acc_descr": 35,
            "acc_descr_value": 36,
            "acc_descr_multiline_value": 37,
            "classDef": 38,
            "CLASSDEF_ID": 39,
            "CLASSDEF_STYLEOPTS": 40,
            "DEFAULT": 41,
            "class": 42,
            "CLASSENTITY_IDS": 43,
            "STYLECLASS": 44,
            "openDirective": 45,
            "typeDirective": 46,
            "closeDirective": 47,
            ":": 48,
            "argDirective": 49,
            "direction_tb": 50,
            "direction_bt": 51,
            "direction_rl": 52,
            "direction_lr": 53,
            "eol": 54,
            ";": 55,
            "EDGE_STATE": 56,
            "STYLE_SEPARATOR": 57,
            "left_of": 58,
            "right_of": 59,
            "open_directive": 60,
            "type_directive": 61,
            "arg_directive": 62,
            "close_directive": 63,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            4: "SPACE",
            5: "NL",
            7: "SD",
            14: "DESCR",
            15: "-->",
            16: "HIDE_EMPTY",
            17: "scale",
            18: "WIDTH",
            19: "COMPOSIT_STATE",
            20: "STRUCT_START",
            21: "STRUCT_STOP",
            22: "STATE_DESCR",
            23: "AS",
            24: "ID",
            25: "FORK",
            26: "JOIN",
            27: "CHOICE",
            28: "CONCURRENT",
            29: "note",
            31: "NOTE_TEXT",
            33: "acc_title",
            34: "acc_title_value",
            35: "acc_descr",
            36: "acc_descr_value",
            37: "acc_descr_multiline_value",
            38: "classDef",
            39: "CLASSDEF_ID",
            40: "CLASSDEF_STYLEOPTS",
            41: "DEFAULT",
            42: "class",
            43: "CLASSENTITY_IDS",
            44: "STYLECLASS",
            48: ":",
            50: "direction_tb",
            51: "direction_bt",
            52: "direction_rl",
            53: "direction_lr",
            55: ";",
            56: "EDGE_STATE",
            57: "STYLE_SEPARATOR",
            58: "left_of",
            59: "right_of",
            60: "open_directive",
            61: "type_directive",
            62: "arg_directive",
            63: "close_directive"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                3,
                2
            ],
            [
                3,
                2
            ],
            [
                3,
                2
            ],
            [
                8,
                0
            ],
            [
                8,
                2
            ],
            [
                9,
                2
            ],
            [
                9,
                1
            ],
            [
                9,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                1
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
                3
            ],
            [
                10,
                4
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
                1
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
                6
            ],
            [
                10,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                1
            ],
            [
                10,
                4
            ],
            [
                10,
                4
            ],
            [
                10,
                1
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
                1
            ],
            [
                11,
                3
            ],
            [
                11,
                3
            ],
            [
                12,
                3
            ],
            [
                6,
                3
            ],
            [
                6,
                5
            ],
            [
                32,
                1
            ],
            [
                32,
                1
            ],
            [
                32,
                1
            ],
            [
                32,
                1
            ],
            [
                54,
                1
            ],
            [
                54,
                1
            ],
            [
                13,
                1
            ],
            [
                13,
                1
            ],
            [
                13,
                3
            ],
            [
                13,
                3
            ],
            [
                30,
                1
            ],
            [
                30,
                1
            ],
            [
                45,
                1
            ],
            [
                46,
                1
            ],
            [
                49,
                1
            ],
            [
                47,
                1
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 4:
                    yy.setRootDoc($$[$0]);
                    return $$[$0];
                case 5:
                    this.$ = [];
                    break;
                case 6:
                    if ($$[$0] != "nl") {
                        $$[$0 - 1].push($$[$0]);
                        this.$ = $$[$0 - 1];
                    }
                    break;
                case 7:
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = "nl";
                    break;
                case 12:
                    this.$ = $$[$0];
                    break;
                case 13:
                    const stateStmt = $$[$0 - 1];
                    stateStmt.description = yy.trimColon($$[$0]);
                    this.$ = stateStmt;
                    break;
                case 14:
                    this.$ = {
                        stmt: "relation",
                        state1: $$[$0 - 2],
                        state2: $$[$0]
                    };
                    break;
                case 15:
                    const relDescription = yy.trimColon($$[$0]);
                    this.$ = {
                        stmt: "relation",
                        state1: $$[$0 - 3],
                        state2: $$[$0 - 1],
                        description: relDescription
                    };
                    break;
                case 19:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0 - 3],
                        type: "default",
                        description: "",
                        doc: $$[$0 - 1]
                    };
                    break;
                case 20:
                    var id = $$[$0];
                    var description = $$[$0 - 2].trim();
                    if ($$[$0].match(":")) {
                        var parts = $$[$0].split(":");
                        id = parts[0];
                        description = [
                            description,
                            parts[1]
                        ];
                    }
                    this.$ = {
                        stmt: "state",
                        id,
                        type: "default",
                        description
                    };
                    break;
                case 21:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0 - 3],
                        type: "default",
                        description: $$[$0 - 5],
                        doc: $$[$0 - 1]
                    };
                    break;
                case 22:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0],
                        type: "fork"
                    };
                    break;
                case 23:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0],
                        type: "join"
                    };
                    break;
                case 24:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0],
                        type: "choice"
                    };
                    break;
                case 25:
                    this.$ = {
                        stmt: "state",
                        id: yy.getDividerId(),
                        type: "divider"
                    };
                    break;
                case 26:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0 - 1].trim(),
                        note: {
                            position: $$[$0 - 2].trim(),
                            text: $$[$0].trim()
                        }
                    };
                    break;
                case 30:
                    this.$ = $$[$0].trim();
                    yy.setAccTitle(this.$);
                    break;
                case 31:
                case 32:
                    this.$ = $$[$0].trim();
                    yy.setAccDescription(this.$);
                    break;
                case 33:
                case 34:
                    this.$ = {
                        stmt: "classDef",
                        id: $$[$0 - 1].trim(),
                        classes: $$[$0].trim()
                    };
                    break;
                case 35:
                    this.$ = {
                        stmt: "applyClass",
                        id: $$[$0 - 1].trim(),
                        styleClass: $$[$0].trim()
                    };
                    break;
                case 38:
                    yy.setDirection("TB");
                    this.$ = {
                        stmt: "dir",
                        value: "TB"
                    };
                    break;
                case 39:
                    yy.setDirection("BT");
                    this.$ = {
                        stmt: "dir",
                        value: "BT"
                    };
                    break;
                case 40:
                    yy.setDirection("RL");
                    this.$ = {
                        stmt: "dir",
                        value: "RL"
                    };
                    break;
                case 41:
                    yy.setDirection("LR");
                    this.$ = {
                        stmt: "dir",
                        value: "LR"
                    };
                    break;
                case 44:
                case 45:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0].trim(),
                        type: "default",
                        description: ""
                    };
                    break;
                case 46:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0 - 2].trim(),
                        classes: [
                            $$[$0].trim()
                        ],
                        type: "default",
                        description: ""
                    };
                    break;
                case 47:
                    this.$ = {
                        stmt: "state",
                        id: $$[$0 - 2].trim(),
                        classes: [
                            $$[$0].trim()
                        ],
                        type: "default",
                        description: ""
                    };
                    break;
                case 50:
                    yy.parseDirective("%%{", "open_directive");
                    break;
                case 51:
                    yy.parseDirective($$[$0], "type_directive");
                    break;
                case 52:
                    $$[$0] = $$[$0].trim().replace(/'/g, '"');
                    yy.parseDirective($$[$0], "arg_directive");
                    break;
                case 53:
                    yy.parseDirective("}%%", "close_directive", "state");
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: $V0,
                5: $V1,
                6: 4,
                7: $V2,
                45: 6,
                60: $V3
            },
            {
                1: [
                    3
                ]
            },
            {
                3: 8,
                4: $V0,
                5: $V1,
                6: 4,
                7: $V2,
                45: 6,
                60: $V3
            },
            {
                3: 9,
                4: $V0,
                5: $V1,
                6: 4,
                7: $V2,
                45: 6,
                60: $V3
            },
            {
                3: 10,
                4: $V0,
                5: $V1,
                6: 4,
                7: $V2,
                45: 6,
                60: $V3
            },
            o([
                1,
                4,
                5,
                16,
                17,
                19,
                22,
                24,
                25,
                26,
                27,
                28,
                29,
                33,
                35,
                37,
                38,
                42,
                50,
                51,
                52,
                53,
                56,
                60
            ], $V4, {
                8: 11
            }),
            {
                46: 12,
                61: [
                    1,
                    13
                ]
            },
            {
                61: [
                    2,
                    50
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                1: [
                    2,
                    2
                ]
            },
            {
                1: [
                    2,
                    3
                ]
            },
            {
                1: [
                    2,
                    4
                ],
                4: $V5,
                5: $V6,
                6: 30,
                9: 14,
                10: 16,
                11: 18,
                12: 19,
                13: 20,
                16: $V7,
                17: $V8,
                19: $V9,
                22: $Va,
                24: $Vb,
                25: $Vc,
                26: $Vd,
                27: $Ve,
                28: $Vf,
                29: $Vg,
                32: 31,
                33: $Vh,
                35: $Vi,
                37: $Vj,
                38: $Vk,
                42: $Vl,
                45: 6,
                50: $Vm,
                51: $Vn,
                52: $Vo,
                53: $Vp,
                56: $Vq,
                60: $V3
            },
            {
                47: 43,
                48: [
                    1,
                    44
                ],
                63: $Vr
            },
            o([
                48,
                63
            ], [
                2,
                51
            ]),
            o($Vs, [
                2,
                6
            ]),
            {
                6: 30,
                10: 46,
                11: 18,
                12: 19,
                13: 20,
                16: $V7,
                17: $V8,
                19: $V9,
                22: $Va,
                24: $Vb,
                25: $Vc,
                26: $Vd,
                27: $Ve,
                28: $Vf,
                29: $Vg,
                32: 31,
                33: $Vh,
                35: $Vi,
                37: $Vj,
                38: $Vk,
                42: $Vl,
                45: 6,
                50: $Vm,
                51: $Vn,
                52: $Vo,
                53: $Vp,
                56: $Vq,
                60: $V3
            },
            o($Vs, [
                2,
                8
            ]),
            o($Vs, [
                2,
                9
            ]),
            o($Vs, [
                2,
                10
            ]),
            o($Vs, [
                2,
                11
            ]),
            o($Vs, [
                2,
                12
            ], {
                14: [
                    1,
                    47
                ],
                15: [
                    1,
                    48
                ]
            }),
            o($Vs, [
                2,
                16
            ]),
            {
                18: [
                    1,
                    49
                ]
            },
            o($Vs, [
                2,
                18
            ], {
                20: [
                    1,
                    50
                ]
            }),
            {
                23: [
                    1,
                    51
                ]
            },
            o($Vs, [
                2,
                22
            ]),
            o($Vs, [
                2,
                23
            ]),
            o($Vs, [
                2,
                24
            ]),
            o($Vs, [
                2,
                25
            ]),
            {
                30: 52,
                31: [
                    1,
                    53
                ],
                58: [
                    1,
                    54
                ],
                59: [
                    1,
                    55
                ]
            },
            o($Vs, [
                2,
                28
            ]),
            o($Vs, [
                2,
                29
            ]),
            {
                34: [
                    1,
                    56
                ]
            },
            {
                36: [
                    1,
                    57
                ]
            },
            o($Vs, [
                2,
                32
            ]),
            {
                39: [
                    1,
                    58
                ],
                41: [
                    1,
                    59
                ]
            },
            {
                43: [
                    1,
                    60
                ]
            },
            o($Vt, [
                2,
                44
            ], {
                57: [
                    1,
                    61
                ]
            }),
            o($Vt, [
                2,
                45
            ], {
                57: [
                    1,
                    62
                ]
            }),
            o($Vs, [
                2,
                38
            ]),
            o($Vs, [
                2,
                39
            ]),
            o($Vs, [
                2,
                40
            ]),
            o($Vs, [
                2,
                41
            ]),
            o($Vu, [
                2,
                36
            ]),
            {
                49: 63,
                62: [
                    1,
                    64
                ]
            },
            o($Vu, [
                2,
                53
            ]),
            o($Vs, [
                2,
                7
            ]),
            o($Vs, [
                2,
                13
            ]),
            {
                13: 65,
                24: $Vb,
                56: $Vq
            },
            o($Vs, [
                2,
                17
            ]),
            o($Vv, $V4, {
                8: 66
            }),
            {
                24: [
                    1,
                    67
                ]
            },
            {
                24: [
                    1,
                    68
                ]
            },
            {
                23: [
                    1,
                    69
                ]
            },
            {
                24: [
                    2,
                    48
                ]
            },
            {
                24: [
                    2,
                    49
                ]
            },
            o($Vs, [
                2,
                30
            ]),
            o($Vs, [
                2,
                31
            ]),
            {
                40: [
                    1,
                    70
                ]
            },
            {
                40: [
                    1,
                    71
                ]
            },
            {
                44: [
                    1,
                    72
                ]
            },
            {
                24: [
                    1,
                    73
                ]
            },
            {
                24: [
                    1,
                    74
                ]
            },
            {
                47: 75,
                63: $Vr
            },
            {
                63: [
                    2,
                    52
                ]
            },
            o($Vs, [
                2,
                14
            ], {
                14: [
                    1,
                    76
                ]
            }),
            {
                4: $V5,
                5: $V6,
                6: 30,
                9: 14,
                10: 16,
                11: 18,
                12: 19,
                13: 20,
                16: $V7,
                17: $V8,
                19: $V9,
                21: [
                    1,
                    77
                ],
                22: $Va,
                24: $Vb,
                25: $Vc,
                26: $Vd,
                27: $Ve,
                28: $Vf,
                29: $Vg,
                32: 31,
                33: $Vh,
                35: $Vi,
                37: $Vj,
                38: $Vk,
                42: $Vl,
                45: 6,
                50: $Vm,
                51: $Vn,
                52: $Vo,
                53: $Vp,
                56: $Vq,
                60: $V3
            },
            o($Vs, [
                2,
                20
            ], {
                20: [
                    1,
                    78
                ]
            }),
            {
                31: [
                    1,
                    79
                ]
            },
            {
                24: [
                    1,
                    80
                ]
            },
            o($Vs, [
                2,
                33
            ]),
            o($Vs, [
                2,
                34
            ]),
            o($Vs, [
                2,
                35
            ]),
            o($Vt, [
                2,
                46
            ]),
            o($Vt, [
                2,
                47
            ]),
            o($Vu, [
                2,
                37
            ]),
            o($Vs, [
                2,
                15
            ]),
            o($Vs, [
                2,
                19
            ]),
            o($Vv, $V4, {
                8: 81
            }),
            o($Vs, [
                2,
                26
            ]),
            o($Vs, [
                2,
                27
            ]),
            {
                4: $V5,
                5: $V6,
                6: 30,
                9: 14,
                10: 16,
                11: 18,
                12: 19,
                13: 20,
                16: $V7,
                17: $V8,
                19: $V9,
                21: [
                    1,
                    82
                ],
                22: $Va,
                24: $Vb,
                25: $Vc,
                26: $Vd,
                27: $Ve,
                28: $Vf,
                29: $Vg,
                32: 31,
                33: $Vh,
                35: $Vi,
                37: $Vj,
                38: $Vk,
                42: $Vl,
                45: 6,
                50: $Vm,
                51: $Vn,
                52: $Vo,
                53: $Vp,
                56: $Vq,
                60: $V3
            },
            o($Vs, [
                2,
                21
            ])
        ],
        defaultActions: {
            7: [
                2,
                50
            ],
            8: [
                2,
                1
            ],
            9: [
                2,
                2
            ],
            10: [
                2,
                3
            ],
            54: [
                2,
                48
            ],
            55: [
                2,
                49
            ],
            64: [
                2,
                52
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
                        return 41;
                    case 1:
                        return 50;
                    case 2:
                        return 51;
                    case 3:
                        return 52;
                    case 4:
                        return 53;
                    case 5:
                        this.begin("open_directive");
                        return 60;
                    case 6:
                        this.begin("type_directive");
                        return 61;
                    case 7:
                        this.popState();
                        this.begin("arg_directive");
                        return 48;
                    case 8:
                        this.popState();
                        this.popState();
                        return 63;
                    case 9:
                        return 62;
                    case 10:
                        break;
                    case 11:
                        break;
                    case 12:
                        return 5;
                    case 13:
                        break;
                    case 14:
                        break;
                    case 15:
                        break;
                    case 16:
                        break;
                    case 17:
                        this.pushState("SCALE");
                        return 17;
                    case 18:
                        return 18;
                    case 19:
                        this.popState();
                        break;
                    case 20:
                        this.begin("acc_title");
                        return 33;
                    case 21:
                        this.popState();
                        return "acc_title_value";
                    case 22:
                        this.begin("acc_descr");
                        return 35;
                    case 23:
                        this.popState();
                        return "acc_descr_value";
                    case 24:
                        this.begin("acc_descr_multiline");
                        break;
                    case 25:
                        this.popState();
                        break;
                    case 26:
                        return "acc_descr_multiline_value";
                    case 27:
                        this.pushState("CLASSDEF");
                        return 38;
                    case 28:
                        this.popState();
                        this.pushState("CLASSDEFID");
                        return "DEFAULT_CLASSDEF_ID";
                    case 29:
                        this.popState();
                        this.pushState("CLASSDEFID");
                        return 39;
                    case 30:
                        this.popState();
                        return 40;
                    case 31:
                        this.pushState("CLASS");
                        return 42;
                    case 32:
                        this.popState();
                        this.pushState("CLASS_STYLE");
                        return 43;
                    case 33:
                        this.popState();
                        return 44;
                    case 34:
                        this.pushState("SCALE");
                        return 17;
                    case 35:
                        return 18;
                    case 36:
                        this.popState();
                        break;
                    case 37:
                        this.pushState("STATE");
                        break;
                    case 38:
                        this.popState();
                        yy_.yytext = yy_.yytext.slice(0, -8).trim();
                        return 25;
                    case 39:
                        this.popState();
                        yy_.yytext = yy_.yytext.slice(0, -8).trim();
                        return 26;
                    case 40:
                        this.popState();
                        yy_.yytext = yy_.yytext.slice(0, -10).trim();
                        return 27;
                    case 41:
                        this.popState();
                        yy_.yytext = yy_.yytext.slice(0, -8).trim();
                        return 25;
                    case 42:
                        this.popState();
                        yy_.yytext = yy_.yytext.slice(0, -8).trim();
                        return 26;
                    case 43:
                        this.popState();
                        yy_.yytext = yy_.yytext.slice(0, -10).trim();
                        return 27;
                    case 44:
                        return 50;
                    case 45:
                        return 51;
                    case 46:
                        return 52;
                    case 47:
                        return 53;
                    case 48:
                        this.pushState("STATE_STRING");
                        break;
                    case 49:
                        this.pushState("STATE_ID");
                        return "AS";
                    case 50:
                        this.popState();
                        return "ID";
                    case 51:
                        this.popState();
                        break;
                    case 52:
                        return "STATE_DESCR";
                    case 53:
                        return 19;
                    case 54:
                        this.popState();
                        break;
                    case 55:
                        this.popState();
                        this.pushState("struct");
                        return 20;
                    case 56:
                        break;
                    case 57:
                        this.popState();
                        return 21;
                    case 58:
                        break;
                    case 59:
                        this.begin("NOTE");
                        return 29;
                    case 60:
                        this.popState();
                        this.pushState("NOTE_ID");
                        return 58;
                    case 61:
                        this.popState();
                        this.pushState("NOTE_ID");
                        return 59;
                    case 62:
                        this.popState();
                        this.pushState("FLOATING_NOTE");
                        break;
                    case 63:
                        this.popState();
                        this.pushState("FLOATING_NOTE_ID");
                        return "AS";
                    case 64:
                        break;
                    case 65:
                        return "NOTE_TEXT";
                    case 66:
                        this.popState();
                        return "ID";
                    case 67:
                        this.popState();
                        this.pushState("NOTE_TEXT");
                        return 24;
                    case 68:
                        this.popState();
                        yy_.yytext = yy_.yytext.substr(2).trim();
                        return 31;
                    case 69:
                        this.popState();
                        yy_.yytext = yy_.yytext.slice(0, -8).trim();
                        return 31;
                    case 70:
                        return 7;
                    case 71:
                        return 7;
                    case 72:
                        return 16;
                    case 73:
                        return 56;
                    case 74:
                        return 24;
                    case 75:
                        yy_.yytext = yy_.yytext.trim();
                        return 14;
                    case 76:
                        return 15;
                    case 77:
                        return 28;
                    case 78:
                        return 57;
                    case 79:
                        return 5;
                    case 80:
                        return "INVALID";
                }
            },
            rules: [
                /^(?:default\b)/i,
                /^(?:.*direction\s+TB[^\n]*)/i,
                /^(?:.*direction\s+BT[^\n]*)/i,
                /^(?:.*direction\s+RL[^\n]*)/i,
                /^(?:.*direction\s+LR[^\n]*)/i,
                /^(?:%%\{)/i,
                /^(?:((?:(?!\}%%)[^:.])*))/i,
                /^(?::)/i,
                /^(?:\}%%)/i,
                /^(?:((?:(?!\}%%).|\n)*))/i,
                /^(?:%%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:[\n]+)/i,
                /^(?:[\s]+)/i,
                /^(?:((?!\n)\s)+)/i,
                /^(?:#[^\n]*)/i,
                /^(?:%[^\n]*)/i,
                /^(?:scale\s+)/i,
                /^(?:\d+)/i,
                /^(?:\s+width\b)/i,
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:[\}])/i,
                /^(?:[^\}]*)/i,
                /^(?:classDef\s+)/i,
                /^(?:DEFAULT\s+)/i,
                /^(?:\w+\s+)/i,
                /^(?:[^\n]*)/i,
                /^(?:class\s+)/i,
                /^(?:(\w+)+((,\s*\w+)*))/i,
                /^(?:[^\n]*)/i,
                /^(?:scale\s+)/i,
                /^(?:\d+)/i,
                /^(?:\s+width\b)/i,
                /^(?:state\s+)/i,
                /^(?:.*<<fork>>)/i,
                /^(?:.*<<join>>)/i,
                /^(?:.*<<choice>>)/i,
                /^(?:.*\[\[fork\]\])/i,
                /^(?:.*\[\[join\]\])/i,
                /^(?:.*\[\[choice\]\])/i,
                /^(?:.*direction\s+TB[^\n]*)/i,
                /^(?:.*direction\s+BT[^\n]*)/i,
                /^(?:.*direction\s+RL[^\n]*)/i,
                /^(?:.*direction\s+LR[^\n]*)/i,
                /^(?:["])/i,
                /^(?:\s*as\s+)/i,
                /^(?:[^\n\{]*)/i,
                /^(?:["])/i,
                /^(?:[^"]*)/i,
                /^(?:[^\n\s\{]+)/i,
                /^(?:\n)/i,
                /^(?:\{)/i,
                /^(?:%%(?!\{)[^\n]*)/i,
                /^(?:\})/i,
                /^(?:[\n])/i,
                /^(?:note\s+)/i,
                /^(?:left of\b)/i,
                /^(?:right of\b)/i,
                /^(?:")/i,
                /^(?:\s*as\s*)/i,
                /^(?:["])/i,
                /^(?:[^"]*)/i,
                /^(?:[^\n]*)/i,
                /^(?:\s*[^:\n\s\-]+)/i,
                /^(?:\s*:[^:\n;]+)/i,
                /^(?:[\s\S]*?end note\b)/i,
                /^(?:stateDiagram\s+)/i,
                /^(?:stateDiagram-v2\s+)/i,
                /^(?:hide empty description\b)/i,
                /^(?:\[\*\])/i,
                /^(?:[^:\n\s\-\{]+)/i,
                /^(?:\s*:[^:\n;]+)/i,
                /^(?:-->)/i,
                /^(?:--)/i,
                /^(?::::)/i,
                /^(?:$)/i,
                /^(?:.)/i
            ],
            conditions: {
                "LINE": {
                    "rules": [
                        14,
                        15
                    ],
                    "inclusive": false
                },
                "close_directive": {
                    "rules": [
                        14,
                        15
                    ],
                    "inclusive": false
                },
                "arg_directive": {
                    "rules": [
                        8,
                        9,
                        14,
                        15
                    ],
                    "inclusive": false
                },
                "type_directive": {
                    "rules": [
                        7,
                        8,
                        14,
                        15
                    ],
                    "inclusive": false
                },
                "open_directive": {
                    "rules": [
                        6,
                        14,
                        15
                    ],
                    "inclusive": false
                },
                "struct": {
                    "rules": [
                        14,
                        15,
                        27,
                        31,
                        37,
                        44,
                        45,
                        46,
                        47,
                        56,
                        57,
                        58,
                        59,
                        73,
                        74,
                        75,
                        76,
                        77
                    ],
                    "inclusive": false
                },
                "FLOATING_NOTE_ID": {
                    "rules": [
                        66
                    ],
                    "inclusive": false
                },
                "FLOATING_NOTE": {
                    "rules": [
                        63,
                        64,
                        65
                    ],
                    "inclusive": false
                },
                "NOTE_TEXT": {
                    "rules": [
                        68,
                        69
                    ],
                    "inclusive": false
                },
                "NOTE_ID": {
                    "rules": [
                        67
                    ],
                    "inclusive": false
                },
                "NOTE": {
                    "rules": [
                        60,
                        61,
                        62
                    ],
                    "inclusive": false
                },
                "CLASS_STYLE": {
                    "rules": [
                        33
                    ],
                    "inclusive": false
                },
                "CLASS": {
                    "rules": [
                        32
                    ],
                    "inclusive": false
                },
                "CLASSDEFID": {
                    "rules": [
                        30
                    ],
                    "inclusive": false
                },
                "CLASSDEF": {
                    "rules": [
                        28,
                        29
                    ],
                    "inclusive": false
                },
                "acc_descr_multiline": {
                    "rules": [
                        25,
                        26
                    ],
                    "inclusive": false
                },
                "acc_descr": {
                    "rules": [
                        23
                    ],
                    "inclusive": false
                },
                "acc_title": {
                    "rules": [
                        21
                    ],
                    "inclusive": false
                },
                "SCALE": {
                    "rules": [
                        18,
                        19,
                        35,
                        36
                    ],
                    "inclusive": false
                },
                "ALIAS": {
                    "rules": [],
                    "inclusive": false
                },
                "STATE_ID": {
                    "rules": [
                        50
                    ],
                    "inclusive": false
                },
                "STATE_STRING": {
                    "rules": [
                        51,
                        52
                    ],
                    "inclusive": false
                },
                "FORK_STATE": {
                    "rules": [],
                    "inclusive": false
                },
                "STATE": {
                    "rules": [
                        14,
                        15,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        48,
                        49,
                        53,
                        54,
                        55
                    ],
                    "inclusive": false
                },
                "ID": {
                    "rules": [
                        14,
                        15
                    ],
                    "inclusive": false
                },
                "INITIAL": {
                    "rules": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        10,
                        11,
                        12,
                        13,
                        15,
                        16,
                        17,
                        20,
                        22,
                        24,
                        27,
                        31,
                        34,
                        37,
                        55,
                        59,
                        70,
                        71,
                        72,
                        73,
                        74,
                        75,
                        76,
                        78,
                        79,
                        80
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
const parser$1 = parser;
const DEFAULT_DIAGRAM_DIRECTION = "LR";
const DEFAULT_NESTED_DOC_DIR = "TB";
const STMT_STATE = "state";
const STMT_RELATION = "relation";
const STMT_CLASSDEF = "classDef";
const STMT_APPLYCLASS = "applyClass";
const DEFAULT_STATE_TYPE = "default";
const DIVIDER_TYPE = "divider";
const START_NODE = "[*]";
const START_TYPE = "start";
const END_NODE = START_NODE;
const END_TYPE = "end";
const COLOR_KEYWORD = "color";
const FILL_KEYWORD = "fill";
const BG_FILL = "bgFill";
const STYLECLASS_SEP = ",";
function newClassesList() {
    return {};
}
let direction = DEFAULT_DIAGRAM_DIRECTION;
let rootDoc = [];
let classes = newClassesList();
const newDoc = ()=>{
    return {
        relations: [],
        states: {},
        documents: {}
    };
};
let documents = {
    root: newDoc()
};
let currentDocument = documents.root;
let startEndCount = 0;
let dividerCnt = 0;
const lineType = {
    LINE: 0,
    DOTTED_LINE: 1
};
const relationType = {
    AGGREGATION: 0,
    EXTENSION: 1,
    COMPOSITION: 2,
    DEPENDENCY: 3
};
const clone = (o)=>JSON.parse(JSON.stringify(o));
const parseDirective = function(statement, context, type) {
    (0, _mermaidAPI0716C7C2Js.m).parseDirective(this, statement, context, type);
};
const setRootDoc = (o)=>{
    (0, _config389B86FfJs.l).info("Setting root doc", o);
    rootDoc = o;
};
const getRootDoc = ()=>rootDoc;
const docTranslator = (parent, node, first)=>{
    if (node.stmt === STMT_RELATION) {
        docTranslator(parent, node.state1, true);
        docTranslator(parent, node.state2, false);
    } else {
        if (node.stmt === STMT_STATE) {
            if (node.id === "[*]") {
                node.id = first ? parent.id + "_start" : parent.id + "_end";
                node.start = first;
            } else node.id = node.id.trim();
        }
        if (node.doc) {
            const doc = [];
            let currentDoc = [];
            let i;
            for(i = 0; i < node.doc.length; i++)if (node.doc[i].type === DIVIDER_TYPE) {
                const newNode = clone(node.doc[i]);
                newNode.doc = clone(currentDoc);
                doc.push(newNode);
                currentDoc = [];
            } else currentDoc.push(node.doc[i]);
            if (doc.length > 0 && currentDoc.length > 0) {
                const newNode = {
                    stmt: STMT_STATE,
                    id: (0, _utilsD5Eeff82Js.v)(),
                    type: "divider",
                    doc: clone(currentDoc)
                };
                doc.push(clone(newNode));
                node.doc = doc;
            }
            node.doc.forEach((docNode)=>docTranslator(node, docNode, true));
        }
    }
};
const getRootDocV2 = ()=>{
    docTranslator({
        id: "root"
    }, {
        id: "root",
        doc: rootDoc
    }, true);
    return {
        id: "root",
        doc: rootDoc
    };
};
const extract = (_doc)=>{
    let doc;
    if (_doc.doc) doc = _doc.doc;
    else doc = _doc;
    (0, _config389B86FfJs.l).info(doc);
    clear(true);
    (0, _config389B86FfJs.l).info("Extract", doc);
    doc.forEach((item)=>{
        switch(item.stmt){
            case STMT_STATE:
                addState(item.id.trim(), item.type, item.doc, item.description, item.note, item.classes, item.styles, item.textStyles);
                break;
            case STMT_RELATION:
                addRelation(item.state1, item.state2, item.description);
                break;
            case STMT_CLASSDEF:
                addStyleClass(item.id.trim(), item.classes);
                break;
            case STMT_APPLYCLASS:
                setCssClass(item.id.trim(), item.styleClass);
                break;
        }
    });
};
const addState = function(id, type = DEFAULT_STATE_TYPE, doc = null, descr = null, note = null, classes2 = null, styles2 = null, textStyles = null) {
    const trimmedId = id == null ? void 0 : id.trim();
    if (currentDocument.states[trimmedId] === void 0) {
        (0, _config389B86FfJs.l).info("Adding state ", trimmedId, descr);
        currentDocument.states[trimmedId] = {
            id: trimmedId,
            descriptions: [],
            type,
            doc,
            note,
            classes: [],
            styles: [],
            textStyles: []
        };
    } else {
        if (!currentDocument.states[trimmedId].doc) currentDocument.states[trimmedId].doc = doc;
        if (!currentDocument.states[trimmedId].type) currentDocument.states[trimmedId].type = type;
    }
    if (descr) {
        (0, _config389B86FfJs.l).info("Setting state description", trimmedId, descr);
        if (typeof descr === "string") addDescription(trimmedId, descr.trim());
        if (typeof descr === "object") descr.forEach((des)=>addDescription(trimmedId, des.trim()));
    }
    if (note) {
        currentDocument.states[trimmedId].note = note;
        currentDocument.states[trimmedId].note.text = (0, _config389B86FfJs.d).sanitizeText(currentDocument.states[trimmedId].note.text, (0, _config389B86FfJs.g)());
    }
    if (classes2) {
        (0, _config389B86FfJs.l).info("Setting state classes", trimmedId, classes2);
        const classesList = typeof classes2 === "string" ? [
            classes2
        ] : classes2;
        classesList.forEach((klass)=>setCssClass(trimmedId, klass.trim()));
    }
    if (styles2) {
        (0, _config389B86FfJs.l).info("Setting state styles", trimmedId, styles2);
        const stylesList = typeof styles2 === "string" ? [
            styles2
        ] : styles2;
        stylesList.forEach((style)=>setStyle(trimmedId, style.trim()));
    }
    if (textStyles) {
        (0, _config389B86FfJs.l).info("Setting state styles", trimmedId, styles2);
        const textStylesList = typeof textStyles === "string" ? [
            textStyles
        ] : textStyles;
        textStylesList.forEach((textStyle)=>setTextStyle(trimmedId, textStyle.trim()));
    }
};
const clear = function(saveCommon) {
    documents = {
        root: newDoc()
    };
    currentDocument = documents.root;
    startEndCount = 0;
    classes = newClassesList();
    if (!saveCommon) (0, _commonDb2Ace122BJs.f)();
};
const getState = function(id) {
    return currentDocument.states[id];
};
const getStates = function() {
    return currentDocument.states;
};
const logDocuments = function() {
    (0, _config389B86FfJs.l).info("Documents = ", documents);
};
const getRelations = function() {
    return currentDocument.relations;
};
function startIdIfNeeded(id = "") {
    let fixedId = id;
    if (id === START_NODE) {
        startEndCount++;
        fixedId = `${START_TYPE}${startEndCount}`;
    }
    return fixedId;
}
function startTypeIfNeeded(id = "", type = DEFAULT_STATE_TYPE) {
    return id === START_NODE ? START_TYPE : type;
}
function endIdIfNeeded(id = "") {
    let fixedId = id;
    if (id === END_NODE) {
        startEndCount++;
        fixedId = `${END_TYPE}${startEndCount}`;
    }
    return fixedId;
}
function endTypeIfNeeded(id = "", type = DEFAULT_STATE_TYPE) {
    return id === END_NODE ? END_TYPE : type;
}
function addRelationObjs(item1, item2, relationTitle) {
    let id1 = startIdIfNeeded(item1.id.trim());
    let type1 = startTypeIfNeeded(item1.id.trim(), item1.type);
    let id2 = startIdIfNeeded(item2.id.trim());
    let type2 = startTypeIfNeeded(item2.id.trim(), item2.type);
    addState(id1, type1, item1.doc, item1.description, item1.note, item1.classes, item1.styles, item1.textStyles);
    addState(id2, type2, item2.doc, item2.description, item2.note, item2.classes, item2.styles, item2.textStyles);
    currentDocument.relations.push({
        id1,
        id2,
        relationTitle: (0, _config389B86FfJs.d).sanitizeText(relationTitle, (0, _config389B86FfJs.g)())
    });
}
const addRelation = function(item1, item2, title) {
    if (typeof item1 === "object") addRelationObjs(item1, item2, title);
    else {
        const id1 = startIdIfNeeded(item1.trim());
        const type1 = startTypeIfNeeded(item1);
        const id2 = endIdIfNeeded(item2.trim());
        const type2 = endTypeIfNeeded(item2);
        addState(id1, type1);
        addState(id2, type2);
        currentDocument.relations.push({
            id1,
            id2,
            title: (0, _config389B86FfJs.d).sanitizeText(title, (0, _config389B86FfJs.g)())
        });
    }
};
const addDescription = function(id, descr) {
    const theState = currentDocument.states[id];
    const _descr = descr.startsWith(":") ? descr.replace(":", "").trim() : descr;
    theState.descriptions.push((0, _config389B86FfJs.d).sanitizeText(_descr, (0, _config389B86FfJs.g)()));
};
const cleanupLabel = function(label) {
    if (label.substring(0, 1) === ":") return label.substr(2).trim();
    else return label.trim();
};
const getDividerId = ()=>{
    dividerCnt++;
    return "divider-id-" + dividerCnt;
};
const addStyleClass = function(id, styleAttributes = "") {
    if (classes[id] === void 0) classes[id] = {
        id,
        styles: [],
        textStyles: []
    };
    const foundClass = classes[id];
    if (styleAttributes !== void 0 && styleAttributes !== null) styleAttributes.split(STYLECLASS_SEP).forEach((attrib)=>{
        const fixedAttrib = attrib.replace(/([^;]*);/, "$1").trim();
        if (attrib.match(COLOR_KEYWORD)) {
            const newStyle1 = fixedAttrib.replace(FILL_KEYWORD, BG_FILL);
            const newStyle2 = newStyle1.replace(COLOR_KEYWORD, FILL_KEYWORD);
            foundClass.textStyles.push(newStyle2);
        }
        foundClass.styles.push(fixedAttrib);
    });
};
const getClasses = function() {
    return classes;
};
const setCssClass = function(itemIds, cssClassName) {
    itemIds.split(",").forEach(function(id) {
        let foundState = getState(id);
        if (foundState === void 0) {
            const trimmedId = id.trim();
            addState(trimmedId);
            foundState = getState(trimmedId);
        }
        foundState.classes.push(cssClassName);
    });
};
const setStyle = function(itemId, styleText) {
    const item = getState(itemId);
    if (item !== void 0) item.textStyles.push(styleText);
};
const setTextStyle = function(itemId, cssClassName) {
    const item = getState(itemId);
    if (item !== void 0) item.textStyles.push(cssClassName);
};
const getDirection = ()=>direction;
const setDirection = (dir)=>{
    direction = dir;
};
const trimColon = (str)=>str && str[0] === ":" ? str.substr(1).trim() : str.trim();
const db = {
    parseDirective,
    getConfig: ()=>(0, _config389B86FfJs.g)().state,
    addState,
    clear,
    getState,
    getStates,
    getRelations,
    getClasses,
    getDirection,
    addRelation,
    getDividerId,
    setDirection,
    cleanupLabel,
    lineType,
    relationType,
    logDocuments,
    getRootDoc,
    setRootDoc,
    getRootDocV2,
    extract,
    trimColon,
    getAccTitle: (0, _commonDb2Ace122BJs.g),
    setAccTitle: (0, _commonDb2Ace122BJs.s),
    getAccDescription: (0, _commonDb2Ace122BJs.a),
    setAccDescription: (0, _commonDb2Ace122BJs.b),
    addStyleClass,
    setCssClass,
    addDescription,
    setDiagramTitle: (0, _commonDb2Ace122BJs.d),
    getDiagramTitle: (0, _commonDb2Ace122BJs.e)
};
const getStyles = (options)=>`
defs #statediagram-barbEnd {
    fill: ${options.transitionColor};
    stroke: ${options.transitionColor};
  }
g.stateGroup text {
  fill: ${options.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${options.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${options.stateLabelColor};
}

g.stateGroup rect {
  fill: ${options.mainBkg};
  stroke: ${options.nodeBorder};
}

g.stateGroup line {
  stroke: ${options.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${options.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${options.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${options.noteBorderColor};
  fill: ${options.noteBkgColor};

  text {
    fill: ${options.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${options.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${options.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${options.transitionLabelColor || options.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${options.transitionLabelColor || options.tertiaryTextColor};
}

.stateLabel text {
  fill: ${options.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${options.specialStateColor};
  stroke: ${options.specialStateColor};
}

.node .fork-join {
  fill: ${options.specialStateColor};
  stroke: ${options.specialStateColor};
}

.node circle.state-end {
  fill: ${options.innerEndBackground};
  stroke: ${options.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${options.compositeBackground || options.background};
  // stroke: ${options.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${options.stateBkg || options.mainBkg};
  stroke: ${options.stateBorder || options.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${options.mainBkg};
  stroke: ${options.stateBorder || options.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${options.lineColor};
}

.statediagram-cluster rect {
  fill: ${options.compositeTitleBackground};
  stroke: ${options.stateBorder || options.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${options.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${options.stateBorder || options.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${options.compositeBackground || options.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${options.altBackground ? options.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${options.altBackground ? options.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${options.noteBkgColor};
  stroke: ${options.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${options.noteBkgColor};
  stroke: ${options.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${options.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${options.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${options.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${options.lineColor};
  stroke: ${options.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${options.textColor};
}
`;
const styles = getStyles;

},{"./config-389b86ff.js":"hnpRM","./utils-d5eeff82.js":"2zv2d","./mermaidAPI-0716c7c2.js":"bdkW7","./commonDb-2ace122b.js":"kBdnX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lDOCE"], null, "parcelRequire54bf")

//# sourceMappingURL=stateDiagram-95825141.91492e79.js.map
