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
})({"a2HsV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a88a68fea9744da5";
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

},{}],"bMWir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "r", ()=>render);
var _indexJs = require("dagre-d3-es/src/dagre/index.js");
var _jsonJs = require("dagre-d3-es/src/graphlib/json.js");
var _edges65Da65DcJs = require("./edges-65da65dc.js");
var _config389B86FfJs = require("./config-389b86ff.js");
var _indexJs1 = require("dagre-d3-es/src/graphlib/index.js");
var _d3 = require("d3");
let clusterDb = {};
let descendants = {};
let parents = {};
const clear$1 = ()=>{
    descendants = {};
    parents = {};
    clusterDb = {};
};
const isDescendant = (id, ancenstorId)=>{
    (0, _config389B86FfJs.l).trace("In isDecendant", ancenstorId, " ", id, " = ", descendants[ancenstorId].includes(id));
    if (descendants[ancenstorId].includes(id)) return true;
    return false;
};
const edgeInCluster = (edge, clusterId)=>{
    (0, _config389B86FfJs.l).info("Decendants of ", clusterId, " is ", descendants[clusterId]);
    (0, _config389B86FfJs.l).info("Edge is ", edge);
    if (edge.v === clusterId) return false;
    if (edge.w === clusterId) return false;
    if (!descendants[clusterId]) {
        (0, _config389B86FfJs.l).debug("Tilt, ", clusterId, ",not in decendants");
        return false;
    }
    return descendants[clusterId].includes(edge.v) || isDescendant(edge.v, clusterId) || isDescendant(edge.w, clusterId) || descendants[clusterId].includes(edge.w);
};
const copy = (clusterId, graph, newGraph, rootId)=>{
    (0, _config389B86FfJs.l).warn("Copying children of ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
    const nodes = graph.children(clusterId) || [];
    if (clusterId !== rootId) nodes.push(clusterId);
    (0, _config389B86FfJs.l).warn("Copying (nodes) clusterId", clusterId, "nodes", nodes);
    nodes.forEach((node)=>{
        if (graph.children(node).length > 0) copy(node, graph, newGraph, rootId);
        else {
            const data = graph.node(node);
            (0, _config389B86FfJs.l).info("cp ", node, " to ", rootId, " with parent ", clusterId);
            newGraph.setNode(node, data);
            if (rootId !== graph.parent(node)) {
                (0, _config389B86FfJs.l).warn("Setting parent", node, graph.parent(node));
                newGraph.setParent(node, graph.parent(node));
            }
            if (clusterId !== rootId && node !== clusterId) {
                (0, _config389B86FfJs.l).debug("Setting parent", node, clusterId);
                newGraph.setParent(node, clusterId);
            } else {
                (0, _config389B86FfJs.l).info("In copy ", clusterId, "root", rootId, "data", graph.node(clusterId), rootId);
                (0, _config389B86FfJs.l).debug("Not Setting parent for node=", node, "cluster!==rootId", clusterId !== rootId, "node!==clusterId", node !== clusterId);
            }
            const edges = graph.edges(node);
            (0, _config389B86FfJs.l).debug("Copying Edges", edges);
            edges.forEach((edge)=>{
                (0, _config389B86FfJs.l).info("Edge", edge);
                const data2 = graph.edge(edge.v, edge.w, edge.name);
                (0, _config389B86FfJs.l).info("Edge data", data2, rootId);
                try {
                    if (edgeInCluster(edge, rootId)) {
                        (0, _config389B86FfJs.l).info("Copying as ", edge.v, edge.w, data2, edge.name);
                        newGraph.setEdge(edge.v, edge.w, data2, edge.name);
                        (0, _config389B86FfJs.l).info("newGraph edges ", newGraph.edges(), newGraph.edge(newGraph.edges()[0]));
                    } else (0, _config389B86FfJs.l).info("Skipping copy of edge ", edge.v, "-->", edge.w, " rootId: ", rootId, " clusterId:", clusterId);
                } catch (e) {
                    (0, _config389B86FfJs.l).error(e);
                }
            });
        }
        (0, _config389B86FfJs.l).debug("Removing node", node);
        graph.removeNode(node);
    });
};
const extractDescendants = (id, graph)=>{
    const children = graph.children(id);
    let res = [
        ...children
    ];
    for (const child of children){
        parents[child] = id;
        res = [
            ...res,
            ...extractDescendants(child, graph)
        ];
    }
    return res;
};
const findNonClusterChild = (id, graph)=>{
    (0, _config389B86FfJs.l).trace("Searching", id);
    const children = graph.children(id);
    (0, _config389B86FfJs.l).trace("Searching children of id ", id, children);
    if (children.length < 1) {
        (0, _config389B86FfJs.l).trace("This is a valid node", id);
        return id;
    }
    for (const child of children){
        const _id = findNonClusterChild(child, graph);
        if (_id) {
            (0, _config389B86FfJs.l).trace("Found replacement for", id, " => ", _id);
            return _id;
        }
    }
};
const getAnchorId = (id)=>{
    if (!clusterDb[id]) return id;
    if (!clusterDb[id].externalConnections) return id;
    if (clusterDb[id]) return clusterDb[id].id;
    return id;
};
const adjustClustersAndEdges = (graph, depth)=>{
    if (!graph || depth > 10) {
        (0, _config389B86FfJs.l).debug("Opting out, no graph ");
        return;
    } else (0, _config389B86FfJs.l).debug("Opting in, graph ");
    graph.nodes().forEach(function(id) {
        const children = graph.children(id);
        if (children.length > 0) {
            (0, _config389B86FfJs.l).warn("Cluster identified", id, " Replacement id in edges: ", findNonClusterChild(id, graph));
            descendants[id] = extractDescendants(id, graph);
            clusterDb[id] = {
                id: findNonClusterChild(id, graph),
                clusterData: graph.node(id)
            };
        }
    });
    graph.nodes().forEach(function(id) {
        const children = graph.children(id);
        const edges = graph.edges();
        if (children.length > 0) {
            (0, _config389B86FfJs.l).debug("Cluster identified", id, descendants);
            edges.forEach((edge)=>{
                if (edge.v !== id && edge.w !== id) {
                    const d1 = isDescendant(edge.v, id);
                    const d2 = isDescendant(edge.w, id);
                    if (d1 ^ d2) {
                        (0, _config389B86FfJs.l).warn("Edge: ", edge, " leaves cluster ", id);
                        (0, _config389B86FfJs.l).warn("Decendants of XXX ", id, ": ", descendants[id]);
                        clusterDb[id].externalConnections = true;
                    }
                }
            });
        } else (0, _config389B86FfJs.l).debug("Not a cluster ", id, descendants);
    });
    graph.edges().forEach(function(e) {
        const edge = graph.edge(e);
        (0, _config389B86FfJs.l).warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
        (0, _config389B86FfJs.l).warn("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(graph.edge(e)));
        let v = e.v;
        let w = e.w;
        (0, _config389B86FfJs.l).warn("Fix XXX", clusterDb, "ids:", e.v, e.w, "Translating: ", clusterDb[e.v], " --- ", clusterDb[e.w]);
        if (clusterDb[e.v] && clusterDb[e.w] && clusterDb[e.v] === clusterDb[e.w]) {
            (0, _config389B86FfJs.l).warn("Fixing and trixing link to self - removing XXX", e.v, e.w, e.name);
            (0, _config389B86FfJs.l).warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
            v = getAnchorId(e.v);
            w = getAnchorId(e.w);
            graph.removeEdge(e.v, e.w, e.name);
            const specialId = e.w + "---" + e.v;
            graph.setNode(specialId, {
                domId: specialId,
                id: specialId,
                labelStyle: "",
                labelText: edge.label,
                padding: 0,
                shape: "labelRect",
                style: ""
            });
            const edge1 = JSON.parse(JSON.stringify(edge));
            const edge2 = JSON.parse(JSON.stringify(edge));
            edge1.label = "";
            edge1.arrowTypeEnd = "none";
            edge2.label = "";
            edge1.fromCluster = e.v;
            edge2.toCluster = e.v;
            graph.setEdge(v, specialId, edge1, e.name + "-cyclic-special");
            graph.setEdge(specialId, w, edge2, e.name + "-cyclic-special");
        } else if (clusterDb[e.v] || clusterDb[e.w]) {
            (0, _config389B86FfJs.l).warn("Fixing and trixing - removing XXX", e.v, e.w, e.name);
            v = getAnchorId(e.v);
            w = getAnchorId(e.w);
            graph.removeEdge(e.v, e.w, e.name);
            if (v !== e.v) edge.fromCluster = e.v;
            if (w !== e.w) edge.toCluster = e.w;
            (0, _config389B86FfJs.l).warn("Fix Replacing with XXX", v, w, e.name);
            graph.setEdge(v, w, edge, e.name);
        }
    });
    (0, _config389B86FfJs.l).warn("Adjusted Graph", _jsonJs.write(graph));
    extractor(graph, 0);
    (0, _config389B86FfJs.l).trace(clusterDb);
};
const extractor = (graph, depth)=>{
    (0, _config389B86FfJs.l).warn("extractor - ", depth, _jsonJs.write(graph), graph.children("D"));
    if (depth > 10) {
        (0, _config389B86FfJs.l).error("Bailing out");
        return;
    }
    let nodes = graph.nodes();
    let hasChildren = false;
    for (const node of nodes){
        const children = graph.children(node);
        hasChildren = hasChildren || children.length > 0;
    }
    if (!hasChildren) {
        (0, _config389B86FfJs.l).debug("Done, no node has children", graph.nodes());
        return;
    }
    (0, _config389B86FfJs.l).debug("Nodes = ", nodes, depth);
    for (const node of nodes){
        (0, _config389B86FfJs.l).debug("Extracting node", node, clusterDb, clusterDb[node] && !clusterDb[node].externalConnections, !graph.parent(node), graph.node(node), graph.children("D"), " Depth ", depth);
        if (!clusterDb[node]) (0, _config389B86FfJs.l).debug("Not a cluster", node, depth);
        else if (!clusterDb[node].externalConnections && // !graph.parent(node) &&
        graph.children(node) && graph.children(node).length > 0) {
            (0, _config389B86FfJs.l).warn("Cluster without external connections, without a parent and with children", node, depth);
            const graphSettings = graph.graph();
            let dir = graphSettings.rankdir === "TB" ? "LR" : "TB";
            if (clusterDb[node] && clusterDb[node].clusterData && clusterDb[node].clusterData.dir) {
                dir = clusterDb[node].clusterData.dir;
                (0, _config389B86FfJs.l).warn("Fixing dir", clusterDb[node].clusterData.dir, dir);
            }
            const clusterGraph = new _indexJs1.Graph({
                multigraph: true,
                compound: true
            }).setGraph({
                rankdir: dir,
                // Todo: set proper spacing
                nodesep: 50,
                ranksep: 50,
                marginx: 8,
                marginy: 8
            }).setDefaultEdgeLabel(function() {
                return {};
            });
            (0, _config389B86FfJs.l).warn("Old graph before copy", _jsonJs.write(graph));
            copy(node, graph, clusterGraph, node);
            graph.setNode(node, {
                clusterNode: true,
                id: node,
                clusterData: clusterDb[node].clusterData,
                labelText: clusterDb[node].labelText,
                graph: clusterGraph
            });
            (0, _config389B86FfJs.l).warn("New graph after copy node: (", node, ")", _jsonJs.write(clusterGraph));
            (0, _config389B86FfJs.l).debug("Old graph after copy", _jsonJs.write(graph));
        } else {
            (0, _config389B86FfJs.l).warn("Cluster ** ", node, " **not meeting the criteria !externalConnections:", !clusterDb[node].externalConnections, " no parent: ", !graph.parent(node), " children ", graph.children(node) && graph.children(node).length > 0, graph.children("D"), depth);
            (0, _config389B86FfJs.l).debug(clusterDb);
        }
    }
    nodes = graph.nodes();
    (0, _config389B86FfJs.l).warn("New list of nodes", nodes);
    for (const node of nodes){
        const data = graph.node(node);
        (0, _config389B86FfJs.l).warn(" Now next level", node, data);
        if (data.clusterNode) extractor(data.graph, depth + 1);
    }
};
const sorter = (graph, nodes)=>{
    if (nodes.length === 0) return [];
    let result = Object.assign(nodes);
    nodes.forEach((node)=>{
        const children = graph.children(node);
        const sorted = sorter(graph, children);
        result = [
            ...result,
            ...sorted
        ];
    });
    return result;
};
const sortNodesByHierarchy = (graph)=>sorter(graph, graph.children());
const rect = (parent, node)=>{
    (0, _config389B86FfJs.l).trace("Creating subgraph rect for ", node.id, node);
    const shapeSvg = parent.insert("g").attr("class", "cluster" + (node.class ? " " + node.class : "")).attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const label = shapeSvg.insert("g").attr("class", "cluster-label");
    const text = label.node().appendChild((0, _edges65Da65DcJs.c)(node.labelText, node.labelStyle, void 0, true));
    let bbox = text.getBBox();
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        const div = text.children[0];
        const dv = (0, _d3.select)(text);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    const width = node.width <= bbox.width + padding ? bbox.width + padding : node.width;
    if (node.width <= bbox.width + padding) node.diff = (bbox.width - node.width) / 2 - node.padding / 2;
    else node.diff = -node.padding / 2;
    (0, _config389B86FfJs.l).trace("Data ", node, JSON.stringify(node));
    rect2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - width / 2).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width).attr("height", node.height + padding);
    label.attr("transform", // This puts the labal on top of the box instead of inside it
    // 'translate(' + (node.x - bbox.width / 2) + ', ' + (node.y - node.height / 2 - bbox.height) + ')'
    "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2) + ")");
    const rectBox = rect2.node().getBBox();
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.intersect = function(point) {
        return (0, _edges65Da65DcJs.i)(node, point);
    };
    return shapeSvg;
};
const noteGroup = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", "note-cluster").attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", node.width + padding).attr("height", node.height + padding).attr("fill", "none");
    const rectBox = rect2.node().getBBox();
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.intersect = function(point) {
        return (0, _edges65Da65DcJs.i)(node, point);
    };
    return shapeSvg;
};
const roundedWithTitle = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const label = shapeSvg.insert("g").attr("class", "cluster-label");
    const innerRect = shapeSvg.append("rect");
    const text = label.node().appendChild((0, _edges65Da65DcJs.c)(node.labelText, node.labelStyle, void 0, true));
    let bbox = text.getBBox();
    if ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels)) {
        const div = text.children[0];
        const dv = (0, _d3.select)(text);
        bbox = div.getBoundingClientRect();
        dv.attr("width", bbox.width);
        dv.attr("height", bbox.height);
    }
    bbox = text.getBBox();
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    const width = node.width <= bbox.width + node.padding ? bbox.width + node.padding : node.width;
    if (node.width <= bbox.width + node.padding) node.diff = (bbox.width + node.padding * 0 - node.width) / 2;
    else node.diff = -node.padding / 2;
    rect2.attr("class", "outer").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding).attr("width", width + padding).attr("height", node.height + padding);
    innerRect.attr("class", "inner").attr("x", node.x - width / 2 - halfPadding).attr("y", node.y - node.height / 2 - halfPadding + bbox.height - 1).attr("width", width + padding).attr("height", node.height + padding - bbox.height - 3);
    label.attr("transform", "translate(" + (node.x - bbox.width / 2) + ", " + (node.y - node.height / 2 - node.padding / 3 + ((0, _config389B86FfJs.j)((0, _config389B86FfJs.g)().flowchart.htmlLabels) ? 5 : 3)) + ")");
    const rectBox = rect2.node().getBBox();
    node.height = rectBox.height;
    node.intersect = function(point) {
        return (0, _edges65Da65DcJs.i)(node, point);
    };
    return shapeSvg;
};
const divider = (parent, node)=>{
    const shapeSvg = parent.insert("g").attr("class", node.classes).attr("id", node.id);
    const rect2 = shapeSvg.insert("rect", ":first-child");
    const padding = 0 * node.padding;
    const halfPadding = padding / 2;
    rect2.attr("class", "divider").attr("x", node.x - node.width / 2 - halfPadding).attr("y", node.y - node.height / 2).attr("width", node.width + padding).attr("height", node.height + padding);
    const rectBox = rect2.node().getBBox();
    node.width = rectBox.width;
    node.height = rectBox.height;
    node.diff = -node.padding / 2;
    node.intersect = function(point) {
        return (0, _edges65Da65DcJs.i)(node, point);
    };
    return shapeSvg;
};
const shapes = {
    rect,
    roundedWithTitle,
    noteGroup,
    divider
};
let clusterElems = {};
const insertCluster = (elem, node)=>{
    (0, _config389B86FfJs.l).trace("Inserting cluster");
    const shape = node.shape || "rect";
    clusterElems[node.id] = shapes[shape](elem, node);
};
const clear = ()=>{
    clusterElems = {};
};
const recursiveRender = (_elem, graph, diagramtype, parentCluster)=>{
    (0, _config389B86FfJs.l).info("Graph in recursive render: XXX", _jsonJs.write(graph), parentCluster);
    const dir = graph.graph().rankdir;
    (0, _config389B86FfJs.l).trace("Dir in recursive render - dir:", dir);
    const elem = _elem.insert("g").attr("class", "root");
    if (!graph.nodes()) (0, _config389B86FfJs.l).info("No nodes found for", graph);
    else (0, _config389B86FfJs.l).info("Recursive render XXX", graph.nodes());
    if (graph.edges().length > 0) (0, _config389B86FfJs.l).trace("Recursive edges", graph.edge(graph.edges()[0]));
    const clusters = elem.insert("g").attr("class", "clusters");
    const edgePaths = elem.insert("g").attr("class", "edgePaths");
    const edgeLabels = elem.insert("g").attr("class", "edgeLabels");
    const nodes = elem.insert("g").attr("class", "nodes");
    graph.nodes().forEach(function(v) {
        const node = graph.node(v);
        if (parentCluster !== void 0) {
            const data = JSON.parse(JSON.stringify(parentCluster.clusterData));
            (0, _config389B86FfJs.l).info("Setting data for cluster XXX (", v, ") ", data, parentCluster);
            graph.setNode(parentCluster.id, data);
            if (!graph.parent(v)) {
                (0, _config389B86FfJs.l).trace("Setting parent", v, parentCluster.id);
                graph.setParent(v, parentCluster.id, data);
            }
        }
        (0, _config389B86FfJs.l).info("(Insert) Node XXX" + v + ": " + JSON.stringify(graph.node(v)));
        if (node && node.clusterNode) {
            (0, _config389B86FfJs.l).info("Cluster identified", v, node.width, graph.node(v));
            const o = recursiveRender(nodes, node.graph, diagramtype, graph.node(v));
            const newEl = o.elem;
            (0, _edges65Da65DcJs.u)(node, newEl);
            node.diff = o.diff || 0;
            (0, _config389B86FfJs.l).info("Node bounds (abc123)", v, node, node.width, node.x, node.y);
            (0, _edges65Da65DcJs.s)(newEl, node);
            (0, _config389B86FfJs.l).warn("Recursive render complete ", newEl, node);
        } else if (graph.children(v).length > 0) {
            (0, _config389B86FfJs.l).info("Cluster - the non recursive path XXX", v, node.id, node, graph);
            (0, _config389B86FfJs.l).info(findNonClusterChild(node.id, graph));
            clusterDb[node.id] = {
                id: findNonClusterChild(node.id, graph),
                node
            };
        } else {
            (0, _config389B86FfJs.l).info("Node - the non recursive path", v, node.id, node);
            (0, _edges65Da65DcJs.e)(nodes, graph.node(v), dir);
        }
    });
    graph.edges().forEach(function(e) {
        const edge = graph.edge(e.v, e.w, e.name);
        (0, _config389B86FfJs.l).info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
        (0, _config389B86FfJs.l).info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(graph.edge(e)));
        (0, _config389B86FfJs.l).info("Fix", clusterDb, "ids:", e.v, e.w, "Translateing: ", clusterDb[e.v], clusterDb[e.w]);
        (0, _edges65Da65DcJs.f)(edgeLabels, edge);
    });
    graph.edges().forEach(function(e) {
        (0, _config389B86FfJs.l).info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e));
    });
    (0, _config389B86FfJs.l).info("#############################################");
    (0, _config389B86FfJs.l).info("###                Layout                 ###");
    (0, _config389B86FfJs.l).info("#############################################");
    (0, _config389B86FfJs.l).info(graph);
    (0, _indexJs.layout)(graph);
    (0, _config389B86FfJs.l).info("Graph after layout:", _jsonJs.write(graph));
    let diff = 0;
    sortNodesByHierarchy(graph).forEach(function(v) {
        const node = graph.node(v);
        (0, _config389B86FfJs.l).info("Position " + v + ": " + JSON.stringify(graph.node(v)));
        (0, _config389B86FfJs.l).info("Position " + v + ": (" + node.x, "," + node.y, ") width: ", node.width, " height: ", node.height);
        if (node && node.clusterNode) (0, _edges65Da65DcJs.p)(node);
        else if (graph.children(v).length > 0) {
            insertCluster(clusters, node);
            clusterDb[node.id].node = node;
        } else (0, _edges65Da65DcJs.p)(node);
    });
    graph.edges().forEach(function(e) {
        const edge = graph.edge(e);
        (0, _config389B86FfJs.l).info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(edge), edge);
        const paths = (0, _edges65Da65DcJs.g)(edgePaths, e, edge, clusterDb, diagramtype, graph);
        (0, _edges65Da65DcJs.h)(edge, paths);
    });
    graph.nodes().forEach(function(v) {
        const n = graph.node(v);
        (0, _config389B86FfJs.l).info(v, n.type, n.diff);
        if (n.type === "group") diff = n.diff;
    });
    return {
        elem,
        diff
    };
};
const render = (elem, graph, markers, diagramtype, id)=>{
    (0, _edges65Da65DcJs.a)(elem, markers, diagramtype, id);
    (0, _edges65Da65DcJs.b)();
    (0, _edges65Da65DcJs.d)();
    clear();
    clear$1();
    (0, _config389B86FfJs.l).warn("Graph at first:", _jsonJs.write(graph));
    adjustClustersAndEdges(graph);
    (0, _config389B86FfJs.l).warn("Graph after:", _jsonJs.write(graph));
    recursiveRender(elem, graph, diagramtype);
};

},{"dagre-d3-es/src/dagre/index.js":"g6zYa","dagre-d3-es/src/graphlib/json.js":"iUA0H","./edges-65da65dc.js":"i9uQ2","./config-389b86ff.js":"hnpRM","dagre-d3-es/src/graphlib/index.js":"2nAwO","d3":"17XFv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUA0H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "write", ()=>write);
parcelHelpers.export(exports, "read", ()=>read);
var _lodashEs = require("lodash-es");
var _graphJs = require("./graph.js");
function write(g) {
    var json = {
        options: {
            directed: g.isDirected(),
            multigraph: g.isMultigraph(),
            compound: g.isCompound()
        },
        nodes: writeNodes(g),
        edges: writeEdges(g)
    };
    if (!_lodashEs.isUndefined(g.graph())) json.value = _lodashEs.clone(g.graph());
    return json;
}
function writeNodes(g) {
    return _lodashEs.map(g.nodes(), function(v) {
        var nodeValue = g.node(v);
        var parent = g.parent(v);
        var node = {
            v: v
        };
        if (!_lodashEs.isUndefined(nodeValue)) node.value = nodeValue;
        if (!_lodashEs.isUndefined(parent)) node.parent = parent;
        return node;
    });
}
function writeEdges(g) {
    return _lodashEs.map(g.edges(), function(e) {
        var edgeValue = g.edge(e);
        var edge = {
            v: e.v,
            w: e.w
        };
        if (!_lodashEs.isUndefined(e.name)) edge.name = e.name;
        if (!_lodashEs.isUndefined(edgeValue)) edge.value = edgeValue;
        return edge;
    });
}
function read(json) {
    var g = new (0, _graphJs.Graph)(json.options).setGraph(json.value);
    _lodashEs.each(json.nodes, function(entry) {
        g.setNode(entry.v, entry.value);
        if (entry.parent) g.setParent(entry.v, entry.parent);
    });
    _lodashEs.each(json.edges, function(entry) {
        g.setEdge({
            v: entry.v,
            w: entry.w,
            name: entry.name
        }, entry.value);
    });
    return g;
}

},{"lodash-es":"bXNwz","./graph.js":"9V8F8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["a2HsV"], null, "parcelRequire54bf")

//# sourceMappingURL=flowDiagram-42bb1e4d.a9744da5.js.map
