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
})({"edDu4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f3f40095ef3d5d33";
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

},{}],"dOiMA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diagram", ()=>diagram);
var _flowDb88762A1FJs = require("./flowDb-88762a1f.js");
var _indexJs = require("dagre-d3-es/src/graphlib/index.js");
var _d3 = require("d3");
var _config389B86FfJs = require("./config-389b86ff.js");
var _dagreD3Es = require("dagre-d3-es");
var _utilJs = require("dagre-d3-es/src/dagre-js/util.js");
var _addHtmlLabelJs = require("dagre-d3-es/src/dagre-js/label/add-html-label.js");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
var _setupGraphViewboxE35E4124Js = require("./setupGraphViewbox-e35e4124.js");
var _intersectPolygonJs = require("dagre-d3-es/src/dagre-js/intersect/intersect-polygon.js");
var _intersectRectJs = require("dagre-d3-es/src/dagre-js/intersect/intersect-rect.js");
var _styles4Fe3D1FcJs = require("./styles-4fe3d1fc.js");
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
var _indexF9D09Cc9Js = require("./index-f9d09cc9.js");
var _indexJs1 = require("dagre-d3-es/src/dagre/index.js");
var _jsonJs = require("dagre-d3-es/src/graphlib/json.js");
var _edges65Da65DcJs = require("./edges-65da65dc.js");
var _svgDraw6A237A99Js = require("./svgDraw-6a237a99.js");
function question(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
    const s = (w + h) * 0.9;
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
    const shapeSvg = insertPolygonShape(parent, s, s, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function hexagon(parent, bbox, node) {
    const f = 4;
    const h = bbox.height;
    const m = h / f;
    const w = bbox.width + 2 * m;
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
    const shapeSvg = insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function rect_left_inv_arrow(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function lean_right(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function lean_left(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function trapezoid(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function inv_trapezoid(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function rect_right_inv_arrow(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function stadium(parent, bbox, node) {
    const h = bbox.height;
    const w = bbox.width + h / 4;
    const shapeSvg = parent.insert("rect", ":first-child").attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
    node.intersect = function(point) {
        return (0, _intersectRectJs.intersectRect)(node, point);
    };
    return shapeSvg;
}
function subroutine(parent, bbox, node) {
    const w = bbox.width;
    const h = bbox.height;
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
    const shapeSvg = insertPolygonShape(parent, w, h, points);
    node.intersect = function(point) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, point);
    };
    return shapeSvg;
}
function cylinder(parent, bbox, node) {
    const w = bbox.width;
    const rx = w / 2;
    const ry = rx / (2.5 + w / 50);
    const h = bbox.height + ry;
    const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
    const shapeSvg = parent.attr("label-offset-y", ry).insert("path", ":first-child").attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
    node.intersect = function(point) {
        const pos = (0, _intersectRectJs.intersectRect)(node, point);
        const x = pos.x - node.x;
        if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
            let y = ry * ry * (1 - x * x / (rx * rx));
            if (y != 0) y = Math.sqrt(y);
            y = ry - y;
            if (point.y - node.y > 0) y = -y;
            pos.y += y;
        }
        return pos;
    };
    return shapeSvg;
}
function addToRender(render2) {
    render2.shapes().question = question;
    render2.shapes().hexagon = hexagon;
    render2.shapes().stadium = stadium;
    render2.shapes().subroutine = subroutine;
    render2.shapes().cylinder = cylinder;
    render2.shapes().rect_left_inv_arrow = rect_left_inv_arrow;
    render2.shapes().lean_right = lean_right;
    render2.shapes().lean_left = lean_left;
    render2.shapes().trapezoid = trapezoid;
    render2.shapes().inv_trapezoid = inv_trapezoid;
    render2.shapes().rect_right_inv_arrow = rect_right_inv_arrow;
}
function addToRenderV2(addShape) {
    addShape({
        question
    });
    addShape({
        hexagon
    });
    addShape({
        stadium
    });
    addShape({
        subroutine
    });
    addShape({
        cylinder
    });
    addShape({
        rect_left_inv_arrow
    });
    addShape({
        lean_right
    });
    addShape({
        lean_left
    });
    addShape({
        trapezoid
    });
    addShape({
        inv_trapezoid
    });
    addShape({
        rect_right_inv_arrow
    });
}
function insertPolygonShape(parent, w, h, points) {
    return parent.insert("polygon", ":first-child").attr("points", points.map(function(d) {
        return d.x + "," + d.y;
    }).join(" ")).attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
const flowChartShapes = {
    addToRender,
    addToRenderV2
};
const conf = {};
const setConf = function(cnf) {
    const keys = Object.keys(cnf);
    for (const key of keys)conf[key] = cnf[key];
};
const addVertices = function(vert, g, svgId, root, _doc, diagObj) {
    const svg = !root ? (0, _d3.select)(`[id="${svgId}"]`) : root.select(`[id="${svgId}"]`);
    const doc = !_doc ? document : _doc;
    const keys = Object.keys(vert);
    keys.forEach(function(id) {
        const vertex = vert[id];
        let classStr = "default";
        if (vertex.classes.length > 0) classStr = vertex.classes.join(" ");
        const styles = (0, _utilsD5Eeff82Js.m)(vertex.styles);
        let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
        let vertexNode;
        if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
            const node = {
                label: vertexText.replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`)
            };
            vertexNode = (0, _addHtmlLabelJs.addHtmlLabel)(svg, node).node();
            vertexNode.parentNode.removeChild(vertexNode);
        } else {
            const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
            svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
            const rows = vertexText.split((0, _config389B86FfJs.d).lineBreakRegex);
            for (const row of rows){
                const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                tspan.setAttribute("dy", "1em");
                tspan.setAttribute("x", "1");
                tspan.textContent = row;
                svgLabel.appendChild(tspan);
            }
            vertexNode = svgLabel;
        }
        let radious = 0;
        let _shape = "";
        switch(vertex.type){
            case "round":
                radious = 5;
                _shape = "rect";
                break;
            case "square":
                _shape = "rect";
                break;
            case "diamond":
                _shape = "question";
                break;
            case "hexagon":
                _shape = "hexagon";
                break;
            case "odd":
                _shape = "rect_left_inv_arrow";
                break;
            case "lean_right":
                _shape = "lean_right";
                break;
            case "lean_left":
                _shape = "lean_left";
                break;
            case "trapezoid":
                _shape = "trapezoid";
                break;
            case "inv_trapezoid":
                _shape = "inv_trapezoid";
                break;
            case "odd_right":
                _shape = "rect_left_inv_arrow";
                break;
            case "circle":
                _shape = "circle";
                break;
            case "ellipse":
                _shape = "ellipse";
                break;
            case "stadium":
                _shape = "stadium";
                break;
            case "subroutine":
                _shape = "subroutine";
                break;
            case "cylinder":
                _shape = "cylinder";
                break;
            case "group":
                _shape = "rect";
                break;
            default:
                _shape = "rect";
        }
        (0, _config389B86FfJs.l).warn("Adding node", vertex.id, vertex.domId);
        g.setNode(diagObj.db.lookUpDomId(vertex.id), {
            labelType: "svg",
            labelStyle: styles.labelStyle,
            shape: _shape,
            label: vertexNode,
            rx: radious,
            ry: radious,
            class: classStr,
            style: styles.style,
            id: diagObj.db.lookUpDomId(vertex.id)
        });
    });
};
const addEdges = function(edges, g, diagObj) {
    let cnt = 0;
    let defaultStyle;
    let defaultLabelStyle;
    if (edges.defaultStyle !== void 0) {
        const defaultStyles = (0, _utilsD5Eeff82Js.m)(edges.defaultStyle);
        defaultStyle = defaultStyles.style;
        defaultLabelStyle = defaultStyles.labelStyle;
    }
    edges.forEach(function(edge) {
        cnt++;
        var linkId = "L-" + edge.start + "-" + edge.end;
        var linkNameStart = "LS-" + edge.start;
        var linkNameEnd = "LE-" + edge.end;
        const edgeData = {};
        if (edge.type === "arrow_open") edgeData.arrowhead = "none";
        else edgeData.arrowhead = "normal";
        let style = "";
        let labelStyle = "";
        if (edge.style !== void 0) {
            const styles = (0, _utilsD5Eeff82Js.m)(edge.style);
            style = styles.style;
            labelStyle = styles.labelStyle;
        } else switch(edge.stroke){
            case "normal":
                style = "fill:none";
                if (defaultStyle !== void 0) style = defaultStyle;
                if (defaultLabelStyle !== void 0) labelStyle = defaultLabelStyle;
                break;
            case "dotted":
                style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
                break;
            case "thick":
                style = " stroke-width: 3.5px;fill:none";
                break;
        }
        edgeData.style = style;
        edgeData.labelStyle = labelStyle;
        if (edge.interpolate !== void 0) edgeData.curve = (0, _utilsD5Eeff82Js.n)(edge.interpolate, (0, _d3.curveLinear));
        else if (edges.defaultInterpolate !== void 0) edgeData.curve = (0, _utilsD5Eeff82Js.n)(edges.defaultInterpolate, (0, _d3.curveLinear));
        else edgeData.curve = (0, _utilsD5Eeff82Js.n)(conf.curve, (0, _d3.curveLinear));
        if (edge.text === void 0) {
            if (edge.style !== void 0) edgeData.arrowheadStyle = "fill: #333";
        } else {
            edgeData.arrowheadStyle = "fill: #333";
            edgeData.labelpos = "c";
            if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
                edgeData.labelType = "html";
                edgeData.label = `<span id="L-${linkId}" class="edgeLabel L-${linkNameStart}' L-${linkNameEnd}" style="${edgeData.labelStyle}">${edge.text.replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`)}</span>`;
            } else {
                edgeData.labelType = "text";
                edgeData.label = edge.text.replace((0, _config389B86FfJs.d).lineBreakRegex, "\n");
                if (edge.style === void 0) edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
                edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
            }
        }
        edgeData.id = linkId;
        edgeData.class = linkNameStart + " " + linkNameEnd;
        edgeData.minlen = edge.length || 1;
        g.setEdge(diagObj.db.lookUpDomId(edge.start), diagObj.db.lookUpDomId(edge.end), edgeData, cnt);
    });
};
const getClasses = function(text, diagObj) {
    (0, _config389B86FfJs.l).info("Extracting classes");
    diagObj.db.clear();
    try {
        diagObj.parse(text);
        return diagObj.db.getClasses();
    } catch (e) {
        (0, _config389B86FfJs.l).error(e);
        return {};
    }
};
const draw = function(text, id, _version, diagObj) {
    (0, _config389B86FfJs.l).info("Drawing flowchart");
    diagObj.db.clear();
    const { securityLevel , flowchart: conf2  } = (0, _config389B86FfJs.g)();
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, _d3.select)("#i" + id);
    const root = securityLevel === "sandbox" ? (0, _d3.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, _d3.select)("body");
    const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
    try {
        diagObj.parser.parse(text);
    } catch (err) {
        (0, _config389B86FfJs.l).debug("Parsing failed");
    }
    let dir = diagObj.db.getDirection();
    if (dir === void 0) dir = "TD";
    const nodeSpacing = conf2.nodeSpacing || 50;
    const rankSpacing = conf2.rankSpacing || 50;
    const g = new _indexJs.Graph({
        multigraph: true,
        compound: true
    }).setGraph({
        rankdir: dir,
        nodesep: nodeSpacing,
        ranksep: rankSpacing,
        marginx: 8,
        marginy: 8
    }).setDefaultEdgeLabel(function() {
        return {};
    });
    let subG;
    const subGraphs = diagObj.db.getSubGraphs();
    for(let i2 = subGraphs.length - 1; i2 >= 0; i2--){
        subG = subGraphs[i2];
        diagObj.db.addVertex(subG.id, subG.title, "group", void 0, subG.classes);
    }
    const vert = diagObj.db.getVertices();
    (0, _config389B86FfJs.l).warn("Get vertices", vert);
    const edges = diagObj.db.getEdges();
    let i = 0;
    for(i = subGraphs.length - 1; i >= 0; i--){
        subG = subGraphs[i];
        (0, _d3.selectAll)("cluster").append("text");
        for(let j = 0; j < subG.nodes.length; j++){
            (0, _config389B86FfJs.l).warn("Setting subgraph", subG.nodes[j], diagObj.db.lookUpDomId(subG.nodes[j]), diagObj.db.lookUpDomId(subG.id));
            g.setParent(diagObj.db.lookUpDomId(subG.nodes[j]), diagObj.db.lookUpDomId(subG.id));
        }
    }
    addVertices(vert, g, id, root, doc, diagObj);
    addEdges(edges, g, diagObj);
    const render$1 = new (0, _dagreD3Es.render)();
    flowChartShapes.addToRender(render$1);
    render$1.arrows().none = function normal(parent, id2, edge, type) {
        const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
        const path = marker.append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
        (0, _utilJs.applyStyle)(path, edge[type + "Style"]);
    };
    render$1.arrows().normal = function normal(parent, id2) {
        const marker = parent.append("marker").attr("id", id2).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
        marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    };
    const svg = root.select(`[id="${id}"]`);
    const element = root.select("#" + id + " g");
    render$1(element, g);
    element.selectAll("g.node").attr("title", function() {
        return diagObj.db.getTooltip(this.id);
    });
    diagObj.db.indexNodes("subGraph" + i);
    for(i = 0; i < subGraphs.length; i++){
        subG = subGraphs[i];
        if (subG.title !== "undefined") {
            const clusterRects = doc.querySelectorAll("#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"] rect');
            const clusterEl = doc.querySelectorAll("#" + id + ' [id="' + diagObj.db.lookUpDomId(subG.id) + '"]');
            const xPos = clusterRects[0].x.baseVal.value;
            const yPos = clusterRects[0].y.baseVal.value;
            const _width = clusterRects[0].width.baseVal.value;
            const cluster = (0, _d3.select)(clusterEl[0]);
            const te = cluster.select(".label");
            te.attr("transform", `translate(${xPos + _width / 2}, ${yPos + 14})`);
            te.attr("id", id + "Text");
            for(let j = 0; j < subG.classes.length; j++)clusterEl[0].classList.add(subG.classes[j]);
        }
    }
    if (!conf2.htmlLabels) {
        const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
        for (const label of labels){
            const dim = label.getBBox();
            const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("rx", 0);
            rect.setAttribute("ry", 0);
            rect.setAttribute("width", dim.width);
            rect.setAttribute("height", dim.height);
            label.insertBefore(rect, label.firstChild);
        }
    }
    (0, _setupGraphViewboxE35E4124Js.s)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
    const keys = Object.keys(vert);
    keys.forEach(function(key) {
        const vertex = vert[key];
        if (vertex.link) {
            const node = root.select("#" + id + ' [id="' + diagObj.db.lookUpDomId(key) + '"]');
            if (node) {
                const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
                link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
                link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
                link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
                if (securityLevel === "sandbox") link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
                else if (vertex.linkTarget) link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
                const linkNode = node.insert(function() {
                    return link;
                }, ":first-child");
                const shape = node.select(".label-container");
                if (shape) linkNode.append(function() {
                    return shape.node();
                });
                const label = node.select(".label");
                if (label) linkNode.append(function() {
                    return label.node();
                });
            }
        }
    });
};
const flowRenderer = {
    setConf,
    addVertices,
    addEdges,
    getClasses,
    draw
};
const diagram = {
    parser: (0, _flowDb88762A1FJs.p),
    db: (0, _flowDb88762A1FJs.f),
    renderer: (0, _styles4Fe3D1FcJs.f),
    styles: (0, _styles4Fe3D1FcJs.a),
    init: (cnf)=>{
        if (!cnf.flowchart) cnf.flowchart = {};
        cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
        flowRenderer.setConf(cnf.flowchart);
        (0, _flowDb88762A1FJs.f).clear();
        (0, _flowDb88762A1FJs.f).setGen("gen-1");
    }
};

},{"./flowDb-88762a1f.js":"fR5JK","dagre-d3-es/src/graphlib/index.js":"2nAwO","d3":"17XFv","./config-389b86ff.js":"hnpRM","dagre-d3-es":"jnFsL","dagre-d3-es/src/dagre-js/util.js":"gWc1U","dagre-d3-es/src/dagre-js/label/add-html-label.js":"fzbuL","./utils-d5eeff82.js":"2zv2d","./setupGraphViewbox-e35e4124.js":"jv1OR","dagre-d3-es/src/dagre-js/intersect/intersect-polygon.js":"i4WgZ","dagre-d3-es/src/dagre-js/intersect/intersect-rect.js":"fVMHZ","./styles-4fe3d1fc.js":"iWWer","./mermaidAPI-0716c7c2.js":"bdkW7","stylis":"bMCXt","./errorRenderer-d05351b9.js":"d3Vzc","dompurify":"9Kzno","lodash-es/isEmpty.js":"e1Kmi","./commonDb-2ace122b.js":"kBdnX","dayjs":"NJZFB","khroma":"lMw0x","@braintree/sanitize-url":"hrxAd","lodash-es/memoize.js":"5zdei","./index-f9d09cc9.js":"bMWir","dagre-d3-es/src/dagre/index.js":"g6zYa","dagre-d3-es/src/graphlib/json.js":"iUA0H","./edges-65da65dc.js":"i9uQ2","./svgDraw-6a237a99.js":"hHKQv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jnFsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "graphlib", ()=>_indexJs);
parcelHelpers.export(exports, "intersect", ()=>_indexJs1);
parcelHelpers.export(exports, "render", ()=>(0, _renderJs.render));
var _renderJs = require("./dagre-js/render.js");
var _indexJs = require("./graphlib/index.js");
var _indexJs1 = require("./dagre-js/intersect/index.js");

},{"./dagre-js/render.js":"9Rlph","./graphlib/index.js":"2nAwO","./dagre-js/intersect/index.js":"adrPX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Rlph":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _d3 = require("d3");
var _lodashEs = require("lodash-es");
var _indexJs = require("../dagre/index.js");
var _arrowsJs = require("./arrows.js");
var _createClustersJs = require("./create-clusters.js");
var _createEdgeLabelsJs = require("./create-edge-labels.js");
var _createEdgePathsJs = require("./create-edge-paths.js");
var _createNodesJs = require("./create-nodes.js");
var _positionClustersJs = require("./position-clusters.js");
var _positionEdgeLabelsJs = require("./position-edge-labels.js");
var _positionNodesJs = require("./position-nodes.js");
var _shapesJs = require("./shapes.js");
// This design is based on http://bost.ocks.org/mike/chart/.
function render() {
    var fn = function(svg, g) {
        preProcessGraph(g);
        var outputGroup = createOrSelectGroup(svg, "output");
        var clustersGroup = createOrSelectGroup(outputGroup, "clusters");
        var edgePathsGroup = createOrSelectGroup(outputGroup, "edgePaths");
        var edgeLabels = (0, _createEdgeLabelsJs.createEdgeLabels)(createOrSelectGroup(outputGroup, "edgeLabels"), g);
        var nodes = (0, _createNodesJs.createNodes)(createOrSelectGroup(outputGroup, "nodes"), g, (0, _shapesJs.shapes));
        (0, _indexJs.layout)(g);
        (0, _positionNodesJs.positionNodes)(nodes, g);
        (0, _positionEdgeLabelsJs.positionEdgeLabels)(edgeLabels, g);
        (0, _createEdgePathsJs.createEdgePaths)(edgePathsGroup, g, (0, _arrowsJs.arrows));
        var clusters = (0, _createClustersJs.createClusters)(clustersGroup, g);
        (0, _positionClustersJs.positionClusters)(clusters, g);
        postProcessGraph(g);
    };
    fn.createNodes = function(value) {
        if (!arguments.length) return 0, _createNodesJs.createNodes;
        (0, _createNodesJs.setCreateNodes)(value);
        return fn;
    };
    fn.createClusters = function(value) {
        if (!arguments.length) return 0, _createClustersJs.createClusters;
        (0, _createClustersJs.setCreateClusters)(value);
        return fn;
    };
    fn.createEdgeLabels = function(value) {
        if (!arguments.length) return 0, _createEdgeLabelsJs.createEdgeLabels;
        (0, _createEdgeLabelsJs.setCreateEdgeLabels)(value);
        return fn;
    };
    fn.createEdgePaths = function(value) {
        if (!arguments.length) return 0, _createEdgePathsJs.createEdgePaths;
        (0, _createEdgePathsJs.setCreateEdgePaths)(value);
        return fn;
    };
    fn.shapes = function(value) {
        if (!arguments.length) return 0, _shapesJs.shapes;
        (0, _shapesJs.setShapes)(value);
        return fn;
    };
    fn.arrows = function(value) {
        if (!arguments.length) return 0, _arrowsJs.arrows;
        (0, _arrowsJs.setArrows)(value);
        return fn;
    };
    return fn;
}
var NODE_DEFAULT_ATTRS = {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    rx: 0,
    ry: 0,
    shape: "rect"
};
var EDGE_DEFAULT_ATTRS = {
    arrowhead: "normal",
    curve: _d3.curveLinear
};
function preProcessGraph(g) {
    g.nodes().forEach(function(v) {
        var node = g.node(v);
        if (!_lodashEs.has(node, "label") && !g.children(v).length) node.label = v;
        if (_lodashEs.has(node, "paddingX")) _lodashEs.defaults(node, {
            paddingLeft: node.paddingX,
            paddingRight: node.paddingX
        });
        if (_lodashEs.has(node, "paddingY")) _lodashEs.defaults(node, {
            paddingTop: node.paddingY,
            paddingBottom: node.paddingY
        });
        if (_lodashEs.has(node, "padding")) _lodashEs.defaults(node, {
            paddingLeft: node.padding,
            paddingRight: node.padding,
            paddingTop: node.padding,
            paddingBottom: node.padding
        });
        _lodashEs.defaults(node, NODE_DEFAULT_ATTRS);
        _lodashEs.each([
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "paddingBottom"
        ], function(k) {
            node[k] = Number(node[k]);
        });
        // Save dimensions for restore during post-processing
        if (_lodashEs.has(node, "width")) node._prevWidth = node.width;
        if (_lodashEs.has(node, "height")) node._prevHeight = node.height;
    });
    g.edges().forEach(function(e) {
        var edge = g.edge(e);
        if (!_lodashEs.has(edge, "label")) edge.label = "";
        _lodashEs.defaults(edge, EDGE_DEFAULT_ATTRS);
    });
}
function postProcessGraph(g) {
    _lodashEs.each(g.nodes(), function(v) {
        var node = g.node(v);
        // Restore original dimensions
        if (_lodashEs.has(node, "_prevWidth")) node.width = node._prevWidth;
        else delete node.width;
        if (_lodashEs.has(node, "_prevHeight")) node.height = node._prevHeight;
        else delete node.height;
        delete node._prevWidth;
        delete node._prevHeight;
    });
}
function createOrSelectGroup(root, name) {
    var selection = root.select("g." + name);
    if (selection.empty()) selection = root.append("g").attr("class", name);
    return selection;
}

},{"d3":"17XFv","lodash-es":"bXNwz","../dagre/index.js":"g6zYa","./arrows.js":"dSPHI","./create-clusters.js":"aYiVI","./create-edge-labels.js":"gGgAr","./create-edge-paths.js":"1auE1","./create-nodes.js":"iCjJt","./position-clusters.js":"9FMX0","./position-edge-labels.js":"ik3EK","./position-nodes.js":"cJ71U","./shapes.js":"6xv0k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSPHI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrows", ()=>arrows);
parcelHelpers.export(exports, "setArrows", ()=>setArrows);
var _utilJs = require("./util.js");
var arrows = {
    normal,
    vee,
    undirected
};
function setArrows(value) {
    arrows = value;
}
function normal(parent, id, edge, type) {
    var marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    var path = marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    _utilJs.applyStyle(path, edge[type + "Style"]);
    if (edge[type + "Class"]) path.attr("class", edge[type + "Class"]);
}
function vee(parent, id, edge, type) {
    var marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    var path = marker.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    _utilJs.applyStyle(path, edge[type + "Style"]);
    if (edge[type + "Class"]) path.attr("class", edge[type + "Class"]);
}
function undirected(parent, id, edge, type) {
    var marker = parent.append("marker").attr("id", id).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto");
    var path = marker.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
    _utilJs.applyStyle(path, edge[type + "Style"]);
    if (edge[type + "Class"]) path.attr("class", edge[type + "Class"]);
}

},{"./util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYiVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createClusters", ()=>createClusters);
parcelHelpers.export(exports, "setCreateClusters", ()=>setCreateClusters);
var _d3 = require("d3");
var _addLabelJs = require("./label/add-label.js");
var _utilJs = require("./util.js");
var createClusters = function(selection, g) {
    var clusters = g.nodes().filter(function(v) {
        return _utilJs.isSubgraph(g, v);
    });
    var svgClusters = selection.selectAll("g.cluster").data(clusters, function(v) {
        return v;
    });
    _utilJs.applyTransition(svgClusters.exit(), g).style("opacity", 0).remove();
    var enterSelection = svgClusters.enter().append("g").attr("class", "cluster").attr("id", function(v) {
        var node = g.node(v);
        return node.id;
    }).style("opacity", 0).each(function(v) {
        var node = g.node(v);
        var thisGroup = _d3.select(this);
        _d3.select(this).append("rect");
        var labelGroup = thisGroup.append("g").attr("class", "label");
        (0, _addLabelJs.addLabel)(labelGroup, node, node.clusterLabelPos);
    });
    svgClusters = svgClusters.merge(enterSelection);
    svgClusters = _utilJs.applyTransition(svgClusters, g).style("opacity", 1);
    svgClusters.selectAll("rect").each(function(c) {
        var node = g.node(c);
        var domCluster = _d3.select(this);
        _utilJs.applyStyle(domCluster, node.style);
    });
    return svgClusters;
};
function setCreateClusters(value) {
    createClusters = value;
}

},{"d3":"17XFv","./label/add-label.js":"lUgpp","./util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lUgpp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addLabel", ()=>addLabel);
var _addHtmlLabelJs = require("./add-html-label.js");
var _addSvgLabelJs = require("./add-svg-label.js");
var _addTextLabelJs = require("./add-text-label.js");
function addLabel(root, node, location) {
    var label = node.label;
    var labelSvg = root.append("g");
    // Allow the label to be a string, a function that returns a DOM element, or
    // a DOM element itself.
    if (node.labelType === "svg") (0, _addSvgLabelJs.addSVGLabel)(labelSvg, node);
    else if (typeof label !== "string" || node.labelType === "html") (0, _addHtmlLabelJs.addHtmlLabel)(labelSvg, node);
    else (0, _addTextLabelJs.addTextLabel)(labelSvg, node);
    var labelBBox = labelSvg.node().getBBox();
    var y;
    switch(location){
        case "top":
            y = -node.height / 2;
            break;
        case "bottom":
            y = node.height / 2 - labelBBox.height;
            break;
        default:
            y = -labelBBox.height / 2;
    }
    labelSvg.attr("transform", "translate(" + -labelBBox.width / 2 + "," + y + ")");
    return labelSvg;
}

},{"./add-html-label.js":"fzbuL","./add-svg-label.js":"cQKmE","./add-text-label.js":"7mSlI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQKmE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addSVGLabel", ()=>addSVGLabel);
var _utilJs = require("../util.js");
function addSVGLabel(root, node) {
    var domNode = root;
    domNode.node().appendChild(node.label);
    _utilJs.applyStyle(domNode, node.labelStyle);
    return domNode;
}

},{"../util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7mSlI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addTextLabel", ()=>addTextLabel);
var _utilJs = require("../util.js");
/*
 * Attaches a text label to the specified root. Handles escape sequences.
 */ function addTextLabel(root, node) {
    var domNode = root.append("text");
    var lines = processEscapeSequences(node.label).split("\n");
    for(var i = 0; i < lines.length; i++)domNode.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(lines[i]);
    _utilJs.applyStyle(domNode, node.labelStyle);
    return domNode;
}
function processEscapeSequences(text) {
    var newText = "";
    var escaped = false;
    var ch;
    for(var i = 0; i < text.length; ++i){
        ch = text[i];
        if (escaped) {
            switch(ch){
                case "n":
                    newText += "\n";
                    break;
                default:
                    newText += ch;
            }
            escaped = false;
        } else if (ch === "\\") escaped = true;
        else newText += ch;
    }
    return newText;
}

},{"../util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gGgAr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEdgeLabels", ()=>createEdgeLabels);
parcelHelpers.export(exports, "setCreateEdgeLabels", ()=>setCreateEdgeLabels);
var _d3 = require("d3");
var _lodashEs = require("lodash-es");
var _addLabelJs = require("./label/add-label.js");
var _utilJs = require("./util.js");
let createEdgeLabels = function(selection, g) {
    var svgEdgeLabels = selection.selectAll("g.edgeLabel").data(g.edges(), function(e) {
        return _utilJs.edgeToId(e);
    }).classed("update", true);
    svgEdgeLabels.exit().remove();
    svgEdgeLabels.enter().append("g").classed("edgeLabel", true).style("opacity", 0);
    svgEdgeLabels = selection.selectAll("g.edgeLabel");
    svgEdgeLabels.each(function(e) {
        var root = _d3.select(this);
        root.select(".label").remove();
        var edge = g.edge(e);
        var label = (0, _addLabelJs.addLabel)(root, g.edge(e), 0).classed("label", true);
        var bbox = label.node().getBBox();
        if (edge.labelId) label.attr("id", edge.labelId);
        if (!_lodashEs.has(edge, "width")) edge.width = bbox.width;
        if (!_lodashEs.has(edge, "height")) edge.height = bbox.height;
    });
    var exitSelection;
    if (svgEdgeLabels.exit) exitSelection = svgEdgeLabels.exit();
    else exitSelection = svgEdgeLabels.selectAll(null); // empty selection
    _utilJs.applyTransition(exitSelection, g).style("opacity", 0).remove();
    return svgEdgeLabels;
};
function setCreateEdgeLabels(value) {
    createEdgeLabels = value;
}

},{"d3":"17XFv","lodash-es":"bXNwz","./label/add-label.js":"lUgpp","./util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1auE1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEdgePaths", ()=>createEdgePaths);
parcelHelpers.export(exports, "setCreateEdgePaths", ()=>setCreateEdgePaths);
var _d3 = require("d3");
var _lodashEs = require("lodash-es");
var _intersectNodeJs = require("./intersect/intersect-node.js");
var _utilJs = require("./util.js");
var createEdgePaths = function(selection, g, arrows) {
    var previousPaths = selection.selectAll("g.edgePath").data(g.edges(), function(e) {
        return _utilJs.edgeToId(e);
    }).classed("update", true);
    var newPaths = enter(previousPaths, g);
    exit(previousPaths, g);
    var svgPaths = previousPaths.merge !== undefined ? previousPaths.merge(newPaths) : previousPaths;
    _utilJs.applyTransition(svgPaths, g).style("opacity", 1);
    // Save DOM element in the path group, and set ID and class
    svgPaths.each(function(e) {
        var domEdge = _d3.select(this);
        var edge = g.edge(e);
        edge.elem = this;
        if (edge.id) domEdge.attr("id", edge.id);
        _utilJs.applyClass(domEdge, edge["class"], (domEdge.classed("update") ? "update " : "") + "edgePath");
    });
    svgPaths.selectAll("path.path").each(function(e) {
        var edge = g.edge(e);
        edge.arrowheadId = _lodashEs.uniqueId("arrowhead");
        var domEdge = _d3.select(this).attr("marker-end", function() {
            return "url(" + makeFragmentRef(location.href, edge.arrowheadId) + ")";
        }).style("fill", "none");
        _utilJs.applyTransition(domEdge, g).attr("d", function(e) {
            return calcPoints(g, e);
        });
        _utilJs.applyStyle(domEdge, edge.style);
    });
    svgPaths.selectAll("defs *").remove();
    svgPaths.selectAll("defs").each(function(e) {
        var edge = g.edge(e);
        var arrowhead = arrows[edge.arrowhead];
        arrowhead(_d3.select(this), edge.arrowheadId, edge, "arrowhead");
    });
    return svgPaths;
};
function setCreateEdgePaths(value) {
    createEdgePaths = value;
}
function makeFragmentRef(url, fragmentId) {
    var baseUrl = url.split("#")[0];
    return baseUrl + "#" + fragmentId;
}
function calcPoints(g, e) {
    var edge = g.edge(e);
    var tail = g.node(e.v);
    var head = g.node(e.w);
    var points = edge.points.slice(1, edge.points.length - 1);
    points.unshift((0, _intersectNodeJs.intersectNode)(tail, points[0]));
    points.push((0, _intersectNodeJs.intersectNode)(head, points[points.length - 1]));
    return createLine(edge, points);
}
function createLine(edge, points) {
    // @ts-expect-error
    var line = (_d3.line || _d3.svg.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    });
    (line.curve || line.interpolate)(edge.curve);
    return line(points);
}
function getCoords(elem) {
    var bbox = elem.getBBox();
    var matrix = elem.ownerSVGElement.getScreenCTM().inverse().multiply(elem.getScreenCTM()).translate(bbox.width / 2, bbox.height / 2);
    return {
        x: matrix.e,
        y: matrix.f
    };
}
function enter(svgPaths, g) {
    var svgPathsEnter = svgPaths.enter().append("g").attr("class", "edgePath").style("opacity", 0);
    svgPathsEnter.append("path").attr("class", "path").attr("d", function(e) {
        var edge = g.edge(e);
        var sourceElem = g.node(e.v).elem;
        var points = _lodashEs.range(edge.points.length).map(function() {
            return getCoords(sourceElem);
        });
        return createLine(edge, points);
    });
    svgPathsEnter.append("defs");
    return svgPathsEnter;
}
function exit(svgPaths, g) {
    var svgPathExit = svgPaths.exit();
    _utilJs.applyTransition(svgPathExit, g).style("opacity", 0).remove();
}

},{"d3":"17XFv","lodash-es":"bXNwz","./intersect/intersect-node.js":"c61EP","./util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c61EP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intersectNode", ()=>intersectNode);
function intersectNode(node, point) {
    return node.intersect(point);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCjJt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNodes", ()=>createNodes);
parcelHelpers.export(exports, "setCreateNodes", ()=>setCreateNodes);
var _d3 = require("d3");
var _lodashEs = require("lodash-es");
var _addLabelJs = require("./label/add-label.js");
var _utilJs = require("./util.js");
var createNodes = function(selection, g, shapes) {
    var simpleNodes = g.nodes().filter(function(v) {
        return !_utilJs.isSubgraph(g, v);
    });
    var svgNodes = selection.selectAll("g.node").data(simpleNodes, function(v) {
        return v;
    }).classed("update", true);
    svgNodes.exit().remove();
    svgNodes.enter().append("g").attr("class", "node").style("opacity", 0);
    svgNodes = selection.selectAll("g.node");
    svgNodes.each(function(v) {
        var node = g.node(v);
        var thisGroup = _d3.select(this);
        _utilJs.applyClass(thisGroup, node["class"], (thisGroup.classed("update") ? "update " : "") + "node");
        thisGroup.select("g.label").remove();
        var labelGroup = thisGroup.append("g").attr("class", "label");
        var labelDom = (0, _addLabelJs.addLabel)(labelGroup, node);
        var shape = shapes[node.shape];
        var bbox = _lodashEs.pick(labelDom.node().getBBox(), "width", "height");
        node.elem = this;
        if (node.id) thisGroup.attr("id", node.id);
        if (node.labelId) labelGroup.attr("id", node.labelId);
        if (_lodashEs.has(node, "width")) bbox.width = node.width;
        if (_lodashEs.has(node, "height")) bbox.height = node.height;
        bbox.width += node.paddingLeft + node.paddingRight;
        bbox.height += node.paddingTop + node.paddingBottom;
        labelGroup.attr("transform", "translate(" + (node.paddingLeft - node.paddingRight) / 2 + "," + (node.paddingTop - node.paddingBottom) / 2 + ")");
        var root = _d3.select(this);
        root.select(".label-container").remove();
        var shapeSvg = shape(root, bbox, node).classed("label-container", true);
        _utilJs.applyStyle(shapeSvg, node.style);
        var shapeBBox = shapeSvg.node().getBBox();
        node.width = shapeBBox.width;
        node.height = shapeBBox.height;
    });
    var exitSelection;
    if (svgNodes.exit) exitSelection = svgNodes.exit();
    else exitSelection = svgNodes.selectAll(null); // empty selection
    _utilJs.applyTransition(exitSelection, g).style("opacity", 0).remove();
    return svgNodes;
};
function setCreateNodes(value) {
    createNodes = value;
}

},{"d3":"17XFv","lodash-es":"bXNwz","./label/add-label.js":"lUgpp","./util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FMX0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "positionClusters", ()=>positionClusters);
var _d3 = require("d3");
var _utilJs = require("./util.js");
function positionClusters(selection, g) {
    var created = selection.filter(function() {
        return !_d3.select(this).classed("update");
    });
    function translate(v) {
        var node = g.node(v);
        return "translate(" + node.x + "," + node.y + ")";
    }
    created.attr("transform", translate);
    _utilJs.applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
    _utilJs.applyTransition(created.selectAll("rect"), g).attr("width", function(v) {
        return g.node(v).width;
    }).attr("height", function(v) {
        return g.node(v).height;
    }).attr("x", function(v) {
        var node = g.node(v);
        return -node.width / 2;
    }).attr("y", function(v) {
        var node = g.node(v);
        return -node.height / 2;
    });
}

},{"d3":"17XFv","./util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ik3EK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "positionEdgeLabels", ()=>positionEdgeLabels);
var _d3 = require("d3");
var _lodashEs = require("lodash-es");
var _utilJs = require("./util.js");
function positionEdgeLabels(selection, g) {
    var created = selection.filter(function() {
        return !_d3.select(this).classed("update");
    });
    function translate(e) {
        var edge = g.edge(e);
        return _lodashEs.has(edge, "x") ? "translate(" + edge.x + "," + edge.y + ")" : "";
    }
    created.attr("transform", translate);
    _utilJs.applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
}

},{"d3":"17XFv","lodash-es":"bXNwz","./util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJ71U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "positionNodes", ()=>positionNodes);
var _d3 = require("d3");
var _utilJs = require("./util.js");
function positionNodes(selection, g) {
    var created = selection.filter(function() {
        return !_d3.select(this).classed("update");
    });
    function translate(v) {
        var node = g.node(v);
        return "translate(" + node.x + "," + node.y + ")";
    }
    created.attr("transform", translate);
    _utilJs.applyTransition(selection, g).style("opacity", 1).attr("transform", translate);
}

},{"d3":"17XFv","./util.js":"gWc1U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xv0k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shapes", ()=>shapes);
parcelHelpers.export(exports, "setShapes", ()=>setShapes);
var _intersectCircleJs = require("./intersect/intersect-circle.js");
var _intersectEllipseJs = require("./intersect/intersect-ellipse.js");
var _intersectPolygonJs = require("./intersect/intersect-polygon.js");
var _intersectRectJs = require("./intersect/intersect-rect.js");
var shapes = {
    rect,
    ellipse,
    circle,
    diamond
};
function setShapes(value) {
    shapes = value;
}
function rect(parent, bbox, node) {
    var shapeSvg = parent.insert("rect", ":first-child").attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("width", bbox.width).attr("height", bbox.height);
    node.intersect = function(point) {
        return (0, _intersectRectJs.intersectRect)(node, point);
    };
    return shapeSvg;
}
function ellipse(parent, bbox, node) {
    var rx = bbox.width / 2;
    var ry = bbox.height / 2;
    var shapeSvg = parent.insert("ellipse", ":first-child").attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("rx", rx).attr("ry", ry);
    node.intersect = function(point) {
        return (0, _intersectEllipseJs.intersectEllipse)(node, rx, ry, point);
    };
    return shapeSvg;
}
function circle(parent, bbox, node) {
    var r = Math.max(bbox.width, bbox.height) / 2;
    var shapeSvg = parent.insert("circle", ":first-child").attr("x", -bbox.width / 2).attr("y", -bbox.height / 2).attr("r", r);
    node.intersect = function(point) {
        return (0, _intersectCircleJs.intersectCircle)(node, r, point);
    };
    return shapeSvg;
}
// Circumscribe an ellipse for the bounding box with a diamond shape. I derived
// the function to calculate the diamond shape from:
// http://mathforum.org/kb/message.jspa?messageID=3750236
function diamond(parent, bbox, node) {
    var w = bbox.width * Math.SQRT2 / 2;
    var h = bbox.height * Math.SQRT2 / 2;
    var points = [
        {
            x: 0,
            y: -h
        },
        {
            x: -w,
            y: 0
        },
        {
            x: 0,
            y: h
        },
        {
            x: w,
            y: 0
        }
    ];
    var shapeSvg = parent.insert("polygon", ":first-child").attr("points", points.map(function(p) {
        return p.x + "," + p.y;
    }).join(" "));
    node.intersect = function(p) {
        return (0, _intersectPolygonJs.intersectPolygon)(node, points, p);
    };
    return shapeSvg;
}

},{"./intersect/intersect-circle.js":"7nahE","./intersect/intersect-ellipse.js":"1Rbvr","./intersect/intersect-polygon.js":"i4WgZ","./intersect/intersect-rect.js":"fVMHZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7nahE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intersectCircle", ()=>intersectCircle);
var _intersectEllipseJs = require("./intersect-ellipse.js");
function intersectCircle(node, rx, point) {
    return (0, _intersectEllipseJs.intersectEllipse)(node, rx, rx, point);
}

},{"./intersect-ellipse.js":"1Rbvr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Rbvr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intersectEllipse", ()=>intersectEllipse);
function intersectEllipse(node, rx, ry, point) {
    // Formulae from: http://mathworld.wolfram.com/Ellipse-LineIntersection.html
    var cx = node.x;
    var cy = node.y;
    var px = cx - point.x;
    var py = cy - point.y;
    var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
    var dx = Math.abs(rx * ry * px / det);
    if (point.x < cx) dx = -dx;
    var dy = Math.abs(rx * ry * py / det);
    if (point.y < cy) dy = -dy;
    return {
        x: cx + dx,
        y: cy + dy
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i4WgZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intersectPolygon", ()=>intersectPolygon);
var _intersectLineJs = require("./intersect-line.js");
/*
 * Returns the point ({x, y}) at which the point argument intersects with the
 * node argument assuming that it has the shape specified by polygon.
 */ function intersectPolygon(node, polyPoints, point) {
    var x1 = node.x;
    var y1 = node.y;
    var intersections = [];
    var minX = Number.POSITIVE_INFINITY;
    var minY = Number.POSITIVE_INFINITY;
    polyPoints.forEach(function(entry) {
        minX = Math.min(minX, entry.x);
        minY = Math.min(minY, entry.y);
    });
    var left = x1 - node.width / 2 - minX;
    var top = y1 - node.height / 2 - minY;
    for(var i = 0; i < polyPoints.length; i++){
        var p1 = polyPoints[i];
        var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
        var intersect = (0, _intersectLineJs.intersectLine)(node, point, {
            x: left + p1.x,
            y: top + p1.y
        }, {
            x: left + p2.x,
            y: top + p2.y
        });
        if (intersect) intersections.push(intersect);
    }
    if (!intersections.length) {
        console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", node);
        return node;
    }
    if (intersections.length > 1) // More intersections, find the one nearest to edge end point
    intersections.sort(function(p, q) {
        var pdx = p.x - point.x;
        var pdy = p.y - point.y;
        var distp = Math.sqrt(pdx * pdx + pdy * pdy);
        var qdx = q.x - point.x;
        var qdy = q.y - point.y;
        var distq = Math.sqrt(qdx * qdx + qdy * qdy);
        return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
    return intersections[0];
}

},{"./intersect-line.js":"45nL2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45nL2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intersectLine", ()=>intersectLine);
/*
 * Returns the point at which two lines, p and q, intersect or returns
 * undefined if they do not intersect.
 */ function intersectLine(p1, p2, q1, q2) {
    // Algorithm from J. Avro, (ed.) Graphics Gems, No 2, Morgan Kaufmann, 1994,
    // p7 and p473.
    var a1, a2, b1, b2, c1, c2;
    var r1, r2, r3, r4;
    var denom, offset, num;
    var x, y;
    // Compute a1, b1, c1, where line joining points 1 and 2 is F(x,y) = a1 x +
    // b1 y + c1 = 0.
    a1 = p2.y - p1.y;
    b1 = p1.x - p2.x;
    c1 = p2.x * p1.y - p1.x * p2.y;
    // Compute r3 and r4.
    r3 = a1 * q1.x + b1 * q1.y + c1;
    r4 = a1 * q2.x + b1 * q2.y + c1;
    // Check signs of r3 and r4. If both point 3 and point 4 lie on
    // same side of line 1, the line segments do not intersect.
    if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) return;
    // Compute a2, b2, c2 where line joining points 3 and 4 is G(x,y) = a2 x + b2 y + c2 = 0
    a2 = q2.y - q1.y;
    b2 = q1.x - q2.x;
    c2 = q2.x * q1.y - q1.x * q2.y;
    // Compute r1 and r2
    r1 = a2 * p1.x + b2 * p1.y + c2;
    r2 = a2 * p2.x + b2 * p2.y + c2;
    // Check signs of r1 and r2. If both point 1 and point 2 lie
    // on same side of second line segment, the line segments do
    // not intersect.
    if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) return;
    // Line segments intersect: compute intersection point.
    denom = a1 * b2 - a2 * b1;
    if (denom === 0) return;
    offset = Math.abs(denom / 2);
    // The denom/2 is to get rounding instead of truncating. It
    // is added or subtracted to the numerator, depending upon the
    // sign of the numerator.
    num = b1 * c2 - b2 * c1;
    x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    num = a2 * c1 - a1 * c2;
    y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
    return {
        x: x,
        y: y
    };
}
function sameSign(r1, r2) {
    return r1 * r2 > 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVMHZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intersectRect", ()=>intersectRect);
function intersectRect(node, point) {
    var x = node.x;
    var y = node.y;
    // Rectangle intersection algorithm from:
    // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
    var dx = point.x - x;
    var dy = point.y - y;
    var w = node.width / 2;
    var h = node.height / 2;
    var sx, sy;
    if (Math.abs(dy) * w > Math.abs(dx) * h) {
        // Intersection is top or bottom of rect.
        if (dy < 0) h = -h;
        sx = dy === 0 ? 0 : h * dx / dy;
        sy = h;
    } else {
        // Intersection is left or right of rect.
        if (dx < 0) w = -w;
        sx = w;
        sy = dx === 0 ? 0 : w * dy / dx;
    }
    return {
        x: x + sx,
        y: y + sy
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adrPX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "node", ()=>_intersectNodeJs);
parcelHelpers.export(exports, "circle", ()=>_intersectCircleJs);
parcelHelpers.export(exports, "ellipse", ()=>_intersectEllipseJs);
parcelHelpers.export(exports, "polygon", ()=>_intersectPolygonJs);
parcelHelpers.export(exports, "rect", ()=>_intersectRectJs);
var _intersectNodeJs = require("./intersect-node.js");
var _intersectCircleJs = require("./intersect-circle.js");
var _intersectEllipseJs = require("./intersect-ellipse.js");
var _intersectPolygonJs = require("./intersect-polygon.js");
var _intersectRectJs = require("./intersect-rect.js");

},{"./intersect-node.js":"c61EP","./intersect-circle.js":"7nahE","./intersect-ellipse.js":"1Rbvr","./intersect-polygon.js":"i4WgZ","./intersect-rect.js":"fVMHZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jv1OR":[function(require,module,exports) {
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

},{"./config-389b86ff.js":"hnpRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iWWer":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>flowStyles);
parcelHelpers.export(exports, "f", ()=>flowRendererV2);
var _indexJs = require("dagre-d3-es/src/graphlib/index.js");
var _d3 = require("d3");
var _flowDb88762A1FJs = require("./flowDb-88762a1f.js");
var _config389B86FfJs = require("./config-389b86ff.js");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
var _indexF9D09Cc9Js = require("./index-f9d09cc9.js");
var _addHtmlLabelJs = require("dagre-d3-es/src/dagre-js/label/add-html-label.js");
var _setupGraphViewboxE35E4124Js = require("./setupGraphViewbox-e35e4124.js");
const conf = {};
const setConf = function(cnf) {
    const keys = Object.keys(cnf);
    for (const key of keys)conf[key] = cnf[key];
};
const addVertices = function(vert, g, svgId, root, doc, diagObj) {
    const svg = root.select(`[id="${svgId}"]`);
    const keys = Object.keys(vert);
    keys.forEach(function(id) {
        const vertex = vert[id];
        let classStr = "default";
        if (vertex.classes.length > 0) classStr = vertex.classes.join(" ");
        const styles = (0, _utilsD5Eeff82Js.m)(vertex.styles);
        let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
        let vertexNode;
        if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
            const node = {
                label: vertexText.replace(/fa[blrs]?:fa-[\w-]+/g, (s)=>`<i class='${s.replace(":", " ")}'></i>`)
            };
            vertexNode = (0, _addHtmlLabelJs.addHtmlLabel)(svg, node).node();
            vertexNode.parentNode.removeChild(vertexNode);
        } else {
            const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
            svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
            const rows = vertexText.split((0, _config389B86FfJs.d).lineBreakRegex);
            for (const row of rows){
                const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
                tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                tspan.setAttribute("dy", "1em");
                tspan.setAttribute("x", "1");
                tspan.textContent = row;
                svgLabel.appendChild(tspan);
            }
            vertexNode = svgLabel;
        }
        let radious = 0;
        let _shape = "";
        switch(vertex.type){
            case "round":
                radious = 5;
                _shape = "rect";
                break;
            case "square":
                _shape = "rect";
                break;
            case "diamond":
                _shape = "question";
                break;
            case "hexagon":
                _shape = "hexagon";
                break;
            case "odd":
                _shape = "rect_left_inv_arrow";
                break;
            case "lean_right":
                _shape = "lean_right";
                break;
            case "lean_left":
                _shape = "lean_left";
                break;
            case "trapezoid":
                _shape = "trapezoid";
                break;
            case "inv_trapezoid":
                _shape = "inv_trapezoid";
                break;
            case "odd_right":
                _shape = "rect_left_inv_arrow";
                break;
            case "circle":
                _shape = "circle";
                break;
            case "ellipse":
                _shape = "ellipse";
                break;
            case "stadium":
                _shape = "stadium";
                break;
            case "subroutine":
                _shape = "subroutine";
                break;
            case "cylinder":
                _shape = "cylinder";
                break;
            case "group":
                _shape = "rect";
                break;
            case "doublecircle":
                _shape = "doublecircle";
                break;
            default:
                _shape = "rect";
        }
        g.setNode(vertex.id, {
            labelStyle: styles.labelStyle,
            shape: _shape,
            labelText: vertexText,
            rx: radious,
            ry: radious,
            class: classStr,
            style: styles.style,
            id: vertex.id,
            link: vertex.link,
            linkTarget: vertex.linkTarget,
            tooltip: diagObj.db.getTooltip(vertex.id) || "",
            domId: diagObj.db.lookUpDomId(vertex.id),
            haveCallback: vertex.haveCallback,
            width: vertex.type === "group" ? 500 : void 0,
            dir: vertex.dir,
            type: vertex.type,
            props: vertex.props,
            padding: (0, _config389B86FfJs.g)().flowchart.padding
        });
        (0, _config389B86FfJs.l).info("setNode", {
            labelStyle: styles.labelStyle,
            shape: _shape,
            labelText: vertexText,
            rx: radious,
            ry: radious,
            class: classStr,
            style: styles.style,
            id: vertex.id,
            domId: diagObj.db.lookUpDomId(vertex.id),
            width: vertex.type === "group" ? 500 : void 0,
            type: vertex.type,
            dir: vertex.dir,
            props: vertex.props,
            padding: (0, _config389B86FfJs.g)().flowchart.padding
        });
    });
};
const addEdges = function(edges, g, diagObj) {
    (0, _config389B86FfJs.l).info("abc78 edges = ", edges);
    let cnt = 0;
    let linkIdCnt = {};
    let defaultStyle;
    let defaultLabelStyle;
    if (edges.defaultStyle !== void 0) {
        const defaultStyles = (0, _utilsD5Eeff82Js.m)(edges.defaultStyle);
        defaultStyle = defaultStyles.style;
        defaultLabelStyle = defaultStyles.labelStyle;
    }
    edges.forEach(function(edge) {
        cnt++;
        var linkIdBase = "L-" + edge.start + "-" + edge.end;
        if (linkIdCnt[linkIdBase] === void 0) {
            linkIdCnt[linkIdBase] = 0;
            (0, _config389B86FfJs.l).info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
        } else {
            linkIdCnt[linkIdBase]++;
            (0, _config389B86FfJs.l).info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
        }
        let linkId = linkIdBase + "-" + linkIdCnt[linkIdBase];
        (0, _config389B86FfJs.l).info("abc78 new link id to be used is", linkIdBase, linkId, linkIdCnt[linkIdBase]);
        var linkNameStart = "LS-" + edge.start;
        var linkNameEnd = "LE-" + edge.end;
        const edgeData = {
            style: "",
            labelStyle: ""
        };
        edgeData.minlen = edge.length || 1;
        if (edge.type === "arrow_open") edgeData.arrowhead = "none";
        else edgeData.arrowhead = "normal";
        edgeData.arrowTypeStart = "arrow_open";
        edgeData.arrowTypeEnd = "arrow_open";
        switch(edge.type){
            case "double_arrow_cross":
                edgeData.arrowTypeStart = "arrow_cross";
            case "arrow_cross":
                edgeData.arrowTypeEnd = "arrow_cross";
                break;
            case "double_arrow_point":
                edgeData.arrowTypeStart = "arrow_point";
            case "arrow_point":
                edgeData.arrowTypeEnd = "arrow_point";
                break;
            case "double_arrow_circle":
                edgeData.arrowTypeStart = "arrow_circle";
            case "arrow_circle":
                edgeData.arrowTypeEnd = "arrow_circle";
                break;
        }
        let style = "";
        let labelStyle = "";
        switch(edge.stroke){
            case "normal":
                style = "fill:none;";
                if (defaultStyle !== void 0) style = defaultStyle;
                if (defaultLabelStyle !== void 0) labelStyle = defaultLabelStyle;
                edgeData.thickness = "normal";
                edgeData.pattern = "solid";
                break;
            case "dotted":
                edgeData.thickness = "normal";
                edgeData.pattern = "dotted";
                edgeData.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
                break;
            case "thick":
                edgeData.thickness = "thick";
                edgeData.pattern = "solid";
                edgeData.style = "stroke-width: 3.5px;fill:none;";
                break;
            case "invisible":
                edgeData.thickness = "invisible";
                edgeData.pattern = "solid";
                edgeData.style = "stroke-width: 0;fill:none;";
                break;
        }
        if (edge.style !== void 0) {
            const styles = (0, _utilsD5Eeff82Js.m)(edge.style);
            style = styles.style;
            labelStyle = styles.labelStyle;
        }
        edgeData.style = edgeData.style += style;
        edgeData.labelStyle = edgeData.labelStyle += labelStyle;
        if (edge.interpolate !== void 0) edgeData.curve = (0, _utilsD5Eeff82Js.n)(edge.interpolate, (0, _d3.curveLinear));
        else if (edges.defaultInterpolate !== void 0) edgeData.curve = (0, _utilsD5Eeff82Js.n)(edges.defaultInterpolate, (0, _d3.curveLinear));
        else edgeData.curve = (0, _utilsD5Eeff82Js.n)(conf.curve, (0, _d3.curveLinear));
        if (edge.text === void 0) {
            if (edge.style !== void 0) edgeData.arrowheadStyle = "fill: #333";
        } else {
            edgeData.arrowheadStyle = "fill: #333";
            edgeData.labelpos = "c";
        }
        edgeData.labelType = "text";
        edgeData.label = edge.text.replace((0, _config389B86FfJs.d).lineBreakRegex, "\n");
        if (edge.style === void 0) edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none;";
        edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
        edgeData.id = linkId;
        edgeData.classes = "flowchart-link " + linkNameStart + " " + linkNameEnd;
        g.setEdge(edge.start, edge.end, edgeData, cnt);
    });
};
const getClasses = function(text, diagObj) {
    (0, _config389B86FfJs.l).info("Extracting classes");
    diagObj.db.clear();
    try {
        diagObj.parse(text);
        return diagObj.db.getClasses();
    } catch (e) {
        return;
    }
};
const draw = function(text, id, _version, diagObj) {
    (0, _config389B86FfJs.l).info("Drawing flowchart");
    diagObj.db.clear();
    (0, _flowDb88762A1FJs.f).setGen("gen-2");
    diagObj.parser.parse(text);
    let dir = diagObj.db.getDirection();
    if (dir === void 0) dir = "TD";
    const { securityLevel , flowchart: conf2  } = (0, _config389B86FfJs.g)();
    const nodeSpacing = conf2.nodeSpacing || 50;
    const rankSpacing = conf2.rankSpacing || 50;
    let sandboxElement;
    if (securityLevel === "sandbox") sandboxElement = (0, _d3.select)("#i" + id);
    const root = securityLevel === "sandbox" ? (0, _d3.select)(sandboxElement.nodes()[0].contentDocument.body) : (0, _d3.select)("body");
    const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
    const g = new _indexJs.Graph({
        multigraph: true,
        compound: true
    }).setGraph({
        rankdir: dir,
        nodesep: nodeSpacing,
        ranksep: rankSpacing,
        marginx: 0,
        marginy: 0
    }).setDefaultEdgeLabel(function() {
        return {};
    });
    let subG;
    const subGraphs = diagObj.db.getSubGraphs();
    (0, _config389B86FfJs.l).info("Subgraphs - ", subGraphs);
    for(let i2 = subGraphs.length - 1; i2 >= 0; i2--){
        subG = subGraphs[i2];
        (0, _config389B86FfJs.l).info("Subgraph - ", subG);
        diagObj.db.addVertex(subG.id, subG.title, "group", void 0, subG.classes, subG.dir);
    }
    const vert = diagObj.db.getVertices();
    const edges = diagObj.db.getEdges();
    (0, _config389B86FfJs.l).info("Edges", edges);
    let i = 0;
    for(i = subGraphs.length - 1; i >= 0; i--){
        subG = subGraphs[i];
        (0, _d3.selectAll)("cluster").append("text");
        for(let j = 0; j < subG.nodes.length; j++){
            (0, _config389B86FfJs.l).info("Setting up subgraphs", subG.nodes[j], subG.id);
            g.setParent(subG.nodes[j], subG.id);
        }
    }
    addVertices(vert, g, id, root, doc, diagObj);
    addEdges(edges, g);
    const svg = root.select(`[id="${id}"]`);
    const element = root.select("#" + id + " g");
    (0, _indexF9D09Cc9Js.r)(element, g, [
        "point",
        "circle",
        "cross"
    ], "flowchart", id);
    (0, _utilsD5Eeff82Js.u).insertTitle(svg, "flowchartTitleText", conf2.titleTopMargin, diagObj.db.getDiagramTitle());
    (0, _setupGraphViewboxE35E4124Js.s)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
    diagObj.db.indexNodes("subGraph" + i);
    if (!conf2.htmlLabels) {
        const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
        for (const label of labels){
            const dim = label.getBBox();
            const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("rx", 0);
            rect.setAttribute("ry", 0);
            rect.setAttribute("width", dim.width);
            rect.setAttribute("height", dim.height);
            label.insertBefore(rect, label.firstChild);
        }
    }
    const keys = Object.keys(vert);
    keys.forEach(function(key) {
        const vertex = vert[key];
        if (vertex.link) {
            const node = (0, _d3.select)("#" + id + ' [id="' + key + '"]');
            if (node) {
                const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
                link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
                link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
                link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
                if (securityLevel === "sandbox") link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
                else if (vertex.linkTarget) link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
                const linkNode = node.insert(function() {
                    return link;
                }, ":first-child");
                const shape = node.select(".label-container");
                if (shape) linkNode.append(function() {
                    return shape.node();
                });
                const label = node.select(".label");
                if (label) linkNode.append(function() {
                    return label.node();
                });
            }
        }
    });
};
const flowRendererV2 = {
    setConf,
    addVertices,
    addEdges,
    getClasses,
    draw
};
const getStyles = (options)=>`.label {
    font-family: ${options.fontFamily};
    color: ${options.nodeTextColor || options.textColor};
  }
  .cluster-label text {
    fill: ${options.titleColor};
  }
  .cluster-label span {
    color: ${options.titleColor};
  }

  .label text,span {
    fill: ${options.nodeTextColor || options.textColor};
    color: ${options.nodeTextColor || options.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${options.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${options.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${options.edgeLabelBackground};
      fill: ${options.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${options.clusterBkg};
    stroke: ${options.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  .cluster span {
    color: ${options.titleColor};
  }
  /* .cluster div {
    color: ${options.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${options.fontFamily};
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }
`;
const flowStyles = getStyles;

},{"dagre-d3-es/src/graphlib/index.js":"2nAwO","d3":"17XFv","./flowDb-88762a1f.js":"fR5JK","./config-389b86ff.js":"hnpRM","./utils-d5eeff82.js":"2zv2d","./index-f9d09cc9.js":"bMWir","dagre-d3-es/src/dagre-js/label/add-html-label.js":"fzbuL","./setupGraphViewbox-e35e4124.js":"jv1OR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3Vzc":[function(require,module,exports) {
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

},{"./config-389b86ff.js":"hnpRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHKQv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "p", ()=>parseMember);
parcelHelpers.export(exports, "s", ()=>svgDraw);
var _d3 = require("d3");
var _utilsD5Eeff82Js = require("./utils-d5eeff82.js");
var _config389B86FfJs = require("./config-389b86ff.js");
let edgeCount = 0;
const drawEdge = function(elem, path, relation, conf, diagObj) {
    const getRelationType = function(type) {
        switch(type){
            case diagObj.db.relationType.AGGREGATION:
                return "aggregation";
            case diagObj.db.relationType.EXTENSION:
                return "extension";
            case diagObj.db.relationType.COMPOSITION:
                return "composition";
            case diagObj.db.relationType.DEPENDENCY:
                return "dependency";
            case diagObj.db.relationType.LOLLIPOP:
                return "lollipop";
        }
    };
    path.points = path.points.filter((p)=>!Number.isNaN(p.y));
    const lineData = path.points;
    const lineFunction = (0, _d3.line)().x(function(d) {
        return d.x;
    }).y(function(d) {
        return d.y;
    }).curve((0, _d3.curveBasis));
    const svgPath = elem.append("path").attr("d", lineFunction(lineData)).attr("id", "edge" + edgeCount).attr("class", "relation");
    let url = "";
    if (conf.arrowMarkerAbsolute) {
        url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        url = url.replace(/\(/g, "\\(");
        url = url.replace(/\)/g, "\\)");
    }
    if (relation.relation.lineType == 1) svgPath.attr("class", "relation dashed-line");
    if (relation.relation.lineType == 10) svgPath.attr("class", "relation dotted-line");
    if (relation.relation.type1 !== "none") svgPath.attr("marker-start", "url(" + url + "#" + getRelationType(relation.relation.type1) + "Start)");
    if (relation.relation.type2 !== "none") svgPath.attr("marker-end", "url(" + url + "#" + getRelationType(relation.relation.type2) + "End)");
    let x, y;
    const l = path.points.length;
    let labelPosition = (0, _utilsD5Eeff82Js.u).calcLabelPosition(path.points);
    x = labelPosition.x;
    y = labelPosition.y;
    let p1_card_x, p1_card_y;
    let p2_card_x, p2_card_y;
    if (l % 2 !== 0 && l > 1) {
        let cardinality_1_point = (0, _utilsD5Eeff82Js.u).calcCardinalityPosition(relation.relation.type1 !== "none", path.points, path.points[0]);
        let cardinality_2_point = (0, _utilsD5Eeff82Js.u).calcCardinalityPosition(relation.relation.type2 !== "none", path.points, path.points[l - 1]);
        (0, _config389B86FfJs.l).debug("cardinality_1_point " + JSON.stringify(cardinality_1_point));
        (0, _config389B86FfJs.l).debug("cardinality_2_point " + JSON.stringify(cardinality_2_point));
        p1_card_x = cardinality_1_point.x;
        p1_card_y = cardinality_1_point.y;
        p2_card_x = cardinality_2_point.x;
        p2_card_y = cardinality_2_point.y;
    }
    if (relation.title !== void 0) {
        const g = elem.append("g").attr("class", "classLabel");
        const label = g.append("text").attr("class", "label").attr("x", x).attr("y", y).attr("fill", "red").attr("text-anchor", "middle").text(relation.title);
        window.label = label;
        const bounds = label.node().getBBox();
        g.insert("rect", ":first-child").attr("class", "box").attr("x", bounds.x - conf.padding / 2).attr("y", bounds.y - conf.padding / 2).attr("width", bounds.width + conf.padding).attr("height", bounds.height + conf.padding);
    }
    (0, _config389B86FfJs.l).info("Rendering relation " + JSON.stringify(relation));
    if (relation.relationTitle1 !== void 0 && relation.relationTitle1 !== "none") {
        const g = elem.append("g").attr("class", "cardinality");
        g.append("text").attr("class", "type1").attr("x", p1_card_x).attr("y", p1_card_y).attr("fill", "black").attr("font-size", "6").text(relation.relationTitle1);
    }
    if (relation.relationTitle2 !== void 0 && relation.relationTitle2 !== "none") {
        const g = elem.append("g").attr("class", "cardinality");
        g.append("text").attr("class", "type2").attr("x", p2_card_x).attr("y", p2_card_y).attr("fill", "black").attr("font-size", "6").text(relation.relationTitle2);
    }
    edgeCount++;
};
const drawClass = function(elem, classDef, conf, diagObj) {
    (0, _config389B86FfJs.l).debug("Rendering class ", classDef, conf);
    const id = classDef.id;
    const classInfo = {
        id,
        label: classDef.id,
        width: 0,
        height: 0
    };
    const g = elem.append("g").attr("id", diagObj.db.lookUpDomId(id)).attr("class", "classGroup");
    let title;
    if (classDef.link) title = g.append("svg:a").attr("xlink:href", classDef.link).attr("target", classDef.linkTarget).append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
    else title = g.append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
    let isFirst = true;
    classDef.annotations.forEach(function(member) {
        const titleText2 = title.append("tspan").text("\xab" + member + "\xbb");
        if (!isFirst) titleText2.attr("dy", conf.textHeight);
        isFirst = false;
    });
    let classTitleString = classDef.id;
    if (classDef.type !== void 0 && classDef.type !== "") classTitleString += "<" + classDef.type + ">";
    const classTitle = title.append("tspan").text(classTitleString).attr("class", "title");
    if (!isFirst) classTitle.attr("dy", conf.textHeight);
    const titleHeight = title.node().getBBox().height;
    const membersLine = g.append("line").attr("x1", 0).attr("y1", conf.padding + titleHeight + conf.dividerMargin / 2).attr("y2", conf.padding + titleHeight + conf.dividerMargin / 2);
    const members = g.append("text").attr("x", conf.padding).attr("y", titleHeight + conf.dividerMargin + conf.textHeight).attr("fill", "white").attr("class", "classText");
    isFirst = true;
    classDef.members.forEach(function(member) {
        addTspan(members, member, isFirst, conf);
        isFirst = false;
    });
    const membersBox = members.node().getBBox();
    const methodsLine = g.append("line").attr("x1", 0).attr("y1", conf.padding + titleHeight + conf.dividerMargin + membersBox.height).attr("y2", conf.padding + titleHeight + conf.dividerMargin + membersBox.height);
    const methods = g.append("text").attr("x", conf.padding).attr("y", titleHeight + 2 * conf.dividerMargin + membersBox.height + conf.textHeight).attr("fill", "white").attr("class", "classText");
    isFirst = true;
    classDef.methods.forEach(function(method) {
        addTspan(methods, method, isFirst, conf);
        isFirst = false;
    });
    const classBox = g.node().getBBox();
    var cssClassStr = " ";
    if (classDef.cssClasses.length > 0) cssClassStr = cssClassStr + classDef.cssClasses.join(" ");
    const rect = g.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", classBox.width + 2 * conf.padding).attr("height", classBox.height + conf.padding + 0.5 * conf.dividerMargin).attr("class", cssClassStr);
    const rectWidth = rect.node().getBBox().width;
    title.node().childNodes.forEach(function(x) {
        x.setAttribute("x", (rectWidth - x.getBBox().width) / 2);
    });
    if (classDef.tooltip) title.insert("title").text(classDef.tooltip);
    membersLine.attr("x2", rectWidth);
    methodsLine.attr("x2", rectWidth);
    classInfo.width = rectWidth;
    classInfo.height = classBox.height + conf.padding + 0.5 * conf.dividerMargin;
    return classInfo;
};
const drawNote = function(elem, note, conf, diagObj) {
    (0, _config389B86FfJs.l).debug("Rendering note ", note, conf);
    const id = note.id;
    const noteInfo = {
        id,
        text: note.text,
        width: 0,
        height: 0
    };
    const g = elem.append("g").attr("id", id).attr("class", "classGroup");
    let text = g.append("text").attr("y", conf.textHeight + conf.padding).attr("x", 0);
    const lines = JSON.parse(`"${note.text}"`).split("\n");
    lines.forEach(function(line2) {
        (0, _config389B86FfJs.l).debug(`Adding line: ${line2}`);
        text.append("tspan").text(line2).attr("class", "title").attr("dy", conf.textHeight);
    });
    const noteBox = g.node().getBBox();
    const rect = g.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", noteBox.width + 2 * conf.padding).attr("height", noteBox.height + lines.length * conf.textHeight + conf.padding + 0.5 * conf.dividerMargin);
    const rectWidth = rect.node().getBBox().width;
    text.node().childNodes.forEach(function(x) {
        x.setAttribute("x", (rectWidth - x.getBBox().width) / 2);
    });
    noteInfo.width = rectWidth;
    noteInfo.height = noteBox.height + lines.length * conf.textHeight + conf.padding + 0.5 * conf.dividerMargin;
    return noteInfo;
};
const parseMember = function(text) {
    const fieldRegEx = /^([#+~-])?(\w+)(~\w+~|\[])?\s+(\w+) *([$*])?$/;
    const methodRegEx = /^([#+|~-])?(\w+) *\( *(.*)\) *([$*])? *(\w*[[\]|~]*\s*\w*~?)$/;
    let fieldMatch = text.match(fieldRegEx);
    let methodMatch = text.match(methodRegEx);
    if (fieldMatch && !methodMatch) return buildFieldDisplay(fieldMatch);
    else if (methodMatch) return buildMethodDisplay(methodMatch);
    else return buildLegacyDisplay(text);
};
const buildFieldDisplay = function(parsedText) {
    let cssStyle = "";
    let displayText = "";
    try {
        let visibility = parsedText[1] ? parsedText[1].trim() : "";
        let fieldType = parsedText[2] ? parsedText[2].trim() : "";
        let genericType = parsedText[3] ? (0, _config389B86FfJs.p)(parsedText[3].trim()) : "";
        let fieldName = parsedText[4] ? parsedText[4].trim() : "";
        let classifier = parsedText[5] ? parsedText[5].trim() : "";
        displayText = visibility + fieldType + genericType + " " + fieldName;
        cssStyle = parseClassifier(classifier);
    } catch (err) {
        displayText = parsedText;
    }
    return {
        displayText,
        cssStyle
    };
};
const buildMethodDisplay = function(parsedText) {
    let cssStyle = "";
    let displayText = "";
    try {
        let visibility = parsedText[1] ? parsedText[1].trim() : "";
        let methodName = parsedText[2] ? parsedText[2].trim() : "";
        let parameters = parsedText[3] ? (0, _config389B86FfJs.p)(parsedText[3].trim()) : "";
        let classifier = parsedText[4] ? parsedText[4].trim() : "";
        let returnType = parsedText[5] ? " : " + (0, _config389B86FfJs.p)(parsedText[5]).trim() : "";
        displayText = visibility + methodName + "(" + parameters + ")" + returnType;
        cssStyle = parseClassifier(classifier);
    } catch (err) {
        displayText = parsedText;
    }
    return {
        displayText,
        cssStyle
    };
};
const buildLegacyDisplay = function(text) {
    let displayText = "";
    let cssStyle = "";
    let returnType = "";
    let methodStart = text.indexOf("(");
    let methodEnd = text.indexOf(")");
    if (methodStart > 1 && methodEnd > methodStart && methodEnd <= text.length) {
        let visibility = "";
        let methodName = "";
        let firstChar = text.substring(0, 1);
        if (firstChar.match(/\w/)) methodName = text.substring(0, methodStart).trim();
        else {
            if (firstChar.match(/[#+~-]/)) visibility = firstChar;
            methodName = text.substring(1, methodStart).trim();
        }
        const parameters = text.substring(methodStart + 1, methodEnd);
        text.substring(methodEnd + 1, 1);
        cssStyle = parseClassifier(text.substring(methodEnd + 1, methodEnd + 2));
        displayText = visibility + methodName + "(" + (0, _config389B86FfJs.p)(parameters.trim()) + ")";
        if (methodEnd < text.length) {
            returnType = text.substring(methodEnd + 2).trim();
            if (returnType !== "") {
                returnType = " : " + (0, _config389B86FfJs.p)(returnType);
                displayText += returnType;
            }
        }
    } else displayText = (0, _config389B86FfJs.p)(text);
    return {
        displayText,
        cssStyle
    };
};
const addTspan = function(textEl, txt, isFirst, conf) {
    let member = parseMember(txt);
    const tSpan = textEl.append("tspan").attr("x", conf.padding).text(member.displayText);
    if (member.cssStyle !== "") tSpan.attr("style", member.cssStyle);
    if (!isFirst) tSpan.attr("dy", conf.textHeight);
};
const parseClassifier = function(classifier) {
    switch(classifier){
        case "*":
            return "font-style:italic;";
        case "$":
            return "text-decoration:underline;";
        default:
            return "";
    }
};
const svgDraw = {
    drawClass,
    drawEdge,
    drawNote,
    parseMember
};

},{"d3":"17XFv","./utils-d5eeff82.js":"2zv2d","./config-389b86ff.js":"hnpRM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["edDu4"], null, "parcelRequire54bf")

//# sourceMappingURL=flowDiagram-42bb1e4d.ef3d5d33.js.map
