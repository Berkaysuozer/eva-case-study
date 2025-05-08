import {
  __commonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/highcharts/modules/export-data.js
var require_export_data = __commonJS({
  "node_modules/highcharts/modules/export-data.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(t._Highcharts, t._Highcharts.AST) : "function" == typeof define && define.amd ? define("highcharts/modules/export-data", ["highcharts/highcharts"], function(t2) {
        return e(t2, t2.AST);
      }) : "object" == typeof exports ? exports["highcharts/modules/export-data"] = e(t._Highcharts, t._Highcharts.AST) : t.Highcharts = e(t.Highcharts, t.Highcharts.AST);
    }("undefined" == typeof window ? exports : window, (t, e) => (() => {
      "use strict";
      var o = { 660: (t2) => {
        t2.exports = e;
      }, 944: (e2) => {
        e2.exports = t;
      } }, a = {};
      function n(t2) {
        var e2 = a[t2];
        if (void 0 !== e2) return e2.exports;
        var i2 = a[t2] = { exports: {} };
        return o[t2](i2, i2.exports, n), i2.exports;
      }
      n.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return n.d(e2, { a: e2 }), e2;
      }, n.d = (t2, e2) => {
        for (var o2 in e2) n.o(e2, o2) && !n.o(t2, o2) && Object.defineProperty(t2, o2, { enumerable: true, get: e2[o2] });
      }, n.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
      var i = {};
      n.d(i, { default: () => $ });
      var r = n(944), s = n.n(r);
      let { isSafari: l, win: h, win: { document: c } } = s(), d = h.URL || h.webkitURL || h;
      function p(t2) {
        let e2 = t2.replace(/filename=.*;/, "").match(/data:([^;]*)(;base64)?,([A-Z+\d\/]+)/i);
        if (e2 && e2.length > 3 && h.atob && h.ArrayBuffer && h.Uint8Array && h.Blob && d.createObjectURL) {
          let t3 = h.atob(e2[3]), o2 = new h.ArrayBuffer(t3.length), a2 = new h.Uint8Array(o2);
          for (let e3 = 0; e3 < a2.length; ++e3) a2[e3] = t3.charCodeAt(e3);
          return d.createObjectURL(new h.Blob([a2], { type: e2[1] }));
        }
      }
      let u = { dataURLtoBlob: p, downloadURL: function(t2, e2) {
        let o2 = h.navigator, a2 = c.createElement("a");
        if ("string" != typeof t2 && !(t2 instanceof String) && o2.msSaveOrOpenBlob) {
          o2.msSaveOrOpenBlob(t2, e2);
          return;
        }
        if (t2 = "" + t2, o2.userAgent.length > 1e3) throw Error("Input too long");
        let n2 = /Edge\/\d+/.test(o2.userAgent);
        if ((l && "string" == typeof t2 && 0 === t2.indexOf("data:application/pdf") || n2 || t2.length > 2e6) && !(t2 = p(t2) || "")) throw Error("Failed to convert to blob");
        if (void 0 !== a2.download) a2.href = t2, a2.download = e2, c.body.appendChild(a2), a2.click(), c.body.removeChild(a2);
        else try {
          if (!h.open(t2, "chart")) throw Error("Failed to open window");
        } catch {
          h.location.href = t2;
        }
      } };
      var g = n(660), m = n.n(g);
      let f = { exporting: { csv: { annotations: { itemDelimiter: "; ", join: false }, columnHeaderFormatter: null, dateFormat: "%Y-%m-%d %H:%M:%S", decimalPoint: null, itemDelimiter: null, lineDelimiter: "\n" }, showTable: false, useMultiLevelHeaders: true, useRowspanHeaders: true, showExportInProgress: true }, lang: { downloadCSV: "Download CSV", downloadXLS: "Download XLS", exportData: { annotationHeader: "Annotations", categoryHeader: "Category", categoryDatetimeHeader: "DateTime" }, viewData: "View data table", hideData: "Hide data table", exportInProgress: "Exporting..." } }, { getOptions: x, setOptions: b } = s(), { downloadURL: y } = u, { doc: w, win: T } = s(), { addEvent: v, defined: D, extend: S, find: L, fireEvent: E, isNumber: A, pick: C } = s();
      function k(t2) {
        var _a;
        let e2 = !!((_a = this.options.exporting) == null ? void 0 : _a.showExportInProgress), o2 = T.requestAnimationFrame || setTimeout;
        o2(() => {
          e2 && this.showLoading(this.options.lang.exportInProgress), o2(() => {
            try {
              t2.call(this);
            } finally {
              e2 && this.hideLoading();
            }
          });
        });
      }
      function H() {
        k.call(this, () => {
          let t2 = this.getCSV(true);
          y(M(t2, "text/csv") || "data:text/csv,\uFEFF" + encodeURIComponent(t2), this.getFilename() + ".csv");
        });
      }
      function O() {
        k.call(this, () => {
          let t2 = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>' + this.getTable(true) + "</body></html>";
          y(M(t2, "application/vnd.ms-excel") || "data:application/vnd.ms-excel;base64," + T.btoa(unescape(encodeURIComponent(t2))), this.getFilename() + ".xls");
        });
      }
      function R(t2) {
        let e2 = "", o2 = this.getDataRows(), a2 = this.options.exporting.csv, n2 = C(a2.decimalPoint, "," !== a2.itemDelimiter && t2 ? 1.1.toLocaleString()[1] : "."), i2 = C(a2.itemDelimiter, "," === n2 ? ";" : ","), r2 = a2.lineDelimiter;
        return o2.forEach((t3, a3) => {
          let s2 = "", l2 = t3.length;
          for (; l2--; ) "string" == typeof (s2 = t3[l2]) && (s2 = `"${s2}"`), "number" == typeof s2 && "." !== n2 && (s2 = s2.toString().replace(".", n2)), t3[l2] = s2;
          t3.length = o2.length ? o2[0].length : 0, e2 += t3.join(i2), a3 < o2.length - 1 && (e2 += r2);
        }), e2;
      }
      function N(t2) {
        let e2, o2, a2 = this.hasParallelCoordinates, n2 = this.time, i2 = this.options.exporting && this.options.exporting.csv || {}, r2 = this.xAxis, s2 = {}, l2 = [], h2 = [], c2 = [], d2 = this.options.lang.exportData, p2 = d2.categoryHeader, u2 = d2.categoryDatetimeHeader, g2 = function(e3, o3, a3) {
          if (i2.columnHeaderFormatter) {
            let t3 = i2.columnHeaderFormatter(e3, o3, a3);
            if (false !== t3) return t3;
          }
          return e3 ? e3.bindAxes ? t2 ? { columnTitle: a3 > 1 ? o3 : e3.name, topLevelColumnTitle: e3.name } : e3.name + (a3 > 1 ? " (" + o3 + ")" : "") : e3.options.title && e3.options.title.text || (e3.dateTime ? u2 : p2) : p2;
        }, m2 = function(t3, e3, o3) {
          let a3 = {}, n3 = {};
          return e3.forEach(function(e4) {
            let i3 = (t3.keyToAxis && t3.keyToAxis[e4] || e4) + "Axis", r3 = A(o3) ? t3.chart[i3][o3] : t3[i3];
            a3[e4] = r3 && r3.categories || [], n3[e4] = r3 && r3.dateTime;
          }), { categoryMap: a3, dateTimeValueAxisMap: n3 };
        }, f2 = function(t3, e3) {
          let o3 = t3.pointArrayMap || ["y"];
          return t3.data.some((t4) => void 0 !== t4.y && t4.name) && e3 && !e3.categories && "name" !== t3.exportKey ? ["x", ...o3] : o3;
        }, x2 = [], b2, y2, w2, T2 = 0, v2, S2;
        for (v2 in this.series.forEach(function(e3) {
          let o3 = e3.options.keys, l3 = e3.xAxis, d3 = o3 || f2(e3, l3), p3 = d3.length, u3 = !e3.requireSorting && {}, b3 = r2.indexOf(l3), y3 = m2(e3, d3), v3, D2;
          if (false !== e3.options.includeInDataExport && !e3.options.isInternal && false !== e3.visible) {
            for (L(x2, function(t3) {
              return t3[0] === b3;
            }) || x2.push([b3, T2]), D2 = 0; D2 < p3; ) w2 = g2(e3, d3[D2], d3.length), c2.push(w2.columnTitle || w2), t2 && h2.push(w2.topLevelColumnTitle || w2), D2++;
            v3 = { chart: e3.chart, autoIncrement: e3.autoIncrement, options: e3.options, pointArrayMap: e3.pointArrayMap, index: e3.index }, e3.options.data.forEach(function(t3, o4) {
              let r3, h3, c3, g3 = { series: v3 };
              a2 && (y3 = m2(e3, d3, o4)), e3.pointClass.prototype.applyOptions.apply(g3, [t3]);
              let f3 = e3.data[o4] && e3.data[o4].name;
              if (r3 = (g3.x ?? "") + "," + f3, D2 = 0, (!l3 || "name" === e3.exportKey || !a2 && l3 && l3.hasNames && f3) && (r3 = f3), u3 && (u3[r3] && (r3 += "|" + o4), u3[r3] = true), s2[r3]) {
                let t4 = `${r3},${s2[r3].pointers[e3.index]}`, o5 = r3;
                s2[r3].pointers[e3.index] && (s2[t4] || (s2[t4] = [], s2[t4].xValues = [], s2[t4].pointers = []), r3 = t4), s2[o5].pointers[e3.index] += 1;
              } else {
                s2[r3] = [], s2[r3].xValues = [];
                let t4 = [];
                for (let o5 = 0; o5 < e3.chart.series.length; o5++) t4[o5] = 0;
                s2[r3].pointers = t4, s2[r3].pointers[e3.index] = 1;
              }
              for (s2[r3].x = g3.x, s2[r3].name = f3, s2[r3].xValues[b3] = g3.x; D2 < p3; ) h3 = d3[D2], c3 = e3.pointClass.prototype.getNestedProperty.apply(g3, [h3]), s2[r3][T2 + D2] = C(y3.categoryMap[h3][c3], y3.dateTimeValueAxisMap[h3] ? n2.dateFormat(i2.dateFormat, c3) : null, c3), D2++;
            }), T2 += D2;
          }
        }), s2) Object.hasOwnProperty.call(s2, v2) && l2.push(s2[v2]);
        for (y2 = t2 ? [h2, c2] : [c2], T2 = x2.length; T2--; ) e2 = x2[T2][0], o2 = x2[T2][1], b2 = r2[e2], l2.sort(function(t3, o3) {
          return t3.xValues[e2] - o3.xValues[e2];
        }), S2 = g2(b2), y2[0].splice(o2, 0, S2), t2 && y2[1] && y2[1].splice(o2, 0, S2), l2.forEach(function(t3) {
          let e3 = t3.name;
          b2 && !D(e3) && (b2.dateTime ? (t3.x instanceof Date && (t3.x = t3.x.getTime()), e3 = n2.dateFormat(i2.dateFormat, t3.x)) : e3 = b2.categories ? C(b2.names[t3.x], b2.categories[t3.x], t3.x) : t3.x), t3.splice(o2, 0, e3);
        });
        return E(this, "exportData", { dataRows: y2 = y2.concat(l2) }), y2;
      }
      function V(t2) {
        let e2 = (t3) => {
          if (!t3.tagName || "#text" === t3.tagName) return t3.textContent || "";
          let o2 = t3.attributes, a2 = `<${t3.tagName}`;
          return o2 && Object.keys(o2).forEach((t4) => {
            let e3 = o2[t4];
            a2 += ` ${t4}="${e3}"`;
          }), a2 += ">", a2 += t3.textContent || "", (t3.children || []).forEach((t4) => {
            a2 += e2(t4);
          }), a2 += `</${t3.tagName}>`;
        };
        return e2(this.getTableAST(t2));
      }
      function B(t2) {
        var _a;
        let e2 = 0, o2 = [], a2 = this.options, n2 = t2 ? 1.1.toLocaleString()[1] : ".", i2 = C(a2.exporting.useMultiLevelHeaders, true), r2 = this.getDataRows(i2), s2 = i2 ? r2.shift() : null, l2 = r2.shift(), h2 = function(t3, e3) {
          let o3 = t3.length;
          if (e3.length !== o3) return false;
          for (; o3--; ) if (t3[o3] !== e3[o3]) return false;
          return true;
        }, c2 = function(t3, e3, o3, a3) {
          let i3 = C(a3, ""), r3 = "highcharts-text" + (e3 ? " " + e3 : "");
          return "number" == typeof i3 ? (i3 = i3.toString(), "," === n2 && (i3 = i3.replace(".", n2)), r3 = "highcharts-number") : a3 || (r3 = "highcharts-empty"), { tagName: t3, attributes: o3 = S({ class: r3 }, o3), textContent: i3 };
        }, { tableCaption: d2 } = a2.exporting || {};
        false !== d2 && o2.push({ tagName: "caption", attributes: { class: "highcharts-table-caption" }, textContent: "string" == typeof d2 ? d2 : ((_a = a2.title) == null ? void 0 : _a.text) || a2.lang.chartTitle });
        for (let t3 = 0, o3 = r2.length; t3 < o3; ++t3) r2[t3].length > e2 && (e2 = r2[t3].length);
        o2.push(function(t3, e3, o3) {
          let n3 = [], r3 = 0, s3 = o3 || e3 && e3.length, l3, d3 = 0, p3;
          if (i2 && t3 && e3 && !h2(t3, e3)) {
            let o4 = [];
            for (; r3 < s3; ++r3) if ((l3 = t3[r3]) === t3[r3 + 1]) ++d3;
            else if (d3) o4.push(c2("th", "highcharts-table-topheading", { scope: "col", colspan: d3 + 1 }, l3)), d3 = 0;
            else {
              l3 === e3[r3] ? a2.exporting.useRowspanHeaders ? (p3 = 2, delete e3[r3]) : (p3 = 1, e3[r3] = "") : p3 = 1;
              let t4 = c2("th", "highcharts-table-topheading", { scope: "col" }, l3);
              p3 > 1 && t4.attributes && (t4.attributes.valign = "top", t4.attributes.rowspan = p3), o4.push(t4);
            }
            n3.push({ tagName: "tr", children: o4 });
          }
          if (e3) {
            let t4 = [];
            for (r3 = 0, s3 = e3.length; r3 < s3; ++r3) void 0 !== e3[r3] && t4.push(c2("th", null, { scope: "col" }, e3[r3]));
            n3.push({ tagName: "tr", children: t4 });
          }
          return { tagName: "thead", children: n3 };
        }(s2, l2, Math.max(e2, l2.length)));
        let p2 = [];
        r2.forEach(function(t3) {
          let o3 = [];
          for (let a3 = 0; a3 < e2; a3++) o3.push(c2(a3 ? "td" : "th", null, a3 ? {} : { scope: "row" }, t3[a3]));
          p2.push({ tagName: "tr", children: o3 });
        }), o2.push({ tagName: "tbody", children: p2 });
        let u2 = { tree: { tagName: "table", id: `highcharts-data-table-${this.index}`, children: o2 } };
        return E(this, "aftergetTableAST", u2), u2.tree;
      }
      function F() {
        this.toggleDataTable(false);
      }
      function I(t2) {
        let e2 = (t2 = C(t2, !this.isDataTableVisible)) && !this.dataTableDiv;
        if (e2 && (this.dataTableDiv = w.createElement("div"), this.dataTableDiv.className = "highcharts-data-table", this.renderTo.parentNode.insertBefore(this.dataTableDiv, this.renderTo.nextSibling)), this.dataTableDiv) {
          let o3 = this.dataTableDiv.style, a3 = o3.display;
          o3.display = t2 ? "block" : "none", t2 ? (this.dataTableDiv.innerHTML = m().emptyHTML, new (m())([this.getTableAST()]).addToDOM(this.dataTableDiv), E(this, "afterViewData", { element: this.dataTableDiv, wasHidden: e2 || a3 !== o3.display })) : E(this, "afterHideData");
        }
        this.isDataTableVisible = t2;
        let o2 = this.exportDivElements, a2 = this.options.exporting, n2 = a2 && a2.buttons && a2.buttons.contextButton.menuItems, i2 = this.options.lang;
        if (a2 && a2.menuItemDefinitions && i2 && i2.viewData && i2.hideData && n2 && o2) {
          let t3 = o2[n2.indexOf("viewData")];
          t3 && m().setElementHTML(t3, this.isDataTableVisible ? i2.hideData : i2.viewData);
        }
      }
      function U() {
        this.toggleDataTable(true);
      }
      function M(t2, e2) {
        let o2 = T.navigator, a2 = T.URL || T.webkitURL || T;
        try {
          if (o2.msSaveOrOpenBlob && T.MSBlobBuilder) {
            let e3 = new T.MSBlobBuilder();
            return e3.append(t2), e3.getBlob("image/svg+xml");
          }
          return a2.createObjectURL(new T.Blob(["\uFEFF" + t2], { type: e2 }));
        } catch (t3) {
        }
      }
      function j() {
        let t2 = this, e2 = t2.dataTableDiv, o2 = (t3, e3) => t3.children[e3].textContent, a2 = (t3, e3) => (a3, n2) => {
          let i2, r2;
          return i2 = o2(e3 ? a3 : n2, t3), r2 = o2(e3 ? n2 : a3, t3), "" === i2 || "" === r2 || isNaN(i2) || isNaN(r2) ? i2.toString().localeCompare(r2) : i2 - r2;
        };
        if (e2 && t2.options.exporting && t2.options.exporting.allowTableSorting) {
          let o3 = e2.querySelector("thead tr");
          o3 && o3.childNodes.forEach((o4) => {
            let n2 = o4.closest("table");
            o4.addEventListener("click", function() {
              let i2 = [...e2.querySelectorAll("tr:not(thead tr)")], r2 = [...o4.parentNode.children];
              i2.sort(a2(r2.indexOf(o4), t2.ascendingOrderInTable = !t2.ascendingOrderInTable)).forEach((t3) => {
                n2.appendChild(t3);
              }), r2.forEach((t3) => {
                ["highcharts-sort-ascending", "highcharts-sort-descending"].forEach((e3) => {
                  t3.classList.contains(e3) && t3.classList.remove(e3);
                });
              }), o4.classList.add(t2.ascendingOrderInTable ? "highcharts-sort-ascending" : "highcharts-sort-descending");
            });
          });
        }
      }
      function P() {
        this.options && this.options.exporting && this.options.exporting.showTable && !this.options.chart.forExport && this.viewData();
      }
      function K() {
        var _a;
        (_a = this.dataTableDiv) == null ? void 0 : _a.remove();
      }
      let W = s();
      W.dataURLtoBlob = W.dataURLtoBlob || u.dataURLtoBlob, W.downloadURL = W.downloadURL || u.downloadURL, { compose: function(t2, e2) {
        let o2 = t2.prototype;
        if (!o2.getCSV) {
          let a2 = x().exporting;
          v(t2, "afterViewData", j), v(t2, "render", P), v(t2, "destroy", K), o2.downloadCSV = H, o2.downloadXLS = O, o2.getCSV = R, o2.getDataRows = N, o2.getTable = V, o2.getTableAST = B, o2.hideData = F, o2.toggleDataTable = I, o2.viewData = U, a2 && (S(a2.menuItemDefinitions, { downloadCSV: { textKey: "downloadCSV", onclick: function() {
            this.downloadCSV();
          } }, downloadXLS: { textKey: "downloadXLS", onclick: function() {
            this.downloadXLS();
          } }, viewData: { textKey: "viewData", onclick: function() {
            k.call(this, this.toggleDataTable);
          } } }), a2.buttons && a2.buttons.contextButton.menuItems && a2.buttons.contextButton.menuItems.push("separator", "downloadCSV", "downloadXLS", "viewData")), b(f);
          let { arearange: n2, gantt: i2, map: r2, mapbubble: s2, treemap: l2, xrange: h2 } = e2.types;
          n2 && (n2.prototype.keyToAxis = { low: "y", high: "y" }), i2 && (i2.prototype.exportKey = "name", i2.prototype.keyToAxis = { start: "x", end: "x" }), r2 && (r2.prototype.exportKey = "name"), s2 && (s2.prototype.exportKey = "name"), l2 && (l2.prototype.exportKey = "name"), h2 && (h2.prototype.keyToAxis = { x2: "x" });
        }
      } }.compose(W.Chart, W.Series);
      let $ = s();
      return i.default;
    })());
  }
});
export default require_export_data();
//# sourceMappingURL=highcharts_modules_export-data.js.map
