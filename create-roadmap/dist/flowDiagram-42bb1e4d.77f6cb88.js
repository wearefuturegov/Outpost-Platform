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
})({"7TDvp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d0b0546077f6cb88";
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

},{}],"i9uQ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>insertMarkers$1);
parcelHelpers.export(exports, "b", ()=>clear$1);
parcelHelpers.export(exports, "c", ()=>createLabel$1);
parcelHelpers.export(exports, "d", ()=>clear);
parcelHelpers.export(exports, "e", ()=>insertNode);
parcelHelpers.export(exports, "f", ()=>insertEdgeLabel);
parcelHelpers.export(exports, "g", ()=>insertEdge);
parcelHelpers.export(exports, "h", ()=>positionEdgeLabel);
parcelHelpers.export(exports, "i", ()=>intersectRect$1);
parcelHelpers.export(exports, "p", ()=>positionNode);
parcelHelpers.export(exports, "s", ()=>setNodeElem);
parcelHelpers.export(exports, "u", ()=>updateNodeBounds);
var _config389B86FfJs = require("./config-389b86ff.js");
var _d3 = require("d3");
var _mermaidAPI0716C7C2Js = require("./mermaidAPI-0716c7c2.js");
var _svgDraw6A237A99Js = require("./svgDraw-6a237a99.js");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
const insertMarkers = (elem, markerArray, type, id)=>{
    markerArray.forEach((markerName)=>{
        markers[markerName](elem, type, id);
    });
};
const extension = (elem, type, id)=>{
    (0, _config389B86FfJs.l).trace("Making markers for ", id);
    elem.append("defs").append("marker").attr("id", type + "-extensionStart").attr("class", "marker extension " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z");
    elem.append("defs").append("marker").attr("id", type + "-extensionEnd").attr("class", "marker extension " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
};
const composition = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-compositionStart").attr("class", "marker composition " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", type + "-compositionEnd").attr("class", "marker composition " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
const aggregation = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-aggregationStart").attr("class", "marker aggregation " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", type + "-aggregationEnd").attr("class", "marker aggregation " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
};
const dependency = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-dependencyStart").attr("class", "marker dependency " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z");
    elem.append("defs").append("marker").attr("id", type + "-dependencyEnd").attr("class", "marker dependency " + type).attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
};
const lollipop = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-lollipopStart").attr("class", "marker lollipop " + type).attr("refX", 0).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "white").attr("cx", 6).attr("cy", 7).attr("r", 6);
};
const point = (elem, type)=>{
    elem.append("marker").attr("id", type + "-pointEnd").attr("class", "marker " + type).attr("viewBox", "0 0 12 20").attr("refX", 10).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", type + "-pointStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 0).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
const circle$1 = (elem, type)=>{
    elem.append("marker").attr("id", type + "-circleEnd").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", type + "-circleStart").attr("class", "marker " + type).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
};
const cross = (elem, type)=>{
    elem.append("marker").attr("id", type + "-crossEnd").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
    elem.append("marker").attr("id", type + "-crossStart").attr("class", "marker cross " + type).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
};
const barb = (elem, type)=>{
    elem.append("defs").append("marker").attr("id", type + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
const markers = {
    extension,
    composition,
    aggregation,
    dependency,
    lollipop,
    point,
    circle: circle$1,
    cross,
    barb
};
const insertMarkers$1 = insertMarkers;
function applyStyle(dom, styleFn) {
    if (styleFn) dom.attr("style", styleFn);
}
function addHtmlLabel(node) {
    const fo = (0, _d3.select)(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
    const div = fo.append("xhtml:div");
    const label = node.label;
    const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
    div.html('<span class="' + labelClass + '" ' + (node.labelStyle ? 'style="' + node.labelStyle + '"' : "") + ">" + label + "</span>");
    applyStyle(div, node.labelStyle);
    div.style("display", "inline-block");
    div.style("white-space", "nowrap");
    div.attr("xmlns", "http://www.w3.org/1999/xhtml");
    return fo.node();
}
const createLabel = (_vertexText, style, isTitle, isNode)=>{
    let vertexText = _vertexText || "";
    if (typeof vertexText === "object") vertexText = vertexText[0];
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        vertexText = vertexText.replace(/\\n|\n/g, "<br />");
        (0, _config389B86FfJs.l).info("vertexText" + vertexText);
        const node = {
            isNode,
            label: (0, _mermaidAPI0716C7C2Js.d)(vertexText).replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`),
            labelStyle: style.replace("fill:", "color:")
        };
        let vertexNode = addHtmlLabel(node);
        return vertexNode;
    } else {
        const svgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        svgLabel.setAttribute("style", style.replace("color:", "fill:"));
        let rows = [];
        if (typeof vertexText === "string") rows = vertexText.split(/\\n|\n|<br\s*\/?>/gi);
        else if (Array.isArray(vertexText)) rows = vertexText;
        else rows = [];
        for (const row of rows){
            const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            tspan.setAttribute("dy", "1em");
            tspan.setAttribute("x", "0");
            if (isTitle) tspan.setAttribute("class", "title-row");
            else tspan.setAttribute("class", "row");
            tspan.textContent = row.trim();
            svgLabel.appendChild(tspan);
        }
        return svgLabel;
    }
};
const createLabel$1 = createLabel;
const labelHelper = (parent, node, _classes, isNode)=>{
    let classes;
    if (!_classes) classes = "node default";
    else classes = _classes;
    const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
    const label = shapeSvg.insert("g").attr("class", "label").attr("style", node.labelStyle);
    let labelText;
    if (node.labelText === void 0) labelText = "";
    else labelText = typeof node.labelText === "string" ? node.labelText : node.labelText[0];
    const text = label.node().appendChild(createLabel$1((0, _config389B86FfJs.b)((0, _mermaidAPI0716C7C2Js.d)(labelText), (0, _config389B86FfJs.g)()), node.labelStyle, false, isNode));
    let bbox = text.getBBox();
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        const div = text.children[0];
        const dv = (0, _d3.select)(text);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    const halfPadding = node.padding / 2;
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    return {
        shapeSvg,
        bbox,
        halfPadding,
        label
    };
};
const updateNodeBounds = (node, element)=>{
    const bbox = element.node().getBBox();
    node.width = bbox.width;
    node.height = bbox.height;
};
function insertPolygonShape(parent, w, h, points) {
    return parent.insert("polygon", ":first-child").attr("points", points.map(function(d) {
        return d.x + "," + d.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
function intersectNode(node, point2) {
    return node.intersect(point2);
}
function intersectEllipse(node, rx, ry, point2) {
    var cx = node.x;
    var cy = node.y;
    var px = cx - point2.x;
    var py = cy - point2.y;
    var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
    var dx = Math.abs(rx * ry * px / det);
    if (point2.x < cx) dx = -dx;
    var dy = Math.abs(rx * ry * py / det);
    if (point2.y < cy) dy = -dy;
    return {
        x: cx + dx,
        y: cy + dy
    };
}
function intersectCircle(node, rx, point2) {
    return intersectEllipse(node, rx, rx, point2);
}
function intersectLine(p1, p2, q1, q2) {
    var a1, a2, b1, b2, c1, c2;
    var r1, r2, r3, r4;
    var denom, offset, num;
    var x, y;
    a1 = p2.y - p1.y;
    b1 = p1.x - p2.x;
    c1 = p2.x * p1.y - p1.x * p2.y;
    r3 = a1 * q1.x + b1 * q1.y + c1;
    r4 = a1 * q2.x + b1 * q2.y + c1;
    if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) return;
    a2 = q2.y - q1.y;
    b2 = q1.x - q2.x;
    c2 = q2.x * q1.y - q1.x * q2.y;
    r1 = a2 * p1.x + b2 * p1.y + c2;
    r2 = a2 * p2.x + b2 * p2.y + c2;
    if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) return;
    denom = a1 * b2 - a2 * b1;
    if (denom === 0) return;
    offset = Math.abs(denom / 2);
    num = b1 * c2 - b2 * c1;
    x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    num = a2 * c1 - a1 * c2;
    y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    return {
        x,
        y
    };
}
function sameSign(r1, r2) {
    return r1 * r2 > 0;
}
function intersectPolygon(node, polyPoints, point2) {
    var x1 = node.x;
    var y1 = node.y;
    var intersections = [];
    var minX = Number.POSITIVE_INFINITY;
    var minY = Number.POSITIVE_INFINITY;
    if (typeof polyPoints.forEach === "function") polyPoints.forEach(function(entry) {
        minX = Math.min(minX, entry.x);
        minY = Math.min(minY, entry.y);
    });
    else {
        minX = Math.min(minX, polyPoints.x);
        minY = Math.min(minY, polyPoints.y);
    }
    var left = x1 - node.width / 2 - minX;
    var top = y1 - node.height / 2 - minY;
    for(var i = 0; i < polyPoints.length; i++){
        var p1 = polyPoints[i];
        var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
        var intersect2 = intersectLine(node, point2, {
            x: left + p1.x,
            y: top + p1.y
        }, {
            x: left + p2.x,
            y: top + p2.y
        });
        if (intersect2) intersections.push(intersect2);
    }
    if (!intersections.length) return node;
    if (intersections.length > 1) intersections.sort(function(p, q) {
        var pdx = p.x - point2.x;
        var pdy = p.y - point2.y;
        var distp = Math.sqrt(pdx * pdx + pdy * pdy);
        var qdx = q.x - point2.x;
        var qdy = q.y - point2.y;
        var distq = Math.sqrt(qdx * qdx + qdy * qdy);
        return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
    return intersections[0];
}
const intersectRect = (node, point2)=>{
    var x = node.x;
    var y = node.y;
    var dx = point2.x - x;
    var dy = point2.y - y;
    var w = node.width / 2;
    var h = node.height / 2;
    var sx, sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        if (dy < 0) h = -h;
        sx = dy === 0 ? 0 : h * dx / dy;
        sy = h;
    } else {
        if (dx < 0) w = -w;
        sx = w;
        sy = dx === 0 ? 0 : w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
};
const intersectRect$1 = intersectRect;
const intersect = {
    node: intersectNode,
    circle: intersectCircle,
    ellipse: intersectEllipse,
    polygon: intersectPolygon,
    rect: intersectRect$1
};
const note = (parent, node)=>{
    const { shapeSvg , bbox , halfPadding  } = labelHelper(parent, node, "node " + node.classes, true);
    (0, _config389B86FfJs.l).info("Classes = ", node.classes);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    updateNodeBounds(node, rect2);
    node.intersect = function(point2) {
        return intersect.rect(node, point2);
    };
    return shapeSvg;
};
const note$1 = note;
const question = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const s = w + h;
    const points = [
        {
            x: s / 2,
            y: 0
        },
        {
            x: s,
            y: -s / 2
        },
        {
            x: s / 2,
            y: -s
        },
        {
            x: 0,
            y: -s / 2
        }
    ];
    (0, _config389B86FfJs.l).info("Question main (Circle)");
    const questionElem = insertPolygonShape(shapeSvg, s, s, points);
    questionElem.attr("style", node.style);
    updateNodeBounds(node, questionElem);
    node.intersect = function(point2) {
        (0, _config389B86FfJs.l).warn("Intersect called");
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const choice = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    const s = 28;
    const points = [
        {
            x: 0,
            y: s / 2
        },
        {
            x: s / 2,
            y: 0
        },
        {
            x: 0,
            y: -s / 2
        },
        {
            x: -s / 2,
            y: 0
        }
    ];
    const choice2 = shapeSvg.insert("polygon", ":first-child").attr("points", points.map(function(d) {
        return d.x + "," + d.y;
    }).join(" "));
    choice2.attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
    node.width = 28;
    node.height = 28;
    node.intersect = function(point2) {
        return intersect.circle(node, 14, point2);
    };
    return shapeSvg;
};
const hexagon = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const f = 4;
    const h = bbox.height + node.padding;
    const m = h / f;
    const w = bbox.width + 2 * m + node.padding;
    const points = [
        {
            x: m,
            y: 0
        },
        {
            x: w - m,
            y: 0
        },
        {
            x: w,
            y: -h / 2
        },
        {
            x: w - m,
            y: -h
        },
        {
            x: m,
            y: -h
        },
        {
            x: 0,
            y: -h / 2
        }
    ];
    const hex = insertPolygonShape(shapeSvg, w, h, points);
    hex.attr("style", node.style);
    updateNodeBounds(node, hex);
    node.intersect = function(point2) {
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const rect_left_inv_arrow = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: -h / 2,
            y: 0
        },
        {
            x: w,
            y: 0
        },
        {
            x: w,
            y: -h
        },
        {
            x: -h / 2,
            y: -h
        },
        {
            x: 0,
            y: -h / 2
        }
    ];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    node.width = w + h;
    node.height = h;
    node.intersect = function(point2) {
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const lean_right = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: -2 * h / 6,
            y: 0
        },
        {
            x: w - h / 6,
            y: 0
        },
        {
            x: w + 2 * h / 6,
            y: -h
        },
        {
            x: h / 6,
            y: -h
        }
    ];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function(point2) {
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const lean_left = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: 2 * h / 6,
            y: 0
        },
        {
            x: w + h / 6,
            y: 0
        },
        {
            x: w - 2 * h / 6,
            y: -h
        },
        {
            x: -h / 6,
            y: -h
        }
    ];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function(point2) {
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const trapezoid = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: -2 * h / 6,
            y: 0
        },
        {
            x: w + 2 * h / 6,
            y: 0
        },
        {
            x: w - h / 6,
            y: -h
        },
        {
            x: h / 6,
            y: -h
        }
    ];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function(point2) {
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const inv_trapezoid = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: h / 6,
            y: 0
        },
        {
            x: w - h / 6,
            y: 0
        },
        {
            x: w + 2 * h / 6,
            y: -h
        },
        {
            x: -2 * h / 6,
            y: -h
        }
    ];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function(point2) {
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const rect_right_inv_arrow = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: w + h / 2,
            y: 0
        },
        {
            x: w,
            y: -h / 2
        },
        {
            x: w + h / 2,
            y: -h
        },
        {
            x: 0,
            y: -h
        }
    ];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function(point2) {
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const cylinder = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const rx = w / 2;
    const ry = rx / (2.5 + w / 50);
    const h = bbox.height + ry + node.padding;
    const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
    const el = shapeSvg.attr("label-offset-y", ry).insert("path", ":first-child").attr("style", node.style).attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
    updateNodeBounds(node, el);
    node.intersect = function(point2) {
        const pos = intersect.rect(node, point2);
        const x = pos.x - node.x;
        if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
            let y = ry * ry * (1 - x * x / (rx * rx));
            if (y != 0) y = Math.sqrt(y);
            y = ry - y;
            if (point2.y - node.y > 0) y = -y;
            pos.y += y;
        }
        return pos;
    };
    return shapeSvg;
};
const rect = (parent, node)=>{
    const { shapeSvg , bbox , halfPadding  } = labelHelper(parent, node, "node " + node.classes, true);
    (0, _config389B86FfJs.l).trace("Classes = ", node.classes);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const totalWidth = bbox.width + node.padding;
    const totalHeight = bbox.height + node.padding;
    rect2.attr("class", "basic label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", totalWidth).attr("height", totalHeight);
    if (node.props) {
        const propKeys = new Set(Object.keys(node.props));
        if (node.props.borders) {
            applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
            propKeys.delete("borders");
        }
        propKeys.forEach((propKey)=>{
            (0, _config389B86FfJs.l).warn(`Unknown node property ${propKey}`);
        });
    }
    updateNodeBounds(node, rect2);
    node.intersect = function(point2) {
        return intersect.rect(node, point2);
    };
    return shapeSvg;
};
const labelRect = (parent, node)=>{
    const { shapeSvg  } = labelHelper(parent, node, "label", true);
    (0, _config389B86FfJs.l).trace("Classes = ", node.classes);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const totalWidth = 0;
    const totalHeight = 0;
    rect2.attr("width", totalWidth).attr("height", totalHeight);
    shapeSvg.attr("class", "label edgeLabel");
    if (node.props) {
        const propKeys = new Set(Object.keys(node.props));
        if (node.props.borders) {
            applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
            propKeys.delete("borders");
        }
        propKeys.forEach((propKey)=>{
            (0, _config389B86FfJs.l).warn(`Unknown node property ${propKey}`);
        });
    }
    updateNodeBounds(node, rect2);
    node.intersect = function(point2) {
        return intersect.rect(node, point2);
    };
    return shapeSvg;
};
function applyNodePropertyBorders(rect2, borders, totalWidth, totalHeight) {
    const strokeDashArray = [];
    const addBorder = (length)=>{
        strokeDashArray.push(length, 0);
    };
    const skipBorder = (length)=>{
        strokeDashArray.push(0, length);
    };
    if (borders.includes("t")) {
        (0, _config389B86FfJs.l).debug("add top border");
        addBorder(totalWidth);
    } else skipBorder(totalWidth);
    if (borders.includes("r")) {
        (0, _config389B86FfJs.l).debug("add right border");
        addBorder(totalHeight);
    } else skipBorder(totalHeight);
    if (borders.includes("b")) {
        (0, _config389B86FfJs.l).debug("add bottom border");
        addBorder(totalWidth);
    } else skipBorder(totalWidth);
    if (borders.includes("l")) {
        (0, _config389B86FfJs.l).debug("add left border");
        addBorder(totalHeight);
    } else skipBorder(totalHeight);
    rect2.attr("stroke-dasharray", strokeDashArray.join(" "));
}
const rectWithTitle = (parent, node)=>{
    let classes;
    if (!node.classes) classes = "node default";
    else classes = "node " + node.classes;
    const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const innerLine = shapeSvg.insert("line");
    const label = shapeSvg.insert("g").attr("class", "label");
    const text2 = node.labelText.flat ? node.labelText.flat() : node.labelText;
    let title = "";
    if (typeof text2 === "object") title = text2[0];
    else title = text2;
    (0, _config389B86FfJs.l).info("Label text abc79", title, text2, typeof text2 === "object");
    const text = label.node().appendChild(createLabel$1(title, node.labelStyle, true, true));
    let bbox = {
        width: 0,
        height: 0
    };
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        const div = text.children[0];
        const dv = (0, _d3.select)(text);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    (0, _config389B86FfJs.l).info("Text 2", text2);
    const textRows = text2.slice(1, text2.length);
    let titleBox = text.getBBox();
    const descr = label.node().appendChild(createLabel$1(textRows.join ? textRows.join("<br/>") : textRows, node.labelStyle, true, true));
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        const div = descr.children[0];
        const dv = (0, _d3.select)(descr);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    const halfPadding = node.padding / 2;
    (0, _d3.select)(descr).attr("transform", "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width > titleBox.width ? 0 : (titleBox.width - bbox.width) / 2) + ", " + (titleBox.height + halfPadding + 5) + ")");
    (0, _d3.select)(text).attr("transform", "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width < titleBox.width ? 0 : -(titleBox.width - bbox.width) / 2) + ", " + 0 + ")");
    bbox = label.node().getBBox();
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + (-bbox.height / 2 - halfPadding + 3) + ")");
    rect2.attr("class", "outer title-state").attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    innerLine.attr("class", "divider").attr("x1", -bbox.width / 2 - halfPadding).attr("x2", bbox.width / 2 + halfPadding).attr("y1", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding).attr("y2", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding);
    updateNodeBounds(node, rect2);
    node.intersect = function(point2) {
        return intersect.rect(node, point2);
    };
    return shapeSvg;
};
const stadium = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const h = bbox.height + node.padding;
    const w = bbox.width + h / 4 + node.padding;
    const rect2 = shapeSvg.insert("rect", ":first-child").attr("style", node.style).attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
    updateNodeBounds(node, rect2);
    node.intersect = function(point2) {
        return intersect.rect(node, point2);
    };
    return shapeSvg;
};
const circle = (parent, node)=>{
    const { shapeSvg , bbox , halfPadding  } = labelHelper(parent, node, void 0, true);
    const circle2 = shapeSvg.insert("circle", ":first-child");
    circle2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    (0, _config389B86FfJs.l).info("Circle main");
    updateNodeBounds(node, circle2);
    node.intersect = function(point2) {
        (0, _config389B86FfJs.l).info("Circle intersect", node, bbox.width / 2 + halfPadding, point2);
        return intersect.circle(node, bbox.width / 2 + halfPadding, point2);
    };
    return shapeSvg;
};
const doublecircle = (parent, node)=>{
    const { shapeSvg , bbox , halfPadding  } = labelHelper(parent, node, void 0, true);
    const gap = 5;
    const circleGroup = shapeSvg.insert("g", ":first-child");
    const outerCircle = circleGroup.insert("circle");
    const innerCircle = circleGroup.insert("circle");
    outerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding + gap).attr("width", bbox.width + node.padding + gap * 2).attr("height", bbox.height + node.padding + gap * 2);
    innerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
    (0, _config389B86FfJs.l).info("DoubleCircle main");
    updateNodeBounds(node, outerCircle);
    node.intersect = function(point2) {
        (0, _config389B86FfJs.l).info("DoubleCircle intersect", node, bbox.width / 2 + halfPadding + gap, point2);
        return intersect.circle(node, bbox.width / 2 + halfPadding + gap, point2);
    };
    return shapeSvg;
};
const subroutine = (parent, node)=>{
    const { shapeSvg , bbox  } = labelHelper(parent, node, void 0, true);
    const w = bbox.width + node.padding;
    const h = bbox.height + node.padding;
    const points = [
        {
            x: 0,
            y: 0
        },
        {
            x: w,
            y: 0
        },
        {
            x: w,
            y: -h
        },
        {
            x: 0,
            y: -h
        },
        {
            x: 0,
            y: 0
        },
        {
            x: -8,
            y: 0
        },
        {
            x: w + 8,
            y: 0
        },
        {
            x: w + 8,
            y: -h
        },
        {
            x: -8,
            y: -h
        },
        {
            x: -8,
            y: 0
        }
    ];
    const el = insertPolygonShape(shapeSvg, w, h, points);
    el.attr("style", node.style);
    updateNodeBounds(node, el);
    node.intersect = function(point2) {
        return intersect.polygon(node, points, point2);
    };
    return shapeSvg;
};
const start = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    const circle2 = shapeSvg.insert("circle", ":first-child");
    circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    updateNodeBounds(node, circle2);
    node.intersect = function(point2) {
        return intersect.circle(node, 7, point2);
    };
    return shapeSvg;
};
const forkJoin = (parent, node, dir)=>{
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    let width = 70;
    let height = 10;
    if (dir === "LR") {
        width = 10;
        height = 70;
    }
    const shape = shapeSvg.append("rect").attr("x", -1 * width / 2).attr("y", -1 * height / 2).attr("width", width).attr("height", height).attr("class", "fork-join");
    updateNodeBounds(node, shape);
    node.height = node.height + node.padding / 2;
    node.width = node.width + node.padding / 2;
    node.intersect = function(point2) {
        return intersect.rect(node, point2);
    };
    return shapeSvg;
};
const end = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
    const innerCircle = shapeSvg.insert("circle", ":first-child");
    const circle2 = shapeSvg.insert("circle", ":first-child");
    circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    innerCircle.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
    updateNodeBounds(node, circle2);
    node.intersect = function(point2) {
        return intersect.circle(node, 7, point2);
    };
    return shapeSvg;
};
const class_box = (parent, node)=>{
    const halfPadding = node.padding / 2;
    const rowPadding = 4;
    const lineHeight = 8;
    let classes;
    if (!node.classes) classes = "node default";
    else classes = "node " + node.classes;
    const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const topLine = shapeSvg.insert("line");
    const bottomLine = shapeSvg.insert("line");
    let maxWidth = 0;
    let maxHeight = rowPadding;
    const labelContainer = shapeSvg.insert("g").attr("class", "label");
    let verticalPos = 0;
    const hasInterface = node.classData.annotations && node.classData.annotations[0];
    const interfaceLabelText = node.classData.annotations[0] ? "\xab" + node.classData.annotations[0] + "\xbb" : "";
    const interfaceLabel = labelContainer.node().appendChild(createLabel$1(interfaceLabelText, node.labelStyle, true, true));
    let interfaceBBox = interfaceLabel.getBBox();
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        const div = interfaceLabel.children[0];
        const dv = (0, _d3.select)(interfaceLabel);
        interfaceBBox = div.getBoundingClientRect();
        dv.attr("width", interfaceBBox.width);
        dv.attr("height", interfaceBBox.height);
    }
    if (node.classData.annotations[0]) {
        maxHeight += interfaceBBox.height + rowPadding;
        maxWidth += interfaceBBox.width;
    }
    let classTitleString = node.classData.label;
    if (node.classData.type !== void 0 && node.classData.type !== "") {
        if ((0, _config389B86FfJs.g)().flowchart.htmlLabels) classTitleString += "&lt;" + node.classData.type + "&gt;";
        else classTitleString += "<" + node.classData.type + ">";
    }
    const classTitleLabel = labelContainer.node().appendChild(createLabel$1(classTitleString, node.labelStyle, true, true));
    (0, _d3.select)(classTitleLabel).attr("class", "classTitle");
    let classTitleBBox = classTitleLabel.getBBox();
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        const div = classTitleLabel.children[0];
        const dv = (0, _d3.select)(classTitleLabel);
        classTitleBBox = div.getBoundingClientRect();
        dv.attr("width", classTitleBBox.width);
        dv.attr("height", classTitleBBox.height);
    }
    maxHeight += classTitleBBox.height + rowPadding;
    if (classTitleBBox.width > maxWidth) maxWidth = classTitleBBox.width;
    const classAttributes = [];
    node.classData.members.forEach((str)=>{
        const parsedInfo = (0, _svgDraw6A237A99Js.p)(str);
        let parsedText = parsedInfo.displayText;
        if ((0, _config389B86FfJs.g)().flowchart.htmlLabels) parsedText = parsedText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const lbl = labelContainer.node().appendChild(createLabel$1(parsedText, parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle, true, true));
        let bbox = lbl.getBBox();
        if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
            const div = lbl.children[0];
            const dv = (0, _d3.select)(lbl);
            bbox = div.getBoundingClientRect();
            dv.attr("width", bbox.width);
            dv.attr("height", bbox.height);
        }
        if (bbox.width > maxWidth) maxWidth = bbox.width;
        maxHeight += bbox.height + rowPadding;
        classAttributes.push(lbl);
    });
    maxHeight += lineHeight;
    const classMethods = [];
    node.classData.methods.forEach((str)=>{
        const parsedInfo = (0, _svgDraw6A237A99Js.p)(str);
        let displayText = parsedInfo.displayText;
        if ((0, _config389B86FfJs.g)().flowchart.htmlLabels) displayText = displayText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const lbl = labelContainer.node().appendChild(createLabel$1(displayText, parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle, true, true));
        let bbox = lbl.getBBox();
        if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
            const div = lbl.children[0];
            const dv = (0, _d3.select)(lbl);
            bbox = div.getBoundingClientRect();
            dv.attr("width", bbox.width);
            dv.attr("height", bbox.height);
        }
        if (bbox.width > maxWidth) maxWidth = bbox.width;
        maxHeight += bbox.height + rowPadding;
        classMethods.push(lbl);
    });
    maxHeight += lineHeight;
    if (hasInterface) {
        let diffX2 = (maxWidth - interfaceBBox.width) / 2;
        (0, _d3.select)(interfaceLabel).attr("transform", "translate( " + (-1 * maxWidth / 2 + diffX2) + ", " + -1 * maxHeight / 2 + ")");
        verticalPos = interfaceBBox.height + rowPadding;
    }
    let diffX = (maxWidth - classTitleBBox.width) / 2;
    (0, _d3.select)(classTitleLabel).attr("transform", "translate( " + (-1 * maxWidth / 2 + diffX) + ", " + (-1 * maxHeight / 2 + verticalPos) + ")");
    verticalPos += classTitleBBox.height + rowPadding;
    topLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
    verticalPos += lineHeight;
    classAttributes.forEach((lbl)=>{
        (0, _d3.select)(lbl).attr("transform", "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos + lineHeight / 2) + ")");
        verticalPos += classTitleBBox.height + rowPadding;
    });
    verticalPos += lineHeight;
    bottomLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
    verticalPos += lineHeight;
    classMethods.forEach((lbl)=>{
        (0, _d3.select)(lbl).attr("transform", "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos) + ")");
        verticalPos += classTitleBBox.height + rowPadding;
    });
    rect2.attr("class", "outer title-state").attr("x", -maxWidth / 2 - halfPadding).attr("y", -(maxHeight / 2) - halfPadding).attr("width", maxWidth + node.padding).attr("height", maxHeight + node.padding);
    updateNodeBounds(node, rect2);
    node.intersect = function(point2) {
        return intersect.rect(node, point2);
    };
    return shapeSvg;
};
const shapes = {
    rhombus: question,
    question,
    rect,
    labelRect,
    rectWithTitle,
    choice,
    circle,
    doublecircle,
    stadium,
    hexagon,
    rect_left_inv_arrow,
    lean_right,
    lean_left,
    trapezoid,
    inv_trapezoid,
    rect_right_inv_arrow,
    cylinder,
    start,
    end,
    note: note$1,
    subroutine,
    fork: forkJoin,
    join: forkJoin,
    class_box
};
let nodeElems = {};
const insertNode = (elem, node, dir)=>{
    let newEl;
    let el;
    if (node.link) {
        let target;
        if ((0, _config389B86FfJs.g)().securityLevel === "sandbox") target = "_top";
        else if (node.linkTarget) target = node.linkTarget || "_blank";
        newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target);
        el = shapes[node.shape](newEl, node, dir);
    } else {
        el = shapes[node.shape](elem, node, dir);
        newEl = el;
    }
    if (node.tooltip) el.attr("title", node.tooltip);
    if (node.class) el.attr("class", "node default " + node.class);
    nodeElems[node.id] = newEl;
    if (node.haveCallback) nodeElems[node.id].attr("class", nodeElems[node.id].attr("class") + " clickable");
    return newEl;
};
const setNodeElem = (elem, node)=>{
    nodeElems[node.id] = elem;
};
const clear$1 = ()=>{
    nodeElems = {};
};
const positionNode = (node)=>{
    const el = nodeElems[node.id];
    (0, _config389B86FfJs.l).trace("Transforming node", node.diff, node, "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")");
    const padding = 8;
    const diff = node.diff || 0;
    if (node.clusterNode) el.attr("transform", "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding) + ")");
    else el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
    return diff;
};
let edgeLabels = {};
let terminalLabels = {};
const clear = ()=>{
    edgeLabels = {};
    terminalLabels = {};
};
const insertEdgeLabel = (elem, edge)=>{
    const labelElement = createLabel$1(edge.label, edge.labelStyle);
    const edgeLabel = elem.insert("g").attr("class", "edgeLabel");
    const label = edgeLabel.insert("g").attr("class", "label");
    label.node().appendChild(labelElement);
    let bbox = labelElement.getBBox();
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        const div = labelElement.children[0];
        const dv = (0, _d3.select)(labelElement);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
    edgeLabels[edge.id] = edgeLabel;
    edge.width = bbox.width;
    edge.height = bbox.height;
    let fo;
    if (edge.startLabelLeft) {
        const startLabelElement = createLabel$1(edge.startLabelLeft, edge.labelStyle);
        const startEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
        const inner = startEdgeLabelLeft.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(startLabelElement);
        const slBox = startLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        if (!terminalLabels[edge.id]) terminalLabels[edge.id] = {};
        terminalLabels[edge.id].startLeft = startEdgeLabelLeft;
        setTerminalWidth(fo, edge.startLabelLeft);
    }
    if (edge.startLabelRight) {
        const startLabelElement = createLabel$1(edge.startLabelRight, edge.labelStyle);
        const startEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
        const inner = startEdgeLabelRight.insert("g").attr("class", "inner");
        fo = startEdgeLabelRight.node().appendChild(startLabelElement);
        inner.node().appendChild(startLabelElement);
        const slBox = startLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        if (!terminalLabels[edge.id]) terminalLabels[edge.id] = {};
        terminalLabels[edge.id].startRight = startEdgeLabelRight;
        setTerminalWidth(fo, edge.startLabelRight);
    }
    if (edge.endLabelLeft) {
        const endLabelElement = createLabel$1(edge.endLabelLeft, edge.labelStyle);
        const endEdgeLabelLeft = elem.insert("g").attr("class", "edgeTerminals");
        const inner = endEdgeLabelLeft.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(endLabelElement);
        const slBox = endLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        endEdgeLabelLeft.node().appendChild(endLabelElement);
        if (!terminalLabels[edge.id]) terminalLabels[edge.id] = {};
        terminalLabels[edge.id].endLeft = endEdgeLabelLeft;
        setTerminalWidth(fo, edge.endLabelLeft);
    }
    if (edge.endLabelRight) {
        const endLabelElement = createLabel$1(edge.endLabelRight, edge.labelStyle);
        const endEdgeLabelRight = elem.insert("g").attr("class", "edgeTerminals");
        const inner = endEdgeLabelRight.insert("g").attr("class", "inner");
        fo = inner.node().appendChild(endLabelElement);
        const slBox = endLabelElement.getBBox();
        inner.attr("transform", "translate(" + -slBox.width / 2 + ", " + -slBox.height / 2 + ")");
        endEdgeLabelRight.node().appendChild(endLabelElement);
        if (!terminalLabels[edge.id]) terminalLabels[edge.id] = {};
        terminalLabels[edge.id].endRight = endEdgeLabelRight;
        setTerminalWidth(fo, edge.endLabelRight);
    }
    return labelElement;
};
function setTerminalWidth(fo, value) {
    if ((0, _config389B86FfJs.g)().flowchart.htmlLabels && fo) {
        fo.style.width = value.length * 9 + "px";
        fo.style.height = "12px";
    }
}
const positionEdgeLabel = (edge, paths)=>{
    (0, _config389B86FfJs.l).info("Moving label abc78 ", edge.id, edge.label, edgeLabels[edge.id]);
    let path = paths.updatedPath ? paths.updatedPath : paths.originalPath;
    if (edge.label) {
        const el = edgeLabels[edge.id];
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, _utilsD5Eeff82Js.u).calcLabelPosition(path);
            (0, _config389B86FfJs.l).info("Moving label " + edge.label + " from (", x, ",", y, ") to (", pos.x, ",", pos.y, ") abc78");
            if (paths.updatedPath) {
                x = pos.x;
                y = pos.y;
            }
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
    if (edge.startLabelLeft) {
        const el = terminalLabels[edge.id].startLeft;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, _utilsD5Eeff82Js.u).calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_left", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
    if (edge.startLabelRight) {
        const el = terminalLabels[edge.id].startRight;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, _utilsD5Eeff82Js.u).calcTerminalLabelPosition(edge.arrowTypeStart ? 10 : 0, "start_right", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
    if (edge.endLabelLeft) {
        const el = terminalLabels[edge.id].endLeft;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, _utilsD5Eeff82Js.u).calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_left", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
    if (edge.endLabelRight) {
        const el = terminalLabels[edge.id].endRight;
        let x = edge.x;
        let y = edge.y;
        if (path) {
            const pos = (0, _utilsD5Eeff82Js.u).calcTerminalLabelPosition(edge.arrowTypeEnd ? 10 : 0, "end_right", path);
            x = pos.x;
            y = pos.y;
        }
        el.attr("transform", "translate(" + x + ", " + y + ")");
    }
};
const outsideNode = (node, point2)=>{
    const x = node.x;
    const y = node.y;
    const dx = Math.abs(point2.x - x);
    const dy = Math.abs(point2.y - y);
    const w = node.width / 2;
    const h = node.height / 2;
    if (dx >= w || dy >= h) return true;
    return false;
};
const intersection = (node, outsidePoint, insidePoint)=>{
    (0, _config389B86FfJs.l).warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(outsidePoint)}
  insidePoint : ${JSON.stringify(insidePoint)}
  node        : x:${node.x} y:${node.y} w:${node.width} h:${node.height}`);
    const x = node.x;
    const y = node.y;
    const dx = Math.abs(x - insidePoint.x);
    const w = node.width / 2;
    let r = insidePoint.x < outsidePoint.x ? w - dx : w + dx;
    const h = node.height / 2;
    const Q = Math.abs(outsidePoint.y - insidePoint.y);
    const R = Math.abs(outsidePoint.x - insidePoint.x);
    if (Math.abs(y - outsidePoint.y) * w > Math.abs(x - outsidePoint.x) * h) {
        let q = insidePoint.y < outsidePoint.y ? outsidePoint.y - h - y : y - h - outsidePoint.y;
        r = R * q / Q;
        const res = {
            x: insidePoint.x < outsidePoint.x ? insidePoint.x + r : insidePoint.x - R + r,
            y: insidePoint.y < outsidePoint.y ? insidePoint.y + Q - q : insidePoint.y - Q + q
        };
        if (r === 0) {
            res.x = outsidePoint.x;
            res.y = outsidePoint.y;
        }
        if (R === 0) res.x = outsidePoint.x;
        if (Q === 0) res.y = outsidePoint.y;
        (0, _config389B86FfJs.l).warn(`abc89 topp/bott calc, Q ${Q}, q ${q}, R ${R}, r ${r}`, res);
        return res;
    } else {
        if (insidePoint.x < outsidePoint.x) r = outsidePoint.x - w - x;
        else r = x - w - outsidePoint.x;
        let q = Q * r / R;
        let _x = insidePoint.x < outsidePoint.x ? insidePoint.x + R - r : insidePoint.x - R + r;
        let _y = insidePoint.y < outsidePoint.y ? insidePoint.y + q : insidePoint.y - q;
        (0, _config389B86FfJs.l).warn(`sides calc abc89, Q ${Q}, q ${q}, R ${R}, r ${r}`, {
            _x,
            _y
        });
        if (r === 0) {
            _x = outsidePoint.x;
            _y = outsidePoint.y;
        }
        if (R === 0) _x = outsidePoint.x;
        if (Q === 0) _y = outsidePoint.y;
        return {
            x: _x,
            y: _y
        };
    }
};
const cutPathAtIntersect = (_points, boundryNode)=>{
    (0, _config389B86FfJs.l).warn("abc88 cutPathAtIntersect", _points, boundryNode);
    let points = [];
    let lastPointOutside = _points[0];
    let isInside = false;
    _points.forEach((point2)=>{
        (0, _config389B86FfJs.l).info("abc88 checking point", point2, boundryNode);
        if (!outsideNode(boundryNode, point2) && !isInside) {
            const inter = intersection(boundryNode, lastPointOutside, point2);
            (0, _config389B86FfJs.l).warn("abc88 inside", point2, lastPointOutside, inter);
            (0, _config389B86FfJs.l).warn("abc88 intersection", inter);
            let pointPresent = false;
            points.forEach((p)=>{
                pointPresent = pointPresent || p.x === inter.x && p.y === inter.y;
            });
            if (!points.some((e)=>e.x === inter.x && e.y === inter.y)) points.push(inter);
            else (0, _config389B86FfJs.l).warn("abc88 no intersect", inter, points);
            isInside = true;
        } else {
            (0, _config389B86FfJs.l).warn("abc88 outside", point2, lastPointOutside);
            lastPointOutside = point2;
            if (!isInside) points.push(point2);
        }
    });
    (0, _config389B86FfJs.l).warn("abc88 returning points", points);
    return points;
};
const insertEdge = function(elem, e, edge, clusterDb, diagramType, graph) {
    let points = edge.points;
    let pointsHasChanged = false;
    const tail = graph.node(e.v);
    var head = graph.node(e.w);
    (0, _config389B86FfJs.l).info("abc88 InsertEdge: ", edge);
    if (head.intersect && tail.intersect) {
        points = points.slice(1, edge.points.length - 1);
        points.unshift(tail.intersect(points[0]));
        (0, _config389B86FfJs.l).info("Last point", points[points.length - 1], head, head.intersect(points[points.length - 1]));
        points.push(head.intersect(points[points.length - 1]));
    }
    if (edge.toCluster) {
        (0, _config389B86FfJs.l).info("to cluster abc88", clusterDb[edge.toCluster]);
        points = cutPathAtIntersect(edge.points, clusterDb[edge.toCluster].node);
        pointsHasChanged = true;
    }
    if (edge.fromCluster) {
        (0, _config389B86FfJs.l).info("from cluster abc88", clusterDb[edge.fromCluster]);
        points = cutPathAtIntersect(points.reverse(), clusterDb[edge.fromCluster].node).reverse();
        pointsHasChanged = true;
    }
    const lineData = points.filter((p)=>!Number.isNaN(p.y));
    let curve;
    if (diagramType === "graph" || diagramType === "flowchart") curve = edge.curve || (0, _d3.curveBasis);
    else curve = (0, _d3.curveBasis);
    const lineFunction = (0, _d3.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    }).curve(curve);
    let strokeClasses;
    switch(edge.thickness){
        case "normal":
            strokeClasses = "edge-thickness-normal";
            break;
        case "thick":
            strokeClasses = "edge-thickness-thick";
            break;
        case "invisible":
            strokeClasses = "edge-thickness-thick";
            break;
        default:
            strokeClasses = "";
    }
    switch(edge.pattern){
        case "solid":
            strokeClasses += " edge-pattern-solid";
            break;
        case "dotted":
            strokeClasses += " edge-pattern-dotted";
            break;
        case "dashed":
            strokeClasses += " edge-pattern-dashed";
            break;
    }
    const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", edge.id).attr("class", " " + strokeClasses + (edge.classes ? " " + edge.classes : "")).attr("style", edge.style);
    let url = "";
    if ((0, _config389B86FfJs.g)().flowchart.arrowMarkerAbsolute || (0, _config389B86FfJs.g)().state.arrowMarkerAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replace(/\(/g, "\\(");
        url = url.replace(/\)/g, "\\)");
    }
    (0, _config389B86FfJs.l).info("arrowTypeStart", edge.arrowTypeStart);
    (0, _config389B86FfJs.l).info("arrowTypeEnd", edge.arrowTypeEnd);
    switch(edge.arrowTypeStart){
        case "arrow_cross":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-crossStart)");
            break;
        case "arrow_point":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-pointStart)");
            break;
        case "arrow_barb":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-barbStart)");
            break;
        case "arrow_circle":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-circleStart)");
            break;
        case "aggregation":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-aggregationStart)");
            break;
        case "extension":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-extensionStart)");
            break;
        case "composition":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-compositionStart)");
            break;
        case "dependency":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-dependencyStart)");
            break;
        case "lollipop":
            svgPath.attr("marker-start", "url(" + url + "#" + diagramType + "-lollipopStart)");
            break;
    }
    switch(edge.arrowTypeEnd){
        case "arrow_cross":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-crossEnd)");
            break;
        case "arrow_point":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-pointEnd)");
            break;
        case "arrow_barb":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-barbEnd)");
            break;
        case "arrow_circle":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-circleEnd)");
            break;
        case "aggregation":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-aggregationEnd)");
            break;
        case "extension":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-extensionEnd)");
            break;
        case "composition":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-compositionEnd)");
            break;
        case "dependency":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-dependencyEnd)");
            break;
        case "lollipop":
            svgPath.attr("marker-end", "url(" + url + "#" + diagramType + "-lollipopEnd)");
            break;
    }
    let paths = {};
    if (pointsHasChanged) paths.updatedPath = points;
    paths.originalPath = edge.points;
    return paths;
};

},{"./config-389b86ff.js":"hnpRM","d3":"17XFv","./mermaidAPI-0716c7c2.js":"bdkW7","./svgDraw-6a237a99.js":"hHKQv","./utils-d5eeff82.js":"2zv2d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7TDvp"], null, "parcelRequire54bf")

//# sourceMappingURL=flowDiagram-42bb1e4d.77f6cb88.js.map
