import {
  __commonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/highcharts/modules/accessibility.js
var require_accessibility = __commonJS({
  "node_modules/highcharts/modules/accessibility.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(e._Highcharts, e._Highcharts.Templating, e._Highcharts.AST, e._Highcharts.Legend, e._Highcharts.Axis, e._Highcharts.Color, e._Highcharts.SeriesRegistry, e._Highcharts.RendererRegistry, e._Highcharts.SVGRenderer, e._Highcharts.Point, e._Highcharts.Series) : "function" == typeof define && define.amd ? define("highcharts/modules/accessibility", ["highcharts/highcharts"], function(e2) {
        return t(e2, e2.Templating, e2.AST, e2.Legend, e2.Axis, e2.Color, e2.SeriesRegistry, e2.RendererRegistry, e2.SVGRenderer, e2.Point, e2.Series);
      }) : "object" == typeof exports ? exports["highcharts/modules/accessibility"] = t(e._Highcharts, e._Highcharts.Templating, e._Highcharts.AST, e._Highcharts.Legend, e._Highcharts.Axis, e._Highcharts.Color, e._Highcharts.SeriesRegistry, e._Highcharts.RendererRegistry, e._Highcharts.SVGRenderer, e._Highcharts.Point, e._Highcharts.Series) : e.Highcharts = t(e.Highcharts, e.Highcharts.Templating, e.Highcharts.AST, e.Highcharts.Legend, e.Highcharts.Axis, e.Highcharts.Color, e.Highcharts.SeriesRegistry, e.Highcharts.RendererRegistry, e.Highcharts.SVGRenderer, e.Highcharts.Point, e.Highcharts.Series);
    }("undefined" == typeof window ? exports : window, (e, t, i, s, n, r, o, a, l, h, c) => (() => {
      "use strict";
      let d;
      var u, p, g, m, b = { 260: (e10) => {
        e10.exports = h;
      }, 512: (e10) => {
        e10.exports = o;
      }, 532: (e10) => {
        e10.exports = n;
      }, 540: (e10) => {
        e10.exports = l;
      }, 608: (e10) => {
        e10.exports = a;
      }, 620: (e10) => {
        e10.exports = r;
      }, 632: (e10) => {
        e10.exports = s;
      }, 660: (e10) => {
        e10.exports = i;
      }, 820: (e10) => {
        e10.exports = c;
      }, 944: (t10) => {
        t10.exports = e;
      }, 984: (e10) => {
        e10.exports = t;
      } }, f = {};
      function x(e10) {
        var t10 = f[e10];
        if (void 0 !== t10) return t10.exports;
        var i10 = f[e10] = { exports: {} };
        return b[e10](i10, i10.exports, x), i10.exports;
      }
      x.n = (e10) => {
        var t10 = e10 && e10.__esModule ? () => e10.default : () => e10;
        return x.d(t10, { a: t10 }), t10;
      }, x.d = (e10, t10) => {
        for (var i10 in t10) x.o(t10, i10) && !x.o(e10, i10) && Object.defineProperty(e10, i10, { enumerable: true, get: t10[i10] });
      }, x.o = (e10, t10) => Object.prototype.hasOwnProperty.call(e10, t10);
      var y = {};
      x.d(y, { default: () => nv });
      var v = x(944), w = x.n(v);
      let { doc: E, win: A } = w(), { css: T } = w(), C = A.EventTarget && new A.EventTarget() || "none";
      function M(e10) {
        if ("function" == typeof A.MouseEvent) return new A.MouseEvent(e10.type, e10);
        if (E == null ? void 0 : E.createEvent) {
          let t10 = E.createEvent("MouseEvent");
          if (t10.initMouseEvent) return t10.initMouseEvent(e10.type, e10.bubbles, e10.cancelable, e10.view || A, e10.detail, e10.screenX, e10.screenY, e10.clientX, e10.clientY, e10.ctrlKey, e10.altKey, e10.shiftKey, e10.metaKey, e10.button, e10.relatedTarget), t10;
        }
        return k(e10.type);
      }
      function k(e10, t10, i10) {
        let s10 = t10 || { x: 0, y: 0 };
        if ("function" == typeof A.MouseEvent) return new A.MouseEvent(e10, { bubbles: true, cancelable: true, composed: true, button: 0, buttons: 1, relatedTarget: i10 || C, view: A, detail: +("click" === e10), screenX: s10.x, screenY: s10.y, clientX: s10.x, clientY: s10.y });
        if (E == null ? void 0 : E.createEvent) {
          let t11 = E.createEvent("MouseEvent");
          if (t11.initMouseEvent) return t11.initMouseEvent(e10, true, true, A, +("click" === e10), s10.x, s10.y, s10.x, s10.y, false, false, false, false, 0, null), t11;
        }
        return { type: e10 };
      }
      let S = { addClass: function(e10, t10) {
        e10.classList ? e10.classList.add(t10) : 0 > e10.className.indexOf(t10) && (e10.className += " " + t10);
      }, cloneMouseEvent: M, cloneTouchEvent: function(e10) {
        let t10 = (e11) => {
          let t11 = [];
          for (let i11 = 0; i11 < e11.length; ++i11) {
            let s10 = e11.item(i11);
            s10 && t11.push(s10);
          }
          return t11;
        };
        if ("function" == typeof A.TouchEvent) {
          let i11 = new A.TouchEvent(e10.type, { touches: t10(e10.touches), targetTouches: t10(e10.targetTouches), changedTouches: t10(e10.changedTouches), ctrlKey: e10.ctrlKey, shiftKey: e10.shiftKey, altKey: e10.altKey, metaKey: e10.metaKey, bubbles: e10.bubbles, cancelable: e10.cancelable, composed: e10.composed, detail: e10.detail, view: e10.view });
          return e10.defaultPrevented && i11.preventDefault(), i11;
        }
        let i10 = M(e10);
        return i10.touches = e10.touches, i10.changedTouches = e10.changedTouches, i10.targetTouches = e10.targetTouches, i10;
      }, escapeStringForHTML: function(e10) {
        return e10.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
      }, getElement: function(e10) {
        return E.getElementById(e10);
      }, getFakeMouseEvent: k, getHeadingTagNameForElement: function(e10) {
        let t10 = (e11) => "h" + Math.min(6, parseInt(e11.slice(1), 10) + 1), i10 = (e11) => /^H[1-6]$/i.test(e11), s10 = (e11) => {
          let t11 = e11;
          for (; t11 = t11.previousSibling; ) {
            let e12 = t11.tagName || "";
            if (i10(e12)) return e12;
          }
          return "";
        }, n2 = (e11) => {
          let r2 = s10(e11);
          if (r2) return t10(r2);
          let o2 = e11.parentElement;
          if (!o2) return "h6";
          let a2 = o2.tagName;
          return i10(a2) ? t10(a2) : n2(o2);
        };
        return n2(e10);
      }, removeChildNodes: function(e10) {
        for (; e10.lastChild; ) e10.removeChild(e10.lastChild);
      }, removeClass: function(e10, t10) {
        e10.classList ? e10.classList.remove(t10) : e10.className = e10.className.replace(RegExp(t10, "g"), "");
      }, removeElement: function(e10) {
        e10 && e10.parentNode && e10.parentNode.removeChild(e10);
      }, reverseChildNodes: function(e10) {
        let t10 = e10.childNodes.length;
        for (; t10--; ) e10.appendChild(e10.childNodes[t10]);
      }, simulatedEventTarget: C, stripHTMLTagsFromString: function(e10, t10 = false) {
        return "string" == typeof e10 ? t10 ? e10.replace(/<\/?[^>]+(>|$)/g, "") : e10.replace(/<\/?(?!\s)[^>]+(>|$)/g, "") : e10;
      }, visuallyHideElement: function(e10) {
        T(e10, { position: "absolute", width: "1px", height: "1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(1px, 1px, 1px, 1px)", marginTop: "-3px", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)", filter: "alpha(opacity=1)", opacity: 0.01 });
      } };
      var P = x(984), D = x.n(P);
      let { format: N } = D(), { getNestedProperty: B, pick: I } = w();
      !function(e10) {
        function t10(e11, t11, i11) {
          let s10 = (e12, t12) => {
            let i12 = e12.slice(t12 || 0), s11 = i12.indexOf("{"), n3 = i12.indexOf("}");
            if (s11 > -1 && n3 > s11) return { statement: i12.substring(s11 + 1, n3), begin: t12 + s11 + 1, end: t12 + n3 };
          }, n2 = [], r2, o2, a2 = 0;
          do
            r2 = s10(e11, a2), (o2 = e11.substring(a2, r2 && r2.begin - 1)).length && n2.push({ value: o2, type: "constant" }), r2 && n2.push({ value: r2.statement, type: "statement" }), a2 = r2 ? r2.end + 1 : a2 + 1;
          while (r2);
          return n2.forEach((e12) => {
            "statement" === e12.type && (e12.value = function(e13, t12) {
              let i12, s11, n3 = e13.indexOf("#each("), r3 = e13.indexOf("#plural("), o3 = e13.indexOf("["), a3 = e13.indexOf("]");
              if (n3 > -1) {
                let r4 = e13.slice(n3).indexOf(")") + n3, o4 = e13.substring(0, n3), a4 = e13.substring(r4 + 1), l3 = e13.substring(n3 + 6, r4).split(","), h2 = Number(l3[1]), c2;
                if (s11 = "", i12 = B(l3[0], t12)) {
                  c2 = (h2 = isNaN(h2) ? i12.length : h2) < 0 ? i12.length + h2 : Math.min(h2, i12.length);
                  for (let e14 = 0; e14 < c2; ++e14) s11 += o4 + i12[e14] + a4;
                }
                return s11.length ? s11 : "";
              }
              if (r3 > -1) {
                var l2;
                let i13 = e13.slice(r3).indexOf(")") + r3, n4 = e13.substring(r3 + 8, i13).split(",");
                switch (Number(B(n4[0], t12))) {
                  case 0:
                    s11 = I(n4[4], n4[1]);
                    break;
                  case 1:
                    s11 = I(n4[2], n4[1]);
                    break;
                  case 2:
                    s11 = I(n4[3], n4[1]);
                    break;
                  default:
                    s11 = n4[1];
                }
                return s11 ? (l2 = s11).trim && l2.trim() || l2.replace(/^\s+|\s+$/g, "") : "";
              }
              if (o3 > -1) {
                let s12, n4 = e13.substring(0, o3), r4 = Number(e13.substring(o3 + 1, a3));
                return i12 = B(n4, t12), !isNaN(r4) && i12 && (r4 < 0 ? void 0 === (s12 = i12[i12.length + r4]) && (s12 = i12[0]) : void 0 === (s12 = i12[r4]) && (s12 = i12[i12.length - 1])), void 0 !== s12 ? s12 : "";
              }
              return "{" + e13 + "}";
            }(e12.value, t11));
          }), N(n2.reduce((e12, t12) => e12 + t12.value, ""), t11, i11);
        }
        function i10(e11, i11) {
          let s10 = e11.split("."), n2 = this.options.lang, r2 = 0;
          for (; r2 < s10.length; ++r2) n2 = n2 && n2[s10[r2]];
          return "string" == typeof n2 ? t10(n2, i11, this) : "";
        }
        e10.compose = function(e11) {
          let t11 = e11.prototype;
          t11.langFormat || (t11.langFormat = i10);
        }, e10.i18nFormat = t10;
      }(u || (u = {}));
      let F = u, { doc: O } = w(), { stripHTMLTagsFromString: R } = S, { defined: L, find: H, fireEvent: z } = w();
      function q(e10) {
        if (e10.points && e10.points.length) {
          let t10 = H(e10.points, (e11) => !!e11.graphic);
          return t10 && t10.graphic && t10.graphic.element;
        }
      }
      function G(e10) {
        let t10 = q(e10);
        return t10 && t10.parentNode || e10.graph && e10.graph.element || e10.group && e10.group.element;
      }
      let K = { fireEventOnWrappedOrUnwrappedElement: function e10(t10, i10) {
        let s10 = i10.type, n2 = t10.hcEvents;
        (O == null ? void 0 : O.createEvent) && (t10.dispatchEvent || t10.fireEvent) ? t10.dispatchEvent ? t10.dispatchEvent(i10) : t10.fireEvent(s10, i10) : n2 && n2[s10] ? z(t10, s10, i10) : t10.element && e10(t10.element, i10);
      }, getChartTitle: function(e10) {
        return R(e10.options.title.text || e10.langFormat("accessibility.defaultChartTitle", { chart: e10 }), e10.renderer.forExport);
      }, getAxisDescription: function(e10) {
        var _a, _b;
        return e10 && (((_a = e10.options.accessibility) == null ? void 0 : _a.description) || ((_b = e10.axisTitle) == null ? void 0 : _b.textStr) || e10.options.id || e10.categories && "categories" || e10.dateTime && "Time" || "values");
      }, getAxisRangeDescription: function(e10) {
        let t10 = e10.options || {};
        return t10.accessibility && void 0 !== t10.accessibility.rangeDescription ? t10.accessibility.rangeDescription : e10.categories ? function(e11) {
          let t11 = e11.chart;
          return e11.dataMax && e11.dataMin ? t11.langFormat("accessibility.axis.rangeCategories", { chart: t11, axis: e11, numCategories: e11.dataMax - e11.dataMin + 1 }) : "";
        }(e10) : e10.dateTime && (0 === e10.min || 0 === e10.dataMin) ? function(e11) {
          let t11 = e11.chart, i10 = {}, s10 = e11.dataMin || e11.min || 0, n2 = e11.dataMax || e11.max || 0, r2 = "Seconds";
          i10.Seconds = (n2 - s10) / 1e3, i10.Minutes = i10.Seconds / 60, i10.Hours = i10.Minutes / 60, i10.Days = i10.Hours / 24, ["Minutes", "Hours", "Days"].forEach(function(e12) {
            i10[e12] > 2 && (r2 = e12);
          });
          let o2 = i10[r2].toFixed(+("Seconds" !== r2 && "Minutes" !== r2));
          return t11.langFormat("accessibility.axis.timeRange" + r2, { chart: t11, axis: e11, range: o2.replace(".0", "") });
        }(e10) : function(e11) {
          let t11 = e11.chart, i10 = t11.options, s10 = i10 && i10.accessibility && i10.accessibility.screenReaderSection.axisRangeDateFormat || "", n2 = { min: e11.dataMin || e11.min || 0, max: e11.dataMax || e11.max || 0 }, r2 = function(i11) {
            return e11.dateTime ? t11.time.dateFormat(s10, n2[i11]) : n2[i11].toString();
          };
          return t11.langFormat("accessibility.axis.rangeFromTo", { chart: t11, axis: e11, rangeFrom: r2("min"), rangeTo: r2("max") });
        }(e10);
      }, getPointFromXY: function(e10, t10, i10) {
        let s10 = e10.length, n2;
        for (; s10--; ) if (n2 = H(e10[s10].points || [], function(e11) {
          return e11.x === t10 && e11.y === i10;
        })) return n2;
      }, getSeriesFirstPointElement: q, getSeriesFromName: function(e10, t10) {
        return t10 ? (e10.series || []).filter(function(e11) {
          return e11.name === t10;
        }) : e10.series;
      }, getSeriesA11yElement: G, unhideChartElementFromAT: function e10(t10, i10) {
        i10.setAttribute("aria-hidden", false), i10 !== t10.renderTo && i10.parentNode && i10.parentNode !== O.body && (Array.prototype.forEach.call(i10.parentNode.childNodes, function(e11) {
          e11.hasAttribute("aria-hidden") || e11.setAttribute("aria-hidden", true);
        }), e10(t10, i10.parentNode));
      }, hideSeriesFromAT: function(e10) {
        let t10 = G(e10);
        t10 && t10.setAttribute("aria-hidden", true);
      }, scrollAxisToPoint: function(e10) {
        let t10 = e10.series.xAxis, i10 = e10.series.yAxis, s10 = t10 && t10.scrollbar ? t10 : i10, n2 = s10 && s10.scrollbar;
        if (n2 && L(n2.to) && L(n2.from)) {
          let t11 = n2.to - n2.from, i11 = function(e11, t12) {
            if (!L(e11.dataMin) || !L(e11.dataMax)) return 0;
            let i12 = e11.toPixels(e11.dataMin), s11 = e11.toPixels(e11.dataMax), n3 = "xAxis" === e11.coll ? "x" : "y";
            return (e11.toPixels(t12[n3] || 0) - i12) / (s11 - i12);
          }(s10, e10);
          n2.updatePosition(i11 - t11 / 2, i11 + t11 / 2), z(n2, "changed", { from: n2.from, to: n2.to, trigger: "scrollbar", DOMEvent: null });
        }
      } }, { doc: U } = w(), { removeElement: V } = S, W = class {
        constructor() {
          this.elements = [];
        }
        createElement() {
          let e10 = U.createElement.apply(U, arguments);
          return this.elements.push(e10), e10;
        }
        removeElement(e10) {
          V(e10), this.elements.splice(this.elements.indexOf(e10), 1);
        }
        destroyCreatedElements() {
          this.elements.forEach(function(e10) {
            V(e10);
          }), this.elements = [];
        }
      }, { addEvent: X } = w(), Y = class {
        constructor() {
          this.eventRemovers = [];
        }
        addEvent() {
          let e10 = X.apply(w(), arguments);
          return this.eventRemovers.push({ element: arguments[0], remover: e10 }), e10;
        }
        removeEvent(e10) {
          let t10 = this.eventRemovers.map((e11) => e11.remover).indexOf(e10);
          this.eventRemovers[t10].remover(), this.eventRemovers.splice(t10, 1);
        }
        removeAddedEvents() {
          this.eventRemovers.map((e10) => e10.remover).forEach((e10) => e10()), this.eventRemovers = [];
        }
      }, { fireEventOnWrappedOrUnwrappedElement: j } = K, { getFakeMouseEvent: _ } = S, Z = class {
        destroy() {
        }
        getKeyboardNavigation() {
          return [];
        }
        init() {
        }
        onChartRender() {
        }
        onChartUpdate() {
        }
        initBase(e10, t10) {
          this.chart = e10, this.eventProvider = new Y(), this.domElementProvider = new W(), this.proxyProvider = t10, this.keyCodes = { left: 37, right: 39, up: 38, down: 40, enter: 13, space: 32, esc: 27, tab: 9, pageUp: 33, pageDown: 34, end: 35, home: 36 };
        }
        addEvent(e10, t10, i10, s10) {
          return this.eventProvider.addEvent(e10, t10, i10, s10);
        }
        createElement(e10, t10) {
          return this.domElementProvider.createElement(e10, t10);
        }
        fakeClickEvent(e10) {
          j(e10, _("click"));
        }
        destroyBase() {
          this.domElementProvider.destroyCreatedElements(), this.eventProvider.removeAddedEvents();
        }
      }, { find: $ } = w(), Q = class {
        constructor(e10, t10) {
          this.chart = e10, this.keyCodeMap = t10.keyCodeMap || [], this.validate = t10.validate, this.init = t10.init, this.terminate = t10.terminate, this.response = { success: 1, prev: 2, next: 3, noHandler: 4, fail: 5 };
        }
        run(e10) {
          let t10 = e10.which || e10.keyCode, i10 = this.response.noHandler, s10 = $(this.keyCodeMap, function(e11) {
            return e11[0].indexOf(t10) > -1;
          });
          return s10 ? i10 = s10[1].call(this, t10, e10) : 9 === t10 && (i10 = this.response[e10.shiftKey ? "prev" : "next"]), i10;
        }
      }, { unhideChartElementFromAT: J, getChartTitle: ee } = K, { doc: et } = w(), { stripHTMLTagsFromString: ei } = S, es = class extends Z {
        onChartUpdate() {
          this.handleSVGTitleElement(), this.setSVGContainerLabel(), this.setGraphicContainerAttrs(), this.setRenderToAttrs(), this.makeCreditsAccessible();
        }
        handleSVGTitleElement() {
          let e10 = this.chart, t10 = "highcharts-title-" + e10.index, i10 = ei(e10.langFormat("accessibility.svgContainerTitle", { chartTitle: ee(e10) }));
          if (i10.length) {
            let s10 = this.svgTitleElement = this.svgTitleElement || et.createElementNS("http://www.w3.org/2000/svg", "title");
            s10.textContent = i10, s10.id = t10, e10.renderTo.insertBefore(s10, e10.renderTo.firstChild);
          }
        }
        setSVGContainerLabel() {
          let e10 = this.chart, t10 = e10.langFormat("accessibility.svgContainerLabel", { chartTitle: ee(e10) });
          e10.renderer.box && t10.length && e10.renderer.box.setAttribute("aria-label", t10);
        }
        setGraphicContainerAttrs() {
          let e10 = this.chart, t10 = e10.langFormat("accessibility.graphicContainerLabel", { chartTitle: ee(e10) });
          t10.length && e10.container.setAttribute("aria-label", t10);
        }
        setRenderToAttrs() {
          let e10 = this.chart, t10 = "disabled" !== e10.options.accessibility.landmarkVerbosity, i10 = e10.langFormat("accessibility.chartContainerLabel", { title: ee(e10), chart: e10 });
          i10 && (e10.renderTo.setAttribute("role", t10 ? "region" : "group"), e10.renderTo.setAttribute("aria-label", i10));
        }
        makeCreditsAccessible() {
          let e10 = this.chart, t10 = e10.credits;
          t10 && (t10.textStr && t10.element.setAttribute("aria-label", e10.langFormat("accessibility.credits", { creditsStr: ei(t10.textStr, e10.renderer.forExport) })), J(e10, t10.element));
        }
        getKeyboardNavigation() {
          let e10 = this.chart;
          return new Q(e10, { keyCodeMap: [], validate: function() {
            return true;
          }, init: function() {
            let t10 = e10.accessibility;
            t10 && t10.keyboardNavigation.tabindexContainer.focus();
          } });
        }
        destroy() {
          this.chart.renderTo.setAttribute("aria-hidden", true);
        }
      }, { addEvent: en, pick: er } = w();
      !function(e10) {
        let t10 = ["x", "y", "transform", "width", "height", "r", "d", "stroke-width"];
        function i10() {
          let e11 = this.focusElement, t11 = this.options.accessibility.keyboardNavigation.focusBorder;
          e11 && (e11.removeFocusBorder(), t11.enabled && e11.addFocusBorder(t11.margin, { stroke: t11.style.color, strokeWidth: t11.style.lineWidth, r: t11.style.borderRadius }));
        }
        function s10(e11, t11) {
          let i11 = this.options.accessibility.keyboardNavigation.focusBorder, s11 = t11 || e11.element;
          s11 && s11.focus && (s11.hcEvents && s11.hcEvents.focusin || en(s11, "focusin", function() {
          }), s11.focus(), i11.hideBrowserFocusOutline && (s11.style.outline = "none")), this.focusElement && this.focusElement.removeFocusBorder(), this.focusElement = e11, this.renderFocusBorder();
        }
        function n2(e11, i11) {
          this.focusBorder && this.removeFocusBorder();
          let s11 = this.getBBox(), n3 = er(e11, 3), r3 = this.parentGroup, o2 = this.scaleX || r3 && r3.scaleX, a2 = this.scaleY || r3 && r3.scaleY, l2 = (o2 ? !a2 : a2) ? Math.abs(o2 || a2 || 1) : (Math.abs(o2 || 1) + Math.abs(a2 || 1)) / 2, h2 = this.renderer.fontMetrics(this).h;
          s11.x += this.translateX ? this.translateX : 0, s11.y += this.translateY ? this.translateY : 0;
          let c2 = s11.x - n3, d2 = s11.y - n3, u2 = s11.width + 2 * n3, p2 = s11.height + 2 * n3, g2 = !!this.text;
          if ("text" === this.element.nodeName || g2) {
            let e12, t11, i12 = !!this.rotation, r4 = g2 ? { x: +!!i12, y: 0 } : (e12 = 0, t11 = 0, "middle" === this.attr("text-anchor") ? e12 = t11 = 0.5 : this.rotation ? e12 = 0.25 : t11 = 0.75, { x: e12, y: t11 }), o3 = +this.attr("x"), a3 = +this.attr("y");
            if (isNaN(o3) || (c2 = o3 - s11.width * r4.x - n3), isNaN(a3) || (d2 = a3 - ("start" === this.attr("text-anchor") ? h2 : s11.height) * r4.y - n3), g2 && i12) {
              let e13 = u2;
              u2 = p2, p2 = e13, isNaN(o3) || (c2 = o3 - s11.height * r4.x - n3), isNaN(a3) || (d2 = a3 - s11.width * r4.y - n3);
            }
          }
          this.focusBorder = this.renderer.rect(c2, d2, u2, p2, parseInt((i11 && i11.r || 0).toString(), 10) / l2).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(r3), this.renderer.styledMode || this.focusBorder.attr({ stroke: i11 && i11.stroke, "stroke-width": (i11 && i11.strokeWidth || 0) / l2 }), function(e12, ...i12) {
            !e12.focusBorderUpdateHooks && (e12.focusBorderUpdateHooks = {}, t10.forEach((t11) => {
              let s12 = t11 + "Setter", n4 = e12[s12] || e12._defaultSetter;
              e12.focusBorderUpdateHooks[s12] = n4, e12[s12] = function() {
                let t12 = n4.apply(e12, arguments);
                return e12.addFocusBorder.apply(e12, i12), t12;
              };
            }));
          }(this, e11, i11), function(e12) {
            if (e12.focusBorderDestroyHook) return;
            let t11 = e12.destroy;
            e12.destroy = function() {
              return e12.focusBorder && e12.focusBorder.destroy && e12.focusBorder.destroy(), t11.apply(e12, arguments);
            }, e12.focusBorderDestroyHook = t11;
          }(this);
        }
        function r2() {
          var e11, t11;
          e11 = this, e11.focusBorderUpdateHooks && (Object.keys(e11.focusBorderUpdateHooks).forEach((t12) => {
            let i11 = e11.focusBorderUpdateHooks[t12];
            i11 === e11._defaultSetter ? delete e11[t12] : e11[t12] = i11;
          }), delete e11.focusBorderUpdateHooks), t11 = this, t11.focusBorderDestroyHook && (t11.destroy = t11.focusBorderDestroyHook, delete t11.focusBorderDestroyHook), this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder);
        }
        e10.compose = function(e11, t11) {
          let o2 = e11.prototype, a2 = t11.prototype;
          o2.renderFocusBorder || (o2.renderFocusBorder = i10, o2.setFocusToElement = s10), a2.addFocusBorder || (a2.addFocusBorder = n2, a2.removeFocusBorder = r2);
        };
      }(p || (p = {}));
      let eo = p;
      var ea = x(660), el = x.n(ea);
      let { doc: eh } = w(), { addClass: ec, visuallyHideElement: ed } = S, { attr: eu } = w(), ep = class {
        constructor(e10, t10) {
          this.chart = e10, this.domElementProvider = new W(), this.announceRegion = this.addAnnounceRegion(t10);
        }
        destroy() {
          this.domElementProvider.destroyCreatedElements();
        }
        announce(e10) {
          el().setElementHTML(this.announceRegion, e10), this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer), this.clearAnnouncementRegionTimer = setTimeout(() => {
            this.announceRegion.innerHTML = el().emptyHTML, delete this.clearAnnouncementRegionTimer;
          }, 3e3);
        }
        addAnnounceRegion(e10) {
          let t10 = this.chart.announcerContainer || this.createAnnouncerContainer(), i10 = this.domElementProvider.createElement("div");
          return eu(i10, { "aria-hidden": false, "aria-live": e10, "aria-atomic": true }), this.chart.styledMode ? ec(i10, "highcharts-visually-hidden") : ed(i10), t10.appendChild(i10), i10;
        }
        createAnnouncerContainer() {
          let e10 = this.chart, t10 = eh.createElement("div");
          return eu(t10, { "aria-hidden": false, class: "highcharts-announcer-container" }), t10.style.position = "relative", e10.renderTo.insertBefore(t10, e10.renderTo.firstChild), e10.announcerContainer = t10, t10;
        }
      }, { escapeStringForHTML: eg, stripHTMLTagsFromString: em } = S;
      function eb(e10) {
        return (e10.annotations || []).reduce((e11, t10) => (t10.options && false !== t10.options.visible && (e11 = e11.concat(t10.labels)), e11), []);
      }
      function ef(e10) {
        return e10.options && e10.options.accessibility && e10.options.accessibility.description || e10.graphic && e10.graphic.text && e10.graphic.text.textStr || "";
      }
      function ex(e10) {
        let t10 = e10.options && e10.options.accessibility && e10.options.accessibility.description;
        if (t10) return t10;
        let i10 = e10.chart, s10 = ef(e10), n2 = e10.points, r2 = (e11) => e11.graphic && e11.graphic.element && e11.graphic.element.getAttribute("aria-label") || "", o2 = n2.filter((e11) => !!e11.graphic).map((e11) => {
          let t11 = e11.accessibility && e11.accessibility.valueDescription || r2(e11), i11 = e11 && e11.series.name || "";
          return (i11 ? i11 + ", " : "") + "data point " + t11;
        }).filter((e11) => !!e11), a2 = o2.length, l2 = a2 > 1 ? "MultiplePoints" : a2 ? "SinglePoint" : "NoPoints", h2 = { annotationText: s10, annotation: e10, numPoints: a2, annotationPoint: o2[0], additionalAnnotationPoints: o2.slice(1) };
        return i10.langFormat("accessibility.screenReaderSection.annotations.description" + l2, h2);
      }
      function ey(e10) {
        return eb(e10).map((t10) => {
          let i10 = eg(em(ex(t10), e10.renderer.forExport));
          return i10 ? `<li>${i10}</li>` : "";
        });
      }
      let ev = { getAnnotationsInfoHTML: function(e10) {
        let t10 = e10.annotations;
        if (!(t10 && t10.length)) return "";
        let i10 = ey(e10);
        return `<ul style="list-style-type: none">${i10.join(" ")}</ul>`;
      }, getAnnotationLabelDescription: ex, getAnnotationListItems: ey, getPointAnnotationTexts: function(e10) {
        let t10 = eb(e10.series.chart).filter((t11) => t11.points.indexOf(e10) > -1);
        return t10.length ? t10.map((e11) => `${ef(e11)}`) : [];
      } }, { getAnnotationsInfoHTML: ew } = ev, { getAxisDescription: eE, getAxisRangeDescription: eA, getChartTitle: eT, unhideChartElementFromAT: eC } = K, { format: eM } = D(), { doc: ek } = w(), { addClass: eS, getElement: eP, getHeadingTagNameForElement: eD, stripHTMLTagsFromString: eN, visuallyHideElement: eB } = S, { attr: eI, pick: eF, replaceNested: eO } = w();
      function eR(e10) {
        return eO(e10, [/<([\w\-.:!]+)\b[^<>]*>\s*<\/\1>/g, ""]);
      }
      let eL = class extends Z {
        constructor() {
          super(...arguments), this.screenReaderSections = {};
        }
        init() {
          let e10 = this.chart, t10 = this;
          this.initRegionsDefinitions(), this.addEvent(e10, "aftergetTableAST", function(e11) {
            t10.onDataTableCreated(e11);
          }), this.addEvent(e10, "afterViewData", function(e11) {
            e11.wasHidden && (t10.dataTableDiv = e11.element, setTimeout(function() {
              t10.focusDataTable();
            }, 300));
          }), this.addEvent(e10, "afterHideData", function() {
            t10.viewDataTableButton && t10.viewDataTableButton.setAttribute("aria-expanded", "false");
          }), e10.exporting && this.addEvent(e10, "afterPrint", function() {
            t10.updateAllScreenReaderSections();
          }), this.announcer = new ep(e10, "assertive");
        }
        initRegionsDefinitions() {
          let e10 = this, t10 = this.chart.options.accessibility;
          this.screenReaderSections = { before: { element: null, buildContent: function(i10) {
            let s10 = t10.screenReaderSection.beforeChartFormatter;
            return s10 ? s10(i10) : e10.defaultBeforeChartFormatter(i10);
          }, insertIntoDOM: function(e11, t11) {
            t11.renderTo.insertBefore(e11, t11.renderTo.firstChild);
          }, afterInserted: function() {
            void 0 !== e10.sonifyButtonId && e10.initSonifyButton(e10.sonifyButtonId), void 0 !== e10.dataTableButtonId && e10.initDataTableButton(e10.dataTableButtonId);
          } }, after: { element: null, buildContent: function(i10) {
            let s10 = t10.screenReaderSection.afterChartFormatter;
            return s10 ? s10(i10) : e10.defaultAfterChartFormatter();
          }, insertIntoDOM: function(e11, t11) {
            t11.renderTo.insertBefore(e11, t11.container.nextSibling);
          }, afterInserted: function() {
            e10.chart.accessibility && t10.keyboardNavigation.enabled && e10.chart.accessibility.keyboardNavigation.updateExitAnchor();
          } } };
        }
        onChartRender() {
          this.linkedDescriptionElement = this.getLinkedDescriptionElement(), this.setLinkedDescriptionAttrs(), this.updateAllScreenReaderSections();
        }
        updateAllScreenReaderSections() {
          let e10 = this;
          Object.keys(this.screenReaderSections).forEach(function(t10) {
            e10.updateScreenReaderSection(t10);
          });
        }
        getLinkedDescriptionElement() {
          let e10 = this.chart.options.accessibility.linkedDescription;
          if (!e10) return;
          if ("string" != typeof e10) return e10;
          let t10 = eM(e10, this.chart), i10 = ek.querySelectorAll(t10);
          if (1 === i10.length) return i10[0];
        }
        setLinkedDescriptionAttrs() {
          let e10 = this.linkedDescriptionElement;
          e10 && (e10.setAttribute("aria-hidden", "true"), eS(e10, "highcharts-linked-description"));
        }
        updateScreenReaderSection(e10) {
          let t10 = this.chart, i10 = this.screenReaderSections[e10], s10 = i10.buildContent(t10), n2 = i10.element = i10.element || this.createElement("div"), r2 = n2.firstChild || this.createElement("div");
          s10 ? (this.setScreenReaderSectionAttribs(n2, e10), el().setElementHTML(r2, s10), n2.appendChild(r2), i10.insertIntoDOM(n2, t10), t10.styledMode ? eS(r2, "highcharts-visually-hidden") : eB(r2), eC(t10, r2), i10.afterInserted && i10.afterInserted()) : (n2.parentNode && n2.parentNode.removeChild(n2), i10.element = null);
        }
        setScreenReaderSectionAttribs(e10, t10) {
          let i10 = this.chart, s10 = i10.langFormat("accessibility.screenReaderSection." + t10 + "RegionLabel", { chart: i10, chartTitle: eT(i10) });
          eI(e10, { id: `highcharts-screen-reader-region-${t10}-${i10.index}`, "aria-label": s10 || void 0 }), e10.style.position = "relative", s10 && e10.setAttribute("role", "all" === i10.options.accessibility.landmarkVerbosity ? "region" : "group");
        }
        defaultBeforeChartFormatter() {
          let e10 = this.chart, t10 = e10.options.accessibility.screenReaderSection.beforeChartFormat;
          if (!t10) return "";
          let i10 = this.getAxesDescription(), s10 = e10.sonify && e10.options.sonification && e10.options.sonification.enabled, n2 = "highcharts-a11y-sonify-data-btn-" + e10.index, r2 = "hc-linkto-highcharts-data-table-" + e10.index, o2 = ew(e10), a2 = e10.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: e10 }), l2 = { headingTagName: eD(e10.renderTo), chartTitle: eT(e10), typeDescription: this.getTypeDescriptionText(), chartSubtitle: this.getSubtitleText(), chartLongdesc: this.getLongdescText(), xAxisDescription: i10.xAxis, yAxisDescription: i10.yAxis, playAsSoundButton: s10 ? this.getSonifyButtonText(n2) : "", viewTableButton: e10.getCSV ? this.getDataTableButtonText(r2) : "", annotationsTitle: o2 ? a2 : "", annotationsList: o2 }, h2 = F.i18nFormat(t10, l2, e10);
          return this.dataTableButtonId = r2, this.sonifyButtonId = n2, eR(h2);
        }
        defaultAfterChartFormatter() {
          let e10 = this.chart, t10 = e10.options.accessibility.screenReaderSection.afterChartFormat;
          if (!t10) return "";
          let i10 = { endOfChartMarker: this.getEndOfChartMarkerText() };
          return eR(F.i18nFormat(t10, i10, e10));
        }
        getLinkedDescription() {
          let e10 = this.linkedDescriptionElement;
          return eN(e10 && e10.innerHTML || "", this.chart.renderer.forExport);
        }
        getLongdescText() {
          let e10 = this.chart.options, t10 = e10.caption, i10 = t10 && t10.text, s10 = this.getLinkedDescription();
          return e10.accessibility.description || s10 || i10 || "";
        }
        getTypeDescriptionText() {
          let e10 = this.chart;
          return e10.types ? e10.options.accessibility.typeDescription || function(e11, t10) {
            let i10 = t10[0], s10 = e11.series && e11.series[0] || {}, n2 = e11.mapView && e11.mapView.geoMap && e11.mapView.geoMap.title, r2 = { numSeries: e11.series.length, numPoints: s10.points && s10.points.length, chart: e11, mapTitle: n2 };
            return i10 ? "map" === i10 || "tiledwebmap" === i10 ? r2.mapTitle ? e11.langFormat("accessibility.chartTypes.mapTypeDescription", r2) : e11.langFormat("accessibility.chartTypes.unknownMap", r2) : e11.types.length > 1 ? e11.langFormat("accessibility.chartTypes.combinationChart", r2) : function(e12, t11, i11) {
              let s11 = t11[0], n3 = e12.langFormat("accessibility.seriesTypeDescriptions." + s11, i11), r3 = e12.series && e12.series.length < 2 ? "Single" : "Multiple";
              return (e12.langFormat("accessibility.chartTypes." + s11 + r3, i11) || e12.langFormat("accessibility.chartTypes.default" + r3, i11)) + (n3 ? " " + n3 : "");
            }(e11, t10, r2) : e11.langFormat("accessibility.chartTypes.emptyChart", r2);
          }(e10, e10.types) : "";
        }
        getDataTableButtonText(e10) {
          let t10 = this.chart;
          return '<button id="' + e10 + '">' + t10.langFormat("accessibility.table.viewAsDataTableButtonText", { chart: t10, chartTitle: eT(t10) }) + "</button>";
        }
        getSonifyButtonText(e10) {
          let t10 = this.chart;
          return t10.options.sonification && false === t10.options.sonification.enabled ? "" : '<button id="' + e10 + '">' + t10.langFormat("accessibility.sonification.playAsSoundButtonText", { chart: t10, chartTitle: eT(t10) }) + "</button>";
        }
        getSubtitleText() {
          let e10 = this.chart.options.subtitle;
          return eN(e10 && e10.text || "", this.chart.renderer.forExport);
        }
        getEndOfChartMarkerText() {
          let e10 = eP(`highcharts-end-of-chart-marker-${this.chart.index}`);
          if (e10) return e10.outerHTML;
          let t10 = this.chart, i10 = t10.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: t10 });
          return '<div id="highcharts-end-of-chart-marker-' + t10.index + '">' + i10 + "</div>";
        }
        onDataTableCreated(e10) {
          let t10 = this.chart;
          if (t10.options.accessibility.enabled) {
            this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true");
            let i10 = e10.tree.attributes || {};
            i10.tabindex = -1, i10.summary = t10.langFormat("accessibility.table.tableSummary", { chart: t10 }), e10.tree.attributes = i10;
          }
        }
        focusDataTable() {
          let e10 = this.dataTableDiv, t10 = e10 && e10.getElementsByTagName("table")[0];
          t10 && t10.focus && t10.focus();
        }
        initSonifyButton(e10) {
          let t10 = this.sonifyButton = eP(e10), i10 = this.chart, s10 = (e11) => {
            t10 && (t10.setAttribute("aria-hidden", "true"), t10.setAttribute("aria-label", "")), e11.preventDefault(), e11.stopPropagation();
            let s11 = i10.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: i10 });
            this.announcer.announce(s11), setTimeout(() => {
              t10 && (t10.removeAttribute("aria-hidden"), t10.removeAttribute("aria-label")), i10.sonify && i10.sonify();
            }, 1e3);
          };
          t10 && i10 && (t10.setAttribute("tabindex", -1), t10.onclick = function(e11) {
            (i10.options.accessibility && i10.options.accessibility.screenReaderSection.onPlayAsSoundClick || s10).call(this, e11, i10);
          });
        }
        initDataTableButton(e10) {
          let t10 = this.viewDataTableButton = eP(e10), i10 = this.chart, s10 = e10.replace("hc-linkto-", "");
          t10 && (eI(t10, { tabindex: -1, "aria-expanded": !!eP(s10) }), t10.onclick = i10.options.accessibility.screenReaderSection.onViewDataTableClick || function() {
            i10.viewData();
          });
        }
        getAxesDescription() {
          let e10 = this.chart, t10 = function(t11, i11) {
            let s11 = e10[t11];
            return s11.length > 1 || s11[0] && eF(s11[0].options.accessibility && s11[0].options.accessibility.enabled, i11);
          }, i10 = !!e10.types && 0 > e10.types.indexOf("map") && 0 > e10.types.indexOf("treemap") && 0 > e10.types.indexOf("tilemap"), s10 = !!e10.hasCartesianSeries, n2 = t10("xAxis", !e10.angular && s10 && i10), r2 = t10("yAxis", s10 && i10), o2 = {};
          return n2 && (o2.xAxis = this.getAxisDescriptionText("xAxis")), r2 && (o2.yAxis = this.getAxisDescriptionText("yAxis")), o2;
        }
        getAxisDescriptionText(e10) {
          let t10 = this.chart, i10 = t10[e10];
          return t10.langFormat("accessibility.axis." + e10 + "Description" + (i10.length > 1 ? "Plural" : "Singular"), { chart: t10, names: i10.map(function(e11) {
            return eE(e11);
          }), ranges: i10.map(function(e11) {
            return eA(e11);
          }), numAxes: i10.length });
        }
        destroy() {
          this.announcer && this.announcer.destroy();
        }
      }, { attr: eH } = w(), { getChartTitle: ez, unhideChartElementFromAT: eq } = K, { getFakeMouseEvent: eG } = S;
      function eK(e10) {
        return e10.exportSVGElements && e10.exportSVGElements[0];
      }
      class eU extends Z {
        init() {
          let e10 = this.chart, t10 = this;
          this.addEvent(e10, "exportMenuShown", function() {
            t10.onMenuShown();
          }), this.addEvent(e10, "exportMenuHidden", function() {
            t10.onMenuHidden();
          }), this.createProxyGroup();
        }
        onMenuHidden() {
          let e10 = this.chart.exportContextMenu;
          e10 && e10.setAttribute("aria-hidden", "true"), this.setExportButtonExpandedState("false");
        }
        onMenuShown() {
          let e10 = this.chart, t10 = e10.exportContextMenu;
          t10 && (this.addAccessibleContextMenuAttribs(), eq(e10, t10)), this.setExportButtonExpandedState("true");
        }
        setExportButtonExpandedState(e10) {
          this.exportButtonProxy && this.exportButtonProxy.innerElement.setAttribute("aria-expanded", e10);
        }
        onChartRender() {
          let e10 = this.chart, t10 = e10.focusElement, i10 = e10.accessibility;
          this.proxyProvider.clearGroup("chartMenu"), this.proxyMenuButton(), this.exportButtonProxy && t10 && t10 === e10.exportingGroup && (t10.focusBorder ? e10.setFocusToElement(t10, this.exportButtonProxy.innerElement) : i10 && i10.keyboardNavigation.tabindexContainer.focus());
        }
        proxyMenuButton() {
          let e10 = this.chart, t10 = this.proxyProvider, i10 = eK(e10);
          (function(e11) {
            let t11 = e11.options.exporting, i11 = eK(e11);
            return !!(t11 && false !== t11.enabled && t11.accessibility && t11.accessibility.enabled && i11 && i11.element);
          })(e10) && i10 && (this.exportButtonProxy = t10.addProxyElement("chartMenu", { click: i10 }, "button", { "aria-label": e10.langFormat("accessibility.exporting.menuButtonLabel", { chart: e10, chartTitle: ez(e10) }), "aria-expanded": false, title: e10.options.lang.contextButtonTitle || null }));
        }
        createProxyGroup() {
          this.chart && this.proxyProvider && this.proxyProvider.addGroup("chartMenu");
        }
        addAccessibleContextMenuAttribs() {
          let e10 = this.chart, t10 = e10.exportDivElements;
          if (t10 && t10.length) {
            t10.forEach((e11) => {
              e11 && ("LI" !== e11.tagName || e11.children && e11.children.length ? e11.setAttribute("aria-hidden", "true") : e11.setAttribute("tabindex", -1));
            });
            let i10 = t10[0] && t10[0].parentNode;
            i10 && eH(i10, { "aria-hidden": void 0, "aria-label": e10.langFormat("accessibility.exporting.chartMenuLabel", { chart: e10 }), role: "list" });
          }
        }
        getKeyboardNavigation() {
          let e10 = this.keyCodes, t10 = this.chart, i10 = this;
          return new Q(t10, { keyCodeMap: [[[e10.left, e10.up], function() {
            return i10.onKbdPrevious(this);
          }], [[e10.right, e10.down], function() {
            return i10.onKbdNext(this);
          }], [[e10.enter, e10.space], function() {
            return i10.onKbdClick(this);
          }]], validate: function() {
            var _a, _b;
            return !!t10.exporting && ((_b = (_a = t10.options.exporting) == null ? void 0 : _a.buttons) == null ? void 0 : _b.contextButton.enabled) !== false && false !== t10.options.exporting.enabled && false !== t10.options.exporting.accessibility.enabled;
          }, init: function() {
            let e11 = i10.exportButtonProxy, s10 = i10.chart.exportingGroup;
            e11 && s10 && t10.setFocusToElement(s10, e11.innerElement);
          }, terminate: function() {
            t10.hideExportMenu();
          } });
        }
        onKbdPrevious(e10) {
          let t10 = this.chart, i10 = t10.options.accessibility, s10 = e10.response, n2 = t10.highlightedExportItemIx || 0;
          for (; n2--; ) if (t10.highlightExportItem(n2)) return s10.success;
          return i10.keyboardNavigation.wrapAround ? (t10.highlightLastExportItem(), s10.success) : s10.prev;
        }
        onKbdNext(e10) {
          let t10 = this.chart, i10 = t10.options.accessibility, s10 = e10.response;
          for (let e11 = (t10.highlightedExportItemIx || 0) + 1; e11 < t10.exportDivElements.length; ++e11) if (t10.highlightExportItem(e11)) return s10.success;
          return i10.keyboardNavigation.wrapAround ? (t10.highlightExportItem(0), s10.success) : s10.next;
        }
        onKbdClick(e10) {
          let t10 = this.chart, i10 = t10.exportDivElements[t10.highlightedExportItemIx], s10 = eK(t10).element;
          return t10.openMenu ? this.fakeClickEvent(i10) : (this.fakeClickEvent(s10), t10.highlightExportItem(0)), e10.response.success;
        }
      }
      !function(e10) {
        function t10() {
          let e11 = eK(this);
          if (e11) {
            let t11 = e11.element;
            t11.onclick && t11.onclick(eG("click"));
          }
        }
        function i10() {
          let e11 = this.exportDivElements;
          e11 && this.exportContextMenu && this.openMenu && (e11.forEach((e12) => {
            e12 && "highcharts-menu-item" === e12.className && e12.onmouseout && e12.onmouseout(eG("mouseout"));
          }), this.highlightedExportItemIx = 0, this.exportContextMenu.hideMenu(), this.container.focus());
        }
        function s10(e11) {
          let t11 = this.exportDivElements && this.exportDivElements[e11], i11 = this.exportDivElements && this.exportDivElements[this.highlightedExportItemIx];
          if (t11 && "LI" === t11.tagName && !(t11.children && t11.children.length)) {
            let s11 = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus;
            return t11.focus && s11 && t11.focus(), i11 && i11.onmouseout && i11.onmouseout(eG("mouseout")), t11.onmouseover && t11.onmouseover(eG("mouseover")), this.highlightedExportItemIx = e11, true;
          }
          return false;
        }
        function n2() {
          if (this.exportDivElements) {
            let e11 = this.exportDivElements.length;
            for (; e11--; ) if (this.highlightExportItem(e11)) return true;
          }
          return false;
        }
        e10.compose = function(e11) {
          let r2 = e11.prototype;
          r2.hideExportMenu || (r2.hideExportMenu = i10, r2.highlightExportItem = s10, r2.highlightLastExportItem = n2, r2.showExportMenu = t10);
        };
      }(eU || (eU = {}));
      let eV = eU, { doc: eW, win: eX } = w(), { addEvent: eY, defined: ej, fireEvent: e_ } = w(), { getElement: eZ, simulatedEventTarget: e$ } = S;
      class eQ {
        constructor(e10, t10) {
          this.currentModuleIx = NaN, this.modules = [], this.init(e10, t10);
        }
        init(e10, t10) {
          let i10 = this.eventProvider = new Y();
          this.chart = e10, this.components = t10, this.modules = [], this.currentModuleIx = 0, this.update(), i10.addEvent(this.tabindexContainer, "keydown", (e11) => this.onKeydown(e11)), i10.addEvent(this.tabindexContainer, "focus", (e11) => this.onFocus(e11)), ["mouseup", "touchend"].forEach((e11) => i10.addEvent(eW, e11, (e12) => this.onMouseUp(e12))), ["mousedown", "touchstart"].forEach((t11) => i10.addEvent(e10.renderTo, t11, () => {
            this.isClickingChart = true;
          }));
        }
        update(e10) {
          let t10 = this.chart.options.accessibility, i10 = t10 && t10.keyboardNavigation, s10 = this.components;
          this.updateContainerTabindex(), i10 && i10.enabled && e10 && e10.length ? (this.modules = e10.reduce(function(e11, t11) {
            let i11 = s10[t11].getKeyboardNavigation();
            return e11.concat(i11);
          }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor());
        }
        updateExitAnchor() {
          let e10 = eZ(`highcharts-end-of-chart-marker-${this.chart.index}`);
          this.removeExitAnchor(), e10 ? (this.makeElementAnExitAnchor(e10), this.exitAnchor = e10) : this.createExitAnchor();
        }
        move(e10) {
          let t10 = this.modules && this.modules[this.currentModuleIx];
          t10 && t10.terminate && t10.terminate(e10), this.chart.focusElement && this.chart.focusElement.removeFocusBorder(), this.currentModuleIx += e10;
          let i10 = this.modules && this.modules[this.currentModuleIx];
          if (i10) {
            if (i10.validate && !i10.validate()) return this.move(e10);
            if (i10.init) return i10.init(e10), true;
          }
          return this.currentModuleIx = 0, this.exiting = true, e10 > 0 ? this.exitAnchor && this.exitAnchor.focus() : this.tabindexContainer.focus(), false;
        }
        onFocus(e10) {
          let t10 = this.chart, i10 = e10.relatedTarget && t10.container.contains(e10.relatedTarget), s10 = t10.options.accessibility, n2 = s10 && s10.keyboardNavigation;
          if (n2 && n2.enabled && !this.exiting && !this.tabbingInBackwards && !this.isClickingChart && !i10) {
            let e11 = this.getFirstValidModuleIx();
            null !== e11 && (this.currentModuleIx = e11, this.modules[e11].init(1));
          }
          this.keyboardReset = false, this.exiting = false;
        }
        onMouseUp(e10) {
          if (delete this.isClickingChart, !this.keyboardReset && e10.relatedTarget !== e$) {
            let t10 = this.chart;
            if (!e10.target || !t10.container.contains(e10.target)) {
              let e11 = this.modules && this.modules[this.currentModuleIx || 0];
              e11 && e11.terminate && e11.terminate(), this.currentModuleIx = 0;
            }
            t10.focusElement && (t10.focusElement.removeFocusBorder(), delete t10.focusElement), this.keyboardReset = true;
          }
        }
        onKeydown(e10) {
          let t10, i10 = e10 || eX.event, s10 = this.modules && this.modules.length && this.modules[this.currentModuleIx], n2 = i10.target;
          if ((!n2 || "INPUT" !== n2.nodeName || n2.classList.contains("highcharts-a11y-proxy-element")) && (this.keyboardReset = false, this.exiting = false, s10)) {
            let e11 = s10.run(i10);
            e11 === s10.response.success ? t10 = true : e11 === s10.response.prev ? t10 = this.move(-1) : e11 === s10.response.next && (t10 = this.move(1)), t10 && (i10.preventDefault(), i10.stopPropagation());
          }
        }
        updateContainerTabindex() {
          let e10, t10 = this.chart.options.accessibility, i10 = t10 && t10.keyboardNavigation, s10 = !(i10 && false === i10.enabled), n2 = this.chart, r2 = n2.container;
          n2.renderTo.hasAttribute("tabindex") ? (r2.removeAttribute("tabindex"), e10 = n2.renderTo) : e10 = r2, this.tabindexContainer = e10;
          let o2 = e10.getAttribute("tabindex");
          s10 && !o2 ? e10.setAttribute("tabindex", "0") : s10 || n2.container.removeAttribute("tabindex");
        }
        createExitAnchor() {
          let e10 = this.chart, t10 = this.exitAnchor = eW.createElement("div");
          e10.renderTo.appendChild(t10), this.makeElementAnExitAnchor(t10);
        }
        makeElementAnExitAnchor(e10) {
          let t10 = this.tabindexContainer.getAttribute("tabindex") || 0;
          e10.setAttribute("class", "highcharts-exit-anchor"), e10.setAttribute("tabindex", t10), e10.setAttribute("aria-hidden", false), this.addExitAnchorEventsToEl(e10);
        }
        removeExitAnchor() {
          if (this.exitAnchor) {
            let e10 = this.eventProvider.eventRemovers.find((e11) => e11.element === this.exitAnchor);
            e10 && ej(e10.remover) && this.eventProvider.removeEvent(e10.remover), this.exitAnchor.parentNode && this.exitAnchor.parentNode.removeChild(this.exitAnchor), delete this.exitAnchor;
          }
        }
        addExitAnchorEventsToEl(e10) {
          let t10 = this.chart, i10 = this;
          this.eventProvider.addEvent(e10, "focus", function(e11) {
            let s10 = e11 || eX.event, n2 = !(s10.relatedTarget && t10.container.contains(s10.relatedTarget) || i10.exiting);
            if (t10.focusElement && delete t10.focusElement, n2) {
              if (i10.tabbingInBackwards = true, i10.tabindexContainer.focus(), delete i10.tabbingInBackwards, s10.preventDefault(), i10.modules && i10.modules.length) {
                i10.currentModuleIx = i10.modules.length - 1;
                let e12 = i10.modules[i10.currentModuleIx];
                e12 && e12.validate && !e12.validate() ? i10.move(-1) : e12 && e12.init(-1);
              }
            } else i10.exiting = false;
          });
        }
        getFirstValidModuleIx() {
          let e10 = this.modules.length;
          for (let t10 = 0; t10 < e10; ++t10) {
            let e11 = this.modules[t10];
            if (!e11.validate || e11.validate()) return t10;
          }
          return null;
        }
        destroy() {
          this.removeExitAnchor(), this.eventProvider.removeAddedEvents(), this.chart.container.removeAttribute("tabindex");
        }
      }
      !function(e10) {
        function t10() {
          let e11 = this;
          e_(this, "dismissPopupContent", {}, function() {
            e11.tooltip && e11.tooltip.hide(0), e11.hideExportMenu();
          });
        }
        function i10(e11) {
          27 === (e11.which || e11.keyCode) && w().charts && w().charts.forEach((e12) => {
            e12 && e12.dismissPopupContent && e12.dismissPopupContent();
          });
        }
        e10.compose = function(e11) {
          eV.compose(e11);
          let s10 = e11.prototype;
          return !s10.dismissPopupContent && (s10.dismissPopupContent = t10, eW && eY(eW, "keydown", i10)), e11;
        };
      }(eQ || (eQ = {}));
      let eJ = eQ;
      var e0 = x(632), e1 = x.n(e0);
      let { animObject: e2 } = w(), { doc: e3 } = w(), { addEvent: e5, fireEvent: e4, isNumber: e6, pick: e9, syncTimeout: e8 } = w(), { getChartTitle: e7 } = K, { stripHTMLTagsFromString: te, addClass: tt, removeClass: ti } = S;
      function ts(e10) {
        let t10 = e10.legend && e10.legend.allItems, i10 = e10.options.legend.accessibility || {}, s10 = e10.colorAxis && e10.colorAxis.some((e11) => !e11.dataClasses || !e11.dataClasses.length);
        return !!(t10 && t10.length && !s10 && false !== i10.enabled);
      }
      function tn(e10, t10) {
        let i10 = t10.legendItem || {};
        for (let s10 of (t10.setState(e10 ? "hover" : "", true), ["group", "label", "symbol"])) {
          let t11 = i10[s10], n2 = t11 && t11.element || t11;
          n2 && e4(n2, e10 ? "mouseover" : "mouseout");
        }
      }
      class tr extends Z {
        constructor() {
          super(...arguments), this.highlightedLegendItemIx = NaN, this.proxyGroup = null;
        }
        init() {
          let e10 = this;
          this.recreateProxies(), this.addEvent(e1(), "afterScroll", function() {
            this.chart === e10.chart && (e10.proxyProvider.updateGroupProxyElementPositions("legend"), e10.updateLegendItemProxyVisibility(), e10.highlightedLegendItemIx > -1 && this.chart.highlightLegendItem(e10.highlightedLegendItemIx));
          }), this.addEvent(e1(), "afterPositionItem", function(t10) {
            this.chart === e10.chart && this.chart.renderer && e10.updateProxyPositionForItem(t10.item);
          }), this.addEvent(e1(), "afterRender", function() {
            this.chart === e10.chart && this.chart.renderer && e10.recreateProxies() && e8(() => e10.proxyProvider.updateGroupProxyElementPositions("legend"), e2(e9(this.chart.renderer.globalAnimation, true)).duration);
          });
        }
        updateLegendItemProxyVisibility() {
          let e10, t10 = this.chart, i10 = t10.legend, s10 = i10.allItems || [], n2 = i10.currentPage || 1, r2 = i10.clipHeight || 0;
          s10.forEach((s11) => {
            if (s11.a11yProxyElement) {
              let o2 = i10.pages && i10.pages.length, a2 = s11.a11yProxyElement.element, l2 = false;
              if (e10 = s11.legendItem || {}, o2) {
                let t11 = e10.pageIx || 0;
                l2 = (e10.y || 0) + (e10.label ? Math.round(e10.label.getBBox().height) : 0) - i10.pages[t11] > r2 || t11 !== n2 - 1;
              }
              l2 ? t10.styledMode ? tt(a2, "highcharts-a11y-invisible") : a2.style.visibility = "hidden" : (ti(a2, "highcharts-a11y-invisible"), a2.style.visibility = "");
            }
          });
        }
        onChartRender() {
          ts(this.chart) || this.removeProxies();
        }
        highlightAdjacentLegendPage(e10) {
          let t10 = this.chart, i10 = t10.legend, s10 = (i10.currentPage || 1) + e10, n2 = i10.pages || [];
          if (s10 > 0 && s10 <= n2.length) {
            let e11 = 0;
            for (let n3 of i10.allItems) ((n3.legendItem || {}).pageIx || 0) + 1 === s10 && t10.highlightLegendItem(e11) && (this.highlightedLegendItemIx = e11), ++e11;
          }
        }
        updateProxyPositionForItem(e10) {
          e10.a11yProxyElement && e10.a11yProxyElement.refreshPosition();
        }
        recreateProxies() {
          let e10 = e3.activeElement, t10 = this.proxyGroup, i10 = e10 && t10 && t10.contains(e10);
          return this.removeProxies(), !!ts(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility(), this.updateLegendTitle(), i10 && this.chart.highlightLegendItem(this.highlightedLegendItemIx), true);
        }
        removeProxies() {
          this.proxyProvider.removeGroup("legend");
        }
        updateLegendTitle() {
          let e10 = this.chart, t10 = te((e10.legend && e10.legend.options.title && e10.legend.options.title.text || "").replace(/<br ?\/?>/g, " "), e10.renderer.forExport), i10 = e10.langFormat("accessibility.legend.legendLabel" + (t10 ? "" : "NoTitle"), { chart: e10, legendTitle: t10, chartTitle: e7(e10) });
          this.proxyProvider.updateGroupAttrs("legend", { "aria-label": i10 });
        }
        addLegendProxyGroup() {
          let e10 = "all" === this.chart.options.accessibility.landmarkVerbosity ? "region" : null;
          this.proxyGroup = this.proxyProvider.addGroup("legend", "ul", { "aria-label": "_placeholder_", role: e10 });
        }
        proxyLegendItems() {
          let e10, t10 = this;
          ((this.chart.legend || {}).allItems || []).forEach((i10) => {
            (e10 = i10.legendItem || {}).label && e10.label.element && t10.proxyLegendItem(i10);
          });
        }
        proxyLegendItem(e10) {
          let t10 = e10.legendItem || {};
          if (!t10.label || !t10.group) return;
          let i10 = this.chart.langFormat("accessibility.legend.legendItem", { chart: this.chart, itemName: te(e10.name, this.chart.renderer.forExport), item: e10 }), s10 = { tabindex: -1, "aria-pressed": e10.visible, "aria-label": i10 }, n2 = t10.group.div ? t10.label : t10.group;
          e10.a11yProxyElement = this.proxyProvider.addProxyElement("legend", { click: t10.label, visual: n2.element }, "button", s10);
        }
        getKeyboardNavigation() {
          let e10 = this.keyCodes, t10 = this, i10 = this.chart;
          return new Q(i10, { keyCodeMap: [[[e10.left, e10.right, e10.up, e10.down], function(e11) {
            return t10.onKbdArrowKey(this, e11);
          }], [[e10.enter, e10.space], function() {
            return t10.onKbdClick(this);
          }], [[e10.pageDown, e10.pageUp], function(i11) {
            let s10 = i11 === e10.pageDown ? 1 : -1;
            return t10.highlightAdjacentLegendPage(s10), this.response.success;
          }]], validate: function() {
            return t10.shouldHaveLegendNavigation();
          }, init: function() {
            i10.highlightLegendItem(0), t10.highlightedLegendItemIx = 0;
          }, terminate: function() {
            t10.highlightedLegendItemIx = -1, i10.legend.allItems.forEach((e11) => tn(false, e11));
          } });
        }
        onKbdArrowKey(e10, t10) {
          let { keyCodes: { left: i10, up: s10 }, highlightedLegendItemIx: n2, chart: r2 } = this, o2 = r2.legend.allItems.length, a2 = r2.options.accessibility.keyboardNavigation.wrapAround, l2 = t10 === i10 || t10 === s10 ? -1 : 1;
          return r2.highlightLegendItem(n2 + l2) ? this.highlightedLegendItemIx += l2 : a2 && o2 > 1 && (this.highlightedLegendItemIx = l2 > 0 ? 0 : o2 - 1, r2.highlightLegendItem(this.highlightedLegendItemIx)), e10.response.success;
        }
        onKbdClick(e10) {
          let t10 = this.chart.legend.allItems[this.highlightedLegendItemIx];
          return t10 && t10.a11yProxyElement && t10.a11yProxyElement.click(), e10.response.success;
        }
        shouldHaveLegendNavigation() {
          if (!ts(this.chart)) return false;
          let e10 = this.chart, t10 = (e10.options.legend || {}).accessibility || {};
          return !!(e10.legend.display && t10.keyboardNavigation && t10.keyboardNavigation.enabled);
        }
        destroy() {
          this.removeProxies();
        }
      }
      !function(e10) {
        function t10(e11) {
          let t11 = this.legend.allItems, i11 = this.accessibility && this.accessibility.components.legend.highlightedLegendItemIx, s10 = t11[e11], n2 = (s10 == null ? void 0 : s10.legendItem) || {};
          if (s10) {
            e6(i11) && t11[i11] && tn(false, t11[i11]), function(e12, t12) {
              let i12 = (e12.allItems[t12].legendItem || {}).pageIx, s11 = e12.currentPage;
              void 0 !== i12 && i12 + 1 !== s11 && e12.scroll(1 + i12 - s11);
            }(this.legend, e11);
            let r2 = n2.label, o2 = s10.a11yProxyElement && s10.a11yProxyElement.innerElement;
            return r2 && r2.element && o2 && this.setFocusToElement(r2, o2), tn(true, s10), true;
          }
          return false;
        }
        function i10(e11) {
          let t11 = this.chart.options.accessibility, i11 = e11.item;
          t11.enabled && i11 && i11.a11yProxyElement && i11.a11yProxyElement.innerElement.setAttribute("aria-pressed", e11.visible ? "true" : "false");
        }
        e10.compose = function(e11, s10) {
          let n2 = e11.prototype;
          n2.highlightLegendItem || (n2.highlightLegendItem = t10, e5(s10, "afterColorizeItem", i10));
        };
      }(tr || (tr = {}));
      let to = tr;
      var ta = x(532), tl = x.n(ta);
      let { isTouchDevice: th } = w(), { addEvent: tc, merge: td, pick: tu } = w(), tp = [];
      function tg() {
        this.navigator && this.navigator.setBaseSeries(null, false);
      }
      function tm() {
        var _a;
        let e10, t10, i10, s10 = this.legend, n2 = this.navigator;
        if (n2) {
          e10 = s10 && s10.options, t10 = n2.xAxis, i10 = n2.yAxis;
          let { scrollbarHeight: r2, scrollButtonSize: o2 } = n2;
          this.inverted ? (n2.left = n2.opposite ? this.chartWidth - r2 - n2.height : this.spacing[3] + r2, n2.top = this.plotTop + o2) : (n2.left = tu(t10.left, this.plotLeft + o2), n2.top = n2.navigatorOptions.top || this.chartHeight - n2.height - r2 - (((_a = this.scrollbar) == null ? void 0 : _a.options.margin) || 0) - this.spacing[2] - (this.rangeSelector && this.extraBottomMargin ? this.rangeSelector.getHeight() : 0) - (e10 && "bottom" === e10.verticalAlign && "proximate" !== e10.layout && e10.enabled && !e10.floating ? s10.legendHeight + tu(e10.margin, 10) : 0) - (this.titleOffset ? this.titleOffset[2] : 0)), t10 && i10 && (this.inverted ? t10.options.left = i10.options.left = n2.left : t10.options.top = i10.options.top = n2.top, t10.setAxisSize(), i10.setAxisSize());
        }
      }
      function tb(e10) {
        !this.navigator && !this.scroller && (this.options.navigator.enabled || this.options.scrollbar.enabled) && (this.scroller = this.navigator = new d(this), tu(e10.redraw, true) && this.redraw(e10.animation));
      }
      function tf() {
        let e10 = this.options;
        (e10.navigator.enabled || e10.scrollbar.enabled) && (this.scroller = this.navigator = new d(this));
      }
      function tx() {
        let e10 = this.options, t10 = e10.navigator, i10 = e10.rangeSelector;
        if ((t10 && t10.enabled || i10 && i10.enabled) && (!th && "x" === this.zooming.type || th && "x" === this.zooming.pinchType)) return false;
      }
      function ty(e10) {
        let t10 = e10.navigator;
        if (t10 && e10.xAxis[0]) {
          let i10 = e10.xAxis[0].getExtremes();
          t10.render(i10.min, i10.max);
        }
      }
      function tv(e10) {
        let t10 = e10.options.navigator || {}, i10 = e10.options.scrollbar || {};
        !this.navigator && !this.scroller && (t10.enabled || i10.enabled) && (td(true, this.options.navigator, t10), td(true, this.options.scrollbar, i10), delete e10.options.navigator, delete e10.options.scrollbar);
      }
      let tw = { compose: function(e10, t10) {
        if (w().pushUnique(tp, e10)) {
          let i10 = e10.prototype;
          d = t10, i10.callbacks.push(ty), tc(e10, "afterAddSeries", tg), tc(e10, "afterSetChartSize", tm), tc(e10, "afterUpdate", tb), tc(e10, "beforeRender", tf), tc(e10, "beforeShowResetZoom", tx), tc(e10, "update", tv);
        }
      } }, { isTouchDevice: tE } = w(), { addEvent: tA, correctFloat: tT, defined: tC, isNumber: tM, pick: tk } = w();
      function tS() {
        this.navigatorAxis || (this.navigatorAxis = new tD(this));
      }
      function tP(e10) {
        let t10, i10 = this.chart, s10 = i10.options, n2 = s10.navigator, r2 = this.navigatorAxis, o2 = i10.zooming.pinchType, a2 = s10.rangeSelector, l2 = i10.zooming.type;
        if (this.isXAxis && ((n2 == null ? void 0 : n2.enabled) || (a2 == null ? void 0 : a2.enabled))) {
          if ("y" === l2 && "zoom" === e10.trigger) t10 = false;
          else if (("zoom" === e10.trigger && "xy" === l2 || tE && "xy" === o2) && this.options.range) {
            let t11 = r2.previousZoom;
            tC(e10.min) ? r2.previousZoom = [this.min, this.max] : t11 && (e10.min = t11[0], e10.max = t11[1], r2.previousZoom = void 0);
          }
        }
        void 0 !== t10 && e10.preventDefault();
      }
      class tD {
        static compose(e10) {
          e10.keepProps.includes("navigatorAxis") || (e10.keepProps.push("navigatorAxis"), tA(e10, "init", tS), tA(e10, "setExtremes", tP));
        }
        constructor(e10) {
          this.axis = e10;
        }
        destroy() {
          this.axis = void 0;
        }
        toFixedRange(e10, t10, i10, s10) {
          let n2 = this.axis, r2 = (n2.pointRange || 0) / 2, o2 = tk(i10, n2.translate(e10, true, !n2.horiz)), a2 = tk(s10, n2.translate(t10, true, !n2.horiz));
          return tC(i10) || (o2 = tT(o2 + r2)), tC(s10) || (a2 = tT(a2 - r2)), tM(o2) && tM(a2) || (o2 = a2 = void 0), { min: o2, max: a2 };
        }
      }
      var tN = x(620), tB = x.n(tN), tI = x(512), tF = x.n(tI);
      let { parse: tO } = tB(), { seriesTypes: tR } = tF(), tL = { height: 40, margin: 22, maskInside: true, handles: { width: 7, borderRadius: 0, height: 15, symbols: ["navigator-handle", "navigator-handle"], enabled: true, lineWidth: 1, backgroundColor: "#f2f2f2", borderColor: "#999999" }, maskFill: tO("#667aff").setOpacity(0.3).get(), outlineColor: "#999999", outlineWidth: 1, series: { type: void 0 === tR.areaspline ? "line" : "areaspline", fillOpacity: 0.05, lineWidth: 1, compare: null, sonification: { enabled: false }, dataGrouping: { approximation: "average", enabled: true, groupPixelWidth: 2, firstAnchor: "firstPoint", anchor: "middle", lastAnchor: "lastPoint", units: [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2, 3, 4]], ["week", [1, 2, 3]], ["month", [1, 3, 6]], ["year", null]] }, dataLabels: { enabled: false, zIndex: 2 }, id: "highcharts-navigator-series", className: "highcharts-navigator-series", lineColor: null, marker: { enabled: false }, threshold: null }, xAxis: { className: "highcharts-navigator-xaxis", tickLength: 0, lineWidth: 0, gridLineColor: "#e6e6e6", id: "navigator-x-axis", gridLineWidth: 1, tickPixelInterval: 200, labels: { align: "left", style: { color: "#000000", fontSize: "0.7em", opacity: 0.6, textOutline: "2px contrast" }, x: 3, y: -4 }, crosshair: false }, yAxis: { className: "highcharts-navigator-yaxis", gridLineWidth: 0, startOnTick: false, endOnTick: false, minPadding: 0.1, id: "navigator-y-axis", maxPadding: 0.1, labels: { enabled: false }, crosshair: false, title: { text: void 0 }, tickLength: 0, tickWidth: 0 } }, { defined: tH, isNumber: tz, pick: tq } = w(), tG = { rect: function(e10, t10, i10, s10, n2) {
        return (n2 == null ? void 0 : n2.r) ? function(e11, t11, i11, s11, n3) {
          let r2 = (n3 == null ? void 0 : n3.r) || 0;
          return [["M", e11 + r2, t11], ["L", e11 + i11 - r2, t11], ["A", r2, r2, 0, 0, 1, e11 + i11, t11 + r2], ["L", e11 + i11, t11 + s11 - r2], ["A", r2, r2, 0, 0, 1, e11 + i11 - r2, t11 + s11], ["L", e11 + r2, t11 + s11], ["A", r2, r2, 0, 0, 1, e11, t11 + s11 - r2], ["L", e11, t11 + r2], ["A", r2, r2, 0, 0, 1, e11 + r2, t11], ["Z"]];
        }(e10, t10, i10, s10, n2) : [["M", e10, t10], ["L", e10 + i10, t10], ["L", e10 + i10, t10 + s10], ["L", e10, t10 + s10], ["Z"]];
      } }, { relativeLength: tK } = w(), tU = { "navigator-handle": function(e10, t10, i10, s10, n2 = {}) {
        let r2 = n2.width ? n2.width / 2 : i10, o2 = tK(n2.borderRadius || 0, Math.min(2 * r2, s10));
        return [["M", -1.5, (s10 = n2.height || s10) / 2 - 3.5], ["L", -1.5, s10 / 2 + 4.5], ["M", 0.5, s10 / 2 - 3.5], ["L", 0.5, s10 / 2 + 4.5], ...tG.rect(-r2 - 1, 0.5, 2 * r2 + 1, s10, { r: o2 })];
      } };
      var tV = x(608), tW = x.n(tV);
      let { defined: tX } = w(), { setOptions: tY } = w(), { composed: tj } = w(), { getRendererType: t_ } = tW(), { setFixedRange: tZ } = { setFixedRange: function(e10) {
        let t10 = this.xAxis[0];
        tX(t10.dataMax) && tX(t10.dataMin) && e10 ? this.fixedRange = Math.min(e10, t10.dataMax - t10.dataMin) : this.fixedRange = e10;
      } }, { addEvent: t$, extend: tQ, pushUnique: tJ } = w();
      function t0() {
        this.chart.navigator && !this.options.isInternal && this.chart.navigator.setBaseSeries(null, false);
      }
      let t1 = { compose: function(e10, t10, i10) {
        tD.compose(t10), tJ(tj, "Navigator") && (e10.prototype.setFixedRange = tZ, tQ(t_().prototype.symbols, tU), t$(i10, "afterUpdate", t0), tY({ navigator: tL }));
      } }, { composed: t2 } = w(), { addEvent: t3, defined: t5, pick: t4, pushUnique: t6 } = w();
      !function(e10) {
        let t10;
        function i10(e11) {
          var _a, _b;
          let t11 = t4((_a = e11.options) == null ? void 0 : _a.min, e11.min), i11 = t4((_b = e11.options) == null ? void 0 : _b.max, e11.max);
          return { axisMin: t11, axisMax: i11, scrollMin: t5(e11.dataMin) ? Math.min(t11, e11.min, e11.dataMin, t4(e11.threshold, 1 / 0)) : t11, scrollMax: t5(e11.dataMax) ? Math.max(i11, e11.max, e11.dataMax, t4(e11.threshold, -1 / 0)) : i11 };
        }
        function s10() {
          let e11 = this.scrollbar, t11 = e11 && !e11.options.opposite, i11 = this.horiz ? 2 : t11 ? 3 : 1;
          e11 && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[i11] += e11.size + (e11.options.margin || 0));
        }
        function n2() {
          var _a, _b;
          let e11 = this;
          ((_b = (_a = e11.options) == null ? void 0 : _a.scrollbar) == null ? void 0 : _b.enabled) && (e11.options.scrollbar.vertical = !e11.horiz, e11.options.startOnTick = e11.options.endOnTick = false, e11.scrollbar = new t10(e11.chart.renderer, e11.options.scrollbar, e11.chart), t3(e11.scrollbar, "changed", function(t11) {
            let s11, n3, { axisMin: r3, axisMax: o2, scrollMin: a2, scrollMax: l2 } = i10(e11), h2 = l2 - a2;
            if (t5(r3) && t5(o2)) {
              if (e11.horiz && !e11.reversed || !e11.horiz && e11.reversed ? (s11 = a2 + h2 * this.to, n3 = a2 + h2 * this.from) : (s11 = a2 + h2 * (1 - this.from), n3 = a2 + h2 * (1 - this.to)), this.shouldUpdateExtremes(t11.DOMType)) {
                let i11 = "mousemove" !== t11.DOMType && "touchmove" !== t11.DOMType && void 0;
                e11.setExtremes(n3, s11, true, i11, t11);
              } else this.setRange(this.from, this.to);
            }
          }));
        }
        function r2() {
          let e11, t11, s11, { scrollMin: n3, scrollMax: r3 } = i10(this), o2 = this.scrollbar, a2 = this.axisTitleMargin + (this.titleOffset || 0), l2 = this.chart.scrollbarsOffsets, h2 = this.options.margin || 0;
          if (o2 && l2) {
            if (this.horiz) this.opposite || (l2[1] += a2), o2.position(this.left, this.top + this.height + 2 + l2[1] - (this.opposite ? h2 : 0), this.width, this.height), this.opposite || (l2[1] += h2), e11 = 1;
            else {
              let t12;
              this.opposite && (l2[0] += a2), t12 = o2.options.opposite ? this.left + this.width + 2 + l2[0] - (this.opposite ? 0 : h2) : this.opposite ? 0 : h2, o2.position(t12, this.top, this.width, this.height), this.opposite && (l2[0] += h2), e11 = 0;
            }
            if (l2[e11] += o2.size + (o2.options.margin || 0), isNaN(n3) || isNaN(r3) || !t5(this.min) || !t5(this.max) || this.dataMin === this.dataMax) o2.setRange(0, 1);
            else if (this.min === this.max) {
              let e12 = this.pointRange / (this.dataMax + 1);
              t11 = e12 * this.min, s11 = e12 * (this.max + 1), o2.setRange(t11, s11);
            } else t11 = (this.min - n3) / (r3 - n3), s11 = (this.max - n3) / (r3 - n3), this.horiz && !this.reversed || !this.horiz && this.reversed ? o2.setRange(t11, s11) : o2.setRange(1 - s11, 1 - t11);
          }
        }
        e10.compose = function(e11, i11) {
          t6(t2, "Axis.Scrollbar") && (t10 = i11, t3(e11, "afterGetOffset", s10), t3(e11, "afterInit", n2), t3(e11, "afterRender", r2));
        };
      }(g || (g = {}));
      let t9 = g, t8 = { height: 10, barBorderRadius: 5, buttonBorderRadius: 0, buttonsEnabled: false, liveRedraw: void 0, margin: void 0, minWidth: 6, opposite: true, step: 0.2, zIndex: 3, barBackgroundColor: "#cccccc", barBorderWidth: 0, barBorderColor: "#cccccc", buttonArrowColor: "#333333", buttonBackgroundColor: "#e6e6e6", buttonBorderColor: "#cccccc", buttonBorderWidth: 1, rifleColor: "none", trackBackgroundColor: "rgba(255, 255, 255, 0.001)", trackBorderColor: "#cccccc", trackBorderRadius: 5, trackBorderWidth: 1 }, { defaultOptions: t7 } = w(), { addEvent: ie, correctFloat: it, crisp: ii, defined: is, destroyObjectProperties: ir, fireEvent: io, merge: ia, pick: il, removeEvent: ih } = w();
      class ic {
        static compose(e10) {
          t9.compose(e10, ic);
        }
        static swapXY(e10, t10) {
          return t10 && e10.forEach((e11) => {
            let t11, i10 = e11.length;
            for (let s10 = 0; s10 < i10; s10 += 2) "number" == typeof (t11 = e11[s10 + 1]) && (e11[s10 + 1] = e11[s10 + 2], e11[s10 + 2] = t11);
          }), e10;
        }
        constructor(e10, t10, i10) {
          this._events = [], this.chartX = 0, this.chartY = 0, this.from = 0, this.scrollbarButtons = [], this.scrollbarLeft = 0, this.scrollbarStrokeWidth = 1, this.scrollbarTop = 0, this.size = 0, this.to = 0, this.trackBorderWidth = 1, this.x = 0, this.y = 0, this.init(e10, t10, i10);
        }
        addEvents() {
          let e10 = this.options.inverted ? [1, 0] : [0, 1], t10 = this.scrollbarButtons, i10 = this.scrollbarGroup.element, s10 = this.track.element, n2 = this.mouseDownHandler.bind(this), r2 = this.mouseMoveHandler.bind(this), o2 = this.mouseUpHandler.bind(this), a2 = [[t10[e10[0]].element, "click", this.buttonToMinClick.bind(this)], [t10[e10[1]].element, "click", this.buttonToMaxClick.bind(this)], [s10, "click", this.trackClick.bind(this)], [i10, "mousedown", n2], [i10.ownerDocument, "mousemove", r2], [i10.ownerDocument, "mouseup", o2], [i10, "touchstart", n2], [i10.ownerDocument, "touchmove", r2], [i10.ownerDocument, "touchend", o2]];
          a2.forEach(function(e11) {
            ie.apply(null, e11);
          }), this._events = a2;
        }
        buttonToMaxClick(e10) {
          let t10 = (this.to - this.from) * il(this.options.step, 0.2);
          this.updatePosition(this.from + t10, this.to + t10), io(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: e10 });
        }
        buttonToMinClick(e10) {
          let t10 = it(this.to - this.from) * il(this.options.step, 0.2);
          this.updatePosition(it(this.from - t10), it(this.to - t10)), io(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: e10 });
        }
        cursorToScrollbarPosition(e10) {
          let t10 = this.options, i10 = t10.minWidth > this.calculatedWidth ? t10.minWidth : 0;
          return { chartX: (e10.chartX - this.x - this.xOffset) / (this.barWidth - i10), chartY: (e10.chartY - this.y - this.yOffset) / (this.barWidth - i10) };
        }
        destroy() {
          let e10 = this, t10 = e10.chart.scroller;
          e10.removeEvents(), ["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"].forEach(function(t11) {
            e10[t11] && e10[t11].destroy && (e10[t11] = e10[t11].destroy());
          }), t10 && e10 === t10.scrollbar && (t10.scrollbar = null, ir(t10.scrollbarButtons));
        }
        drawScrollbarButton(e10) {
          let t10 = this.renderer, i10 = this.scrollbarButtons, s10 = this.options, n2 = this.size, r2 = t10.g().add(this.group);
          if (i10.push(r2), s10.buttonsEnabled) {
            let o2 = t10.rect().addClass("highcharts-scrollbar-button").add(r2);
            this.chart.styledMode || o2.attr({ stroke: s10.buttonBorderColor, "stroke-width": s10.buttonBorderWidth, fill: s10.buttonBackgroundColor }), o2.attr(o2.crisp({ x: -0.5, y: -0.5, width: n2, height: n2, r: s10.buttonBorderRadius }, o2.strokeWidth()));
            let a2 = t10.path(ic.swapXY([["M", n2 / 2 + (e10 ? -1 : 1), n2 / 2 - 3], ["L", n2 / 2 + (e10 ? -1 : 1), n2 / 2 + 3], ["L", n2 / 2 + (e10 ? 2 : -2), n2 / 2]], s10.vertical)).addClass("highcharts-scrollbar-arrow").add(i10[e10]);
            this.chart.styledMode || a2.attr({ fill: s10.buttonArrowColor });
          }
        }
        init(e10, t10, i10) {
          this.scrollbarButtons = [], this.renderer = e10, this.userOptions = t10, this.options = ia(t8, t7.scrollbar, t10), this.options.margin = il(this.options.margin, 10), this.chart = i10, this.size = il(this.options.size, this.options.height), t10.enabled && (this.render(), this.addEvents());
        }
        mouseDownHandler(e10) {
          var _a;
          let t10 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(e10)) || e10, i10 = this.cursorToScrollbarPosition(t10);
          this.chartX = i10.chartX, this.chartY = i10.chartY, this.initPositions = [this.from, this.to], this.grabbedCenter = true;
        }
        mouseMoveHandler(e10) {
          var _a;
          let t10, i10 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(e10)) || e10, s10 = this.options.vertical ? "chartY" : "chartX", n2 = this.initPositions || [];
          this.grabbedCenter && (!e10.touches || 0 !== e10.touches[0][s10]) && (t10 = this.cursorToScrollbarPosition(i10)[s10] - this[s10], this.hasDragged = true, this.updatePosition(n2[0] + t10, n2[1] + t10), this.hasDragged && io(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: e10.type, DOMEvent: e10 }));
        }
        mouseUpHandler(e10) {
          this.hasDragged && io(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMType: e10.type, DOMEvent: e10 }), this.grabbedCenter = this.hasDragged = this.chartX = this.chartY = null;
        }
        position(e10, t10, i10, s10) {
          let { buttonsEnabled: n2, margin: r2 = 0, vertical: o2 } = this.options, a2 = this.rendered ? "animate" : "attr", l2 = s10, h2 = 0;
          this.group.show(), this.x = e10, this.y = t10 + this.trackBorderWidth, this.width = i10, this.height = s10, this.xOffset = l2, this.yOffset = h2, o2 ? (this.width = this.yOffset = i10 = h2 = this.size, this.xOffset = l2 = 0, this.yOffset = h2 = n2 ? this.size : 0, this.barWidth = s10 - (n2 ? 2 * i10 : 0), this.x = e10 += r2) : (this.height = s10 = this.size, this.xOffset = l2 = n2 ? this.size : 0, this.barWidth = i10 - (n2 ? 2 * s10 : 0), this.y = this.y + r2), this.group[a2]({ translateX: e10, translateY: this.y }), this.track[a2]({ width: i10, height: s10 }), this.scrollbarButtons[1][a2]({ translateX: o2 ? 0 : i10 - l2, translateY: o2 ? s10 - h2 : 0 });
        }
        removeEvents() {
          this._events.forEach(function(e10) {
            ih.apply(null, e10);
          }), this._events.length = 0;
        }
        render() {
          let e10 = this.renderer, t10 = this.options, i10 = this.size, s10 = this.chart.styledMode, n2 = e10.g("scrollbar").attr({ zIndex: t10.zIndex }).hide().add();
          this.group = n2, this.track = e10.rect().addClass("highcharts-scrollbar-track").attr({ r: t10.trackBorderRadius || 0, height: i10, width: i10 }).add(n2), s10 || this.track.attr({ fill: t10.trackBackgroundColor, stroke: t10.trackBorderColor, "stroke-width": t10.trackBorderWidth });
          let r2 = this.trackBorderWidth = this.track.strokeWidth();
          this.track.attr({ x: -ii(0, r2), y: -ii(0, r2) }), this.scrollbarGroup = e10.g().add(n2), this.scrollbar = e10.rect().addClass("highcharts-scrollbar-thumb").attr({ height: i10 - r2, width: i10 - r2, r: t10.barBorderRadius || 0 }).add(this.scrollbarGroup), this.scrollbarRifles = e10.path(ic.swapXY([["M", -3, i10 / 4], ["L", -3, 2 * i10 / 3], ["M", 0, i10 / 4], ["L", 0, 2 * i10 / 3], ["M", 3, i10 / 4], ["L", 3, 2 * i10 / 3]], t10.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), s10 || (this.scrollbar.attr({ fill: t10.barBackgroundColor, stroke: t10.barBorderColor, "stroke-width": t10.barBorderWidth }), this.scrollbarRifles.attr({ stroke: t10.rifleColor, "stroke-width": 1 })), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-ii(0, this.scrollbarStrokeWidth), -ii(0, this.scrollbarStrokeWidth)), this.drawScrollbarButton(0), this.drawScrollbarButton(1);
        }
        setRange(e10, t10) {
          let i10, s10, n2 = this.options, r2 = n2.vertical, o2 = n2.minWidth, a2 = this.barWidth, l2 = !this.rendered || this.hasDragged || this.chart.navigator && this.chart.navigator.hasDragged ? "attr" : "animate";
          if (!is(a2)) return;
          let h2 = a2 * Math.min(t10, 1);
          i10 = Math.ceil(a2 * (e10 = Math.max(e10, 0))), this.calculatedWidth = s10 = it(h2 - i10), s10 < o2 && (i10 = (a2 - o2 + s10) * e10, s10 = o2);
          let c2 = Math.floor(i10 + this.xOffset + this.yOffset), d2 = s10 / 2 - 0.5;
          this.from = e10, this.to = t10, r2 ? (this.scrollbarGroup[l2]({ translateY: c2 }), this.scrollbar[l2]({ height: s10 }), this.scrollbarRifles[l2]({ translateY: d2 }), this.scrollbarTop = c2, this.scrollbarLeft = 0) : (this.scrollbarGroup[l2]({ translateX: c2 }), this.scrollbar[l2]({ width: s10 }), this.scrollbarRifles[l2]({ translateX: d2 }), this.scrollbarLeft = c2, this.scrollbarTop = 0), s10 <= 12 ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(), false === n2.showFull && (e10 <= 0 && t10 >= 1 ? this.group.hide() : this.group.show()), this.rendered = true;
        }
        shouldUpdateExtremes(e10) {
          return il(this.options.liveRedraw, w().svg && !w().isTouchDevice && !this.chart.boosted) || "mouseup" === e10 || "touchend" === e10 || !is(e10);
        }
        trackClick(e10) {
          var _a;
          let t10 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(e10)) || e10, i10 = this.to - this.from, s10 = this.y + this.scrollbarTop, n2 = this.x + this.scrollbarLeft;
          this.options.vertical && t10.chartY > s10 || !this.options.vertical && t10.chartX > n2 ? this.updatePosition(this.from + i10, this.to + i10) : this.updatePosition(this.from - i10, this.to - i10), io(this, "changed", { from: this.from, to: this.to, trigger: "scrollbar", DOMEvent: e10 });
        }
        update(e10) {
          this.destroy(), this.init(this.chart.renderer, ia(true, this.options, e10), this.chart);
        }
        updatePosition(e10, t10) {
          t10 > 1 && (e10 = it(1 - it(t10 - e10)), t10 = 1), e10 < 0 && (t10 = it(t10 - e10), e10 = 0), this.from = e10, this.to = t10;
        }
      }
      ic.defaultOptions = t8, t7.scrollbar = ia(true, ic.defaultOptions, t7.scrollbar);
      var id = x(540), iu = x.n(id);
      let { defaultOptions: ip } = w(), { isTouchDevice: ig } = w(), { prototype: { symbols: im } } = iu(), { addEvent: ib, clamp: ix, correctFloat: iy, defined: iv, destroyObjectProperties: iw, erase: iE, extend: iA, find: iT, fireEvent: iC, isArray: iM, isNumber: ik, merge: iS, pick: iP, removeEvent: iD, splat: iN } = w();
      function iB(e10, ...t10) {
        let i10 = [].filter.call(t10, ik);
        if (i10.length) return Math[e10].apply(0, i10);
      }
      class iI {
        static compose(e10, t10, i10) {
          tw.compose(e10, iI), t1.compose(e10, t10, i10);
        }
        constructor(e10) {
          this.isDirty = false, this.scrollbarHeight = 0, this.init(e10);
        }
        drawHandle(e10, t10, i10, s10) {
          let n2 = this.navigatorOptions.handles.height;
          this.handles[t10][s10](i10 ? { translateX: Math.round(this.left + this.height / 2), translateY: Math.round(this.top + parseInt(e10, 10) + 0.5 - n2) } : { translateX: Math.round(this.left + parseInt(e10, 10)), translateY: Math.round(this.top + this.height / 2 - n2 / 2 - 1) });
        }
        drawOutline(e10, t10, i10, s10) {
          let n2 = this.navigatorOptions.maskInside, r2 = this.outline.strokeWidth(), o2 = r2 / 2, a2 = r2 % 2 / 2, l2 = this.scrollButtonSize, h2 = this.size, c2 = this.top, d2 = this.height, u2 = c2 - o2, p2 = c2 + d2, g2 = this.left, m2, b2;
          i10 ? (m2 = c2 + t10 + a2, t10 = c2 + e10 + a2, b2 = [["M", g2 + d2, c2 - l2 - a2], ["L", g2 + d2, m2], ["L", g2, m2], ["M", g2, t10], ["L", g2 + d2, t10], ["L", g2 + d2, c2 + h2 + l2]], n2 && b2.push(["M", g2 + d2, m2 - o2], ["L", g2 + d2, t10 + o2])) : (g2 -= l2, e10 += g2 + l2 - a2, t10 += g2 + l2 - a2, b2 = [["M", g2, u2], ["L", e10, u2], ["L", e10, p2], ["M", t10, p2], ["L", t10, u2], ["L", g2 + h2 + 2 * l2, u2]], n2 && b2.push(["M", e10 - o2, u2], ["L", t10 + o2, u2])), this.outline[s10]({ d: b2 });
        }
        drawMasks(e10, t10, i10, s10) {
          let n2, r2, o2, a2, l2 = this.left, h2 = this.top, c2 = this.height;
          i10 ? (o2 = [l2, l2, l2], a2 = [h2, h2 + e10, h2 + t10], r2 = [c2, c2, c2], n2 = [e10, t10 - e10, this.size - t10]) : (o2 = [l2, l2 + e10, l2 + t10], a2 = [h2, h2, h2], r2 = [e10, t10 - e10, this.size - t10], n2 = [c2, c2, c2]), this.shades.forEach((e11, t11) => {
            e11[s10]({ x: o2[t11], y: a2[t11], width: r2[t11], height: n2[t11] });
          });
        }
        renderElements() {
          var _a;
          let e10 = this, t10 = e10.navigatorOptions, i10 = t10.maskInside, s10 = e10.chart, n2 = s10.inverted, r2 = s10.renderer, o2 = { cursor: n2 ? "ns-resize" : "ew-resize" }, a2 = e10.navigatorGroup ?? (e10.navigatorGroup = r2.g("navigator").attr({ zIndex: 8, visibility: "hidden" }).add());
          if ([!i10, i10, !i10].forEach((i11, n3) => {
            let l2 = e10.shades[n3] ?? (e10.shades[n3] = r2.rect().addClass("highcharts-navigator-mask" + (1 === n3 ? "-inside" : "-outside")).add(a2));
            s10.styledMode || (l2.attr({ fill: i11 ? t10.maskFill : "rgba(0,0,0,0)" }), 1 === n3 && l2.css(o2));
          }), e10.outline || (e10.outline = r2.path().addClass("highcharts-navigator-outline").add(a2)), s10.styledMode || e10.outline.attr({ "stroke-width": t10.outlineWidth, stroke: t10.outlineColor }), (_a = t10.handles) == null ? void 0 : _a.enabled) {
            let i11 = t10.handles, { height: n3, width: l2 } = i11;
            [0, 1].forEach((t11) => {
              var _a2;
              let h2 = i11.symbols[t11];
              if (e10.handles[t11] && e10.handles[t11].symbolUrl === h2) {
                if (!e10.handles[t11].isImg && e10.handles[t11].symbolName !== h2) {
                  let i12 = im[h2].call(im, -l2 / 2 - 1, 0, l2, n3);
                  e10.handles[t11].attr({ d: i12 }), e10.handles[t11].symbolName = h2;
                }
              } else (_a2 = e10.handles[t11]) == null ? void 0 : _a2.destroy(), e10.handles[t11] = r2.symbol(h2, -l2 / 2 - 1, 0, l2, n3, i11), e10.handles[t11].attr({ zIndex: 7 - t11 }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][t11]).add(a2), e10.addMouseEvents();
              s10.inverted && e10.handles[t11].attr({ rotation: 90, rotationOriginX: Math.floor(-l2 / 2), rotationOriginY: (n3 + l2) / 2 }), s10.styledMode || e10.handles[t11].attr({ fill: i11.backgroundColor, stroke: i11.borderColor, "stroke-width": i11.lineWidth, width: i11.width, height: i11.height, x: -l2 / 2 - 1, y: 0 }).css(o2);
            });
          }
        }
        update(e10, t10 = false) {
          var _a;
          let i10 = this.chart, s10 = i10.options.chart.inverted !== ((_a = i10.scrollbar) == null ? void 0 : _a.options.vertical);
          if (iS(true, i10.options.navigator, e10), this.navigatorOptions = i10.options.navigator || {}, this.setOpposite(), iv(e10.enabled) || s10) return this.destroy(), this.navigatorEnabled = e10.enabled || this.navigatorEnabled, this.init(i10);
          if (this.navigatorEnabled && (this.isDirty = true, false === e10.adaptToUpdatedData && this.baseSeries.forEach((e11) => {
            iD(e11, "updatedData", this.updatedDataHandler);
          }, this), e10.adaptToUpdatedData && this.baseSeries.forEach((e11) => {
            e11.eventsToUnbind.push(ib(e11, "updatedData", this.updatedDataHandler));
          }, this), (e10.series || e10.baseSeries) && this.setBaseSeries(void 0, false), e10.height || e10.xAxis || e10.yAxis)) {
            this.height = e10.height ?? this.height;
            let t11 = this.getXAxisOffsets();
            this.xAxis.update({ ...e10.xAxis, offsets: t11, [i10.inverted ? "width" : "height"]: this.height, [i10.inverted ? "height" : "width"]: void 0 }, false), this.yAxis.update({ ...e10.yAxis, [i10.inverted ? "width" : "height"]: this.height }, false);
          }
          t10 && i10.redraw();
        }
        render(e10, t10, i10, s10) {
          let n2 = this.chart, r2 = this.xAxis, o2 = r2.pointRange || 0, a2 = r2.navigatorAxis.fake ? n2.xAxis[0] : r2, l2 = this.navigatorEnabled, h2 = this.rendered, c2 = n2.inverted, d2 = n2.xAxis[0].minRange, u2 = n2.xAxis[0].options.maxRange, p2 = this.scrollButtonSize, g2, m2, b2, f2 = this.scrollbarHeight, x2, y2;
          if (this.hasDragged && !iv(i10)) return;
          if (this.isDirty && this.renderElements(), e10 = iy(e10 - o2 / 2), t10 = iy(t10 + o2 / 2), !ik(e10) || !ik(t10)) {
            if (!h2) return;
            i10 = 0, s10 = iP(r2.width, a2.width);
          }
          this.left = iP(r2.left, n2.plotLeft + p2 + (c2 ? n2.plotWidth : 0));
          let v2 = this.size = x2 = iP(r2.len, (c2 ? n2.plotHeight : n2.plotWidth) - 2 * p2);
          g2 = c2 ? f2 : x2 + 2 * p2, i10 = iP(i10, r2.toPixels(e10, true)), s10 = iP(s10, r2.toPixels(t10, true)), ik(i10) && Math.abs(i10) !== 1 / 0 || (i10 = 0, s10 = g2);
          let w2 = r2.toValue(i10, true), E2 = r2.toValue(s10, true), A2 = Math.abs(iy(E2 - w2));
          A2 < d2 ? this.grabbedLeft ? i10 = r2.toPixels(E2 - d2 - o2, true) : this.grabbedRight && (s10 = r2.toPixels(w2 + d2 + o2, true)) : iv(u2) && iy(A2 - o2) > u2 && (this.grabbedLeft ? i10 = r2.toPixels(E2 - u2 - o2, true) : this.grabbedRight && (s10 = r2.toPixels(w2 + u2 + o2, true))), this.zoomedMax = ix(Math.max(i10, s10), 0, v2), this.zoomedMin = ix(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i10, s10), 0, v2), this.range = this.zoomedMax - this.zoomedMin, v2 = Math.round(this.zoomedMax);
          let T2 = Math.round(this.zoomedMin);
          l2 && (this.navigatorGroup.attr({ visibility: "inherit" }), y2 = h2 && !this.hasDragged ? "animate" : "attr", this.drawMasks(T2, v2, c2, y2), this.drawOutline(T2, v2, c2, y2), this.navigatorOptions.handles.enabled && (this.drawHandle(T2, 0, c2, y2), this.drawHandle(v2, 1, c2, y2))), this.scrollbar && (c2 ? (b2 = this.top - p2, m2 = this.left - f2 + (l2 || !a2.opposite ? 0 : (a2.titleOffset || 0) + a2.axisTitleMargin), f2 = x2 + 2 * p2) : (b2 = this.top + (l2 ? this.height : -f2), m2 = this.left - p2), this.scrollbar.position(m2, b2, g2, f2), this.scrollbar.setRange(this.zoomedMin / (x2 || 1), this.zoomedMax / (x2 || 1))), this.rendered = true, this.isDirty = false, iC(this, "afterRender");
        }
        addMouseEvents() {
          let e10 = this, t10 = e10.chart, i10 = t10.container, s10 = [], n2, r2;
          e10.mouseMoveHandler = n2 = function(t11) {
            e10.onMouseMove(t11);
          }, e10.mouseUpHandler = r2 = function(t11) {
            e10.onMouseUp(t11);
          }, (s10 = e10.getPartsEvents("mousedown")).push(ib(t10.renderTo, "mousemove", n2), ib(i10.ownerDocument, "mouseup", r2), ib(t10.renderTo, "touchmove", n2), ib(i10.ownerDocument, "touchend", r2)), s10.concat(e10.getPartsEvents("touchstart")), e10.eventsToUnbind = s10, e10.series && e10.series[0] && s10.push(ib(e10.series[0].xAxis, "foundExtremes", function() {
            t10.navigator.modifyNavigatorAxisExtremes();
          }));
        }
        getPartsEvents(e10) {
          let t10 = this, i10 = [];
          return ["shades", "handles"].forEach(function(s10) {
            t10[s10].forEach(function(n2, r2) {
              i10.push(ib(n2.element, e10, function(e11) {
                t10[s10 + "Mousedown"](e11, r2);
              }));
            });
          }), i10;
        }
        shadesMousedown(e10, t10) {
          var _a;
          e10 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(e10)) || e10;
          let i10 = this.chart, s10 = this.xAxis, n2 = this.zoomedMin, r2 = this.size, o2 = this.range, a2 = this.left, l2 = e10.chartX, h2, c2, d2, u2;
          i10.inverted && (l2 = e10.chartY, a2 = this.top), 1 === t10 ? (this.grabbedCenter = l2, this.fixedWidth = o2, this.dragOffset = l2 - n2) : (u2 = l2 - a2 - o2 / 2, 0 === t10 ? u2 = Math.max(0, u2) : 2 === t10 && u2 + o2 >= r2 && (u2 = r2 - o2, this.reversedExtremes ? (u2 -= o2, c2 = this.getUnionExtremes().dataMin) : h2 = this.getUnionExtremes().dataMax), u2 !== n2 && (this.fixedWidth = o2, iv((d2 = s10.navigatorAxis.toFixedRange(u2, u2 + o2, c2, h2)).min) && iC(this, "setRange", { min: Math.min(d2.min, d2.max), max: Math.max(d2.min, d2.max), redraw: true, eventArguments: { trigger: "navigator" } })));
        }
        handlesMousedown(e10, t10) {
          var _a;
          e10 = ((_a = this.chart.pointer) == null ? void 0 : _a.normalize(e10)) || e10;
          let i10 = this.chart, s10 = i10.xAxis[0], n2 = this.reversedExtremes;
          0 === t10 ? (this.grabbedLeft = true, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = n2 ? s10.min : s10.max) : (this.grabbedRight = true, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = n2 ? s10.max : s10.min), i10.setFixedRange(void 0);
        }
        onMouseMove(e10) {
          var _a;
          let t10 = this, i10 = t10.chart, s10 = t10.navigatorSize, n2 = t10.range, r2 = t10.dragOffset, o2 = i10.inverted, a2 = t10.left, l2;
          (!e10.touches || 0 !== e10.touches[0].pageX) && (l2 = (e10 = ((_a = i10.pointer) == null ? void 0 : _a.normalize(e10)) || e10).chartX, o2 && (a2 = t10.top, l2 = e10.chartY), t10.grabbedLeft ? (t10.hasDragged = true, t10.render(0, 0, l2 - a2, t10.otherHandlePos)) : t10.grabbedRight ? (t10.hasDragged = true, t10.render(0, 0, t10.otherHandlePos, l2 - a2)) : t10.grabbedCenter && (t10.hasDragged = true, l2 < r2 ? l2 = r2 : l2 > s10 + r2 - n2 && (l2 = s10 + r2 - n2), t10.render(0, 0, l2 - r2, l2 - r2 + n2)), t10.hasDragged && t10.scrollbar && iP(t10.scrollbar.options.liveRedraw, !ig && !this.chart.boosted) && (e10.DOMType = e10.type, setTimeout(function() {
            t10.onMouseUp(e10);
          }, 0)));
        }
        onMouseUp(e10) {
          let t10, i10, s10, n2, r2, o2, a2 = this.chart, l2 = this.xAxis, h2 = this.scrollbar, c2 = e10.DOMEvent || e10, d2 = a2.inverted, u2 = this.rendered && !this.hasDragged ? "animate" : "attr";
          (this.hasDragged && (!h2 || !h2.hasDragged) || "scrollbar" === e10.trigger) && (s10 = this.getUnionExtremes(), this.zoomedMin === this.otherHandlePos ? n2 = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (r2 = this.fixedExtreme), this.zoomedMax === this.size && (r2 = this.reversedExtremes ? s10.dataMin : s10.dataMax), 0 === this.zoomedMin && (n2 = this.reversedExtremes ? s10.dataMax : s10.dataMin), iv((o2 = l2.navigatorAxis.toFixedRange(this.zoomedMin, this.zoomedMax, n2, r2)).min) && iC(this, "setRange", { min: Math.min(o2.min, o2.max), max: Math.max(o2.min, o2.max), redraw: true, animation: !this.hasDragged && null, eventArguments: { trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: c2 } })), "mousemove" !== e10.DOMType && "touchmove" !== e10.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null), this.navigatorEnabled && ik(this.zoomedMin) && ik(this.zoomedMax) && (i10 = Math.round(this.zoomedMin), t10 = Math.round(this.zoomedMax), this.shades && this.drawMasks(i10, t10, d2, u2), this.outline && this.drawOutline(i10, t10, d2, u2), this.navigatorOptions.handles.enabled && Object.keys(this.handles).length === this.handles.length && (this.drawHandle(i10, 0, d2, u2), this.drawHandle(t10, 1, d2, u2)));
        }
        removeEvents() {
          this.eventsToUnbind && (this.eventsToUnbind.forEach(function(e10) {
            e10();
          }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents();
        }
        removeBaseSeriesEvents() {
          let e10 = this.baseSeries || [];
          this.navigatorEnabled && e10[0] && (false !== this.navigatorOptions.adaptToUpdatedData && e10.forEach(function(e11) {
            iD(e11, "updatedData", this.updatedDataHandler);
          }, this), e10[0].xAxis && iD(e10[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes));
        }
        getXAxisOffsets() {
          return this.chart.inverted ? [this.scrollButtonSize, 0, -this.scrollButtonSize, 0] : [0, -this.scrollButtonSize, 0, this.scrollButtonSize];
        }
        init(e10) {
          var _a, _b;
          let t10 = e10.options, i10 = t10.navigator || {}, s10 = i10.enabled, n2 = t10.scrollbar || {}, r2 = n2.enabled, o2 = s10 && i10.height || 0, a2 = r2 && n2.height || 0, l2 = n2.buttonsEnabled && a2 || 0;
          this.handles = [], this.shades = [], this.chart = e10, this.setBaseSeries(), this.height = o2, this.scrollbarHeight = a2, this.scrollButtonSize = l2, this.scrollbarEnabled = r2, this.navigatorEnabled = s10, this.navigatorOptions = i10, this.scrollbarOptions = n2, this.setOpposite();
          let h2 = this, c2 = h2.baseSeries, d2 = e10.xAxis.length, u2 = e10.yAxis.length, p2 = c2 && c2[0] && c2[0].xAxis || e10.xAxis[0] || { options: {} };
          if (e10.isDirtyBox = true, h2.navigatorEnabled) {
            let t11 = this.getXAxisOffsets();
            h2.xAxis = new (tl())(e10, iS({ breaks: p2.options.breaks, ordinal: p2.options.ordinal, overscroll: p2.options.overscroll }, i10.xAxis, { type: "datetime", yAxis: (_a = i10.yAxis) == null ? void 0 : _a.id, index: d2, isInternal: true, offset: 0, keepOrdinalPadding: true, startOnTick: false, endOnTick: false, minPadding: p2.options.ordinal ? 0 : p2.options.minPadding, maxPadding: p2.options.ordinal ? 0 : p2.options.maxPadding, zoomEnabled: false }, e10.inverted ? { offsets: t11, width: o2 } : { offsets: t11, height: o2 }), "xAxis"), h2.yAxis = new (tl())(e10, iS(i10.yAxis, { alignTicks: false, offset: 0, index: u2, isInternal: true, reversed: iP(i10.yAxis && i10.yAxis.reversed, e10.yAxis[0] && e10.yAxis[0].reversed, false), zoomEnabled: false }, e10.inverted ? { width: o2 } : { height: o2 }), "yAxis"), c2 || i10.series.data ? h2.updateNavigatorSeries(false) : 0 === e10.series.length && (h2.unbindRedraw = ib(e10, "beforeRedraw", function() {
              e10.series.length > 0 && !h2.series && (h2.setBaseSeries(), h2.unbindRedraw());
            })), h2.reversedExtremes = e10.inverted && !h2.xAxis.reversed || !e10.inverted && h2.xAxis.reversed, h2.renderElements(), h2.addMouseEvents();
          } else h2.xAxis = { chart: e10, navigatorAxis: { fake: true }, translate: function(t11, i11) {
            let s11 = e10.xAxis[0], n3 = s11.getExtremes(), r3 = s11.len - 2 * l2, o3 = iB("min", s11.options.min, n3.dataMin), a3 = iB("max", s11.options.max, n3.dataMax) - o3;
            return i11 ? t11 * a3 / r3 + o3 : r3 * (t11 - o3) / a3;
          }, toPixels: function(e11) {
            return this.translate(e11);
          }, toValue: function(e11) {
            return this.translate(e11, true);
          } }, h2.xAxis.navigatorAxis.axis = h2.xAxis, h2.xAxis.navigatorAxis.toFixedRange = tD.prototype.toFixedRange.bind(h2.xAxis.navigatorAxis);
          if ((_b = e10.options.scrollbar) == null ? void 0 : _b.enabled) {
            let t11 = iS(e10.options.scrollbar, { vertical: e10.inverted });
            ik(t11.margin) || (t11.margin = e10.inverted ? -3 : 3), e10.scrollbar = h2.scrollbar = new ic(e10.renderer, t11, e10), ib(h2.scrollbar, "changed", function(e11) {
              let t12 = h2.size, i11 = t12 * this.to, s11 = t12 * this.from;
              h2.hasDragged = h2.scrollbar.hasDragged, h2.render(0, 0, s11, i11), this.shouldUpdateExtremes(e11.DOMType) && setTimeout(function() {
                h2.onMouseUp(e11);
              });
            });
          }
          h2.addBaseSeriesEvents(), h2.addChartEvents();
        }
        setOpposite() {
          let e10 = this.navigatorOptions, t10 = this.navigatorEnabled, i10 = this.chart;
          this.opposite = iP(e10.opposite, !!(!t10 && i10.inverted));
        }
        getUnionExtremes(e10) {
          let t10, i10 = this.chart.xAxis[0], s10 = this.chart.time, n2 = this.xAxis, r2 = n2.options, o2 = i10.options;
          return e10 && null === i10.dataMin || (t10 = { dataMin: iP(s10.parse(r2 == null ? void 0 : r2.min), iB("min", s10.parse(o2.min), i10.dataMin, n2.dataMin, n2.min)), dataMax: iP(s10.parse(r2 == null ? void 0 : r2.max), iB("max", s10.parse(o2.max), i10.dataMax, n2.dataMax, n2.max)) }), t10;
        }
        setBaseSeries(e10, t10) {
          let i10 = this.chart, s10 = this.baseSeries = [];
          e10 = e10 || i10.options && i10.options.navigator.baseSeries || (i10.series.length ? iT(i10.series, (e11) => !e11.options.isInternal).index : 0), (i10.series || []).forEach((t11, i11) => {
            !t11.options.isInternal && (t11.options.showInNavigator || (i11 === e10 || t11.options.id === e10) && false !== t11.options.showInNavigator) && s10.push(t11);
          }), this.xAxis && !this.xAxis.navigatorAxis.fake && this.updateNavigatorSeries(true, t10);
        }
        updateNavigatorSeries(e10, t10) {
          var _a, _b;
          let i10 = this, s10 = i10.chart, n2 = i10.baseSeries, r2 = { enableMouseTracking: false, index: null, linkedTo: null, group: "nav", padXAxis: false, xAxis: (_a = this.navigatorOptions.xAxis) == null ? void 0 : _a.id, yAxis: (_b = this.navigatorOptions.yAxis) == null ? void 0 : _b.id, showInLegend: false, stacking: void 0, isInternal: true, states: { inactive: { opacity: 1 } } }, o2 = i10.series = (i10.series || []).filter((e11) => {
            let t11 = e11.baseSeries;
            return !(0 > n2.indexOf(t11)) || (t11 && (iD(t11, "updatedData", i10.updatedDataHandler), delete t11.navigatorSeries), e11.chart && e11.destroy(), false);
          }), a2, l2, h2 = i10.navigatorOptions.series, c2;
          n2 && n2.length && n2.forEach((e11) => {
            var _a2;
            let d2 = e11.navigatorSeries, u2 = iA({ color: e11.color, visible: e11.visible }, iM(h2) ? ip.navigator.series : h2);
            if (d2 && false === i10.navigatorOptions.adaptToUpdatedData) return;
            r2.name = "Navigator " + n2.length, c2 = (a2 = e11.options || {}).navigatorOptions || {}, u2.dataLabels = iN(u2.dataLabels), (l2 = iS(a2, r2, u2, c2)).pointRange = iP(u2.pointRange, c2.pointRange, ip.plotOptions[l2.type || "line"].pointRange);
            let p2 = c2.data || u2.data;
            i10.hasNavigatorData = i10.hasNavigatorData || !!p2, l2.data = p2 || ((_a2 = a2.data) == null ? void 0 : _a2.slice(0)), d2 && d2.options ? d2.update(l2, t10) : (e11.navigatorSeries = s10.initSeries(l2), s10.setSortedData(), e11.navigatorSeries.baseSeries = e11, o2.push(e11.navigatorSeries));
          }), (h2.data && !(n2 && n2.length) || iM(h2)) && (i10.hasNavigatorData = false, (h2 = iN(h2)).forEach((e11, t11) => {
            r2.name = "Navigator " + (o2.length + 1), (l2 = iS(ip.navigator.series, { color: s10.series[t11] && !s10.series[t11].options.isInternal && s10.series[t11].color || s10.options.colors[t11] || s10.options.colors[0] }, r2, e11)).data = e11.data, l2.data && (i10.hasNavigatorData = true, o2.push(s10.initSeries(l2)));
          })), e10 && this.addBaseSeriesEvents();
        }
        addBaseSeriesEvents() {
          let e10 = this, t10 = e10.baseSeries || [];
          t10[0] && t10[0].xAxis && t10[0].eventsToUnbind.push(ib(t10[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes)), t10.forEach((i10) => {
            i10.eventsToUnbind.push(ib(i10, "show", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(true, false);
            })), i10.eventsToUnbind.push(ib(i10, "hide", function() {
              this.navigatorSeries && this.navigatorSeries.setVisible(false, false);
            })), false !== this.navigatorOptions.adaptToUpdatedData && i10.xAxis && i10.eventsToUnbind.push(ib(i10, "updatedData", this.updatedDataHandler)), i10.eventsToUnbind.push(ib(i10, "remove", function() {
              t10 && iE(t10, i10), this.navigatorSeries && e10.series && (iE(e10.series, this.navigatorSeries), iv(this.navigatorSeries.options) && this.navigatorSeries.remove(false), delete this.navigatorSeries);
            }));
          });
        }
        getBaseSeriesMin(e10) {
          return this.baseSeries.reduce(function(e11, t10) {
            return Math.min(e11, t10.getColumn("x")[0] ?? e11);
          }, e10);
        }
        modifyNavigatorAxisExtremes() {
          let e10 = this.xAxis;
          if (void 0 !== e10.getExtremes) {
            let t10 = this.getUnionExtremes(true);
            t10 && (t10.dataMin !== e10.min || t10.dataMax !== e10.max) && (e10.min = t10.dataMin, e10.max = t10.dataMax);
          }
        }
        modifyBaseAxisExtremes() {
          var _a;
          let e10, t10, i10 = this.chart.navigator, s10 = this.getExtremes(), n2 = s10.min, r2 = s10.max, o2 = s10.dataMin, a2 = s10.dataMax, l2 = r2 - n2, h2 = i10.stickToMin, c2 = i10.stickToMax, d2 = iP((_a = this.ordinal) == null ? void 0 : _a.convertOverscroll(this.options.overscroll), 0), u2 = i10.series && i10.series[0], p2 = !!this.setExtremes;
          !(this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger) && (h2 && (e10 = (t10 = o2) + l2), c2 && (e10 = a2 + d2, h2 || (t10 = Math.max(o2, e10 - l2, i10.getBaseSeriesMin(u2 && u2.xData ? u2.xData[0] : -Number.MAX_VALUE)))), p2 && (h2 || c2) && ik(t10) && (this.min = this.userMin = t10, this.max = this.userMax = e10)), i10.stickToMin = i10.stickToMax = null;
        }
        updatedDataHandler() {
          let e10 = this.chart.navigator, t10 = this.navigatorSeries, i10 = e10.reversedExtremes ? 0 === Math.round(e10.zoomedMin) : Math.round(e10.zoomedMax) >= Math.round(e10.size);
          e10.stickToMax = iP(this.chart.options.navigator && this.chart.options.navigator.stickToMax, i10), e10.stickToMin = e10.shouldStickToMin(this, e10), t10 && !e10.hasNavigatorData && (t10.options.pointStart = this.getColumn("x")[0], t10.setData(this.options.data, false, null, false));
        }
        shouldStickToMin(e10, t10) {
          let i10 = t10.getBaseSeriesMin(e10.getColumn("x")[0]), s10 = e10.xAxis, n2 = s10.max, r2 = s10.min, o2 = s10.options.range, a2 = true;
          return !!(ik(n2) && ik(r2)) && (o2 && n2 - i10 > 0 ? n2 - i10 < o2 : r2 <= i10);
        }
        addChartEvents() {
          this.eventsToUnbind || (this.eventsToUnbind = []), this.eventsToUnbind.push(ib(this.chart, "redraw", function() {
            let e10 = this.navigator, t10 = e10 && (e10.baseSeries && e10.baseSeries[0] && e10.baseSeries[0].xAxis || this.xAxis[0]);
            t10 && e10.render(t10.min, t10.max);
          }), ib(this.chart, "getMargins", function() {
            var _a;
            let e10 = this.navigator, t10 = e10.opposite ? "plotTop" : "marginBottom";
            this.inverted && (t10 = e10.opposite ? "marginRight" : "plotLeft"), this[t10] = (this[t10] || 0) + (e10.navigatorEnabled || !this.inverted ? e10.height + (((_a = this.scrollbar) == null ? void 0 : _a.options.margin) || 0) + e10.scrollbarHeight : 0) + (e10.navigatorOptions.margin || 0);
          }), ib(iI, "setRange", function(e10) {
            this.chart.xAxis[0].setExtremes(e10.min, e10.max, e10.redraw, e10.animation, e10.eventArguments);
          }));
        }
        destroy() {
          this.removeEvents(), this.xAxis && (iE(this.chart.xAxis, this.xAxis), iE(this.chart.axes, this.xAxis)), this.yAxis && (iE(this.chart.yAxis, this.yAxis), iE(this.chart.axes, this.yAxis)), (this.series || []).forEach((e10) => {
            e10.destroy && e10.destroy();
          }), ["series", "xAxis", "yAxis", "shades", "outline", "scrollbarTrack", "scrollbarRifles", "scrollbarGroup", "scrollbar", "navigatorGroup", "rendered"].forEach((e10) => {
            this[e10] && this[e10].destroy && this[e10].destroy(), this[e10] = null;
          }), [this.handles].forEach((e10) => {
            iw(e10);
          }), this.baseSeries.forEach((e10) => {
            e10.navigatorSeries = void 0;
          }), this.navigatorEnabled = false;
        }
      }
      let { animObject: iF } = w(), { format: iO } = D(), { clamp: iR, pick: iL, syncTimeout: iH } = w(), { getFakeMouseEvent: iz } = S, { getAxisRangeDescription: iq, fireEventOnWrappedOrUnwrappedElement: iG } = K, iK = class extends Z {
        init() {
          let e10 = this.chart, t10 = this;
          this.announcer = new ep(e10, "polite"), this.addEvent(iI, "afterRender", function() {
            this.chart === t10.chart && this.chart.renderer && iH(() => {
              t10.proxyProvider.updateGroupProxyElementPositions("navigator"), t10.updateHandleValues();
            }, iF(iL(this.chart.renderer.globalAnimation, true)).duration);
          });
        }
        onChartUpdate() {
          var _a, _b, _c;
          let e10 = this.chart, t10 = e10.options, i10 = t10.navigator;
          if (i10.enabled && ((_a = i10.accessibility) == null ? void 0 : _a.enabled)) {
            let i11 = t10.accessibility.landmarkVerbosity, s10 = (_b = t10.lang.accessibility) == null ? void 0 : _b.navigator.groupLabel;
            this.proxyProvider.removeGroup("navigator"), this.proxyProvider.addGroup("navigator", "div", { role: "all" === i11 ? "region" : "group", "aria-label": iO(s10, { chart: e10 }, e10) });
            let n2 = (_c = t10.lang.accessibility) == null ? void 0 : _c.navigator.handleLabel;
            [0, 1].forEach((t11) => {
              let i12 = this.getHandleByIx(t11);
              if (i12) {
                let s11 = this.proxyProvider.addProxyElement("navigator", { click: i12 }, "input", { type: "range", "aria-label": iO(n2, { handleIx: t11, chart: e10 }, e10) });
                this[t11 ? "maxHandleProxy" : "minHandleProxy"] = s11.innerElement, s11.innerElement.style.pointerEvents = "none", s11.innerElement.oninput = () => this.updateNavigator();
              }
            }), this.updateHandleValues();
          } else this.proxyProvider.removeGroup("navigator");
        }
        getNavigatorHandleNavigation(e10) {
          let t10 = this, i10 = this.chart, s10 = e10 ? this.maxHandleProxy : this.minHandleProxy, n2 = this.keyCodes;
          return new Q(i10, { keyCodeMap: [[[n2.left, n2.right, n2.up, n2.down], function(r2) {
            if (s10) {
              let o2 = r2 === n2.left || r2 === n2.up ? -1 : 1;
              s10.value = "" + iR(parseFloat(s10.value) + o2, 0, 100), t10.updateNavigator(() => {
                let n3 = t10.getHandleByIx(e10);
                n3 && i10.setFocusToElement(n3, s10);
              });
            }
            return this.response.success;
          }]], init: () => {
            i10.setFocusToElement(this.getHandleByIx(e10), s10);
          }, validate: () => {
            var _a;
            return !!(this.getHandleByIx(e10) && s10 && ((_a = i10.options.navigator.accessibility) == null ? void 0 : _a.enabled));
          } });
        }
        getKeyboardNavigation() {
          return [this.getNavigatorHandleNavigation(0), this.getNavigatorHandleNavigation(1)];
        }
        destroy() {
          this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.proxyProvider.removeGroup("navigator"), this.announcer && this.announcer.destroy();
        }
        updateHandleValues() {
          let e10 = this.chart.navigator;
          if (e10 && this.minHandleProxy && this.maxHandleProxy) {
            let t10 = e10.size;
            this.minHandleProxy.value = "" + Math.round(e10.zoomedMin / t10 * 100), this.maxHandleProxy.value = "" + Math.round(e10.zoomedMax / t10 * 100);
          }
        }
        getHandleByIx(e10) {
          let t10 = this.chart.navigator;
          return t10 && t10.handles && t10.handles[e10];
        }
        updateNavigator(e10) {
          this.updateNavigatorThrottleTimer && clearTimeout(this.updateNavigatorThrottleTimer), this.updateNavigatorThrottleTimer = setTimeout(((e11) => {
            var _a;
            let t10 = this.chart, { navigator: i10, pointer: s10 } = t10;
            if (i10 && s10 && this.minHandleProxy && this.maxHandleProxy) {
              let n2 = s10.getChartPosition(), r2 = parseFloat(this.minHandleProxy.value) / 100 * i10.size, o2 = parseFloat(this.maxHandleProxy.value) / 100 * i10.size;
              [[0, "mousedown", i10.zoomedMin], [0, "mousemove", r2], [0, "mouseup", r2], [1, "mousedown", i10.zoomedMax], [1, "mousemove", o2], [1, "mouseup", o2]].forEach(([e12, t11, s11]) => {
                var _a2;
                let r3 = (_a2 = this.getHandleByIx(e12)) == null ? void 0 : _a2.element;
                r3 && iG(r3, iz(t11, { x: n2.left + i10.left + s11, y: n2.top + i10.top }, r3));
              }), e11 && e11();
              let a2 = (_a = t10.options.lang.accessibility) == null ? void 0 : _a.navigator.changeAnnouncement, l2 = iq(t10.xAxis[0]);
              this.announcer.announce(iO(a2, { axisRangeDescription: l2, chart: t10 }, t10));
            }
          }).bind(this, e10), 20);
        }
      }, { getPointAnnotationTexts: iU } = ev, { getAxisDescription: iV, getSeriesFirstPointElement: iW, getSeriesA11yElement: iX, unhideChartElementFromAT: iY } = K, { format: ij, numberFormat: i_ } = D(), { reverseChildNodes: iZ, stripHTMLTagsFromString: i$ } = S, { find: iQ, isNumber: iJ, isString: i0, pick: i1, defined: i2 } = w();
      function i3(e10) {
        let t10 = e10.chart.options.accessibility.series.pointDescriptionEnabledThreshold;
        return !!(false !== t10 && e10.points && e10.points.length >= +t10);
      }
      function i5(e10, t10) {
        let i10 = e10.series, s10 = i10.chart, n2 = s10.options.accessibility.point || {}, r2 = i10.options.accessibility && i10.options.accessibility.point || {}, o2 = i10.tooltipOptions || {}, a2 = s10.options.lang;
        return iJ(t10) ? i_(t10, r2.valueDecimals || n2.valueDecimals || o2.valueDecimals || -1, a2.decimalPoint, a2.accessibility.thousandsSep || a2.thousandsSep) : t10;
      }
      function i4(e10, t10) {
        let i10 = e10[t10];
        return e10.chart.langFormat("accessibility.series." + t10 + "Description", { name: iV(i10), series: e10 });
      }
      function i6(e10) {
        let t10 = e10.series, i10 = t10.chart.series.length > 1 || t10.options.name, s10 = function(e11) {
          let t11 = e11.series, i11 = t11.chart, s11 = t11.options.accessibility, n3 = s11 && s11.point && s11.point.valueDescriptionFormat || i11.options.accessibility.point.valueDescriptionFormat, r3 = i1(t11.xAxis && t11.xAxis.options.accessibility && t11.xAxis.options.accessibility.enabled, !i11.angular && "flowmap" !== t11.type), o3 = r3 ? function(e12) {
            let t12 = function(e13) {
              let t13 = e13.series, i13 = t13.chart, s13 = t13.options.accessibility && t13.options.accessibility.point || {}, n5 = i13.options.accessibility.point || {}, r4 = t13.xAxis && t13.xAxis.dateTime;
              if (r4) {
                let t14 = r4.getXDateFormat(e13.x || 0, i13.options.tooltip.dateTimeLabelFormats), o4 = s13.dateFormatter && s13.dateFormatter(e13) || n5.dateFormatter && n5.dateFormatter(e13) || s13.dateFormat || n5.dateFormat || t14;
                return i13.time.dateFormat(o4, e13.x || 0, void 0);
              }
            }(e12), i12 = (e12.series.xAxis || {}).categories && i2(e12.category) && ("" + e12.category).replace("<br/>", " "), s12 = i2(e12.id) && 0 > ("" + e12.id).indexOf("highcharts-"), n4 = "x, " + e12.x;
            return e12.name || t12 || i12 || (s12 ? e12.id : n4);
          }(e11) : "";
          return ij(n3, { point: e11, index: i2(e11.index) ? e11.index + 1 : "", xDescription: o3, value: function(e12) {
            let t12 = e12.series, i12 = t12.chart.options.accessibility.point || {}, s12 = t12.chart.options.accessibility && t12.chart.options.accessibility.point || {}, n4 = t12.tooltipOptions || {}, r4 = s12.valuePrefix || i12.valuePrefix || n4.valuePrefix || "", o4 = s12.valueSuffix || i12.valueSuffix || n4.valueSuffix || "", a2 = void 0 !== e12.value ? "value" : "y", l2 = i5(e12, e12[a2]);
            return e12.isNull ? t12.chart.langFormat("accessibility.series.nullPointValue", { point: e12 }) : t12.pointArrayMap ? function(e13, t13, i13) {
              let s13 = t13 || "", n5 = i13 || "", r5 = function(t14) {
                let i14 = i5(e13, i1(e13[t14], e13.options[t14]));
                return void 0 !== i14 ? t14 + ": " + s13 + i14 + n5 : i14;
              };
              return e13.series.pointArrayMap.reduce(function(e14, t14) {
                let i14 = r5(t14);
                return i14 ? e14 + (e14.length ? ", " : "") + i14 : e14;
              }, "");
            }(e12, r4, o4) : r4 + l2 + o4;
          }(e11), separator: r3 ? ", " : "" }, i11);
        }(e10), n2 = e10.options && e10.options.accessibility && e10.options.accessibility.description, r2 = i10 ? " " + t10.name + "." : "", o2 = function(e11) {
          let t11 = e11.series.chart, i11 = iU(e11);
          return i11.length ? t11.langFormat("accessibility.series.pointAnnotationsDescription", { point: e11, annotations: i11 }) : "";
        }(e10);
        return e10.accessibility = e10.accessibility || {}, e10.accessibility.valueDescription = s10, s10 + (n2 ? " " + n2 : "") + r2 + (o2 ? " " + o2 : "");
      }
      function i9(e10) {
        let t10 = e10.chart, i10 = t10.types || [], s10 = function(e11) {
          let t11 = (e11.options.accessibility || {}).description;
          return t11 && e11.chart.langFormat("accessibility.series.description", { description: t11, series: e11 }) || "";
        }(e10), n2 = function(i11) {
          return t10[i11] && t10[i11].length > 1 && e10[i11];
        }, r2 = e10.index + 1, o2 = i4(e10, "xAxis"), a2 = i4(e10, "yAxis"), l2 = { seriesNumber: r2, series: e10, chart: t10 }, h2 = i10.length > 1 ? "Combination" : "", c2 = t10.langFormat("accessibility.series.summary." + e10.type + h2, l2) || t10.langFormat("accessibility.series.summary.default" + h2, l2), d2 = (n2("yAxis") ? " " + a2 + "." : "") + (n2("xAxis") ? " " + o2 + "." : "");
        return ij(i1(e10.options.accessibility && e10.options.accessibility.descriptionFormat, t10.options.accessibility.series.descriptionFormat, ""), { seriesDescription: c2, authorDescription: s10 ? " " + s10 : "", axisDescription: d2, series: e10, chart: t10, seriesNumber: r2 }, void 0);
      }
      let i8 = { defaultPointDescriptionFormatter: i6, defaultSeriesDescriptionFormatter: i9, describeSeries: function(e10) {
        let t10 = e10.chart, i10 = iW(e10), s10 = iX(e10), n2 = t10.is3d && t10.is3d();
        s10 && (s10.lastChild !== i10 || n2 || iZ(s10), function(e11) {
          let t11 = function(e12) {
            let t12 = e12.options.accessibility || {};
            return !i3(e12) && !t12.exposeAsGroupOnly;
          }(e11), i11 = function(e12) {
            let t12 = e12.chart.options.accessibility.keyboardNavigation.seriesNavigation;
            return !!(e12.points && (e12.points.length < +t12.pointNavigationEnabledThreshold || false === t12.pointNavigationEnabledThreshold));
          }(e11), s11 = e11.chart.options.accessibility.point.describeNull;
          (t11 || i11) && e11.points.forEach((i12) => {
            let n3 = i12.graphic && i12.graphic.element || function(e12) {
              let t12 = e12.series, i13 = t12 && t12.chart, s12 = t12 && t12.is("sunburst"), n4 = e12.isNull, r3 = i13 && i13.options.accessibility.point.describeNull;
              return n4 && !s12 && r3;
            }(i12) && function(e12) {
              let t12 = e12.series, i13 = function(e13) {
                var _a;
                let t13 = e13.index;
                if (!e13.series || !e13.series.data || !i2(t13)) return null;
                let i14 = (_a = e13.series.options) == null ? void 0 : _a.nullInteraction;
                return iQ(e13.series.data, function(e14) {
                  return !!(e14 && void 0 !== e14.index && (i14 || e14.index > t13) && e14.graphic && e14.graphic.element);
                }) || null;
              }(e12), s12 = i13 && i13.graphic, n4 = s12 ? s12.parentGroup : t12.graph || t12.group, r3 = i13 ? { x: i1(e12.plotX, i13.plotX, 0), y: i1(e12.plotY, i13.plotY, 0) } : { x: i1(e12.plotX, 0), y: i1(e12.plotY, 0) }, o2 = function(e13, t13) {
                let i14 = e13.series.chart.renderer.rect(t13.x, t13.y, 1, 1);
                return i14.attr({ class: "highcharts-a11y-mock-point", fill: "none", opacity: 0, "fill-opacity": 0, "stroke-opacity": 0 }), i14;
              }(e12, r3);
              if (n4 && n4.element) return e12.graphic = o2, e12.hasMockGraphic = true, o2.add(n4), n4.element.insertBefore(o2.element, s12 ? s12.element : null), o2.element;
            }(i12), r2 = i12.options && i12.options.accessibility && false === i12.options.accessibility.enabled;
            if (n3) {
              if (i12.isNull && !s11) {
                n3.setAttribute("aria-hidden", true);
                return;
              }
              n3.setAttribute("tabindex", "-1"), e11.chart.styledMode || (n3.style.outline = "none"), t11 && !r2 ? function(e12, t12) {
                var _a, _b, _c;
                let i13 = e12.series, s12 = ((_a = i13.options.accessibility) == null ? void 0 : _a.point) || {}, n4 = i13.chart.options.accessibility.point || {}, r3 = i$(i0(s12.descriptionFormat) && ij(s12.descriptionFormat, e12, i13.chart) || ((_b = s12.descriptionFormatter) == null ? void 0 : _b.call(s12, e12)) || i0(n4.descriptionFormat) && ij(n4.descriptionFormat, e12, i13.chart) || ((_c = n4.descriptionFormatter) == null ? void 0 : _c.call(n4, e12)) || i6(e12), i13.chart.renderer.forExport);
                t12.setAttribute("role", "img"), t12.setAttribute("aria-label", r3);
              }(i12, n3) : n3.setAttribute("aria-hidden", true);
            }
          });
        }(e10), iY(t10, s10), function(e11) {
          let t11 = e11.chart, i11 = t11.options.chart, s11 = i11.options3d && i11.options3d.enabled, n3 = t11.series.length > 1, r2 = t11.options.accessibility.series.describeSingleSeries, o2 = (e11.options.accessibility || {}).exposeAsGroupOnly;
          return !(s11 && n3) && (n3 || r2 || o2 || i3(e11));
        }(e10) ? function(e11, t11) {
          let i11 = e11.options.accessibility || {}, s11 = e11.chart.options.accessibility, n3 = s11.landmarkVerbosity;
          i11.exposeAsGroupOnly ? t11.setAttribute("role", "img") : "all" === n3 ? t11.setAttribute("role", "region") : t11.setAttribute("role", "group"), t11.setAttribute("tabindex", "-1"), e11.chart.styledMode || (t11.style.outline = "none"), t11.setAttribute("aria-label", i$(s11.series.descriptionFormatter && s11.series.descriptionFormatter(e11) || i9(e11), e11.chart.renderer.forExport));
        }(e10, s10) : s10.removeAttribute("aria-label"));
      } }, { composed: i7 } = w(), { addEvent: se, defined: st, pushUnique: si } = w(), { getChartTitle: ss } = K, { defaultPointDescriptionFormatter: sn, defaultSeriesDescriptionFormatter: sr } = i8;
      function so(e10) {
        return !!e10.options.accessibility.announceNewData.enabled;
      }
      class sa {
        constructor(e10) {
          this.dirty = { allSeries: {} }, this.lastAnnouncementTime = 0, this.chart = e10;
        }
        init() {
          let e10 = this.chart, t10 = e10.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite";
          this.lastAnnouncementTime = 0, this.dirty = { allSeries: {} }, this.eventProvider = new Y(), this.announcer = new ep(e10, t10), this.addEventListeners();
        }
        destroy() {
          this.eventProvider.removeAddedEvents(), this.announcer.destroy();
        }
        addEventListeners() {
          let e10 = this, t10 = this.chart, i10 = this.eventProvider;
          i10.addEvent(t10, "afterApplyDrilldown", function() {
            e10.lastAnnouncementTime = 0;
          }), i10.addEvent(t10, "afterAddSeries", function(t11) {
            e10.onSeriesAdded(t11.series);
          }), i10.addEvent(t10, "redraw", function() {
            e10.announceDirtyData();
          });
        }
        onSeriesAdded(e10) {
          so(this.chart) && (this.dirty.hasDirty = true, this.dirty.allSeries[e10.name + e10.index] = e10, this.dirty.newSeries = st(this.dirty.newSeries) ? void 0 : e10);
        }
        announceDirtyData() {
          let e10 = this.chart, t10 = this;
          if (e10.options.accessibility.announceNewData && this.dirty.hasDirty) {
            let e11 = this.dirty.newPoint;
            e11 && (e11 = function(e12) {
              let t11 = e12.series.data.filter((t12) => e12.x === t12.x && e12.y === t12.y);
              return 1 === t11.length ? t11[0] : e12;
            }(e11)), this.queueAnnouncement(Object.keys(this.dirty.allSeries).map((e12) => t10.dirty.allSeries[e12]), this.dirty.newSeries, e11), this.dirty = { allSeries: {} };
          }
        }
        queueAnnouncement(e10, t10, i10) {
          let s10 = this.chart.options.accessibility.announceNewData;
          if (s10.enabled) {
            let n2 = +/* @__PURE__ */ new Date(), r2 = n2 - this.lastAnnouncementTime, o2 = Math.max(0, s10.minAnnounceInterval - r2), a2 = function(e11, t11) {
              let i11 = (e11 || []).concat(t11 || []).reduce((e12, t12) => (e12[t12.name + t12.index] = t12, e12), {});
              return Object.keys(i11).map((e12) => i11[e12]);
            }(this.queuedAnnouncement && this.queuedAnnouncement.series, e10), l2 = this.buildAnnouncementMessage(a2, t10, i10);
            l2 && (this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = { time: n2, message: l2, series: a2 }, this.queuedAnnouncementTimer = setTimeout(() => {
              this && this.announcer && (this.lastAnnouncementTime = +/* @__PURE__ */ new Date(), this.announcer.announce(this.queuedAnnouncement.message), delete this.queuedAnnouncement, delete this.queuedAnnouncementTimer);
            }, o2));
          }
        }
        buildAnnouncementMessage(e10, t10, i10) {
          let s10 = this.chart, n2 = s10.options.accessibility.announceNewData;
          if (n2.announcementFormatter) {
            let s11 = n2.announcementFormatter(e10, t10, i10);
            if (false !== s11) return s11.length ? s11 : null;
          }
          let r2 = w().charts && w().charts.length > 1 ? "Multiple" : "Single", o2 = t10 ? "newSeriesAnnounce" + r2 : i10 ? "newPointAnnounce" + r2 : "newDataAnnounce", a2 = ss(s10);
          return s10.langFormat("accessibility.announceNewData." + o2, { chartTitle: a2, seriesDesc: t10 ? sr(t10) : null, pointDesc: i10 ? sn(i10) : null, point: i10, series: t10 });
        }
      }
      !function(e10) {
        function t10(e11) {
          var _a;
          let t11 = this.chart, i11 = (_a = t11.accessibility) == null ? void 0 : _a.components.series.newDataAnnouncer;
          i11 && i11.chart === t11 && so(t11) && (i11.dirty.newPoint = st(i11.dirty.newPoint) ? void 0 : e11.point);
        }
        function i10() {
          var _a;
          let e11 = this.chart, t11 = (_a = e11.accessibility) == null ? void 0 : _a.components.series.newDataAnnouncer;
          t11 && t11.chart === e11 && so(e11) && (t11.dirty.hasDirty = true, t11.dirty.allSeries[this.name + this.index] = this);
        }
        e10.compose = function(e11) {
          si(i7, "A11y.NDA") && (se(e11, "addPoint", t10), se(e11, "updatedData", i10));
        };
      }(sa || (sa = {}));
      let sl = sa, { doc: sh, win: sc } = w(), { attr: sd, css: su, merge: sp } = w(), { fireEventOnWrappedOrUnwrappedElement: sg } = K, { cloneMouseEvent: sm, cloneTouchEvent: sb, getFakeMouseEvent: sf, removeElement: sx } = S, sy = class {
        constructor(e10, t10, i10 = "button", s10, n2) {
          this.chart = e10, this.target = t10, this.eventProvider = new Y();
          let r2 = this.innerElement = sh.createElement(i10), o2 = this.element = s10 ? sh.createElement(s10) : r2;
          e10.styledMode || this.hideElementVisually(r2), s10 && ("li" !== s10 || e10.styledMode || (o2.style.listStyle = "none"), o2.appendChild(r2), this.element = o2), this.updateTarget(t10, n2);
        }
        click() {
          let e10 = this.getTargetPosition();
          e10.x += e10.width / 2, e10.y += e10.height / 2;
          let t10 = sf("click", e10);
          sg(this.target.click, t10);
        }
        updateTarget(e10, t10) {
          this.target = e10, this.updateCSSClassName();
          let i10 = t10 || {};
          Object.keys(i10).forEach((e11) => {
            null === i10[e11] && delete i10[e11];
          });
          let s10 = this.getTargetAttr(e10.click, "aria-label");
          sd(this.innerElement, sp(s10 ? { "aria-label": s10 } : {}, i10)), this.eventProvider.removeAddedEvents(), this.addProxyEventsToElement(this.innerElement, e10.click), this.refreshPosition();
        }
        refreshPosition() {
          let e10 = this.getTargetPosition();
          su(this.innerElement, { width: (e10.width || 1) + "px", height: (e10.height || 1) + "px", left: (Math.round(e10.x) || 0) + "px", top: (Math.round(e10.y) || 0) + "px" });
        }
        remove() {
          this.eventProvider.removeAddedEvents(), sx(this.element);
        }
        updateCSSClassName() {
          let e10 = (e11) => e11.indexOf("highcharts-no-tooltip") > -1, t10 = this.chart.legend, i10 = t10.group && t10.group.div, s10 = e10(i10 && i10.className || ""), n2 = e10(this.getTargetAttr(this.target.click, "class") || "");
          this.innerElement.className = s10 || n2 ? "highcharts-a11y-proxy-element highcharts-no-tooltip" : "highcharts-a11y-proxy-element";
        }
        addProxyEventsToElement(e10, t10) {
          ["click", "touchstart", "touchend", "touchcancel", "touchmove", "mouseover", "mouseenter", "mouseleave", "mouseout"].forEach((i10) => {
            let s10 = 0 === i10.indexOf("touch");
            this.eventProvider.addEvent(e10, i10, (e11) => {
              let i11 = s10 ? sb(e11) : sm(e11);
              t10 && sg(t10, i11), e11.stopPropagation(), s10 || e11.preventDefault();
            }, { passive: false });
          });
        }
        hideElementVisually(e10) {
          su(e10, { borderWidth: 0, backgroundColor: "transparent", cursor: "pointer", outline: "none", opacity: 1e-3, filter: "alpha(opacity=1)", zIndex: 999, overflow: "hidden", padding: 0, margin: 0, display: "block", position: "absolute", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)" });
        }
        getTargetPosition() {
          let e10 = this.target.click, t10 = e10.element ? e10.element : e10, i10 = this.target.visual || t10, s10 = this.chart.renderTo, n2 = this.chart.pointer;
          if (s10 && (i10 == null ? void 0 : i10.getBoundingClientRect) && n2) {
            let e11 = sc.scrollY || sh.documentElement.scrollTop, t11 = i10.getBoundingClientRect(), s11 = n2.getChartPosition();
            return { x: (t11.left - s11.left) / s11.scaleX, y: (t11.top + e11 - s11.top) / s11.scaleY, width: t11.right / s11.scaleX - t11.left / s11.scaleX, height: t11.bottom / s11.scaleY - t11.top / s11.scaleY };
          }
          return { x: 0, y: 0, width: 1, height: 1 };
        }
        getTargetAttr(e10, t10) {
          return e10.element ? e10.element.getAttribute(t10) : e10.getAttribute(t10);
        }
      }, { doc: sv } = w(), { attr: sw, css: sE } = w(), { unhideChartElementFromAT: sA } = K, { removeChildNodes: sT } = S, sC = class {
        constructor(e10) {
          this.chart = e10, this.domElementProvider = new W(), this.groups = {}, this.groupOrder = [], this.beforeChartProxyPosContainer = this.createProxyPosContainer("before"), this.afterChartProxyPosContainer = this.createProxyPosContainer("after"), this.update();
        }
        addProxyElement(e10, t10, i10 = "button", s10) {
          let n2 = this.groups[e10];
          if (!n2) throw Error("ProxyProvider.addProxyElement: Invalid group key " + e10);
          let r2 = "ul" === n2.type || "ol" === n2.type ? "li" : void 0, o2 = new sy(this.chart, t10, i10, r2, s10);
          return n2.proxyContainerElement.appendChild(o2.element), n2.proxyElements.push(o2), o2;
        }
        addGroup(e10, t10 = "div", i10) {
          let s10, n2 = this.groups[e10];
          if (n2) return n2.groupElement;
          let r2 = this.domElementProvider.createElement(t10);
          return i10 && i10.role && "div" !== t10 ? (s10 = this.domElementProvider.createElement("div")).appendChild(r2) : s10 = r2, s10.className = "highcharts-a11y-proxy-group highcharts-a11y-proxy-group-" + e10.replace(/\W/g, "-"), this.groups[e10] = { proxyContainerElement: r2, groupElement: s10, type: t10, proxyElements: [] }, sw(s10, i10 || {}), "ul" === t10 && r2.setAttribute("role", "list"), this.afterChartProxyPosContainer.appendChild(s10), this.updateGroupOrder(this.groupOrder), s10;
        }
        updateGroupAttrs(e10, t10) {
          let i10 = this.groups[e10];
          if (!i10) throw Error("ProxyProvider.updateGroupAttrs: Invalid group key " + e10);
          sw(i10.groupElement, t10);
        }
        updateGroupOrder(e10) {
          if (this.groupOrder = e10.slice(), this.isDOMOrderGroupOrder()) return;
          let t10 = e10.indexOf("series"), i10 = t10 > -1 ? e10.slice(0, t10) : e10, s10 = t10 > -1 ? e10.slice(t10 + 1) : [], n2 = sv.activeElement;
          ["before", "after"].forEach((e11) => {
            let t11 = this["before" === e11 ? "beforeChartProxyPosContainer" : "afterChartProxyPosContainer"];
            sT(t11), ("before" === e11 ? i10 : s10).forEach((e12) => {
              let i11 = this.groups[e12];
              i11 && t11.appendChild(i11.groupElement);
            });
          }), (this.beforeChartProxyPosContainer.contains(n2) || this.afterChartProxyPosContainer.contains(n2)) && n2 && n2.focus && n2.focus();
        }
        clearGroup(e10) {
          let t10 = this.groups[e10];
          if (!t10) throw Error("ProxyProvider.clearGroup: Invalid group key " + e10);
          sT(t10.proxyContainerElement);
        }
        removeGroup(e10) {
          let t10 = this.groups[e10];
          t10 && (this.domElementProvider.removeElement(t10.groupElement), t10.groupElement !== t10.proxyContainerElement && this.domElementProvider.removeElement(t10.proxyContainerElement), delete this.groups[e10]);
        }
        update() {
          this.updatePosContainerPositions(), this.updateGroupOrder(this.groupOrder), this.updateProxyElementPositions();
        }
        updateProxyElementPositions() {
          Object.keys(this.groups).forEach(this.updateGroupProxyElementPositions.bind(this));
        }
        updateGroupProxyElementPositions(e10) {
          let t10 = this.groups[e10];
          t10 && t10.proxyElements.forEach((e11) => e11.refreshPosition());
        }
        destroy() {
          this.domElementProvider.destroyCreatedElements();
        }
        createProxyPosContainer(e10) {
          let t10 = this.domElementProvider.createElement("div");
          return t10.setAttribute("aria-hidden", "false"), t10.className = "highcharts-a11y-proxy-container" + (e10 ? "-" + e10 : ""), sE(t10, { top: "0", left: "0" }), this.chart.styledMode || (t10.style.whiteSpace = "nowrap", t10.style.position = "absolute"), t10;
        }
        getCurrentGroupOrderInDOM() {
          let e10 = (e11) => {
            let t11 = Object.keys(this.groups), i11 = t11.length;
            for (; i11--; ) {
              let s11 = t11[i11], n2 = this.groups[s11];
              if (n2 && e11 === n2.groupElement) return s11;
            }
          }, t10 = (t11) => {
            let i11 = [], s11 = t11.children;
            for (let t12 = 0; t12 < s11.length; ++t12) {
              let n2 = e10(s11[t12]);
              n2 && i11.push(n2);
            }
            return i11;
          }, i10 = t10(this.beforeChartProxyPosContainer), s10 = t10(this.afterChartProxyPosContainer);
          return i10.push("series"), i10.concat(s10);
        }
        isDOMOrderGroupOrder() {
          let e10 = this.getCurrentGroupOrderInDOM(), t10 = this.groupOrder.filter((e11) => "series" === e11 || !!this.groups[e11]), i10 = e10.length;
          if (i10 !== t10.length) return false;
          for (; i10--; ) if (e10[i10] !== t10[i10]) return false;
          return true;
        }
        updatePosContainerPositions() {
          let e10 = this.chart;
          if (e10.renderer.forExport) return;
          let t10 = e10.renderer.box;
          e10.container.insertBefore(this.afterChartProxyPosContainer, t10.nextSibling), e10.container.insertBefore(this.beforeChartProxyPosContainer, t10), sA(this.chart, this.afterChartProxyPosContainer), sA(this.chart, this.beforeChartProxyPosContainer);
        }
      }, { unhideChartElementFromAT: sM, getAxisRangeDescription: sk } = K, { addEvent: sS, attr: sP } = w();
      class sD extends Z {
        init() {
          let e10 = this.chart;
          this.announcer = new ep(e10, "polite");
        }
        onChartUpdate() {
          let e10 = this.chart, t10 = this, i10 = e10.rangeSelector;
          i10 && (this.updateSelectorVisibility(), this.setDropdownAttrs(), i10.buttons && i10.buttons.length && i10.buttons.forEach((e11) => {
            t10.setRangeButtonAttrs(e11);
          }), i10.maxInput && i10.minInput && ["minInput", "maxInput"].forEach(function(s10, n2) {
            let r2 = i10[s10];
            r2 && (sM(e10, r2), t10.setRangeInputAttrs(r2, "accessibility.rangeSelector." + (n2 ? "max" : "min") + "InputLabel"));
          }));
        }
        updateSelectorVisibility() {
          let e10 = this.chart, t10 = e10.rangeSelector, i10 = t10 && t10.dropdown, s10 = t10 && t10.buttons || [], n2 = (e11) => e11.setAttribute("aria-hidden", true);
          t10 && t10.hasVisibleDropdown && i10 ? (sM(e10, i10), s10.forEach((e11) => n2(e11.element))) : (i10 && n2(i10), s10.forEach((t11) => sM(e10, t11.element)));
        }
        setDropdownAttrs() {
          let e10 = this.chart, t10 = e10.rangeSelector && e10.rangeSelector.dropdown;
          if (t10) {
            let i10 = e10.langFormat("accessibility.rangeSelector.dropdownLabel", { rangeTitle: e10.options.lang.rangeSelectorZoom });
            t10.setAttribute("aria-label", i10), t10.setAttribute("tabindex", -1);
          }
        }
        setRangeButtonAttrs(e10) {
          sP(e10.element, { tabindex: -1, role: "button" });
        }
        setRangeInputAttrs(e10, t10) {
          let i10 = this.chart;
          sP(e10, { tabindex: -1, "aria-label": i10.langFormat(t10, { chart: i10 }) });
        }
        onButtonNavKbdArrowKey(e10, t10) {
          let i10 = e10.response, s10 = this.keyCodes, n2 = this.chart, r2 = n2.options.accessibility.keyboardNavigation.wrapAround, o2 = t10 === s10.left || t10 === s10.up ? -1 : 1;
          return n2.highlightRangeSelectorButton(n2.highlightedRangeSelectorItemIx + o2) ? i10.success : r2 ? (e10.init(o2), i10.success) : i10[o2 > 0 ? "next" : "prev"];
        }
        onButtonNavKbdClick(e10) {
          let t10 = e10.response, i10 = this.chart;
          return 3 !== i10.oldRangeSelectorItemState && this.fakeClickEvent(i10.rangeSelector.buttons[i10.highlightedRangeSelectorItemIx].element), t10.success;
        }
        onAfterBtnClick() {
          let e10 = this.chart, t10 = sk(e10.xAxis[0]), i10 = e10.langFormat("accessibility.rangeSelector.clickButtonAnnouncement", { chart: e10, axisRangeDescription: t10 });
          i10 && this.announcer.announce(i10);
        }
        onInputKbdMove(e10) {
          let t10 = this.chart, i10 = t10.rangeSelector, s10 = t10.highlightedInputRangeIx = (t10.highlightedInputRangeIx || 0) + e10;
          if (s10 > 1 || s10 < 0) {
            if (t10.accessibility) return t10.accessibility.keyboardNavigation.exiting = true, t10.accessibility.keyboardNavigation.tabindexContainer.focus(), t10.accessibility.keyboardNavigation.move(e10);
          } else if (i10) {
            let e11 = i10[s10 ? "maxDateBox" : "minDateBox"], n2 = i10[s10 ? "maxInput" : "minInput"];
            e11 && n2 && t10.setFocusToElement(e11, n2);
          }
          return true;
        }
        onInputNavInit(e10) {
          let t10 = this, i10 = this.chart, s10 = e10 > 0 ? 0 : 1, n2 = i10.rangeSelector, r2 = n2 && n2[s10 ? "maxDateBox" : "minDateBox"], o2 = n2 && n2.minInput, a2 = n2 && n2.maxInput;
          if (i10.highlightedInputRangeIx = s10, r2 && o2 && a2) {
            i10.setFocusToElement(r2, s10 ? a2 : o2), this.removeInputKeydownHandler && this.removeInputKeydownHandler();
            let e11 = (e12) => {
              (e12.which || e12.keyCode) === this.keyCodes.tab && t10.onInputKbdMove(e12.shiftKey ? -1 : 1) && (e12.preventDefault(), e12.stopPropagation());
            }, n3 = sS(o2, "keydown", e11), l2 = sS(a2, "keydown", e11);
            this.removeInputKeydownHandler = () => {
              n3(), l2();
            };
          }
        }
        onInputNavTerminate() {
          let e10 = this.chart.rangeSelector || {};
          e10.maxInput && e10.hideInput("max"), e10.minInput && e10.hideInput("min"), this.removeInputKeydownHandler && (this.removeInputKeydownHandler(), delete this.removeInputKeydownHandler);
        }
        initDropdownNav() {
          let e10 = this.chart, t10 = e10.rangeSelector, i10 = t10 && t10.dropdown;
          t10 && i10 && (e10.setFocusToElement(t10.buttonGroup, i10), this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeDropdownKeydownHandler = sS(i10, "keydown", (t11) => {
            let i11 = (t11.which || t11.keyCode) === this.keyCodes.tab, s10 = e10.accessibility;
            i11 && (t11.preventDefault(), t11.stopPropagation(), s10 && s10.keyboardNavigation.move(t11.shiftKey ? -1 : 1));
          }));
        }
        getRangeSelectorButtonNavigation() {
          let e10 = this.chart, t10 = this.keyCodes, i10 = this;
          return new Q(e10, { keyCodeMap: [[[t10.left, t10.right, t10.up, t10.down], function(e11) {
            return i10.onButtonNavKbdArrowKey(this, e11);
          }], [[t10.enter, t10.space], function() {
            return i10.onButtonNavKbdClick(this);
          }]], validate: function() {
            return !!(e10.rangeSelector && e10.rangeSelector.buttons && e10.rangeSelector.buttons.length);
          }, init: function(t11) {
            let s10 = e10.rangeSelector;
            if (s10 && s10.hasVisibleDropdown) i10.initDropdownNav();
            else if (s10) {
              let i11 = s10.buttons.length - 1;
              e10.highlightRangeSelectorButton(t11 > 0 ? 0 : i11);
            }
          }, terminate: function() {
            i10.removeDropdownKeydownHandler && (i10.removeDropdownKeydownHandler(), delete i10.removeDropdownKeydownHandler);
          } });
        }
        getRangeSelectorInputNavigation() {
          let e10 = this.chart, t10 = this;
          return new Q(e10, { keyCodeMap: [], validate: function() {
            return !!(e10.rangeSelector && e10.rangeSelector.inputGroup && "hidden" !== e10.rangeSelector.inputGroup.element.style.visibility && false !== e10.options.rangeSelector.inputEnabled && e10.rangeSelector.minInput && e10.rangeSelector.maxInput);
          }, init: function(e11) {
            t10.onInputNavInit(e11);
          }, terminate: function() {
            t10.onInputNavTerminate();
          } });
        }
        getKeyboardNavigation() {
          return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()];
        }
        destroy() {
          this.removeDropdownKeydownHandler && this.removeDropdownKeydownHandler(), this.removeInputKeydownHandler && this.removeInputKeydownHandler(), this.announcer && this.announcer.destroy();
        }
      }
      !function(e10) {
        function t10(e11) {
          let t11 = this.rangeSelector && this.rangeSelector.buttons || [], i11 = this.highlightedRangeSelectorItemIx, s10 = this.rangeSelector && this.rangeSelector.selected;
          return void 0 !== i11 && t11[i11] && i11 !== s10 && t11[i11].setState(this.oldRangeSelectorItemState || 0), this.highlightedRangeSelectorItemIx = e11, !!t11[e11] && (this.setFocusToElement(t11[e11].box, t11[e11].element), e11 !== s10 && (this.oldRangeSelectorItemState = t11[e11].state, t11[e11].setState(1)), true);
        }
        function i10() {
          let e11 = this.chart.accessibility;
          if (e11 && e11.components.rangeSelector) return e11.components.rangeSelector.onAfterBtnClick();
        }
        e10.compose = function(e11, s10) {
          let n2 = e11.prototype;
          n2.highlightRangeSelectorButton || (n2.highlightRangeSelectorButton = t10, sS(s10, "afterBtnClick", i10));
        };
      }(sD || (sD = {}));
      let sN = sD, { composed: sB } = w(), { addEvent: sI, merge: sF, pushUnique: sO } = w();
      !function(e10) {
        function t10(e11) {
          sF(true, e11, { marker: { enabled: true, states: { normal: { opacity: 0 } } } });
        }
        function i10(e11) {
          return e11.marker.states && e11.marker.states.normal && e11.marker.states.normal.opacity;
        }
        function s10(e11) {
          return !!(e11._hasPointMarkers && e11.points && e11.points.length);
        }
        function n2() {
          this.chart.styledMode && (this.markerGroup && this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"), s10(this) && this.points.forEach((e11) => {
            e11.graphic && (e11.graphic[e11.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), e11.graphic[false === e11.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"));
          }));
        }
        function r2(e11) {
          this.resetA11yMarkerOptions = sF(e11.options.marker || {}, this.userOptions.marker || {});
        }
        function o2() {
          let e11 = this.options;
          !function(e12) {
            let t11 = e12.chart.options.accessibility.enabled, i11 = false !== (e12.options.accessibility && e12.options.accessibility.enabled);
            return t11 && i11 && function(e13) {
              let t12 = e13.chart.options.accessibility;
              return e13.points.length < t12.series.pointDescriptionEnabledThreshold || false === t12.series.pointDescriptionEnabledThreshold;
            }(e12);
          }(this) ? this.a11yMarkersForced && (delete this.a11yMarkersForced, function(e12) {
            let t11 = e12.resetA11yMarkerOptions;
            if (t11) {
              let i11 = t11.states && t11.states.normal && t11.states.normal.opacity;
              e12.userOptions && e12.userOptions.marker && (e12.userOptions.marker.enabled = true), e12.update({ marker: { enabled: t11.enabled, states: { normal: { opacity: i11 } } } });
            }
          }(this), delete this.resetA11yMarkerOptions) : (e11.marker && false === e11.marker.enabled && (this.a11yMarkersForced = true, t10(this.options)), s10(this) && function(e12) {
            let s11 = e12.points.length;
            for (; s11--; ) {
              let r3 = e12.points[s11], o3 = r3.options, a3 = r3.hasForcedA11yMarker;
              if (delete r3.hasForcedA11yMarker, o3.marker) {
                var n3;
                let e13 = a3 && 0 === i10(o3);
                o3.marker.enabled && !e13 ? (sF(true, (n3 = o3).marker, { states: { normal: { opacity: i10(n3) || 1 } } }), r3.hasForcedA11yMarker = false) : false === o3.marker.enabled && (t10(o3), r3.hasForcedA11yMarker = true);
              }
            }
          }(this));
        }
        function a2() {
          this.boosted && this.a11yMarkersForced && (sF(true, this.options, { marker: { enabled: false } }), delete this.a11yMarkersForced);
        }
        e10.compose = function(e11) {
          sO(sB, "A11y.FM") && (sI(e11, "afterSetOptions", r2), sI(e11, "render", o2), sI(e11, "afterRender", n2), sI(e11, "renderCanvas", a2));
        };
      }(m || (m = {}));
      let sR = m;
      var sL = x(260), sH = x.n(sL), sz = x(820), sq = x.n(sz);
      let { seriesTypes: sG } = tF(), { doc: sK } = w(), { defined: sU, fireEvent: sV } = w(), { getPointFromXY: sW, getSeriesFromName: sX, scrollAxisToPoint: sY } = K;
      function sj(e10) {
        let t10 = e10.index, i10 = e10.series.points, s10 = i10.length;
        if (i10[t10] === e10) return t10;
        for (; s10--; ) if (i10[s10] === e10) return s10;
      }
      function s_(e10) {
        let t10 = e10.chart.options.accessibility.keyboardNavigation.seriesNavigation, i10 = e10.options.accessibility || {}, s10 = i10.keyboardNavigation;
        return s10 && false === s10.enabled || false === i10.enabled || false === e10.options.enableMouseTracking || !e10.visible || t10.pointNavigationEnabledThreshold && +t10.pointNavigationEnabledThreshold <= e10.points.length;
      }
      function sZ(e10) {
        let t10 = e10.series, i10 = t10.options.nullInteraction, s10 = e10.options.accessibility, n2 = t10.chart.options.accessibility, r2 = (s10 == null ? void 0 : s10.enabled) === false;
        return n2.keyboardNavigation.seriesNavigation.skipNullPoints ?? (!(!e10.isNull || i10) && false === e10.visible || false === e10.isInside || r2 || s_(t10));
      }
      function s$(e10) {
        let t10 = e10.series || [], i10 = t10.length;
        for (let e11 = 0; e11 < i10; ++e11) if (!s_(t10[e11])) {
          let i11 = function(e12) {
            let t11 = e12.points || [], i12 = t11.length;
            for (let e13 = 0; e13 < i12; ++e13) if (!sZ(t11[e13])) return t11[e13];
            return null;
          }(t10[e11]);
          if (i11) return i11;
        }
        return null;
      }
      function sQ(e10) {
        let t10 = e10.series.length, i10 = false;
        for (; t10-- && (e10.highlightedPoint = e10.series[t10].points[e10.series[t10].points.length - 1], !(i10 = e10.series[t10].highlightNextValidPoint())); ) ;
        return i10;
      }
      function sJ(e10) {
        delete e10.highlightedPoint;
        let t10 = s$(e10);
        return !!t10 && t10.highlight();
      }
      class s0 {
        constructor(e10, t10) {
          this.keyCodes = t10, this.chart = e10;
        }
        init() {
          let e10 = this, t10 = this.chart, i10 = this.eventProvider = new Y();
          i10.addEvent(sq(), "destroy", function() {
            return e10.onSeriesDestroy(this);
          }), i10.addEvent(t10, "afterApplyDrilldown", function() {
            !function(e11) {
              let t11 = s$(e11);
              t11 && t11.highlight(false);
            }(this);
          }), i10.addEvent(t10, "drilldown", function(t11) {
            let i11 = t11.point, s10 = i11.series;
            e10.lastDrilledDownPoint = { x: i11.x, y: i11.y, seriesName: s10 ? s10.name : "" };
          }), i10.addEvent(t10, "drillupall", function() {
            setTimeout(function() {
              e10.onDrillupAll();
            }, 10);
          }), i10.addEvent(sH(), "afterSetState", function() {
            let e11 = this.graphic && this.graphic.element, i11 = sK.activeElement, s10 = i11 && i11.getAttribute("class"), n2 = s10 && s10.indexOf("highcharts-a11y-proxy-element") > -1;
            t10.highlightedPoint === this && i11 !== e11 && !n2 && e11 && e11.focus && e11.focus();
          });
        }
        onDrillupAll() {
          let e10, t10 = this.lastDrilledDownPoint, i10 = this.chart, s10 = t10 && sX(i10, t10.seriesName);
          t10 && s10 && sU(t10.x) && sU(t10.y) && (e10 = sW(s10, t10.x, t10.y)), e10 = e10 || s$(i10), i10.container && i10.container.focus(), e10 && e10.highlight && e10.highlight(false);
        }
        getKeyboardNavigationHandler() {
          let e10 = this, t10 = this.keyCodes, i10 = this.chart, s10 = i10.inverted;
          return new Q(i10, { keyCodeMap: [[s10 ? [t10.up, t10.down] : [t10.left, t10.right], function(t11) {
            return e10.onKbdSideways(this, t11);
          }], [s10 ? [t10.left, t10.right] : [t10.up, t10.down], function(t11) {
            return e10.onKbdVertical(this, t11);
          }], [[t10.enter, t10.space], function(e11, t11) {
            var _a;
            let s11 = i10.highlightedPoint;
            if (s11) {
              let { plotLeft: e12, plotTop: i11 } = this.chart, { plotX: n2 = 0, plotY: r2 = 0 } = s11;
              t11 = { ...t11, chartX: e12 + n2, chartY: i11 + r2, point: s11, target: ((_a = s11.graphic) == null ? void 0 : _a.element) || t11.target }, sV(s11.series, "click", t11), s11.firePointEvent("click", t11);
            }
            return this.response.success;
          }], [[t10.home], function() {
            return sJ(i10), this.response.success;
          }], [[t10.end], function() {
            return sQ(i10), this.response.success;
          }], [[t10.pageDown, t10.pageUp], function(e11) {
            return i10.highlightAdjacentSeries(e11 === t10.pageDown), this.response.success;
          }]], init: function() {
            return e10.onHandlerInit(this);
          }, validate: function() {
            return !!s$(i10);
          }, terminate: function() {
            return e10.onHandlerTerminate();
          } });
        }
        onKbdSideways(e10, t10) {
          let i10 = this.keyCodes, s10 = t10 === i10.right || t10 === i10.down;
          return this.attemptHighlightAdjacentPoint(e10, s10);
        }
        onHandlerInit(e10) {
          let t10 = this.chart;
          return t10.options.accessibility.keyboardNavigation.seriesNavigation.rememberPointFocus && t10.highlightedPoint ? t10.highlightedPoint.highlight() : sJ(t10), e10.response.success;
        }
        onKbdVertical(e10, t10) {
          let i10 = this.chart, s10 = this.keyCodes, n2 = t10 === s10.down || t10 === s10.right, r2 = i10.options.accessibility.keyboardNavigation.seriesNavigation;
          if (r2.mode && "serialize" === r2.mode) return this.attemptHighlightAdjacentPoint(e10, n2);
          let o2 = i10.highlightedPoint && i10.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries";
          return i10[o2](n2), e10.response.success;
        }
        onHandlerTerminate() {
          let e10 = this.chart, t10 = e10.options.accessibility.keyboardNavigation;
          e10.tooltip && e10.tooltip.hide(0);
          let i10 = e10.highlightedPoint && e10.highlightedPoint.series;
          i10 && i10.onMouseOut && i10.onMouseOut(), e10.highlightedPoint && e10.highlightedPoint.onMouseOut && e10.highlightedPoint.onMouseOut(), t10.seriesNavigation.rememberPointFocus || delete e10.highlightedPoint;
        }
        attemptHighlightAdjacentPoint(e10, t10) {
          let i10 = this.chart, s10 = i10.options.accessibility.keyboardNavigation.wrapAround;
          return i10.highlightAdjacentPoint(t10) ? e10.response.success : s10 && (t10 ? sJ(i10) : sQ(i10)) ? e10.response.success : e10.response[t10 ? "next" : "prev"];
        }
        onSeriesDestroy(e10) {
          let t10 = this.chart;
          t10.highlightedPoint && t10.highlightedPoint.series === e10 && (delete t10.highlightedPoint, t10.focusElement && t10.focusElement.removeFocusBorder());
        }
        destroy() {
          this.eventProvider.removeAddedEvents();
        }
      }
      !function(e10) {
        function t10(e11) {
          let t11, i11, s11 = this.series, n3 = this.highlightedPoint, r3 = n3 && sj(n3) || 0, o2 = n3 && n3.series.points || [], a2 = this.series && this.series[this.series.length - 1], l2 = a2 && a2.points && a2.points[a2.points.length - 1];
          if (!s11[0] || !s11[0].points) return false;
          if (n3) {
            if (t11 = s11[n3.series.index + (e11 ? 1 : -1)], (i11 = o2[r3 + (e11 ? 1 : -1)]) || !t11 || (i11 = t11.points[e11 ? 0 : t11.points.length - 1]), !i11) return false;
          } else i11 = e11 ? s11[0].points[0] : l2;
          return sZ(i11) ? (s_(t11 = i11.series) ? this.highlightedPoint = e11 ? t11.points[t11.points.length - 1] : t11.points[0] : this.highlightedPoint = i11, this.highlightAdjacentPoint(e11)) : i11.highlight();
        }
        function i10(e11) {
          let t11 = this.highlightedPoint, i11 = 1 / 0, s11;
          return !!(sU(t11.plotX) && sU(t11.plotY)) && (this.series.forEach((n3) => {
            !s_(n3) && n3.points.forEach((r3) => {
              if (!sU(r3.plotY) || !sU(r3.plotX) || r3 === t11) return;
              let o2 = r3.plotY - t11.plotY, a2 = Math.abs(r3.plotX - t11.plotX), l2 = Math.abs(o2) * Math.abs(o2) + a2 * a2 * 4;
              n3.yAxis && n3.yAxis.reversed && (o2 *= -1), !(o2 <= 0 && e11 || o2 >= 0 && !e11 || l2 < 5 || sZ(r3)) && l2 < i11 && (i11 = l2, s11 = r3);
            });
          }), !!s11 && s11.highlight());
        }
        function s10(e11) {
          let t11, i11, s11, n3 = this.highlightedPoint, r3 = this.series && this.series[this.series.length - 1], o2 = r3 && r3.points && r3.points[r3.points.length - 1];
          return this.highlightedPoint ? !!((t11 = this.series[n3.series.index + (e11 ? -1 : 1)]) && (i11 = function(e12, t12, i12, s12) {
            let n4 = 1 / 0, r4, o3, a2, l2 = t12.points.length, h2 = (e13) => !(sU(e13.plotX) && sU(e13.plotY));
            if (!h2(e12)) {
              for (; l2--; ) !h2(r4 = t12.points[l2]) && (a2 = (e12.plotX - r4.plotX) * (e12.plotX - r4.plotX) * 4 + (e12.plotY - r4.plotY) * (e12.plotY - r4.plotY) * 1) < n4 && (n4 = a2, o3 = l2);
              return sU(o3) ? t12.points[o3] : void 0;
            }
          }(n3, t11, 4))) && (s_(t11) ? (i11.highlight(), s11 = this.highlightAdjacentSeries(e11)) ? s11 : (n3.highlight(), false) : (i11.highlight(), i11.series.highlightNextValidPoint())) : (t11 = e11 ? this.series && this.series[0] : r3, !!(i11 = e11 ? t11 && t11.points && t11.points[0] : o2) && i11.highlight());
        }
        function n2(e11 = true) {
          var _a, _b, _c;
          let t11 = this.series.chart, i11 = (_b = (_a = t11.tooltip) == null ? void 0 : _a.label) == null ? void 0 : _b.element;
          (!this.isNull || ((_c = this.series.options) == null ? void 0 : _c.nullInteraction)) && e11 ? this.onMouseOver() : t11.tooltip && t11.tooltip.hide(0), sY(this), this.graphic && (t11.setFocusToElement(this.graphic), !e11 && t11.focusElement && t11.focusElement.removeFocusBorder()), t11.highlightedPoint = this;
          let s11 = i11 == null ? void 0 : i11.getBoundingClientRect().top;
          if (i11 && s11 && s11 < 0) {
            let e12 = window.scrollY;
            window.scrollTo({ behavior: "smooth", top: e12 + s11 });
          }
          return this;
        }
        function r2() {
          let e11 = this.chart.highlightedPoint, t11 = (e11 && e11.series) === this ? sj(e11) : 0, i11 = this.points, s11 = i11.length;
          if (i11 && s11) {
            for (let e12 = t11; e12 < s11; ++e12) if (!sZ(i11[e12])) return i11[e12].highlight();
            for (let e12 = t11; e12 >= 0; --e12) if (!sZ(i11[e12])) return i11[e12].highlight();
          }
          return false;
        }
        e10.compose = function(e11, o2, a2) {
          let l2 = e11.prototype, h2 = o2.prototype, c2 = a2.prototype;
          l2.highlightAdjacentPoint || (l2.highlightAdjacentPoint = t10, l2.highlightAdjacentPointVertical = i10, l2.highlightAdjacentSeries = s10, h2.highlight = n2, c2.keyboardMoveVertical = true, ["column", "gantt", "pie"].forEach((e12) => {
            sG[e12] && (sG[e12].prototype.keyboardMoveVertical = false);
          }), c2.highlightNextValidPoint = r2);
        };
      }(s0 || (s0 = {}));
      let s1 = s0, { hideSeriesFromAT: s2 } = K, { describeSeries: s3 } = i8, s5 = class extends Z {
        static compose(e10, t10, i10) {
          sl.compose(i10), sR.compose(i10), s1.compose(e10, t10, i10);
        }
        init() {
          this.newDataAnnouncer = new sl(this.chart), this.newDataAnnouncer.init(), this.keyboardNavigation = new s1(this.chart, this.keyCodes), this.keyboardNavigation.init(), this.hideTooltipFromATWhenShown(), this.hideSeriesLabelsFromATWhenShown();
        }
        hideTooltipFromATWhenShown() {
          let e10 = this;
          this.chart.tooltip && this.addEvent(this.chart.tooltip.constructor, "refresh", function() {
            this.chart === e10.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", true);
          });
        }
        hideSeriesLabelsFromATWhenShown() {
          this.addEvent(this.chart, "afterDrawSeriesLabels", function() {
            this.series.forEach(function(e10) {
              e10.labelBySeries && e10.labelBySeries.attr("aria-hidden", true);
            });
          });
        }
        onChartRender() {
          this.chart.series.forEach(function(e10) {
            false !== (e10.options.accessibility && e10.options.accessibility.enabled) && e10.visible && 0 !== e10.getPointsCollection().length ? s3(e10) : s2(e10);
          });
        }
        getKeyboardNavigation() {
          return this.keyboardNavigation.getKeyboardNavigationHandler();
        }
        destroy() {
          this.newDataAnnouncer.destroy(), this.keyboardNavigation.destroy();
        }
      }, { unhideChartElementFromAT: s4 } = K, { getFakeMouseEvent: s6 } = S, { attr: s9, pick: s8 } = w(), s7 = class extends Z {
        constructor() {
          super(...arguments), this.focusedMapNavButtonIx = -1;
        }
        init() {
          let e10 = this, t10 = this.chart;
          this.proxyProvider.addGroup("zoom", "div"), ["afterShowResetZoom", "afterApplyDrilldown", "drillupall"].forEach((i10) => {
            e10.addEvent(t10, i10, function() {
              e10.updateProxyOverlays();
            });
          });
        }
        onChartUpdate() {
          let e10 = this.chart, t10 = this;
          e10.mapNavigation && e10.mapNavigation.navButtons.forEach((i10, s10) => {
            s4(e10, i10.element), t10.setMapNavButtonAttrs(i10.element, "accessibility.zoom.mapZoom" + (s10 ? "Out" : "In"));
          });
        }
        setMapNavButtonAttrs(e10, t10) {
          let i10 = this.chart;
          s9(e10, { tabindex: -1, role: "button", "aria-label": i10.langFormat(t10, { chart: i10 }) });
        }
        onChartRender() {
          this.updateProxyOverlays();
        }
        updateProxyOverlays() {
          let e10 = this.chart;
          if (this.proxyProvider.clearGroup("zoom"), e10.resetZoomButton && this.createZoomProxyButton(e10.resetZoomButton, "resetZoomProxyButton", e10.langFormat("accessibility.zoom.resetZoomButton", { chart: e10 })), e10.drillUpButton && e10.breadcrumbs && e10.breadcrumbs.list) {
            let t10 = e10.breadcrumbs.list[e10.breadcrumbs.list.length - 1];
            this.createZoomProxyButton(e10.drillUpButton, "drillUpProxyButton", e10.langFormat("accessibility.drillUpButton", { chart: e10, buttonText: e10.breadcrumbs.getButtonText(t10) }));
          }
        }
        createZoomProxyButton(e10, t10, i10) {
          this[t10] = this.proxyProvider.addProxyElement("zoom", { click: e10 }, "button", { "aria-label": i10, tabindex: -1 });
        }
        getMapZoomNavigation() {
          let e10 = this.keyCodes, t10 = this.chart, i10 = this;
          return new Q(t10, { keyCodeMap: [[[e10.up, e10.down, e10.left, e10.right], function(e11) {
            return i10.onMapKbdArrow(this, e11);
          }], [[e10.tab], function(e11, t11) {
            return i10.onMapKbdTab(this, t11);
          }], [[e10.space, e10.enter], function() {
            return i10.onMapKbdClick(this);
          }]], validate: function() {
            return !!(t10.mapView && t10.mapNavigation && t10.mapNavigation.navButtons.length);
          }, init: function(e11) {
            return i10.onMapNavInit(e11);
          } });
        }
        onMapKbdArrow(e10, t10) {
          let i10 = this.chart, s10 = this.keyCodes, n2 = i10.container, r2 = t10 === s10.up || t10 === s10.down, o2 = t10 === s10.left || t10 === s10.up ? 1 : -1, a2 = (r2 ? i10.plotHeight : i10.plotWidth) / 10 * o2, l2 = 10 * Math.random(), h2 = { x: n2.offsetLeft + i10.plotLeft + i10.plotWidth / 2 + l2, y: n2.offsetTop + i10.plotTop + i10.plotHeight / 2 + l2 }, c2 = r2 ? { x: h2.x, y: h2.y + a2 } : { x: h2.x + a2, y: h2.y };
          return [s6("mousedown", h2), s6("mousemove", c2), s6("mouseup", c2)].forEach((e11) => n2.dispatchEvent(e11)), e10.response.success;
        }
        onMapKbdTab(e10, t10) {
          let i10 = this.chart, s10 = e10.response, n2 = t10.shiftKey, r2 = n2 && !this.focusedMapNavButtonIx || !n2 && this.focusedMapNavButtonIx;
          if (i10.mapNavigation.navButtons[this.focusedMapNavButtonIx].setState(0), r2) return i10.mapView && i10.mapView.zoomBy(), s10[n2 ? "prev" : "next"];
          this.focusedMapNavButtonIx += n2 ? -1 : 1;
          let o2 = i10.mapNavigation.navButtons[this.focusedMapNavButtonIx];
          return i10.setFocusToElement(o2.box, o2.element), o2.setState(2), s10.success;
        }
        onMapKbdClick(e10) {
          let t10 = this.chart.mapNavigation.navButtons[this.focusedMapNavButtonIx].element;
          return this.fakeClickEvent(t10), e10.response.success;
        }
        onMapNavInit(e10) {
          let t10 = this.chart, i10 = t10.mapNavigation.navButtons[0], s10 = t10.mapNavigation.navButtons[1], n2 = e10 > 0 ? i10 : s10;
          t10.setFocusToElement(n2.box, n2.element), n2.setState(2), this.focusedMapNavButtonIx = e10 > 0 ? 0 : 1;
        }
        simpleButtonNavigation(e10, t10, i10) {
          let s10 = this.keyCodes, n2 = this, r2 = this.chart;
          return new Q(r2, { keyCodeMap: [[[s10.tab, s10.up, s10.down, s10.left, s10.right], function(e11, t11) {
            let i11 = e11 === s10.tab && t11.shiftKey || e11 === s10.left || e11 === s10.up;
            return this.response[i11 ? "prev" : "next"];
          }], [[s10.space, s10.enter], function() {
            return s8(i10(this, r2), this.response.success);
          }]], validate: function() {
            return r2[e10] && r2[e10].box && n2[t10].innerElement;
          }, init: function() {
            r2.setFocusToElement(r2[e10].box, n2[t10].innerElement);
          } });
        }
        getKeyboardNavigation() {
          return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function(e10, t10) {
            t10.zoomOut();
          }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function(e10, t10) {
            return t10.drillUp(), e10.response.prev;
          }), this.getMapZoomNavigation()];
        }
      }, { doc: ne, isMS: nt, win: ni } = w(), ns = { isHighContrastModeActive: function() {
        let e10 = /(Edg)/.test(ni.navigator.userAgent);
        if (ni.matchMedia && e10) return ni.matchMedia("(-ms-high-contrast: active)").matches;
        if (nt && ni.getComputedStyle) {
          let e11 = ne.createElement("div");
          e11.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)", ne.body.appendChild(e11);
          let t10 = (e11.currentStyle || ni.getComputedStyle(e11)).backgroundImage;
          return ne.body.removeChild(e11), "none" === t10;
        }
        return ni.matchMedia && ni.matchMedia("(forced-colors: active)").matches;
      }, setHighContrastTheme: function(e10) {
        var _a;
        e10.highContrastModeActive = true;
        let t10 = e10.options.accessibility.highContrastTheme;
        e10.update(t10, false);
        let i10 = ((_a = t10.colors) == null ? void 0 : _a.length) > 1;
        e10.series.forEach(function(e11) {
          let s10 = t10.plotOptions[e11.type] || {}, n2 = i10 && void 0 !== e11.colorIndex ? t10.colors[e11.colorIndex] : s10.color || "window", r2 = { color: s10.color || "windowText", colors: i10 ? t10.colors : [s10.color || "windowText"], borderColor: s10.borderColor || "window", fillColor: n2 };
          e11.update(r2, false), e11.points && e11.points.forEach(function(e12) {
            e12.options && e12.options.color && e12.update({ color: s10.color || "windowText", borderColor: s10.borderColor || "window" }, false);
          });
        }), e10.redraw();
      } }, nn = { chart: { backgroundColor: "window" }, title: { style: { color: "windowText" } }, subtitle: { style: { color: "windowText" } }, colorAxis: { minColor: "windowText", maxColor: "windowText", stops: [], dataClasses: [] }, colors: ["windowText"], xAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, yAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, tooltip: { backgroundColor: "window", borderColor: "windowText", style: { color: "windowText" } }, plotOptions: { series: { lineColor: "windowText", fillColor: "window", borderColor: "windowText", edgeColor: "windowText", borderWidth: 1, dataLabels: { connectorColor: "windowText", color: "windowText", style: { color: "windowText", textOutline: "none" } }, marker: { lineColor: "windowText", fillColor: "windowText" } }, pie: { color: "window", colors: ["window"], borderColor: "windowText", borderWidth: 1 }, boxplot: { fillColor: "window" }, candlestick: { lineColor: "windowText", fillColor: "window" }, errorbar: { fillColor: "window" } }, legend: { backgroundColor: "window", itemStyle: { color: "windowText" }, itemHoverStyle: { color: "windowText" }, itemHiddenStyle: { color: "#555" }, title: { style: { color: "windowText" } } }, credits: { style: { color: "windowText" } }, drilldown: { activeAxisLabelStyle: { color: "windowText" }, activeDataLabelStyle: { color: "windowText" } }, navigation: { buttonOptions: { symbolStroke: "windowText", theme: { fill: "window" } } }, rangeSelector: { buttonTheme: { fill: "window", stroke: "windowText", style: { color: "windowText" }, states: { hover: { fill: "window", stroke: "windowText", style: { color: "windowText" } }, select: { fill: "#444", stroke: "windowText", style: { color: "windowText" } } } }, inputBoxBorderColor: "windowText", inputStyle: { backgroundColor: "window", color: "windowText" }, labelStyle: { color: "windowText" } }, navigator: { handles: { backgroundColor: "window", borderColor: "windowText" }, outlineColor: "windowText", maskFill: "transparent", series: { color: "windowText", lineColor: "windowText" }, xAxis: { gridLineColor: "windowText" } }, scrollbar: { barBackgroundColor: "#444", barBorderColor: "windowText", buttonArrowColor: "windowText", buttonBackgroundColor: "window", buttonBorderColor: "windowText", rifleColor: "windowText", trackBackgroundColor: "window", trackBorderColor: "windowText" } }, { error: nr, pick: no } = w();
      function na(e10, t10, i10) {
        let s10 = e10, n2, r2 = 0;
        for (; r2 < t10.length - 1; ++r2) s10 = s10[n2 = t10[r2]] = no(s10[n2], {});
        s10[t10[t10.length - 1]] = i10;
      }
      function nl(e10, t10, i10, s10) {
        function n2(e11, t11) {
          return t11.reduce(function(e12, t12) {
            return e12[t12];
          }, e11);
        }
        let r2 = n2(e10.options, t10), o2 = n2(e10.options, i10);
        Object.keys(s10).forEach(function(n3) {
          let a2 = r2[n3];
          void 0 !== a2 && (na(o2, s10[n3], a2), nr(32, false, e10, { [t10.join(".") + "." + n3]: i10.join(".") + "." + s10[n3].join(".") }));
        });
      }
      let nh = function(e10) {
        !function(e11) {
          let t10 = e11.options.chart, i10 = e11.options.accessibility || {};
          ["description", "typeDescription"].forEach(function(s10) {
            t10[s10] && (i10[s10] = t10[s10], nr(32, false, e11, { [`chart.${s10}`]: `use accessibility.${s10}` }));
          });
        }(e10), function(e11) {
          e11.axes.forEach(function(t10) {
            let i10 = t10.options;
            i10 && i10.description && (i10.accessibility = i10.accessibility || {}, i10.accessibility.description = i10.description, nr(32, false, e11, { "axis.description": "use axis.accessibility.description" }));
          });
        }(e10), e10.series && function(e11) {
          let t10 = { description: ["accessibility", "description"], exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"], pointDescriptionFormatter: ["accessibility", "point", "descriptionFormatter"], skipKeyboardNavigation: ["accessibility", "keyboardNavigation", "enabled"], "accessibility.pointDescriptionFormatter": ["accessibility", "point", "descriptionFormatter"] };
          e11.series.forEach(function(i10) {
            Object.keys(t10).forEach(function(s10) {
              let n2 = i10.options[s10];
              "accessibility.pointDescriptionFormatter" === s10 && (n2 = i10.options.accessibility && i10.options.accessibility.pointDescriptionFormatter), void 0 !== n2 && (na(i10.options, t10[s10], "skipKeyboardNavigation" === s10 ? !n2 : n2), nr(32, false, e11, { [`series.${s10}`]: "series." + t10[s10].join(".") }));
            });
          });
        }(e10), nl(e10, ["accessibility"], ["accessibility"], { pointDateFormat: ["point", "dateFormat"], pointDateFormatter: ["point", "dateFormatter"], pointDescriptionFormatter: ["point", "descriptionFormatter"], pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"], pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"], pointValueDecimals: ["point", "valueDecimals"], pointValuePrefix: ["point", "valuePrefix"], pointValueSuffix: ["point", "valueSuffix"], screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"], describeSingleSeries: ["series", "describeSingleSeries"], seriesDescriptionFormatter: ["series", "descriptionFormatter"], onTableAnchorClick: ["screenReaderSection", "onViewDataTableClick"], axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"] }), nl(e10, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], { skipNullPoints: ["skipNullPoints"], mode: ["mode"] }), nl(e10, ["lang", "accessibility"], ["lang", "accessibility"], { legendItem: ["legend", "legendItem"], legendLabel: ["legend", "legendLabel"], mapZoomIn: ["zoom", "mapZoomIn"], mapZoomOut: ["zoom", "mapZoomOut"], resetZoomButton: ["zoom", "resetZoomButton"], screenReaderRegionLabel: ["screenReaderSection", "beforeRegionLabel"], rangeSelectorButton: ["rangeSelector", "buttonText"], rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"], rangeSelectorMinInput: ["rangeSelector", "minInputLabel"], svgContainerEnd: ["screenReaderSection", "endOfChartMarker"], viewAsDataTable: ["table", "viewAsDataTableButtonText"], tableSummary: ["table", "tableSummary"] });
      }, { defaultOptions: nc } = w(), { doc: nd } = w(), { addEvent: nu, extend: np, fireEvent: ng, merge: nm } = w(), { removeElement: nb } = S;
      class nf {
        constructor(e10) {
          this.init(e10);
        }
        init(e10) {
          if (this.chart = e10, !(nd == null ? void 0 : nd.addEventListener)) {
            this.zombie = true, this.components = {}, e10.renderTo.setAttribute("aria-hidden", true);
            return;
          }
          nh(e10), this.proxyProvider = new sC(this.chart), this.initComponents(), this.keyboardNavigation = new eJ(e10, this.components);
        }
        initComponents() {
          let e10 = this.chart, t10 = this.proxyProvider, i10 = e10.options.accessibility;
          this.components = { container: new es(), infoRegions: new eL(), legend: new to(), chartMenu: new eV(), rangeSelector: new sN(), series: new s5(), zoom: new s7(), navigator: new iK() }, i10.customComponents && np(this.components, i10.customComponents);
          let s10 = this.components;
          this.getComponentOrder().forEach(function(i11) {
            s10[i11].initBase(e10, t10), s10[i11].init();
          });
        }
        getComponentOrder() {
          return this.components ? this.components.series ? ["series"].concat(Object.keys(this.components).filter((e10) => "series" !== e10)) : Object.keys(this.components) : [];
        }
        update() {
          let e10 = this.components, t10 = this.chart, i10 = t10.options.accessibility;
          ng(t10, "beforeA11yUpdate"), t10.types = this.getChartTypes();
          let s10 = i10.keyboardNavigation.order;
          this.proxyProvider.updateGroupOrder(s10), this.getComponentOrder().forEach(function(i11) {
            e10[i11].onChartUpdate(), ng(t10, "afterA11yComponentUpdate", { name: i11, component: e10[i11] });
          }), this.keyboardNavigation.update(s10), !t10.highContrastModeActive && false !== i10.highContrastMode && (ns.isHighContrastModeActive() || true === i10.highContrastMode) && ns.setHighContrastTheme(t10), ng(t10, "afterA11yUpdate", { accessibility: this });
        }
        destroy() {
          let e10 = this.chart || {}, t10 = this.components;
          Object.keys(t10).forEach(function(e11) {
            t10[e11].destroy(), t10[e11].destroyBase();
          }), this.proxyProvider && this.proxyProvider.destroy(), e10.announcerContainer && nb(e10.announcerContainer), this.keyboardNavigation && this.keyboardNavigation.destroy(), e10.renderTo && e10.renderTo.setAttribute("aria-hidden", true), e10.focusElement && e10.focusElement.removeFocusBorder();
        }
        getChartTypes() {
          let e10 = {};
          return this.chart.series.forEach(function(t10) {
            e10[t10.type] = 1;
          }), Object.keys(e10);
        }
      }
      !function(e10) {
        function t10() {
          this.accessibility && this.accessibility.destroy();
        }
        function i10() {
          this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled());
          let e11 = this.accessibility;
          e11 && !e11.zombie && (e11.proxyProvider.updateProxyElementPositions(), e11.getComponentOrder().forEach(function(t11) {
            e11.components[t11].onChartRender();
          }));
        }
        function s10(e11) {
          let t11 = e11.options.accessibility;
          t11 && (t11.customComponents && (this.options.accessibility.customComponents = t11.customComponents, delete t11.customComponents), nm(true, this.options.accessibility, t11), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility)), this.a11yDirty = true;
        }
        function n2() {
          let t11 = this.accessibility, i11 = this.options.accessibility, s11 = this.renderer.boxWrapper.element, n3 = this.title;
          if (i11 && i11.enabled) t11 && !t11.zombie ? t11.update() : (this.accessibility = t11 = new e10(this), t11 && !t11.zombie && t11.update(), "img" === s11.getAttribute("role") && s11.removeAttribute("role"));
          else if (t11) t11.destroy && t11.destroy(), delete this.accessibility;
          else {
            this.renderTo.setAttribute("role", "img"), this.renderTo.setAttribute("aria-hidden", false), this.renderTo.setAttribute("aria-label", (n3 && n3.element.textContent || "").replace(/</g, "&lt;")), s11.setAttribute("aria-hidden", true);
            let e11 = document.getElementsByClassName("highcharts-description")[0];
            e11 && (e11.setAttribute("aria-hidden", false), e11.classList.remove("highcharts-linked-description"));
          }
        }
        function r2() {
          this.series.chart.accessibility && (this.series.chart.a11yDirty = true);
        }
        e10.i18nFormat = F.i18nFormat, e10.compose = function(e11, o2, a2, l2, h2, c2) {
          eJ.compose(e11), sl.compose(l2), to.compose(e11, o2), eV.compose(e11), s5.compose(e11, a2, l2), F.compose(e11), eo.compose(e11, h2), c2 && sN.compose(e11, c2);
          let d2 = e11.prototype;
          d2.updateA11yEnabled || (d2.updateA11yEnabled = n2, nu(e11, "destroy", t10), nu(e11, "render", i10), nu(e11, "update", s10), ["addSeries", "init"].forEach((t11) => {
            nu(e11, t11, function() {
              this.a11yDirty = true;
            });
          }), ["afterApplyDrilldown", "drillupall"].forEach((t11) => {
            nu(e11, t11, function() {
              let e12 = this.accessibility;
              e12 && !e12.zombie && e12.update();
            });
          }), nu(a2, "update", r2), ["update", "updatedData", "remove"].forEach((e12) => {
            nu(l2, e12, function() {
              this.chart.accessibility && (this.chart.a11yDirty = true);
            });
          }));
        };
      }(nf || (nf = {})), nm(true, nc, { accessibility: { enabled: true, screenReaderSection: { beforeChartFormat: "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>", afterChartFormat: "{endOfChartMarker}", axisRangeDateFormat: "%Y-%m-%d %H:%M:%S" }, series: { descriptionFormat: "{seriesDescription}{authorDescription}{axisDescription}", describeSingleSeries: false, pointDescriptionEnabledThreshold: 200 }, point: { valueDescriptionFormat: "{xDescription}{separator}{value}.", describeNull: true }, landmarkVerbosity: "all", linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description', highContrastMode: "auto", keyboardNavigation: { enabled: true, focusBorder: { enabled: true, hideBrowserFocusOutline: true, style: { color: "#334eff", lineWidth: 2, borderRadius: 3 }, margin: 2 }, order: ["series", "zoom", "rangeSelector", "navigator", "legend", "chartMenu"], wrapAround: true, seriesNavigation: { skipNullPoints: void 0, pointNavigationEnabledThreshold: false, rememberPointFocus: false } }, announceNewData: { enabled: false, minAnnounceInterval: 5e3, interruptUser: false } }, legend: { accessibility: { enabled: true, keyboardNavigation: { enabled: true } } }, exporting: { accessibility: { enabled: true } }, navigator: { accessibility: { enabled: true } } }, { accessibility: { highContrastTheme: nn }, lang: { accessibility: { defaultChartTitle: "Chart", chartContainerLabel: "{title}. Highcharts interactive chart.", svgContainerLabel: "Interactive chart", drillUpButton: "{buttonText}", credits: "Chart credits: {creditsStr}", thousandsSep: ",", svgContainerTitle: "", graphicContainerLabel: "", screenReaderSection: { beforeRegionLabel: "", afterRegionLabel: "", annotations: { heading: "Chart annotations summary", descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}", descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{#each additionalAnnotationPoints}, also related to {this}{/each}", descriptionNoPoints: "{annotationText}" }, endOfChartMarker: "End of interactive chart." }, sonification: { playAsSoundButtonText: "Play as sound, {chartTitle}", playAsSoundClickAnnouncement: "Play" }, legend: { legendLabelNoTitle: "Toggle series visibility, {chartTitle}", legendLabel: "Chart legend: {legendTitle}", legendItem: "Show {itemName}" }, zoom: { mapZoomIn: "Zoom chart", mapZoomOut: "Zoom out chart", resetZoomButton: "Reset zoom" }, rangeSelector: { dropdownLabel: "{rangeTitle}", minInputLabel: "Select start date.", maxInputLabel: "Select end date.", clickButtonAnnouncement: "Viewing {axisRangeDescription}" }, navigator: { handleLabel: "{#eq handleIx 0}Start, percent{else}End, percent{/eq}", groupLabel: "Axis zoom", changeAnnouncement: "{axisRangeDescription}" }, table: { viewAsDataTableButtonText: "View as data table, {chartTitle}", tableSummary: "Table representation of chart." }, announceNewData: { newDataAnnounce: "Updated data for chart {chartTitle}", newSeriesAnnounceSingle: "New data series: {seriesDesc}", newPointAnnounceSingle: "New data point: {pointDesc}", newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}", newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}" }, seriesTypeDescriptions: { boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.", arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.", areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.", bubble: "Bubble charts are scatter charts where each data point also has a size value.", columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.", errorbar: "Errorbar series are used to display the variability of the data.", funnel: "Funnel charts are used to display reduction of data in stages.", pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.", waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value." }, chartTypes: { emptyChart: "Empty chart", mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.", unknownMap: "Map of unspecified region with {numSeries} data series.", combinationChart: "Combination chart with {numSeries} data series.", defaultSingle: "Chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", defaultMultiple: "Chart with {numSeries} data series.", splineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", splineMultiple: "Line chart with {numSeries} lines.", lineSingle: "Line chart with {numPoints} data {#eq numPoints 1}point{else}points{/eq}.", lineMultiple: "Line chart with {numSeries} lines.", columnSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.", columnMultiple: "Bar chart with {numSeries} data series.", barSingle: "Bar chart with {numPoints} {#eq numPoints 1}bar{else}bars{/eq}.", barMultiple: "Bar chart with {numSeries} data series.", pieSingle: "Pie chart with {numPoints} {#eq numPoints 1}slice{else}slices{/eq}.", pieMultiple: "Pie chart with {numSeries} pies.", scatterSingle: "Scatter chart with {numPoints} {#eq numPoints 1}point{else}points{/eq}.", scatterMultiple: "Scatter chart with {numSeries} data series.", boxplotSingle: "Boxplot with {numPoints} {#eq numPoints 1}box{else}boxes{/eq}.", boxplotMultiple: "Boxplot with {numSeries} data series.", bubbleSingle: "Bubble chart with {numPoints} {#eq numPoints 1}bubbles{else}bubble{/eq}.", bubbleMultiple: "Bubble chart with {numSeries} data series." }, axis: { xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}", xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.", yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}", yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each names}{#unless @first},{/unless}{#if @last} and{/if} {this}{/each}.", timeRangeDays: "Data range: {range} days.", timeRangeHours: "Data range: {range} hours.", timeRangeMinutes: "Data range: {range} minutes.", timeRangeSeconds: "Data range: {range} seconds.", rangeFromTo: "Data ranges from {rangeFrom} to {rangeTo}.", rangeCategories: "Data range: {numCategories} categories." }, exporting: { chartMenuLabel: "Chart menu", menuButtonLabel: "View chart menu, {chartTitle}" }, series: { summary: { default: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", defaultCombination: "{series.name}, series {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", line: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", lineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", spline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", splineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", column: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", columnCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", bar: "{series.name}, bar series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", barCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bar series with {series.points.length} {#eq series.points.length 1}bar{else}bars{/eq}.", pie: "{series.name}, pie {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.", pieCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Pie with {series.points.length} {#eq series.points.length 1}slice{else}slices{/eq}.", scatter: "{series.name}, scatter plot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.", scatterCombination: "{series.name}, series {seriesNumber} of {chart.series.length}, scatter plot with {series.points.length} {#eq series.points.length 1}point{else}points{/eq}.", boxplot: "{series.name}, boxplot {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.", boxplotCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Boxplot with {series.points.length} {#eq series.points.length 1}box{else}boxes{/eq}.", bubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", bubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", map: "{series.name}, map {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.", mapCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Map with {series.points.length} {#eq series.points.length 1}area{else}areas{/eq}.", mapline: "{series.name}, line {seriesNumber} of {chart.series.length} with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", maplineCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Line with {series.points.length} data {#eq series.points.length 1}point{else}points{/eq}.", mapbubble: "{series.name}, bubble series {seriesNumber} of {chart.series.length} with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}.", mapbubbleCombination: "{series.name}, series {seriesNumber} of {chart.series.length}. Bubble series with {series.points.length} {#eq series.points.length 1}bubble{else}bubbles{/eq}." }, description: "{description}", xAxisDescription: "X axis, {name}", yAxisDescription: "Y axis, {name}", nullPointValue: "No value", pointAnnotationsDescription: "{#each annotations}Annotation: {this}{/each}" } } } });
      let nx = nf, ny = w();
      ny.i18nFormat = nx.i18nFormat, ny.A11yChartUtilities = K, ny.A11yHTMLUtilities = S, ny.AccessibilityComponent = Z, ny.KeyboardNavigationHandler = Q, ny.SeriesAccessibilityDescriber = i8, nx.compose(ny.Chart, ny.Legend, ny.Point, ny.Series, ny.SVGElement, ny.RangeSelector);
      let nv = w();
      return y.default;
    })());
  }
});
export default require_accessibility();
//# sourceMappingURL=highcharts_modules_accessibility.js.map
