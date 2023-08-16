/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/view-copy.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const tocList = document.getElementById('test-toc');
;
ReactDOM.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Develop. Preview. Ship. \uD83D\uDE80"), tocList);
jQuery(document).ready(function ($) {
  // let headings = [];
  // $('#primary .wp-block-heading').each(function(index) {
  // 	let id = $(this).attr('id');
  // 	let text = $(this).text().trim();
  // 	let level = parseInt(this.tagName.substring(1));
  // 	let secNumber = '1';

  // 	if(id == undefined) {
  // 		id = text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '')
  // 		$(this).attr('id', id);
  // 	}

  // 	if (index > 0) {
  // 		let prevLevel = headings[index-1].level;
  // 		let prevSecNumber = headings[index-1].secNumber;
  // 		let prevSecNumberArray = [];

  // 		if (prevSecNumber.includes('.')) {
  // 			prevSecNumberArray = prevSecNumber.split('.').map(Number);
  // 		} else {
  // 			prevSecNumberArray.push(parseInt(prevSecNumber));
  // 		}

  // 		let curSecNumberArray = prevSecNumberArray.slice(0, -1);

  // 		if (level == prevLevel) {
  // 		//curent heading is a sibling
  // 			curSecNumberArray.push(prevSecNumberArray[prevSecNumberArray.length - 1] + 1);
  // 			console.log(curSecNumberArray);
  // 			// console.log((parseInt(prevSecNumberArray[prevSecNumberArray.length - 1]) + 1).toString());
  // 			// console.log(text + ': ' + curSecNumberArray[curSecNumberArray.length - 1]);
  // 			// curSecNumberArray[curSecNumberArray.length - 1] = (parseInt(prevSecNumberArray[prevSecNumberArray.length - 1]) + 1).toString();
  // 			// console.log(curSecNumberArray);
  // 			// secNumber = curSecNumberArray.join('.');
  // 		} else if (level > prevLevel) {
  // 		// current heading is a child
  // 			curSecNumberArray.push(1);
  // 		} else if (level < prevLevel) {
  // 			// current heading starts a new section or subsection
  // 			let diff = prevLevel - level;
  // 		}

  // 		secNumber = curSecNumberArray.join('.');
  // 	}

  // 	headings.push({
  // 		id: id,
  // 		text: text,
  // 		level: level,
  // 		secNumber: secNumber
  // 	});
  // });

  let currentDepth = 2;
  let list = '';
  $('#primary .wp-block-heading').each(function () {
    let id = $(this).attr('id');
    let text = $(this).text().trim();
    if (id == undefined) {
      id = text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
      $(this).attr('id', id);
    }
    let li = '<li><a href="#' + id + '">' + text + '</a></li>';
    let depth = parseInt(this.tagName.substring(1));
    if (depth > currentDepth) {
      // going into nested headings
      list = list.slice(0, -5);
      list += '<ol>' + li;
    } else if (depth < currentDepth) {
      // coming out of nested headings
      let diff = currentDepth - depth;
      for (let i = 0; i < diff; i++) {
        list += '</ol></li>';
      }
      list += li;
    } else {
      list += li;
    }
    currentDepth = depth;
  });
  $('#toc-list').append(list);
  $('#toc-list li');
  $('#toc-list a').click(function () {
    let id = $(this).attr('href');
    $('#toc-modal').modal('hide');
    $('#toc-btn').blur();
    $('html, body').animate({
      scrollTop: $(id).offset().top - 20
    }, 500);
  });
  $('#toc-modal').on('shown.bs.modal', function (e) {
    $('#toc-btn').one('focus', function (e) {
      $(this).blur();
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view-copy.js.map