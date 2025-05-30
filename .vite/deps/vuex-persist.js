import {
  __commonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options2) {
      return options2.clone !== false && options2.isMergeableObject(value) ? deepmerge2(emptyTarget(value), value, options2) : value;
    }
    function defaultArrayMerge(target, source, options2) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options2);
      });
    }
    function getMergeFunction(key, options2) {
      if (!options2.customMerge) {
        return deepmerge2;
      }
      var customMerge = options2.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge2;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options2) {
      var destination = {};
      if (options2.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options2);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options2.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options2)(target[key], source[key], options2);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options2);
        }
      });
      return destination;
    }
    function deepmerge2(target, source, options2) {
      options2 = options2 || {};
      options2.arrayMerge = options2.arrayMerge || defaultArrayMerge;
      options2.isMergeableObject = options2.isMergeableObject || isMergeableObject;
      options2.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options2);
      } else if (sourceIsArray) {
        return options2.arrayMerge(target, source, options2);
      } else {
        return mergeObject(target, source, options2);
      }
    }
    deepmerge2.all = function deepmergeAll(array, options2) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge2(prev, next, options2);
      }, {});
    };
    var deepmerge_1 = deepmerge2;
    module.exports = deepmerge_1;
  }
});

// node_modules/flatted/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/flatted/cjs/index.js"(exports) {
    "use strict";
    var { parse: $parse, stringify: $stringify } = JSON;
    var { keys } = Object;
    var Primitive = String;
    var primitive = "string";
    var ignore = {};
    var object = "object";
    var noop = (_, value) => value;
    var primitives = (value) => value instanceof Primitive ? Primitive(value) : value;
    var Primitives = (_, value) => typeof value === primitive ? new Primitive(value) : value;
    var revive = (input, parsed, output, $) => {
      const lazy = [];
      for (let ke = keys(output), { length } = ke, y = 0; y < length; y++) {
        const k = ke[y];
        const value = output[k];
        if (value instanceof Primitive) {
          const tmp = input[value];
          if (typeof tmp === object && !parsed.has(tmp)) {
            parsed.add(tmp);
            output[k] = ignore;
            lazy.push({ k, a: [input, parsed, tmp, $] });
          } else
            output[k] = $.call(output, k, tmp);
        } else if (output[k] !== ignore)
          output[k] = $.call(output, k, value);
      }
      for (let { length } = lazy, i = 0; i < length; i++) {
        const { k, a } = lazy[i];
        output[k] = $.call(output, k, revive.apply(null, a));
      }
      return output;
    };
    var set = (known, input, value) => {
      const index = Primitive(input.push(value) - 1);
      known.set(value, index);
      return index;
    };
    var parse = (text, reviver) => {
      const input = $parse(text, Primitives).map(primitives);
      const value = input[0];
      const $ = reviver || noop;
      const tmp = typeof value === object && value ? revive(input, /* @__PURE__ */ new Set(), value, $) : value;
      return $.call({ "": tmp }, "", tmp);
    };
    exports.parse = parse;
    var stringify = (value, replacer, space) => {
      const $ = replacer && typeof replacer === object ? (k, v) => k === "" || -1 < replacer.indexOf(k) ? v : void 0 : replacer || noop;
      const known = /* @__PURE__ */ new Map();
      const input = [];
      const output = [];
      let i = +set(known, input, $.call({ "": value }, "", value));
      let firstRun = !i;
      while (i < input.length) {
        firstRun = true;
        output[i] = $stringify(input[i++], replace, space);
      }
      return "[" + output.join(",") + "]";
      function replace(key, value2) {
        if (firstRun) {
          firstRun = !firstRun;
          return value2;
        }
        const after = $.call(this, key, value2);
        switch (typeof after) {
          case object:
            if (after === null) return after;
          case primitive:
            return known.get(after) || set(known, input, after);
        }
        return after;
      }
    };
    exports.stringify = stringify;
    var toJSON = (value) => $parse(stringify(value));
    exports.toJSON = toJSON;
    var fromJSON = (value) => parse($stringify(value));
    exports.fromJSON = fromJSON;
  }
});

// node_modules/vuex-persist/dist/esm/index.js
var import_deepmerge = __toESM(require_cjs());
var MockStorage;
{
  MockStorage = class {
    get length() {
      return Object.keys(this).length;
    }
    key(index) {
      return Object.keys(this)[index];
    }
    setItem(key, data) {
      this[key] = data.toString();
    }
    getItem(key) {
      return this[key];
    }
    removeItem(key) {
      delete this[key];
    }
    clear() {
      for (let key of Object.keys(this)) {
        delete this[key];
      }
    }
  };
}
var SimplePromiseQueue = class {
  constructor() {
    this._queue = [];
    this._flushing = false;
  }
  enqueue(promise) {
    this._queue.push(promise);
    if (!this._flushing) {
      return this.flushQueue();
    }
    return Promise.resolve();
  }
  flushQueue() {
    this._flushing = true;
    const chain = () => {
      const nextTask = this._queue.shift();
      if (nextTask) {
        return nextTask.then(chain);
      } else {
        this._flushing = false;
      }
    };
    return Promise.resolve(chain());
  }
};
var options = {
  replaceArrays: {
    arrayMerge: (destinationArray, sourceArray, options2) => sourceArray
  },
  concatArrays: {
    arrayMerge: (target, source, options2) => target.concat(...source)
  }
};
function merge(into, from, mergeOption) {
  return (0, import_deepmerge.default)(into, from, options[mergeOption]);
}
var FlattedJSON = JSON;
var VuexPersistence = class {
  /**
   * Create a {@link VuexPersistence} object.
   * Use the <code>plugin</code> function of this class as a
   * Vuex plugin.
   * @param {PersistOptions} options
   */
  constructor(options2) {
    this._mutex = new SimplePromiseQueue();
    this.subscriber = (store) => (handler) => store.subscribe(handler);
    if (typeof options2 === "undefined")
      options2 = {};
    this.key = options2.key != null ? options2.key : "vuex";
    this.subscribed = false;
    this.supportCircular = options2.supportCircular || false;
    if (this.supportCircular) {
      FlattedJSON = require_cjs2();
    }
    this.mergeOption = options2.mergeOption || "replaceArrays";
    let localStorageLitmus = true;
    try {
      window.localStorage.getItem("");
    } catch (err) {
      localStorageLitmus = false;
    }
    if (options2.storage) {
      this.storage = options2.storage;
    } else if (localStorageLitmus) {
      this.storage = window.localStorage;
    } else if (MockStorage) {
      this.storage = new MockStorage();
    } else {
      throw new Error("Neither 'window' is defined, nor 'MockStorage' is available");
    }
    this.reducer = options2.reducer != null ? options2.reducer : options2.modules == null ? (state) => state : (state) => options2.modules.reduce((a, i) => merge(a, { [i]: state[i] }, this.mergeOption), {
      /* start empty accumulator*/
    });
    this.filter = options2.filter || ((mutation) => true);
    this.strictMode = options2.strictMode || false;
    this.RESTORE_MUTATION = function RESTORE_MUTATION(state, savedState) {
      const mergedState = merge(state, savedState || {}, this.mergeOption);
      for (const propertyName of Object.keys(mergedState)) {
        this._vm.$set(state, propertyName, mergedState[propertyName]);
      }
    };
    this.asyncStorage = options2.asyncStorage || false;
    if (this.asyncStorage) {
      this.restoreState = options2.restoreState != null ? options2.restoreState : (key, storage) => storage.getItem(key).then((value) => typeof value === "string" ? this.supportCircular ? FlattedJSON.parse(value || "{}") : JSON.parse(value || "{}") : value || {});
      this.saveState = options2.saveState != null ? options2.saveState : (key, state, storage) => storage.setItem(
        key,
        // Second argument is state _object_ if asyc storage, stringified otherwise
        // do not stringify the state if the storage type is async
        this.asyncStorage ? merge({}, state || {}, this.mergeOption) : this.supportCircular ? FlattedJSON.stringify(state) : JSON.stringify(state)
      );
      this.plugin = (store) => {
        store.restored = this.restoreState(this.key, this.storage).then((savedState) => {
          if (this.strictMode) {
            store.commit("RESTORE_MUTATION", savedState);
          } else {
            store.replaceState(merge(store.state, savedState || {}, this.mergeOption));
          }
          this.subscriber(store)((mutation, state) => {
            if (this.filter(mutation)) {
              this._mutex.enqueue(this.saveState(this.key, this.reducer(state), this.storage));
            }
          });
          this.subscribed = true;
        });
      };
    } else {
      this.restoreState = options2.restoreState != null ? options2.restoreState : (key, storage) => {
        const value = storage.getItem(key);
        if (typeof value === "string") {
          return this.supportCircular ? FlattedJSON.parse(value || "{}") : JSON.parse(value || "{}");
        } else {
          return value || {};
        }
      };
      this.saveState = options2.saveState != null ? options2.saveState : (key, state, storage) => storage.setItem(
        key,
        // Second argument is state _object_ if localforage, stringified otherwise
        this.supportCircular ? FlattedJSON.stringify(state) : JSON.stringify(state)
      );
      this.plugin = (store) => {
        const savedState = this.restoreState(this.key, this.storage);
        if (this.strictMode) {
          store.commit("RESTORE_MUTATION", savedState);
        } else {
          store.replaceState(merge(store.state, savedState || {}, this.mergeOption));
        }
        this.subscriber(store)((mutation, state) => {
          if (this.filter(mutation)) {
            this.saveState(this.key, this.reducer(state), this.storage);
          }
        });
        this.subscribed = true;
      };
    }
  }
};
var esm_default = VuexPersistence;
export {
  MockStorage,
  VuexPersistence,
  esm_default as default
};
//# sourceMappingURL=vuex-persist.js.map
