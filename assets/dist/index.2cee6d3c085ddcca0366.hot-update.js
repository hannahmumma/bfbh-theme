"use strict";
self["webpackHotUpdatebfbh_theme"]("index",{

/***/ "./assets/dev/js/index.js":
/*!********************************!*\
  !*** ./assets/dev/js/index.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./assets/dev/css/index.css");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ "./assets/dev/js/assets.js");
/* harmony import */ var _modules_BuildSvgSprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/BuildSvgSprite */ "./assets/dev/js/modules/BuildSvgSprite.js");
/* harmony import */ var _modules_MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/MainMenu */ "./assets/dev/js/modules/MainMenu.js");
/* harmony import */ var _modules_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Modal */ "./assets/dev/js/modules/Modal.js");







if (true) {
  module.hot.accept();
} // Examples: 
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"


var spinWords = function spinWords(phrase) {
  var splitPhrase = phrase.split(' ');
  console.log(splitPhrase);
  splitPhrase.forEach(function (item) {
    console.log(item);

    if (item.length >= 5) {
      var newItem = reverseString(item);
      console.log(newItem);
    }
  });
};

var reverseString = function reverseString(str) {
  return str.split('').reverse().join('');
};

spinWords('hello blah');

var globals = function globals() {
  return [new _modules_BuildSvgSprite__WEBPACK_IMPORTED_MODULE_3__["default"](), new _modules_MainMenu__WEBPACK_IMPORTED_MODULE_4__["default"](), new _modules_Modal__WEBPACK_IMPORTED_MODULE_5__["default"]()];
};

var components = function components() {
  var scripts = {
    Accordion: "[data-accordion]",
    Slider: "[data-slider]",
    StickyHeader: ".js-header"
  };
  Object.entries(scripts).forEach(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (document.querySelector("".concat(value))) {
      __webpack_require__("./assets/dev/js/modules lazy recursive ^\\.\\/.*$")("./".concat(key)).then(function (module) {
        var Key = module["default"];
        return new Key();
      });
    }
  });
};

var init = function init() {
  globals();
  components();
};

window.addEventListener("load", init);

/***/ }),

/***/ "./assets/dev/css/index.css":
/*!**********************************!*\
  !*** ./assets/dev/css/index.css ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1642613585015
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("34a3ccc567505d39aed0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMmNlZTZkM2MwODVkZGNjYTAzNjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUcsSUFBSixFQUFnQjtBQUNmQSxFQUFBQSxpQkFBQTtBQUNBLEVBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUU3QixNQUFNQyxXQUFXLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhLEdBQWIsQ0FBcEI7QUFFQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7QUFFQUEsRUFBQUEsV0FBVyxDQUFDSSxPQUFaLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUM3QkgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLElBQVo7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDQyxNQUFMLElBQWUsQ0FBbkIsRUFBc0I7QUFDckIsVUFBTUMsT0FBTyxHQUFHQyxhQUFhLENBQUNILElBQUQsQ0FBN0I7QUFFQUgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlJLE9BQVo7QUFDQTtBQUNELEdBUEQ7QUFVQSxDQWhCRDs7QUFrQkEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxHQUFELEVBQVM7QUFDOUIsU0FBT0EsR0FBRyxDQUFDUixLQUFKLENBQVUsRUFBVixFQUFjUyxPQUFkLEdBQXdCQyxJQUF4QixDQUE2QixFQUE3QixDQUFQO0FBQ0EsQ0FGRDs7QUFJQWIsU0FBUyxDQUFDLFlBQUQsQ0FBVDs7QUFHQSxJQUFNYyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQU0sQ0FDckIsSUFBSXBCLCtEQUFKLEVBRHFCLEVBRXJCLElBQUlDLHlEQUFKLEVBRnFCLEVBR3JCLElBQUlDLHNEQUFKLEVBSHFCLENBQU47QUFBQSxDQUFoQjs7QUFNQSxJQUFNbUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QixNQUFNQyxPQUFPLEdBQUc7QUFDZkMsSUFBQUEsU0FBUyxFQUFFLGtCQURJO0FBRWZDLElBQUFBLE1BQU0sRUFBRSxlQUZPO0FBR2ZDLElBQUFBLFlBQVksRUFBRTtBQUhDLEdBQWhCO0FBTUFDLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTCxPQUFmLEVBQXdCVixPQUF4QixDQUFnQyxnQkFBa0I7QUFBQTtBQUFBLFFBQWhCZ0IsR0FBZ0I7QUFBQSxRQUFYQyxLQUFXOztBQUNqRCxRQUFJQyxRQUFRLENBQUNDLGFBQVQsV0FBMEJGLEtBQTFCLEVBQUosRUFBd0M7QUFDdkMsK0VBQU8sWUFBYUQsR0FBcEIsR0FBMkJJLElBQTNCLENBQWdDLFVBQUM3QixNQUFELEVBQVk7QUFDM0MsWUFBTThCLEdBQUcsR0FBRzlCLE1BQU0sV0FBbEI7QUFDQSxlQUFPLElBQUk4QixHQUFKLEVBQVA7QUFDQSxPQUhEO0FBSUE7QUFDRCxHQVBEO0FBUUEsQ0FmRDs7QUFpQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQmQsRUFBQUEsT0FBTztBQUNQQyxFQUFBQSxVQUFVO0FBQ1YsQ0FIRDs7QUFLQWMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQ0YsSUFBaEM7Ozs7Ozs7Ozs7O0FDckVBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBMkcsY0FBYyxlQUFlO0FBQ3RLLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL2Fzc2V0cy9kZXYvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmZiaC10aGVtZS8uL2Fzc2V0cy9kZXYvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9iZmJoLXRoZW1lL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9jc3MvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL2Fzc2V0c1wiO1xuXG5pbXBvcnQgQnVpbGRTdmdTcHJpdGUgZnJvbSBcIi4vbW9kdWxlcy9CdWlsZFN2Z1Nwcml0ZVwiO1xuaW1wb3J0IE1haW5NZW51IGZyb20gXCIuL21vZHVsZXMvTWFpbk1lbnVcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL01vZGFsXCI7XG5cbmlmIChtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cbi8vIEV4YW1wbGVzOiBcbi8vIHNwaW5Xb3JkcyggXCJIZXkgZmVsbG93IHdhcnJpb3JzXCIgKSA9PiByZXR1cm5zIFwiSGV5IHdvbGxlZiBzcm9pcnJhd1wiIFxuLy8gc3BpbldvcmRzKCBcIlRoaXMgaXMgYSB0ZXN0XCIpID0+IHJldHVybnMgXCJUaGlzIGlzIGEgdGVzdFwiIFxuLy8gc3BpbldvcmRzKCBcIlRoaXMgaXMgYW5vdGhlciB0ZXN0XCIgKT0+IHJldHVybnMgXCJUaGlzIGlzIHJlaHRvbmEgdGVzdFwiXG5cbmNvbnN0IHNwaW5Xb3JkcyA9IChwaHJhc2UpID0+IHtcblxuXHRjb25zdCBzcGxpdFBocmFzZSA9IHBocmFzZS5zcGxpdCgnICcpO1xuXG5cdGNvbnNvbGUubG9nKHNwbGl0UGhyYXNlKTtcblxuXHRzcGxpdFBocmFzZS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coaXRlbSlcblx0XHRpZiAoaXRlbS5sZW5ndGggPj0gNSkge1xuXHRcdFx0Y29uc3QgbmV3SXRlbSA9IHJldmVyc2VTdHJpbmcoaXRlbSk7XG5cblx0XHRcdGNvbnNvbGUubG9nKG5ld0l0ZW0pXG5cdFx0fVxuXHR9KVxuXG5cbn1cblxuY29uc3QgcmV2ZXJzZVN0cmluZyA9IChzdHIpID0+IHtcblx0cmV0dXJuIHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xufVxuXG5zcGluV29yZHMoJ2hlbGxvIGJsYWgnKTtcblxuXG5jb25zdCBnbG9iYWxzID0gKCkgPT4gW1xuXHRuZXcgQnVpbGRTdmdTcHJpdGUoKSwgXG5cdG5ldyBNYWluTWVudSgpLCBcblx0bmV3IE1vZGFsKClcbl07XG5cbmNvbnN0IGNvbXBvbmVudHMgPSAoKSA9PiB7XG5cdGNvbnN0IHNjcmlwdHMgPSB7XG5cdFx0QWNjb3JkaW9uOiBcIltkYXRhLWFjY29yZGlvbl1cIixcblx0XHRTbGlkZXI6IFwiW2RhdGEtc2xpZGVyXVwiLFxuXHRcdFN0aWNreUhlYWRlcjogXCIuanMtaGVhZGVyXCIsXG5cdH07XG5cblx0T2JqZWN0LmVudHJpZXMoc2NyaXB0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dmFsdWV9YCkpIHtcblx0XHRcdGltcG9ydChgLi9tb2R1bGVzLyR7a2V5fWApLnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBLZXkgPSBtb2R1bGUuZGVmYXVsdDtcblx0XHRcdFx0cmV0dXJuIG5ldyBLZXkoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXHRnbG9iYWxzKCk7XG5cdGNvbXBvbmVudHMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDI2MTM1ODUwMTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL2hhbm5haG11bW1hL1NpdGVzL2JmYmgtdGhlbWUvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzRhM2NjYzU2NzUwNWQzOWFlZDBcIikiXSwibmFtZXMiOlsiQnVpbGRTdmdTcHJpdGUiLCJNYWluTWVudSIsIk1vZGFsIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0Iiwic3BpbldvcmRzIiwicGhyYXNlIiwic3BsaXRQaHJhc2UiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaXRlbSIsImxlbmd0aCIsIm5ld0l0ZW0iLCJyZXZlcnNlU3RyaW5nIiwic3RyIiwicmV2ZXJzZSIsImpvaW4iLCJnbG9iYWxzIiwiY29tcG9uZW50cyIsInNjcmlwdHMiLCJBY2NvcmRpb24iLCJTbGlkZXIiLCJTdGlja3lIZWFkZXIiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiS2V5IiwiaW5pdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9