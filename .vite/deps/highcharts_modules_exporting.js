import {
  __commonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/highcharts/modules/exporting.js
var require_exporting = __commonJS({
  "node_modules/highcharts/modules/exporting.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(e._Highcharts, e._Highcharts.AST, e._Highcharts.Chart) : "function" == typeof define && define.amd ? define("highcharts/modules/exporting", ["highcharts/highcharts"], function(e2) {
        return t(e2, e2.AST, e2.Chart);
      }) : "object" == typeof exports ? exports["highcharts/modules/exporting"] = t(e._Highcharts, e._Highcharts.AST, e._Highcharts.Chart) : e.Highcharts = t(e.Highcharts, e.Highcharts.AST, e.Highcharts.Chart);
    }("undefined" == typeof window ? exports : window, (e, t, n) => (() => {
      "use strict";
      var i, o, r, s = { 660: (e2) => {
        e2.exports = t;
      }, 944: (t2) => {
        t2.exports = e;
      }, 960: (e2) => {
        e2.exports = n;
      } }, l = {};
      function a(e2) {
        var t2 = l[e2];
        if (void 0 !== t2) return t2.exports;
        var n2 = l[e2] = { exports: {} };
        return s[e2](n2, n2.exports, a), n2.exports;
      }
      a.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return a.d(t2, { a: t2 }), t2;
      }, a.d = (e2, t2) => {
        for (var n2 in t2) a.o(t2, n2) && !a.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
      }, a.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
      var c = {};
      a.d(c, { default: () => _ });
      var p = a(944), h = a.n(p), u = a(660), d = a.n(u);
      a(960), function(e2) {
        e2.compose = function(e3) {
          return e3.navigation || (e3.navigation = new t2(e3)), e3;
        };
        class t2 {
          constructor(e3) {
            this.updates = [], this.chart = e3;
          }
          addUpdate(e3) {
            this.chart.navigation.updates.push(e3);
          }
          update(e3, t3) {
            this.updates.forEach((n2) => {
              n2.call(this.chart, e3, t3);
            });
          }
        }
        e2.Additions = t2;
      }(i || (i = {}));
      let g = i, { isTouchDevice: f } = h(), m = { exporting: { allowTableSorting: true, type: "image/png", url: `https://export-svg.highcharts.com?v=${h().version}`, pdfFont: { normal: void 0, bold: void 0, bolditalic: void 0, italic: void 0 }, printMaxWidth: 780, scale: 2, buttons: { contextButton: { className: "highcharts-contextbutton", menuClassName: "highcharts-contextmenu", symbol: "menu", titleKey: "contextButtonTitle", menuItems: ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadSVG"] } }, menuItemDefinitions: { viewFullscreen: { textKey: "viewFullscreen", onclick: function() {
        this.fullscreen && this.fullscreen.toggle();
      } }, printChart: { textKey: "printChart", onclick: function() {
        this.print();
      } }, separator: { separator: true }, downloadPNG: { textKey: "downloadPNG", onclick: function() {
        this.exportChart();
      } }, downloadJPEG: { textKey: "downloadJPEG", onclick: function() {
        this.exportChart({ type: "image/jpeg" });
      } }, downloadPDF: { textKey: "downloadPDF", onclick: function() {
        this.exportChart({ type: "application/pdf" });
      } }, downloadSVG: { textKey: "downloadSVG", onclick: function() {
        this.exportChart({ type: "image/svg+xml" });
      } } } }, lang: { viewFullscreen: "View in full screen", exitFullscreen: "Exit from full screen", printChart: "Print chart", downloadPNG: "Download PNG image", downloadJPEG: "Download JPEG image", downloadPDF: "Download PDF document", downloadSVG: "Download SVG vector image", contextButtonTitle: "Chart context menu" }, navigation: { buttonOptions: { symbolSize: 14, symbolX: 14.5, symbolY: 13.5, align: "right", buttonSpacing: 5, height: 28, y: -5, verticalAlign: "top", width: 28, symbolFill: "#666666", symbolStroke: "#666666", symbolStrokeWidth: 3, theme: { fill: "#ffffff", padding: 5, stroke: "none", "stroke-linecap": "round" } }, menuStyle: { border: "none", borderRadius: "3px", background: "#ffffff", padding: "0.5em" }, menuItemStyle: { background: "none", borderRadius: "3px", color: "#333333", padding: "0.5em", fontSize: f ? "0.9em" : "0.8em", transition: "background 250ms, color 250ms" }, menuItemHoverStyle: { background: "#f2f2f2" } } };
      !function(e2) {
        let t2 = [];
        function n2(e3, t3, n3, i3) {
          return [["M", e3, t3 + 2.5], ["L", e3 + n3, t3 + 2.5], ["M", e3, t3 + i3 / 2 + 0.5], ["L", e3 + n3, t3 + i3 / 2 + 0.5], ["M", e3, t3 + i3 - 1.5], ["L", e3 + n3, t3 + i3 - 1.5]];
        }
        function i2(e3, t3, n3, i3) {
          let o2 = i3 / 3 - 2, r2 = [];
          return r2.concat(this.circle(n3 - o2, t3, o2, o2), this.circle(n3 - o2, t3 + o2 + 4, o2, o2), this.circle(n3 - o2, t3 + 2 * (o2 + 4), o2, o2));
        }
        e2.compose = function(e3) {
          if (-1 === t2.indexOf(e3)) {
            t2.push(e3);
            let o2 = e3.prototype.symbols;
            o2.menu = n2, o2.menuball = i2.bind(o2);
          }
        };
      }(o || (o = {}));
      let x = o, { composed: y } = h(), { addEvent: b, fireEvent: v, pushUnique: w } = h();
      function S() {
        this.fullscreen = new E(this);
      }
      class E {
        static compose(e2) {
          w(y, "Fullscreen") && b(e2, "beforeRender", S);
        }
        constructor(e2) {
          this.chart = e2, this.isOpen = false;
          let t2 = e2.renderTo;
          !this.browserProps && ("function" == typeof t2.requestFullscreen ? this.browserProps = { fullscreenChange: "fullscreenchange", requestFullscreen: "requestFullscreen", exitFullscreen: "exitFullscreen" } : t2.mozRequestFullScreen ? this.browserProps = { fullscreenChange: "mozfullscreenchange", requestFullscreen: "mozRequestFullScreen", exitFullscreen: "mozCancelFullScreen" } : t2.webkitRequestFullScreen ? this.browserProps = { fullscreenChange: "webkitfullscreenchange", requestFullscreen: "webkitRequestFullScreen", exitFullscreen: "webkitExitFullscreen" } : t2.msRequestFullscreen && (this.browserProps = { fullscreenChange: "MSFullscreenChange", requestFullscreen: "msRequestFullscreen", exitFullscreen: "msExitFullscreen" }));
        }
        close() {
          let e2 = this, t2 = e2.chart, n2 = t2.options.chart;
          v(t2, "fullscreenClose", null, function() {
            e2.isOpen && e2.browserProps && t2.container.ownerDocument instanceof Document && t2.container.ownerDocument[e2.browserProps.exitFullscreen](), e2.unbindFullscreenEvent && (e2.unbindFullscreenEvent = e2.unbindFullscreenEvent()), t2.setSize(e2.origWidth, e2.origHeight, false), e2.origWidth = void 0, e2.origHeight = void 0, n2.width = e2.origWidthOption, n2.height = e2.origHeightOption, e2.origWidthOption = void 0, e2.origHeightOption = void 0, e2.isOpen = false, e2.setButtonText();
          });
        }
        open() {
          let e2 = this, t2 = e2.chart, n2 = t2.options.chart;
          v(t2, "fullscreenOpen", null, function() {
            if (n2 && (e2.origWidthOption = n2.width, e2.origHeightOption = n2.height), e2.origWidth = t2.chartWidth, e2.origHeight = t2.chartHeight, e2.browserProps) {
              let n3 = b(t2.container.ownerDocument, e2.browserProps.fullscreenChange, function() {
                e2.isOpen ? (e2.isOpen = false, e2.close()) : (t2.setSize(null, null, false), e2.isOpen = true, e2.setButtonText());
              }), i2 = b(t2, "destroy", n3);
              e2.unbindFullscreenEvent = () => {
                n3(), i2();
              };
              let o2 = t2.renderTo[e2.browserProps.requestFullscreen]();
              o2 && o2.catch(function() {
                alert("Full screen is not supported inside a frame.");
              });
            }
          });
        }
        setButtonText() {
          let e2 = this.chart, t2 = e2.exportDivElements, n2 = e2.options.exporting, i2 = n2 && n2.buttons && n2.buttons.contextButton.menuItems, o2 = e2.options.lang;
          if (n2 && n2.menuItemDefinitions && o2 && o2.exitFullscreen && o2.viewFullscreen && i2 && t2) {
            let e3 = t2[i2.indexOf("viewFullscreen")];
            e3 && d().setElementHTML(e3, this.isOpen ? o2.exitFullscreen : n2.menuItemDefinitions.viewFullscreen.text || o2.viewFullscreen);
          }
        }
        toggle() {
          this.isOpen ? this.close() : this.open();
        }
      }
      let { win: C } = h(), { discardElement: O, objectEach: T } = h(), F = { ajax: function(e2) {
        var _a;
        let t2 = { json: "application/json", xml: "application/xml", text: "text/plain", octet: "application/octet-stream" }, n2 = new XMLHttpRequest();
        function i2(t3, n3) {
          e2.error && e2.error(t3, n3);
        }
        if (!e2.url) return false;
        n2.open((e2.type || "get").toUpperCase(), e2.url, true), ((_a = e2.headers) == null ? void 0 : _a["Content-Type"]) || n2.setRequestHeader("Content-Type", t2[e2.dataType || "json"] || t2.text), T(e2.headers, function(e3, t3) {
          n2.setRequestHeader(t3, e3);
        }), e2.responseType && (n2.responseType = e2.responseType), n2.onreadystatechange = function() {
          var _a2;
          let t3;
          if (4 === n2.readyState) {
            if (200 === n2.status) {
              if ("blob" !== e2.responseType && (t3 = n2.responseText, "json" === e2.dataType)) try {
                t3 = JSON.parse(t3);
              } catch (e3) {
                if (e3 instanceof Error) return i2(n2, e3);
              }
              return (_a2 = e2.success) == null ? void 0 : _a2.call(e2, t3, n2);
            }
            i2(n2, n2.responseText);
          }
        }, e2.data && "string" != typeof e2.data && (e2.data = JSON.stringify(e2.data)), n2.send(e2.data);
      }, getJSON: function(e2, t2) {
        F.ajax({ url: e2, success: t2, dataType: "json", headers: { "Content-Type": "text/plain" } });
      }, post: function(e2, t2, n2) {
        let i2 = new C.FormData();
        T(t2, function(e3, t3) {
          i2.append(t3, e3);
        }), i2.append("b64", "true");
        let { filename: o2, type: r2 } = t2;
        return C.fetch(e2, { method: "POST", body: i2, ...n2 }).then((e3) => {
          e3.ok && e3.text().then((e4) => {
            let t3 = document.createElement("a");
            t3.href = `data:${r2};base64,${e4}`, t3.download = o2, t3.click(), O(t3);
          });
        });
      } }, { defaultOptions: P } = h(), { doc: M, SVG_NS: k, win: H } = h(), { addEvent: N, css: D, createElement: G, discardElement: I, extend: W, find: R, fireEvent: V, isObject: j, merge: q, objectEach: A, pick: z, removeEvent: L, splat: $, uniqueKey: K } = h();
      !function(e2) {
        let t2, n2 = [/-/, /^(clipPath|cssText|d|height|width)$/, /^font$/, /[lL]ogical(Width|Height)$/, /^parentRule$/, /^(cssRules|ownerRules)$/, /perspective/, /TapHighlightColor/, /^transition/, /^length$/, /^\d+$/], i2 = ["fill", "stroke", "strokeLinecap", "strokeLinejoin", "strokeWidth", "textAnchor", "x", "y"];
        e2.inlineAllowlist = [];
        let o2 = ["clipPath", "defs", "desc"];
        function r2(e3) {
          let t3, n3, i3 = this, o3 = i3.renderer, r3 = q(i3.options.navigation.buttonOptions, e3), s3 = r3.onclick, l3 = r3.menuItems, a3 = r3.symbolSize || 12;
          if (i3.btnCount || (i3.btnCount = 0), i3.exportDivElements || (i3.exportDivElements = [], i3.exportSVGElements = []), false === r3.enabled || !r3.theme) return;
          let c3 = i3.styledMode ? {} : r3.theme;
          s3 ? n3 = function(e4) {
            e4 && e4.stopPropagation(), s3.call(i3, e4);
          } : l3 && (n3 = function(e4) {
            e4 && e4.stopPropagation(), i3.contextMenu(p3.menuClassName, l3, p3.translateX || 0, p3.translateY || 0, p3.width || 0, p3.height || 0, p3), p3.setState(2);
          }), r3.text && r3.symbol ? c3.paddingLeft = z(c3.paddingLeft, 30) : r3.text || W(c3, { width: r3.width, height: r3.height, padding: 0 });
          let p3 = o3.button(r3.text, 0, 0, n3, c3, void 0, void 0, void 0, void 0, r3.useHTML).addClass(e3.className).attr({ title: z(i3.options.lang[r3._titleKey || r3.titleKey], "") });
          p3.menuClassName = e3.menuClassName || "highcharts-menu-" + i3.btnCount++, r3.symbol && (t3 = o3.symbol(r3.symbol, Math.round((r3.symbolX || 0) - a3 / 2), Math.round((r3.symbolY || 0) - a3 / 2), a3, a3, { width: a3, height: a3 }).addClass("highcharts-button-symbol").attr({ zIndex: 1 }).add(p3), i3.styledMode || t3.attr({ stroke: r3.symbolStroke, fill: r3.symbolFill, "stroke-width": r3.symbolStrokeWidth || 1 })), p3.add(i3.exportingGroup).align(W(r3, { width: p3.width, x: z(r3.x, i3.buttonOffset) }), true, "spacingBox"), i3.buttonOffset += ((p3.width || 0) + r3.buttonSpacing) * ("right" === r3.align ? -1 : 1), i3.exportSVGElements.push(p3, t3);
        }
        function s2() {
          if (!this.printReverseInfo) return;
          let { childNodes: e3, origDisplay: n3, resetParams: i3 } = this.printReverseInfo;
          this.moveContainers(this.renderTo), [].forEach.call(e3, function(e4, t3) {
            1 === e4.nodeType && (e4.style.display = n3[t3] || "");
          }), this.isPrinting = false, i3 && this.setSize.apply(this, i3), delete this.printReverseInfo, t2 = void 0, V(this, "afterPrint");
        }
        function l2() {
          var _a;
          let e3 = M.body, t3 = this.options.exporting.printMaxWidth, n3 = { childNodes: e3.childNodes, origDisplay: [], resetParams: void 0 };
          this.isPrinting = true, (_a = this.pointer) == null ? void 0 : _a.reset(void 0, 0), V(this, "beforePrint"), t3 && this.chartWidth > t3 && (n3.resetParams = [this.options.chart.width, void 0, false], this.setSize(t3, void 0, false)), [].forEach.call(n3.childNodes, function(e4, t4) {
            1 === e4.nodeType && (n3.origDisplay[t4] = e4.style.display, e4.style.display = "none");
          }), this.moveContainers(e3), this.printReverseInfo = n3;
        }
        function a2(e3) {
          e3.renderExporting(), N(e3, "redraw", e3.renderExporting), N(e3, "destroy", e3.destroyExport);
        }
        function c2(e3, t3, n3, i3, o3, r3, s3) {
          var _a, _b;
          let l3 = this, a3 = l3.options.navigation, c3 = l3.chartWidth, p3 = l3.chartHeight, u3 = "cache-" + e3, g2 = Math.max(o3, r3), f3, m2 = l3[u3];
          m2 || (l3.exportContextMenu = l3[u3] = m2 = G("div", { className: e3 }, { position: "absolute", zIndex: 1e3, padding: g2 + "px", pointerEvents: "auto", ...l3.renderer.style }, ((_a = l3.scrollablePlotArea) == null ? void 0 : _a.fixedDiv) || l3.container), f3 = G("ul", { className: "highcharts-menu" }, l3.styledMode ? {} : { listStyle: "none", margin: 0, padding: 0 }, m2), l3.styledMode || D(f3, W({ MozBoxShadow: "3px 3px 10px #888", WebkitBoxShadow: "3px 3px 10px #888", boxShadow: "3px 3px 10px #888" }, a3.menuStyle)), m2.hideMenu = function() {
            D(m2, { display: "none" }), s3 && s3.setState(0), l3.openMenu = false, D(l3.renderTo, { overflow: "hidden" }), D(l3.container, { overflow: "hidden" }), h().clearTimeout(m2.hideTimer), V(l3, "exportMenuHidden");
          }, l3.exportEvents.push(N(m2, "mouseleave", function() {
            m2.hideTimer = H.setTimeout(m2.hideMenu, 500);
          }), N(m2, "mouseenter", function() {
            h().clearTimeout(m2.hideTimer);
          }), N(M, "mouseup", function(t4) {
            var _a2;
            ((_a2 = l3.pointer) == null ? void 0 : _a2.inClass(t4.target, e3)) || m2.hideMenu();
          }), N(m2, "click", function() {
            l3.openMenu && m2.hideMenu();
          })), t3.forEach(function(e4) {
            if ("string" == typeof e4 && (e4 = l3.options.exporting.menuItemDefinitions[e4]), j(e4, true)) {
              let t4;
              e4.separator ? t4 = G("hr", void 0, void 0, f3) : ("viewData" === e4.textKey && l3.isDataTableVisible && (e4.textKey = "hideData"), t4 = G("li", { className: "highcharts-menu-item", onclick: function(t5) {
                t5 && t5.stopPropagation(), m2.hideMenu(), "string" != typeof e4 && e4.onclick && e4.onclick.apply(l3, arguments);
              } }, void 0, f3), d().setElementHTML(t4, e4.text || l3.options.lang[e4.textKey]), l3.styledMode || (t4.onmouseover = function() {
                D(this, a3.menuItemHoverStyle);
              }, t4.onmouseout = function() {
                D(this, a3.menuItemStyle);
              }, D(t4, W({ cursor: "pointer" }, a3.menuItemStyle || {})))), l3.exportDivElements.push(t4);
            }
          }), l3.exportDivElements.push(f3, m2), l3.exportMenuWidth = m2.offsetWidth, l3.exportMenuHeight = m2.offsetHeight);
          let x2 = { display: "block" };
          n3 + (l3.exportMenuWidth || 0) > c3 ? x2.right = c3 - n3 - o3 - g2 + "px" : x2.left = n3 - g2 + "px", i3 + r3 + (l3.exportMenuHeight || 0) > p3 && ((_b = s3.alignOptions) == null ? void 0 : _b.verticalAlign) !== "top" ? x2.bottom = p3 - i3 - g2 + "px" : x2.top = i3 + r3 - g2 + "px", D(m2, x2), D(l3.renderTo, { overflow: "" }), D(l3.container, { overflow: "" }), l3.openMenu = true, V(l3, "exportMenuShown");
        }
        function p2(e3) {
          let t3, n3 = e3 ? e3.target : this, i3 = n3.exportSVGElements, o3 = n3.exportDivElements, r3 = n3.exportEvents;
          i3 && (i3.forEach((e4, o4) => {
            e4 && (e4.onclick = e4.ontouchstart = null, n3[t3 = "cache-" + e4.menuClassName] && delete n3[t3], i3[o4] = e4.destroy());
          }), i3.length = 0), n3.exportingGroup && (n3.exportingGroup.destroy(), delete n3.exportingGroup), o3 && (o3.forEach(function(e4, t4) {
            e4 && (h().clearTimeout(e4.hideTimer), L(e4, "mouseleave"), o3[t4] = e4.onmouseout = e4.onmouseover = e4.ontouchstart = e4.onclick = null, I(e4));
          }), o3.length = 0), r3 && (r3.forEach(function(e4) {
            e4();
          }), r3.length = 0);
        }
        function u2(e3, t3) {
          let n3 = this.getSVGForExport(e3, t3);
          e3 = q(this.options.exporting, e3), F.post(e3.url, { filename: e3.filename ? e3.filename.replace(/\//g, "-") : this.getFilename(), type: e3.type, width: e3.width, scale: e3.scale, svg: n3 }, e3.fetchOptions);
        }
        function f2(e3) {
          return e3 && this.inlineStyles(), this.resolveCSSVariables(), this.container.innerHTML;
        }
        function y2() {
          let e3 = this.userOptions.title && this.userOptions.title.text, t3 = this.options.exporting.filename;
          return t3 ? t3.replace(/\//g, "-") : ("string" == typeof e3 && (t3 = e3.toLowerCase().replace(/<\/?[^>]+(>|$)/g, "").replace(/[\s_]+/g, "-").replace(/[^a-z\d\-]/g, "").replace(/^[\-]+/g, "").replace(/[\-]+/g, "-").substr(0, 24).replace(/[\-]+$/g, "")), (!t3 || t3.length < 5) && (t3 = "chart"), t3);
        }
        function b2(e3) {
          var _a;
          let t3, n3, i3 = q(this.options, e3);
          i3.plotOptions = q(this.userOptions.plotOptions, e3 && e3.plotOptions), i3.time = q(this.userOptions.time, e3 && e3.time);
          let o3 = G("div", null, { position: "absolute", top: "-9999em", width: this.chartWidth + "px", height: this.chartHeight + "px" }, M.body), r3 = this.renderTo.style.width, s3 = this.renderTo.style.height, l3 = i3.exporting.sourceWidth || i3.chart.width || /px$/.test(r3) && parseInt(r3, 10) || (i3.isGantt ? 800 : 600), a3 = i3.exporting.sourceHeight || i3.chart.height || /px$/.test(s3) && parseInt(s3, 10) || 400;
          W(i3.chart, { animation: false, renderTo: o3, forExport: true, renderer: "SVGRenderer", width: l3, height: a3 }), i3.exporting.enabled = false, delete i3.data, i3.series = [], this.series.forEach(function(e4) {
            (n3 = q(e4.userOptions, { animation: false, enableMouseTracking: false, showCheckbox: false, visible: e4.visible })).isInternal || i3.series.push(n3);
          });
          let c3 = {};
          this.axes.forEach(function(e4) {
            e4.userOptions.internalKey || (e4.userOptions.internalKey = K()), e4.options.isInternal || (c3[e4.coll] || (c3[e4.coll] = true, i3[e4.coll] = []), i3[e4.coll].push(q(e4.userOptions, { visible: e4.visible, type: e4.type, uniqueNames: e4.uniqueNames })));
          }), i3.colorAxis = this.userOptions.colorAxis;
          let p3 = new this.constructor(i3, this.callback);
          return e3 && ["xAxis", "yAxis", "series"].forEach(function(t4) {
            let n4 = {};
            e3[t4] && (n4[t4] = e3[t4], p3.update(n4));
          }), this.axes.forEach(function(t4) {
            let n4 = R(p3.axes, (e4) => e4.options.internalKey === t4.userOptions.internalKey);
            if (n4) {
              let i4 = t4.getExtremes(), o4 = $((e3 == null ? void 0 : e3[t4.coll]) || {})[0], r4 = "min" in o4 ? o4.min : i4.userMin, s4 = "max" in o4 ? o4.max : i4.userMax;
              (void 0 !== r4 && r4 !== n4.min || void 0 !== s4 && s4 !== n4.max) && n4.setExtremes(r4 ?? void 0, s4 ?? void 0, true, false);
            }
          }), t3 = p3.getChartHTML(this.styledMode || ((_a = i3.exporting) == null ? void 0 : _a.applyStyleSheets)), V(this, "getSVG", { chartCopy: p3 }), t3 = this.sanitizeSVG(t3, i3), i3 = null, p3.destroy(), I(o3), t3;
        }
        function v2(e3, t3) {
          let n3 = this.options.exporting;
          return this.getSVG(q({ chart: { borderRadius: 0 } }, n3.chartOptions, t3, { exporting: { sourceWidth: e3 && e3.sourceWidth || n3.sourceWidth, sourceHeight: e3 && e3.sourceHeight || n3.sourceHeight } }));
        }
        function w2() {
          let t3, r3 = e2.inlineAllowlist, s3 = {}, l3 = M.createElement("iframe");
          D(l3, { width: "1px", height: "1px", visibility: "hidden" }), M.body.appendChild(l3);
          let a3 = l3.contentWindow && l3.contentWindow.document;
          a3 && a3.body.appendChild(a3.createElementNS(k, "svg")), !function e3(l4) {
            let c3, p3, u3, d2, g2, f3, m2 = {};
            if (a3 && 1 === l4.nodeType && -1 === o2.indexOf(l4.nodeName)) {
              if (c3 = H.getComputedStyle(l4, null), p3 = "svg" === l4.nodeName ? {} : H.getComputedStyle(l4.parentNode, null), !s3[l4.nodeName]) {
                t3 = a3.getElementsByTagName("svg")[0], u3 = a3.createElementNS(l4.namespaceURI, l4.nodeName), t3.appendChild(u3);
                let e4 = H.getComputedStyle(u3, null), n3 = {};
                for (let t4 in e4) t4.length < 1e3 && "string" == typeof e4[t4] && !/^\d+$/.test(t4) && (n3[t4] = e4[t4]);
                s3[l4.nodeName] = n3, "text" === l4.nodeName && delete s3.text.fill, t3.removeChild(u3);
              }
              for (let e4 in c3) (h().isFirefox || h().isMS || h().isSafari || Object.hasOwnProperty.call(c3, e4)) && function(e5, t4) {
                if (d2 = g2 = false, r3.length) {
                  for (f3 = r3.length; f3-- && !g2; ) g2 = r3[f3].test(t4);
                  d2 = !g2;
                }
                for ("transform" === t4 && "none" === e5 && (d2 = true), f3 = n2.length; f3-- && !d2; ) {
                  if (t4.length > 1e3) throw Error("Input too long");
                  d2 = n2[f3].test(t4) || "function" == typeof e5;
                }
                !d2 && (p3[t4] !== e5 || "svg" === l4.nodeName) && s3[l4.nodeName][t4] !== e5 && (i2 && -1 === i2.indexOf(t4) ? m2[t4] = e5 : e5 && l4.setAttribute(t4.replace(/[A-Z]/g, function(e6) {
                  return "-" + e6.toLowerCase();
                }), e5));
              }(c3[e4], e4);
              if (D(l4, m2), "svg" === l4.nodeName && l4.setAttribute("stroke-width", "1px"), "text" === l4.nodeName) return;
              [].forEach.call(l4.children || l4.childNodes, e3);
            }
          }(this.container.querySelector("svg")), t3.parentNode.removeChild(t3), l3.parentNode.removeChild(l3);
        }
        function S2() {
          let e3 = this.container.querySelectorAll("*"), t3 = ["color", "fill", "stop-color", "stroke"];
          Array.from(e3).forEach((e4) => {
            t3.forEach((t4) => {
              let n3 = e4.getAttribute(t4);
              (n3 == null ? void 0 : n3.includes("var(")) && e4.setAttribute(t4, getComputedStyle(e4).getPropertyValue(t4));
            });
          });
        }
        function C2(e3) {
          let { scrollablePlotArea: t3 } = this;
          (t3 ? [t3.fixedDiv, t3.scrollingContainer] : [this.container]).forEach(function(t4) {
            e3.appendChild(t4);
          });
        }
        function O2() {
          let e3 = this, t3 = (t4, n3, i3) => {
            e3.isDirtyExporting = true, q(true, e3.options[t4], n3), z(i3, true) && e3.redraw();
          };
          e3.exporting = { update: function(e4, n3) {
            t3("exporting", e4, n3);
          } }, g.compose(e3).navigation.addUpdate((e4, n3) => {
            t3("navigation", e4, n3);
          });
        }
        function T2({ alignTo: e3, key: t3, textPxLength: n3 }) {
          var _a, _b, _c;
          let i3 = this.options.exporting, { align: o3, buttonSpacing: r3 = 0, verticalAlign: s3, width: l3 = 0 } = q((_a = this.options.navigation) == null ? void 0 : _a.buttonOptions, (_b = i3 == null ? void 0 : i3.buttons) == null ? void 0 : _b.contextButton), a3 = e3.width - n3, c3 = l3 + r3;
          ((i3 == null ? void 0 : i3.enabled) ?? true) && "title" === t3 && "right" === o3 && "top" === s3 && a3 < 2 * c3 && (a3 < c3 ? e3.width -= c3 : ((_c = this.title) == null ? void 0 : _c.alignValue) !== "left" && (e3.x -= c3 - a3 / 2));
        }
        function B2() {
          let e3 = this;
          !e3.isPrinting && (t2 = e3, h().isSafari || e3.beforePrint(), setTimeout(() => {
            H.focus(), H.print(), h().isSafari || setTimeout(() => {
              e3.afterPrint();
            }, 1e3);
          }, 1));
        }
        function J2() {
          let e3 = this, t3 = e3.options.exporting, n3 = t3.buttons, i3 = e3.isDirtyExporting || !e3.exportSVGElements;
          e3.buttonOffset = 0, e3.isDirtyExporting && e3.destroyExport(), i3 && false !== t3.enabled && (e3.exportEvents = [], e3.exportingGroup = e3.exportingGroup || e3.renderer.g("exporting-group").attr({ zIndex: 3 }).add(), A(n3, function(t4) {
            e3.addButton(t4);
          }), e3.isDirtyExporting = false);
        }
        function _2(e3, t3) {
          var _a;
          let n3 = e3.indexOf("</svg>") + 6, i3 = e3.indexOf("<foreignObject") > -1, o3 = e3.substr(n3);
          return e3 = e3.substr(0, n3), i3 ? e3 = e3.replace(/(<(?:img|br).*?(?=\>))>/g, "$1 />") : o3 && ((_a = t3 == null ? void 0 : t3.exporting) == null ? void 0 : _a.allowHTML) && (o3 = '<foreignObject x="0" y="0" width="' + t3.chart.width + '" height="' + t3.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + o3.replace(/(<(?:img|br).*?(?=\>))>/g, "$1 />") + "</body></foreignObject>", e3 = e3.replace("</svg>", o3 + "</svg>")), e3 = e3.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery\d+="[^"]+"/g, "").replace(/url\(("|&quot;)(.*?)("|&quot;)\;?\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS\d+\:)?href=/g, " xlink:href=").replace(/\n+/g, " ").replace(/&nbsp;/g, " ").replace(/&shy;/g, "­");
        }
        e2.compose = function(e3, n3) {
          x.compose(n3), E.compose(e3);
          let i3 = e3.prototype;
          i3.exportChart || (i3.afterPrint = s2, i3.exportChart = u2, i3.inlineStyles = w2, i3.print = B2, i3.sanitizeSVG = _2, i3.getChartHTML = f2, i3.getSVG = b2, i3.getSVGForExport = v2, i3.getFilename = y2, i3.moveContainers = C2, i3.beforePrint = l2, i3.contextMenu = c2, i3.addButton = r2, i3.destroyExport = p2, i3.renderExporting = J2, i3.resolveCSSVariables = S2, i3.callbacks.push(a2), N(e3, "init", O2), N(e3, "layOutTitle", T2), h().isSafari && H.matchMedia("print").addListener(function(e4) {
            t2 && (e4.matches ? t2.beforePrint() : t2.afterPrint());
          }), P.exporting = q(m.exporting, P.exporting), P.lang = q(m.lang, P.lang), P.navigation = q(m.navigation, P.navigation));
        };
      }(r || (r = {}));
      let B = r, J = h();
      J.HttpUtilities = J.HttpUtilities || F, J.ajax = J.HttpUtilities.ajax, J.getJSON = J.HttpUtilities.getJSON, J.post = J.HttpUtilities.post, B.compose(J.Chart, J.Renderer);
      let _ = h();
      return c.default;
    })());
  }
});
export default require_exporting();
//# sourceMappingURL=highcharts_modules_exporting.js.map
