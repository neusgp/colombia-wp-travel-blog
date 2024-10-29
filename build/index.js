/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Search.js":
/*!***********************!*\
  !*** ./src/Search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./src/lib/index.js");

const searchPostsField = document.querySelector(".search-posts");
const searchFoodField = document.querySelector(".search-food");
const resultsSection = document.querySelector(".search-section");
const allPostsSection = document.querySelector(".all-posts");
const inputField = searchPostsField || searchFoodField;
const location = searchPostsField ? "posts" : "food";
if (inputField) {
  (0,_lib__WEBPACK_IMPORTED_MODULE_0__.handleShowSearchSection)(inputField, resultsSection, allPostsSection);
  (0,_lib__WEBPACK_IMPORTED_MODULE_0__.handleSearchResults)(inputField, resultsSection, location);
}

/***/ }),

/***/ "./src/api/fetchPosts.js":
/*!*******************************!*\
  !*** ./src/api/fetchPosts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchPosts: () => (/* binding */ fetchPosts)
/* harmony export */ });
const fetchPosts = async (query, location) => {
  const url = `http://learningwp.local/wp-json/wp/v2/${location}?search=${query}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err.message);
  }
};

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchPosts: () => (/* reexport safe */ _fetchPosts__WEBPACK_IMPORTED_MODULE_0__.fetchPosts)
/* harmony export */ });
/* harmony import */ var _fetchPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchPosts */ "./src/api/fetchPosts.js");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");
/* harmony import */ var _Search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.js */ "./src/Search.js");


console.log("loading js 🚀");

/***/ }),

/***/ "./src/lib/handleSearchResults.js":
/*!****************************************!*\
  !*** ./src/lib/handleSearchResults.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleSearchResults: () => (/* binding */ handleSearchResults)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/api/index.js");

const getPostPreviewHTML = (title, excerpt, link, the_author) => `
 <li>        
                  <div id='post-preview' class='search-post-preview'>
                        <div id='post-data'>
                            <h4>${title}</h4>
                            ${excerpt}<a href="${link}">Continue reading</a>
                            <div class='post-details'>
                                <p>Posted by: <span class='details-highlight'>${the_author}</span></p>
                            </div>
                        </div>
                    </div>
                    </li>`;
const handleSearchResults = (inputField, resultsSection, location) => {
  let timerId;
  inputField.addEventListener("input", e => {
    const value = e.target.value;
    if (!value) {
      clearTimeout(timerId);
      return resultsSection.innerHTML = "";
    }
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(async () => {
      const result = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchPosts)(value, location);
      if (result.length === 0) {
        resultsSection.innerHTML = `<p>Apologies, there are no posts related to your search</p>`;
        return;
      }
      if (result) {
        resultsSection.innerHTML = "";
        console.log(result);
        result.forEach(({
          title,
          excerpt,
          link,
          the_author
        }) => {
          return resultsSection.innerHTML += getPostPreviewHTML(title.rendered, excerpt.rendered, link, the_author);
        });
      }
    }, 600);
  });
};

/***/ }),

/***/ "./src/lib/handleShowSearchSection.js":
/*!********************************************!*\
  !*** ./src/lib/handleShowSearchSection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleShowSearchSection: () => (/* binding */ handleShowSearchSection)
/* harmony export */ });
const handleShowSearchSection = (inputField, resultsSection, allPostsSection) => {
  inputField.addEventListener("input", e => {
    const value = e.target.value;
    const isSearchActive = resultsSection.classList.contains("show-search-section");
    if (!value && isSearchActive) {
      resultsSection.classList.remove("show-search-section");
      resultsSection.classList.add("search-section");
      allPostsSection.classList.remove("hide-posts-section");
    }
    if (value && !isSearchActive) {
      console.log("adding class");
      resultsSection.classList.add("show-search-section");
      resultsSection.classList.remove("search-section");
      allPostsSection.classList.add("hide-posts-section");
    }
  });
};

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleSearchResults: () => (/* reexport safe */ _handleSearchResults__WEBPACK_IMPORTED_MODULE_0__.handleSearchResults),
/* harmony export */   handleShowSearchSection: () => (/* reexport safe */ _handleShowSearchSection__WEBPACK_IMPORTED_MODULE_1__.handleShowSearchSection)
/* harmony export */ });
/* harmony import */ var _handleSearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleSearchResults */ "./src/lib/handleSearchResults.js");
/* harmony import */ var _handleShowSearchSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleShowSearchSection */ "./src/lib/handleShowSearchSection.js");



/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
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
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklearning_wp_theme"] = self["webpackChunklearning_wp_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map