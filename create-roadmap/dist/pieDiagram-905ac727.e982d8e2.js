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
})({"ivsyN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4ad0260ae982d8e2";
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

},{}],"ijivn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diagram", ()=>diagram);
var _config389B86FfJs = require("./config-389b86ff.js");
var _mermaidAPI0716C7C2Js = require("./mermaidAPI-0716c7c2.js");
var _commonDb2Ace122BJs = require("./commonDb-2ace122b.js");
var _d3 = require("d3");
var _setupGraphViewboxE35E4124Js = require("./setupGraphViewbox-e35e4124.js");
var _dompurify = require("dompurify");
var _dayjs = require("dayjs");
var _khroma = require("khroma");
var _stylis = require("stylis");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
var _sanitizeUrl = require("@braintree/sanitize-url");
var _memoizeJs = require("lodash-es/memoize.js");
var _errorRendererD05351B9Js = require("./errorRenderer-d05351b9.js");
var _isEmptyJs = require("lodash-es/isEmpty.js");
var parser = function() {
    var o = function(k, v, o2, l) {
        for(o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v);
        return o2;
    }, $V0 = [
        1,
        4
    ], $V1 = [
        1,
        5
    ], $V2 = [
        1,
        6
    ], $V3 = [
        1,
        7
    ], $V4 = [
        1,
        9
    ], $V5 = [
        1,
        11,
        13,
        15,
        17,
        19,
        20,
        26,
        27,
        28,
        29
    ], $V6 = [
        2,
        5
    ], $V7 = [
        1,
        6,
        11,
        13,
        15,
        17,
        19,
        20,
        26,
        27,
        28,
        29
    ], $V8 = [
        26,
        27,
        28
    ], $V9 = [
        2,
        8
    ], $Va = [
        1,
        18
    ], $Vb = [
        1,
        19
    ], $Vc = [
        1,
        20
    ], $Vd = [
        1,
        21
    ], $Ve = [
        1,
        22
    ], $Vf = [
        1,
        23
    ], $Vg = [
        1,
        28
    ], $Vh = [
        6,
        26,
        27,
        28,
        29
    ];
    var parser2 = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "start": 3,
            "eol": 4,
            "directive": 5,
            "PIE": 6,
            "document": 7,
            "showData": 8,
            "line": 9,
            "statement": 10,
            "txt": 11,
            "value": 12,
            "title": 13,
            "title_value": 14,
            "acc_title": 15,
            "acc_title_value": 16,
            "acc_descr": 17,
            "acc_descr_value": 18,
            "acc_descr_multiline_value": 19,
            "section": 20,
            "openDirective": 21,
            "typeDirective": 22,
            "closeDirective": 23,
            ":": 24,
            "argDirective": 25,
            "NEWLINE": 26,
            ";": 27,
            "EOF": 28,
            "open_directive": 29,
            "type_directive": 30,
            "arg_directive": 31,
            "close_directive": 32,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            6: "PIE",
            8: "showData",
            11: "txt",
            12: "value",
            13: "title",
            14: "title_value",
            15: "acc_title",
            16: "acc_title_value",
            17: "acc_descr",
            18: "acc_descr_value",
            19: "acc_descr_multiline_value",
            20: "section",
            24: ":",
            26: "NEWLINE",
            27: ";",
            28: "EOF",
            29: "open_directive",
            30: "type_directive",
            31: "arg_directive",
            32: "close_directive"
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
                3
            ],
            [
                7,
                0
            ],
            [
                7,
                2
            ],
            [
                9,
                2
            ],
            [
                10,
                0
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
                2
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
                5,
                3
            ],
            [
                5,
                5
            ],
            [
                4,
                1
            ],
            [
                4,
                1
            ],
            [
                4,
                1
            ],
            [
                21,
                1
            ],
            [
                22,
                1
            ],
            [
                25,
                1
            ],
            [
                23,
                1
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 4:
                    yy.setShowData(true);
                    break;
                case 7:
                    this.$ = $$[$0 - 1];
                    break;
                case 9:
                    yy.addSection($$[$0 - 1], yy.cleanupValue($$[$0]));
                    break;
                case 10:
                    this.$ = $$[$0].trim();
                    yy.setDiagramTitle(this.$);
                    break;
                case 11:
                    this.$ = $$[$0].trim();
                    yy.setAccTitle(this.$);
                    break;
                case 12:
                case 13:
                    this.$ = $$[$0].trim();
                    yy.setAccDescription(this.$);
                    break;
                case 14:
                    yy.addSection($$[$0].substr(8));
                    this.$ = $$[$0].substr(8);
                    break;
                case 21:
                    yy.parseDirective("%%{", "open_directive");
                    break;
                case 22:
                    yy.parseDirective($$[$0], "type_directive");
                    break;
                case 23:
                    $$[$0] = $$[$0].trim().replace(/'/g, '"');
                    yy.parseDirective($$[$0], "arg_directive");
                    break;
                case 24:
                    yy.parseDirective("}%%", "close_directive", "pie");
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: 2,
                5: 3,
                6: $V0,
                21: 8,
                26: $V1,
                27: $V2,
                28: $V3,
                29: $V4
            },
            {
                1: [
                    3
                ]
            },
            {
                3: 10,
                4: 2,
                5: 3,
                6: $V0,
                21: 8,
                26: $V1,
                27: $V2,
                28: $V3,
                29: $V4
            },
            {
                3: 11,
                4: 2,
                5: 3,
                6: $V0,
                21: 8,
                26: $V1,
                27: $V2,
                28: $V3,
                29: $V4
            },
            o($V5, $V6, {
                7: 12,
                8: [
                    1,
                    13
                ]
            }),
            o($V7, [
                2,
                18
            ]),
            o($V7, [
                2,
                19
            ]),
            o($V7, [
                2,
                20
            ]),
            {
                22: 14,
                30: [
                    1,
                    15
                ]
            },
            {
                30: [
                    2,
                    21
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
            o($V8, $V9, {
                21: 8,
                9: 16,
                10: 17,
                5: 24,
                1: [
                    2,
                    3
                ],
                11: $Va,
                13: $Vb,
                15: $Vc,
                17: $Vd,
                19: $Ve,
                20: $Vf,
                29: $V4
            }),
            o($V5, $V6, {
                7: 25
            }),
            {
                23: 26,
                24: [
                    1,
                    27
                ],
                32: $Vg
            },
            o([
                24,
                32
            ], [
                2,
                22
            ]),
            o($V5, [
                2,
                6
            ]),
            {
                4: 29,
                26: $V1,
                27: $V2,
                28: $V3
            },
            {
                12: [
                    1,
                    30
                ]
            },
            {
                14: [
                    1,
                    31
                ]
            },
            {
                16: [
                    1,
                    32
                ]
            },
            {
                18: [
                    1,
                    33
                ]
            },
            o($V8, [
                2,
                13
            ]),
            o($V8, [
                2,
                14
            ]),
            o($V8, [
                2,
                15
            ]),
            o($V8, $V9, {
                21: 8,
                9: 16,
                10: 17,
                5: 24,
                1: [
                    2,
                    4
                ],
                11: $Va,
                13: $Vb,
                15: $Vc,
                17: $Vd,
                19: $Ve,
                20: $Vf,
                29: $V4
            }),
            o($Vh, [
                2,
                16
            ]),
            {
                25: 34,
                31: [
                    1,
                    35
                ]
            },
            o($Vh, [
                2,
                24
            ]),
            o($V5, [
                2,
                7
            ]),
            o($V8, [
                2,
                9
            ]),
            o($V8, [
                2,
                10
            ]),
            o($V8, [
                2,
                11
            ]),
            o($V8, [
                2,
                12
            ]),
            {
                23: 36,
                32: $Vg
            },
            {
                32: [
                    2,
                    23
                ]
            },
            o($Vh, [
                2,
                17
            ])
        ],
        defaultActions: {
            9: [
                2,
                21
            ],
            10: [
                2,
                1
            ],
            11: [
                2,
                2
            ],
            35: [
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
                        this.begin("open_directive");
                        return 29;
                    case 1:
                        this.begin("type_directive");
                        return 30;
                    case 2:
                        this.popState();
                        this.begin("arg_directive");
                        return 24;
                    case 3:
                        this.popState();
                        this.popState();
                        return 32;
                    case 4:
                        return 31;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        return 26;
                    case 8:
                        break;
                    case 9:
                        break;
                    case 10:
                        this.begin("title");
                        return 13;
                    case 11:
                        this.popState();
                        return "title_value";
                    case 12:
                        this.begin("acc_title");
                        return 15;
                    case 13:
                        this.popState();
                        return "acc_title_value";
                    case 14:
                        this.begin("acc_descr");
                        return 17;
                    case 15:
                        this.popState();
                        return "acc_descr_value";
                    case 16:
                        this.begin("acc_descr_multiline");
                        break;
                    case 17:
                        this.popState();
                        break;
                    case 18:
                        return "acc_descr_multiline_value";
                    case 19:
                        this.begin("string");
                        break;
                    case 20:
                        this.popState();
                        break;
                    case 21:
                        return "txt";
                    case 22:
                        return 6;
                    case 23:
                        return 8;
                    case 24:
                        return "value";
                    case 25:
                        return 28;
                }
            },
            rules: [
                /^(?:%%\{)/i,
                /^(?:((?:(?!\}%%)[^:.])*))/i,
                /^(?::)/i,
                /^(?:\}%%)/i,
                /^(?:((?:(?!\}%%).|\n)*))/i,
                /^(?:%%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:[\n\r]+)/i,
                /^(?:%%[^\n]*)/i,
                /^(?:[\s]+)/i,
                /^(?:title\b)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:[\}])/i,
                /^(?:[^\}]*)/i,
                /^(?:["])/i,
                /^(?:["])/i,
                /^(?:[^"]*)/i,
                /^(?:pie\b)/i,
                /^(?:showData\b)/i,
                /^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,
                /^(?:$)/i
            ],
            conditions: {
                "acc_descr_multiline": {
                    "rules": [
                        17,
                        18
                    ],
                    "inclusive": false
                },
                "acc_descr": {
                    "rules": [
                        15
                    ],
                    "inclusive": false
                },
                "acc_title": {
                    "rules": [
                        13
                    ],
                    "inclusive": false
                },
                "close_directive": {
                    "rules": [],
                    "inclusive": false
                },
                "arg_directive": {
                    "rules": [
                        3,
                        4
                    ],
                    "inclusive": false
                },
                "type_directive": {
                    "rules": [
                        2,
                        3
                    ],
                    "inclusive": false
                },
                "open_directive": {
                    "rules": [
                        1
                    ],
                    "inclusive": false
                },
                "title": {
                    "rules": [
                        11
                    ],
                    "inclusive": false
                },
                "string": {
                    "rules": [
                        20,
                        21
                    ],
                    "inclusive": false
                },
                "INITIAL": {
                    "rules": [
                        0,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        12,
                        14,
                        16,
                        19,
                        22,
                        23,
                        24,
                        25
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
let sections = {};
let showData = false;
const parseDirective = function(statement, context, type) {
    (0, _mermaidAPI0716C7C2Js.m).parseDirective(this, statement, context, type);
};
const addSection = function(id, value) {
    id = (0, _config389B86FfJs.d).sanitizeText(id, (0, _config389B86FfJs.g)());
    if (sections[id] === void 0) {
        sections[id] = value;
        (0, _config389B86FfJs.l).debug("Added new section :", id);
    }
};
const getSections = ()=>sections;
const setShowData = function(toggle) {
    showData = toggle;
};
const getShowData = function() {
    return showData;
};
const cleanupValue = function(value) {
    if (value.substring(0, 1) === ":") {
        value = value.substring(1).trim();
        return Number(value.trim());
    } else return Number(value.trim());
};
const clear = function() {
    sections = {};
    showData = false;
    (0, _commonDb2Ace122BJs.f)();
};
const db = {
    parseDirective,
    getConfig: ()=>(0, _config389B86FfJs.g)().pie,
    addSection,
    getSections,
    cleanupValue,
    clear,
    setAccTitle: (0, _commonDb2Ace122BJs.s),
    getAccTitle: (0, _commonDb2Ace122BJs.g),
    setDiagramTitle: (0, _commonDb2Ace122BJs.d),
    getDiagramTitle: (0, _commonDb2Ace122BJs.e),
    setShowData,
    getShowData,
    getAccDescription: (0, _commonDb2Ace122BJs.a),
    setAccDescription: (0, _commonDb2Ace122BJs.b)
};
const getStyles = (options)=>`
  .pieCircle{
    stroke: ${options.pieStrokeColor};
    stroke-width : ${options.pieStrokeWidth};
    opacity : ${options.pieOpacity};
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${options.pieTitleTextSize};
    fill: ${options.pieTitleTextColor};
    font-family: ${options.fontFamily};
  }
  .slice {
    font-family: ${options.fontFamily};
    fill: ${options.pieSectionTextColor};
    font-size:${options.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${options.pieLegendTextColor};
    font-family: ${options.fontFamily};
    font-size: ${options.pieLegendTextSize};
  }
`;
const styles = getStyles;
let conf = (0, _config389B86FfJs.g)();
let width;
const height = 450;
const draw = (txt, id, _version, diagObj)=>{
    try {
        conf = (0, _config389B86FfJs.g)();
        (0, _config389B86FfJs.l).debug("Rendering info diagram\n" + txt);
        const securityLevel = (0, _config389B86FfJs.g)().securityLevel;
        let sandboxElement;
        if (securityLevel === "sandbox") sandboxElement = (0, _d3.select)("#i" + id);
        const root = securityLevel === "sandbox" ? (0, _d3.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, _d3.select)("body");
        const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
        diagObj.db.clear();
        diagObj.parser.parse(txt);
        (0, _config389B86FfJs.l).debug("Parsed info diagram");
        const elem = doc.getElementById(id);
        width = elem.parentElement.offsetWidth;
        if (width === void 0) width = 1200;
        if (conf.useWidth !== void 0) width = conf.useWidth;
        if (conf.pie.useWidth !== void 0) width = conf.pie.useWidth;
        const diagram2 = root.select("#" + id);
        (0, _setupGraphViewboxE35E4124Js.c)(diagram2, height, width, conf.pie.useMaxWidth);
        elem.setAttribute("viewBox", "0 0 " + width + " " + height);
        var margin = 40;
        var legendRectSize = 18;
        var legendSpacing = 4;
        var radius = Math.min(width, height) / 2 - margin;
        var svg = diagram2.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        var data = diagObj.db.getSections();
        var sum = 0;
        Object.keys(data).forEach(function(key) {
            sum += data[key];
        });
        const themeVariables = conf.themeVariables;
        var myGeneratedColors = [
            themeVariables.pie1,
            themeVariables.pie2,
            themeVariables.pie3,
            themeVariables.pie4,
            themeVariables.pie5,
            themeVariables.pie6,
            themeVariables.pie7,
            themeVariables.pie8,
            themeVariables.pie9,
            themeVariables.pie10,
            themeVariables.pie11,
            themeVariables.pie12
        ];
        var color = (0, _d3.scaleOrdinal)().range(myGeneratedColors);
        var pieData = Object.entries(data).map(function(el, idx) {
            return {
                order: idx,
                name: el[0],
                value: el[1]
            };
        });
        var pie$1 = (0, _d3.pie)().value(function(d) {
            return d.value;
        }).sort(function(a, b) {
            return a.order - b.order;
        });
        var dataReady = pie$1(pieData);
        var arcGenerator = (0, _d3.arc)().innerRadius(0).outerRadius(radius);
        svg.selectAll("mySlices").data(dataReady).enter().append("path").attr("d", arcGenerator).attr("fill", function(d) {
            return color(d.data.name);
        }).attr("class", "pieCircle");
        svg.selectAll("mySlices").data(dataReady).enter().append("text").text(function(d) {
            return (d.data.value / sum * 100).toFixed(0) + "%";
        }).attr("transform", function(d) {
            return "translate(" + arcGenerator.centroid(d) + ")";
        }).style("text-anchor", "middle").attr("class", "slice");
        svg.append("text").text(diagObj.db.getDiagramTitle()).attr("x", 0).attr("y", -(height - 50) / 2).attr("class", "pieTitleText");
        var legend = svg.selectAll(".legend").data(color.domain()).enter().append("g").attr("class", "legend").attr("transform", function(d, i) {
            const height2 = legendRectSize + legendSpacing;
            const offset = height2 * color.domain().length / 2;
            const horizontal = 12 * legendRectSize;
            const vertical = i * height2 - offset;
            return "translate(" + horizontal + "," + vertical + ")";
        });
        legend.append("rect").attr("width", legendRectSize).attr("height", legendRectSize).style("fill", color).style("stroke", color);
        legend.data(dataReady).append("text").attr("x", legendRectSize + legendSpacing).attr("y", legendRectSize - legendSpacing).text(function(d) {
            if (diagObj.db.getShowData() || conf.showData || conf.pie.showData) return d.data.name + " [" + d.data.value + "]";
            else return d.data.name;
        });
    } catch (e) {
        (0, _config389B86FfJs.l).error("Error while rendering info diagram");
        (0, _config389B86FfJs.l).error(e);
    }
};
const renderer = {
    draw
};
const diagram = {
    parser: parser$1,
    db,
    renderer,
    styles
};

},{"./config-389b86ff.js":"hnpRM","./mermaidAPI-0716c7c2.js":"bdkW7","./commonDb-2ace122b.js":"kBdnX","d3":"17XFv","./setupGraphViewbox-e35e4124.js":"jv1OR","dompurify":"9Kzno","dayjs":"NJZFB","khroma":"lMw0x","stylis":"bMCXt","./utils-d5eeff82.js":"2zv2d","@braintree/sanitize-url":"hrxAd","lodash-es/memoize.js":"5zdei","./errorRenderer-d05351b9.js":"d3Vzc","lodash-es/isEmpty.js":"e1Kmi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBdnX":[function(require,module,exports) {
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

},{"./config-389b86ff.js":"hnpRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Vzc":[function(require,module,exports) {
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

},{"d3":"17XFv","./config-389b86ff.js":"hnpRM","./utils-d5eeff82.js":"2zv2d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ivsyN"], null, "parcelRequire54bf")

//# sourceMappingURL=pieDiagram-905ac727.e982d8e2.js.map
