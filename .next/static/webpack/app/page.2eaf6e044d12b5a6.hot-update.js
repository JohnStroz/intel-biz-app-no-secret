"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/StoryDisplay.tsx":
/*!*****************************************!*\
  !*** ./src/components/StoryDisplay.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StoryDisplay; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// src/components/StoryDisplay.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction StoryDisplay(param) {\n    let { result } = param;\n    _s();\n    const [formattedResult, setFormattedResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (result && result.result) {\n            setFormattedResult(result.result);\n        }\n    }, [\n        result\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"glass-morphism p-8 rounded-xl shadow-xl backdrop-blur-lg bg-white/30\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold text-gray-800 mb-4\",\n                children: \"Generated Business Plan\"\n            }, void 0, false, {\n                fileName: \"/Users/johnnybase/Documents/GitHub/ai-tutor-api-example/src/components/StoryDisplay.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                className: \"whitespace-pre-wrap text-gray-700\",\n                children: formattedResult\n            }, void 0, false, {\n                fileName: \"/Users/johnnybase/Documents/GitHub/ai-tutor-api-example/src/components/StoryDisplay.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johnnybase/Documents/GitHub/ai-tutor-api-example/src/components/StoryDisplay.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(StoryDisplay, \"qDVe2SEP4DSqhkTGS4UFTAuxBFM=\");\n_c = StoryDisplay;\nvar _c;\n$RefreshReg$(_c, \"StoryDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N0b3J5RGlzcGxheS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGtDQUFrQzs7O0FBRVU7QUFTN0IsU0FBU0UsYUFBYSxLQUE2QjtRQUE3QixFQUFFQyxNQUFNLEVBQXFCLEdBQTdCOztJQUNqQyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXZEQyxnREFBU0EsQ0FBQztRQUNOLElBQUlFLFVBQVVBLE9BQU9BLE1BQU0sRUFBRTtZQUN6QkUsbUJBQW1CRixPQUFPQSxNQUFNO1FBQ3BDO0lBQ0osR0FBRztRQUFDQTtLQUFPO0lBRVgscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBd0M7Ozs7OzswQkFDdEQsOERBQUNFO2dCQUFJRixXQUFVOzBCQUFxQ0g7Ozs7Ozs7Ozs7OztBQUdoRTtHQWZ3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3RvcnlEaXNwbGF5LnRzeD8yYjA0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL1N0b3J5RGlzcGxheS50c3hcclxuXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgU3RvcnlEaXNwbGF5UHJvcHMge1xyXG4gIHJlc3VsdDoge1xyXG4gICAgcmVzdWx0Pzogc3RyaW5nO1xyXG4gICAgc3VjY2Vzcz86IGJvb2xlYW47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcnlEaXNwbGF5KHsgcmVzdWx0IH06IFN0b3J5RGlzcGxheVByb3BzKSB7XHJcbiAgICBjb25zdCBbZm9ybWF0dGVkUmVzdWx0LCBzZXRGb3JtYXR0ZWRSZXN1bHRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHNldEZvcm1hdHRlZFJlc3VsdChyZXN1bHQucmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVzdWx0XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLW1vcnBoaXNtIHAtOCByb3VuZGVkLXhsIHNoYWRvdy14bCBiYWNrZHJvcC1ibHVyLWxnIGJnLXdoaXRlLzMwXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBtYi00XCI+R2VuZXJhdGVkIEJ1c2luZXNzIFBsYW48L2gyPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXAgdGV4dC1ncmF5LTcwMFwiPntmb3JtYXR0ZWRSZXN1bHR9PC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN0b3J5RGlzcGxheSIsInJlc3VsdCIsImZvcm1hdHRlZFJlc3VsdCIsInNldEZvcm1hdHRlZFJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicHJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/StoryDisplay.tsx\n"));

/***/ })

});