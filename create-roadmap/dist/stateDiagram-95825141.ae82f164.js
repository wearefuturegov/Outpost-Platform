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
})({"cXVRh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fb8a85b0ae82f164";
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

},{}],"fNgDf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diagram", ()=>diagram);
var _stylesD6Bd7A5EJs = require("./styles-d6bd7a5e.js");
var _d3 = require("d3");
var _indexJs = require("dagre-d3-es/src/dagre/index.js");
var _indexJs1 = require("dagre-d3-es/src/graphlib/index.js");
var _config389B86FfJs = require("./config-389b86ff.js");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
var _setupGraphViewboxE35E4124Js = require("./setupGraphViewbox-e35e4124.js");
var _mermaidAPI0716C7C2Js = require("./mermaidAPI-0716c7c2.js");
var _stylis = require("stylis");
var _errorRendererD05351B9Js = require("./errorRenderer-d05351b9.js");
var _dompurify = require("dompurify");
var _isEmptyJs = require("lodash-es/isEmpty.js");
var _commonDb2Ace122BJs = require("./commonDb-2ace122b.js");
var _dayjs = require("dayjs");
var _khroma = require("khroma");
var _sanitizeUrl = require("@braintree/sanitize-url");
var _memoizeJs = require("lodash-es/memoize.js");
const idCache = {};
const set = (key, val)=>{
    idCache[key] = val;
};
const get = (k)=>idCache[k];
const keys = ()=>Object.keys(idCache);
const size = ()=>keys().length;
const idCache$1 = {
    get,
    set,
    keys,
    size
};
const drawStartState = (g)=>g.append("circle").attr("class", "start-state").attr("r", (0, _config389B86FfJs.g)().state.sizeUnit).attr("cx", (0, _config389B86FfJs.g)().state.padding + (0, _config389B86FfJs.g)().state.sizeUnit).attr("cy", (0, _config389B86FfJs.g)().state.padding + (0, _config389B86FfJs.g)().state.sizeUnit);
const drawDivider = (g)=>g.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", (0, _config389B86FfJs.g)().state.textHeight).attr("class", "divider").attr("x2", (0, _config389B86FfJs.g)().state.textHeight * 2).attr("y1", 0).attr("y2", 0);
const drawSimpleState = (g, stateDef)=>{
    const state = g.append("text").attr("x", 2 * (0, _config389B86FfJs.g)().state.padding).attr("y", (0, _config389B86FfJs.g)().state.textHeight + 2 * (0, _config389B86FfJs.g)().state.padding).attr("font-size", (0, _config389B86FfJs.g)().state.fontSize).attr("class", "state-title").text(stateDef.id);
    const classBox = state.node().getBBox();
    g.insert("rect", ":first-child").attr("x", (0, _config389B86FfJs.g)().state.padding).attr("y", (0, _config389B86FfJs.g)().state.padding).attr("width", classBox.width + 2 * (0, _config389B86FfJs.g)().state.padding).attr("height", classBox.height + 2 * (0, _config389B86FfJs.g)().state.padding).attr("rx", (0, _config389B86FfJs.g)().state.radius);
    return state;
};
const drawDescrState = (g, stateDef)=>{
    const addTspan = function(textEl, txt, isFirst2) {
        const tSpan = textEl.append("tspan").attr("x", 2 * (0, _config389B86FfJs.g)().state.padding).text(txt);
        if (!isFirst2) tSpan.attr("dy", (0, _config389B86FfJs.g)().state.textHeight);
    };
    const title = g.append("text").attr("x", 2 * (0, _config389B86FfJs.g)().state.padding).attr("y", (0, _config389B86FfJs.g)().state.textHeight + 1.3 * (0, _config389B86FfJs.g)().state.padding).attr("font-size", (0, _config389B86FfJs.g)().state.fontSize).attr("class", "state-title").text(stateDef.descriptions[0]);
    const titleBox = title.node().getBBox();
    const titleHeight = titleBox.height;
    const description = g.append("text").attr("x", (0, _config389B86FfJs.g)().state.padding).attr("y", titleHeight + (0, _config389B86FfJs.g)().state.padding * 0.4 + (0, _config389B86FfJs.g)().state.dividerMargin + (0, _config389B86FfJs.g)().state.textHeight).attr("class", "state-description");
    let isFirst = true;
    let isSecond = true;
    stateDef.descriptions.forEach(function(descr) {
        if (!isFirst) {
            addTspan(description, descr, isSecond);
            isSecond = false;
        }
        isFirst = false;
    });
    const descrLine = g.append("line").attr("x1", (0, _config389B86FfJs.g)().state.padding).attr("y1", (0, _config389B86FfJs.g)().state.padding + titleHeight + (0, _config389B86FfJs.g)().state.dividerMargin / 2).attr("y2", (0, _config389B86FfJs.g)().state.padding + titleHeight + (0, _config389B86FfJs.g)().state.dividerMargin / 2).attr("class", "descr-divider");
    const descrBox = description.node().getBBox();
    const width = Math.max(descrBox.width, titleBox.width);
    descrLine.attr("x2", width + 3 * (0, _config389B86FfJs.g)().state.padding);
    g.insert("rect", ":first-child").attr("x", (0, _config389B86FfJs.g)().state.padding).attr("y", (0, _config389B86FfJs.g)().state.padding).attr("width", width + 2 * (0, _config389B86FfJs.g)().state.padding).attr("height", descrBox.height + titleHeight + 2 * (0, _config389B86FfJs.g)().state.padding).attr("rx", (0, _config389B86FfJs.g)().state.radius);
    return g;
};
const addTitleAndBox = (g, stateDef, altBkg)=>{
    const pad = (0, _config389B86FfJs.g)().state.padding;
    const dblPad = 2 * (0, _config389B86FfJs.g)().state.padding;
    const orgBox = g.node().getBBox();
    const orgWidth = orgBox.width;
    const orgX = orgBox.x;
    const title = g.append("text").attr("x", 0).attr("y", (0, _config389B86FfJs.g)().state.titleShift).attr("font-size", (0, _config389B86FfJs.g)().state.fontSize).attr("class", "state-title").text(stateDef.id);
    const titleBox = title.node().getBBox();
    const titleWidth = titleBox.width + dblPad;
    let width = Math.max(titleWidth, orgWidth);
    if (width === orgWidth) width = width + dblPad;
    let startX;
    const graphBox = g.node().getBBox();
    stateDef.doc;
    startX = orgX - pad;
    if (titleWidth > orgWidth) startX = (orgWidth - width) / 2 + pad;
    if (Math.abs(orgX - graphBox.x) < pad && titleWidth > orgWidth) startX = orgX - (titleWidth - orgWidth) / 2;
    const lineY = 1 - (0, _config389B86FfJs.g)().state.textHeight;
    g.insert("rect", ":first-child").attr("x", startX).attr("y", lineY).attr("class", altBkg ? "alt-composit" : "composit").attr("width", width).attr("height", graphBox.height + (0, _config389B86FfJs.g)().state.textHeight + (0, _config389B86FfJs.g)().state.titleShift + 1).attr("rx", "0");
    title.attr("x", startX + pad);
    if (titleWidth <= orgWidth) title.attr("x", orgX + (width - dblPad) / 2 - titleWidth / 2 + pad);
    g.insert("rect", ":first-child").attr("x", startX).attr("y", (0, _config389B86FfJs.g)().state.titleShift - (0, _config389B86FfJs.g)().state.textHeight - (0, _config389B86FfJs.g)().state.padding).attr("width", width).attr("height", (0, _config389B86FfJs.g)().state.textHeight * 3).attr("rx", (0, _config389B86FfJs.g)().state.radius);
    g.insert("rect", ":first-child").attr("x", startX).attr("y", (0, _config389B86FfJs.g)().state.titleShift - (0, _config389B86FfJs.g)().state.textHeight - (0, _config389B86FfJs.g)().state.padding).attr("width", width).attr("height", graphBox.height + 3 + 2 * (0, _config389B86FfJs.g)().state.textHeight).attr("rx", (0, _config389B86FfJs.g)().state.radius);
    return g;
};
const drawEndState = (g)=>{
    g.append("circle").attr("class", "end-state-outer").attr("r", (0, _config389B86FfJs.g)().state.sizeUnit + (0, _config389B86FfJs.g)().state.miniPadding).attr("cx", (0, _config389B86FfJs.g)().state.padding + (0, _config389B86FfJs.g)().state.sizeUnit + (0, _config389B86FfJs.g)().state.miniPadding).attr("cy", (0, _config389B86FfJs.g)().state.padding + (0, _config389B86FfJs.g)().state.sizeUnit + (0, _config389B86FfJs.g)().state.miniPadding);
    return g.append("circle").attr("class", "end-state-inner").attr("r", (0, _config389B86FfJs.g)().state.sizeUnit).attr("cx", (0, _config389B86FfJs.g)().state.padding + (0, _config389B86FfJs.g)().state.sizeUnit + 2).attr("cy", (0, _config389B86FfJs.g)().state.padding + (0, _config389B86FfJs.g)().state.sizeUnit + 2);
};
const drawForkJoinState = (g, stateDef)=>{
    let width = (0, _config389B86FfJs.g)().state.forkWidth;
    let height = (0, _config389B86FfJs.g)().state.forkHeight;
    if (stateDef.parentId) {
        let tmp = width;
        width = height;
        height = tmp;
    }
    return g.append("rect").style("stroke", "black").style("fill", "black").attr("width", width).attr("height", height).attr("x", (0, _config389B86FfJs.g)().state.padding).attr("y", (0, _config389B86FfJs.g)().state.padding);
};
const _drawLongText = (_text, x, y, g)=>{
    let textHeight = 0;
    const textElem = g.append("text");
    textElem.style("text-anchor", "start");
    textElem.attr("class", "noteText");
    let text = _text.replace(/\r\n/g, "<br/>");
    text = text.replace(/\n/g, "<br/>");
    const lines = text.split((0, _config389B86FfJs.d).lineBreakRegex);
    let tHeight = 1.25 * (0, _config389B86FfJs.g)().state.noteMargin;
    for (const line2 of lines){
        const txt = line2.trim();
        if (txt.length > 0) {
            const span = textElem.append("tspan");
            span.text(txt);
            if (tHeight === 0) {
                const textBounds = span.node().getBBox();
                tHeight += textBounds.height;
            }
            textHeight += tHeight;
            span.attr("x", x + (0, _config389B86FfJs.g)().state.noteMargin);
            span.attr("y", y + textHeight + 1.25 * (0, _config389B86FfJs.g)().state.noteMargin);
        }
    }
    return {
        textWidth: textElem.node().getBBox().width,
        textHeight
    };
};
const drawNote = (text, g)=>{
    g.attr("class", "state-note");
    const note = g.append("rect").attr("x", 0).attr("y", (0, _config389B86FfJs.g)().state.padding);
    const rectElem = g.append("g");
    const { textWidth , textHeight  } = _drawLongText(text, 0, 0, rectElem);
    note.attr("height", textHeight + 2 * (0, _config389B86FfJs.g)().state.noteMargin);
    note.attr("width", textWidth + (0, _config389B86FfJs.g)().state.noteMargin * 2);
    return note;
};
const drawState = function(elem, stateDef) {
    const id = stateDef.id;
    const stateInfo = {
        id,
        label: stateDef.id,
        width: 0,
        height: 0
    };
    const g = elem.append("g").attr("id", id).attr("class", "stateGroup");
    if (stateDef.type === "start") drawStartState(g);
    if (stateDef.type === "end") drawEndState(g);
    if (stateDef.type === "fork" || stateDef.type === "join") drawForkJoinState(g, stateDef);
    if (stateDef.type === "note") drawNote(stateDef.note.text, g);
    if (stateDef.type === "divider") drawDivider(g);
    if (stateDef.type === "default" && stateDef.descriptions.length === 0) drawSimpleState(g, stateDef);
    if (stateDef.type === "default" && stateDef.descriptions.length > 0) drawDescrState(g, stateDef);
    const stateBox = g.node().getBBox();
    stateInfo.width = stateBox.width + 2 * (0, _config389B86FfJs.g)().state.padding;
    stateInfo.height = stateBox.height + 2 * (0, _config389B86FfJs.g)().state.padding;
    idCache$1.set(id, stateInfo);
    return stateInfo;
};
let edgeCount = 0;
const drawEdge = function(elem, path, relation) {
    const getRelationType = function(type) {
        switch(type){
            case (0, _stylesD6Bd7A5EJs.d).relationType.AGGREGATION:
                return "aggregation";
            case (0, _stylesD6Bd7A5EJs.d).relationType.EXTENSION:
                return "extension";
            case (0, _stylesD6Bd7A5EJs.d).relationType.COMPOSITION:
                return "composition";
            case (0, _stylesD6Bd7A5EJs.d).relationType.DEPENDENCY:
                return "dependency";
        }
    };
    path.points = path.points.filter((p)=>!Number.isNaN(p.y));
    const lineData = path.points;
    const lineFunction = (0, _d3.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    }).curve((0, _d3.curveBasis));
    const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", "edge" + edgeCount).attr("class", "transition");
    let url = "";
    if ((0, _config389B86FfJs.g)().state.arrowMarkerAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replace(/\(/g, "\\(");
        url = url.replace(/\)/g, "\\)");
    }
    svgPath.attr("marker-end", "url(" + url + "#" + getRelationType((0, _stylesD6Bd7A5EJs.d).relationType.DEPENDENCY) + "End)");
    if (relation.title !== void 0) {
        const label = elem.append("g").attr("class", "stateLabel");
        const { x , y  } = (0, _utilsD5Eeff82Js.u).calcLabelPosition(path.points);
        const rows = (0, _config389B86FfJs.d).getRows(relation.title);
        let titleHeight = 0;
        const titleRows = [];
        let maxWidth = 0;
        let minX = 0;
        for(let i = 0; i <= rows.length; i++){
            const title = label.append("text").attr("text-anchor", "middle").text(rows[i]).attr("x", x).attr("y", y + titleHeight);
            const boundstmp = title.node().getBBox();
            maxWidth = Math.max(maxWidth, boundstmp.width);
            minX = Math.min(minX, boundstmp.x);
            (0, _config389B86FfJs.l).info(boundstmp.x, x, y + titleHeight);
            if (titleHeight === 0) {
                const titleBox = title.node().getBBox();
                titleHeight = titleBox.height;
                (0, _config389B86FfJs.l).info("Title height", titleHeight, y);
            }
            titleRows.push(title);
        }
        let boxHeight = titleHeight * rows.length;
        if (rows.length > 1) {
            const heightAdj = (rows.length - 1) * titleHeight * 0.5;
            titleRows.forEach((title, i)=>title.attr("y", y + i * titleHeight - heightAdj));
            boxHeight = titleHeight * rows.length;
        }
        const bounds = label.node().getBBox();
        label.insert("rect", ":first-child").attr("class", "box").attr("x", x - maxWidth / 2 - (0, _config389B86FfJs.g)().state.padding / 2).attr("y", y - boxHeight / 2 - (0, _config389B86FfJs.g)().state.padding / 2 - 3.5).attr("width", maxWidth + (0, _config389B86FfJs.g)().state.padding).attr("height", boxHeight + (0, _config389B86FfJs.g)().state.padding);
        (0, _config389B86FfJs.l).info(bounds);
    }
    edgeCount++;
};
let conf;
const transformationLog = {};
const setConf = function() {};
const insertMarkers = function(elem) {
    elem.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
const draw = function(text, id, _version, diagObj) {
    conf = (0, _config389B86FfJs.g)().state;
    const securityLevel = (0, _config389B86FfJs.g)().securityLevel;
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, _d3.select)("#i" + id);
    const root = securityLevel === "sandbox" ? (0, _d3.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, _d3.select)("body");
    const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
    (0, _config389B86FfJs.l).debug("Rendering diagram " + text);
    const diagram2 = root.select(`[id='${id}']`);
    insertMarkers(diagram2);
    const graph = new _indexJs1.Graph({
        multigraph: true,
        compound: true,
        // acyclicer: 'greedy',
        rankdir: "RL"
    });
    graph.setDefaultEdgeLabel(function() {
        return {};
    });
    const rootDoc = diagObj.db.getRootDoc();
    renderDoc(rootDoc, diagram2, void 0, false, root, doc, diagObj);
    const padding = conf.padding;
    const bounds = diagram2.node().getBBox();
    const width = bounds.width + padding * 2;
    const height = bounds.height + padding * 2;
    const svgWidth = width * 1.75;
    (0, _setupGraphViewboxE35E4124Js.c)(diagram2, height, svgWidth, conf.useMaxWidth);
    diagram2.attr("viewBox", `${bounds.x - conf.padding}  ${bounds.y - conf.padding} ` + width + " " + height);
};
const getLabelWidth = (text)=>{
    return text ? text.length * conf.fontSizeFactor : 1;
};
const renderDoc = (doc, diagram2, parentId, altBkg, root, domDocument, diagObj)=>{
    const graph = new _indexJs1.Graph({
        compound: true,
        multigraph: true
    });
    let i;
    let edgeFreeDoc = true;
    for(i = 0; i < doc.length; i++)if (doc[i].stmt === "relation") {
        edgeFreeDoc = false;
        break;
    }
    if (parentId) graph.setGraph({
        rankdir: "LR",
        multigraph: true,
        compound: true,
        // acyclicer: 'greedy',
        ranker: "tight-tree",
        ranksep: edgeFreeDoc ? 1 : conf.edgeLengthFactor,
        nodeSep: edgeFreeDoc ? 1 : 50,
        isMultiGraph: true
    });
    else graph.setGraph({
        rankdir: "TB",
        multigraph: true,
        compound: true,
        // isCompound: true,
        // acyclicer: 'greedy',
        // ranker: 'longest-path'
        ranksep: edgeFreeDoc ? 1 : conf.edgeLengthFactor,
        nodeSep: edgeFreeDoc ? 1 : 50,
        ranker: "tight-tree",
        // ranker: 'network-simplex'
        isMultiGraph: true
    });
    graph.setDefaultEdgeLabel(function() {
        return {};
    });
    diagObj.db.extract(doc);
    const states = diagObj.db.getStates();
    const relations = diagObj.db.getRelations();
    const keys2 = Object.keys(states);
    for (const key of keys2){
        const stateDef = states[key];
        if (parentId) stateDef.parentId = parentId;
        let node;
        if (stateDef.doc) {
            let sub = diagram2.append("g").attr("id", stateDef.id).attr("class", "stateGroup");
            node = renderDoc(stateDef.doc, sub, stateDef.id, !altBkg, root, domDocument, diagObj);
            {
                sub = addTitleAndBox(sub, stateDef, altBkg);
                let boxBounds = sub.node().getBBox();
                node.width = boxBounds.width;
                node.height = boxBounds.height + conf.padding / 2;
                transformationLog[stateDef.id] = {
                    y: conf.compositTitleSize
                };
            }
        } else node = drawState(diagram2, stateDef);
        if (stateDef.note) {
            const noteDef = {
                descriptions: [],
                id: stateDef.id + "-note",
                note: stateDef.note,
                type: "note"
            };
            const note = drawState(diagram2, noteDef);
            if (stateDef.note.position === "left of") {
                graph.setNode(node.id + "-note", note);
                graph.setNode(node.id, node);
            } else {
                graph.setNode(node.id, node);
                graph.setNode(node.id + "-note", note);
            }
            graph.setParent(node.id, node.id + "-group");
            graph.setParent(node.id + "-note", node.id + "-group");
        } else graph.setNode(node.id, node);
    }
    (0, _config389B86FfJs.l).debug("Count=", graph.nodeCount(), graph);
    let cnt = 0;
    relations.forEach(function(relation) {
        cnt++;
        (0, _config389B86FfJs.l).debug("Setting edge", relation);
        graph.setEdge(relation.id1, relation.id2, {
            relation,
            width: getLabelWidth(relation.title),
            height: conf.labelHeight * (0, _config389B86FfJs.d).getRows(relation.title).length,
            labelpos: "c"
        }, "id" + cnt);
    });
    (0, _indexJs.layout)(graph);
    (0, _config389B86FfJs.l).debug("Graph after layout", graph.nodes());
    const svgElem = diagram2.node();
    graph.nodes().forEach(function(v) {
        if (v !== void 0 && graph.node(v) !== void 0) {
            (0, _config389B86FfJs.l).warn("Node " + v + ": " + JSON.stringify(graph.node(v)));
            root.select("#" + svgElem.id + " #" + v).attr("transform", "translate(" + (graph.node(v).x - graph.node(v).width / 2) + "," + (graph.node(v).y + (transformationLog[v] ? transformationLog[v].y : 0) - graph.node(v).height / 2) + " )");
            root.select("#" + svgElem.id + " #" + v).attr("data-x-shift", graph.node(v).x - graph.node(v).width / 2);
            const dividers = domDocument.querySelectorAll("#" + svgElem.id + " #" + v + " .divider");
            dividers.forEach((divider)=>{
                const parent = divider.parentElement;
                let pWidth = 0;
                let pShift = 0;
                if (parent) {
                    if (parent.parentElement) pWidth = parent.parentElement.getBBox().width;
                    pShift = parseInt(parent.getAttribute("data-x-shift"), 10);
                    if (Number.isNaN(pShift)) pShift = 0;
                }
                divider.setAttribute("x1", 0 - pShift + 8);
                divider.setAttribute("x2", pWidth - pShift - 8);
            });
        } else (0, _config389B86FfJs.l).debug("No Node " + v + ": " + JSON.stringify(graph.node(v)));
    });
    let stateBox = svgElem.getBBox();
    graph.edges().forEach(function(e) {
        if (e !== void 0 && graph.edge(e) !== void 0) {
            (0, _config389B86FfJs.l).debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
            drawEdge(diagram2, graph.edge(e), graph.edge(e).relation);
        }
    });
    stateBox = svgElem.getBBox();
    const stateInfo = {
        id: parentId ? parentId : "root",
        label: parentId ? parentId : "root",
        width: 0,
        height: 0
    };
    stateInfo.width = stateBox.width + 2 * conf.padding;
    stateInfo.height = stateBox.height + 2 * conf.padding;
    (0, _config389B86FfJs.l).debug("Doc rendered", stateInfo, graph);
    return stateInfo;
};
const renderer = {
    setConf,
    draw
};
const diagram = {
    parser: (0, _stylesD6Bd7A5EJs.p),
    db: (0, _stylesD6Bd7A5EJs.d),
    renderer,
    styles: (0, _stylesD6Bd7A5EJs.s),
    init: (cnf)=>{
        if (!cnf.state) cnf.state = {};
        cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
        (0, _stylesD6Bd7A5EJs.d).clear();
    }
};

},{"./styles-d6bd7a5e.js":"1JAnq","d3":"17XFv","dagre-d3-es/src/dagre/index.js":"g6zYa","dagre-d3-es/src/graphlib/index.js":"2nAwO","./config-389b86ff.js":"hnpRM","./utils-d5eeff82.js":"2zv2d","./setupGraphViewbox-e35e4124.js":"jv1OR","./mermaidAPI-0716c7c2.js":"bdkW7","stylis":"bMCXt","./errorRenderer-d05351b9.js":"d3Vzc","dompurify":"9Kzno","lodash-es/isEmpty.js":"e1Kmi","./commonDb-2ace122b.js":"kBdnX","dayjs":"NJZFB","khroma":"lMw0x","@braintree/sanitize-url":"hrxAd","lodash-es/memoize.js":"5zdei","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv1OR":[function(require,module,exports) {
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

},{"d3":"17XFv","./config-389b86ff.js":"hnpRM","./utils-d5eeff82.js":"2zv2d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kBdnX":[function(require,module,exports) {
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

},{"./config-389b86ff.js":"hnpRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cXVRh"], null, "parcelRequire54bf")

//# sourceMappingURL=stateDiagram-95825141.ae82f164.js.map
