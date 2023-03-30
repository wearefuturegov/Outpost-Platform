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
})({"82Wzz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b32609744d35feb3";
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

},{}],"3ZXXx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diagram", ()=>diagram);
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
var _commonDb2Ace122BJs = require("./commonDb-2ace122b.js");
var _d3 = require("d3");
var _config389B86FfJs = require("./config-389b86ff.js");
var _setupGraphViewboxE35E4124Js = require("./setupGraphViewbox-e35e4124.js");
var _khroma = require("khroma");
var _sanitizeUrl = require("@braintree/sanitize-url");
var _memoizeJs = require("lodash-es/memoize.js");
var _dompurify = require("dompurify");
var _dayjs = require("dayjs");
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
        17,
        18,
        20,
        22,
        23,
        26,
        27,
        28
    ], $V3 = [
        1,
        15
    ], $V4 = [
        1,
        16
    ], $V5 = [
        1,
        17
    ], $V6 = [
        1,
        18
    ], $V7 = [
        1,
        19
    ], $V8 = [
        1,
        23
    ], $V9 = [
        1,
        24
    ], $Va = [
        1,
        27
    ], $Vb = [
        4,
        6,
        9,
        11,
        17,
        18,
        20,
        22,
        23,
        26,
        27,
        28
    ];
    var parser2 = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "start": 3,
            "timeline": 4,
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
            "title": 17,
            "acc_title": 18,
            "acc_title_value": 19,
            "acc_descr": 20,
            "acc_descr_value": 21,
            "acc_descr_multiline_value": 22,
            "section": 23,
            "period_statement": 24,
            "event_statement": 25,
            "period": 26,
            "event": 27,
            "open_directive": 28,
            "type_directive": 29,
            "arg_directive": 30,
            "close_directive": 31,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            4: "timeline",
            6: "EOF",
            9: "SPACE",
            11: "NEWLINE",
            15: ":",
            17: "title",
            18: "acc_title",
            19: "acc_title_value",
            20: "acc_descr",
            21: "acc_descr_value",
            22: "acc_descr_multiline_value",
            23: "section",
            26: "period",
            27: "event",
            28: "open_directive",
            29: "type_directive",
            30: "arg_directive",
            31: "close_directive"
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
                10,
                1
            ],
            [
                10,
                1
            ],
            [
                24,
                1
            ],
            [
                25,
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
                    return $$[$0 - 1];
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
                case 11:
                    yy.getCommonDb().setDiagramTitle($$[$0].substr(6));
                    this.$ = $$[$0].substr(6);
                    break;
                case 12:
                    this.$ = $$[$0].trim();
                    yy.getCommonDb().setAccTitle(this.$);
                    break;
                case 13:
                case 14:
                    this.$ = $$[$0].trim();
                    yy.getCommonDb().setAccDescription(this.$);
                    break;
                case 15:
                    yy.addSection($$[$0].substr(8));
                    this.$ = $$[$0].substr(8);
                    break;
                case 19:
                    yy.addTask($$[$0], 0, "");
                    this.$ = $$[$0];
                    break;
                case 20:
                    yy.addEvent($$[$0].substr(2));
                    this.$ = $$[$0];
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
                    yy.parseDirective("}%%", "close_directive", "timeline");
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: $V0,
                7: 3,
                12: 4,
                28: $V1
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
                28: $V1
            },
            {
                13: 8,
                29: [
                    1,
                    9
                ]
            },
            {
                29: [
                    2,
                    21
                ]
            },
            {
                6: [
                    1,
                    10
                ],
                7: 22,
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
                17: $V3,
                18: $V4,
                20: $V5,
                22: $V6,
                23: $V7,
                24: 20,
                25: 21,
                26: $V8,
                27: $V9,
                28: $V1
            },
            {
                1: [
                    2,
                    2
                ]
            },
            {
                14: 25,
                15: [
                    1,
                    26
                ],
                31: $Va
            },
            o([
                15,
                31
            ], [
                2,
                22
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
                7: 22,
                10: 28,
                12: 4,
                17: $V3,
                18: $V4,
                20: $V5,
                22: $V6,
                23: $V7,
                24: 20,
                25: 21,
                26: $V8,
                27: $V9,
                28: $V1
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
            {
                19: [
                    1,
                    29
                ]
            },
            {
                21: [
                    1,
                    30
                ]
            },
            o($V2, [
                2,
                14
            ]),
            o($V2, [
                2,
                15
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
            o($V2, [
                2,
                19
            ]),
            o($V2, [
                2,
                20
            ]),
            {
                11: [
                    1,
                    31
                ]
            },
            {
                16: 32,
                30: [
                    1,
                    33
                ]
            },
            {
                11: [
                    2,
                    24
                ]
            },
            o($V2, [
                2,
                5
            ]),
            o($V2, [
                2,
                12
            ]),
            o($V2, [
                2,
                13
            ]),
            o($Vb, [
                2,
                9
            ]),
            {
                14: 34,
                31: $Va
            },
            {
                31: [
                    2,
                    23
                ]
            },
            {
                11: [
                    1,
                    35
                ]
            },
            o($Vb, [
                2,
                10
            ])
        ],
        defaultActions: {
            5: [
                2,
                21
            ],
            7: [
                2,
                2
            ],
            27: [
                2,
                24
            ],
            33: [
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
                        return 28;
                    case 1:
                        this.begin("type_directive");
                        return 29;
                    case 2:
                        this.popState();
                        this.begin("arg_directive");
                        return 15;
                    case 3:
                        this.popState();
                        this.popState();
                        return 31;
                    case 4:
                        return 30;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        return 11;
                    case 8:
                        break;
                    case 9:
                        break;
                    case 10:
                        return 4;
                    case 11:
                        return 17;
                    case 12:
                        this.begin("acc_title");
                        return 18;
                    case 13:
                        this.popState();
                        return "acc_title_value";
                    case 14:
                        this.begin("acc_descr");
                        return 20;
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
                        return 23;
                    case 20:
                        return 27;
                    case 21:
                        return 26;
                    case 22:
                        return 6;
                    case 23:
                        return "INVALID";
                }
            },
            rules: [
                /^(?:%%\{)/i,
                /^(?:((?:(?!\}%%)[^:.])*))/i,
                /^(?::)/i,
                /^(?:\}%%)/i,
                /^(?:((?:(?!\}%%).|\n)*))/i,
                /^(?:%(?!\{)[^\n]*)/i,
                /^(?:[^\}]%%[^\n]*)/i,
                /^(?:[\n]+)/i,
                /^(?:\s+)/i,
                /^(?:#[^\n]*)/i,
                /^(?:timeline\b)/i,
                /^(?:title\s[^#\n;]+)/i,
                /^(?:accTitle\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*:\s*)/i,
                /^(?:(?!\n||)*[^\n]*)/i,
                /^(?:accDescr\s*\{\s*)/i,
                /^(?:[\}])/i,
                /^(?:[^\}]*)/i,
                /^(?:section\s[^#:\n;]+)/i,
                /^(?::\s[^#:\n;]+)/i,
                /^(?:[^#:\n;]+)/i,
                /^(?:$)/i,
                /^(?:.)/i
            ],
            conditions: {
                "open_directive": {
                    "rules": [
                        1
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
                "arg_directive": {
                    "rules": [
                        3,
                        4
                    ],
                    "inclusive": false
                },
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
                "INITIAL": {
                    "rules": [
                        0,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        14,
                        16,
                        19,
                        20,
                        21,
                        22,
                        23
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
let currentSection = "";
let currentTaskId = 0;
const sections = [];
const tasks = [];
const rawTasks = [];
const getCommonDb = ()=>(0, _commonDb2Ace122BJs.c);
const parseDirective = (statement, context, type)=>{
    (0, _utilsD5Eeff82Js.p)(globalThis, statement, context, type);
};
const clear = function() {
    sections.length = 0;
    tasks.length = 0;
    currentSection = "";
    rawTasks.length = 0;
    (0, _commonDb2Ace122BJs.f)();
};
const addSection = function(txt) {
    currentSection = txt;
    sections.push(txt);
};
const getSections = function() {
    return sections;
};
const getTasks = function() {
    let allItemsProcessed = compileTasks();
    const maxDepth = 100;
    let iterationCount = 0;
    while(!allItemsProcessed && iterationCount < maxDepth){
        allItemsProcessed = compileTasks();
        iterationCount++;
    }
    tasks.push(...rawTasks);
    return tasks;
};
const addTask = function(period, length, event) {
    const rawTask = {
        id: currentTaskId++,
        section: currentSection,
        type: currentSection,
        task: period,
        score: length ? length : 0,
        //if event is defined, then add it the events array
        events: event ? [
            event
        ] : []
    };
    rawTasks.push(rawTask);
};
const addEvent = function(event) {
    const currentTask = rawTasks.find((task)=>task.id === currentTaskId - 1);
    currentTask.events.push(event);
};
const addTaskOrg = function(descr) {
    const newTask = {
        section: currentSection,
        type: currentSection,
        description: descr,
        task: descr,
        classes: []
    };
    tasks.push(newTask);
};
const compileTasks = function() {
    const compileTask = function(pos) {
        return rawTasks[pos].processed;
    };
    let allProcessed = true;
    for (const [i, rawTask] of rawTasks.entries()){
        compileTask(i);
        allProcessed = allProcessed && rawTask.processed;
    }
    return allProcessed;
};
const timelineDb = {
    clear,
    getCommonDb,
    addSection,
    getSections,
    getTasks,
    addTask,
    addTaskOrg,
    addEvent,
    parseDirective
};
const db = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    addEvent,
    addSection,
    addTask,
    addTaskOrg,
    clear,
    default: timelineDb,
    getCommonDb,
    getSections,
    getTasks,
    parseDirective
}, Symbol.toStringTag, {
    value: "Module"
}));
const MAX_SECTIONS = 12;
const drawRect = function(elem, rectData) {
    const rectElem = elem.append("rect");
    rectElem.attr("x", rectData.x);
    rectElem.attr("y", rectData.y);
    rectElem.attr("fill", rectData.fill);
    rectElem.attr("stroke", rectData.stroke);
    rectElem.attr("width", rectData.width);
    rectElem.attr("height", rectData.height);
    rectElem.attr("rx", rectData.rx);
    rectElem.attr("ry", rectData.ry);
    if (rectData.class !== void 0) rectElem.attr("class", rectData.class);
    return rectElem;
};
const drawFace = function(element, faceData) {
    const radius = 15;
    const circleElement = element.append("circle").attr("cx", faceData.cx).attr("cy", faceData.cy).attr("class", "face").attr("r", radius).attr("stroke-width", 2).attr("overflow", "visible");
    const face = element.append("g");
    face.append("circle").attr("cx", faceData.cx - radius / 3).attr("cy", faceData.cy - radius / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    face.append("circle").attr("cx", faceData.cx + radius / 3).attr("cy", faceData.cy - radius / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
    function smile(face2) {
        const arc$1 = (0, _d3.arc)().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(radius / 2).outerRadius(radius / 2.2);
        face2.append("path").attr("class", "mouth").attr("d", arc$1).attr("transform", "translate(" + faceData.cx + "," + (faceData.cy + 2) + ")");
    }
    function sad(face2) {
        const arc$1 = (0, _d3.arc)().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(radius / 2).outerRadius(radius / 2.2);
        face2.append("path").attr("class", "mouth").attr("d", arc$1).attr("transform", "translate(" + faceData.cx + "," + (faceData.cy + 7) + ")");
    }
    function ambivalent(face2) {
        face2.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", faceData.cx - 5).attr("y1", faceData.cy + 7).attr("x2", faceData.cx + 5).attr("y2", faceData.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
    }
    if (faceData.score > 3) smile(face);
    else if (faceData.score < 3) sad(face);
    else ambivalent(face);
    return circleElement;
};
const drawCircle = function(element, circleData) {
    const circleElement = element.append("circle");
    circleElement.attr("cx", circleData.cx);
    circleElement.attr("cy", circleData.cy);
    circleElement.attr("class", "actor-" + circleData.pos);
    circleElement.attr("fill", circleData.fill);
    circleElement.attr("stroke", circleData.stroke);
    circleElement.attr("r", circleData.r);
    if (circleElement.class !== void 0) circleElement.attr("class", circleElement.class);
    if (circleData.title !== void 0) circleElement.append("title").text(circleData.title);
    return circleElement;
};
const drawText = function(elem, textData) {
    const nText = textData.text.replace(/<br\s*\/?>/gi, " ");
    const textElem = elem.append("text");
    textElem.attr("x", textData.x);
    textElem.attr("y", textData.y);
    textElem.attr("class", "legend");
    textElem.style("text-anchor", textData.anchor);
    if (textData.class !== void 0) textElem.attr("class", textData.class);
    const span = textElem.append("tspan");
    span.attr("x", textData.x + textData.textMargin * 2);
    span.text(nText);
    return textElem;
};
const drawLabel = function(elem, txtObject) {
    function genPoints(x, y, width, height, cut) {
        return x + "," + y + " " + (x + width) + "," + y + " " + (x + width) + "," + (y + height - cut) + " " + (x + width - cut * 1.2) + "," + (y + height) + " " + x + "," + (y + height);
    }
    const polygon = elem.append("polygon");
    polygon.attr("points", genPoints(txtObject.x, txtObject.y, 50, 20, 7));
    polygon.attr("class", "labelBox");
    txtObject.y = txtObject.y + txtObject.labelMargin;
    txtObject.x = txtObject.x + 0.5 * txtObject.labelMargin;
    drawText(elem, txtObject);
};
const drawSection = function(elem, section, conf) {
    const g = elem.append("g");
    const rect = getNoteRect();
    rect.x = section.x;
    rect.y = section.y;
    rect.fill = section.fill;
    rect.width = conf.width;
    rect.height = conf.height;
    rect.class = "journey-section section-type-" + section.num;
    rect.rx = 3;
    rect.ry = 3;
    drawRect(g, rect);
    _drawTextCandidateFunc(conf)(section.text, g, rect.x, rect.y, rect.width, rect.height, {
        class: "journey-section section-type-" + section.num
    }, conf, section.colour);
};
let taskCount = -1;
const drawTask = function(elem, task, conf) {
    const center = task.x + conf.width / 2;
    const g = elem.append("g");
    taskCount++;
    const maxHeight = 450;
    g.append("line").attr("id", "task" + taskCount).attr("x1", center).attr("y1", task.y).attr("x2", center).attr("y2", maxHeight).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666");
    drawFace(g, {
        cx: center,
        cy: 300 + (5 - task.score) * 30,
        score: task.score
    });
    const rect = getNoteRect();
    rect.x = task.x;
    rect.y = task.y;
    rect.fill = task.fill;
    rect.width = conf.width;
    rect.height = conf.height;
    rect.class = "task task-type-" + task.num;
    rect.rx = 3;
    rect.ry = 3;
    drawRect(g, rect);
    task.x;
    _drawTextCandidateFunc(conf)(task.task, g, rect.x, rect.y, rect.width, rect.height, {
        class: "task"
    }, conf, task.colour);
};
const drawBackgroundRect = function(elem, bounds) {
    const rectElem = drawRect(elem, {
        x: bounds.startx,
        y: bounds.starty,
        width: bounds.stopx - bounds.startx,
        height: bounds.stopy - bounds.starty,
        fill: bounds.fill,
        class: "rect"
    });
    rectElem.lower();
};
const getTextObj = function() {
    return {
        x: 0,
        y: 0,
        fill: void 0,
        "text-anchor": "start",
        width: 100,
        height: 100,
        textMargin: 0,
        rx: 0,
        ry: 0
    };
};
const getNoteRect = function() {
    return {
        x: 0,
        y: 0,
        width: 100,
        anchor: "start",
        height: 100,
        rx: 0,
        ry: 0
    };
};
const _drawTextCandidateFunc = function() {
    function byText(content, g, x, y, width, height, textAttrs, colour) {
        const text = g.append("text").attr("x", x + width / 2).attr("y", y + height / 2 + 5).style("font-color", colour).style("text-anchor", "middle").text(content);
        _setTextAttrs(text, textAttrs);
    }
    function byTspan(content, g, x, y, width, height, textAttrs, conf, colour) {
        const { taskFontSize , taskFontFamily  } = conf;
        const lines = content.split(/<br\s*\/?>/gi);
        for(let i = 0; i < lines.length; i++){
            const dy = i * taskFontSize - taskFontSize * (lines.length - 1) / 2;
            const text = g.append("text").attr("x", x + width / 2).attr("y", y).attr("fill", colour).style("text-anchor", "middle").style("font-size", taskFontSize).style("font-family", taskFontFamily);
            text.append("tspan").attr("x", x + width / 2).attr("dy", dy).text(lines[i]);
            text.attr("y", y + height / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central");
            _setTextAttrs(text, textAttrs);
        }
    }
    function byFo(content, g, x, y, width, height, textAttrs, conf) {
        const body = g.append("switch");
        const f = body.append("foreignObject").attr("x", x).attr("y", y).attr("width", width).attr("height", height).attr("position", "fixed");
        const text = f.append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
        text.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(content);
        byTspan(content, body, x, y, width, height, textAttrs, conf);
        _setTextAttrs(text, textAttrs);
    }
    function _setTextAttrs(toText, fromTextAttrsDict) {
        for(const key in fromTextAttrsDict)if (key in fromTextAttrsDict) toText.attr(key, fromTextAttrsDict[key]);
    }
    return function(conf) {
        return conf.textPlacement === "fo" ? byFo : conf.textPlacement === "old" ? byText : byTspan;
    };
}();
const initGraphics = function(graphics) {
    graphics.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
};
function wrap(text, width) {
    text.each(function() {
        var text2 = (0, _d3.select)(this), words = text2.text().split(/(\s+|<br>)/).reverse(), word, line = [], lineHeight = 1.1, y = text2.attr("y"), dy = parseFloat(text2.attr("dy")), tspan = text2.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        for(let j = 0; j < words.length; j++){
            word = words[words.length - 1 - j];
            line.push(word);
            tspan.text(line.join(" ").trim());
            if (tspan.node().getComputedTextLength() > width || word === "<br>") {
                line.pop();
                tspan.text(line.join(" ").trim());
                if (word === "<br>") line = [
                    ""
                ];
                else line = [
                    word
                ];
                tspan = text2.append("tspan").attr("x", 0).attr("y", y).attr("dy", lineHeight + "em").text(word);
            }
        }
    });
}
const drawNode = function(elem, node, fullSection, conf) {
    const section = fullSection % MAX_SECTIONS - 1;
    const nodeElem = elem.append("g");
    node.section = section;
    nodeElem.attr("class", (node.class ? node.class + " " : "") + "timeline-node " + ("section-" + section));
    const bkgElem = nodeElem.append("g");
    const textElem = nodeElem.append("g");
    const txt = textElem.append("text").text(node.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(wrap, node.width);
    const bbox = txt.node().getBBox();
    const fontSize = conf.fontSize && conf.fontSize.replace ? conf.fontSize.replace("px", "") : conf.fontSize;
    node.height = bbox.height + fontSize * 0.55 + node.padding;
    node.height = Math.max(node.height, node.maxHeight);
    node.width = node.width + 2 * node.padding;
    textElem.attr("transform", "translate(" + node.width / 2 + ", " + node.padding / 2 + ")");
    defaultBkg(bkgElem, node, section);
    return node;
};
const getVirtualNodeHeight = function(elem, node, conf) {
    const textElem = elem.append("g");
    const txt = textElem.append("text").text(node.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(wrap, node.width);
    const bbox = txt.node().getBBox();
    const fontSize = conf.fontSize && conf.fontSize.replace ? conf.fontSize.replace("px", "") : conf.fontSize;
    textElem.remove();
    return bbox.height + fontSize * 0.55 + node.padding;
};
const defaultBkg = function(elem, node, section) {
    const rd = 5;
    elem.append("path").attr("id", "node-" + node.id).attr("class", "node-bkg node-" + node.type).attr("d", `M0 ${node.height - rd} v${-node.height + 2 * rd} q0,-5 5,-5 h${node.width - 2 * rd} q5,0 5,5 v${node.height - rd} H0 Z`);
    elem.append("line").attr("class", "node-line-" + section).attr("x1", 0).attr("y1", node.height).attr("x2", node.width).attr("y2", node.height);
};
const svgDraw = {
    drawRect,
    drawCircle,
    drawSection,
    drawText,
    drawLabel,
    drawTask,
    drawBackgroundRect,
    getTextObj,
    getNoteRect,
    initGraphics,
    drawNode,
    getVirtualNodeHeight
};
const draw = function(text, id, version, diagObj) {
    var _a, _b, _c, _d;
    const conf = (0, _config389B86FfJs.g)();
    const LEFT_MARGIN = conf.leftMargin ?? 50;
    (_b = (_a = diagObj.db).clear) == null || _b.call(_a);
    diagObj.parser.parse(text + "\n");
    (0, _config389B86FfJs.l).debug("timeline", diagObj.db);
    const securityLevel = conf.securityLevel;
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, _d3.select)("#i" + id);
    const root = securityLevel === "sandbox" ? // @ts-ignore d3 types are wrong
    (0, _d3.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, _d3.select)("body");
    const svg = root.select("#" + id);
    svg.append("g");
    const tasks2 = diagObj.db.getTasks();
    const title = diagObj.db.getCommonDb().getDiagramTitle();
    (0, _config389B86FfJs.l).debug("task", tasks2);
    svgDraw.initGraphics(svg);
    const sections2 = diagObj.db.getSections();
    (0, _config389B86FfJs.l).debug("sections", sections2);
    let maxSectionHeight = 0;
    let maxTaskHeight = 0;
    let depthY = 0;
    let sectionBeginY = 0;
    let masterX = 50 + LEFT_MARGIN;
    let masterY = 50;
    sectionBeginY = 50;
    let sectionNumber = 0;
    let hasSections = true;
    sections2.forEach(function(section) {
        const sectionNode = {
            number: sectionNumber,
            descr: section,
            section: sectionNumber,
            width: 150,
            padding: 20,
            maxHeight: maxSectionHeight
        };
        const sectionHeight = svgDraw.getVirtualNodeHeight(svg, sectionNode, conf);
        (0, _config389B86FfJs.l).debug("sectionHeight before draw", sectionHeight);
        maxSectionHeight = Math.max(maxSectionHeight, sectionHeight + 20);
    });
    let maxEventCount = 0;
    let maxEventLineLength = 0;
    (0, _config389B86FfJs.l).debug("tasks.length", tasks2.length);
    for (const [i, task] of tasks2.entries()){
        const taskNode = {
            number: i,
            descr: task,
            section: task.section,
            width: 150,
            padding: 20,
            maxHeight: maxTaskHeight
        };
        const taskHeight = svgDraw.getVirtualNodeHeight(svg, taskNode, conf);
        (0, _config389B86FfJs.l).debug("taskHeight before draw", taskHeight);
        maxTaskHeight = Math.max(maxTaskHeight, taskHeight + 20);
        maxEventCount = Math.max(maxEventCount, task.events.length);
        let maxEventLineLengthTemp = 0;
        for(let j = 0; j < task.events.length; j++){
            const event = task.events[j];
            const eventNode = {
                descr: event,
                section: task.section,
                number: task.section,
                width: 150,
                padding: 20,
                maxHeight: 50
            };
            maxEventLineLengthTemp += svgDraw.getVirtualNodeHeight(svg, eventNode, conf);
        }
        maxEventLineLength = Math.max(maxEventLineLength, maxEventLineLengthTemp);
    }
    (0, _config389B86FfJs.l).debug("maxSectionHeight before draw", maxSectionHeight);
    (0, _config389B86FfJs.l).debug("maxTaskHeight before draw", maxTaskHeight);
    if (sections2 && sections2.length > 0) sections2.forEach((section)=>{
        const tasksForSection = tasks2.filter((task)=>task.section === section);
        const sectionNode = {
            number: sectionNumber,
            descr: section,
            section: sectionNumber,
            width: 200 * Math.max(tasksForSection.length, 1) - 50,
            padding: 20,
            maxHeight: maxSectionHeight
        };
        (0, _config389B86FfJs.l).debug("sectionNode", sectionNode);
        const sectionNodeWrapper = svg.append("g");
        const node = svgDraw.drawNode(sectionNodeWrapper, sectionNode, sectionNumber, conf);
        (0, _config389B86FfJs.l).debug("sectionNode output", node);
        sectionNodeWrapper.attr("transform", `translate(${masterX}, ${sectionBeginY})`);
        masterY += maxSectionHeight + 50;
        if (tasksForSection.length > 0) drawTasks(svg, tasksForSection, sectionNumber, masterX, masterY, maxTaskHeight, conf, maxEventCount, maxEventLineLength, maxSectionHeight, false);
        masterX += 200 * Math.max(tasksForSection.length, 1);
        masterY = sectionBeginY;
        sectionNumber++;
    });
    else {
        hasSections = false;
        drawTasks(svg, tasks2, sectionNumber, masterX, masterY, maxTaskHeight, conf, maxEventCount, maxEventLineLength, maxSectionHeight, true);
    }
    const box = svg.node().getBBox();
    (0, _config389B86FfJs.l).debug("bounds", box);
    if (title) svg.append("text").text(title).attr("x", box.width / 2 - LEFT_MARGIN).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20);
    depthY = hasSections ? maxSectionHeight + maxTaskHeight + 150 : maxTaskHeight + 100;
    const lineWrapper = svg.append("g").attr("class", "lineWrapper");
    lineWrapper.append("line").attr("x1", LEFT_MARGIN).attr("y1", depthY).attr("x2", box.width + 3 * LEFT_MARGIN).attr("y2", depthY).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
    (0, _setupGraphViewboxE35E4124Js.s)(void 0, svg, ((_c = conf.timeline) == null ? void 0 : _c.padding) ?? 50, ((_d = conf.timeline) == null ? void 0 : _d.useMaxWidth) ?? false);
};
const drawTasks = function(diagram2, tasks2, sectionColor, masterX, masterY, maxTaskHeight, conf, maxEventCount, maxEventLineLength, maxSectionHeight, isWithoutSections) {
    var _a;
    for (const task of tasks2){
        const taskNode = {
            descr: task.task,
            section: sectionColor,
            number: sectionColor,
            width: 150,
            padding: 20,
            maxHeight: maxTaskHeight
        };
        (0, _config389B86FfJs.l).debug("taskNode", taskNode);
        const taskWrapper = diagram2.append("g").attr("class", "taskWrapper");
        const node = svgDraw.drawNode(taskWrapper, taskNode, sectionColor, conf);
        const taskHeight = node.height;
        (0, _config389B86FfJs.l).debug("taskHeight after draw", taskHeight);
        taskWrapper.attr("transform", `translate(${masterX}, ${masterY})`);
        maxTaskHeight = Math.max(maxTaskHeight, taskHeight);
        if (task.events) {
            const lineWrapper = diagram2.append("g").attr("class", "lineWrapper");
            let lineLength = maxTaskHeight;
            masterY += 100;
            lineLength = lineLength + drawEvents(diagram2, task.events, sectionColor, masterX, masterY, conf);
            masterY -= 100;
            lineWrapper.append("line").attr("x1", masterX + 95).attr("y1", masterY + maxTaskHeight).attr("x2", masterX + 95).attr("y2", masterY + maxTaskHeight + (isWithoutSections ? maxTaskHeight : maxSectionHeight) + maxEventLineLength + 120).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
        }
        masterX = masterX + 200;
        if (isWithoutSections && !((_a = conf.timeline) == null ? void 0 : _a.disableMulticolor)) sectionColor++;
    }
    masterY = masterY - 10;
};
const drawEvents = function(diagram2, events, sectionColor, masterX, masterY, conf) {
    let maxEventHeight = 0;
    const eventBeginY = masterY;
    masterY = masterY + 100;
    for (const event of events){
        const eventNode = {
            descr: event,
            section: sectionColor,
            number: sectionColor,
            width: 150,
            padding: 20,
            maxHeight: 50
        };
        (0, _config389B86FfJs.l).debug("eventNode", eventNode);
        const eventWrapper = diagram2.append("g").attr("class", "eventWrapper");
        const node = svgDraw.drawNode(eventWrapper, eventNode, sectionColor, conf);
        const eventHeight = node.height;
        maxEventHeight = maxEventHeight + eventHeight;
        eventWrapper.attr("transform", `translate(${masterX}, ${masterY})`);
        masterY = masterY + 10 + eventHeight;
    }
    masterY = eventBeginY;
    return maxEventHeight;
};
const renderer = {
    setConf: ()=>{},
    draw
};
const genSections = (options)=>{
    let sections2 = "";
    for(let i = 0; i < options.THEME_COLOR_LIMIT; i++){
        options["lineColor" + i] = options["lineColor" + i] || options["cScaleInv" + i];
        if ((0, _khroma.isDark)(options["lineColor" + i])) options["lineColor" + i] = (0, _khroma.lighten)(options["lineColor" + i], 20);
        else options["lineColor" + i] = (0, _khroma.darken)(options["lineColor" + i], 20);
    }
    for(let i = 0; i < options.THEME_COLOR_LIMIT; i++){
        const sw = "" + (17 - 3 * i);
        sections2 += `
    .section-${i - 1} rect, .section-${i - 1} path, .section-${i - 1} circle, .section-${i - 1} path  {
      fill: ${options["cScale" + i]};
    }
    .section-${i - 1} text {
     fill: ${options["cScaleLabel" + i]};
    }
    .node-icon-${i - 1} {
      font-size: 40px;
      color: ${options["cScaleLabel" + i]};
    }
    .section-edge-${i - 1}{
      stroke: ${options["cScale" + i]};
    }
    .edge-depth-${i - 1}{
      stroke-width: ${sw};
    }
    .section-${i - 1} line {
      stroke: ${options["cScaleInv" + i]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${options["cScaleLabel" + i]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
    }
    return sections2;
};
const getStyles = (options)=>`
  .edge {
    stroke-width: 3;
  }
  ${genSections(options)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${options.git0};
  }
  .section-root text {
    fill: ${options.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`;
const styles = getStyles;
const diagram = {
    db,
    renderer,
    parser: parser$1,
    styles
};

},{"./utils-d5eeff82.js":"2zv2d","./commonDb-2ace122b.js":"kBdnX","d3":"17XFv","./config-389b86ff.js":"hnpRM","./setupGraphViewbox-e35e4124.js":"jv1OR","khroma":"lMw0x","@braintree/sanitize-url":"hrxAd","lodash-es/memoize.js":"5zdei","dompurify":"9Kzno","dayjs":"NJZFB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBdnX":[function(require,module,exports) {
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

},{"./config-389b86ff.js":"hnpRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["82Wzz"], null, "parcelRequire54bf")

//# sourceMappingURL=timeline-definition-24ebf147.4d35feb3.js.map
