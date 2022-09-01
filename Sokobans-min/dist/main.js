/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst root = document.querySelector('html')\r\n\r\n/*-------------------------------------- wrapper*/\r\nconst wrapper = document.querySelector('.wrapper')\r\nwrapper.style.setProperty('height', `${document.documentElement.clientHeight}px`)\r\nwrapper.style.setProperty('width', `${document.documentElement.clientWidth}px`)\r\n\r\n/*-------------------------------------- header*/\r\nconst menu_item = document.querySelectorAll('.menu__item')\r\nfor (let i=0; i<menu_item.length; i++){\r\n   menu_item[i].addEventListener('mouseover', function(){\r\n      menu_item[i].classList.add('menu__item-hover')\r\n   })\r\n   menu_item[i].addEventListener('mouseout', function(){\r\n      menu_item[i].classList.remove('menu__item-hover')\r\n   })\r\n}\r\n/*-------------------------------------- main*/\r\nconst settings__item = document.querySelectorAll('.settings__item')\r\nfor (let i=0; i<settings__item.length; i++){\r\n   settings__item[i].addEventListener('mouseover', function(){\r\n      settings__item[i].classList.add('menu__item-hover')\r\n   })\r\n   settings__item[i].addEventListener('mouseout', function(){\r\n      settings__item[i].classList.remove('menu__item-hover')\r\n   })\r\n}\r\n\r\n\r\n\r\n/*-------------------------------------- THREE*/\r\nconst information = document.querySelector('.information')\r\n\r\nconst light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 50)\r\n\r\n// const camera = new THREE.PerspectiveCamera(75, information.getBoundingClientRect().width / information.getBoundingClientRect().height, 0.1, 1000)\r\nconst radiusCanvas = 5\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera( -radiusCanvas, radiusCanvas, radiusCanvas, -radiusCanvas, 1, 1000 );\r\ncamera.position.z = 1000\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene()\r\n// scene.background = new THREE.Color(getComputedStyle(root).getPropertyValue('--color-menu'))\r\nscene.background = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load('../kenney_sokobanpack/bi.png', function(texture){\r\n   const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({map:texture})\r\n   const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(radiusCanvas*2,radiusCanvas*2)\r\n   const m = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n})\r\n\r\nscene.add(light)\r\n\r\nconst loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader()\r\nlet x = 0\r\nlet y = 0\r\nvar step = 1\r\nlet radiusNeg = -3\r\nvar radiusPos = 3\r\n//-------------------------------------- hero\r\nloader.load('../kenney_sokobanpack/PNG/Default size/Player/player_01.png', function(texture){\r\n   const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({map:texture, transparent: true})\r\n   const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1,1)\r\n   const m = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n   m.position.z = 4\r\n   scene.add(m)\r\n   window.addEventListener('keydown', function(event){\r\n      if(event.code == 'ArrowUp' && y<radiusPos){\r\n         console.log(y)\r\n         y += step\r\n         m.position.y = y\r\n      }else if(event.code == 'ArrowRight' && x<radiusPos){\r\n         x += step\r\n         m.position.x = x\r\n      }else if(event.code == 'ArrowDown' && y>radiusNeg){\r\n         y -= step\r\n         m.position.y = y\r\n      }else if(event.code == 'ArrowLeft'&& x>radiusNeg){\r\n         x -= step\r\n         m.position.x = x\r\n      }else{\r\n         console.log(\"ТУПИК\")\r\n      }\r\n   })\r\n})\r\n//-------------------------------------- grass\r\nloader.load('../kenney_sokobanpack/PNG/Default size/Ground/ground_05.png', function(texture){\r\n   const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({map:texture, transparent: true})\r\n   const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1,1)\r\n   for (let i=0; i<(radiusCanvas+1); i++){\r\n      // top\r\n      const m1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n      m1.position.set(0+i,radiusCanvas,3)\r\n      const m2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n      m2.position.set(0-i,radiusCanvas,3)\r\n      // bottom\r\n      const m3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n      m3.position.set(0+i,-radiusCanvas,3)\r\n      const m4 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n      m4.position.set(0-i,-radiusCanvas,3)\r\n      // right\r\n      const m5 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n      m5.position.set(radiusCanvas,0+i,3)\r\n      const m6 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n      m6.position.set(radiusCanvas,0-i,3)\r\n      // left\r\n      const m7 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n      m7.position.set(-radiusCanvas,0+i,3)\r\n      const m8 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n      m8.position.set(-radiusCanvas,0-i,3)\r\n      scene.add(m1,m2,m3,m4,m5,m6,m7,m8)\r\n   }\r\n})\r\n//-------------------------------------- building\r\nloader.load('../kenney_sokobanpack/PNG/Default size/Crates/crate_11.png',function(texture){\r\n   const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({map:texture, transparent:true})\r\n   const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1,1)\r\n   for (let i=0; i<radiusCanvas; i++){\r\n      // top\r\n      const m1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m1.position.set(0+i,radiusCanvas-1,3)\r\n      const m2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m2.position.set(0-i,radiusCanvas-1,3)\r\n      // bottom\r\n      const m3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m3.position.set(0+i,-(radiusCanvas-1),3)\r\n      const m4 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m4.position.set(0-i,-(radiusCanvas-1),3)\r\n      // right\r\n      const m5 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m5.position.set(radiusCanvas-1,0+i,3)\r\n      const m6 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m6.position.set(radiusCanvas-1,0-i,3)\r\n      // left\r\n      const m7 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m7.position.set(-(radiusCanvas-1),0+i,3)\r\n      const m8 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m8.position.set(-(radiusCanvas-1),0-i,3)\r\n      scene.add(m1,m2,m3,m4,m5,m6,m7,m8)\r\n   }\r\n})\r\n//-------------------------------------- floor\r\nloader.load('../kenney_sokobanpack/PNG/Default size/Ground/ground_01.png', function(texture){\r\n   const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({map: texture, transparent: true})\r\n   const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1,1)\r\n   for (let i=0; i<radiusCanvas-1; i++){\r\n      // top\r\n      for (let f=0; f<((radiusCanvas-1)*2)-1; f++){\r\n         const m1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n         m1.position.set(0+i,radiusCanvas-2-f,3)\r\n         const m2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n         m2.position.set(0-i,radiusCanvas-2-f,3)\r\n         scene.add(m1,m2)\r\n      }\r\n   }\r\n})\r\n//-------------------------------------- spawn\r\nconst spawn = []\r\nif (x==0 && y==0){\r\n   loader.load('../kenney_sokobanpack/PNG/Default size/Crates/crate_29.png', function(texture){\r\n      const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({map: texture, transparent: true})\r\n      const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1,1)\r\n      const m = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)\r\n      m.position.set(0,0,3)\r\n      spawn.push(m.position)\r\n      scene.add(m)\r\n   })\r\n}\r\n//-------------------------------------- boxes\r\nloader.load('../kenney_sokobanpack/PNG/Default size/Crates/crate_44.png', function(texture){\r\n   const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({map:texture, transparent:true})\r\n   const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1/1)\r\n   const m1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m1.position.set(0,radiusCanvas-3,4)\r\n   const m2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m2.position.set(radiusCanvas-3,0,4)\r\n   const m3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m3.position.set(0-radiusCanvas+3,0,4)\r\n   scene.add(m1,m2,m3)\r\n})\r\n//-------------------------------------- level-1\r\n//-------------------------------------- walls\r\nloader.load('../kenney_sokobanpack/PNG/Default size/Crates/crate_01.png', function(texture){\r\n   let boxes = [2,2,4]\r\n   const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({map:texture, transparent:true})\r\n   const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1/1)\r\n   //top-right\r\n   const m1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m1.position.set(radiusCanvas-3,radiusCanvas-3,4)\r\n   const m2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m2.position.set(radiusCanvas-4,radiusCanvas-3,4)\r\n   const m3 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m3.position.set(radiusCanvas-3,radiusCanvas-4,4)\r\n   //top-left\r\n   const m4 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m4.position.set(0-radiusCanvas+3,radiusCanvas-3,4)\r\n   const m5 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m5.position.set(0-radiusCanvas+4,radiusCanvas-3,4)\r\n   const m6 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m6.position.set(0-radiusCanvas+3,radiusCanvas-4,4)\r\n   scene.add(m1,m2,m3,m4,m5,m6)\r\n   //bottom-right\r\n   const m7 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m7.position.set(radiusCanvas-3,0-radiusCanvas+3,4)\r\n   const m8 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m8.position.set(radiusCanvas-4,0-radiusCanvas+3,4)\r\n   const m9 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m9.position.set(radiusCanvas-3,0-radiusCanvas+4,4)\r\n   //bottom-right\r\n   const m10 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m10.position.set(0-radiusCanvas+3,0-radiusCanvas+3,4)\r\n   const m11 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m11.position.set(0-radiusCanvas+4,0-radiusCanvas+3,4)\r\n   const m12 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry,material)\r\n   m12.position.set(0-radiusCanvas+3,0-radiusCanvas+4,4)\r\n   scene.add(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12)\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer()\r\nrenderer.setSize(information.getBoundingClientRect().width , information.getBoundingClientRect().height)\r\ndocument.querySelector('.game').appendChild(renderer.domElement)\r\n\r\nconst canvas = document.querySelector('canvas')\r\ncanvas.classList.add('canvas')\r\n\r\n\r\n\r\nfunction animate(){\r\n   requestAnimationFrame(animate)\r\n   renderer.render(scene, camera)\r\n}\r\nanimate()\r\n\r\n\r\nwindow.addEventListener('resize', windowResize)\r\nfunction windowResize(){\r\n   wrapper.style.setProperty('height', `${document.documentElement.clientHeight}px`)\r\n   wrapper.style.setProperty('width', `${document.documentElement.clientWidth}px`)\r\n\r\n   renderer.setSize(information.getBoundingClientRect().width , information.getBoundingClientRect().height)\r\n}\r\n\n\n//# sourceURL=webpack://sokoban-lg-1/./src/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;