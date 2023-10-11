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
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const TOCList = () => {
  const headingElements = document.querySelectorAll('#primary .wp-block-heading');

  // Check if headings have ids. If not, set the id
  headingElements.forEach(heading => {
    if (!heading.hasAttribute('id')) {
      let id = heading.innerText.trim().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
      heading.setAttribute('id', id);
    }
  });

  // Create array of heading objects
  const headings = Array.from(headingElements).map(elem => ({
    id: elem.id,
    text: elem.innerText,
    level: Number(elem.nodeName.charAt(1)),
    children: []
  }));
  const buildNestedHeadings = headings => {
    headings = headings.reverse();
    let nestedHeadings = [];
    headings.forEach((heading, i) => {
      // new sections will always begin with an h2, so check if level == 2
      if (heading.level == 2) {
        nestedHeadings.push(heading);
      } else {
        for (let j = i; j < headings.length; j++) {
          if (headings[j].level < heading.level) {
            // parent of heading was found, so push to its children
            headings[j].children.unshift(heading);
            break;
          }
        }
      }
    });
    return nestedHeadings.reverse();
  };
  const mapHeadings = nestedHeadings => {
    return nestedHeadings.map(heading => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, heading.children.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: heading.id
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#" + heading.id
    }, heading.text), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, mapHeadings(heading.children))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#" + heading.id
    }, heading.text))));
  };
  const nestedHeadings = buildNestedHeadings(headings);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, mapHeadings(nestedHeadings));
};

// Render the list items
const toc = document.getElementById('toc');
ReactDOM.render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TOCList, null), toc);

// Bootstrap modal manipulation requires jQuery, so we handle anchor links clicks with jQuery

jQuery(document).ready(function ($) {
  // Handle anchor link clicks
  $('#toc a').click(function () {
    let id = $(this).attr('href');
    $('#toc-modal').modal('hide');
    $('html, body').animate({
      scrollTop: $(id).offset().top - 20
    }, 500);
  });

  //Remove focus on modal trigger button
  $('#toc-modal').on('shown.bs.modal', function (e) {
    $('#toc-btn').one('focus', function (e) {
      $(this).blur();
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map