/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/angular/angular.js":
/*!********************************!*\
  !*** ./src/angular/angular.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _observables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observables */ "./src/observables.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch */ "./src/fetch.js");



function buttonStyles(button) {
  button.style.position = "fixed";
  button.style.bottom = "80px";
  button.style.right = "100px";
}

const bootstrap = __webpack_require__.e(/*! import() */ "webpack_container_remote_calendar_Bootstrap").then(__webpack_require__.t.bind(__webpack_require__, /*! calendar/Bootstrap */ "webpack/container/remote/calendar/Bootstrap", 23));

const angular = () => bootstrap.then(async res => {
  const {
    calendar,
    button
  } = res.component();
  calendar.srcData = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.calendarData)();
  _observables__WEBPACK_IMPORTED_MODULE_0__.observables.getApi$.subscribe(async () => {
    calendar.srcData = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.calendarData)();
  });
  calendar.currentDate = new Date();
  _observables__WEBPACK_IMPORTED_MODULE_0__.observables.calendar$.subscribe(date => {
    calendar.currentDate = date;
  });
  buttonStyles(button);
  document.getElementById("rootAngular").append(calendar, button);
}).catch(err => console.log(err.message));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (angular);

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendarData": () => (/* binding */ calendarData),
/* harmony export */   "deleteActivity": () => (/* binding */ deleteActivity),
/* harmony export */   "generalFetch": () => (/* binding */ generalFetch),
/* harmony export */   "modalData": () => (/* binding */ modalData)
/* harmony export */ });
/* harmony import */ var _observables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observables */ "./src/observables.js");


async function generalFetch({
  path,
  method,
  body
}) {
  const res = await fetch("http://localhost:6500/" + path, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!body) delete res.body;
  return res.json();
}
const calendarData = async () => {
  const fData = await generalFetch({
    path: "nova-api/activities",
    method: "GET"
  });
  return fData;
};
const modalData = async () => {
  const fData = await generalFetch({
    path: "nova-api/projects",
    method: "GET"
  });
  return fData;
};
const deleteActivity = () => generalFetch({
  path: `nova-api/activities/${_observables__WEBPACK_IMPORTED_MODULE_0__.activitiesOperations.activityToDelete._id}`,
  method: "DELETE"
}).then(res => {
  _observables__WEBPACK_IMPORTED_MODULE_0__.observables.snackbar$.publish({
    message: res.message,
    type: "default",
    success: true
  });
  _observables__WEBPACK_IMPORTED_MODULE_0__.observables.getApi$.publish("GET");
}).catch(() => {
  _observables__WEBPACK_IMPORTED_MODULE_0__.observables.snackbar$.publish({
    message: "Something went wrong, please try again",
    type: "default",
    success: false
  });
});

/***/ }),

/***/ "./src/observables.js":
/*!****************************!*\
  !*** ./src/observables.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activitiesOperations": () => (/* binding */ activitiesOperations),
/* harmony export */   "observables": () => (/* binding */ observables),
/* harmony export */   "publications": () => (/* binding */ publications)
/* harmony export */ });
/* harmony import */ var windowed_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! windowed-observable */ "./node_modules/windowed-observable/dist/windowed-observable.esm.js");

const observables = {
  calendar$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("calendar-date"),
  snackbar$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("snackbar-observable"),
  getApi$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("api-observable"),
  deleteApi$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("delete-observable"),
  activityToDelete$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("activity-to-delete"),
  createApi$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("create-observable"),
  activityToCreate$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("activity-to-create"),
  updateApi$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("update-observable"),
  activityToUpdate$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("activity-to-update"),
  cloneApi$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("clone-observable"),
  activityToClone$: new windowed_observable__WEBPACK_IMPORTED_MODULE_0__.Observable("activity-to-clone")
};
const activitiesOperations = {
  activityToDelete: {},
  activityToUpdate: {},
  activityToClone: {},
  activityToCreate: {}
};
const publications = {
  snackbar: object => observabes.snackbar$.publish(object),
  getApi: () => observabes.getApi$.publish('GET')
};

/***/ }),

/***/ "./src/react/react.js":
/*!****************************!*\
  !*** ./src/react/react.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fetch */ "./src/fetch.js");

const renderer = __webpack_require__.e(/*! import() */ "webpack_container_remote_modal_Renderer").then(__webpack_require__.t.bind(__webpack_require__, /*! modal/Renderer */ "webpack/container/remote/modal/Renderer", 23));
const target = document.getElementById("rootReact");

const react = () => renderer.then(async res => {
  res.renderInVanilla(target, await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.modalData)(), _fetch__WEBPACK_IMPORTED_MODULE_0__.generalFetch);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react);

/***/ }),

/***/ "./src/vanilla/vanilla.js":
/*!********************************!*\
  !*** ./src/vanilla/vanilla.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const vanillaHeader = __webpack_require__.e(/*! import() */ "webpack_container_remote_button_Button").then(__webpack_require__.t.bind(__webpack_require__, /*! button/Button */ "webpack/container/remote/button/Button", 23));

const vanilla = () => vanillaHeader.then(res => {
  const {
    header
  } = res.headerF();
  document.getElementById("rootVanilla").append(header);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vanilla);

/***/ }),

/***/ "./node_modules/windowed-observable/dist/windowed-observable.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/windowed-observable/dist/windowed-observable.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var EVENTS = '__events__';
var SHARED = '__shared__';
var OBSERVERS = '__observers__';
var Observable = /*#__PURE__*/function () {
  function Observable(namespace) {
    this.dispatch = this.publish;
    Observable.initialize();
    this.namespace = namespace;
  } // istanbul ignore next


  Observable.initialize = function initialize() {
    if (!window[SHARED]) {
      var _window$SHARED;

      window[SHARED] = (_window$SHARED = {}, _window$SHARED[EVENTS] = {}, _window$SHARED[OBSERVERS] = {}, _window$SHARED);
    }

    if (!window[SHARED][EVENTS]) {
      window[SHARED][EVENTS] = {};
    }

    if (!window[SHARED][OBSERVERS]) {
      window[SHARED][OBSERVERS] = {};
    }
  };

  var _proto = Observable.prototype;

  _proto.getEvents = function getEvents() {
    return this.events;
  };

  _proto.getLastEvent = function getLastEvent() {
    var events = this.events;

    if (!events.length) {
      return;
    }

    var lastEvent = events[events.length - 1];
    return lastEvent;
  };

  _proto.publish = function publish(data) {
    var events = this.events;
    var lastEvent = this.getLastEvent();
    this.observers.forEach(function (observer) {
      return observer(data, {
        events: events,
        lastEvent: lastEvent
      });
    });
    this.events.push(data);
  };

  _proto.subscribe = function subscribe(observer) {
    this.observers = this.observers.concat(observer);
  };

  _proto.unsubscribe = function unsubscribe(observer) {
    this.observers = this.observers.filter(function (obs) {
      return obs !== observer;
    });
  };

  _proto.clear = function clear() {
    var events = this.events;
    var lastEvent = this.getLastEvent();
    this.observers.forEach(function (observer) {
      return observer(undefined, {
        events: events,
        lastEvent: lastEvent
      });
    });
    this.events = [];
    this.observers = [];
  };

  _createClass(Observable, [{
    key: "namespace",
    set: function set(namespace) {
      this._namespace = namespace; // istanbul ignore next

      if (!this.events) this.events = []; // istanbul ignore next

      if (!this.observers) this.observers = [];
    }
  }, {
    key: "events",
    get: function get() {
      return window[SHARED][EVENTS][this._namespace];
    },
    set: function set(newEvents) {
      window[SHARED][EVENTS][this._namespace] = newEvents;
    }
  }, {
    key: "observers",
    get: function get() {
      return window[SHARED][OBSERVERS][this._namespace];
    },
    set: function set(newObservers) {
      window[SHARED][OBSERVERS][this._namespace] = newObservers;
    }
  }]);

  return Observable;
}();


//# sourceMappingURL=windowed-observable.esm.js.map


/***/ }),

/***/ "webpack/container/reference/button":
/*!**************************************************************!*\
  !*** external "button@http://localhost:4500/remoteEntry.js" ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __webpack_error__ = new Error();
module.exports = new Promise((resolve, reject) => {
	if(typeof button !== "undefined") return resolve();
	__webpack_require__.l("http://localhost:4500/remoteEntry.js", (event) => {
		if(typeof button !== "undefined") return resolve();
		var errorType = event && (event.type === 'load' ? 'missing' : event.type);
		var realSrc = event && event.target && event.target.src;
		__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		__webpack_error__.name = 'ScriptExternalLoadError';
		__webpack_error__.type = errorType;
		__webpack_error__.request = realSrc;
		reject(__webpack_error__);
	}, "button");
}).then(() => (button));

/***/ }),

/***/ "webpack/container/reference/calendar":
/*!****************************************************************!*\
  !*** external "calendar@http://localhost:5000/remoteEntry.js" ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __webpack_error__ = new Error();
module.exports = new Promise((resolve, reject) => {
	if(typeof calendar !== "undefined") return resolve();
	__webpack_require__.l("http://localhost:5000/remoteEntry.js", (event) => {
		if(typeof calendar !== "undefined") return resolve();
		var errorType = event && (event.type === 'load' ? 'missing' : event.type);
		var realSrc = event && event.target && event.target.src;
		__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		__webpack_error__.name = 'ScriptExternalLoadError';
		__webpack_error__.type = errorType;
		__webpack_error__.request = realSrc;
		reject(__webpack_error__);
	}, "calendar");
}).then(() => (calendar));

/***/ }),

/***/ "webpack/container/reference/modal":
/*!*************************************************************!*\
  !*** external "modal@http://localhost:6001/remoteEntry.js" ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __webpack_error__ = new Error();
module.exports = new Promise((resolve, reject) => {
	if(typeof modal !== "undefined") return resolve();
	__webpack_require__.l("http://localhost:6001/remoteEntry.js", (event) => {
		if(typeof modal !== "undefined") return resolve();
		var errorType = event && (event.type === 'load' ? 'missing' : event.type);
		var realSrc = event && event.target && event.target.src;
		__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		__webpack_error__.name = 'ScriptExternalLoadError';
		__webpack_error__.type = errorType;
		__webpack_error__.request = realSrc;
		reject(__webpack_error__);
	}, "modal");
}).then(() => (modal));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "container:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {
/******/ 			"webpack_container_remote_modal_Renderer": [
/******/ 				"webpack/container/remote/modal/Renderer"
/******/ 			],
/******/ 			"webpack_container_remote_calendar_Bootstrap": [
/******/ 				"webpack/container/remote/calendar/Bootstrap"
/******/ 			],
/******/ 			"webpack_container_remote_button_Button": [
/******/ 				"webpack/container/remote/button/Button"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/modal/Renderer": [
/******/ 				"default",
/******/ 				"./Renderer",
/******/ 				"webpack/container/reference/modal"
/******/ 			],
/******/ 			"webpack/container/remote/calendar/Bootstrap": [
/******/ 				"default",
/******/ 				"./Bootstrap",
/******/ 				"webpack/container/reference/calendar"
/******/ 			],
/******/ 			"webpack/container/remote/button/Button": [
/******/ 				"default",
/******/ 				"./Button",
/******/ 				"webpack/container/reference/button"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = "container";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					initExternal("webpack/container/reference/modal");
/******/ 					initExternal("webpack/container/reference/calendar");
/******/ 					initExternal("webpack/container/reference/button");
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(/^(main|src_index_css)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react/react */ "./src/react/react.js");
/* harmony import */ var _angular_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular/angular */ "./src/angular/angular.js");
/* harmony import */ var _vanilla_vanilla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vanilla/vanilla */ "./src/vanilla/vanilla.js");
/* harmony import */ var _observables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observables */ "./src/observables.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
__webpack_require__.e(/*! import() */ "src_index_css").then(__webpack_require__.bind(__webpack_require__, /*! ./index.css */ "./src/index.css"));





(0,_vanilla_vanilla__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_angular_angular__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_react_react__WEBPACK_IMPORTED_MODULE_0__["default"])();
_observables__WEBPACK_IMPORTED_MODULE_3__.observables.activityToDelete$.subscribe(res => {
  _observables__WEBPACK_IMPORTED_MODULE_3__.activitiesOperations.activityToDelete = res;
});
_observables__WEBPACK_IMPORTED_MODULE_3__.observables.deleteApi$.subscribe(() => (0,_fetch__WEBPACK_IMPORTED_MODULE_4__.deleteActivity)());
})();

/******/ })()
;
//# sourceMappingURL=main.js.map