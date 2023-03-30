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
})({"kS98H":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f962d12adca97f87";
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

},{}],"2zv2d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "U", ()=>UnknownDiagramError);
parcelHelpers.export(exports, "a", ()=>registerDiagram);
parcelHelpers.export(exports, "b", ()=>getDiagramLoader);
parcelHelpers.export(exports, "c", ()=>directiveSanitizer);
parcelHelpers.export(exports, "d", ()=>detectType);
parcelHelpers.export(exports, "e", ()=>extractFrontMatter);
parcelHelpers.export(exports, "f", ()=>getStyles$1);
parcelHelpers.export(exports, "g", ()=>getDiagram);
parcelHelpers.export(exports, "h", ()=>getErrorMessage);
parcelHelpers.export(exports, "i", ()=>isDetailedError);
parcelHelpers.export(exports, "j", ()=>calculateTextWidth);
parcelHelpers.export(exports, "k", ()=>calculateTextHeight);
parcelHelpers.export(exports, "l", ()=>loadRegisteredDiagrams);
parcelHelpers.export(exports, "m", ()=>getStylesFromArray);
parcelHelpers.export(exports, "n", ()=>interpolateToCurve);
parcelHelpers.export(exports, "o", ()=>random);
parcelHelpers.export(exports, "p", ()=>parseDirective$1);
parcelHelpers.export(exports, "q", ()=>getConfig);
parcelHelpers.export(exports, "r", ()=>registerLazyLoadedDiagrams);
parcelHelpers.export(exports, "s", ()=>setupGraphViewbox);
parcelHelpers.export(exports, "t", ()=>parseFontSize);
parcelHelpers.export(exports, "u", ()=>utils);
parcelHelpers.export(exports, "v", ()=>generateId);
parcelHelpers.export(exports, "w", ()=>wrapLabel);
var _sanitizeUrl = require("@braintree/sanitize-url");
var _d3 = require("d3");
var _config389B86FfJs = require("./config-389b86ff.js");
var _setupGraphViewboxE35E4124Js = require("./setupGraphViewbox-e35e4124.js");
var _commonDb2Ace122BJs = require("./commonDb-2ace122b.js");
var _memoizeJs = require("lodash-es/memoize.js");
var _memoizeJsDefault = parcelHelpers.interopDefault(_memoizeJs);
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */ function isNothing(subject) {
    return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
    return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
    if (Array.isArray(sequence)) return sequence;
    else if (isNothing(sequence)) return [];
    return [
        sequence
    ];
}
function extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
        sourceKeys = Object.keys(source);
        for(index = 0, length = sourceKeys.length; index < length; index += 1){
            key = sourceKeys[index];
            target[key] = source[key];
        }
    }
    return target;
}
function repeat(string, count) {
    var result = "", cycle;
    for(cycle = 0; cycle < count; cycle += 1)result += string;
    return result;
}
function isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
    isNothing: isNothing_1,
    isObject: isObject_1,
    toArray: toArray_1,
    repeat: repeat_1,
    isNegativeZero: isNegativeZero_1,
    extend: extend_1
};
function formatError(exception2, compact) {
    var where = "", message = exception2.reason || "(unknown reason)";
    if (!exception2.mark) return message;
    if (exception2.mark.name) where += 'in "' + exception2.mark.name + '" ';
    where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
    if (!compact && exception2.mark.snippet) where += "\n\n" + exception2.mark.snippet;
    return message + " " + where;
}
function YAMLException$1(reason, mark) {
    Error.call(this);
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = formatError(this, false);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack || "";
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
    return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
    var head = "";
    var tail = "";
    var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
    if (position - lineStart > maxHalfLength) {
        head = " ... ";
        lineStart = position - maxHalfLength + head.length;
    }
    if (lineEnd - position > maxHalfLength) {
        tail = " ...";
        lineEnd = position + maxHalfLength - tail.length;
    }
    return {
        str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
        pos: position - lineStart + head.length
    };
}
function padStart(string, max) {
    return common.repeat(" ", max - string.length) + string;
}
function makeSnippet(mark, options) {
    options = Object.create(options || null);
    if (!mark.buffer) return null;
    if (!options.maxLength) options.maxLength = 79;
    if (typeof options.indent !== "number") options.indent = 1;
    if (typeof options.linesBefore !== "number") options.linesBefore = 3;
    if (typeof options.linesAfter !== "number") options.linesAfter = 2;
    var re = /\r?\n|\r|\0/g;
    var lineStarts = [
        0
    ];
    var lineEnds = [];
    var match;
    var foundLineNo = -1;
    while(match = re.exec(mark.buffer)){
        lineEnds.push(match.index);
        lineStarts.push(match.index + match[0].length);
        if (mark.position <= match.index && foundLineNo < 0) foundLineNo = lineStarts.length - 2;
    }
    if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
    var result = "", i, line;
    var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
    var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
    for(i = 1; i <= options.linesBefore; i++){
        if (foundLineNo - i < 0) break;
        line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
        result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
    }
    line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
    result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
    for(i = 1; i <= options.linesAfter; i++){
        if (foundLineNo + i >= lineEnds.length) break;
        line = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
        result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    }
    return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
];
var YAML_NODE_KINDS = [
    "scalar",
    "sequence",
    "mapping"
];
function compileStyleAliases(map2) {
    var result = {};
    if (map2 !== null) Object.keys(map2).forEach(function(style) {
        map2[style].forEach(function(alias) {
            result[String(alias)] = style;
        });
    });
    return result;
}
function Type$1(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    });
    this.options = options;
    this.tag = tag;
    this.kind = options["kind"] || null;
    this.resolve = options["resolve"] || function() {
        return true;
    };
    this.construct = options["construct"] || function(data) {
        return data;
    };
    this.instanceOf = options["instanceOf"] || null;
    this.predicate = options["predicate"] || null;
    this.represent = options["represent"] || null;
    this.representName = options["representName"] || null;
    this.defaultStyle = options["defaultStyle"] || null;
    this.multi = options["multi"] || false;
    this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
}
var type = Type$1;
function compileList(schema2, name) {
    var result = [];
    schema2[name].forEach(function(currentType) {
        var newIndex = result.length;
        result.forEach(function(previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) newIndex = previousIndex;
        });
        result[newIndex] = currentType;
    });
    return result;
}
function compileMap() {
    var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
            scalar: [],
            sequence: [],
            mapping: [],
            fallback: []
        }
    }, index, length;
    function collectType(type2) {
        if (type2.multi) {
            result.multi[type2.kind].push(type2);
            result.multi["fallback"].push(type2);
        } else result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
    for(index = 0, length = arguments.length; index < length; index += 1)arguments[index].forEach(collectType);
    return result;
}
function Schema$1(definition) {
    return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
    var implicit = [];
    var explicit = [];
    if (definition instanceof type) explicit.push(definition);
    else if (Array.isArray(definition)) explicit = explicit.concat(definition);
    else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
        if (definition.implicit) implicit = implicit.concat(definition.implicit);
        if (definition.explicit) explicit = explicit.concat(definition.explicit);
    } else throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    implicit.forEach(function(type$1) {
        if (!(type$1 instanceof type)) throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        if (type$1.loadKind && type$1.loadKind !== "scalar") throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        if (type$1.multi) throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    });
    explicit.forEach(function(type$1) {
        if (!(type$1 instanceof type)) throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var result = Object.create(Schema$1.prototype);
    result.implicit = (this.implicit || []).concat(implicit);
    result.explicit = (this.explicit || []).concat(explicit);
    result.compiledImplicit = compileList(result, "implicit");
    result.compiledExplicit = compileList(result, "explicit");
    result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
    return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(data) {
        return data !== null ? data : "";
    }
});
var seq = new type("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(data) {
        return data !== null ? data : [];
    }
});
var map = new type("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(data) {
        return data !== null ? data : {};
    }
});
var failsafe = new schema({
    explicit: [
        str,
        seq,
        map
    ]
});
function resolveYamlNull(data) {
    if (data === null) return true;
    var max = data.length;
    return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
    return null;
}
function isNull(object) {
    return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
        canonical: function() {
            return "~";
        },
        lowercase: function() {
            return "null";
        },
        uppercase: function() {
            return "NULL";
        },
        camelcase: function() {
            return "Null";
        },
        empty: function() {
            return "";
        }
    },
    defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
    if (data === null) return false;
    var max = data.length;
    return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
    return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
    return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
        lowercase: function(object) {
            return object ? "true" : "false";
        },
        uppercase: function(object) {
            return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
            return object ? "True" : "False";
        }
    },
    defaultStyle: "lowercase"
});
function isHexCode(c) {
    return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
    return 48 <= c && c <= 55;
}
function isDecCode(c) {
    return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
    if (data === null) return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max) return false;
    ch = data[index];
    if (ch === "-" || ch === "+") ch = data[++index];
    if (ch === "0") {
        if (index + 1 === max) return true;
        ch = data[++index];
        if (ch === "b") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (ch !== "0" && ch !== "1") return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "x") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!isHexCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "o") {
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!isOctCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
    }
    if (ch === "_") return false;
    for(; index < max; index++){
        ch = data[index];
        if (ch === "_") continue;
        if (!isDecCode(data.charCodeAt(index))) return false;
        hasDigits = true;
    }
    if (!hasDigits || ch === "_") return false;
    return true;
}
function constructYamlInteger(data) {
    var value = data, sign = 1, ch;
    if (value.indexOf("_") !== -1) value = value.replace(/_/g, "");
    ch = value[0];
    if (ch === "-" || ch === "+") {
        if (ch === "-") sign = -1;
        value = value.slice(1);
        ch = value[0];
    }
    if (value === "0") return 0;
    if (ch === "0") {
        if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
        if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
    }
    return sign * parseInt(value, 10);
}
function isInteger(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !common.isNegativeZero(object);
}
var int = new type("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
        binary: function(obj) {
            return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
            return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
            return obj.toString(10);
        },
        /* eslint-disable max-len */ hexadecimal: function(obj) {
            return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
    },
    defaultStyle: "decimal",
    styleAliases: {
        binary: [
            2,
            "bin"
        ],
        octal: [
            8,
            "oct"
        ],
        decimal: [
            10,
            "dec"
        ],
        hexadecimal: [
            16,
            "hex"
        ]
    }
});
var YAML_FLOAT_PATTERN = new RegExp(// 2.5e4, 2.5 and integers
"^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(data) {
    if (data === null) return false;
    if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    data[data.length - 1] === "_") return false;
    return true;
}
function constructYamlFloat(data) {
    var value, sign;
    value = data.replace(/_/g, "").toLowerCase();
    sign = value[0] === "-" ? -1 : 1;
    if ("+-".indexOf(value[0]) >= 0) value = value.slice(1);
    if (value === ".inf") return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    else if (value === ".nan") return NaN;
    return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) switch(style){
        case "lowercase":
            return ".nan";
        case "uppercase":
            return ".NAN";
        case "camelcase":
            return ".NaN";
    }
    else if (Number.POSITIVE_INFINITY === object) switch(style){
        case "lowercase":
            return ".inf";
        case "uppercase":
            return ".INF";
        case "camelcase":
            return ".Inf";
    }
    else if (Number.NEGATIVE_INFINITY === object) switch(style){
        case "lowercase":
            return "-.inf";
        case "uppercase":
            return "-.INF";
        case "camelcase":
            return "-.Inf";
    }
    else if (common.isNegativeZero(object)) return "-0.0";
    res = object.toString(10);
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: "lowercase"
});
var json = failsafe.extend({
    implicit: [
        _null,
        bool,
        int,
        float
    ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function resolveYamlTimestamp(data) {
    if (data === null) return false;
    if (YAML_DATE_REGEXP.exec(data) !== null) return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
    return false;
}
function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
    match = YAML_DATE_REGEXP.exec(data);
    if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null) throw new Error("Date resolve error");
    year = +match[1];
    month = +match[2] - 1;
    day = +match[3];
    if (!match[4]) return new Date(Date.UTC(year, month, day));
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
        fraction = match[7].slice(0, 3);
        while(fraction.length < 3)fraction += "0";
        fraction = +fraction;
    }
    if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-") delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta) date.setTime(date.getTime() - delta);
    return date;
}
function representYamlTimestamp(object) {
    return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
    return data === "<<" || data === null;
}
var merge = new type("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
    if (data === null) return false;
    var code, idx, bitlen = 0, max = data.length, map2 = BASE64_MAP;
    for(idx = 0; idx < max; idx++){
        code = map2.indexOf(data.charAt(idx));
        if (code > 64) continue;
        if (code < 0) return false;
        bitlen += 6;
    }
    return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map2 = BASE64_MAP, bits = 0, result = [];
    for(idx = 0; idx < max; idx++){
        if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 255);
            result.push(bits >> 8 & 255);
            result.push(bits & 255);
        }
        bits = bits << 6 | map2.indexOf(input.charAt(idx));
    }
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
    } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
    } else if (tailbits === 12) result.push(bits >> 4 & 255);
    return new Uint8Array(result);
}
function representYamlBinary(object) {
    var result = "", bits = 0, idx, tail, max = object.length, map2 = BASE64_MAP;
    for(idx = 0; idx < max; idx++){
        if (idx % 3 === 0 && idx) {
            result += map2[bits >> 18 & 63];
            result += map2[bits >> 12 & 63];
            result += map2[bits >> 6 & 63];
            result += map2[bits & 63];
        }
        bits = (bits << 8) + object[idx];
    }
    tail = max % 3;
    if (tail === 0) {
        result += map2[bits >> 18 & 63];
        result += map2[bits >> 12 & 63];
        result += map2[bits >> 6 & 63];
        result += map2[bits & 63];
    } else if (tail === 2) {
        result += map2[bits >> 10 & 63];
        result += map2[bits >> 4 & 63];
        result += map2[bits << 2 & 63];
        result += map2[64];
    } else if (tail === 1) {
        result += map2[bits >> 2 & 63];
        result += map2[bits << 4 & 63];
        result += map2[64];
        result += map2[64];
    }
    return result;
}
function isBinary(obj) {
    return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
    if (data === null) return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        pairHasKey = false;
        if (_toString$2.call(pair) !== "[object Object]") return false;
        for(pairKey in pair)if (_hasOwnProperty$3.call(pair, pairKey)) {
            if (!pairHasKey) pairHasKey = true;
            else return false;
        }
        if (!pairHasKey) return false;
        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
    }
    return true;
}
function constructYamlOmap(data) {
    return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
    if (data === null) return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        if (_toString$1.call(pair) !== "[object Object]") return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return true;
}
function constructYamlPairs(data) {
    if (data === null) return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
    if (data === null) return true;
    var key, object = data;
    for(key in object)if (_hasOwnProperty$2.call(object, key)) {
        if (object[key] !== null) return false;
    }
    return true;
}
function constructYamlSet(data) {
    return data !== null ? data : {};
}
var set = new type("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: resolveYamlSet,
    construct: constructYamlSet
});
var _default = core.extend({
    implicit: [
        timestamp,
        merge
    ],
    explicit: [
        binary,
        omap,
        pairs,
        set
    ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
    return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
    return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
    return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
    return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
    return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
    var lc;
    if (48 <= c && c <= 57) return c - 48;
    lc = c | 32;
    if (97 <= lc && lc <= 102) return lc - 97 + 10;
    return -1;
}
function escapedHexLen(c) {
    if (c === 120) return 2;
    if (c === 117) return 4;
    if (c === 85) return 8;
    return 0;
}
function fromDecimalCode(c) {
    if (48 <= c && c <= 57) return c - 48;
    return -1;
}
function simpleEscapeSequence(c) {
    return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1b" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xa0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
    if (c <= 65535) return String.fromCharCode(c);
    return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for(var i = 0; i < 256; i++){
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State$1(input, options) {
    this.input = input;
    this.filename = options["filename"] || null;
    this.schema = options["schema"] || _default;
    this.onWarning = options["onWarning"] || null;
    this.legacy = options["legacy"] || false;
    this.json = options["json"] || false;
    this.listener = options["listener"] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    this.firstTabInLine = -1;
    this.documents = [];
}
function generateError(state, message) {
    var mark = {
        name: state.filename,
        buffer: state.input.slice(0, -1),
        // omit trailing \0
        position: state.position,
        line: state.line,
        column: state.position - state.lineStart
    };
    mark.snippet = snippet(mark);
    return new exception(message, mark);
}
function throwError(state, message) {
    throw generateError(state, message);
}
function throwWarning(state, message) {
    if (state.onWarning) state.onWarning.call(null, generateError(state, message));
}
var directiveHandlers = {
    YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) throwError(state, "duplication of %YAML directive");
        if (args.length !== 1) throwError(state, "YAML directive accepts exactly one argument");
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) throwError(state, "ill-formed argument of the YAML directive");
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) throwError(state, "unacceptable YAML version of the document");
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) throwWarning(state, "unsupported YAML version of the document");
    },
    TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) throwError(state, "TAG directive accepts exactly two arguments");
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        if (_hasOwnProperty$1.call(state.tagMap, handle)) throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        if (!PATTERN_TAG_URI.test(prefix)) throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        try {
            prefix = decodeURIComponent(prefix);
        } catch (err) {
            throwError(state, "tag prefix is malformed: " + prefix);
        }
        state.tagMap[handle] = prefix;
    }
};
function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) for(_position = 0, _length = _result.length; _position < _length; _position += 1){
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) throwError(state, "expected valid JSON character");
        }
        else if (PATTERN_NON_PRINTABLE.test(_result)) throwError(state, "the stream contains non-printable characters");
        state.result += _result;
    }
}
function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!common.isObject(source)) throwError(state, "cannot merge mappings; the provided source object is unacceptable");
    sourceKeys = Object.keys(source);
    for(index = 0, quantity = sourceKeys.length; index < quantity; index += 1){
        key = sourceKeys[index];
        if (!_hasOwnProperty$1.call(destination, key)) {
            destination[key] = source[key];
            overridableKeys[key] = true;
        }
    }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
    var index, quantity;
    if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for(index = 0, quantity = keyNode.length; index < quantity; index += 1){
            if (Array.isArray(keyNode[index])) throwError(state, "nested arrays are not supported inside keys");
            if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") keyNode[index] = "[object Object]";
        }
    }
    if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") keyNode = "[object Object]";
    keyNode = String(keyNode);
    if (_result === null) _result = {};
    if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) for(index = 0, quantity = valueNode.length; index < quantity; index += 1)mergeMappings(state, _result, valueNode[index], overridableKeys);
        else mergeMappings(state, _result, valueNode, overridableKeys);
    } else {
        if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
            state.line = startLine || state.line;
            state.lineStart = startLineStart || state.lineStart;
            state.position = startPos || state.position;
            throwError(state, "duplicated mapping key");
        }
        if (keyNode === "__proto__") Object.defineProperty(_result, keyNode, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: valueNode
        });
        else _result[keyNode] = valueNode;
        delete overridableKeys[keyNode];
    }
    return _result;
}
function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 10) state.position++;
    else if (ch === 13) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 10) state.position++;
    } else throwError(state, "a line break is expected");
    state.line += 1;
    state.lineStart = state.position;
    state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        while(is_WHITE_SPACE(ch)){
            if (ch === 9 && state.firstTabInLine === -1) state.firstTabInLine = state.position;
            ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 35) do ch = state.input.charCodeAt(++state.position);
        while (ch !== 10 && ch !== 13 && ch !== 0);
        if (is_EOL(ch)) {
            readLineBreak(state);
            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;
            while(ch === 32){
                state.lineIndent++;
                ch = state.input.charCodeAt(++state.position);
            }
        } else break;
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) throwWarning(state, "deficient indentation");
    return lineBreaks;
}
function testDocumentSeparator(state) {
    var _position = state.position, ch;
    ch = state.input.charCodeAt(_position);
    if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) return true;
    }
    return false;
}
function writeFoldedLines(state, count) {
    if (count === 1) state.result += " ";
    else if (count > 1) state.result += common.repeat("\n", count - 1);
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) return false;
    if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) return false;
    }
    state.kind = "scalar";
    state.result = "";
    captureStart = captureEnd = state.position;
    hasPendingContent = false;
    while(ch !== 0){
        if (ch === 58) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) break;
        } else if (ch === 35) {
            preceding = state.input.charCodeAt(state.position - 1);
            if (is_WS_OR_EOL(preceding)) break;
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) break;
        else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);
            if (state.lineIndent >= nodeIndent) {
                hasPendingContent = true;
                ch = state.input.charCodeAt(state.position);
                continue;
            } else {
                state.position = captureEnd;
                state.line = _line;
                state.lineStart = _lineStart;
                state.lineIndent = _lineIndent;
                break;
            }
        }
        if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) captureEnd = state.position + 1;
        ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) return true;
    state.kind = _kind;
    state.result = _result;
    return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 39) return false;
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 39) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (ch === 39) {
                captureStart = state.position;
                state.position++;
                captureEnd = state.position;
            } else return true;
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) throwError(state, "unexpected end of the document within a single quoted scalar");
        else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 34) return false;
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 34) {
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;
        } else if (ch === 92) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (is_EOL(ch)) skipSeparationSpace(state, false, nodeIndent);
            else if (ch < 256 && simpleEscapeCheck[ch]) {
                state.result += simpleEscapeMap[ch];
                state.position++;
            } else if ((tmp = escapedHexLen(ch)) > 0) {
                hexLength = tmp;
                hexResult = 0;
                for(; hexLength > 0; hexLength--){
                    ch = state.input.charCodeAt(++state.position);
                    if ((tmp = fromHexCode(ch)) >= 0) hexResult = (hexResult << 4) + tmp;
                    else throwError(state, "expected hexadecimal character");
                }
                state.result += charFromCodepoint(hexResult);
                state.position++;
            } else throwError(state, "unknown escape sequence");
            captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) throwError(state, "unexpected end of the document within a double quoted scalar");
        else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
    var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
    } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
    } else return false;
    if (state.anchor !== null) state.anchorMap[state.anchor] = _result;
    ch = state.input.charCodeAt(++state.position);
    while(ch !== 0){
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? "mapping" : "sequence";
            state.result = _result;
            return true;
        } else if (!readNext) throwError(state, "missed comma between flow collection entries");
        else if (ch === 44) throwError(state, "expected the node content, but found ','");
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following)) {
                isPair = isExplicitPair = true;
                state.position++;
                skipSeparationSpace(state, true, nodeIndent);
            }
        }
        _line = state.line;
        _lineStart = state.lineStart;
        _pos = state.position;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
            isPair = true;
            ch = state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
        }
        if (isMapping) storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
        else if (isPair) _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
        else _result.push(keyNode);
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
        } else readNext = false;
    }
    throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
    var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 124) folding = false;
    else if (ch === 62) folding = true;
    else return false;
    state.kind = "scalar";
    state.result = "";
    while(ch !== 0){
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
            if (CHOMPING_CLIP === chomping) chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
            else throwError(state, "repeat of a chomping mode identifier");
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
            else if (!detectedIndent) {
                textIndent = nodeIndent + tmp - 1;
                detectedIndent = true;
            } else throwError(state, "repeat of an indentation width identifier");
        } else break;
    }
    if (is_WHITE_SPACE(ch)) {
        do ch = state.input.charCodeAt(++state.position);
        while (is_WHITE_SPACE(ch));
        if (ch === 35) do ch = state.input.charCodeAt(++state.position);
        while (!is_EOL(ch) && ch !== 0);
    }
    while(ch !== 0){
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while((!detectedIndent || state.lineIndent < textIndent) && ch === 32){
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) textIndent = state.lineIndent;
        if (is_EOL(ch)) {
            emptyLines++;
            continue;
        }
        if (state.lineIndent < textIndent) {
            if (chomping === CHOMPING_KEEP) state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            else if (chomping === CHOMPING_CLIP) {
                if (didReadContent) state.result += "\n";
            }
            break;
        }
        if (folding) {
            if (is_WHITE_SPACE(ch)) {
                atMoreIndented = true;
                state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            } else if (atMoreIndented) {
                atMoreIndented = false;
                state.result += common.repeat("\n", emptyLines + 1);
            } else if (emptyLines === 0) {
                if (didReadContent) state.result += " ";
            } else state.result += common.repeat("\n", emptyLines);
        } else state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while(!is_EOL(ch) && ch !== 0)ch = state.input.charCodeAt(++state.position);
        captureSegment(state, captureStart, state.position, false);
    }
    return true;
}
function readBlockSequence(state, nodeIndent) {
    var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
    if (state.firstTabInLine !== -1) return false;
    if (state.anchor !== null) state.anchorMap[state.anchor] = _result;
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, "tab characters must not be used in indentation");
        }
        if (ch !== 45) break;
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) break;
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
                _result.push(null);
                ch = state.input.charCodeAt(state.position);
                continue;
            }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) throwError(state, "bad indentation of a sequence entry");
        else if (state.lineIndent < nodeIndent) break;
    }
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
    }
    return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    if (state.firstTabInLine !== -1) return false;
    if (state.anchor !== null) state.anchorMap[state.anchor] = _result;
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (!atExplicitKey && state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, "tab characters must not be used in indentation");
        }
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line;
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
            if (ch === 63) {
                if (atExplicitKey) {
                    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                    keyTag = keyNode = valueNode = null;
                }
                detected = true;
                atExplicitKey = true;
                allowCompact = true;
            } else if (atExplicitKey) {
                atExplicitKey = false;
                allowCompact = true;
            } else throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
            state.position += 1;
            ch = following;
        } else {
            _keyLine = state.line;
            _keyLineStart = state.lineStart;
            _keyPos = state.position;
            if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) break;
            if (state.line === _line) {
                ch = state.input.charCodeAt(state.position);
                while(is_WHITE_SPACE(ch))ch = state.input.charCodeAt(++state.position);
                if (ch === 58) {
                    ch = state.input.charCodeAt(++state.position);
                    if (!is_WS_OR_EOL(ch)) throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
                    if (atExplicitKey) {
                        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                        keyTag = keyNode = valueNode = null;
                    }
                    detected = true;
                    atExplicitKey = false;
                    allowCompact = false;
                    keyTag = state.tag;
                    keyNode = state.result;
                } else if (detected) throwError(state, "can not read an implicit mapping pair; a colon is missed");
                else {
                    state.tag = _tag;
                    state.anchor = _anchor;
                    return true;
                }
            } else if (detected) throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
            else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true;
            }
        }
        if (state.line === _line || state.lineIndent > nodeIndent) {
            if (atExplicitKey) {
                _keyLine = state.line;
                _keyLineStart = state.lineStart;
                _keyPos = state.position;
            }
            if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                if (atExplicitKey) keyNode = state.result;
                else valueNode = state.result;
            }
            if (!atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
                keyTag = keyNode = valueNode = null;
            }
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
        }
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) throwError(state, "bad indentation of a mapping entry");
        else if (state.lineIndent < nodeIndent) break;
    }
    if (atExplicitKey) storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
    }
    return detected;
}
function readTagProperty(state) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 33) return false;
    if (state.tag !== null) throwError(state, "duplication of a tag property");
    ch = state.input.charCodeAt(++state.position);
    if (ch === 60) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
    } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
    } else tagHandle = "!";
    _position = state.position;
    if (isVerbatim) {
        do ch = state.input.charCodeAt(++state.position);
        while (ch !== 0 && ch !== 62);
        if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            ch = state.input.charCodeAt(++state.position);
        } else throwError(state, "unexpected end of the stream within a verbatim tag");
    } else {
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            if (ch === 33) {
                if (!isNamed) {
                    tagHandle = state.input.slice(_position - 1, state.position + 1);
                    if (!PATTERN_TAG_HANDLE.test(tagHandle)) throwError(state, "named tag handle cannot contain such characters");
                    isNamed = true;
                    _position = state.position + 1;
                } else throwError(state, "tag suffix cannot contain exclamation marks");
            }
            ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) throwError(state, "tag suffix cannot contain flow indicator characters");
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) throwError(state, "tag name cannot contain such characters: " + tagName);
    try {
        tagName = decodeURIComponent(tagName);
    } catch (err) {
        throwError(state, "tag name is malformed: " + tagName);
    }
    if (isVerbatim) state.tag = tagName;
    else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) state.tag = state.tagMap[tagHandle] + tagName;
    else if (tagHandle === "!") state.tag = "!" + tagName;
    else if (tagHandle === "!!") state.tag = "tag:yaml.org,2002:" + tagName;
    else throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    return true;
}
function readAnchorProperty(state) {
    var _position, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 38) return false;
    if (state.anchor !== null) throwError(state, "duplication of an anchor property");
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch))ch = state.input.charCodeAt(++state.position);
    if (state.position === _position) throwError(state, "name of an anchor node must contain at least one character");
    state.anchor = state.input.slice(_position, state.position);
    return true;
}
function readAlias(state) {
    var _position, alias, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 42) return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch))ch = state.input.charCodeAt(++state.position);
    if (state.position === _position) throwError(state, "name of an alias node must contain at least one character");
    alias = state.input.slice(_position, state.position);
    if (!_hasOwnProperty$1.call(state.anchorMap, alias)) throwError(state, 'unidentified alias "' + alias + '"');
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
    if (state.listener !== null) state.listener("open", state);
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            if (state.lineIndent > parentIndent) indentStatus = 1;
            else if (state.lineIndent === parentIndent) indentStatus = 0;
            else if (state.lineIndent < parentIndent) indentStatus = -1;
        }
    }
    if (indentStatus === 1) {
        while(readTagProperty(state) || readAnchorProperty(state))if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state.lineIndent > parentIndent) indentStatus = 1;
            else if (state.lineIndent === parentIndent) indentStatus = 0;
            else if (state.lineIndent < parentIndent) indentStatus = -1;
        } else allowBlockCollections = false;
    }
    if (allowBlockCollections) allowBlockCollections = atNewLine || allowCompact;
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) flowIndent = parentIndent;
        else flowIndent = parentIndent + 1;
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
            if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) hasContent = true;
            else {
                if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) hasContent = true;
                else if (readAlias(state)) {
                    hasContent = true;
                    if (state.tag !== null || state.anchor !== null) throwError(state, "alias node should not have any properties");
                } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                    hasContent = true;
                    if (state.tag === null) state.tag = "?";
                }
                if (state.anchor !== null) state.anchorMap[state.anchor] = state.result;
            }
        } else if (indentStatus === 0) hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
    if (state.tag === null) {
        if (state.anchor !== null) state.anchorMap[state.anchor] = state.result;
    } else if (state.tag === "?") {
        if (state.result !== null && state.kind !== "scalar") throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
        for(typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1){
            type2 = state.implicitTypes[typeIndex];
            if (type2.resolve(state.result)) {
                state.result = type2.construct(state.result);
                state.tag = type2.tag;
                if (state.anchor !== null) state.anchorMap[state.anchor] = state.result;
                break;
            }
        }
    } else if (state.tag !== "!") {
        if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) type2 = state.typeMap[state.kind || "fallback"][state.tag];
        else {
            type2 = null;
            typeList = state.typeMap.multi[state.kind || "fallback"];
            for(typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1)if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
                type2 = typeList[typeIndex];
                break;
            }
        }
        if (!type2) throwError(state, "unknown tag !<" + state.tag + ">");
        if (state.result !== null && type2.kind !== state.kind) throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
        if (!type2.resolve(state.result, state.tag)) throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
        else {
            state.result = type2.construct(state.result, state.tag);
            if (state.anchor !== null) state.anchorMap[state.anchor] = state.result;
        }
    }
    if (state.listener !== null) state.listener("close", state);
    return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
    var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = /* @__PURE__ */ Object.create(null);
    state.anchorMap = /* @__PURE__ */ Object.create(null);
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) break;
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while(ch !== 0 && !is_WS_OR_EOL(ch))ch = state.input.charCodeAt(++state.position);
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) throwError(state, "directive name must not be less than one character in length");
        while(ch !== 0){
            while(is_WHITE_SPACE(ch))ch = state.input.charCodeAt(++state.position);
            if (ch === 35) {
                do ch = state.input.charCodeAt(++state.position);
                while (ch !== 0 && !is_EOL(ch));
                break;
            }
            if (is_EOL(ch)) break;
            _position = state.position;
            while(ch !== 0 && !is_WS_OR_EOL(ch))ch = state.input.charCodeAt(++state.position);
            directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0) readLineBreak(state);
        if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) directiveHandlers[directiveName](state, directiveName, directiveArgs);
        else throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) throwError(state, "directives end mark is expected");
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) throwWarning(state, "non-ASCII line breaks are interpreted as content");
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
        }
        return;
    }
    if (state.position < state.length - 1) throwError(state, "end of the stream or a document separator is expected");
    else return;
}
function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) input += "\n";
        if (input.charCodeAt(0) === 65279) input = input.slice(1);
    }
    var state = new State$1(input, options);
    var nullpos = input.indexOf("\0");
    if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
    }
    state.input += "\0";
    while(state.input.charCodeAt(state.position) === 32){
        state.lineIndent += 1;
        state.position += 1;
    }
    while(state.position < state.length - 1)readDocument(state);
    return state.documents;
}
function loadAll$1(input, iterator2, options) {
    if (iterator2 !== null && typeof iterator2 === "object" && typeof options === "undefined") {
        options = iterator2;
        iterator2 = null;
    }
    var documents = loadDocuments(input, options);
    if (typeof iterator2 !== "function") return documents;
    for(var index = 0, length = documents.length; index < length; index += 1)iterator2(documents[index]);
}
function load$1(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) return void 0;
    else if (documents.length === 1) return documents[0];
    throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
    loadAll: loadAll_1,
    load: load_1
};
var FAILSAFE_SCHEMA = failsafe;
var load = loader.load;
const frontMatterRegex = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
function extractFrontMatter(text, db) {
    var _a;
    const matches = text.match(frontMatterRegex);
    if (matches) {
        const parsed = load(matches[1], {
            // To keep things simple, only allow strings, arrays, and plain objects.
            // https://www.yaml.org/spec/1.2/spec.html#id2802346
            schema: FAILSAFE_SCHEMA
        });
        if (parsed == null ? void 0 : parsed.title) (_a = db.setDiagramTitle) == null || _a.call(db, parsed.title);
        return text.slice(matches[0].length);
    } else return text;
}
const themes = {};
const getStyles = (type2, userStyles, options)=>{
    let diagramStyles = "";
    if (type2 in themes && themes[type2]) diagramStyles = themes[type2](options);
    else (0, _config389B86FfJs.l).warn(`No theme found for ${type2}`);
    return ` & {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
    fill: ${options.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${options.errorBkgColor};
  }
  & .error-text {
    fill: ${options.errorTextColor};
    stroke: ${options.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${options.lineColor};
    stroke: ${options.lineColor};
  }
  & .marker.cross {
    stroke: ${options.lineColor};
  }

  & svg {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
  }

  ${diagramStyles}

  ${userStyles}
`;
};
const addStylesForDiagram = (type2, diagramTheme)=>{
    themes[type2] = diagramTheme;
};
const getStyles$1 = getStyles;
let currentDirective = {};
const parseDirective$1 = function(p, statement, context, type2) {
    (0, _config389B86FfJs.l).debug("parseDirective is being called", statement, context, type2);
    try {
        if (statement !== void 0) {
            statement = statement.trim();
            switch(context){
                case "open_directive":
                    currentDirective = {};
                    break;
                case "type_directive":
                    if (!currentDirective) throw new Error("currentDirective is undefined");
                    currentDirective.type = statement.toLowerCase();
                    break;
                case "arg_directive":
                    if (!currentDirective) throw new Error("currentDirective is undefined");
                    currentDirective.args = JSON.parse(statement);
                    break;
                case "close_directive":
                    handleDirective(p, currentDirective, type2);
                    currentDirective = void 0;
                    break;
            }
        }
    } catch (error) {
        (0, _config389B86FfJs.l).error(`Error while rendering sequenceDiagram directive: ${statement} jison context: ${context}`);
        (0, _config389B86FfJs.l).error(error.message);
    }
};
const handleDirective = function(p, directive2, type2) {
    (0, _config389B86FfJs.l).info(`Directive type=${directive2.type} with args:`, directive2.args);
    switch(directive2.type){
        case "init":
        case "initialize":
            [
                "config"
            ].forEach((prop)=>{
                if (directive2.args[prop] !== void 0) {
                    if (type2 === "flowchart-v2") type2 = "flowchart";
                    directive2.args[type2] = directive2.args[prop];
                    delete directive2.args[prop];
                }
            });
            (0, _config389B86FfJs.l).info("sanitize in handleDirective", directive2.args);
            directiveSanitizer(directive2.args);
            (0, _config389B86FfJs.l).info("sanitize in handleDirective (done)", directive2.args);
            (0, _config389B86FfJs.a)(directive2.args);
            break;
        case "wrap":
        case "nowrap":
            if (p && p["setWrap"]) p.setWrap(directive2.type === "wrap");
            break;
        case "themeCss":
            (0, _config389B86FfJs.l).warn("themeCss encountered");
            break;
        default:
            (0, _config389B86FfJs.l).warn(`Unhandled directive: source: '%%{${directive2.type}: ${JSON.stringify(directive2.args ? directive2.args : {})}}%%`, directive2);
            break;
    }
};
const log = (0, _config389B86FfJs.l);
const setLogLevel = (0, _config389B86FfJs.s);
const getConfig = (0, _config389B86FfJs.g);
const sanitizeText = (text)=>(0, _config389B86FfJs.b)(text, getConfig());
const setupGraphViewbox = (0, _setupGraphViewboxE35E4124Js.s);
const getCommonDb = ()=>{
    return 0, _commonDb2Ace122BJs.c;
};
const parseDirective = (p, statement, context, type2)=>parseDirective$1(p, statement, context, type2);
const diagrams = {};
const registerDiagram = (id, diagram, detector)=>{
    if (diagrams[id]) throw new Error(`Diagram ${id} already registered.`);
    diagrams[id] = diagram;
    if (detector) addDetector(id, detector);
    addStylesForDiagram(id, diagram.styles);
    if (diagram.injectUtils) diagram.injectUtils(log, setLogLevel, getConfig, sanitizeText, setupGraphViewbox, getCommonDb(), parseDirective);
};
const getDiagram = (name)=>{
    if (name in diagrams) return diagrams[name];
    throw new Error(`Diagram ${name} not found.`);
};
class UnknownDiagramError extends Error {
    constructor(message){
        super(message);
        this.name = "UnknownDiagramError";
    }
}
const directive$1 = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
const anyComment = /\s*%%.*\n/gm;
const detectors = {};
const detectType = function(text, config) {
    text = text.replace(frontMatterRegex, "").replace(directive$1, "").replace(anyComment, "\n");
    for (const [key, { detector  }] of Object.entries(detectors)){
        const diagram = detector(text, config);
        if (diagram) return key;
    }
    throw new UnknownDiagramError(`No diagram type detected matching given configuration for text: ${text}`);
};
const registerLazyLoadedDiagrams = (...diagrams2)=>{
    for (const { id , detector , loader: loader2  } of diagrams2)addDetector(id, detector, loader2);
};
const loadRegisteredDiagrams = async ()=>{
    (0, _config389B86FfJs.l).debug(`Loading registered diagrams`);
    const results = await Promise.allSettled(Object.entries(detectors).map(async ([key, { detector , loader: loader2  }])=>{
        if (loader2) try {
            getDiagram(key);
        } catch (error) {
            try {
                const { diagram , id  } = await loader2();
                registerDiagram(id, diagram, detector);
            } catch (err) {
                (0, _config389B86FfJs.l).error(`Failed to load external diagram with key ${key}. Removing from detectors.`);
                delete detectors[key];
                throw err;
            }
        }
    }));
    const failed = results.filter((result)=>result.status === "rejected");
    if (failed.length > 0) {
        (0, _config389B86FfJs.l).error(`Failed to load ${failed.length} external diagrams`);
        for (const res of failed)(0, _config389B86FfJs.l).error(res);
        throw new Error(`Failed to load ${failed.length} external diagrams`);
    }
};
const addDetector = (key, detector, loader2)=>{
    if (detectors[key]) (0, _config389B86FfJs.l).error(`Detector with key ${key} already exists`);
    else detectors[key] = {
        detector,
        loader: loader2
    };
    (0, _config389B86FfJs.l).debug(`Detector with key ${key} added${loader2 ? " with loader" : ""}`);
};
const getDiagramLoader = (key)=>{
    return detectors[key].loader;
};
const d3CurveTypes = {
    curveBasis: (0, _d3.curveBasis),
    curveBasisClosed: (0, _d3.curveBasisClosed),
    curveBasisOpen: (0, _d3.curveBasisOpen),
    curveBumpX: (0, _d3.curveBumpX),
    curveBumpY: (0, _d3.curveBumpY),
    curveBundle: (0, _d3.curveBundle),
    curveCardinalClosed: (0, _d3.curveCardinalClosed),
    curveCardinalOpen: (0, _d3.curveCardinalOpen),
    curveCardinal: (0, _d3.curveCardinal),
    curveCatmullRomClosed: (0, _d3.curveCatmullRomClosed),
    curveCatmullRomOpen: (0, _d3.curveCatmullRomOpen),
    curveCatmullRom: (0, _d3.curveCatmullRom),
    curveLinear: (0, _d3.curveLinear),
    curveLinearClosed: (0, _d3.curveLinearClosed),
    curveMonotoneX: (0, _d3.curveMonotoneX),
    curveMonotoneY: (0, _d3.curveMonotoneY),
    curveNatural: (0, _d3.curveNatural),
    curveStep: (0, _d3.curveStep),
    curveStepAfter: (0, _d3.curveStepAfter),
    curveStepBefore: (0, _d3.curveStepBefore)
};
const directive = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
const directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
const detectInit = function(text, config) {
    const inits = detectDirective(text, /(?:init\b)|(?:initialize\b)/);
    let results = {};
    if (Array.isArray(inits)) {
        const args = inits.map((init)=>init.args);
        directiveSanitizer(args);
        results = (0, _config389B86FfJs.c)(results, [
            ...args
        ]);
    } else results = inits.args;
    if (results) {
        let type2 = detectType(text, config);
        [
            "config"
        ].forEach((prop)=>{
            if (results[prop] !== void 0) {
                if (type2 === "flowchart-v2") type2 = "flowchart";
                results[type2] = results[prop];
                delete results[prop];
            }
        });
    }
    return results;
};
const detectDirective = function(text, type2 = null) {
    try {
        const commentWithoutDirectives = new RegExp(`[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
        text = text.trim().replace(commentWithoutDirectives, "").replace(/'/gm, '"');
        (0, _config389B86FfJs.l).debug(`Detecting diagram directive${type2 !== null ? " type:" + type2 : ""} based on the text:${text}`);
        let match;
        const result = [];
        while((match = directive.exec(text)) !== null){
            if (match.index === directive.lastIndex) directive.lastIndex++;
            if (match && !type2 || type2 && match[1] && match[1].match(type2) || type2 && match[2] && match[2].match(type2)) {
                const type22 = match[1] ? match[1] : match[2];
                const args = match[3] ? match[3].trim() : match[4] ? JSON.parse(match[4].trim()) : null;
                result.push({
                    type: type22,
                    args
                });
            }
        }
        if (result.length === 0) result.push({
            type: text,
            args: null
        });
        return result.length === 1 ? result[0] : result;
    } catch (error) {
        (0, _config389B86FfJs.l).error(`ERROR: ${error.message} - Unable to parse directive
      ${type2 !== null ? " type:" + type2 : ""} based on the text:${text}`);
        return {
            type: null,
            args: null
        };
    }
};
const isSubstringInArray = function(str2, arr) {
    for (const [i, element] of arr.entries()){
        if (element.match(str2)) return i;
    }
    return -1;
};
function interpolateToCurve(interpolate, defaultCurve) {
    if (!interpolate) return defaultCurve;
    const curveName = `curve${interpolate.charAt(0).toUpperCase() + interpolate.slice(1)}`;
    return d3CurveTypes[curveName] || defaultCurve;
}
function formatUrl(linkStr, config) {
    const url = linkStr.trim();
    if (url) {
        if (config.securityLevel !== "loose") return (0, _sanitizeUrl.sanitizeUrl)(url);
        return url;
    }
}
const runFunc = (functionName, ...params)=>{
    const arrPaths = functionName.split(".");
    const len = arrPaths.length - 1;
    const fnName = arrPaths[len];
    let obj = window;
    for(let i = 0; i < len; i++){
        obj = obj[arrPaths[i]];
        if (!obj) return;
    }
    obj[fnName](...params);
};
function distance(p1, p2) {
    return p1 && p2 ? Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)) : 0;
}
function traverseEdge(points) {
    let prevPoint;
    let totalDistance = 0;
    points.forEach((point)=>{
        totalDistance += distance(point, prevPoint);
        prevPoint = point;
    });
    let remainingDistance = totalDistance / 2;
    let center = void 0;
    prevPoint = void 0;
    points.forEach((point)=>{
        if (prevPoint && !center) {
            const vectorDistance = distance(point, prevPoint);
            if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
            else {
                const distanceRatio = remainingDistance / vectorDistance;
                if (distanceRatio <= 0) center = prevPoint;
                if (distanceRatio >= 1) center = {
                    x: point.x,
                    y: point.y
                };
                if (distanceRatio > 0 && distanceRatio < 1) center = {
                    x: (1 - distanceRatio) * prevPoint.x + distanceRatio * point.x,
                    y: (1 - distanceRatio) * prevPoint.y + distanceRatio * point.y
                };
            }
        }
        prevPoint = point;
    });
    return center;
}
function calcLabelPosition(points) {
    if (points.length === 1) return points[0];
    return traverseEdge(points);
}
const calcCardinalityPosition = (isRelationTypePresent, points, initialPosition)=>{
    let prevPoint;
    (0, _config389B86FfJs.l).info(`our points ${JSON.stringify(points)}`);
    if (points[0] !== initialPosition) points = points.reverse();
    const distanceToCardinalityPoint = 25;
    let remainingDistance = distanceToCardinalityPoint;
    let center;
    prevPoint = void 0;
    points.forEach((point)=>{
        if (prevPoint && !center) {
            const vectorDistance = distance(point, prevPoint);
            if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
            else {
                const distanceRatio = remainingDistance / vectorDistance;
                if (distanceRatio <= 0) center = prevPoint;
                if (distanceRatio >= 1) center = {
                    x: point.x,
                    y: point.y
                };
                if (distanceRatio > 0 && distanceRatio < 1) center = {
                    x: (1 - distanceRatio) * prevPoint.x + distanceRatio * point.x,
                    y: (1 - distanceRatio) * prevPoint.y + distanceRatio * point.y
                };
            }
        }
        prevPoint = point;
    });
    const d = isRelationTypePresent ? 10 : 5;
    const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
    const cardinalityPosition = {
        x: 0,
        y: 0
    };
    cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
    cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
    return cardinalityPosition;
};
function calcTerminalLabelPosition(terminalMarkerSize, position, _points) {
    let points = JSON.parse(JSON.stringify(_points));
    let prevPoint;
    (0, _config389B86FfJs.l).info("our points", points);
    if (position !== "start_left" && position !== "start_right") points = points.reverse();
    points.forEach((point)=>{
        prevPoint = point;
    });
    const distanceToCardinalityPoint = 25 + terminalMarkerSize;
    let remainingDistance = distanceToCardinalityPoint;
    let center;
    prevPoint = void 0;
    points.forEach((point)=>{
        if (prevPoint && !center) {
            const vectorDistance = distance(point, prevPoint);
            if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
            else {
                const distanceRatio = remainingDistance / vectorDistance;
                if (distanceRatio <= 0) center = prevPoint;
                if (distanceRatio >= 1) center = {
                    x: point.x,
                    y: point.y
                };
                if (distanceRatio > 0 && distanceRatio < 1) center = {
                    x: (1 - distanceRatio) * prevPoint.x + distanceRatio * point.x,
                    y: (1 - distanceRatio) * prevPoint.y + distanceRatio * point.y
                };
            }
        }
        prevPoint = point;
    });
    const d = 10 + terminalMarkerSize * 0.5;
    const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
    const cardinalityPosition = {
        x: 0,
        y: 0
    };
    cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
    cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
    if (position === "start_left") {
        cardinalityPosition.x = Math.sin(angle + Math.PI) * d + (points[0].x + center.x) / 2;
        cardinalityPosition.y = -Math.cos(angle + Math.PI) * d + (points[0].y + center.y) / 2;
    }
    if (position === "end_right") {
        cardinalityPosition.x = Math.sin(angle - Math.PI) * d + (points[0].x + center.x) / 2 - 5;
        cardinalityPosition.y = -Math.cos(angle - Math.PI) * d + (points[0].y + center.y) / 2 - 5;
    }
    if (position === "end_left") {
        cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2 - 5;
        cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2 - 5;
    }
    return cardinalityPosition;
}
function getStylesFromArray(arr) {
    let style = "";
    let labelStyle = "";
    for (const element of arr)if (element !== void 0) {
        if (element.startsWith("color:") || element.startsWith("text-align:")) labelStyle = labelStyle + element + ";";
        else style = style + element + ";";
    }
    return {
        style,
        labelStyle
    };
}
let cnt = 0;
const generateId = ()=>{
    cnt++;
    return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
};
function makeid(length) {
    let result = "";
    const characters = "0123456789abcdef";
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++)result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}
const random = (options)=>{
    return makeid(options.length);
};
const getTextObj = function() {
    return {
        x: 0,
        y: 0,
        fill: void 0,
        anchor: "start",
        style: "#666",
        width: 100,
        height: 100,
        textMargin: 0,
        rx: 0,
        ry: 0,
        valign: void 0
    };
};
const drawSimpleText = function(elem, textData) {
    const nText = textData.text.replace((0, _config389B86FfJs.d).lineBreakRegex, " ");
    const [, _fontSizePx] = parseFontSize(textData.fontSize);
    const textElem = elem.append("text");
    textElem.attr("x", textData.x);
    textElem.attr("y", textData.y);
    textElem.style("text-anchor", textData.anchor);
    textElem.style("font-family", textData.fontFamily);
    textElem.style("font-size", _fontSizePx);
    textElem.style("font-weight", textData.fontWeight);
    textElem.attr("fill", textData.fill);
    if (textData.class !== void 0) textElem.attr("class", textData.class);
    const span = textElem.append("tspan");
    span.attr("x", textData.x + textData.textMargin * 2);
    span.attr("fill", textData.fill);
    span.text(nText);
    return textElem;
};
const wrapLabel = (0, _memoizeJsDefault.default)((label, maxWidth, config)=>{
    if (!label) return label;
    config = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        joinWith: "<br/>"
    }, config);
    if ((0, _config389B86FfJs.d).lineBreakRegex.test(label)) return label;
    const words = label.split(" ");
    const completedLines = [];
    let nextLine = "";
    words.forEach((word, index)=>{
        const wordLength = calculateTextWidth(`${word} `, config);
        const nextLineLength = calculateTextWidth(nextLine, config);
        if (wordLength > maxWidth) {
            const { hyphenatedStrings , remainingWord  } = breakString(word, maxWidth, "-", config);
            completedLines.push(nextLine, ...hyphenatedStrings);
            nextLine = remainingWord;
        } else if (nextLineLength + wordLength >= maxWidth) {
            completedLines.push(nextLine);
            nextLine = word;
        } else nextLine = [
            nextLine,
            word
        ].filter(Boolean).join(" ");
        const currentWord = index + 1;
        const isLastWord = currentWord === words.length;
        if (isLastWord) completedLines.push(nextLine);
    });
    return completedLines.filter((line)=>line !== "").join(config.joinWith);
}, (label, maxWidth, config)=>`${label}${maxWidth}${config.fontSize}${config.fontWeight}${config.fontFamily}${config.joinWith}`);
const breakString = (0, _memoizeJsDefault.default)((word, maxWidth, hyphenCharacter = "-", config)=>{
    config = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        margin: 0
    }, config);
    const characters = [
        ...word
    ];
    const lines = [];
    let currentLine = "";
    characters.forEach((character, index)=>{
        const nextLine = `${currentLine}${character}`;
        const lineWidth = calculateTextWidth(nextLine, config);
        if (lineWidth >= maxWidth) {
            const currentCharacter = index + 1;
            const isLastLine = characters.length === currentCharacter;
            const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
            lines.push(isLastLine ? nextLine : hyphenatedNextLine);
            currentLine = "";
        } else currentLine = nextLine;
    });
    return {
        hyphenatedStrings: lines,
        remainingWord: currentLine
    };
}, (word, maxWidth, hyphenCharacter = "-", config)=>`${word}${maxWidth}${hyphenCharacter}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
function calculateTextHeight(text, config) {
    config = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial",
        margin: 15
    }, config);
    return calculateTextDimensions(text, config).height;
}
function calculateTextWidth(text, config) {
    config = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial"
    }, config);
    return calculateTextDimensions(text, config).width;
}
const calculateTextDimensions = (0, _memoizeJsDefault.default)((text, config)=>{
    config = Object.assign({
        fontSize: 12,
        fontWeight: 400,
        fontFamily: "Arial"
    }, config);
    const { fontSize , fontFamily , fontWeight  } = config;
    if (!text) return {
        width: 0,
        height: 0
    };
    const [, _fontSizePx] = parseFontSize(fontSize);
    const fontFamilies = [
        "sans-serif",
        fontFamily
    ];
    const lines = text.split((0, _config389B86FfJs.d).lineBreakRegex);
    const dims = [];
    const body = (0, _d3.select)("body");
    if (!body.remove) return {
        width: 0,
        height: 0,
        lineHeight: 0
    };
    const g = body.append("svg");
    for (const fontFamily2 of fontFamilies){
        let cheight = 0;
        const dim = {
            width: 0,
            height: 0,
            lineHeight: 0
        };
        for (const line of lines){
            const textObj = getTextObj();
            textObj.text = line;
            const textElem = drawSimpleText(g, textObj).style("font-size", _fontSizePx).style("font-weight", fontWeight).style("font-family", fontFamily2);
            const bBox = (textElem._groups || textElem)[0][0].getBBox();
            dim.width = Math.round(Math.max(dim.width, bBox.width));
            cheight = Math.round(bBox.height);
            dim.height += cheight;
            dim.lineHeight = Math.round(Math.max(dim.lineHeight, cheight));
        }
        dims.push(dim);
    }
    g.remove();
    const index = isNaN(dims[1].height) || isNaN(dims[1].width) || isNaN(dims[1].lineHeight) || dims[0].height > dims[1].height && dims[0].width > dims[1].width && dims[0].lineHeight > dims[1].lineHeight ? 0 : 1;
    return dims[index];
}, (text, config)=>`${text}${config.fontSize}${config.fontWeight}${config.fontFamily}`);
const initIdGenerator = class iterator {
    constructor(deterministic, seed){
        this.deterministic = deterministic;
        this.seed = seed;
        this.count = seed ? seed.length : 0;
    }
    next() {
        if (!this.deterministic) return Date.now();
        return this.count++;
    }
};
let decoder;
const entityDecode = function(html) {
    decoder = decoder || document.createElement("div");
    html = escape(html).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
    decoder.innerHTML = html;
    return unescape(decoder.textContent);
};
const directiveSanitizer = (args)=>{
    (0, _config389B86FfJs.l).debug("directiveSanitizer called with", args);
    if (typeof args === "object") {
        if (args.length) args.forEach((arg)=>directiveSanitizer(arg));
        else Object.keys(args).forEach((key)=>{
            (0, _config389B86FfJs.l).debug("Checking key", key);
            if (key.startsWith("__")) {
                (0, _config389B86FfJs.l).debug("sanitize deleting __ option", key);
                delete args[key];
            }
            if (key.includes("proto")) {
                (0, _config389B86FfJs.l).debug("sanitize deleting proto option", key);
                delete args[key];
            }
            if (key.includes("constr")) {
                (0, _config389B86FfJs.l).debug("sanitize deleting constr option", key);
                delete args[key];
            }
            if (key.includes("themeCSS")) {
                (0, _config389B86FfJs.l).debug("sanitizing themeCss option");
                args[key] = sanitizeCss(args[key]);
            }
            if (key.includes("fontFamily")) {
                (0, _config389B86FfJs.l).debug("sanitizing fontFamily option");
                args[key] = sanitizeCss(args[key]);
            }
            if (key.includes("altFontFamily")) {
                (0, _config389B86FfJs.l).debug("sanitizing altFontFamily option");
                args[key] = sanitizeCss(args[key]);
            }
            if (!(0, _config389B86FfJs.e).includes(key)) {
                (0, _config389B86FfJs.l).debug("sanitize deleting option", key);
                delete args[key];
            } else if (typeof args[key] === "object") {
                (0, _config389B86FfJs.l).debug("sanitize deleting object", key);
                directiveSanitizer(args[key]);
            }
        });
    }
    if (args.themeVariables) {
        const kArr = Object.keys(args.themeVariables);
        for (const k of kArr){
            const val = args.themeVariables[k];
            if (val && val.match && !val.match(/^[\d "#%(),.;A-Za-z]+$/)) args.themeVariables[k] = "";
        }
    }
    (0, _config389B86FfJs.l).debug("After sanitization", args);
};
const sanitizeCss = (str2)=>{
    let startCnt = 0;
    let endCnt = 0;
    for (const element of str2){
        if (startCnt < endCnt) return "{ /* ERROR: Unbalanced CSS */ }";
        if (element === "{") startCnt++;
        else if (element === "}") endCnt++;
    }
    if (startCnt !== endCnt) return "{ /* ERROR: Unbalanced CSS */ }";
    return str2;
};
function isDetailedError(error) {
    return "str" in error;
}
function getErrorMessage(error) {
    if (error instanceof Error) return error.message;
    return String(error);
}
const insertTitle = (parent, cssClass, titleTopMargin, title)=>{
    if (!title) return;
    const bounds = parent.node().getBBox();
    parent.append("text").text(title).attr("x", bounds.x + bounds.width / 2).attr("y", -titleTopMargin).attr("class", cssClass);
};
const parseFontSize = (fontSize)=>{
    if (typeof fontSize === "number") return [
        fontSize,
        fontSize + "px"
    ];
    const fontSizeNumber = parseInt(fontSize, 10);
    if (Number.isNaN(fontSizeNumber)) return [
        void 0,
        void 0
    ];
    else if (fontSize === String(fontSizeNumber)) return [
        fontSizeNumber,
        fontSize + "px"
    ];
    else return [
        fontSizeNumber,
        fontSize
    ];
};
const utils = {
    assignWithDepth: (0, _config389B86FfJs.c),
    wrapLabel,
    calculateTextHeight,
    calculateTextWidth,
    calculateTextDimensions,
    detectInit,
    detectDirective,
    isSubstringInArray,
    interpolateToCurve,
    calcLabelPosition,
    calcCardinalityPosition,
    calcTerminalLabelPosition,
    formatUrl,
    getStylesFromArray,
    generateId,
    random,
    runFunc,
    entityDecode,
    initIdGenerator,
    directiveSanitizer,
    sanitizeCss,
    insertTitle,
    parseFontSize
};

},{"@braintree/sanitize-url":"hrxAd","d3":"17XFv","./config-389b86ff.js":"hnpRM","./setupGraphViewbox-e35e4124.js":"jv1OR","./commonDb-2ace122b.js":"kBdnX","lodash-es/memoize.js":"5zdei","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrxAd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sanitizeUrl = void 0;
var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
var htmlCtrlEntityRegex = /&(newline|tab);/gi;
var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var urlSchemeRegex = /^.+(:|&colon;)/gim;
var relativeFirstCharacters = [
    ".",
    "/"
];
function isRelativeUrlWithoutProtocol(url) {
    return relativeFirstCharacters.indexOf(url[0]) > -1;
}
// adapted from https://stackoverflow.com/a/29824550/2601552
function decodeHtmlCharacters(str) {
    return str.replace(htmlEntitiesRegex, function(match, dec) {
        return String.fromCharCode(dec);
    });
}
function sanitizeUrl(url) {
    var sanitizedUrl = decodeHtmlCharacters(url || "").replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
    if (!sanitizedUrl) return "about:blank";
    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) return sanitizedUrl;
    var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
    if (!urlSchemeParseResults) return sanitizedUrl;
    var urlScheme = urlSchemeParseResults[0];
    if (invalidProtocolRegex.test(urlScheme)) return "about:blank";
    return sanitizedUrl;
}
exports.sanitizeUrl = sanitizeUrl;

},{}],"5zdei":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapCacheJs = require("./_MapCache.js");
var _mapCacheJsDefault = parcelHelpers.interopDefault(_mapCacheJs);
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || (0, _mapCacheJsDefault.default));
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = (0, _mapCacheJsDefault.default);
exports.default = memoize;

},{"./_MapCache.js":"kdqbj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdqbj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapCacheClearJs = require("./_mapCacheClear.js");
var _mapCacheClearJsDefault = parcelHelpers.interopDefault(_mapCacheClearJs);
var _mapCacheDeleteJs = require("./_mapCacheDelete.js");
var _mapCacheDeleteJsDefault = parcelHelpers.interopDefault(_mapCacheDeleteJs);
var _mapCacheGetJs = require("./_mapCacheGet.js");
var _mapCacheGetJsDefault = parcelHelpers.interopDefault(_mapCacheGetJs);
var _mapCacheHasJs = require("./_mapCacheHas.js");
var _mapCacheHasJsDefault = parcelHelpers.interopDefault(_mapCacheHasJs);
var _mapCacheSetJs = require("./_mapCacheSet.js");
var _mapCacheSetJsDefault = parcelHelpers.interopDefault(_mapCacheSetJs);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = (0, _mapCacheClearJsDefault.default);
MapCache.prototype["delete"] = (0, _mapCacheDeleteJsDefault.default);
MapCache.prototype.get = (0, _mapCacheGetJsDefault.default);
MapCache.prototype.has = (0, _mapCacheHasJsDefault.default);
MapCache.prototype.set = (0, _mapCacheSetJsDefault.default);
exports.default = MapCache;

},{"./_mapCacheClear.js":"6PhQB","./_mapCacheDelete.js":"eoP1L","./_mapCacheGet.js":"lbrg6","./_mapCacheHas.js":"lPQeP","./_mapCacheSet.js":"4UIYE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PhQB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hashJs = require("./_Hash.js");
var _hashJsDefault = parcelHelpers.interopDefault(_hashJs);
var _listCacheJs = require("./_ListCache.js");
var _listCacheJsDefault = parcelHelpers.interopDefault(_listCacheJs);
var _mapJs = require("./_Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new (0, _hashJsDefault.default),
        "map": new ((0, _mapJsDefault.default) || (0, _listCacheJsDefault.default)),
        "string": new (0, _hashJsDefault.default)
    };
}
exports.default = mapCacheClear;

},{"./_Hash.js":"1HkPM","./_ListCache.js":"cqhDQ","./_Map.js":"8spnB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1HkPM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hashClearJs = require("./_hashClear.js");
var _hashClearJsDefault = parcelHelpers.interopDefault(_hashClearJs);
var _hashDeleteJs = require("./_hashDelete.js");
var _hashDeleteJsDefault = parcelHelpers.interopDefault(_hashDeleteJs);
var _hashGetJs = require("./_hashGet.js");
var _hashGetJsDefault = parcelHelpers.interopDefault(_hashGetJs);
var _hashHasJs = require("./_hashHas.js");
var _hashHasJsDefault = parcelHelpers.interopDefault(_hashHasJs);
var _hashSetJs = require("./_hashSet.js");
var _hashSetJsDefault = parcelHelpers.interopDefault(_hashSetJs);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = (0, _hashClearJsDefault.default);
Hash.prototype["delete"] = (0, _hashDeleteJsDefault.default);
Hash.prototype.get = (0, _hashGetJsDefault.default);
Hash.prototype.has = (0, _hashHasJsDefault.default);
Hash.prototype.set = (0, _hashSetJsDefault.default);
exports.default = Hash;

},{"./_hashClear.js":"5oLNs","./_hashDelete.js":"3Xo6B","./_hashGet.js":"j4Vuu","./_hashHas.js":"d5QIn","./_hashSet.js":"lQL69","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5oLNs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeCreateJs = require("./_nativeCreate.js");
var _nativeCreateJsDefault = parcelHelpers.interopDefault(_nativeCreateJs);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = (0, _nativeCreateJsDefault.default) ? (0, _nativeCreateJsDefault.default)(null) : {};
    this.size = 0;
}
exports.default = hashClear;

},{"./_nativeCreate.js":"2XXd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XXd9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
/* Built-in method references that are verified to be native. */ var nativeCreate = (0, _getNativeJsDefault.default)(Object, "create");
exports.default = nativeCreate;

},{"./_getNative.js":"bQrQL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQrQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseIsNativeJs = require("./_baseIsNative.js");
var _baseIsNativeJsDefault = parcelHelpers.interopDefault(_baseIsNativeJs);
var _getValueJs = require("./_getValue.js");
var _getValueJsDefault = parcelHelpers.interopDefault(_getValueJs);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = (0, _getValueJsDefault.default)(object, key);
    return (0, _baseIsNativeJsDefault.default)(value) ? value : undefined;
}
exports.default = getNative;

},{"./_baseIsNative.js":"eZuBv","./_getValue.js":"dHb8j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZuBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isFunctionJs = require("./isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isMaskedJs = require("./_isMasked.js");
var _isMaskedJsDefault = parcelHelpers.interopDefault(_isMaskedJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _toSourceJs = require("./_toSource.js");
var _toSourceJsDefault = parcelHelpers.interopDefault(_toSourceJs);
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!(0, _isObjectJsDefault.default)(value) || (0, _isMaskedJsDefault.default)(value)) return false;
    var pattern = (0, _isFunctionJsDefault.default)(value) ? reIsNative : reIsHostCtor;
    return pattern.test((0, _toSourceJsDefault.default)(value));
}
exports.default = baseIsNative;

},{"./isFunction.js":"e5kis","./_isMasked.js":"8rXmg","./isObject.js":"dHhyW","./_toSource.js":"4wd66","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5kis":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseGetTagJs = require("./_baseGetTag.js");
var _baseGetTagJsDefault = parcelHelpers.interopDefault(_baseGetTagJs);
var _isObjectJs = require("./isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/** `Object#toString` result references. */ var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!(0, _isObjectJsDefault.default)(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = (0, _baseGetTagJsDefault.default)(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
exports.default = isFunction;

},{"./_baseGetTag.js":"gVDfP","./isObject.js":"dHhyW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVDfP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
var _getRawTagJs = require("./_getRawTag.js");
var _getRawTagJsDefault = parcelHelpers.interopDefault(_getRawTagJs);
var _objectToStringJs = require("./_objectToString.js");
var _objectToStringJsDefault = parcelHelpers.interopDefault(_objectToStringJs);
/** `Object#toString` result references. */ var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */ var symToStringTag = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTagJsDefault.default)(value) : (0, _objectToStringJsDefault.default)(value);
}
exports.default = baseGetTag;

},{"./_Symbol.js":"jx216","./_getRawTag.js":"ijXom","./_objectToString.js":"fTkTn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jx216":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Built-in value references. */ var Symbol = (0, _rootJsDefault.default).Symbol;
exports.default = Symbol;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yvCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _freeGlobalJs = require("./_freeGlobal.js");
var _freeGlobalJsDefault = parcelHelpers.interopDefault(_freeGlobalJs);
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = (0, _freeGlobalJsDefault.default) || freeSelf || Function("return this")();
exports.default = root;

},{"./_freeGlobal.js":"98hMd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"98hMd":[function(require,module,exports) {
/** Detect free variable `global` from Node.js. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
exports.default = freeGlobal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ijXom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _symbolJs = require("./_Symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = (0, _symbolJsDefault.default) ? (0, _symbolJsDefault.default).toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
exports.default = getRawTag;

},{"./_Symbol.js":"jx216","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTkTn":[function(require,module,exports) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
exports.default = objectToString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHhyW":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
exports.default = isObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8rXmg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _coreJsDataJs = require("./_coreJsData.js");
var _coreJsDataJsDefault = parcelHelpers.interopDefault(_coreJsDataJs);
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec((0, _coreJsDataJsDefault.default) && (0, _coreJsDataJsDefault.default).keys && (0, _coreJsDataJsDefault.default).keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
exports.default = isMasked;

},{"./_coreJsData.js":"jb15d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jb15d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/** Used to detect overreaching core-js shims. */ var coreJsData = (0, _rootJsDefault.default)["__core-js_shared__"];
exports.default = coreJsData;

},{"./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wd66":[function(require,module,exports) {
/** Used for built-in method references. */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
exports.default = toSource;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHb8j":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getValue(object, key) {
    return object == null ? undefined : object[key];
}
exports.default = getValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Xo6B":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
exports.default = hashDelete;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4Vuu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeCreateJs = require("./_nativeCreate.js");
var _nativeCreateJsDefault = parcelHelpers.interopDefault(_nativeCreateJs);
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (0, _nativeCreateJsDefault.default) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
exports.default = hashGet;

},{"./_nativeCreate.js":"2XXd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5QIn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeCreateJs = require("./_nativeCreate.js");
var _nativeCreateJsDefault = parcelHelpers.interopDefault(_nativeCreateJs);
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return (0, _nativeCreateJsDefault.default) ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
exports.default = hashHas;

},{"./_nativeCreate.js":"2XXd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQL69":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeCreateJs = require("./_nativeCreate.js");
var _nativeCreateJsDefault = parcelHelpers.interopDefault(_nativeCreateJs);
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (0, _nativeCreateJsDefault.default) && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
exports.default = hashSet;

},{"./_nativeCreate.js":"2XXd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqhDQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _listCacheClearJs = require("./_listCacheClear.js");
var _listCacheClearJsDefault = parcelHelpers.interopDefault(_listCacheClearJs);
var _listCacheDeleteJs = require("./_listCacheDelete.js");
var _listCacheDeleteJsDefault = parcelHelpers.interopDefault(_listCacheDeleteJs);
var _listCacheGetJs = require("./_listCacheGet.js");
var _listCacheGetJsDefault = parcelHelpers.interopDefault(_listCacheGetJs);
var _listCacheHasJs = require("./_listCacheHas.js");
var _listCacheHasJsDefault = parcelHelpers.interopDefault(_listCacheHasJs);
var _listCacheSetJs = require("./_listCacheSet.js");
var _listCacheSetJsDefault = parcelHelpers.interopDefault(_listCacheSetJs);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = (0, _listCacheClearJsDefault.default);
ListCache.prototype["delete"] = (0, _listCacheDeleteJsDefault.default);
ListCache.prototype.get = (0, _listCacheGetJsDefault.default);
ListCache.prototype.has = (0, _listCacheHasJsDefault.default);
ListCache.prototype.set = (0, _listCacheSetJsDefault.default);
exports.default = ListCache;

},{"./_listCacheClear.js":"bSUq2","./_listCacheDelete.js":"3kM5j","./_listCacheGet.js":"9nv7v","./_listCacheHas.js":"4N5RL","./_listCacheSet.js":"bA8oX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSUq2":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
exports.default = listCacheClear;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kM5j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assocIndexOfJs = require("./_assocIndexOf.js");
var _assocIndexOfJsDefault = parcelHelpers.interopDefault(_assocIndexOfJs);
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = (0, _assocIndexOfJsDefault.default)(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
exports.default = listCacheDelete;

},{"./_assocIndexOf.js":"124Ga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"124Ga":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eqJs = require("./eq.js");
var _eqJsDefault = parcelHelpers.interopDefault(_eqJs);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if ((0, _eqJsDefault.default)(array[length][0], key)) return length;
    }
    return -1;
}
exports.default = assocIndexOf;

},{"./eq.js":"7el3s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7el3s":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function eq(value, other) {
    return value === other || value !== value && other !== other;
}
exports.default = eq;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nv7v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assocIndexOfJs = require("./_assocIndexOf.js");
var _assocIndexOfJsDefault = parcelHelpers.interopDefault(_assocIndexOfJs);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = (0, _assocIndexOfJsDefault.default)(data, key);
    return index < 0 ? undefined : data[index][1];
}
exports.default = listCacheGet;

},{"./_assocIndexOf.js":"124Ga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4N5RL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assocIndexOfJs = require("./_assocIndexOf.js");
var _assocIndexOfJsDefault = parcelHelpers.interopDefault(_assocIndexOfJs);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return (0, _assocIndexOfJsDefault.default)(this.__data__, key) > -1;
}
exports.default = listCacheHas;

},{"./_assocIndexOf.js":"124Ga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bA8oX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assocIndexOfJs = require("./_assocIndexOf.js");
var _assocIndexOfJsDefault = parcelHelpers.interopDefault(_assocIndexOfJs);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = (0, _assocIndexOfJsDefault.default)(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
exports.default = listCacheSet;

},{"./_assocIndexOf.js":"124Ga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8spnB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNativeJs = require("./_getNative.js");
var _getNativeJsDefault = parcelHelpers.interopDefault(_getNativeJs);
var _rootJs = require("./_root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
/* Built-in method references that are verified to be native. */ var Map = (0, _getNativeJsDefault.default)((0, _rootJsDefault.default), "Map");
exports.default = Map;

},{"./_getNative.js":"bQrQL","./_root.js":"8yvCA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoP1L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getMapDataJs = require("./_getMapData.js");
var _getMapDataJsDefault = parcelHelpers.interopDefault(_getMapDataJs);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = (0, _getMapDataJsDefault.default)(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
exports.default = mapCacheDelete;

},{"./_getMapData.js":"3xzxe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xzxe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isKeyableJs = require("./_isKeyable.js");
var _isKeyableJsDefault = parcelHelpers.interopDefault(_isKeyableJs);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return (0, _isKeyableJsDefault.default)(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
exports.default = getMapData;

},{"./_isKeyable.js":"9O1jG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9O1jG":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
exports.default = isKeyable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbrg6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getMapDataJs = require("./_getMapData.js");
var _getMapDataJsDefault = parcelHelpers.interopDefault(_getMapDataJs);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return (0, _getMapDataJsDefault.default)(this, key).get(key);
}
exports.default = mapCacheGet;

},{"./_getMapData.js":"3xzxe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPQeP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getMapDataJs = require("./_getMapData.js");
var _getMapDataJsDefault = parcelHelpers.interopDefault(_getMapDataJs);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return (0, _getMapDataJsDefault.default)(this, key).has(key);
}
exports.default = mapCacheHas;

},{"./_getMapData.js":"3xzxe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UIYE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getMapDataJs = require("./_getMapData.js");
var _getMapDataJsDefault = parcelHelpers.interopDefault(_getMapDataJs);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = (0, _getMapDataJsDefault.default)(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
exports.default = mapCacheSet;

},{"./_getMapData.js":"3xzxe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kS98H"], null, "parcelRequire54bf")

//# sourceMappingURL=c4Diagram-f9e67060.dca97f87.js.map
