(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/p5.image-map-creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/contextmenu/contextmenu.css":
/*!*****************************************!*\
  !*** ./lib/contextmenu/contextmenu.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./contextmenu.css */ "./node_modules/css-loader/index.js!./lib/contextmenu/contextmenu.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/contextmenu/contextmenu.js":
/*!****************************************!*\
  !*** ./lib/contextmenu/contextmenu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Basic Context Menu - v0.0.1
 *
 * Copyright (c) 2015
 * Released under the MIT license.
 *
 * This is an extremely basic context menu library for JavaScript.
 * It has no dependencies.
 *
 * Usage:
 *
 * // The menu object contains a key along with an object describing
 * // the item, or a function which is called when the item is clicked.
 * //
 * // The key can be used to identify which menu option was clicked
 * // in an onSelect handler. The key is also used to perform actions,
 * // such as disable or enable, on the menu item.
 *
 * var menu = {
 *     // Basic menu option: Key and onSelect
 *     "New" : function( target ) { ... },
 *
 *     // More advanced options
 *     "Open" : {
 *         onSelect : function( target ) { ... },
 *         enabled : true, // Use false for disabled, default true
 *         text : "Open...", // Overrides the key, always use if array
 *         title : "Open a file" // Title attribute for menu item
 *     },
 *
 *     // More parameters in onSelect function
 *     "Save" : {
 *         // target : DOM object that was clicked to open menu
 *         // key : The key of the menu object, in this case, "Save"
 *         // item : DOM object of the menu item that was clicked
 *         onSelect : function( target, key, item ) {
 *             ...
 *         }
 *     }
 * }
 *
 * // A selector can be a CSS-like selector
 * selector = ".menus";
 *
 * // Or a jQuery selector
 * selector = $( ".menus" )
 *
 * // Or a DOM object
 * selector = document.getElementById( "menu" )
 *
 * // Or a NodeList
 * selector = document.getElementsByClassName( "menus" )
 *
 * // Attach a menu
 * ContextMenu.attach( selector, menu );
 *
 * // Attach menu with options
 * ContextMenu.attach( ".menus", menu, {
 *     event : "click", // Any valid mouse/touch event
 *     position : "bottom", // One of bottom, top, left, right, or click
 *     horizontalOffset : 0, // Add horizontal offset to position of menu
 *     verticalOffset : 0, // Add vertical offset to position of menu
 * } );
 *
 * // Disable a menu item
 * ContextMenu.disable( selector, "Close" );
 *
 * // Enable a menu item
 * ContextMenu.enable( selector, "Close" );
 *
 */
( function() {
	'use strict';


	var conf = {
		event : "click",
		position : "bottom",
		horizontalOffset : 0,
		verticalOffset : 0,
		data : {} 
	};

	/**
	 * Variable indicating if a menu is open
	 * @type {boolean}
	 */
	var isOpen = false;


	/**
	 * Target object of context menu. This is the DOM object clicked
	 * on to open the context menu.
	 * @type {HTMLElement}
	 */
	var target = null;


	/**
	 * Class to apply to context menu
	 * @type String
	 */
	var menuClassName = "context-menu";


	/**
	 * Class to apply to conext menu items
	 * @type String
	 */
	var itemClassName = "context-menu-item";


	/**
	 * Class to apply to conext menu items which are disabled
	 * @type String
	 */
	var itemClassNameDisabled = "context-menu-item-disabled";


	///////////////////////////////
	// Helper functions
	///////////////////////////////

	/**
	 * Check if object is a function
	 *
	 * @param {Mixed} obj
	 * @returns {boolean}
	 */
	var isFunction = function( obj ) {
		return !!( obj && obj.constructor && obj.call && obj.apply );
	};



	/**
	 * Check if object is a string
	 *
	 * @param {Mixed} obj
	 * @returns {boolean}
	 */
	var isString = function( obj ) {
		return ( typeof obj === 'string' || obj instanceof String );
	};



	/**
	 * A super simple extend function. This is all that we need
	 * for this library
	 *
	 * @param {Object}
	 * @returns {Object}
	 */
	var extend = function( obj ) {
		var length = arguments.length;

		if ( length < 2 || obj === null ) {
			return obj;
		}

		for ( var idx = 1; idx < length; idx++ ) {
			var source = arguments[ idx ];
			for ( var key in source ) {
				obj[ key ] = source[ key ];
			}
		}

		return obj;
	};



	/**
	 * Get elements based on selector. The selector may be any of a
	 * DOM element, a jQuery object, a css-selector string, or
	 * a NodeList, likely retrieved from .querySelectorAll().
	 *
	 * @param {jQuery|NodeList|String|HTMLElement} selector
	 * @returns {Array|jQuery|NodeList}
	 */
	var getElements = function( selector ) {
		var elements = [];

		if ( typeof jQuery !== "undefined" && selector instanceof jQuery ) {
			return selector;
		}

		if ( selector instanceof HTMLElement ) {
			return [ selector ];
		}

		if ( isString( selector ) ) {
			return document.querySelectorAll( selector );
		}

		if ( selector instanceof NodeList ) {
			return selector;
		}

		return elements;
	};


	///////////////////////////////
	// Private functions
	///////////////////////////////


	/**
	 * Called when a context menu is requested.
	 *
	 * @param {Event} e
	 */
	var onContextMenu = function( e ) {
		e.stopPropagation();
		e.preventDefault();

		target = e.target;
		closeContextMenu();

		if ( target.ctxMenu ) {

			var menu = createContextMenu( target );
			document.body.appendChild( menu );
			isOpen = true;

			// On next tick, position menu. We can't do it right
			// away because width and height of menu needs to be computed
			// first.
			setTimeout( function() {
				// Set up events to process or close context menu
				window.addEventListener( "click", closeContextMenu );
				window.addEventListener( "resize", closeContextMenu );
				window.addEventListener( "scroll", closeContextMenu );
				
				// Position and display
				menu.style.visibility = "visible";
				positionContextMenu( e, target, menu );
			}, 1 );
		}
	};



	/**
	 * Create context menu
	 *
	 * @param {HTMLElement} target The element user clicks on to get context menu
	 * @returns {HTMLElement} The menu
	 */
	var createContextMenu = function( target ) {
		var key;

		var contextMenu = document.createElement( "div" );
		contextMenu.className = menuClassName;

		// Initially hidden until we compute position
		contextMenu.style.visibility = "hidden";
		contextMenu.style.display = "inline-block";

		for ( key in target.ctxMenu.menu ) {
			var value = target.ctxMenu.menu[ key ];

			var item = document.createElement( "div" );
			item.ctxMenu = {
				key : key,
				enabled : value.enabled ? true : false
			};

			if ( item.ctxMenu.enabled ) {
				item.className = itemClassName;
			} else {
				item.className = itemClassNameDisabled;
			}
			item.innerHTML = value && value.label ? value.label : key;

			// Assign event listener
			if ( item.ctxMenu.enabled ) {
				if ( isFunction( value.onSelect ) ) {
					item.ctxMenu.onSelect = value.onSelect;
				} else {
					item.ctxMenu.onSelect = onSelect;
				}

				item.addEventListener( target.ctxMenu.event, function( e ) {
					this.ctxMenu.onSelect( target, this.ctxMenu.key, item, target.ctxMenu.data );
					closeContextMenu();
				} );
			}

			if ( value.title ) {
				item.title = value.title;
			}

			contextMenu.appendChild( item );
		}

		return contextMenu;
	};



	/**
	 * Position the menu relative to the target
	 *
	 * @param {Event} e The event that triggered the display of context menu
	 * @param {HTMLElement} target
	 * @param {HTMLElement} menu
	 */
	var positionContextMenu = function( e, target, menu ) {
		var left = 0;
		var top = 0;
		var targetBox = target.getBoundingClientRect();
		var menuBox = menu.getBoundingClientRect();

		// Default position
		var position = "click";

		if ( target.ctxMenu && target.ctxMenu.position ) {
			position = target.ctxMenu.position;
		}

		if ( position === "bottom" ) {
			// Display below element, left aligned (what about RTL languages?)
			left = targetBox.left + target.ctxMenu.horizontalOffset;
			top = targetBox.bottom + target.ctxMenu.verticalOffset;
		} else if ( position === "top" ) {
			// Display above element, left aligned (what about RTL languages?)
			left = targetBox.left + target.ctxMenu.horizontalOffset;
			top = targetBox.top - menuBox.height + target.ctxMenu.verticalOffset;
		} else if ( position === "right" ) {
			// Display to the right of the element, aligned to the top
			left = targetBox.left + targetBox.width + target.ctxMenu.horizontalOffset;
			top = targetBox.top + target.ctxMenu.verticalOffset;
		} else if ( position === "left" ) {
			// Display to the left of the element, aligned to the top
			left = targetBox.left - menuBox.width + target.ctxMenu.horizontalOffset;
			top = targetBox.top + target.ctxMenu.verticalOffset;
		} else {
			// Display wherever the user clicked the mouse
			left = e.clientX + target.ctxMenu.horizontalOffset;
			top = e.clientY + target.ctxMenu.verticalOffset;
		}

		// Check if off screen

		// Too far to the left?
		if ( left < 0 ) {
			if ( target.ctxMenu.horizontalOffset >= 0 ) {
				left = target.ctxMenu.horizontalOffset;
			} else {
				left = 0;
			}
		}

		// Too far up?
		if ( top < 0 ) {
			if ( target.ctxMenu.verticalOffset >= 0 ) {
				top = target.ctxMenu.verticalOffset;
			} else {
				top = 0;
			}
		}

		// Too far to the right?
		if ( left + menuBox.width > document.body.clientWidth ) {
			if ( target.ctxMenu.horizontalOffset >= 0 ) {
				left = document.body.clientWidth - menuBox.width;
			} else {
				left = document.body.clientWidth - menuBox.width + target.ctxMenu.horizontalOffset;
			}
		}

		// Too far to the bottom?
		if ( top + menuBox.height > document.body.clientHeight ) {
			if ( target.ctxMenu.verticalOffset >= 0 ) {
				top = document.body.clientHeight - menuBox.height;
			} else {
				top = document.body.clientHeight - menuBox.height + target.ctxMenu.verticalOffset;
			}
		}

		// And finally, apply to positioning to the menu
		menu.style.left = left + "px";
		menu.style.top = top + "px";
	};



	/**
	 * Default onSelect routine if client failed to pass one in
	 *
	 * @param {HTMLElement} target The DOM element which context menu is applied to
	 * @param {String} key Key related to menu
	 * @param {HTMLElement} item The item clicked
	 */
	var onSelect = function( target, key, item ) {
		// TODO: Maybe throw an event
	};



	/**
	 * Close any context menus (there should be only one!) that
	 * currently exist.
	 */
	var closeContextMenu = function() {
		var idx = 0;
		var elements = document.getElementsByClassName( menuClassName );

		// Remove event listeners. If they don't exist, nothing will happen.
		window.removeEventListener( "click", closeContextMenu );
		window.removeEventListener( "resize", closeContextMenu );
		window.removeEventListener( "scroll", closeContextMenu );

		for ( idx = 0; idx < elements.length; idx++ ) {
			elements[ idx ].parentNode.removeChild( elements[ idx ] );
		}
		isOpen = false;
	};



	/**
	 * Set the enabled state of a menu item
	 * @param {jQuery|NodeList|String|HTMLElement} selector
	 * @param {String|int} key Key in menu object
	 * @param {boolean} enabled
	 */
	var setEnabledState = function( selector, key, enabled ) {
		var idx = 0;

		// Get list of elements to attach context menu to
		var elements = getElements( selector );

		// Disable each menu element
		for ( idx = 0; idx < elements.length; idx++ ) {
			if ( elements[ idx ].ctxMenu.menu.hasOwnProperty( key ) ) {
				elements[ idx ].ctxMenu.menu[ key ].enabled = enabled;
			}
		}
	};



	/**
	 * Normalize a menu structure so that all properties are present
	 *
	 * @param {Object} menu
	 * @returns {Object}
	 */
	var normalizeMenu = function( menu ) {
		var idx;
		var itemDefaults = {
			type: "item",
			enabled: true,
			label: "",
			onSelect: function() {},
			icon: "",  // This isn't used yet
			title: ""
		};

		// Quick normalization of menu object
		for ( idx in menu ) {
			// Create copy of defaults
			var dflt = extend( {}, itemDefaults );
			
			if ( ! menu[ idx ] ) {
				menu[ idx ] = extend( dflt, { label : idx } );
			} else if ( isFunction( menu[ idx ] ) ) {
				menu[ idx ] = extend( dflt, { label : idx, onSelect : menu[ idx ] } );
			} else {
				menu[ idx ] = extend( dflt, menu[ idx ] );
			}
		}

		return menu;
	};



	///////////////////////////////
	// Public API
	///////////////////////////////
	var ContextMenu = {

		/**
		 * Attach a context menu to one or more elements. This is the
		 * API that will be used most often.
		 *
		 * @param {jQuery|NodeList|HTMLElement|String} selector
		 * @param {Array|Object} menu
		 * @param {Object} options
		 */
		attach : function( selector, menu, options ) {
			var idx = 0;

			menu = normalizeMenu( menu );

			// Create object to associate with element(s).
			// extend() is used so that each element gets a unique copy.
			var obj = extend( { menu : extend( {}, menu ) }, conf, options );

			// Get list of elements to attach context menu to
			var elements = getElements( selector );

			// Attach context menu to each element
			for ( idx = 0; idx < elements.length; idx++ ) {
				elements[ idx ].ctxMenu = obj;
				elements[ idx ].addEventListener( obj.event, onContextMenu );
			}
		},


		
		/**
		 * Display a context menu with an element or event. 
		 * Useful for when you don't want to attach the context
		 * menu to a whole bunch of things but just display it
		 * dynamically.
		 * 
		 * @example
		 *	$( document ).on( "click", ".target-button", function( e ) {
		 *		ContextMenu.display( e.target, menu, { horizontalOffset : 5 } );
		 *	} );
		 *	
		 * @example
		 *	$( document ).on( "click", ".target-button", function( e ) {
		 *		ContextMenu.display( e, menu, { horizontalOffset : 5 } );
		 *	} );
		 * 
		 * @param {Event|HTMLElement} e
		 * @param {Array|Object} menu
		 * @param {Object} options
		 */
		display : function( e, menu, options ) {
			menu = normalizeMenu( extend( {}, menu ) );

			// Create object to associate with element(s).
			// extend() is used so that we have a unique copy.
			var contextMenu = extend( { menu : extend( {}, menu ) }, conf, options );

			// Is e a selector or an event?
			if ( e instanceof Event ) {
				e.target.ctxMenu = contextMenu;
				onContextMenu( e );
			} else if ( typeof jQuery !== "undefined" && e instanceof jQuery.Event ) {
				e.target.ctxMenu = contextMenu;
				onContextMenu( e );
			} else if ( e instanceof HTMLElement ) {
				e.ctxMenu = contextMenu;
				
				// Create a simulated event
				var box = e.getBoundingClientRect();
				var evt = {
					target: e,
					clientX: box.left,
					clientY: box.top,
					stopPropagation: function() {},
					preventDefault: function() {}
				}
				onContextMenu( evt );
			} else {
				console.log( e );
			}
		},


		/**
		 * Disable a menu items
		 *
		 * @param {jQuery|NodeList|HTMLElement|String} selector
		 * @param {String|int} key The key passed in to the menu object in .attach()
		 */
		disable : function( selector, key ) {
			setEnabledState( selector, key, false );
		},



		/**
		 * Disable a menu items
		 *
		 * @param {jQuery|NodeList|HTMLElement|String} selector
		 * @param {String|int} key The key passed in to the menu object in .attach()
		 */
		enable : function( selector, key ) {
			setEnabledState( selector, key, true );
		},



		/**
		 * Close context menu(s)
		 */
		close : function() {
			closeContextMenu();
		},



		/**
		 * Check if a context menu is open
		 * @returns {boolean}
		 */
		isOpen : function() {
			return isOpen;
		}
	};



	/**
	 * Expose
	 */
	// AMD
	if ( typeof window.define === "function" && window.define.amd !== undefined ) {
		window.define( 'ContextMenu', [], function () {
			return ContextMenu;
		} );
	// CommonJS
	} else if (  true && module.exports !== undefined ) {
		module.exports = ContextMenu;
	// Browser
	} else {
		window.ContextMenu = ContextMenu;
	}
} )();


/***/ }),

/***/ "./node_modules/css-loader/index.js!./lib/contextmenu/contextmenu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader!./lib/contextmenu/contextmenu.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.context-menu {\r\n\tposition : fixed;\r\n\tborder: 1px solid #ccc;\r\n\tbackground-color: #eee;\r\n\tmin-width : 100px;\r\n\tpadding: 2px;\r\n\tbox-shadow : 2px 2px 4px #444;\r\n\tdisplay : inline-block;\r\n\tz-index : 10002;\r\n\tcursor : default;\r\n}\r\n\r\ndiv.context-menu>div {\r\n\tpadding : 5px 25px;\r\n\tfont-family: sans-serif;\r\n\tfont-size: 0.8em;\r\n}\r\n\r\ndiv.context-menu-item:hover {\r\n\tbackground-color : #c3d6ee;\r\n}\r\n\r\ndiv.context-menu-item-disabled {\r\n\tcolor : #aaa;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/downloadjs/download.js":
/*!*********************************************!*\
  !*** ./node_modules/downloadjs/download.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window, // this script is only for browsers anyway...
			defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement("a"),
			toString = function (a) { return String(a); },
			myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
			fileName = strFileName || "download",
			blob,
			reader;
		myBlob = myBlob.call ? myBlob.bind(self) : Blob;

		if (String(this) === "true") { //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload = [payload, mimeType];
			mimeType = payload[0];
			payload = payload[1];
		}


		if (url && url.length < 2048) { // if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
			if (anchor.href.indexOf(url) !== -1) { // if the browser determines that it's a potentially valid url path:
				var ajax = new XMLHttpRequest();
				ajax.open("GET", url, true);
				ajax.responseType = 'blob';
				ajax.onload = function (e) {
					download(e.target.response, fileName, defaultMime);
				};
				setTimeout(function () { ajax.send(); }, 0); // allows setting custom ajax headers using the return:
				return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {

			if (payload.length > (1024 * 1024 * 1.999) && myBlob !== toString) {
				payload = dataUrlToBlob(payload);
				mimeType = payload.type || defaultMime;
			} else {
				return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
					navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
					saver(payload); // everyone else can save dataURLs un-processed
			}

		} else {//not data url, is it a string with special needs?
			if (/([\x80-\xff])/.test(payload)) {
				var i = 0, tempUiArr = new Uint8Array(payload.length), mx = tempUiArr.length;
				for (i; i < mx; ++i) tempUiArr[i] = payload.charCodeAt(i);
				payload = new myBlob([tempUiArr], { type: mimeType });
			}
		}
		blob = payload instanceof myBlob ?
			payload :
			new myBlob([payload], { type: mimeType });


		function dataUrlToBlob(strUrl) {
			var parts = strUrl.split(/[:;,]/),
				type = parts[1],
				decoder = parts[2] == "base64" ? atob : decodeURIComponent,
				binData = decoder(parts.pop()),
				mx = binData.length,
				i = 0,
				uiArr = new Uint8Array(mx);

			for (i; i < mx; ++i) uiArr[i] = binData.charCodeAt(i);

			return new myBlob([uiArr], { type: type });
		}

		function saver(url, winMode) {

			if ('download' in anchor) { //html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function () {
					anchor.click();
					document.body.removeChild(anchor);
					if (winMode === true) { setTimeout(function () { self.URL.revokeObjectURL(anchor.href); }, 250); }
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if (/^data:/.test(url)) url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if (!window.open(url)) { // popup blocked, offer direct download:
					if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) { location.href = url; }
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if (!winMode && /^data:/.test(url)) { // force a mime that will download:
				url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src = url;
			setTimeout(function () { document.body.removeChild(f); }, 333);

		}//end saver




		if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if (self.URL) { // simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		} else {
			// handle non-Blob()+non-URL browsers:
			if (typeof blob === "string" || blob.constructor === toString) {
				try {
					return saver("data:" + mimeType + ";base64," + self.btoa(blob));
				} catch (y) {
					return saver("data:" + mimeType + "," + encodeURIComponent(blob));
				}
			}

			// Blob but not URL support:
			reader = new FileReader();
			reader.onload = function (e) {
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
}));


/***/ }),

/***/ "./node_modules/quicksettings/quicksettings.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/quicksettings/quicksettings.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(){function a(a,b){var d=c("div",null,"qs_label",b);return d.innerHTML=a,d}function b(a,b,d,e){var f=c("input",b,d,e);return f.type=a,f}function c(a,b,c,d){var e=document.createElement(a);if(e)return e.id=b,c&&(e.className=c),d&&d.appendChild(e),e}function d(){return navigator.userAgent.indexOf("rv:11")!=-1||navigator.userAgent.indexOf("MSIE")!=-1}function e(){var a=navigator.userAgent.toLowerCase();return!(a.indexOf("chrome")>-1||a.indexOf("firefox")>-1||a.indexOf("epiphany")>-1)&&a.indexOf("safari/")>-1}function f(){var a=navigator.userAgent.toLowerCase();return a.indexOf("edge")>-1}function g(){var a=document.createElement("style");a.innerText=i,document.head.appendChild(a),h=!0}var h=!1,i=".qs_main{background-color:#dddddd;text-align:left;position:absolute;width:200px;font:12px sans-serif;box-shadow:5px 5px 8px rgba(0,0,0,0.35);user-select:none;-webkit-user-select:none;color:#000000;border:none}.qs_content{background-color:#cccccc;overflow-y:auto}.qs_title_bar{background-color:#eeeeee;user-select:none;-webkit-user-select:none;cursor:pointer;padding:5px;font-weight:bold;border:none;color:#000000}.qs_container{margin:5px;padding:5px;background-color:#eeeeee;border:none;position:relative}.qs_container_selected{border:none;background-color:#ffffff}.qs_range{-webkit-appearance:none;-moz-appearance:none;width:100%;height:17px;padding:0;margin:0;background-color:transparent;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_range:focus{outline:none;border:none}.qs_range::-webkit-slider-runnable-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-webkit-slider-runnable-track{background:#cccccc}.qs_range::-webkit-slider-thumb{-webkit-appearance:none;height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;margin-top:0}.qs_range::-moz-range-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range::-moz-range-thumb{height:15px;width:15px;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer}.qs_range::-ms-track{width:100%;height:15px;cursor:pointer;visibility:hidden;background:transparent}.qs_range::-ms-thumb{height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;border:none}.qs_range::-ms-fill-lower{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-lower{background:#cccccc}.qs_range::-ms-fill-upper{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-upper{background:#cccccc}.qs_button{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif}.qs_button:active{background-color:#ffffff;border:1px solid #aaaaaa}.qs_button:focus{border:1px solid #aaaaaa;outline:none}.qs_checkbox{cursor:pointer}.qs_checkbox input{position:absolute;left:-99999px}.qs_checkbox span{height:16px;width:100%;display:block;text-indent:20px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVQ4T2OcOXPmfwYKACPIgLS0NLKMmDVrFsOoAaNhMJoOGBioFwZkZUWoJgApdFaxjUM1YwAAAABJRU5ErkJggg==') no-repeat}.qs_checkbox input:checked+span{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T63Tyw2EIBAA0OFKBxBL40wDRovAUACcKc1IB1zZDAkG18GYZTmSmafzgTnnMgwchoDWGlJKheGcP3JtnPceCqCUAmttSZznuYtgchsXQrgC+77DNE0kUpPbmBOoJaBOIVQylnqWgAAeKhDve/AN+EaklJBzhhgjWRoJVGTbNjiOowAIret6a+4jYIwpX8aDwLIs74C2D0IIYIyVP6Gm898m9kbVm85ljHUTf16k4VUefkwDrxk+zoUEwCt0GbUAAAAASUVORK5CYII=') no-repeat}.qs_checkbox_label{position:absolute;top:7px;left:30px}.qs_label{margin-bottom:3px;user-select:none;-webkit-user-select:none;cursor:default;font:12px sans-serif}.qs_text_input{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 0 0 5px;height:24px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_text_input:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_select{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS+2SsQ3FIAwF7RVYhA5mgQFhFuhYhJKWL0eKxI8SGylKZ0p4+OBsHGNM+HChAiS7qkgyBKrovaLeOxhjbgtxZ+cFtgelFMg5QwgBvPd/EO5sDbKAlBLUWo/8CjmL075zDmKMj6rEKbpCqBL9aqc4ZUQAhVbInBMQUXz5Vg/WfxOktXZsWWtZLds9uIqlqaH1NFV3jdhSJA47E1CAaE8ViYp+wGiWMZ/T+cgAAAAASUVORK5CYII=') no-repeat right #f6f6f6;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#000000;width:100%;height:24px;border:1px solid #aaaaaa;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:0 5px;-moz-outline:none;font-size:14px}.qs_select option{font-size:14px}.qs_select::-ms-expand{display:none}.qs_select:focus{outline:none}.qs_number{height:24px}.qs_image{width:100%}.qs_progress{width:100%;height:15px;background-color:#cccccc;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_progress_value{height:100%;background-color:#999999}.qs_textarea{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:vertical;width:100%;padding:3px 5px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_textarea:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_color{position:absolute;left:-999999px}.qs_color_label{width:100%;height:20px;display:block;border:1px solid #aaaaaa;cursor:pointer;padding:0 0 0 5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_file_chooser{position:absolute;left:-999999px}.qs_file_chooser_label{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif;width:100%;display:block;cursor:pointer;padding:7px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",j={_version:"2.1",_topZ:1,_panel:null,_titleBar:null,_content:null,_startX:0,_startY:0,_hidden:!1,_collapsed:!1,_controls:null,_keyCode:-1,_draggable:!0,_collapsible:!0,_globalChangeHandler:null,useExtStyleSheet:function(){h=!0},create:function(a,b,c,d){var e=Object.create(this);return e._init(a,b,c,d),e},destroy:function(){this._panel.parentElement&&this._panel.parentElement.removeChild(this._panel);for(var a in this)this[a]=null},_init:function(a,b,c,d){h||g(),this._bindHandlers(),this._createPanel(a,b,d),this._createTitleBar(c||"QuickSettings"),this._createContent()},_bindHandlers:function(){this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._endDrag=this._endDrag.bind(this),this._doubleClickTitle=this._doubleClickTitle.bind(this),this._onKeyUp=this._onKeyUp.bind(this)},getValuesAsJSON:function(a){var b={};for(var c in this._controls)this._controls[c].getValue&&(b[c]=this._controls[c].getValue());return a&&(b=JSON.stringify(b)),b},setValuesFromJSON:function(a){"string"==typeof a&&(a=JSON.parse(a));for(var b in a)this._controls[b].setValue&&this._controls[b].setValue(a[b]);return this},saveInLocalStorage:function(a){return this._localStorageName=a,this._readFromLocalStorage(a),this},clearLocalStorage:function(a){return localStorage.removeItem(a),this},_saveInLocalStorage:function(a){localStorage.setItem(a,this.getValuesAsJSON(!0))},_readFromLocalStorage:function(a){var b=localStorage.getItem(a);b&&this.setValuesFromJSON(b)},_createPanel:function(a,b,d){this._panel=c("div",null,"qs_main",d||document.body),this._panel.style.zIndex=++j._topZ,this.setPosition(a||0,b||0),this._controls={}},_createTitleBar:function(a){this._titleBar=c("div",null,"qs_title_bar",this._panel),this._titleBar.textContent=a,this._titleBar.addEventListener("mousedown",this._startDrag),this._titleBar.addEventListener("dblclick",this._doubleClickTitle)},_createContent:function(){this._content=c("div",null,"qs_content",this._panel)},_createContainer:function(){var a=c("div",null,"qs_container");return a.addEventListener("focus",function(){this.className+=" qs_container_selected"},!0),a.addEventListener("blur",function(){var a=this.className.indexOf(" qs_container_selected");a>-1&&(this.className=this.className.substr(0,a))},!0),this._content.appendChild(a),a},setPosition:function(a,b){return this._panel.style.left=a+"px",this._panel.style.top=Math.max(b,0)+"px",this},setSize:function(a,b){return this._panel.style.width=a+"px",this._content.style.width=a+"px",this._content.style.height=b-this._titleBar.offsetHeight+"px",this},setWidth:function(a){return this._panel.style.width=a+"px",this._content.style.width=a+"px",this},setHeight:function(a){return this._content.style.height=a-this._titleBar.offsetHeight+"px",this},setDraggable:function(a){return this._draggable=a,this._draggable||this._collapsible?this._titleBar.style.cursor="pointer":this._titleBar.style.cursor="default",this},_startDrag:function(a){this._draggable&&(this._panel.style.zIndex=++j._topZ,document.addEventListener("mousemove",this._drag),document.addEventListener("mouseup",this._endDrag),this._startX=a.clientX,this._startY=a.clientY),a.preventDefault()},_drag:function(a){var b=parseInt(this._panel.style.left),c=parseInt(this._panel.style.top),d=a.clientX,e=a.clientY;this.setPosition(b+d-this._startX,c+e-this._startY),this._startX=d,this._startY=e,a.preventDefault()},_endDrag:function(a){document.removeEventListener("mousemove",this._drag),document.removeEventListener("mouseup",this._endDrag),a.preventDefault()},setGlobalChangeHandler:function(a){return this._globalChangeHandler=a,this},_callGCH:function(){this._localStorageName&&this._saveInLocalStorage(this._localStorageName),this._globalChangeHandler&&this._globalChangeHandler()},hide:function(){return this._panel.style.visibility="hidden",this._hidden=!0,this},show:function(){return this._panel.style.visibility="visible",this._panel.style.zIndex=++j._topZ,this._hidden=!1,this},toggleVisibility:function(){return this._hidden?this.show():this.hide(),this},setCollapsible:function(a){return this._collapsible=a,this._draggable||this._collapsible?this._titleBar.style.cursor="pointer":this._titleBar.style.cursor="default",this},collapse:function(){return this._panel.removeChild(this._content),this._collapsed=!0,this},expand:function(){return this._panel.appendChild(this._content),this._collapsed=!1,this},toggleCollapsed:function(){return this._collapsed?this.expand():this.collapse(),this},setKey:function(a){return this._keyCode=a.toUpperCase().charCodeAt(0),document.body.addEventListener("keyup",this.onKeyUp),this},_onKeyUp:function(a){a.keyCode===this._keyCode&&this.toggleVisibility()},_doubleClickTitle:function(){this._collapsible&&this.toggleCollapsed()},removeControl:function(a){if(this._controls[a])var b=this._controls[a].container;return b&&b.parentElement&&b.parentElement.removeChild(b),this._controls[a]=null,this},enableControl:function(a){return this._controls[a]&&(this._controls[a].control.disabled=!1),this},disableControl:function(a){return this._controls[a]&&(this._controls[a].control.disabled=!0),this},hideControl:function(a){return this._controls[a]&&(this._controls[a].container.style.display="none"),this},showControl:function(a){return this._controls[a]&&(this._controls[a].container.style.display="block"),this},overrideStyle:function(a,b,c){return this._controls[a]&&(this._controls[a].control.style[b]=c),this},hideTitle:function(a){var b=this._controls[a].label;return b&&(b.style.display="none"),this},showTitle:function(a){var b=this._controls[a].label;return b&&(b.style.display="block"),this},hideAllTitles:function(){for(var a in this._controls){var b=this._controls[a].label;b&&(b.style.display="none")}return this},showAllTitles:function(){for(var a in this._controls){var b=this._controls[a].label;b&&(b.style.display="block")}return this},getValue:function(a){return this._controls[a].getValue()},setValue:function(a,b){return this._controls[a].setValue(b),this._callGCH(),this},addBoolean:function(a,d,e){var f=this._createContainer(),g=c("label",null,"qs_checkbox_label",f);g.textContent=a,g.setAttribute("for",a);var h=c("label",null,"qs_checkbox",f);h.setAttribute("for",a);var i=b("checkbox",a,null,h);i.checked=d;c("span",null,null,h);this._controls[a]={container:f,control:i,getValue:function(){return this.control.checked},setValue:function(a){this.control.checked=a,e&&e(a)}};var j=this;return i.addEventListener("change",function(){e&&e(i.checked),j._callGCH()}),this},bindBoolean:function(a,b,c){return this.addBoolean(a,b,function(b){c[a]=b})},addButton:function(a,c){var d=this._createContainer(),e=b("button",a,"qs_button",d);e.value=a,this._controls[a]={container:d,control:e};var f=this;return e.addEventListener("click",function(){c&&c(e),f._callGCH()}),this},addColor:function(g,h,i){if(e()||f()||d())return this.addText(g,h,i);var j=this._createContainer(),k=a("<b>"+g+":</b> "+h,j),l=b("color",g,"qs_color",j);l.value=h||"#ff0000";var m=c("label",null,"qs_color_label",j);m.setAttribute("for",g),m.style.backgroundColor=l.value,this._controls[g]={container:j,control:l,colorLabel:m,label:k,title:g,getValue:function(){return this.control.value},setValue:function(a){this.control.value=a,this.colorLabel.style.backgroundColor=l.value,this.label.innerHTML="<b>"+this.title+":</b> "+this.control.value,i&&i(a)}};var n=this;return l.addEventListener("input",function(){k.innerHTML="<b>"+g+":</b> "+l.value,m.style.backgroundColor=l.value,i&&i(l.value),n._callGCH()}),this},bindColor:function(a,b,c){return this.addColor(a,b,function(b){c[a]=b})},addDate:function(c,e,f){var g;if(e instanceof Date){var h=e.getFullYear(),i=e.getMonth()+1;i<10&&(i="0"+i);var j=e.getDate();g=h+"-"+i+"-"+j}else g=e;if(d())return this.addText(c,g,f);var k=this._createContainer(),l=a("<b>"+c+"</b>",k),m=b("date",c,"qs_text_input",k);m.value=g||"",this._controls[c]={container:k,control:m,label:l,getValue:function(){return this.control.value},setValue:function(a){var b;if(a instanceof Date){var c=a.getFullYear(),d=a.getMonth()+1;d<10&&(d="0"+d);var e=a.getDate();e<10&&(e="0"+e),b=c+"-"+d+"-"+e}else b=a;this.control.value=b||"",f&&f(b)}};var n=this;return m.addEventListener("input",function(){f&&f(m.value),n._callGCH()}),this},bindDate:function(a,b,c){return this.addDate(a,b,function(b){c[a]=b})},addDropDown:function(b,d,e){for(var f=this._createContainer(),g=a("<b>"+b+"</b>",f),h=c("select",null,"qs_select",f),i=0;i<d.length;i++){var j=c("option");j.label=d[i],j.innerText=d[i],h.add(j)}var k=this;return h.addEventListener("change",function(){var a=h.selectedIndex,b=h.options;e&&e({index:a,value:b[a].label}),k._callGCH()}),this._controls[b]={container:f,control:h,label:g,getValue:function(){var a=this.control.selectedIndex;return{index:a,value:this.control.options[a].label}},setValue:function(a){var b;b=null!=a.index?a.index:a;var c=this.control.options;this.control.selectedIndex=b,e&&e({index:b,value:c[b].label})}},this},bindDropDown:function(a,b,c){return this.addDropDown(a,b,function(b){c[a]=b.value})},addElement:function(b,c){var d=this._createContainer(),e=a("<b>"+b+"</b>",d);return d.appendChild(c),this._controls[b]={container:d,label:e},this},addFileChooser:function(d,e,f,g){var h=this._createContainer(),i=a("<b>"+d+"</b>",h),j=b("file",d,"qs_file_chooser",h);f&&(j.accept=f);var k=c("label",null,"qs_file_chooser_label",h);k.setAttribute("for",d),k.textContent=e||"Choose a file...",this._controls[d]={container:h,control:j,label:i,getValue:function(){return this.control.files[0]}};var l=this;return j.addEventListener("change",function(){j.files&&j.files.length&&(k.textContent=j.files[0].name,g&&g(j.files[0]),l._callGCH())}),this},addHTML:function(b,d){var e=this._createContainer(),f=a("<b>"+b+":</b> ",e),g=c("div",null,null,e);return g.innerHTML=d,this._controls[b]={label:f,control:g,getValue:function(){return this.control.innerHTML},setValue:function(a){this.control.innerHTML=a}},this},addImage:function(b,d){var e=this._createContainer(),f=a("<b>"+b+"</b>",e);return img=c("img",null,"qs_image",e),img.src=d,this._controls[b]={container:e,control:img,label:f,getValue:function(){return this.control.src},setValue:function(a){this.control.src=a}},this},addRange:function(a,b,c,d,e,f){return this._addNumber("range",a,b,c,d,e,f)},addNumber:function(a,b,c,d,e,f){return this._addNumber("number",a,b,c,d,e,f)},_addNumber:function(c,e,f,g,h,i,j){var k=this._createContainer(),l=a("",k),m="range"===c?"qs_range":"qs_text_input qs_number",n=b(c,e,m,k);n.min=f||0,n.max=g||100,n.step=i||1,n.value=h||0,l.innerHTML="<b>"+e+":</b> "+n.value,this._controls[e]={container:k,control:n,label:l,title:e,callback:j,getValue:function(){return parseFloat(this.control.value)},setValue:function(a){this.control.value=a,this.label.innerHTML="<b>"+this.title+":</b> "+this.control.value,j&&j(parseFloat(a))}};var o="input";"range"===c&&d()&&(o="change");var p=this;return n.addEventListener(o,function(){l.innerHTML="<b>"+e+":</b> "+n.value,j&&j(parseFloat(n.value)),p._callGCH()}),this},bindRange:function(a,b,c,d,e,f){return this.addRange(a,b,c,d,e,function(b){f[a]=b})},bindNumber:function(a,b,c,d,e,f){return this.addNumber(a,b,c,d,e,function(b){f[a]=b})},setRangeParameters:function(a,b,c,d){return this.setNumberParameters(a,b,c,d)},setNumberParameters:function(a,b,c,d){var e=this._controls[a],f=e.control.value;return e.control.min=b,e.control.max=c,e.control.step=d,e.control.value!==f&&e.callback&&e.callback(e.control.value),this},addPassword:function(a,b,c){return this._addText("password",a,b,c)},bindPassword:function(a,b,c){return this.addPassword(a,b,function(b){c[a]=b})},addProgressBar:function(b,d,e,f){var g=this._createContainer(),h=a("",g),i=c("div",null,"qs_progress",g),j=c("div",null,"qs_progress_value",i);return j.style.width=e/d*100+"%","numbers"===f?h.innerHTML="<b>"+b+":</b> "+e+" / "+d:"percent"===f?h.innerHTML="<b>"+b+":</b> "+Math.round(e/d*100)+"%":h.innerHTML="<b>"+b+"</b>",this._controls[b]={container:g,control:i,valueDiv:j,valueDisplay:f,label:h,value:e,max:d,title:b,getValue:function(){return this.value},setValue:function(a){this.value=Math.max(0,Math.min(a,this.max)),this.valueDiv.style.width=this.value/this.max*100+"%","numbers"===this.valueDisplay?this.label.innerHTML="<b>"+this.title+":</b> "+this.value+" / "+this.max:"percent"===this.valueDisplay&&(this.label.innerHTML="<b>"+this.title+":</b> "+Math.round(this.value/this.max*100)+"%")}},this},setProgressMax:function(a,b){var c=this._controls[a];return c.max=b,c.value=Math.min(c.value,c.max),c.valueDiv.style.width=c.value/c.max*100+"%","numbers"===c.valueDisplay?c.label.innerHTML="<b>"+c.title+":</b> "+c.value+" / "+c.max:"percent"===c.valueDisplay?c.label.innerHTML="<b>"+c.title+":</b> "+Math.round(c.value/c.max*100)+"%":c.label.innerHTML="<b>"+c.title+"</b>",this},addText:function(a,b,c){return this._addText("text",a,b,c)},_addText:function(d,e,f,g){var h,i=this._createContainer(),j=a("<b>"+e+"</b>",i);"textarea"===d?(h=c("textarea",e,"qs_textarea",i),h.rows=5):h=b(d,e,"qs_text_input",i),h.value=f||"",this._controls[e]={container:i,control:h,label:j,getValue:function(){return this.control.value},setValue:function(a){this.control.value=a,g&&g(a)}};var k=this;return h.addEventListener("input",function(){g&&g(h.value),k._callGCH()}),this},bindText:function(a,b,c){return this.addText(a,b,function(b){c[a]=b})},addTextArea:function(a,b,c){return this._addText("textarea",a,b,c)},setTextAreaRows:function(a,b){return this._controls[a].control.rows=b,this},bindTextArea:function(a,b,c){return this.addTextArea(a,b,function(b){c[a]=b})},addTime:function(c,e,f){var g;if(e instanceof Date){var h=e.getHours();h<10&&(h="0"+h);var i=e.getMinutes();i<10&&(i="0"+i);var j=e.getSeconds();j<10&&(j="0"+j),g=h+":"+i+":"+j}else g=e;if(d())return this.addText(c,g,f);var k=this._createContainer(),l=a("<b>"+c+"</b>",k),m=b("time",c,"qs_text_input",k);m.value=g||"",this._controls[c]={container:k,control:m,label:l,getValue:function(){return this.control.value},setValue:function(a){var b;if(a instanceof Date){var c=a.getHours();c<10&&(c="0"+c);var d=a.getMinutes();d<10&&(d="0"+d);var e=a.getSeconds();e<10&&(e="0"+e),b=c+":"+d+":"+e}else b=a;this.control.value=b||"",f&&f(b)}};var n=this;return m.addEventListener("input",function(){f&&f(m.value),n._callGCH()}),this},bindTime:function(a,b,c){return this.addTime(a,b,function(b){c[a]=b})}}; true?module.exports=j:undefined}();

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/undo-manager/lib/undomanager.js":
/*!******************************************************!*\
  !*** ./node_modules/undo-manager/lib/undomanager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Simple Javascript undo and redo.
https://github.com/ArthurClemens/Javascript-Undo-Manager
*/

;(function() {

	'use strict';

    function removeFromTo(array, from, to) {
        array.splice(from,
            !to ||
            1 + to - from + (!(to < 0 ^ from >= 0) && (to < 0 || -1) * array.length));
        return array.length;
    }

    var UndoManager = function() {

        var commands = [],
            index = -1,
            limit = 0,
            isExecuting = false,
            callback,
            
            // functions
            execute;

        execute = function(command, action) {
            if (!command || typeof command[action] !== "function") {
                return this;
            }
            isExecuting = true;

            command[action]();

            isExecuting = false;
            return this;
        };

        return {

            /*
            Add a command to the queue.
            */
            add: function (command) {
                if (isExecuting) {
                    return this;
                }
                // if we are here after having called undo,
                // invalidate items higher on the stack
                commands.splice(index + 1, commands.length - index);

                commands.push(command);
                
                // if limit is set, remove items from the start
                if (limit && commands.length > limit) {
                    removeFromTo(commands, 0, -(limit+1));
                }
                
                // set the current index to the end
                index = commands.length - 1;
                if (callback) {
                    callback();
                }
                return this;
            },

            /*
            Pass a function to be called on undo and redo actions.
            */
            setCallback: function (callbackFunc) {
                callback = callbackFunc;
            },

            /*
            Perform undo: call the undo function at the current index and decrease the index by 1.
            */
            undo: function () {
                var command = commands[index];
                if (!command) {
                    return this;
                }
                execute(command, "undo");
                index -= 1;
                if (callback) {
                    callback();
                }
                return this;
            },

            /*
            Perform redo: call the redo function at the next index and increase the index by 1.
            */
            redo: function () {
                var command = commands[index + 1];
                if (!command) {
                    return this;
                }
                execute(command, "redo");
                index += 1;
                if (callback) {
                    callback();
                }
                return this;
            },

            /*
            Clears the memory, losing all stored states. Reset the index.
            */
            clear: function () {
                var prev_size = commands.length;

                commands = [];
                index = -1;

                if (callback && (prev_size > 0)) {
                    callback();
                }
            },

            hasUndo: function () {
                return index !== -1;
            },

            hasRedo: function () {
                return index < (commands.length - 1);
            },

            getCommands: function () {
                return commands;
            },

            getIndex: function() {
                return index;
            },
            
            setLimit: function (l) {
                limit = l;
            }
        };
    };

	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return UndoManager;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"image-map-creator","version":"1.0.0-beta.0","description":"This is a simple map creator tool made with the p5.js library. I want it\r to be easy to use for both the end user and the developper.","main":"webpack.config.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1","watch":"webpack --env dev --watch","build":"webpack --env prod"},"repository":{"type":"git","url":"git+https://github.com/n-peugnet/image-map-creator.git"},"keywords":[],"author":"","license":"ISC","bugs":{"url":"https://github.com/n-peugnet/image-map-creator/issues"},"homepage":"https://github.com/n-peugnet/image-map-creator#readme","devDependencies":{"@types/p5":"^0.7.1","css-loader":"^1.0.1","style-loader":"^0.23.1","webpack":"^4.24.0","webpack-cli":"^3.1.2"},"dependencies":{"downloadjs":"^1.4.7","quicksettings":"^3.0.1","undo-manager":"^1.0.5"}};

/***/ }),

/***/ "./src/class.area.js":
/*!***************************!*\
  !*** ./src/class.area.js ***!
  \***************************/
/*! exports provided: Area, AreaCircle, AreaPoly, AreaRect, AreaDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaCircle", function() { return AreaCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaPoly", function() { return AreaPoly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaRect", function() { return AreaRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaDefault", function() { return AreaDefault; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _class_coord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class.coord */ "./src/class.coord.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p5 */ "p5");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);




class Area {
	/**
	 * @param {string} shape the type of area
	 * @param {Coord[]} coords the list of coordinates
	 * @param {string} href the link this area is going to point to
	 * @param {int} id the unique id
	 */
	constructor(shape, coords = [], href, title, id = 0) {
		this.setShape(shape);
		this.setCoords(coords);
		this.setHref(href);
		this.setTitle(title);
		this.setId(id);
	}

	static fromObject(o) {
		switch (o.shape) {
			case 'rect':
				return new AreaRect(o.coords.map(_class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"].fromObject), o.href, o.title, o.id);
			case 'circle':
				return new AreaCircle(o.coords.map(_class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"].fromObject), o.radius, o.href, o.title, o.id);
			case 'poly':
				return new AreaPoly(o.coords.map(_class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"].fromObject), o.href, o.title, o.id, o.closed);
			case 'default':
				return new AreaDefault(o.href, o.title);
			default:
				throw 'Not an area'
		}
	}

	setShape(shape) {
		this.shape = shape;
	}

	/**
	 * Adds a coordinate to the coords array, and returns it's new length
	 * @param {Coord} coord coordinate
	 */
	addCoord(coord) {
		return this.coords.push(coord);
	}

	/**
	 * @param {Coord[]} coords 
	 */
	setCoords(coords) {
		this.coords = coords;
	}

	getCoords(mode = "default") {
		switch (mode) {
			case "default":
			default:
				return this.coords.slice();
		}
	}

	getPoints() {
		return this.coords;
	}

	isEmpty() {
		return this.coords.length == 0;
	}

	/**
	 * @param {Area} area 
	 */
	equals(area) {
		return this.id == area.id;
	}

	copyCoords() {
		let copy = [];
		this.coords.forEach((val, index) => {
			copy[index] = new _class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"](val.x, val.y);
		});
		return copy;
	}

	updateLastCoord(coord) {
		this.coords[this.coords.length - 1] = coord;
	}

	//------------------------ Start Interface Movable -------------------------------
	move(coord) {
		let fcoord = this.firstCoord();
		if (coord != undefined) {
			fcoord.add(coord);
		}
	}

	getPosition() {
		return this.firstCoord();
	}

	setPosition(coord) {
		let move = this.coords[0].diff(coord);
		 this.move(move);
	}
	//------------------------- End Interface Movable --------------------------------

	isDrawable() {
		return this.coords.length >= 1;
	}

	isValidShape() {
		return this.isDrawable();
	}

	/**
	 * @param {Coord} coord 
	 */
	isOver(coord) {
		return false;
	}

	/**
	 * @param {Coord} coord 
	 * @param {number} tolerance
	 * @returns {Coord|false}
	 */
	isOverPoint(coord, tolerance) {
		let point = this.getPoints().find(c => {
			return _class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"].dist(coord, c) < tolerance;
		});
		return point ? point : false;
	}

	setHref(url) {
		this.href = url;
	}

	setTitle(title) {
		this.title = title;
	}

	setId(id) {
		this.id = id;
	}

	firstCoord() {
		return this.coords[0];
	}

	htmlCoords(dec, scale) {
		return this.getCoords("html").map(c => {
			return c.toHtml(dec);
		}).join(',');
	}

	toHtml(scale = 1) {
		let htmlCoords = this.htmlCoords(0, scale);
		let title = "";
		if (htmlCoords != "") {
			htmlCoords = `coords="${htmlCoords}"`;
		}
		if (this.title) {
			title = `title="${this.title}"`;
		}
		return `<area shape="${this.shape}" ${htmlCoords} href="${this.href}" alt="${this.href}" ${title} />`;
	}

	svgArea(scale) { }

	toSvg(scale = 1) {
		return `<a xlink:href="${this.href}">${this.svgArea(scale)}</a>`;
	}
}

class AreaCircle extends Area {
	/**
	 * @param {Coord[]} coords the list of coordinates
	 * @param {number} radius radius of the circle
	 * @param {string} href the link this area is going to point to
	 * @param {int} id the unique id
	 */
	constructor(coords = [], radius = 0, href, title, id) {
		super("circle", coords, href, title, id);
		this.radius = radius;
	}

	getCenter() {
		return this.firstCoord();
	}

	isValidShape() {
		return super.isValidShape() && this.radius > 0;
	}

	/**
	 * @param {Coord} coord 
	 */
	isOver(coord) {
		let center = this.getCenter();
		return _class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"].dist(coord, center) < this.radius;
	}

	updateLastCoord(coord) {
		let center = this.getCenter();
		this.radius = _class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"].dist(center, coord);
	}

	/**
	 * draw the area to the given p5 instance
	 * @param {p5} p5 
	 */
	display(p5) {
		p5.ellipse(this.getCenter().x, this.getCenter().y, this.radius * 2);
	}

	htmlCoords(dec, scale) {
		return this.getCenter().toHtml(dec, scale) + "," + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["round"])(this.radius, dec);
	}

	svgArea(scale) {
		let x = this.coords[0].toStr(0, 'x', scale);
		let y = this.coords[0].toStr(0, 'y', scale);
		let r = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["round"])(this.radius, 0);
		return `<circle cx="${x}" cy="${y}" r="${r}" />`;
	}
}
class AreaPoly extends Area {
	/**
	 * @param {Coord[]} coords the list of coordinates
	 * @param {string} href the link this area is going to point to
	 * @param {int} id the unique id
	 */
	constructor(coords = [], href, title, id, closed = false) {
		super("poly", coords, href, title, id);
		this.closed = closed;
	}

	isDrawable() {
		return this.coords.length >= 2;
	}

	isValidShape() {
		return super.isValidShape() && this.closed;
	}

	/**
	 * @param {Coord} coord 
	 */
	isOver(coord) {
		let x = coord.x;
		let y = coord.y;
		let cornersX = this.coords.map(c => { return c.x });
		let cornersY = this.coords.map(c => { return c.y });

		let i, j = cornersX.length - 1;
		let oddNodes = false;

		let polyX = cornersX;
		let polyY = cornersY;

		for (i = 0; i < cornersX.length; i++) {
			if ((polyY[i] < y && polyY[j] >= y || polyY[j] < y && polyY[i] >= y) && (polyX[i] <= x || polyX[j] <= x)) {
				oddNodes ^= (polyX[i] + (y - polyY[i]) / (polyY[j] - polyY[i]) * (polyX[j] - polyX[i]) < x);
			}
			j = i;
		}

		return oddNodes;
	}

	isClosable(coord, tolerance) {
		let dist = _class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"].dist(coord, this.firstCoord());
		return this.coords.length >= 4 && dist < tolerance;
	}

	getCoords(mode = "default") {
		let coords = super.getCoords();
		switch (mode) {
			case "default":
			default:
				if (this.closed) {
					coords.push(this.firstCoord());
				}
				return coords;
		}
	}

	close() {
		this.closed = true;
		this.coords.pop();
	}

	move(coord) {
		this.coords.map(c => c.add(coord));
	}

	/**
	 * draw the area to the given p5 instance
	 * @param {p5} p5 
	 */
	display(p5) {
		p5.beginShape();
		this.getCoords().forEach(c => p5.vertex(c.x, c.y));
		p5.endShape();
	}

	svgArea(scale) {
		let points = this.getCoords().map(c => {
			return c.toStr(0, 'x', scale) + ',' + c.toStr(0, 'y', scale);
		}).join(' ');
		return `<polygon points="${points}" />`;
	}
}

class AreaRect extends AreaPoly {
	/**
	 * @param {Coord[]} coords the list of coordinates
	 * @param {string} href the link this area is going to point to
	 * @param {int} id the unique id
	 */
	constructor(coords = [], href, title, id) {
		super(coords, href, title, id, true);
		if (this.coords.length > 0 && this.coords.length < 4) {
			let coord = this.firstCoord();
			this.coords = [
				coord,
				coord.clone(),
				coord.clone(),
				coord.clone(),
			];
		}
	}

	updateLastCoord(coord) {
		this.coords[1].x = coord.x
		this.coords[2] = coord;
		this.coords[3].y = coord.y;
	}

}

class AreaDefault extends Area {
	/**
	 * Constructor
	 * @param {string} href the link this area is going to point to
	 */
	constructor(href, title) {
		super("default", [], href, title);
		this.isDefault = true;
	}

	isDrawable() {
		return true;
	}

	isOver() {
		return true;
	}

	/**
	 * draw the area to the given p5 instance
	 * @param {p5} p5 
	 */
	display(p5) {
		p5.rect(0, 0, p5.getMap().width - 1, p5.getMap().height - 1);
	}

	svgArea(scale) {
		return '<rect x="0" y="0" width="100%" height="100%" />';
	}
}

/***/ }),

/***/ "./src/class.coord.js":
/*!****************************!*\
  !*** ./src/class.coord.js ***!
  \****************************/
/*! exports provided: Coord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coord", function() { return Coord; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


/**
 * Class representing a 2d xy coordinate
*/
class Coord {
	constructor(x, y) {
		this.set(x, y);
	}

	set(x, y) {
		this.x = x;
		this.y = y;
	}

	static fromObject(obj) {
		return new Coord(obj.x, obj.y);
	}

	/**
	 * returns the distance between two xy coordinates
	 * @param {Coord} coord1 
	 * @param {Coord} coord2 
	 */
	static dist(coord1, coord2) {
		return Math.sqrt(Math.pow(coord1.x - coord2.x, 2) + Math.pow(coord1.y - coord2.y, 2));
	}

	/**
	 *exchange a value between two xy coordinates
	 * @param {Coord} coord1 
	 * @param {Coord} coord2 
	 * @param {string} val
	 */
	static swap(coord1, coord2, val) {
		let tmp = coord1[val];
		coord1[val] = coord2[val];
		coord2[val] = tmp;
	}

	isEmpty() {
		return !this.x && !this.y;
	}

	oneIsEmpty() {
		return !this.x || !this.y
	}

	/**
	 * returns the sum of two xy coordinates
	 * @param {Coord} coord 
	 */
	sum(coord) {
		return new Coord(this.x + coord.x, this.y + coord.y);
	}

	/**
	 * Add the value of the given coordinate to the current one
	 * @param {Coord} coord 
	 */
	add(coord) {
		this.x += coord.x;
		this.y += coord.y;
	}

	/**
	 * returns the difference of two xy coordinates
	 * @param {Coord} coord 
	 */
	diff(coord) {
		return new Coord(this.x - coord.x, this.y - coord.y);
	}

	/**
	 * Substract the value of the given coordinate to the current one
	 * @param {Coord} coord 
	 */
	sub(coord) {
		this.x -= coord.x;
		this.y -= coord.y;
	}

	//------------------------ Start Interface Movable -------------------------------
	/**
	 * Alias of add
	 * @param {Coord} coord
	 */
	move(coord) {
		this.add(coord);
	}

	getPosition() {
		return this;
	}

	setPosition(coord) {
		this.set(coord.x, coord.y);
	}
	//------------------------- End Interface Movable --------------------------------

	clone() {
		return new Coord(this.x, this.y);
	}

	invert() {
		return new Coord(- this.x, -this.y);
	}

	toStr(dec, val, scale) {
		return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["round"])(this[val] * scale, dec)
	}

	toHtml(dec, scale = 1) {
		return this.toStr(dec, "x", scale) + "," + this.toStr(dec, "y", scale);
	}

}

/***/ }),

/***/ "./src/class.image-map.js":
/*!********************************!*\
  !*** ./src/class.image-map.js ***!
  \********************************/
/*! exports provided: ImageMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageMap", function() { return ImageMap; });
/* harmony import */ var _class_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.area */ "./src/class.area.js");


class ImageMap {

	/**
	 * Contructor
	 * @param {Area[]} areas 
	 * @param {string} name 
	* @param {boolean} hasDefaultArea
	 */
	constructor(width, height, areas = [], name, hasDefaultArea = false) {
		this.name = name;
		this.width = width;
		this.height = height;
		this.areas = areas;
		this.dArea = new _class_area__WEBPACK_IMPORTED_MODULE_0__["AreaDefault"]();
		this.hasDefaultArea = hasDefaultArea;
		this.lastId = 0;
	}

	setFromObject(obj) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				let value = obj[key];
				if (key == 'areas') {
					this.areas = value.map(_class_area__WEBPACK_IMPORTED_MODULE_0__["Area"].fromObject);
				} else if (key == 'dArea') {
					this.dArea = _class_area__WEBPACK_IMPORTED_MODULE_0__["Area"].fromObject(value);
				} else if (Object.keys(this).includes(key)) {
					this[key] = value;
				}
			}
		}
	}

	setName(name) {
		if (name) {
			this.name = name.replace(/\s+/g, "");
		}
	}

	setSize(width, height) {
		this.width = width;
		this.height = height;
	}

	setDefaultArea(bool) {
		this.hasDefaultArea = bool;
	}

	/**
	 * Returns a copy of the area of the imageMap
	 * @param {boolean} all with the default area (if exist) or not (default: true)
	 * @returns {Area[]} a copy of the areas
	 */
	getAreas(all = true) {
		let areas = this.areas.slice();
		if (all && this.hasDefaultArea) areas.push(this.dArea);
		return areas;
	}

	/**
	 * Adds an Area at the end of the areas array, and returns the last inserted Area's id
	 * @param {Area} area an area
	 */
	addArea(area, setId = true) {
		if (setId)
			area.setId(this.getNewId());
		this.areas.unshift(area);
		return area.id;
	}

	rmvArea(id) {
		let index = this.areaIndex(id);
		this.areas.splice(index, 1);
		return index;
	}

	/**
	 * Move an area up or down in the areas array
	 * @param {number} id 
	 * @param {number} direction 
	 */
	moveArea(id, direction) {
		let index = this.areaIndex(id);
		let area = this.areas[index];
		let nextIndex = index + direction;
		if (nextIndex < 0 || nextIndex >= this.areas.length)
			return false;
		this.rmvArea(id);
		this.insertArea(area, nextIndex);
		return nextIndex;
	}

	shiftArea() {
		return this.areas.shift();
	}

	popArea() {
		return this.areas.pop();
	}

	insertArea(area, index) {
		this.areas.splice(index, 0, area);
	}

	areaIndex(id) {
		return this.areas.findIndex(a => {
			return a.id == id;
		});
	}

	isFirstArea(id) {
		return this.areaIndex(id) == 0;
	}

	isLastArea(id) {
		return this.areaIndex(id) == this.areas.length - 1;
	}

	getNewId() {
		this.lastId++;
		return this.lastId;
	}

	toHtml(scale = 1) {
		let areas = [];
		this.getAreas().forEach(a => {
			if (a.isValidShape()) {
				areas.push('\t' + a.toHtml(scale));
			}
		});
		return '<map name="' + this.name + '" id="' + this.name + '">\n' + areas.join('\n') + '\n</map>';
	}

	toSvg(scale = 1) {
		let areas = [];
		this.getAreas(false).forEach(a => {
			if (a.isValidShape()) {
				areas.push('\t' + a.toSvg(scale));
			}
		});
		let str = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + this.width + '" height="' + this.height + '">\n';
		str += areas.join('\n');
		str += '\n</svg>';
		return str;
	}

	/** Removes every areas from the areas array */
	clearAreas() {
		this.areas = [];
	}

	setAreas(areas) {
		this.areas = areas;
	}

}

/***/ }),

/***/ "./src/class.selection.js":
/*!********************************!*\
  !*** ./src/class.selection.js ***!
  \********************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _class_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.area */ "./src/class.area.js");
/* harmony import */ var _class_coord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class.coord */ "./src/class.coord.js");



class Selection {

	/**
	 * @param {Area} area  area
	 * @param {Coord} point  point
	 */
	constructor(area = null, point = null) {
		this.area = area;
		this.point = point;
		this.setOrigin(new _class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"]);
	}

	/**
	 * 
	 * @param {Coord} coord 
	 */
	setOrigin(coord = null) {
		this.origin = coord.clone();
	}

	autosetOrigin() {
		if (!this.isEmpty()) {
			this.setOrigin(this.getPosition());
		}
	}

	/**
	 * 
	 * @param {Area} area 
	 * @param {Coord} point 
	 * @param {Coord} origin 
	 */
	update(area, point) {
		this.area = area;
		this.point = point;
		this.autosetOrigin();
	}

	getArea() {
		return this.area ? this.area : false;
	}

	getPoint() {
		return this.point ? this.point : false;
	}

	value() {
		if (this.point) {
			return this.getPoint();
		} else {
			return this.getArea();
		}
	}

	getMove() {
		return this.getPosition().diff(this.origin);
	}

	clear() {
		this.area = null;
		this.point = null;
		this.origin = new _class_coord__WEBPACK_IMPORTED_MODULE_1__["Coord"]();
	}

	isEmpty() {
		return !this.area && !this.point;
	}

	//------------------------ Start Interface Movable -------------------------------
	move(coord) {
		if (this.point) {
			this.point.move(coord);
		} else {
			this.area.move(coord);
		}
	}

	getPosition() {
		if (this.point) {
			return this.point.getPosition();
		} else {
			return this.area.getPosition();
		}
	}

	setPosition(coord) {
		if (this.point) {
			this.point.setPosition(coord);
		} else {
			this.area.setPosition(coord);
		}
	}
	//------------------------- End Interface Movable --------------------------------
}

/***/ }),

/***/ "./src/p5.bg-layer.js":
/*!****************************!*\
  !*** ./src/p5.bg-layer.js ***!
  \****************************/
/*! exports provided: BgLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgLayer", function() { return BgLayer; });
/* harmony import */ var _p5_image_map_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p5.image-map-creator */ "./src/p5.image-map-creator.js");


/**
 * Class representing the semi transparent layer which can appear on top of the background
 * @param {number} speed the speed of the opacity animation (1-255, default 15)
 */
class BgLayer {

	/**
	 * @param {imageMapCreator} iMap
	 * @param {number} speed
	 */
	constructor(iMap, speed = 15) {
		this.speed = speed;
		this.alpha = 0;
		this.over = false;
		this.p5 = iMap.p5;
	}
	appear() {
		this.over = true;
	}
	disappear() {
		this.over = false;
	}
	display() {
		if (this.over) {
			if (this.alpha < 100)
				this.alpha += this.speed;
		}
		else {
			if (this.alpha > 0)
				this.alpha -= this.speed;
		}
		this.p5.noStroke();
		this.p5.fill(255, 255, 255, this.alpha);
		this.p5.rect(
			iMap.trueX(0),
			iMap.trueY(0),
			this.p5.width / iMap.view.scale,
			this.p5.height / iMap.view.scale
		);
	}
}

/***/ }),

/***/ "./src/p5.image-map-creator.js":
/*!*************************************!*\
  !*** ./src/p5.image-map-creator.js ***!
  \*************************************/
/*! exports provided: imageMapCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageMapCreator", function() { return imageMapCreator; });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony import */ var _class_image_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class.image-map */ "./src/class.image-map.js");
/* harmony import */ var _p5_bg_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./p5.bg-layer */ "./src/p5.bg-layer.js");
/* harmony import */ var _class_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class.area */ "./src/class.area.js");
/* harmony import */ var _class_coord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class.coord */ "./src/class.coord.js");
/* harmony import */ var _class_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class.selection */ "./src/class.selection.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! downloadjs */ "./node_modules/downloadjs/download.js");
/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var undo_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! undo-manager */ "./node_modules/undo-manager/lib/undomanager.js");
/* harmony import */ var undo_manager__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(undo_manager__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var quicksettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! quicksettings */ "./node_modules/quicksettings/quicksettings.min.js");
/* harmony import */ var quicksettings__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(quicksettings__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! p5 */ "p5");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/contextmenu/contextmenu */ "./lib/contextmenu/contextmenu.js");
/* harmony import */ var _lib_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_contextmenu_contextmenu_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/contextmenu/contextmenu.css */ "./lib/contextmenu/contextmenu.css");
/* harmony import */ var _lib_contextmenu_contextmenu_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lib_contextmenu_contextmenu_css__WEBPACK_IMPORTED_MODULE_12__);














/**
 */
class imageMapCreator {
	constructor(width = 600, height = 450) {
		this.width = width;
		this.height = height;
		this.tool = "polygon";
		this.drawingTools = ["rectangle", "circle", "polygon"];
		this.settings;
		this.menu = {
			SetUrl: {
				onSelect: (target, key, item, area) => { this.setAreaUrl(area); },
				label: "Set url",
			},
			SetTitle: {
				onSelect: (target, key, item, area) => { this.setAreaTitle(area); },
				label: "Set title",
			},
			Delete: (target, key, item, area) => { this.deleteArea(area); },
			MoveFront: {
				onSelect: (target, key, item, area) => { this.moveArea(area, -1); },
				enabled: true,
				label: "Move Forward",
			},
			MoveBack: {
				onSelect: (target, key, item, area) => { this.moveArea(area, 1); },
				enabled: true,
				label: "Move Backward",
			}
		};
		this.tempArea = new _class_area__WEBPACK_IMPORTED_MODULE_3__["Area"]();
		this.selected = new _class_selection__WEBPACK_IMPORTED_MODULE_5__["Selection"]();
		this.hoveredArea = false;
		this.hoveredPoint = false;
		this.map = new _class_image_map__WEBPACK_IMPORTED_MODULE_1__["ImageMap"](width, height);
		this.undoManager = new undo_manager__WEBPACK_IMPORTED_MODULE_8___default.a();
		this.img = {};
		this.view = {
			scale: 1,
			transX: 0,
			transY: 0
		}
		this.zoomParams = {
			min: 0.03,
			max: 3,
			sensativity: 0.001
		}
		this.magnetism = true;
		this.fusion = false;
		this.tolerance = 6;
	}

	//---------------------------- p5 Sketch ----------------------------------

	/**
	 * Override p5 methods
	 * @param {p5} p5
	 */
	sketch(p5) {
		this.p5 = p5;
		this.bgLayer = new _p5_bg_layer__WEBPACK_IMPORTED_MODULE_2__["BgLayer"](this);

		p5.setup = () => {
			let canvas = p5.createCanvas(this.width, this.height);
			canvas.drop(this.handeFile.bind(this)).dragLeave(this.onLeave.bind(this)).dragOver(this.onOver.bind(this));
			this.settings = quicksettings__WEBPACK_IMPORTED_MODULE_9___default.a.create(p5.width + 5, 0, "Image-map Creator", p5.canvas.parentElement)
				.setDraggable(false)
				.addText("Map Name", "", (v) => { this.map.setName(v) })
				.addDropDown("Tool", ["polygon", "rectangle", "circle", "select", "delete", "test"], (v) => { this.setTool(v.value) })
				.addBoolean("Default Area", this.map.hasDefaultArea, (v) => { this.setDefaultArea(v) })
				.addButton("Undo", this.undoManager.undo)
				.addButton("Redo", this.undoManager.redo)
				.addButton("Clear", this.clearAreas.bind(this))
				.addButton("Generate Html", () => { this.settings.setValue("Output", this.map.toHtml()) })
				.addButton("Generate Svg", () => { this.settings.setValue("Output", this.map.toSvg()) })
				.addTextArea("Output")
				.addButton("Save", this.save.bind(this));
			// Fix for oncontextmenu
			p5.canvas.addEventListener("contextmenu", (e) => { e.preventDefault(); });
			// Fix for middle click mouse down triggers scroll on windows
			p5.canvas.addEventListener("mousedown", (e) => { e.preventDefault(); });
			// Select all onclick on the Output field
			document.getElementById("Output").setAttribute("onFocus", "this.select();");
		}

		p5.draw = () => {
			this.updateTempArea();
			this.updateHovered();
			this.setCursor();
			this.setOutput();
			this.setBackground();
			this.setTitle(this.hoveredArea);
			p5.translate(this.view.transX, this.view.transY);
			p5.scale(this.view.scale);
			this.drawImage();
			this.bgLayer.display();
			this.drawAreas();
		}

		p5.getMap = () => {
			return this.map;
		}

		//------------------------------ p5 Events -----------------------------------

		p5.mousePressed = () => {
			if (this.mouseIsHoverSketch()) {
				let coord = this.drawingCoord();
				if (p5.mouseButton == p5.LEFT && !_lib_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11___default.a.isOpen()) {
					switch (this.tool) {
						case "circle":
						case "rectangle":
							this.setTempArea(coord);
							break;
						case "polygon":
							if (this.tempArea.isEmpty()) {
								this.setTempArea(coord);
							} else if (this.tempArea.isClosable(this.mCoord(), this.tolerance / this.view.scale)) {
								this.tempArea.close();
								if (this.tempArea.isValidShape())
									this.createArea(this.tempArea);
								this.tempArea = new _class_area__WEBPACK_IMPORTED_MODULE_3__["Area"]();
							} else {
								this.tempArea.addCoord(this.mCoord());
							}
							break;
						case "select":
							this.selected.update(this.hoveredArea, this.hoveredPoint);
							break;
					}
				}
			}
		}

		p5.mouseDragged = () => {
			if (this.mouseIsHoverSketch() && !_lib_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11___default.a.isOpen()) {
				if (p5.mouseButton == p5.LEFT) {
					switch (this.tool) {
						case "select":
							if (this.selected.value()) {
								if (this.selected.getPoint()) {
									this.selected.setPosition(this.drawingCoord());
								} else {
									let mvmt = new _class_coord__WEBPACK_IMPORTED_MODULE_4__["Coord"](this.mX() - this.trueX(p5.pmouseX), this.mY() - this.trueY(p5.pmouseY));
									this.selected.move(mvmt);
								}
							}
							break;
					}
				} else if (p5.mouseButton == p5.CENTER) {
					this.view.transX += p5.mouseX - p5.pmouseX;
					this.view.transY += p5.mouseY - p5.pmouseY;
				}
			}
		}

		p5.mouseReleased = (e) => {
			switch (this.tool) {
				case "rectangle":
				case "circle":
					if (this.tempArea.isValidShape())
						this.createArea(this.tempArea);
					this.tempArea = new _class_area__WEBPACK_IMPORTED_MODULE_3__["Area"]();
					break;
				case "select":
					let select = this.selected.value();
					if (select) {
						let move = this.selected.getMove();
						this.undoManager.add({
							undo: () => {
								select.move(move.invert());
							},
							redo: () => {
								select.move(move);
							}
						});
					}
					break;
			}
			this.onClick(e);
			this.bgLayer.disappear();
		}

		p5.mouseWheel = (e) => {
			if (this.mouseIsHoverSketch()) {
				let coefZoom = this.view.scale * this.zoomParams.sensativity * - e.delta;
				this.zoom(coefZoom);
				return false;
			}
		}

		/**
		 * @param {KeyboardEvent} e
		 */
		p5.keyPressed = (e) => {
			if (e.composed && e.ctrlKey) {
				switch (e.key) {
					case 's':
						this.save();
						break;
					case 'z':
						this.undoManager.undo();
						break;
					case 'y':
						this.undoManager.redo();
						break;
					default:
						return true;
				}
				return false;
			} else if (this.tool == "polygon" && e.keyCode == this.p5.ESCAPE) {
				this.tempArea = new _class_area__WEBPACK_IMPORTED_MODULE_3__["Area"]();
			}
		}
	}

	//---------------------------- Functions ----------------------------------

	trueX(coord) {
		return (coord - this.view.transX) / this.view.scale;
	}

	trueY(coord) {
		return (coord - this.view.transY) / this.view.scale;
	}

	mX() {
		return this.trueX(this.p5.mouseX);
	}

	mY() {
		return this.trueY(this.p5.mouseY);
	}

	/**
	 * Get the true coordinate of the mouse relative to the imageMap
	 * @returns {Coord}
	 */
	mCoord() {
		return new _class_coord__WEBPACK_IMPORTED_MODULE_4__["Coord"](this.mX(), this.mY());
	}

	/**
	 * Get the coordinate of the mouse for drawing
	 * @returns {Coord}
	 */
	drawingCoord() {
		let coord = this.mCoord();
		coord = this.magnetism ? this.hoveredPoint ? this.hoveredPoint : coord : coord;
		if (!this.fusion) {
			coord = coord.clone();
		}
		return coord;
	}

	mouseIsHoverSketch() {
		return this.p5.mouseX <= this.p5.width && this.p5.mouseX >= 0 && this.p5.mouseY <= this.p5.height && this.p5.mouseY >= 0;
	}

	/**
	 * Sets hoveredPoint and hoveredArea excluding currently selected Area
	 */
	updateHovered() {
		this.hoveredPoint = false;
		let allAreas = this.map.getAreas();
		let area = allAreas.find(a => {
			if (a.equals(this.selected.getArea())) {
				return false;
			}
			if (this.tool != "test") {
				let point = a.isOverPoint(this.mCoord(), this.tolerance / this.view.scale)
				if (point) {
					this.hoveredPoint = point;
					return true;
				}
			}
			if (a.isOver(this.mCoord())) {
				return true;
			}
			return false;
		});
		this.hoveredArea = area ? area : false;
	}

	onClick(event) {
		if (this.mouseIsHoverSketch()) {
			if (this.hoveredArea) {
				if (this.p5.mouseButton == this.p5.RIGHT) {
					this.selected.update(this.hoveredArea);
					this.menu.MoveFront.enabled = !(this.map.isFirstArea(this.hoveredArea.id) || this.hoveredArea.shape == 'default');
					this.menu.MoveBack.enabled = !(this.map.isLastArea(this.hoveredArea.id) || this.hoveredArea.shape == 'default');
					_lib_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11___default.a.display(event, this.menu, {
						position: "click",
						data: this.hoveredArea
					});
					return false; // doesen't work as expected
				} else if (this.p5.mouseButton == this.p5.LEFT && !_lib_contextmenu_contextmenu__WEBPACK_IMPORTED_MODULE_11___default.a.isOpen()) {
					switch (this.tool) {
						case "test":
							Object(_utils__WEBPACK_IMPORTED_MODULE_6__["openWindow"])(this.hoveredArea.href);
							break;
						case "delete":
							this.deleteArea(this.hoveredArea);
							break;
					}
				}
			}
		}
		this.selected.clear();
	}

	onOver(evt) {
		this.bgLayer.appear();
		evt.preventDefault();
	}

	onLeave() {
		this.bgLayer.disappear();
	}

	handeFile(file) {
		if (file.type == "image") {
			this.img.data = this.p5.loadImage(file.data, img => this.resetView(img));
			this.img.file = file.file;
			if (!this.map.name) {
				this.map.setName(file.name);
				this.settings.setValue("Map Name", this.map.name);
			}
		} else if (file.subtype == 'json') {
			fetch(file.data)
				.then(res => res.blob())
				.then(blob => {
					let reader = new FileReader();
					reader.onload = () => {
						let json = reader.result;
						console.log(json);
						this.importMap(json);
					};
					reader.readAsText(blob);
				});
		}
		this.bgLayer.disappear();
	}

	resetView(img) {
		this.view.scale = 1;
		this.view.transX = 0;
		this.view.transY = 0;
		let xScale = this.p5.width / img.width;
		let yScale = this.p5.height / img.height;
		if (xScale < this.view.scale)
			this.view.scale = xScale;
		if (yScale < this.view.scale)
			this.view.scale = yScale;
		this.map.setSize(img.width, img.height);
	}

	zoom(coef) {

		let newScale = this.view.scale + coef;
		if (newScale > this.zoomParams.min && newScale < this.zoomParams.max) {
			let mouseXToOrigin = this.mX();
			let mouseYToOrigin = this.mY();
			let transX = mouseXToOrigin * coef;
			let transY = mouseYToOrigin * coef;

			this.view.scale = newScale;
			this.view.transX -= transX;
			this.view.transY -= transY;
		}
	}

	drawImage() {
		if (this.img.data)
			this.p5.image(this.img.data, 0, 0, this.img.data.width, this.img.data.height);
	}

	drawAreas() {
		let allAreas = [this.tempArea].concat(this.map.getAreas());
		for (let i = allAreas.length; i--;) {
			let area = allAreas[i];
			this.setAreaStyle(area);
			if (area.isDrawable())
				area.display(this.p5);
		}
		if (this.hoveredPoint) {
			let point = this.hoveredPoint;
			this.p5.fill(0);
			this.p5.noStroke();
			this.p5.ellipse(point.x, point.y, 6 / this.view.scale)
		}
	}

	setTool(value) {
		this.tool = value;
		this.tempArea = new _class_area__WEBPACK_IMPORTED_MODULE_3__["Area"]();
	}

	setCursor() {
		if (this.drawingTools.includes(this.tool)) {
			switch (this.tool) {
				case "polygon":
					if (!this.tempArea.isEmpty() && this.tempArea.isClosable(this.mCoord(), 5 / this.view.scale)) {
						this.p5.cursor(this.p5.HAND);
						break;
					}
				default:
					this.p5.cursor(this.p5.CROSS);
			}
		} else {
			this.p5.cursor(this.p5.ARROW);
			if (this.hoveredArea) {
				switch (this.tool) {
					case "test":
					case "delete":
						this.p5.cursor(this.p5.HAND);
						break;
					case "select":
						if (!this.hoveredPoint) {
							this.p5.cursor(this.p5.MOVE);
						}
						break;
				}
			}
		}
	}

	setOutput() {
		switch (this.tool) {
			case "test":
			case "select":
				if (this.mouseIsHoverSketch()) {
					let href = this.hoveredArea ? this.hoveredArea.href : "none";
					this.settings.setValue("Output", href);
				}
				break;
		}
	}

	setBackground() {
		this.p5.background(200);
		if (!this.img.data) {
			this.p5.noStroke();
			this.p5.fill(0);
			this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
			this.p5.textSize(15);
			let text = 'Drag and drop an image and/or a .map.json save file here';
			this.p5.text(text, this.p5.width / 2, this.p5.height / 2);
		}
	}

	/**
	 * Set the title of the canvas from an area
	 * @param {Area} area
	 */
	setTitle(area) {
		if (this.tool == "test" && area && area.title) {
			this.p5.canvas.setAttribute("title", area.title);
		} else {
			this.p5.canvas.removeAttribute("title");
		}
	}

	setAreaStyle(area) {
		let color = this.p5.color(255, 255, 255, 178);
		if (this.tool == "test") {
			color = this.p5.color(255, 0);
		}
		if ((this.mouseIsHoverSketch() && area == this.hoveredArea && this.selected.getArea() == false && (
			this.tool == "delete" ||
			this.tool == "select")) ||
			this.selected.getArea() == area) {
			color = this.p5.color(255, 200, 200, 178); // highlight (set color red)
		}
		this.p5.fill(color);
		this.p5.strokeWeight(1 / this.view.scale);
		if (this.tool == "test") {
			this.p5.noStroke();
		} else {
			this.p5.stroke(0);
		}
	}

	setTempArea(coord) {
		let coords = [coord];
		switch (this.tool) {
			case "rectangle":
				this.tempArea = new _class_area__WEBPACK_IMPORTED_MODULE_3__["AreaRect"](coords);
				break;
			case "circle":
				this.tempArea = new _class_area__WEBPACK_IMPORTED_MODULE_3__["AreaCircle"](coords);
				break;
			case "polygon":
				this.tempArea = new _class_area__WEBPACK_IMPORTED_MODULE_3__["AreaPoly"](coords);
				this.tempArea.addCoord(coord);
				break;
		}
	}

	updateTempArea() {
		let coord = this.drawingCoord();
		if (!this.tempArea.isEmpty()) {
			this.tempArea.updateLastCoord(coord);
		}
	}

	exportMap() {
		return JSON.stringify({
			version: _package_json__WEBPACK_IMPORTED_MODULE_0__["version"],
			map: this.map
		});
	}

	save() {
		let blob = new Blob([this.exportMap()], { encoding: "UTF-8", type: "text/plain;charset=UTF-8" })
		downloadjs__WEBPACK_IMPORTED_MODULE_7___default()(blob, `${this.map.name}.map.json`, 'application/json')
	}

	importMap(json) {
		let object = JSON.parse(json);
		let objectMap = object.map;
		this.map.setFromObject(objectMap);
		this.settings.setValue("Map Name", objectMap.name);
		this.settings.setValue("Default Area", objectMap.hasDefaultArea);
		this.reset();
	}

	/**
	 * Add an area to the imageMap object
	 * @param {Area} area
	 */
	createArea(area) {
		this.map.addArea(area);
		this.undoManager.add({
			undo: () => {
				area = this.map.shiftArea();
			},
			redo: () => {
				this.map.addArea(area, false);
			}
		});
	}

	/**
	 * remove an area from the imageMap object
	 * @param {Area} area
	 */
	deleteArea(area) {
		let id = area.id;
		if (id === 0) {
			this.settings.setValue("Default Area", false);
		} else {
			let index = this.map.rmvArea(id);
			this.undoManager.add({
				undo: () => {
					this.map.insertArea(area, index);
				},
				redo: () => {
					this.map.rmvArea(id);
				}
			});
		}
	}

	/**
	 * Move an area forward or backward
	 * @param {Area} area
	 */
	moveArea(area, direction) {
		if (this.map.moveArea(area.id, direction) !== false) {
			this.undoManager.add({
				undo: () => {
					this.map.moveArea(area.id, -direction);
				},
				redo: () => {
					this.map.moveArea(area.id, direction);
				}
			});
		}
	}

	/**
	 * Set the url of an area
	 * @param {Area} area
	 */
	setAreaUrl(area) {
		let href = area.href;
		let input = prompt("Enter the pointing url of this area", href ? href : "http://");
		if (input != null) {
			area.setHref(input);
			this.undoManager.add({
				undo: () => {
					area.setHref(href);
				},
				redo: () => {
					area.setHref(input);
				}
			});
		}
	}

	/**
	 * Set the title of an area
	 * @param {Area} area
	 */
	setAreaTitle(area) {
		let title = area.title;
		let input = prompt("Enter the title of this area", title ? title : "");
		if (input != null) {
			area.setTitle(input);
			this.undoManager.add({
				undo: () => {
					area.setTitle(title);
				},
				redo: () => {
					area.setTitle(input);
				}
			});
		}
	}

	setDefaultArea(bool) {
		this.map.setDefaultArea(bool);
		this.undoManager.add({
			undo: () => {
				this.map.setDefaultArea(!bool); // semble redondant
				this.settings.setValue("Default Area", !bool)
			},
			redo: () => {
				this.map.setDefaultArea(bool); // semble redondant
				this.settings.setValue("Default Area", bool)
			}
		});
	}

	clearAreas() {
		let areas = this.map.getAreas(false);
		this.map.clearAreas();
		this.undoManager.add({
			undo: () => {
				this.map.setAreas(areas);
			},
			redo: () => {
				this.map.clearAreas();
			}
		});
	}

	reset() {
		this.undoManager.clear();
	}
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: between, round, openWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openWindow", function() { return openWindow; });
function between(val, refA, refB, included = true) {
	if (refA > refB) {
		let refT = refA;
		refA = refB;
		refB = refT;
	}
	return included ? val >= refA && val <= refB : val > refA && val < refB
}

function round(x, digits) {
	return parseFloat(x.toFixed(digits))
}

function openWindow(url, width = 400, height = 300) {
	window.open(url, "_blank", `width=${width},height=${height}`);
}

/***/ }),

/***/ "p5":
/*!*********************!*\
  !*** external "p5" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["p5"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbnRleHRtZW51L2NvbnRleHRtZW51LmNzcz85YzY0Iiwid2VicGFjazovLy8uL2xpYi9jb250ZXh0bWVudS9jb250ZXh0bWVudS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29udGV4dG1lbnUvY29udGV4dG1lbnUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG93bmxvYWRqcy9kb3dubG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVpY2tzZXR0aW5ncy9xdWlja3NldHRpbmdzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5kby1tYW5hZ2VyL2xpYi91bmRvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MuYXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MuY29vcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzLmltYWdlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Muc2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wNS5iZy1sYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcDUuaW1hZ2UtbWFwLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInA1XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQSxjQUFjLG1CQUFPLENBQUMsOEhBQTREOztBQUVsRiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0MsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLFlBQVks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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxJQUFJO0FBQ0o7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pwQkE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLHFDQUFxQyxNQUFNLFVBQVUsT0FBTztBQUM1RCxDOzs7Ozs7Ozs7OztBQ2ZBLGFBQWEsK0JBQStCLEVBQUUsSSIsImZpbGUiOiJpbWFnZS1tYXAtY3JlYXRvci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wNS5pbWFnZS1tYXAtY3JlYXRvci5qc1wiKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbnRleHRtZW51LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb250ZXh0bWVudS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NvbnRleHRtZW51LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxyXG4gKiBCYXNpYyBDb250ZXh0IE1lbnUgLSB2MC4wLjFcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDE1XHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuICpcclxuICogVGhpcyBpcyBhbiBleHRyZW1lbHkgYmFzaWMgY29udGV4dCBtZW51IGxpYnJhcnkgZm9yIEphdmFTY3JpcHQuXHJcbiAqIEl0IGhhcyBubyBkZXBlbmRlbmNpZXMuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKlxyXG4gKiAvLyBUaGUgbWVudSBvYmplY3QgY29udGFpbnMgYSBrZXkgYWxvbmcgd2l0aCBhbiBvYmplY3QgZGVzY3JpYmluZ1xyXG4gKiAvLyB0aGUgaXRlbSwgb3IgYSBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgaXRlbSBpcyBjbGlja2VkLlxyXG4gKiAvL1xyXG4gKiAvLyBUaGUga2V5IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHdoaWNoIG1lbnUgb3B0aW9uIHdhcyBjbGlja2VkXHJcbiAqIC8vIGluIGFuIG9uU2VsZWN0IGhhbmRsZXIuIFRoZSBrZXkgaXMgYWxzbyB1c2VkIHRvIHBlcmZvcm0gYWN0aW9ucyxcclxuICogLy8gc3VjaCBhcyBkaXNhYmxlIG9yIGVuYWJsZSwgb24gdGhlIG1lbnUgaXRlbS5cclxuICpcclxuICogdmFyIG1lbnUgPSB7XHJcbiAqICAgICAvLyBCYXNpYyBtZW51IG9wdGlvbjogS2V5IGFuZCBvblNlbGVjdFxyXG4gKiAgICAgXCJOZXdcIiA6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7IC4uLiB9LFxyXG4gKlxyXG4gKiAgICAgLy8gTW9yZSBhZHZhbmNlZCBvcHRpb25zXHJcbiAqICAgICBcIk9wZW5cIiA6IHtcclxuICogICAgICAgICBvblNlbGVjdCA6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7IC4uLiB9LFxyXG4gKiAgICAgICAgIGVuYWJsZWQgOiB0cnVlLCAvLyBVc2UgZmFsc2UgZm9yIGRpc2FibGVkLCBkZWZhdWx0IHRydWVcclxuICogICAgICAgICB0ZXh0IDogXCJPcGVuLi4uXCIsIC8vIE92ZXJyaWRlcyB0aGUga2V5LCBhbHdheXMgdXNlIGlmIGFycmF5XHJcbiAqICAgICAgICAgdGl0bGUgOiBcIk9wZW4gYSBmaWxlXCIgLy8gVGl0bGUgYXR0cmlidXRlIGZvciBtZW51IGl0ZW1cclxuICogICAgIH0sXHJcbiAqXHJcbiAqICAgICAvLyBNb3JlIHBhcmFtZXRlcnMgaW4gb25TZWxlY3QgZnVuY3Rpb25cclxuICogICAgIFwiU2F2ZVwiIDoge1xyXG4gKiAgICAgICAgIC8vIHRhcmdldCA6IERPTSBvYmplY3QgdGhhdCB3YXMgY2xpY2tlZCB0byBvcGVuIG1lbnVcclxuICogICAgICAgICAvLyBrZXkgOiBUaGUga2V5IG9mIHRoZSBtZW51IG9iamVjdCwgaW4gdGhpcyBjYXNlLCBcIlNhdmVcIlxyXG4gKiAgICAgICAgIC8vIGl0ZW0gOiBET00gb2JqZWN0IG9mIHRoZSBtZW51IGl0ZW0gdGhhdCB3YXMgY2xpY2tlZFxyXG4gKiAgICAgICAgIG9uU2VsZWN0IDogZnVuY3Rpb24oIHRhcmdldCwga2V5LCBpdGVtICkge1xyXG4gKiAgICAgICAgICAgICAuLi5cclxuICogICAgICAgICB9XHJcbiAqICAgICB9XHJcbiAqIH1cclxuICpcclxuICogLy8gQSBzZWxlY3RvciBjYW4gYmUgYSBDU1MtbGlrZSBzZWxlY3RvclxyXG4gKiBzZWxlY3RvciA9IFwiLm1lbnVzXCI7XHJcbiAqXHJcbiAqIC8vIE9yIGEgalF1ZXJ5IHNlbGVjdG9yXHJcbiAqIHNlbGVjdG9yID0gJCggXCIubWVudXNcIiApXHJcbiAqXHJcbiAqIC8vIE9yIGEgRE9NIG9iamVjdFxyXG4gKiBzZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcIm1lbnVcIiApXHJcbiAqXHJcbiAqIC8vIE9yIGEgTm9kZUxpc3RcclxuICogc2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBcIm1lbnVzXCIgKVxyXG4gKlxyXG4gKiAvLyBBdHRhY2ggYSBtZW51XHJcbiAqIENvbnRleHRNZW51LmF0dGFjaCggc2VsZWN0b3IsIG1lbnUgKTtcclxuICpcclxuICogLy8gQXR0YWNoIG1lbnUgd2l0aCBvcHRpb25zXHJcbiAqIENvbnRleHRNZW51LmF0dGFjaCggXCIubWVudXNcIiwgbWVudSwge1xyXG4gKiAgICAgZXZlbnQgOiBcImNsaWNrXCIsIC8vIEFueSB2YWxpZCBtb3VzZS90b3VjaCBldmVudFxyXG4gKiAgICAgcG9zaXRpb24gOiBcImJvdHRvbVwiLCAvLyBPbmUgb2YgYm90dG9tLCB0b3AsIGxlZnQsIHJpZ2h0LCBvciBjbGlja1xyXG4gKiAgICAgaG9yaXpvbnRhbE9mZnNldCA6IDAsIC8vIEFkZCBob3Jpem9udGFsIG9mZnNldCB0byBwb3NpdGlvbiBvZiBtZW51XHJcbiAqICAgICB2ZXJ0aWNhbE9mZnNldCA6IDAsIC8vIEFkZCB2ZXJ0aWNhbCBvZmZzZXQgdG8gcG9zaXRpb24gb2YgbWVudVxyXG4gKiB9ICk7XHJcbiAqXHJcbiAqIC8vIERpc2FibGUgYSBtZW51IGl0ZW1cclxuICogQ29udGV4dE1lbnUuZGlzYWJsZSggc2VsZWN0b3IsIFwiQ2xvc2VcIiApO1xyXG4gKlxyXG4gKiAvLyBFbmFibGUgYSBtZW51IGl0ZW1cclxuICogQ29udGV4dE1lbnUuZW5hYmxlKCBzZWxlY3RvciwgXCJDbG9zZVwiICk7XHJcbiAqXHJcbiAqL1xyXG4oIGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5cdHZhciBjb25mID0ge1xyXG5cdFx0ZXZlbnQgOiBcImNsaWNrXCIsXHJcblx0XHRwb3NpdGlvbiA6IFwiYm90dG9tXCIsXHJcblx0XHRob3Jpem9udGFsT2Zmc2V0IDogMCxcclxuXHRcdHZlcnRpY2FsT2Zmc2V0IDogMCxcclxuXHRcdGRhdGEgOiB7fSBcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBWYXJpYWJsZSBpbmRpY2F0aW5nIGlmIGEgbWVudSBpcyBvcGVuXHJcblx0ICogQHR5cGUge2Jvb2xlYW59XHJcblx0ICovXHJcblx0dmFyIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVGFyZ2V0IG9iamVjdCBvZiBjb250ZXh0IG1lbnUuIFRoaXMgaXMgdGhlIERPTSBvYmplY3QgY2xpY2tlZFxyXG5cdCAqIG9uIHRvIG9wZW4gdGhlIGNvbnRleHQgbWVudS5cclxuXHQgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0dmFyIHRhcmdldCA9IG51bGw7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbGFzcyB0byBhcHBseSB0byBjb250ZXh0IG1lbnVcclxuXHQgKiBAdHlwZSBTdHJpbmdcclxuXHQgKi9cclxuXHR2YXIgbWVudUNsYXNzTmFtZSA9IFwiY29udGV4dC1tZW51XCI7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbGFzcyB0byBhcHBseSB0byBjb25leHQgbWVudSBpdGVtc1xyXG5cdCAqIEB0eXBlIFN0cmluZ1xyXG5cdCAqL1xyXG5cdHZhciBpdGVtQ2xhc3NOYW1lID0gXCJjb250ZXh0LW1lbnUtaXRlbVwiO1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2xhc3MgdG8gYXBwbHkgdG8gY29uZXh0IG1lbnUgaXRlbXMgd2hpY2ggYXJlIGRpc2FibGVkXHJcblx0ICogQHR5cGUgU3RyaW5nXHJcblx0ICovXHJcblx0dmFyIGl0ZW1DbGFzc05hbWVEaXNhYmxlZCA9IFwiY29udGV4dC1tZW51LWl0ZW0tZGlzYWJsZWRcIjtcclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvLyBIZWxwZXIgZnVuY3Rpb25zXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayBpZiBvYmplY3QgaXMgYSBmdW5jdGlvblxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtNaXhlZH0gb2JqXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0dmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiggb2JqICkge1xyXG5cdFx0cmV0dXJuICEhKCBvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jYWxsICYmIG9iai5hcHBseSApO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgaWYgb2JqZWN0IGlzIGEgc3RyaW5nXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge01peGVkfSBvYmpcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHR2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiggb2JqICkge1xyXG5cdFx0cmV0dXJuICggdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgfHwgb2JqIGluc3RhbmNlb2YgU3RyaW5nICk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBIHN1cGVyIHNpbXBsZSBleHRlbmQgZnVuY3Rpb24uIFRoaXMgaXMgYWxsIHRoYXQgd2UgbmVlZFxyXG5cdCAqIGZvciB0aGlzIGxpYnJhcnlcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fVxyXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XHJcblx0ICovXHJcblx0dmFyIGV4dGVuZCA9IGZ1bmN0aW9uKCBvYmogKSB7XHJcblx0XHR2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuXHJcblx0XHRpZiAoIGxlbmd0aCA8IDIgfHwgb2JqID09PSBudWxsICkge1xyXG5cdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBpZHggPSAxOyBpZHggPCBsZW5ndGg7IGlkeCsrICkge1xyXG5cdFx0XHR2YXIgc291cmNlID0gYXJndW1lbnRzWyBpZHggXTtcclxuXHRcdFx0Zm9yICggdmFyIGtleSBpbiBzb3VyY2UgKSB7XHJcblx0XHRcdFx0b2JqWyBrZXkgXSA9IHNvdXJjZVsga2V5IF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gb2JqO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGVsZW1lbnRzIGJhc2VkIG9uIHNlbGVjdG9yLiBUaGUgc2VsZWN0b3IgbWF5IGJlIGFueSBvZiBhXHJcblx0ICogRE9NIGVsZW1lbnQsIGEgalF1ZXJ5IG9iamVjdCwgYSBjc3Mtc2VsZWN0b3Igc3RyaW5nLCBvclxyXG5cdCAqIGEgTm9kZUxpc3QsIGxpa2VseSByZXRyaWV2ZWQgZnJvbSAucXVlcnlTZWxlY3RvckFsbCgpLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtqUXVlcnl8Tm9kZUxpc3R8U3RyaW5nfEhUTUxFbGVtZW50fSBzZWxlY3RvclxyXG5cdCAqIEByZXR1cm5zIHtBcnJheXxqUXVlcnl8Tm9kZUxpc3R9XHJcblx0ICovXHJcblx0dmFyIGdldEVsZW1lbnRzID0gZnVuY3Rpb24oIHNlbGVjdG9yICkge1xyXG5cdFx0dmFyIGVsZW1lbnRzID0gW107XHJcblxyXG5cdFx0aWYgKCB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGVjdG9yIGluc3RhbmNlb2YgalF1ZXJ5ICkge1xyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkge1xyXG5cdFx0XHRyZXR1cm4gWyBzZWxlY3RvciBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggaXNTdHJpbmcoIHNlbGVjdG9yICkgKSB7XHJcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggc2VsZWN0b3IgaW5zdGFuY2VvZiBOb2RlTGlzdCApIHtcclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBlbGVtZW50cztcclxuXHR9O1xyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsbGVkIHdoZW4gYSBjb250ZXh0IG1lbnUgaXMgcmVxdWVzdGVkLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtFdmVudH0gZVxyXG5cdCAqL1xyXG5cdHZhciBvbkNvbnRleHRNZW51ID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cdFx0Y2xvc2VDb250ZXh0TWVudSgpO1xyXG5cclxuXHRcdGlmICggdGFyZ2V0LmN0eE1lbnUgKSB7XHJcblxyXG5cdFx0XHR2YXIgbWVudSA9IGNyZWF0ZUNvbnRleHRNZW51KCB0YXJnZXQgKTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggbWVudSApO1xyXG5cdFx0XHRpc09wZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8gT24gbmV4dCB0aWNrLCBwb3NpdGlvbiBtZW51LiBXZSBjYW4ndCBkbyBpdCByaWdodFxyXG5cdFx0XHQvLyBhd2F5IGJlY2F1c2Ugd2lkdGggYW5kIGhlaWdodCBvZiBtZW51IG5lZWRzIHRvIGJlIGNvbXB1dGVkXHJcblx0XHRcdC8vIGZpcnN0LlxyXG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBTZXQgdXAgZXZlbnRzIHRvIHByb2Nlc3Mgb3IgY2xvc2UgY29udGV4dCBtZW51XHJcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwiY2xpY2tcIiwgY2xvc2VDb250ZXh0TWVudSApO1xyXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCBjbG9zZUNvbnRleHRNZW51ICk7XHJcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwic2Nyb2xsXCIsIGNsb3NlQ29udGV4dE1lbnUgKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBQb3NpdGlvbiBhbmQgZGlzcGxheVxyXG5cdFx0XHRcdG1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uQ29udGV4dE1lbnUoIGUsIHRhcmdldCwgbWVudSApO1xyXG5cdFx0XHR9LCAxICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgY29udGV4dCBtZW51XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgVGhlIGVsZW1lbnQgdXNlciBjbGlja3Mgb24gdG8gZ2V0IGNvbnRleHQgbWVudVxyXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIG1lbnVcclxuXHQgKi9cclxuXHR2YXIgY3JlYXRlQ29udGV4dE1lbnUgPSBmdW5jdGlvbiggdGFyZ2V0ICkge1xyXG5cdFx0dmFyIGtleTtcclxuXHJcblx0XHR2YXIgY29udGV4dE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XHJcblx0XHRjb250ZXh0TWVudS5jbGFzc05hbWUgPSBtZW51Q2xhc3NOYW1lO1xyXG5cclxuXHRcdC8vIEluaXRpYWxseSBoaWRkZW4gdW50aWwgd2UgY29tcHV0ZSBwb3NpdGlvblxyXG5cdFx0Y29udGV4dE1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcblx0XHRjb250ZXh0TWVudS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHJcblx0XHRmb3IgKCBrZXkgaW4gdGFyZ2V0LmN0eE1lbnUubWVudSApIHtcclxuXHRcdFx0dmFyIHZhbHVlID0gdGFyZ2V0LmN0eE1lbnUubWVudVsga2V5IF07XHJcblxyXG5cdFx0XHR2YXIgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcclxuXHRcdFx0aXRlbS5jdHhNZW51ID0ge1xyXG5cdFx0XHRcdGtleSA6IGtleSxcclxuXHRcdFx0XHRlbmFibGVkIDogdmFsdWUuZW5hYmxlZCA/IHRydWUgOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKCBpdGVtLmN0eE1lbnUuZW5hYmxlZCApIHtcclxuXHRcdFx0XHRpdGVtLmNsYXNzTmFtZSA9IGl0ZW1DbGFzc05hbWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aXRlbS5jbGFzc05hbWUgPSBpdGVtQ2xhc3NOYW1lRGlzYWJsZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aXRlbS5pbm5lckhUTUwgPSB2YWx1ZSAmJiB2YWx1ZS5sYWJlbCA/IHZhbHVlLmxhYmVsIDoga2V5O1xyXG5cclxuXHRcdFx0Ly8gQXNzaWduIGV2ZW50IGxpc3RlbmVyXHJcblx0XHRcdGlmICggaXRlbS5jdHhNZW51LmVuYWJsZWQgKSB7XHJcblx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCB2YWx1ZS5vblNlbGVjdCApICkge1xyXG5cdFx0XHRcdFx0aXRlbS5jdHhNZW51Lm9uU2VsZWN0ID0gdmFsdWUub25TZWxlY3Q7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0uY3R4TWVudS5vblNlbGVjdCA9IG9uU2VsZWN0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCB0YXJnZXQuY3R4TWVudS5ldmVudCwgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHR0aGlzLmN0eE1lbnUub25TZWxlY3QoIHRhcmdldCwgdGhpcy5jdHhNZW51LmtleSwgaXRlbSwgdGFyZ2V0LmN0eE1lbnUuZGF0YSApO1xyXG5cdFx0XHRcdFx0Y2xvc2VDb250ZXh0TWVudSgpO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCB2YWx1ZS50aXRsZSApIHtcclxuXHRcdFx0XHRpdGVtLnRpdGxlID0gdmFsdWUudGl0bGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnRleHRNZW51LmFwcGVuZENoaWxkKCBpdGVtICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRleHRNZW51O1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUG9zaXRpb24gdGhlIG1lbnUgcmVsYXRpdmUgdG8gdGhlIHRhcmdldFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtFdmVudH0gZSBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIGRpc3BsYXkgb2YgY29udGV4dCBtZW51XHJcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XHJcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbWVudVxyXG5cdCAqL1xyXG5cdHZhciBwb3NpdGlvbkNvbnRleHRNZW51ID0gZnVuY3Rpb24oIGUsIHRhcmdldCwgbWVudSApIHtcclxuXHRcdHZhciBsZWZ0ID0gMDtcclxuXHRcdHZhciB0b3AgPSAwO1xyXG5cdFx0dmFyIHRhcmdldEJveCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHZhciBtZW51Qm94ID0gbWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHQvLyBEZWZhdWx0IHBvc2l0aW9uXHJcblx0XHR2YXIgcG9zaXRpb24gPSBcImNsaWNrXCI7XHJcblxyXG5cdFx0aWYgKCB0YXJnZXQuY3R4TWVudSAmJiB0YXJnZXQuY3R4TWVudS5wb3NpdGlvbiApIHtcclxuXHRcdFx0cG9zaXRpb24gPSB0YXJnZXQuY3R4TWVudS5wb3NpdGlvbjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHBvc2l0aW9uID09PSBcImJvdHRvbVwiICkge1xyXG5cdFx0XHQvLyBEaXNwbGF5IGJlbG93IGVsZW1lbnQsIGxlZnQgYWxpZ25lZCAod2hhdCBhYm91dCBSVEwgbGFuZ3VhZ2VzPylcclxuXHRcdFx0bGVmdCA9IHRhcmdldEJveC5sZWZ0ICsgdGFyZ2V0LmN0eE1lbnUuaG9yaXpvbnRhbE9mZnNldDtcclxuXHRcdFx0dG9wID0gdGFyZ2V0Qm94LmJvdHRvbSArIHRhcmdldC5jdHhNZW51LnZlcnRpY2FsT2Zmc2V0O1xyXG5cdFx0fSBlbHNlIGlmICggcG9zaXRpb24gPT09IFwidG9wXCIgKSB7XHJcblx0XHRcdC8vIERpc3BsYXkgYWJvdmUgZWxlbWVudCwgbGVmdCBhbGlnbmVkICh3aGF0IGFib3V0IFJUTCBsYW5ndWFnZXM/KVxyXG5cdFx0XHRsZWZ0ID0gdGFyZ2V0Qm94LmxlZnQgKyB0YXJnZXQuY3R4TWVudS5ob3Jpem9udGFsT2Zmc2V0O1xyXG5cdFx0XHR0b3AgPSB0YXJnZXRCb3gudG9wIC0gbWVudUJveC5oZWlnaHQgKyB0YXJnZXQuY3R4TWVudS52ZXJ0aWNhbE9mZnNldDtcclxuXHRcdH0gZWxzZSBpZiAoIHBvc2l0aW9uID09PSBcInJpZ2h0XCIgKSB7XHJcblx0XHRcdC8vIERpc3BsYXkgdG8gdGhlIHJpZ2h0IG9mIHRoZSBlbGVtZW50LCBhbGlnbmVkIHRvIHRoZSB0b3BcclxuXHRcdFx0bGVmdCA9IHRhcmdldEJveC5sZWZ0ICsgdGFyZ2V0Qm94LndpZHRoICsgdGFyZ2V0LmN0eE1lbnUuaG9yaXpvbnRhbE9mZnNldDtcclxuXHRcdFx0dG9wID0gdGFyZ2V0Qm94LnRvcCArIHRhcmdldC5jdHhNZW51LnZlcnRpY2FsT2Zmc2V0O1xyXG5cdFx0fSBlbHNlIGlmICggcG9zaXRpb24gPT09IFwibGVmdFwiICkge1xyXG5cdFx0XHQvLyBEaXNwbGF5IHRvIHRoZSBsZWZ0IG9mIHRoZSBlbGVtZW50LCBhbGlnbmVkIHRvIHRoZSB0b3BcclxuXHRcdFx0bGVmdCA9IHRhcmdldEJveC5sZWZ0IC0gbWVudUJveC53aWR0aCArIHRhcmdldC5jdHhNZW51Lmhvcml6b250YWxPZmZzZXQ7XHJcblx0XHRcdHRvcCA9IHRhcmdldEJveC50b3AgKyB0YXJnZXQuY3R4TWVudS52ZXJ0aWNhbE9mZnNldDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIERpc3BsYXkgd2hlcmV2ZXIgdGhlIHVzZXIgY2xpY2tlZCB0aGUgbW91c2VcclxuXHRcdFx0bGVmdCA9IGUuY2xpZW50WCArIHRhcmdldC5jdHhNZW51Lmhvcml6b250YWxPZmZzZXQ7XHJcblx0XHRcdHRvcCA9IGUuY2xpZW50WSArIHRhcmdldC5jdHhNZW51LnZlcnRpY2FsT2Zmc2V0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENoZWNrIGlmIG9mZiBzY3JlZW5cclxuXHJcblx0XHQvLyBUb28gZmFyIHRvIHRoZSBsZWZ0P1xyXG5cdFx0aWYgKCBsZWZ0IDwgMCApIHtcclxuXHRcdFx0aWYgKCB0YXJnZXQuY3R4TWVudS5ob3Jpem9udGFsT2Zmc2V0ID49IDAgKSB7XHJcblx0XHRcdFx0bGVmdCA9IHRhcmdldC5jdHhNZW51Lmhvcml6b250YWxPZmZzZXQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGVmdCA9IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBUb28gZmFyIHVwP1xyXG5cdFx0aWYgKCB0b3AgPCAwICkge1xyXG5cdFx0XHRpZiAoIHRhcmdldC5jdHhNZW51LnZlcnRpY2FsT2Zmc2V0ID49IDAgKSB7XHJcblx0XHRcdFx0dG9wID0gdGFyZ2V0LmN0eE1lbnUudmVydGljYWxPZmZzZXQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dG9wID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRvbyBmYXIgdG8gdGhlIHJpZ2h0P1xyXG5cdFx0aWYgKCBsZWZ0ICsgbWVudUJveC53aWR0aCA+IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKSB7XHJcblx0XHRcdGlmICggdGFyZ2V0LmN0eE1lbnUuaG9yaXpvbnRhbE9mZnNldCA+PSAwICkge1xyXG5cdFx0XHRcdGxlZnQgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC0gbWVudUJveC53aWR0aDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZWZ0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIG1lbnVCb3gud2lkdGggKyB0YXJnZXQuY3R4TWVudS5ob3Jpem9udGFsT2Zmc2V0O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVG9vIGZhciB0byB0aGUgYm90dG9tP1xyXG5cdFx0aWYgKCB0b3AgKyBtZW51Qm94LmhlaWdodCA+IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0ICkge1xyXG5cdFx0XHRpZiAoIHRhcmdldC5jdHhNZW51LnZlcnRpY2FsT2Zmc2V0ID49IDAgKSB7XHJcblx0XHRcdFx0dG9wID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSBtZW51Qm94LmhlaWdodDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0b3AgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIG1lbnVCb3guaGVpZ2h0ICsgdGFyZ2V0LmN0eE1lbnUudmVydGljYWxPZmZzZXQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBBbmQgZmluYWxseSwgYXBwbHkgdG8gcG9zaXRpb25pbmcgdG8gdGhlIG1lbnVcclxuXHRcdG1lbnUuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XHJcblx0XHRtZW51LnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERlZmF1bHQgb25TZWxlY3Qgcm91dGluZSBpZiBjbGllbnQgZmFpbGVkIHRvIHBhc3Mgb25lIGluXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHdoaWNoIGNvbnRleHQgbWVudSBpcyBhcHBsaWVkIHRvXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGtleSBLZXkgcmVsYXRlZCB0byBtZW51XHJcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaXRlbSBUaGUgaXRlbSBjbGlja2VkXHJcblx0ICovXHJcblx0dmFyIG9uU2VsZWN0ID0gZnVuY3Rpb24oIHRhcmdldCwga2V5LCBpdGVtICkge1xyXG5cdFx0Ly8gVE9ETzogTWF5YmUgdGhyb3cgYW4gZXZlbnRcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENsb3NlIGFueSBjb250ZXh0IG1lbnVzICh0aGVyZSBzaG91bGQgYmUgb25seSBvbmUhKSB0aGF0XHJcblx0ICogY3VycmVudGx5IGV4aXN0LlxyXG5cdCAqL1xyXG5cdHZhciBjbG9zZUNvbnRleHRNZW51ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaWR4ID0gMDtcclxuXHRcdHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIG1lbnVDbGFzc05hbWUgKTtcclxuXHJcblx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLiBJZiB0aGV5IGRvbid0IGV4aXN0LCBub3RoaW5nIHdpbGwgaGFwcGVuLlxyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiY2xpY2tcIiwgY2xvc2VDb250ZXh0TWVudSApO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIGNsb3NlQ29udGV4dE1lbnUgKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcInNjcm9sbFwiLCBjbG9zZUNvbnRleHRNZW51ICk7XHJcblxyXG5cdFx0Zm9yICggaWR4ID0gMDsgaWR4IDwgZWxlbWVudHMubGVuZ3RoOyBpZHgrKyApIHtcclxuXHRcdFx0ZWxlbWVudHNbIGlkeCBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGVsZW1lbnRzWyBpZHggXSApO1xyXG5cdFx0fVxyXG5cdFx0aXNPcGVuID0gZmFsc2U7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgdGhlIGVuYWJsZWQgc3RhdGUgb2YgYSBtZW51IGl0ZW1cclxuXHQgKiBAcGFyYW0ge2pRdWVyeXxOb2RlTGlzdHxTdHJpbmd8SFRNTEVsZW1lbnR9IHNlbGVjdG9yXHJcblx0ICogQHBhcmFtIHtTdHJpbmd8aW50fSBrZXkgS2V5IGluIG1lbnUgb2JqZWN0XHJcblx0ICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXHJcblx0ICovXHJcblx0dmFyIHNldEVuYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uKCBzZWxlY3Rvciwga2V5LCBlbmFibGVkICkge1xyXG5cdFx0dmFyIGlkeCA9IDA7XHJcblxyXG5cdFx0Ly8gR2V0IGxpc3Qgb2YgZWxlbWVudHMgdG8gYXR0YWNoIGNvbnRleHQgbWVudSB0b1xyXG5cdFx0dmFyIGVsZW1lbnRzID0gZ2V0RWxlbWVudHMoIHNlbGVjdG9yICk7XHJcblxyXG5cdFx0Ly8gRGlzYWJsZSBlYWNoIG1lbnUgZWxlbWVudFxyXG5cdFx0Zm9yICggaWR4ID0gMDsgaWR4IDwgZWxlbWVudHMubGVuZ3RoOyBpZHgrKyApIHtcclxuXHRcdFx0aWYgKCBlbGVtZW50c1sgaWR4IF0uY3R4TWVudS5tZW51Lmhhc093blByb3BlcnR5KCBrZXkgKSApIHtcclxuXHRcdFx0XHRlbGVtZW50c1sgaWR4IF0uY3R4TWVudS5tZW51WyBrZXkgXS5lbmFibGVkID0gZW5hYmxlZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTm9ybWFsaXplIGEgbWVudSBzdHJ1Y3R1cmUgc28gdGhhdCBhbGwgcHJvcGVydGllcyBhcmUgcHJlc2VudFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IG1lbnVcclxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdHZhciBub3JtYWxpemVNZW51ID0gZnVuY3Rpb24oIG1lbnUgKSB7XHJcblx0XHR2YXIgaWR4O1xyXG5cdFx0dmFyIGl0ZW1EZWZhdWx0cyA9IHtcclxuXHRcdFx0dHlwZTogXCJpdGVtXCIsXHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdGxhYmVsOiBcIlwiLFxyXG5cdFx0XHRvblNlbGVjdDogZnVuY3Rpb24oKSB7fSxcclxuXHRcdFx0aWNvbjogXCJcIiwgIC8vIFRoaXMgaXNuJ3QgdXNlZCB5ZXRcclxuXHRcdFx0dGl0bGU6IFwiXCJcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gUXVpY2sgbm9ybWFsaXphdGlvbiBvZiBtZW51IG9iamVjdFxyXG5cdFx0Zm9yICggaWR4IGluIG1lbnUgKSB7XHJcblx0XHRcdC8vIENyZWF0ZSBjb3B5IG9mIGRlZmF1bHRzXHJcblx0XHRcdHZhciBkZmx0ID0gZXh0ZW5kKCB7fSwgaXRlbURlZmF1bHRzICk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoICEgbWVudVsgaWR4IF0gKSB7XHJcblx0XHRcdFx0bWVudVsgaWR4IF0gPSBleHRlbmQoIGRmbHQsIHsgbGFiZWwgOiBpZHggfSApO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKCBtZW51WyBpZHggXSApICkge1xyXG5cdFx0XHRcdG1lbnVbIGlkeCBdID0gZXh0ZW5kKCBkZmx0LCB7IGxhYmVsIDogaWR4LCBvblNlbGVjdCA6IG1lbnVbIGlkeCBdIH0gKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtZW51WyBpZHggXSA9IGV4dGVuZCggZGZsdCwgbWVudVsgaWR4IF0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtZW51O1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIFB1YmxpYyBBUElcclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0dmFyIENvbnRleHRNZW51ID0ge1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQXR0YWNoIGEgY29udGV4dCBtZW51IHRvIG9uZSBvciBtb3JlIGVsZW1lbnRzLiBUaGlzIGlzIHRoZVxyXG5cdFx0ICogQVBJIHRoYXQgd2lsbCBiZSB1c2VkIG1vc3Qgb2Z0ZW4uXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtqUXVlcnl8Tm9kZUxpc3R8SFRNTEVsZW1lbnR8U3RyaW5nfSBzZWxlY3RvclxyXG5cdFx0ICogQHBhcmFtIHtBcnJheXxPYmplY3R9IG1lbnVcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcblx0XHQgKi9cclxuXHRcdGF0dGFjaCA6IGZ1bmN0aW9uKCBzZWxlY3RvciwgbWVudSwgb3B0aW9ucyApIHtcclxuXHRcdFx0dmFyIGlkeCA9IDA7XHJcblxyXG5cdFx0XHRtZW51ID0gbm9ybWFsaXplTWVudSggbWVudSApO1xyXG5cclxuXHRcdFx0Ly8gQ3JlYXRlIG9iamVjdCB0byBhc3NvY2lhdGUgd2l0aCBlbGVtZW50KHMpLlxyXG5cdFx0XHQvLyBleHRlbmQoKSBpcyB1c2VkIHNvIHRoYXQgZWFjaCBlbGVtZW50IGdldHMgYSB1bmlxdWUgY29weS5cclxuXHRcdFx0dmFyIG9iaiA9IGV4dGVuZCggeyBtZW51IDogZXh0ZW5kKCB7fSwgbWVudSApIH0sIGNvbmYsIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdC8vIEdldCBsaXN0IG9mIGVsZW1lbnRzIHRvIGF0dGFjaCBjb250ZXh0IG1lbnUgdG9cclxuXHRcdFx0dmFyIGVsZW1lbnRzID0gZ2V0RWxlbWVudHMoIHNlbGVjdG9yICk7XHJcblxyXG5cdFx0XHQvLyBBdHRhY2ggY29udGV4dCBtZW51IHRvIGVhY2ggZWxlbWVudFxyXG5cdFx0XHRmb3IgKCBpZHggPSAwOyBpZHggPCBlbGVtZW50cy5sZW5ndGg7IGlkeCsrICkge1xyXG5cdFx0XHRcdGVsZW1lbnRzWyBpZHggXS5jdHhNZW51ID0gb2JqO1xyXG5cdFx0XHRcdGVsZW1lbnRzWyBpZHggXS5hZGRFdmVudExpc3RlbmVyKCBvYmouZXZlbnQsIG9uQ29udGV4dE1lbnUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0XHJcblx0XHQvKipcclxuXHRcdCAqIERpc3BsYXkgYSBjb250ZXh0IG1lbnUgd2l0aCBhbiBlbGVtZW50IG9yIGV2ZW50LiBcclxuXHRcdCAqIFVzZWZ1bCBmb3Igd2hlbiB5b3UgZG9uJ3Qgd2FudCB0byBhdHRhY2ggdGhlIGNvbnRleHRcclxuXHRcdCAqIG1lbnUgdG8gYSB3aG9sZSBidW5jaCBvZiB0aGluZ3MgYnV0IGp1c3QgZGlzcGxheSBpdFxyXG5cdFx0ICogZHluYW1pY2FsbHkuXHJcblx0XHQgKiBcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKlx0JCggZG9jdW1lbnQgKS5vbiggXCJjbGlja1wiLCBcIi50YXJnZXQtYnV0dG9uXCIsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0ICpcdFx0Q29udGV4dE1lbnUuZGlzcGxheSggZS50YXJnZXQsIG1lbnUsIHsgaG9yaXpvbnRhbE9mZnNldCA6IDUgfSApO1xyXG5cdFx0ICpcdH0gKTtcclxuXHRcdCAqXHRcclxuXHRcdCAqIEBleGFtcGxlXHJcblx0XHQgKlx0JCggZG9jdW1lbnQgKS5vbiggXCJjbGlja1wiLCBcIi50YXJnZXQtYnV0dG9uXCIsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0ICpcdFx0Q29udGV4dE1lbnUuZGlzcGxheSggZSwgbWVudSwgeyBob3Jpem9udGFsT2Zmc2V0IDogNSB9ICk7XHJcblx0XHQgKlx0fSApO1xyXG5cdFx0ICogXHJcblx0XHQgKiBAcGFyYW0ge0V2ZW50fEhUTUxFbGVtZW50fSBlXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gbWVudVxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuXHRcdCAqL1xyXG5cdFx0ZGlzcGxheSA6IGZ1bmN0aW9uKCBlLCBtZW51LCBvcHRpb25zICkge1xyXG5cdFx0XHRtZW51ID0gbm9ybWFsaXplTWVudSggZXh0ZW5kKCB7fSwgbWVudSApICk7XHJcblxyXG5cdFx0XHQvLyBDcmVhdGUgb2JqZWN0IHRvIGFzc29jaWF0ZSB3aXRoIGVsZW1lbnQocykuXHJcblx0XHRcdC8vIGV4dGVuZCgpIGlzIHVzZWQgc28gdGhhdCB3ZSBoYXZlIGEgdW5pcXVlIGNvcHkuXHJcblx0XHRcdHZhciBjb250ZXh0TWVudSA9IGV4dGVuZCggeyBtZW51IDogZXh0ZW5kKCB7fSwgbWVudSApIH0sIGNvbmYsIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdC8vIElzIGUgYSBzZWxlY3RvciBvciBhbiBldmVudD9cclxuXHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgRXZlbnQgKSB7XHJcblx0XHRcdFx0ZS50YXJnZXQuY3R4TWVudSA9IGNvbnRleHRNZW51O1xyXG5cdFx0XHRcdG9uQ29udGV4dE1lbnUoIGUgKTtcclxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50ICkge1xyXG5cdFx0XHRcdGUudGFyZ2V0LmN0eE1lbnUgPSBjb250ZXh0TWVudTtcclxuXHRcdFx0XHRvbkNvbnRleHRNZW51KCBlICk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApIHtcclxuXHRcdFx0XHRlLmN0eE1lbnUgPSBjb250ZXh0TWVudTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBDcmVhdGUgYSBzaW11bGF0ZWQgZXZlbnRcclxuXHRcdFx0XHR2YXIgYm94ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHR2YXIgZXZ0ID0ge1xyXG5cdFx0XHRcdFx0dGFyZ2V0OiBlLFxyXG5cdFx0XHRcdFx0Y2xpZW50WDogYm94LmxlZnQsXHJcblx0XHRcdFx0XHRjbGllbnRZOiBib3gudG9wLFxyXG5cdFx0XHRcdFx0c3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHt9LFxyXG5cdFx0XHRcdFx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0b25Db250ZXh0TWVudSggZXZ0ICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coIGUgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEaXNhYmxlIGEgbWVudSBpdGVtc1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7alF1ZXJ5fE5vZGVMaXN0fEhUTUxFbGVtZW50fFN0cmluZ30gc2VsZWN0b3JcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfGludH0ga2V5IFRoZSBrZXkgcGFzc2VkIGluIHRvIHRoZSBtZW51IG9iamVjdCBpbiAuYXR0YWNoKClcclxuXHRcdCAqL1xyXG5cdFx0ZGlzYWJsZSA6IGZ1bmN0aW9uKCBzZWxlY3Rvciwga2V5ICkge1xyXG5cdFx0XHRzZXRFbmFibGVkU3RhdGUoIHNlbGVjdG9yLCBrZXksIGZhbHNlICk7XHJcblx0XHR9LFxyXG5cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEaXNhYmxlIGEgbWVudSBpdGVtc1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7alF1ZXJ5fE5vZGVMaXN0fEhUTUxFbGVtZW50fFN0cmluZ30gc2VsZWN0b3JcclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfGludH0ga2V5IFRoZSBrZXkgcGFzc2VkIGluIHRvIHRoZSBtZW51IG9iamVjdCBpbiAuYXR0YWNoKClcclxuXHRcdCAqL1xyXG5cdFx0ZW5hYmxlIDogZnVuY3Rpb24oIHNlbGVjdG9yLCBrZXkgKSB7XHJcblx0XHRcdHNldEVuYWJsZWRTdGF0ZSggc2VsZWN0b3IsIGtleSwgdHJ1ZSApO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2xvc2UgY29udGV4dCBtZW51KHMpXHJcblx0XHQgKi9cclxuXHRcdGNsb3NlIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNsb3NlQ29udGV4dE1lbnUoKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIENoZWNrIGlmIGEgY29udGV4dCBtZW51IGlzIG9wZW5cclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdFx0ICovXHJcblx0XHRpc09wZW4gOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIGlzT3BlbjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEV4cG9zZVxyXG5cdCAqL1xyXG5cdC8vIEFNRFxyXG5cdGlmICggdHlwZW9mIHdpbmRvdy5kZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiB3aW5kb3cuZGVmaW5lLmFtZCAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0d2luZG93LmRlZmluZSggJ0NvbnRleHRNZW51JywgW10sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIENvbnRleHRNZW51O1xyXG5cdFx0fSApO1xyXG5cdC8vIENvbW1vbkpTXHJcblx0fSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cyAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0TWVudTtcclxuXHQvLyBCcm93c2VyXHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5Db250ZXh0TWVudSA9IENvbnRleHRNZW51O1xyXG5cdH1cclxufSApKCk7XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNvbnRleHQtbWVudSB7XFxyXFxuXFx0cG9zaXRpb24gOiBmaXhlZDtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuXFx0bWluLXdpZHRoIDogMTAwcHg7XFxyXFxuXFx0cGFkZGluZzogMnB4O1xcclxcblxcdGJveC1zaGFkb3cgOiAycHggMnB4IDRweCAjNDQ0O1xcclxcblxcdGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0ei1pbmRleCA6IDEwMDAyO1xcclxcblxcdGN1cnNvciA6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5jb250ZXh0LW1lbnU+ZGl2IHtcXHJcXG5cXHRwYWRkaW5nIDogNXB4IDI1cHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNvbnRleHQtbWVudS1pdGVtOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yIDogI2MzZDZlZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNvbnRleHQtbWVudS1pdGVtLWRpc2FibGVkIHtcXHJcXG5cXHRjb2xvciA6ICNhYWE7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8vZG93bmxvYWQuanMgdjQuMiwgYnkgZGFuZGF2aXM7IDIwMDgtMjAxNi4gW01JVF0gc2VlIGh0dHA6Ly9kYW5tbC5jb20vZG93bmxvYWQuaHRtbCBmb3IgdGVzdHMvdXNhZ2Vcbi8vIHYxIGxhbmRlZCBhIEZGK0Nocm9tZSBjb21wYXQgd2F5IG9mIGRvd25sb2FkaW5nIHN0cmluZ3MgdG8gbG9jYWwgdW4tbmFtZWQgZmlsZXMsIHVwZ3JhZGVkIHRvIHVzZSBhIGhpZGRlbiBmcmFtZSBhbmQgb3B0aW9uYWwgbWltZVxuLy8gdjIgYWRkZWQgbmFtZWQgZmlsZXMgdmlhIGFbZG93bmxvYWRdLCBtc1NhdmVCbG9iLCBJRSAoMTArKSBzdXBwb3J0LCBhbmQgd2luZG93LlVSTCBzdXBwb3J0IGZvciBsYXJnZXIrZmFzdGVyIHNhdmVzIHRoYW4gZGF0YVVSTHNcbi8vIHYzIGFkZGVkIGRhdGFVUkwgYW5kIEJsb2IgSW5wdXQsIGJpbmQtdG9nZ2xlIGFyaXR5LCBhbmQgbGVnYWN5IGRhdGFVUkwgZmFsbGJhY2sgd2FzIGltcHJvdmVkIHdpdGggZm9yY2UtZG93bmxvYWQgbWltZSBhbmQgYmFzZTY0IHN1cHBvcnQuIDMuMSBpbXByb3ZlZCBzYWZhcmkgaGFuZGxpbmcuXG4vLyB2NCBhZGRzIEFNRC9VTUQsIGNvbW1vbkpTLCBhbmQgcGxhaW4gYnJvd3NlciBzdXBwb3J0XG4vLyB2NC4xIGFkZHMgdXJsIGRvd25sb2FkIGNhcGFiaWxpdHkgdmlhIHNvbG8gVVJMIGFyZ3VtZW50IChzYW1lIGRvbWFpbi9DT1JTIG9ubHkpXG4vLyB2NC4yIGFkZHMgc2VtYW50aWMgdmFyaWFibGUgbmFtZXMsIGxvbmcgKG92ZXIgMk1CKSBkYXRhVVJMIHN1cHBvcnQsIGFuZCBoaWRkZW4gYnkgZGVmYXVsdCB0ZW1wIGFuY2hvcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ybmRtZS9kb3dubG9hZFxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuXHRcdC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuXHRcdC8vIGxpa2UgTm9kZS5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuXHRcdHJvb3QuZG93bmxvYWQgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdHJldHVybiBmdW5jdGlvbiBkb3dubG9hZChkYXRhLCBzdHJGaWxlTmFtZSwgc3RyTWltZVR5cGUpIHtcblxuXHRcdHZhciBzZWxmID0gd2luZG93LCAvLyB0aGlzIHNjcmlwdCBpcyBvbmx5IGZvciBicm93c2VycyBhbnl3YXkuLi5cblx0XHRcdGRlZmF1bHRNaW1lID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgLy8gdGhpcyBkZWZhdWx0IG1pbWUgYWxzbyB0cmlnZ2VycyBpZnJhbWUgZG93bmxvYWRzXG5cdFx0XHRtaW1lVHlwZSA9IHN0ck1pbWVUeXBlIHx8IGRlZmF1bHRNaW1lLFxuXHRcdFx0cGF5bG9hZCA9IGRhdGEsXG5cdFx0XHR1cmwgPSAhc3RyRmlsZU5hbWUgJiYgIXN0ck1pbWVUeXBlICYmIHBheWxvYWQsXG5cdFx0XHRhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcblx0XHRcdHRvU3RyaW5nID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIFN0cmluZyhhKTsgfSxcblx0XHRcdG15QmxvYiA9IChzZWxmLkJsb2IgfHwgc2VsZi5Nb3pCbG9iIHx8IHNlbGYuV2ViS2l0QmxvYiB8fCB0b1N0cmluZyksXG5cdFx0XHRmaWxlTmFtZSA9IHN0ckZpbGVOYW1lIHx8IFwiZG93bmxvYWRcIixcblx0XHRcdGJsb2IsXG5cdFx0XHRyZWFkZXI7XG5cdFx0bXlCbG9iID0gbXlCbG9iLmNhbGwgPyBteUJsb2IuYmluZChzZWxmKSA6IEJsb2I7XG5cblx0XHRpZiAoU3RyaW5nKHRoaXMpID09PSBcInRydWVcIikgeyAvL3JldmVyc2UgYXJndW1lbnRzLCBhbGxvd2luZyBkb3dubG9hZC5iaW5kKHRydWUsIFwidGV4dC94bWxcIiwgXCJleHBvcnQueG1sXCIpIHRvIGFjdCBhcyBhIGNhbGxiYWNrXG5cdFx0XHRwYXlsb2FkID0gW3BheWxvYWQsIG1pbWVUeXBlXTtcblx0XHRcdG1pbWVUeXBlID0gcGF5bG9hZFswXTtcblx0XHRcdHBheWxvYWQgPSBwYXlsb2FkWzFdO1xuXHRcdH1cblxuXG5cdFx0aWYgKHVybCAmJiB1cmwubGVuZ3RoIDwgMjA0OCkgeyAvLyBpZiBubyBmaWxlbmFtZSBhbmQgbm8gbWltZSwgYXNzdW1lIGEgdXJsIHdhcyBwYXNzZWQgYXMgdGhlIG9ubHkgYXJndW1lbnRcblx0XHRcdGZpbGVOYW1lID0gdXJsLnNwbGl0KFwiL1wiKS5wb3AoKS5zcGxpdChcIj9cIilbMF07XG5cdFx0XHRhbmNob3IuaHJlZiA9IHVybDsgLy8gYXNzaWduIGhyZWYgcHJvcCB0byB0ZW1wIGFuY2hvclxuXHRcdFx0aWYgKGFuY2hvci5ocmVmLmluZGV4T2YodXJsKSAhPT0gLTEpIHsgLy8gaWYgdGhlIGJyb3dzZXIgZGV0ZXJtaW5lcyB0aGF0IGl0J3MgYSBwb3RlbnRpYWxseSB2YWxpZCB1cmwgcGF0aDpcblx0XHRcdFx0dmFyIGFqYXggPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdFx0YWpheC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG5cdFx0XHRcdGFqYXgucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuXHRcdFx0XHRhamF4Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0ZG93bmxvYWQoZS50YXJnZXQucmVzcG9uc2UsIGZpbGVOYW1lLCBkZWZhdWx0TWltZSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBhamF4LnNlbmQoKTsgfSwgMCk7IC8vIGFsbG93cyBzZXR0aW5nIGN1c3RvbSBhamF4IGhlYWRlcnMgdXNpbmcgdGhlIHJldHVybjpcblx0XHRcdFx0cmV0dXJuIGFqYXg7XG5cdFx0XHR9IC8vIGVuZCBpZiB2YWxpZCB1cmw/XG5cdFx0fSAvLyBlbmQgaWYgdXJsP1xuXG5cblx0XHQvL2dvIGFoZWFkIGFuZCBkb3dubG9hZCBkYXRhVVJMcyByaWdodCBhd2F5XG5cdFx0aWYgKC9eZGF0YTooW1xcdystXStcXC9bXFx3Ky4tXSspP1ssO10vLnRlc3QocGF5bG9hZCkpIHtcblxuXHRcdFx0aWYgKHBheWxvYWQubGVuZ3RoID4gKDEwMjQgKiAxMDI0ICogMS45OTkpICYmIG15QmxvYiAhPT0gdG9TdHJpbmcpIHtcblx0XHRcdFx0cGF5bG9hZCA9IGRhdGFVcmxUb0Jsb2IocGF5bG9hZCk7XG5cdFx0XHRcdG1pbWVUeXBlID0gcGF5bG9hZC50eXBlIHx8IGRlZmF1bHRNaW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG5hdmlnYXRvci5tc1NhdmVCbG9iID8gIC8vIElFMTAgY2FuJ3QgZG8gYVtkb3dubG9hZF0sIG9ubHkgQmxvYnM6XG5cdFx0XHRcdFx0bmF2aWdhdG9yLm1zU2F2ZUJsb2IoZGF0YVVybFRvQmxvYihwYXlsb2FkKSwgZmlsZU5hbWUpIDpcblx0XHRcdFx0XHRzYXZlcihwYXlsb2FkKTsgLy8gZXZlcnlvbmUgZWxzZSBjYW4gc2F2ZSBkYXRhVVJMcyB1bi1wcm9jZXNzZWRcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7Ly9ub3QgZGF0YSB1cmwsIGlzIGl0IGEgc3RyaW5nIHdpdGggc3BlY2lhbCBuZWVkcz9cblx0XHRcdGlmICgvKFtcXHg4MC1cXHhmZl0pLy50ZXN0KHBheWxvYWQpKSB7XG5cdFx0XHRcdHZhciBpID0gMCwgdGVtcFVpQXJyID0gbmV3IFVpbnQ4QXJyYXkocGF5bG9hZC5sZW5ndGgpLCBteCA9IHRlbXBVaUFyci5sZW5ndGg7XG5cdFx0XHRcdGZvciAoaTsgaSA8IG14OyArK2kpIHRlbXBVaUFycltpXSA9IHBheWxvYWQuY2hhckNvZGVBdChpKTtcblx0XHRcdFx0cGF5bG9hZCA9IG5ldyBteUJsb2IoW3RlbXBVaUFycl0sIHsgdHlwZTogbWltZVR5cGUgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGJsb2IgPSBwYXlsb2FkIGluc3RhbmNlb2YgbXlCbG9iID9cblx0XHRcdHBheWxvYWQgOlxuXHRcdFx0bmV3IG15QmxvYihbcGF5bG9hZF0sIHsgdHlwZTogbWltZVR5cGUgfSk7XG5cblxuXHRcdGZ1bmN0aW9uIGRhdGFVcmxUb0Jsb2Ioc3RyVXJsKSB7XG5cdFx0XHR2YXIgcGFydHMgPSBzdHJVcmwuc3BsaXQoL1s6OyxdLyksXG5cdFx0XHRcdHR5cGUgPSBwYXJ0c1sxXSxcblx0XHRcdFx0ZGVjb2RlciA9IHBhcnRzWzJdID09IFwiYmFzZTY0XCIgPyBhdG9iIDogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHRcdFx0XHRiaW5EYXRhID0gZGVjb2RlcihwYXJ0cy5wb3AoKSksXG5cdFx0XHRcdG14ID0gYmluRGF0YS5sZW5ndGgsXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHR1aUFyciA9IG5ldyBVaW50OEFycmF5KG14KTtcblxuXHRcdFx0Zm9yIChpOyBpIDwgbXg7ICsraSkgdWlBcnJbaV0gPSBiaW5EYXRhLmNoYXJDb2RlQXQoaSk7XG5cblx0XHRcdHJldHVybiBuZXcgbXlCbG9iKFt1aUFycl0sIHsgdHlwZTogdHlwZSB9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzYXZlcih1cmwsIHdpbk1vZGUpIHtcblxuXHRcdFx0aWYgKCdkb3dubG9hZCcgaW4gYW5jaG9yKSB7IC8vaHRtbDUgQVtkb3dubG9hZF1cblx0XHRcdFx0YW5jaG9yLmhyZWYgPSB1cmw7XG5cdFx0XHRcdGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XG5cdFx0XHRcdGFuY2hvci5jbGFzc05hbWUgPSBcImRvd25sb2FkLWpzLWxpbmtcIjtcblx0XHRcdFx0YW5jaG9yLmlubmVySFRNTCA9IFwiZG93bmxvYWRpbmcuLi5cIjtcblx0XHRcdFx0YW5jaG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbmNob3IpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRhbmNob3IuY2xpY2soKTtcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFuY2hvcik7XG5cdFx0XHRcdFx0aWYgKHdpbk1vZGUgPT09IHRydWUpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNlbGYuVVJMLnJldm9rZU9iamVjdFVSTChhbmNob3IuaHJlZik7IH0sIDI1MCk7IH1cblx0XHRcdFx0fSwgNjYpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaGFuZGxlIG5vbi1hW2Rvd25sb2FkXSBzYWZhcmkgYXMgYmVzdCB3ZSBjYW46XG5cdFx0XHRpZiAoLyhWZXJzaW9uKVxcLyhcXGQrKVxcLihcXGQrKSg/OlxcLihcXGQrKSk/LipTYWZhcmlcXC8vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRcdFx0aWYgKC9eZGF0YTovLnRlc3QodXJsKSkgdXJsID0gXCJkYXRhOlwiICsgdXJsLnJlcGxhY2UoL15kYXRhOihbXFx3XFwvXFwtXFwrXSspLywgZGVmYXVsdE1pbWUpO1xuXHRcdFx0XHRpZiAoIXdpbmRvdy5vcGVuKHVybCkpIHsgLy8gcG9wdXAgYmxvY2tlZCwgb2ZmZXIgZGlyZWN0IGRvd25sb2FkOlxuXHRcdFx0XHRcdGlmIChjb25maXJtKFwiRGlzcGxheWluZyBOZXcgRG9jdW1lbnRcXG5cXG5Vc2UgU2F2ZSBBcy4uLiB0byBkb3dubG9hZCwgdGhlbiBjbGljayBiYWNrIHRvIHJldHVybiB0byB0aGlzIHBhZ2UuXCIpKSB7IGxvY2F0aW9uLmhyZWYgPSB1cmw7IH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly9kbyBpZnJhbWUgZGF0YVVSTCBkb3dubG9hZCAob2xkIGNoK0ZGKTpcblx0XHRcdHZhciBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZik7XG5cblx0XHRcdGlmICghd2luTW9kZSAmJiAvXmRhdGE6Ly50ZXN0KHVybCkpIHsgLy8gZm9yY2UgYSBtaW1lIHRoYXQgd2lsbCBkb3dubG9hZDpcblx0XHRcdFx0dXJsID0gXCJkYXRhOlwiICsgdXJsLnJlcGxhY2UoL15kYXRhOihbXFx3XFwvXFwtXFwrXSspLywgZGVmYXVsdE1pbWUpO1xuXHRcdFx0fVxuXHRcdFx0Zi5zcmMgPSB1cmw7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmKTsgfSwgMzMzKTtcblxuXHRcdH0vL2VuZCBzYXZlclxuXG5cblxuXG5cdFx0aWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7IC8vIElFMTArIDogKGhhcyBCbG9iLCBidXQgbm90IGFbZG93bmxvYWRdIG9yIFVSTClcblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlTmFtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuVVJMKSB7IC8vIHNpbXBsZSBmYXN0IGFuZCBtb2Rlcm4gd2F5IHVzaW5nIEJsb2IgYW5kIFVSTDpcblx0XHRcdHNhdmVyKHNlbGYuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGhhbmRsZSBub24tQmxvYigpK25vbi1VUkwgYnJvd3NlcnM6XG5cdFx0XHRpZiAodHlwZW9mIGJsb2IgPT09IFwic3RyaW5nXCIgfHwgYmxvYi5jb25zdHJ1Y3RvciA9PT0gdG9TdHJpbmcpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gc2F2ZXIoXCJkYXRhOlwiICsgbWltZVR5cGUgKyBcIjtiYXNlNjQsXCIgKyBzZWxmLmJ0b2EoYmxvYikpO1xuXHRcdFx0XHR9IGNhdGNoICh5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNhdmVyKFwiZGF0YTpcIiArIG1pbWVUeXBlICsgXCIsXCIgKyBlbmNvZGVVUklDb21wb25lbnQoYmxvYikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJsb2IgYnV0IG5vdCBVUkwgc3VwcG9ydDpcblx0XHRcdHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRyZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0c2F2ZXIodGhpcy5yZXN1bHQpO1xuXHRcdFx0fTtcblx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTsgLyogZW5kIGRvd25sb2FkKCkgKi9cbn0pKTtcbiIsIiFmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiKXt2YXIgZD1jKFwiZGl2XCIsbnVsbCxcInFzX2xhYmVsXCIsYik7cmV0dXJuIGQuaW5uZXJIVE1MPWEsZH1mdW5jdGlvbiBiKGEsYixkLGUpe3ZhciBmPWMoXCJpbnB1dFwiLGIsZCxlKTtyZXR1cm4gZi50eXBlPWEsZn1mdW5jdGlvbiBjKGEsYixjLGQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYSk7aWYoZSlyZXR1cm4gZS5pZD1iLGMmJihlLmNsYXNzTmFtZT1jKSxkJiZkLmFwcGVuZENoaWxkKGUpLGV9ZnVuY3Rpb24gZCgpe3JldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJydjoxMVwiKSE9LTF8fG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikhPS0xfWZ1bmN0aW9uIGUoKXt2YXIgYT1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7cmV0dXJuIShhLmluZGV4T2YoXCJjaHJvbWVcIik+LTF8fGEuaW5kZXhPZihcImZpcmVmb3hcIik+LTF8fGEuaW5kZXhPZihcImVwaXBoYW55XCIpPi0xKSYmYS5pbmRleE9mKFwic2FmYXJpL1wiKT4tMX1mdW5jdGlvbiBmKCl7dmFyIGE9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO3JldHVybiBhLmluZGV4T2YoXCJlZGdlXCIpPi0xfWZ1bmN0aW9uIGcoKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7YS5pbm5lclRleHQ9aSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGEpLGg9ITB9dmFyIGg9ITEsaT1cIi5xc19tYWlue2JhY2tncm91bmQtY29sb3I6I2RkZGRkZDt0ZXh0LWFsaWduOmxlZnQ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjAwcHg7Zm9udDoxMnB4IHNhbnMtc2VyaWY7Ym94LXNoYWRvdzo1cHggNXB4IDhweCByZ2JhKDAsMCwwLDAuMzUpO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO2NvbG9yOiMwMDAwMDA7Ym9yZGVyOm5vbmV9LnFzX2NvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojY2NjY2NjO292ZXJmbG93LXk6YXV0b30ucXNfdGl0bGVfYmFye2JhY2tncm91bmQtY29sb3I6I2VlZWVlZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTtjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOjVweDtmb250LXdlaWdodDpib2xkO2JvcmRlcjpub25lO2NvbG9yOiMwMDAwMDB9LnFzX2NvbnRhaW5lcnttYXJnaW46NXB4O3BhZGRpbmc6NXB4O2JhY2tncm91bmQtY29sb3I6I2VlZWVlZTtib3JkZXI6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZX0ucXNfY29udGFpbmVyX3NlbGVjdGVke2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZmZmZn0ucXNfcmFuZ2V7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTdweDtwYWRkaW5nOjA7bWFyZ2luOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnFzX3JhbmdlOmZvY3Vze291dGxpbmU6bm9uZTtib3JkZXI6bm9uZX0ucXNfcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre3dpZHRoOjEwMCU7aGVpZ2h0OjE1cHg7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDojY2NjY2NjOy13ZWJraXQtYm9yZGVyLXJhZGl1czowOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MH0ucXNfcmFuZ2U6Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNre2JhY2tncm91bmQ6I2NjY2NjY30ucXNfcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2hlaWdodDoxNXB4O3dpZHRoOjE1cHg7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjA7LW1vei1ib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJhZGl1czowO2JhY2tncm91bmQ6Izk5OTk5OTtjdXJzb3I6cG9pbnRlcjttYXJnaW4tdG9wOjB9LnFzX3JhbmdlOjotbW96LXJhbmdlLXRyYWNre3dpZHRoOjEwMCU7aGVpZ2h0OjE1cHg7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDojY2NjY2NjOy13ZWJraXQtYm9yZGVyLXJhZGl1czowOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MH0ucXNfcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWJ7aGVpZ2h0OjE1cHg7d2lkdGg6MTVweDtib3JkZXI6bm9uZTstd2Via2l0LWJvcmRlci1yYWRpdXM6MDstbW96LWJvcmRlci1yYWRpdXM6MDtib3JkZXItcmFkaXVzOjA7YmFja2dyb3VuZDojOTk5OTk5O2N1cnNvcjpwb2ludGVyfS5xc19yYW5nZTo6LW1zLXRyYWNre3dpZHRoOjEwMCU7aGVpZ2h0OjE1cHg7Y3Vyc29yOnBvaW50ZXI7dmlzaWJpbGl0eTpoaWRkZW47YmFja2dyb3VuZDp0cmFuc3BhcmVudH0ucXNfcmFuZ2U6Oi1tcy10aHVtYntoZWlnaHQ6MTVweDt3aWR0aDoxNXB4Oy13ZWJraXQtYm9yZGVyLXJhZGl1czowOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MDtiYWNrZ3JvdW5kOiM5OTk5OTk7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOm5vbmV9LnFzX3JhbmdlOjotbXMtZmlsbC1sb3dlcntiYWNrZ3JvdW5kOiNjY2NjY2M7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjA7LW1vei1ib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJhZGl1czowfS5xc19yYW5nZTpmb2N1czo6LW1zLWZpbGwtbG93ZXJ7YmFja2dyb3VuZDojY2NjY2NjfS5xc19yYW5nZTo6LW1zLWZpbGwtdXBwZXJ7YmFja2dyb3VuZDojY2NjY2NjOy13ZWJraXQtYm9yZGVyLXJhZGl1czowOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MH0ucXNfcmFuZ2U6Zm9jdXM6Oi1tcy1maWxsLXVwcGVye2JhY2tncm91bmQ6I2NjY2NjY30ucXNfYnV0dG9ue2JhY2tncm91bmQtY29sb3I6I2Y2ZjZmNjtjb2xvcjojMDAwMDAwO2hlaWdodDozMHB4O2JvcmRlcjoxcHggc29saWQgI2FhYWFhYTtmb250OjEycHggc2Fucy1zZXJpZn0ucXNfYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7Ym9yZGVyOjFweCBzb2xpZCAjYWFhYWFhfS5xc19idXR0b246Zm9jdXN7Ym9yZGVyOjFweCBzb2xpZCAjYWFhYWFhO291dGxpbmU6bm9uZX0ucXNfY2hlY2tib3h7Y3Vyc29yOnBvaW50ZXJ9LnFzX2NoZWNrYm94IGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTk5OTk5cHh9LnFzX2NoZWNrYm94IHNwYW57aGVpZ2h0OjE2cHg7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO3RleHQtaW5kZW50OjIwcHg7YmFja2dyb3VuZDp1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFMa2xFUVZRNFQyT2NPWFBtZndZS0FDUElnTFMwTkxLTW1EVnJGc09vQWFOaE1Kb09HQmlvRndaa1pVV29KZ0FwZEZheGpVTTFZd0FBQUFCSlJVNUVya0pnZ2c9PScpIG5vLXJlcGVhdH0ucXNfY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCtzcGFue2JhY2tncm91bmQ6dXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBdkVsRVFWUTRUNjNUeXcyRUlCQUEwT0ZLQnhCTDQwd0RSb3ZBVUFDY0tjMUlCMXpaREFrRzE4R1laVG1TbWFmemdUbm5NZ3djaG9EV0dsSktoZUdjUDNKdG5QY2VDcUNVQW10dFNaem51WXRnY2hzWFFyZ0MrNzdETkUwa1VwUGJtQk9vSmFCT0lWUXlsbnFXZ0FBZUtoRHZlL0FOK0Vha2xKQnpoaGdqV1JvSlZHVGJOamlPb3dBSXJldDZhKzRqWUl3cFg4YUR3TElzNzRDMkQwSUlZSXlWUDZHbTg5OG05a2JWbTg1bGpIVVRmMTZrNFZVZWZrd0RyeGsrem9VRXdDdDBHYlVBQUFBQVNVVk9SSzVDWUlJPScpIG5vLXJlcGVhdH0ucXNfY2hlY2tib3hfbGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjdweDtsZWZ0OjMwcHh9LnFzX2xhYmVse21hcmdpbi1ib3R0b206M3B4O3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO2N1cnNvcjpkZWZhdWx0O2ZvbnQ6MTJweCBzYW5zLXNlcmlmfS5xc190ZXh0X2lucHV0ey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDAgNXB4O2hlaWdodDoyNHB4O2JvcmRlcjoxcHggaW5zZXQgI2ZmZmZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7Y29sb3I6IzAwMDAwMDtmb250LXNpemU6MTJweH0ucXNfdGV4dF9pbnB1dDpmb2N1c3tvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDojZmZmZmZmO2JvcmRlcjoxcHggaW5zZXQgI2ZmZmZmZn0ucXNfc2VsZWN0e2JhY2tncm91bmQ6dXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBcDBsRVFWUklTKzJTc1EzRklBd0Y3UlZZaEE1bWdRRmhGdWhZaEpLV0wwZUt4SThTR3lsS1owcDQrT0JzSEdOTStIQ2hBaVM3cWtneUJLcm92YUxlT3hoamJndHhaK2NGdGdlbEZNZzVRd2dCdlBkL0VPNXNEYktBbEJMVVdvLzhDam1MMDc1ekRtS01qNnJFS2JwQ3FCTDlhcWM0WlVRQWhWYkluQk1RVVh6NVZnL1dmeE9rdFhac1dXdFpMZHM5dUlxbHFhSDFORlYzamRoU0pBNDdFMUNBYUU4VmlZcCt3R2lXTVovVCtjZ0FBQUFBU1VWT1JLNUNZSUk9Jykgbm8tcmVwZWF0IHJpZ2h0ICNmNmY2ZjY7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2NvbG9yOiMwMDAwMDA7d2lkdGg6MTAwJTtoZWlnaHQ6MjRweDtib3JkZXI6MXB4IHNvbGlkICNhYWFhYWE7LXdlYmtpdC1ib3JkZXItcmFkaXVzOjA7LW1vei1ib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJhZGl1czowO3BhZGRpbmc6MCA1cHg7LW1vei1vdXRsaW5lOm5vbmU7Zm9udC1zaXplOjE0cHh9LnFzX3NlbGVjdCBvcHRpb257Zm9udC1zaXplOjE0cHh9LnFzX3NlbGVjdDo6LW1zLWV4cGFuZHtkaXNwbGF5Om5vbmV9LnFzX3NlbGVjdDpmb2N1c3tvdXRsaW5lOm5vbmV9LnFzX251bWJlcntoZWlnaHQ6MjRweH0ucXNfaW1hZ2V7d2lkdGg6MTAwJX0ucXNfcHJvZ3Jlc3N7d2lkdGg6MTAwJTtoZWlnaHQ6MTVweDtiYWNrZ3JvdW5kLWNvbG9yOiNjY2NjY2M7Ym9yZGVyOm5vbmU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5xc19wcm9ncmVzc192YWx1ZXtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiM5OTk5OTl9LnFzX3RleHRhcmVhey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtyZXNpemU6dmVydGljYWw7d2lkdGg6MTAwJTtwYWRkaW5nOjNweCA1cHg7Ym9yZGVyOjFweCBpbnNldCAjZmZmZmZmO2JhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtjb2xvcjojMDAwMDAwO2ZvbnQtc2l6ZToxMnB4fS5xc190ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDojZmZmZmZmO2JvcmRlcjoxcHggaW5zZXQgI2ZmZmZmZn0ucXNfY29sb3J7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5OTk5cHh9LnFzX2NvbG9yX2xhYmVse3dpZHRoOjEwMCU7aGVpZ2h0OjIwcHg7ZGlzcGxheTpibG9jaztib3JkZXI6MXB4IHNvbGlkICNhYWFhYWE7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzowIDAgMCA1cHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5xc19maWxlX2Nob29zZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5OTk5cHh9LnFzX2ZpbGVfY2hvb3Nlcl9sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOiNmNmY2ZjY7Y29sb3I6IzAwMDAwMDtoZWlnaHQ6MzBweDtib3JkZXI6MXB4IHNvbGlkICNhYWFhYWE7Zm9udDoxMnB4IHNhbnMtc2VyaWY7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6N3B4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9XCIsaj17X3ZlcnNpb246XCIyLjFcIixfdG9wWjoxLF9wYW5lbDpudWxsLF90aXRsZUJhcjpudWxsLF9jb250ZW50Om51bGwsX3N0YXJ0WDowLF9zdGFydFk6MCxfaGlkZGVuOiExLF9jb2xsYXBzZWQ6ITEsX2NvbnRyb2xzOm51bGwsX2tleUNvZGU6LTEsX2RyYWdnYWJsZTohMCxfY29sbGFwc2libGU6ITAsX2dsb2JhbENoYW5nZUhhbmRsZXI6bnVsbCx1c2VFeHRTdHlsZVNoZWV0OmZ1bmN0aW9uKCl7aD0hMH0sY3JlYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPU9iamVjdC5jcmVhdGUodGhpcyk7cmV0dXJuIGUuX2luaXQoYSxiLGMsZCksZX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX3BhbmVsLnBhcmVudEVsZW1lbnQmJnRoaXMuX3BhbmVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFuZWwpO2Zvcih2YXIgYSBpbiB0aGlzKXRoaXNbYV09bnVsbH0sX2luaXQ6ZnVuY3Rpb24oYSxiLGMsZCl7aHx8ZygpLHRoaXMuX2JpbmRIYW5kbGVycygpLHRoaXMuX2NyZWF0ZVBhbmVsKGEsYixkKSx0aGlzLl9jcmVhdGVUaXRsZUJhcihjfHxcIlF1aWNrU2V0dGluZ3NcIiksdGhpcy5fY3JlYXRlQ29udGVudCgpfSxfYmluZEhhbmRsZXJzOmZ1bmN0aW9uKCl7dGhpcy5fc3RhcnREcmFnPXRoaXMuX3N0YXJ0RHJhZy5iaW5kKHRoaXMpLHRoaXMuX2RyYWc9dGhpcy5fZHJhZy5iaW5kKHRoaXMpLHRoaXMuX2VuZERyYWc9dGhpcy5fZW5kRHJhZy5iaW5kKHRoaXMpLHRoaXMuX2RvdWJsZUNsaWNrVGl0bGU9dGhpcy5fZG91YmxlQ2xpY2tUaXRsZS5iaW5kKHRoaXMpLHRoaXMuX29uS2V5VXA9dGhpcy5fb25LZXlVcC5iaW5kKHRoaXMpfSxnZXRWYWx1ZXNBc0pTT046ZnVuY3Rpb24oYSl7dmFyIGI9e307Zm9yKHZhciBjIGluIHRoaXMuX2NvbnRyb2xzKXRoaXMuX2NvbnRyb2xzW2NdLmdldFZhbHVlJiYoYltjXT10aGlzLl9jb250cm9sc1tjXS5nZXRWYWx1ZSgpKTtyZXR1cm4gYSYmKGI9SlNPTi5zdHJpbmdpZnkoYikpLGJ9LHNldFZhbHVlc0Zyb21KU09OOmZ1bmN0aW9uKGEpe1wic3RyaW5nXCI9PXR5cGVvZiBhJiYoYT1KU09OLnBhcnNlKGEpKTtmb3IodmFyIGIgaW4gYSl0aGlzLl9jb250cm9sc1tiXS5zZXRWYWx1ZSYmdGhpcy5fY29udHJvbHNbYl0uc2V0VmFsdWUoYVtiXSk7cmV0dXJuIHRoaXN9LHNhdmVJbkxvY2FsU3RvcmFnZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fbG9jYWxTdG9yYWdlTmFtZT1hLHRoaXMuX3JlYWRGcm9tTG9jYWxTdG9yYWdlKGEpLHRoaXN9LGNsZWFyTG9jYWxTdG9yYWdlOmZ1bmN0aW9uKGEpe3JldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShhKSx0aGlzfSxfc2F2ZUluTG9jYWxTdG9yYWdlOmZ1bmN0aW9uKGEpe2xvY2FsU3RvcmFnZS5zZXRJdGVtKGEsdGhpcy5nZXRWYWx1ZXNBc0pTT04oITApKX0sX3JlYWRGcm9tTG9jYWxTdG9yYWdlOmZ1bmN0aW9uKGEpe3ZhciBiPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGEpO2ImJnRoaXMuc2V0VmFsdWVzRnJvbUpTT04oYil9LF9jcmVhdGVQYW5lbDpmdW5jdGlvbihhLGIsZCl7dGhpcy5fcGFuZWw9YyhcImRpdlwiLG51bGwsXCJxc19tYWluXCIsZHx8ZG9jdW1lbnQuYm9keSksdGhpcy5fcGFuZWwuc3R5bGUuekluZGV4PSsrai5fdG9wWix0aGlzLnNldFBvc2l0aW9uKGF8fDAsYnx8MCksdGhpcy5fY29udHJvbHM9e319LF9jcmVhdGVUaXRsZUJhcjpmdW5jdGlvbihhKXt0aGlzLl90aXRsZUJhcj1jKFwiZGl2XCIsbnVsbCxcInFzX3RpdGxlX2JhclwiLHRoaXMuX3BhbmVsKSx0aGlzLl90aXRsZUJhci50ZXh0Q29udGVudD1hLHRoaXMuX3RpdGxlQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLl9zdGFydERyYWcpLHRoaXMuX3RpdGxlQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLHRoaXMuX2RvdWJsZUNsaWNrVGl0bGUpfSxfY3JlYXRlQ29udGVudDpmdW5jdGlvbigpe3RoaXMuX2NvbnRlbnQ9YyhcImRpdlwiLG51bGwsXCJxc19jb250ZW50XCIsdGhpcy5fcGFuZWwpfSxfY3JlYXRlQ29udGFpbmVyOmZ1bmN0aW9uKCl7dmFyIGE9YyhcImRpdlwiLG51bGwsXCJxc19jb250YWluZXJcIik7cmV0dXJuIGEuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsZnVuY3Rpb24oKXt0aGlzLmNsYXNzTmFtZSs9XCIgcXNfY29udGFpbmVyX3NlbGVjdGVkXCJ9LCEwKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNsYXNzTmFtZS5pbmRleE9mKFwiIHFzX2NvbnRhaW5lcl9zZWxlY3RlZFwiKTthPi0xJiYodGhpcy5jbGFzc05hbWU9dGhpcy5jbGFzc05hbWUuc3Vic3RyKDAsYSkpfSwhMCksdGhpcy5fY29udGVudC5hcHBlbmRDaGlsZChhKSxhfSxzZXRQb3NpdGlvbjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLl9wYW5lbC5zdHlsZS5sZWZ0PWErXCJweFwiLHRoaXMuX3BhbmVsLnN0eWxlLnRvcD1NYXRoLm1heChiLDApK1wicHhcIix0aGlzfSxzZXRTaXplOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuX3BhbmVsLnN0eWxlLndpZHRoPWErXCJweFwiLHRoaXMuX2NvbnRlbnQuc3R5bGUud2lkdGg9YStcInB4XCIsdGhpcy5fY29udGVudC5zdHlsZS5oZWlnaHQ9Yi10aGlzLl90aXRsZUJhci5vZmZzZXRIZWlnaHQrXCJweFwiLHRoaXN9LHNldFdpZHRoOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wYW5lbC5zdHlsZS53aWR0aD1hK1wicHhcIix0aGlzLl9jb250ZW50LnN0eWxlLndpZHRoPWErXCJweFwiLHRoaXN9LHNldEhlaWdodDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fY29udGVudC5zdHlsZS5oZWlnaHQ9YS10aGlzLl90aXRsZUJhci5vZmZzZXRIZWlnaHQrXCJweFwiLHRoaXN9LHNldERyYWdnYWJsZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fZHJhZ2dhYmxlPWEsdGhpcy5fZHJhZ2dhYmxlfHx0aGlzLl9jb2xsYXBzaWJsZT90aGlzLl90aXRsZUJhci5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCI6dGhpcy5fdGl0bGVCYXIuc3R5bGUuY3Vyc29yPVwiZGVmYXVsdFwiLHRoaXN9LF9zdGFydERyYWc6ZnVuY3Rpb24oYSl7dGhpcy5fZHJhZ2dhYmxlJiYodGhpcy5fcGFuZWwuc3R5bGUuekluZGV4PSsrai5fdG9wWixkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5fZHJhZyksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLl9lbmREcmFnKSx0aGlzLl9zdGFydFg9YS5jbGllbnRYLHRoaXMuX3N0YXJ0WT1hLmNsaWVudFkpLGEucHJldmVudERlZmF1bHQoKX0sX2RyYWc6ZnVuY3Rpb24oYSl7dmFyIGI9cGFyc2VJbnQodGhpcy5fcGFuZWwuc3R5bGUubGVmdCksYz1wYXJzZUludCh0aGlzLl9wYW5lbC5zdHlsZS50b3ApLGQ9YS5jbGllbnRYLGU9YS5jbGllbnRZO3RoaXMuc2V0UG9zaXRpb24oYitkLXRoaXMuX3N0YXJ0WCxjK2UtdGhpcy5fc3RhcnRZKSx0aGlzLl9zdGFydFg9ZCx0aGlzLl9zdGFydFk9ZSxhLnByZXZlbnREZWZhdWx0KCl9LF9lbmREcmFnOmZ1bmN0aW9uKGEpe2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLl9kcmFnKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLHRoaXMuX2VuZERyYWcpLGEucHJldmVudERlZmF1bHQoKX0sc2V0R2xvYmFsQ2hhbmdlSGFuZGxlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fZ2xvYmFsQ2hhbmdlSGFuZGxlcj1hLHRoaXN9LF9jYWxsR0NIOmZ1bmN0aW9uKCl7dGhpcy5fbG9jYWxTdG9yYWdlTmFtZSYmdGhpcy5fc2F2ZUluTG9jYWxTdG9yYWdlKHRoaXMuX2xvY2FsU3RvcmFnZU5hbWUpLHRoaXMuX2dsb2JhbENoYW5nZUhhbmRsZXImJnRoaXMuX2dsb2JhbENoYW5nZUhhbmRsZXIoKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wYW5lbC5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIsdGhpcy5faGlkZGVuPSEwLHRoaXN9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcGFuZWwuc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIix0aGlzLl9wYW5lbC5zdHlsZS56SW5kZXg9KytqLl90b3BaLHRoaXMuX2hpZGRlbj0hMSx0aGlzfSx0b2dnbGVWaXNpYmlsaXR5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2hpZGRlbj90aGlzLnNob3coKTp0aGlzLmhpZGUoKSx0aGlzfSxzZXRDb2xsYXBzaWJsZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fY29sbGFwc2libGU9YSx0aGlzLl9kcmFnZ2FibGV8fHRoaXMuX2NvbGxhcHNpYmxlP3RoaXMuX3RpdGxlQmFyLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIjp0aGlzLl90aXRsZUJhci5zdHlsZS5jdXJzb3I9XCJkZWZhdWx0XCIsdGhpc30sY29sbGFwc2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcGFuZWwucmVtb3ZlQ2hpbGQodGhpcy5fY29udGVudCksdGhpcy5fY29sbGFwc2VkPSEwLHRoaXN9LGV4cGFuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wYW5lbC5hcHBlbmRDaGlsZCh0aGlzLl9jb250ZW50KSx0aGlzLl9jb2xsYXBzZWQ9ITEsdGhpc30sdG9nZ2xlQ29sbGFwc2VkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2NvbGxhcHNlZD90aGlzLmV4cGFuZCgpOnRoaXMuY29sbGFwc2UoKSx0aGlzfSxzZXRLZXk6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX2tleUNvZGU9YS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLm9uS2V5VXApLHRoaXN9LF9vbktleVVwOmZ1bmN0aW9uKGEpe2Eua2V5Q29kZT09PXRoaXMuX2tleUNvZGUmJnRoaXMudG9nZ2xlVmlzaWJpbGl0eSgpfSxfZG91YmxlQ2xpY2tUaXRsZTpmdW5jdGlvbigpe3RoaXMuX2NvbGxhcHNpYmxlJiZ0aGlzLnRvZ2dsZUNvbGxhcHNlZCgpfSxyZW1vdmVDb250cm9sOmZ1bmN0aW9uKGEpe2lmKHRoaXMuX2NvbnRyb2xzW2FdKXZhciBiPXRoaXMuX2NvbnRyb2xzW2FdLmNvbnRhaW5lcjtyZXR1cm4gYiYmYi5wYXJlbnRFbGVtZW50JiZiLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYiksdGhpcy5fY29udHJvbHNbYV09bnVsbCx0aGlzfSxlbmFibGVDb250cm9sOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9jb250cm9sc1thXSYmKHRoaXMuX2NvbnRyb2xzW2FdLmNvbnRyb2wuZGlzYWJsZWQ9ITEpLHRoaXN9LGRpc2FibGVDb250cm9sOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9jb250cm9sc1thXSYmKHRoaXMuX2NvbnRyb2xzW2FdLmNvbnRyb2wuZGlzYWJsZWQ9ITApLHRoaXN9LGhpZGVDb250cm9sOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9jb250cm9sc1thXSYmKHRoaXMuX2NvbnRyb2xzW2FdLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSx0aGlzfSxzaG93Q29udHJvbDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fY29udHJvbHNbYV0mJih0aGlzLl9jb250cm9sc1thXS5jb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLHRoaXN9LG92ZXJyaWRlU3R5bGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLl9jb250cm9sc1thXSYmKHRoaXMuX2NvbnRyb2xzW2FdLmNvbnRyb2wuc3R5bGVbYl09YyksdGhpc30saGlkZVRpdGxlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX2NvbnRyb2xzW2FdLmxhYmVsO3JldHVybiBiJiYoYi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSx0aGlzfSxzaG93VGl0bGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5fY29udHJvbHNbYV0ubGFiZWw7cmV0dXJuIGImJihiLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiKSx0aGlzfSxoaWRlQWxsVGl0bGVzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIHRoaXMuX2NvbnRyb2xzKXt2YXIgYj10aGlzLl9jb250cm9sc1thXS5sYWJlbDtiJiYoYi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX1yZXR1cm4gdGhpc30sc2hvd0FsbFRpdGxlczpmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiB0aGlzLl9jb250cm9scyl7dmFyIGI9dGhpcy5fY29udHJvbHNbYV0ubGFiZWw7YiYmKGIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpfXJldHVybiB0aGlzfSxnZXRWYWx1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fY29udHJvbHNbYV0uZ2V0VmFsdWUoKX0sc2V0VmFsdWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5fY29udHJvbHNbYV0uc2V0VmFsdWUoYiksdGhpcy5fY2FsbEdDSCgpLHRoaXN9LGFkZEJvb2xlYW46ZnVuY3Rpb24oYSxkLGUpe3ZhciBmPXRoaXMuX2NyZWF0ZUNvbnRhaW5lcigpLGc9YyhcImxhYmVsXCIsbnVsbCxcInFzX2NoZWNrYm94X2xhYmVsXCIsZik7Zy50ZXh0Q29udGVudD1hLGcuc2V0QXR0cmlidXRlKFwiZm9yXCIsYSk7dmFyIGg9YyhcImxhYmVsXCIsbnVsbCxcInFzX2NoZWNrYm94XCIsZik7aC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixhKTt2YXIgaT1iKFwiY2hlY2tib3hcIixhLG51bGwsaCk7aS5jaGVja2VkPWQ7YyhcInNwYW5cIixudWxsLG51bGwsaCk7dGhpcy5fY29udHJvbHNbYV09e2NvbnRhaW5lcjpmLGNvbnRyb2w6aSxnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRyb2wuY2hlY2tlZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7dGhpcy5jb250cm9sLmNoZWNrZWQ9YSxlJiZlKGEpfX07dmFyIGo9dGhpcztyZXR1cm4gaS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtlJiZlKGkuY2hlY2tlZCksai5fY2FsbEdDSCgpfSksdGhpc30sYmluZEJvb2xlYW46ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLmFkZEJvb2xlYW4oYSxiLGZ1bmN0aW9uKGIpe2NbYV09Yn0pfSxhZGRCdXR0b246ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLl9jcmVhdGVDb250YWluZXIoKSxlPWIoXCJidXR0b25cIixhLFwicXNfYnV0dG9uXCIsZCk7ZS52YWx1ZT1hLHRoaXMuX2NvbnRyb2xzW2FdPXtjb250YWluZXI6ZCxjb250cm9sOmV9O3ZhciBmPXRoaXM7cmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtjJiZjKGUpLGYuX2NhbGxHQ0goKX0pLHRoaXN9LGFkZENvbG9yOmZ1bmN0aW9uKGcsaCxpKXtpZihlKCl8fGYoKXx8ZCgpKXJldHVybiB0aGlzLmFkZFRleHQoZyxoLGkpO3ZhciBqPXRoaXMuX2NyZWF0ZUNvbnRhaW5lcigpLGs9YShcIjxiPlwiK2crXCI6PC9iPiBcIitoLGopLGw9YihcImNvbG9yXCIsZyxcInFzX2NvbG9yXCIsaik7bC52YWx1ZT1ofHxcIiNmZjAwMDBcIjt2YXIgbT1jKFwibGFiZWxcIixudWxsLFwicXNfY29sb3JfbGFiZWxcIixqKTttLnNldEF0dHJpYnV0ZShcImZvclwiLGcpLG0uc3R5bGUuYmFja2dyb3VuZENvbG9yPWwudmFsdWUsdGhpcy5fY29udHJvbHNbZ109e2NvbnRhaW5lcjpqLGNvbnRyb2w6bCxjb2xvckxhYmVsOm0sbGFiZWw6ayx0aXRsZTpnLGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udHJvbC52YWx1ZX0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7dGhpcy5jb250cm9sLnZhbHVlPWEsdGhpcy5jb2xvckxhYmVsLnN0eWxlLmJhY2tncm91bmRDb2xvcj1sLnZhbHVlLHRoaXMubGFiZWwuaW5uZXJIVE1MPVwiPGI+XCIrdGhpcy50aXRsZStcIjo8L2I+IFwiK3RoaXMuY29udHJvbC52YWx1ZSxpJiZpKGEpfX07dmFyIG49dGhpcztyZXR1cm4gbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbigpe2suaW5uZXJIVE1MPVwiPGI+XCIrZytcIjo8L2I+IFwiK2wudmFsdWUsbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9bC52YWx1ZSxpJiZpKGwudmFsdWUpLG4uX2NhbGxHQ0goKX0pLHRoaXN9LGJpbmRDb2xvcjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuYWRkQ29sb3IoYSxiLGZ1bmN0aW9uKGIpe2NbYV09Yn0pfSxhZGREYXRlOmZ1bmN0aW9uKGMsZSxmKXt2YXIgZztpZihlIGluc3RhbmNlb2YgRGF0ZSl7dmFyIGg9ZS5nZXRGdWxsWWVhcigpLGk9ZS5nZXRNb250aCgpKzE7aTwxMCYmKGk9XCIwXCIraSk7dmFyIGo9ZS5nZXREYXRlKCk7Zz1oK1wiLVwiK2krXCItXCIran1lbHNlIGc9ZTtpZihkKCkpcmV0dXJuIHRoaXMuYWRkVGV4dChjLGcsZik7dmFyIGs9dGhpcy5fY3JlYXRlQ29udGFpbmVyKCksbD1hKFwiPGI+XCIrYytcIjwvYj5cIixrKSxtPWIoXCJkYXRlXCIsYyxcInFzX3RleHRfaW5wdXRcIixrKTttLnZhbHVlPWd8fFwiXCIsdGhpcy5fY29udHJvbHNbY109e2NvbnRhaW5lcjprLGNvbnRyb2w6bSxsYWJlbDpsLGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udHJvbC52YWx1ZX0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSBpbnN0YW5jZW9mIERhdGUpe3ZhciBjPWEuZ2V0RnVsbFllYXIoKSxkPWEuZ2V0TW9udGgoKSsxO2Q8MTAmJihkPVwiMFwiK2QpO3ZhciBlPWEuZ2V0RGF0ZSgpO2U8MTAmJihlPVwiMFwiK2UpLGI9YytcIi1cIitkK1wiLVwiK2V9ZWxzZSBiPWE7dGhpcy5jb250cm9sLnZhbHVlPWJ8fFwiXCIsZiYmZihiKX19O3ZhciBuPXRoaXM7cmV0dXJuIG0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24oKXtmJiZmKG0udmFsdWUpLG4uX2NhbGxHQ0goKX0pLHRoaXN9LGJpbmREYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5hZGREYXRlKGEsYixmdW5jdGlvbihiKXtjW2FdPWJ9KX0sYWRkRHJvcERvd246ZnVuY3Rpb24oYixkLGUpe2Zvcih2YXIgZj10aGlzLl9jcmVhdGVDb250YWluZXIoKSxnPWEoXCI8Yj5cIitiK1wiPC9iPlwiLGYpLGg9YyhcInNlbGVjdFwiLG51bGwsXCJxc19zZWxlY3RcIixmKSxpPTA7aTxkLmxlbmd0aDtpKyspe3ZhciBqPWMoXCJvcHRpb25cIik7ai5sYWJlbD1kW2ldLGouaW5uZXJUZXh0PWRbaV0saC5hZGQoail9dmFyIGs9dGhpcztyZXR1cm4gaC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYT1oLnNlbGVjdGVkSW5kZXgsYj1oLm9wdGlvbnM7ZSYmZSh7aW5kZXg6YSx2YWx1ZTpiW2FdLmxhYmVsfSksay5fY2FsbEdDSCgpfSksdGhpcy5fY29udHJvbHNbYl09e2NvbnRhaW5lcjpmLGNvbnRyb2w6aCxsYWJlbDpnLGdldFZhbHVlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jb250cm9sLnNlbGVjdGVkSW5kZXg7cmV0dXJue2luZGV4OmEsdmFsdWU6dGhpcy5jb250cm9sLm9wdGlvbnNbYV0ubGFiZWx9fSxzZXRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYjtiPW51bGwhPWEuaW5kZXg/YS5pbmRleDphO3ZhciBjPXRoaXMuY29udHJvbC5vcHRpb25zO3RoaXMuY29udHJvbC5zZWxlY3RlZEluZGV4PWIsZSYmZSh7aW5kZXg6Yix2YWx1ZTpjW2JdLmxhYmVsfSl9fSx0aGlzfSxiaW5kRHJvcERvd246ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLmFkZERyb3BEb3duKGEsYixmdW5jdGlvbihiKXtjW2FdPWIudmFsdWV9KX0sYWRkRWxlbWVudDpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuX2NyZWF0ZUNvbnRhaW5lcigpLGU9YShcIjxiPlwiK2IrXCI8L2I+XCIsZCk7cmV0dXJuIGQuYXBwZW5kQ2hpbGQoYyksdGhpcy5fY29udHJvbHNbYl09e2NvbnRhaW5lcjpkLGxhYmVsOmV9LHRoaXN9LGFkZEZpbGVDaG9vc2VyOmZ1bmN0aW9uKGQsZSxmLGcpe3ZhciBoPXRoaXMuX2NyZWF0ZUNvbnRhaW5lcigpLGk9YShcIjxiPlwiK2QrXCI8L2I+XCIsaCksaj1iKFwiZmlsZVwiLGQsXCJxc19maWxlX2Nob29zZXJcIixoKTtmJiYoai5hY2NlcHQ9Zik7dmFyIGs9YyhcImxhYmVsXCIsbnVsbCxcInFzX2ZpbGVfY2hvb3Nlcl9sYWJlbFwiLGgpO2suc2V0QXR0cmlidXRlKFwiZm9yXCIsZCksay50ZXh0Q29udGVudD1lfHxcIkNob29zZSBhIGZpbGUuLi5cIix0aGlzLl9jb250cm9sc1tkXT17Y29udGFpbmVyOmgsY29udHJvbDpqLGxhYmVsOmksZ2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250cm9sLmZpbGVzWzBdfX07dmFyIGw9dGhpcztyZXR1cm4gai5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsZnVuY3Rpb24oKXtqLmZpbGVzJiZqLmZpbGVzLmxlbmd0aCYmKGsudGV4dENvbnRlbnQ9ai5maWxlc1swXS5uYW1lLGcmJmcoai5maWxlc1swXSksbC5fY2FsbEdDSCgpKX0pLHRoaXN9LGFkZEhUTUw6ZnVuY3Rpb24oYixkKXt2YXIgZT10aGlzLl9jcmVhdGVDb250YWluZXIoKSxmPWEoXCI8Yj5cIitiK1wiOjwvYj4gXCIsZSksZz1jKFwiZGl2XCIsbnVsbCxudWxsLGUpO3JldHVybiBnLmlubmVySFRNTD1kLHRoaXMuX2NvbnRyb2xzW2JdPXtsYWJlbDpmLGNvbnRyb2w6ZyxnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRyb2wuaW5uZXJIVE1MfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXt0aGlzLmNvbnRyb2wuaW5uZXJIVE1MPWF9fSx0aGlzfSxhZGRJbWFnZTpmdW5jdGlvbihiLGQpe3ZhciBlPXRoaXMuX2NyZWF0ZUNvbnRhaW5lcigpLGY9YShcIjxiPlwiK2IrXCI8L2I+XCIsZSk7cmV0dXJuIGltZz1jKFwiaW1nXCIsbnVsbCxcInFzX2ltYWdlXCIsZSksaW1nLnNyYz1kLHRoaXMuX2NvbnRyb2xzW2JdPXtjb250YWluZXI6ZSxjb250cm9sOmltZyxsYWJlbDpmLGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udHJvbC5zcmN9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe3RoaXMuY29udHJvbC5zcmM9YX19LHRoaXN9LGFkZFJhbmdlOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdGhpcy5fYWRkTnVtYmVyKFwicmFuZ2VcIixhLGIsYyxkLGUsZil9LGFkZE51bWJlcjpmdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIHRoaXMuX2FkZE51bWJlcihcIm51bWJlclwiLGEsYixjLGQsZSxmKX0sX2FkZE51bWJlcjpmdW5jdGlvbihjLGUsZixnLGgsaSxqKXt2YXIgaz10aGlzLl9jcmVhdGVDb250YWluZXIoKSxsPWEoXCJcIixrKSxtPVwicmFuZ2VcIj09PWM/XCJxc19yYW5nZVwiOlwicXNfdGV4dF9pbnB1dCBxc19udW1iZXJcIixuPWIoYyxlLG0sayk7bi5taW49Znx8MCxuLm1heD1nfHwxMDAsbi5zdGVwPWl8fDEsbi52YWx1ZT1ofHwwLGwuaW5uZXJIVE1MPVwiPGI+XCIrZStcIjo8L2I+IFwiK24udmFsdWUsdGhpcy5fY29udHJvbHNbZV09e2NvbnRhaW5lcjprLGNvbnRyb2w6bixsYWJlbDpsLHRpdGxlOmUsY2FsbGJhY2s6aixnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBwYXJzZUZsb2F0KHRoaXMuY29udHJvbC52YWx1ZSl9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe3RoaXMuY29udHJvbC52YWx1ZT1hLHRoaXMubGFiZWwuaW5uZXJIVE1MPVwiPGI+XCIrdGhpcy50aXRsZStcIjo8L2I+IFwiK3RoaXMuY29udHJvbC52YWx1ZSxqJiZqKHBhcnNlRmxvYXQoYSkpfX07dmFyIG89XCJpbnB1dFwiO1wicmFuZ2VcIj09PWMmJmQoKSYmKG89XCJjaGFuZ2VcIik7dmFyIHA9dGhpcztyZXR1cm4gbi5hZGRFdmVudExpc3RlbmVyKG8sZnVuY3Rpb24oKXtsLmlubmVySFRNTD1cIjxiPlwiK2UrXCI6PC9iPiBcIituLnZhbHVlLGomJmoocGFyc2VGbG9hdChuLnZhbHVlKSkscC5fY2FsbEdDSCgpfSksdGhpc30sYmluZFJhbmdlOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdGhpcy5hZGRSYW5nZShhLGIsYyxkLGUsZnVuY3Rpb24oYil7ZlthXT1ifSl9LGJpbmROdW1iZXI6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiB0aGlzLmFkZE51bWJlcihhLGIsYyxkLGUsZnVuY3Rpb24oYil7ZlthXT1ifSl9LHNldFJhbmdlUGFyYW1ldGVyczpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5zZXROdW1iZXJQYXJhbWV0ZXJzKGEsYixjLGQpfSxzZXROdW1iZXJQYXJhbWV0ZXJzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXMuX2NvbnRyb2xzW2FdLGY9ZS5jb250cm9sLnZhbHVlO3JldHVybiBlLmNvbnRyb2wubWluPWIsZS5jb250cm9sLm1heD1jLGUuY29udHJvbC5zdGVwPWQsZS5jb250cm9sLnZhbHVlIT09ZiYmZS5jYWxsYmFjayYmZS5jYWxsYmFjayhlLmNvbnRyb2wudmFsdWUpLHRoaXN9LGFkZFBhc3N3b3JkOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5fYWRkVGV4dChcInBhc3N3b3JkXCIsYSxiLGMpfSxiaW5kUGFzc3dvcmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLmFkZFBhc3N3b3JkKGEsYixmdW5jdGlvbihiKXtjW2FdPWJ9KX0sYWRkUHJvZ3Jlc3NCYXI6ZnVuY3Rpb24oYixkLGUsZil7dmFyIGc9dGhpcy5fY3JlYXRlQ29udGFpbmVyKCksaD1hKFwiXCIsZyksaT1jKFwiZGl2XCIsbnVsbCxcInFzX3Byb2dyZXNzXCIsZyksaj1jKFwiZGl2XCIsbnVsbCxcInFzX3Byb2dyZXNzX3ZhbHVlXCIsaSk7cmV0dXJuIGouc3R5bGUud2lkdGg9ZS9kKjEwMCtcIiVcIixcIm51bWJlcnNcIj09PWY/aC5pbm5lckhUTUw9XCI8Yj5cIitiK1wiOjwvYj4gXCIrZStcIiAvIFwiK2Q6XCJwZXJjZW50XCI9PT1mP2guaW5uZXJIVE1MPVwiPGI+XCIrYitcIjo8L2I+IFwiK01hdGgucm91bmQoZS9kKjEwMCkrXCIlXCI6aC5pbm5lckhUTUw9XCI8Yj5cIitiK1wiPC9iPlwiLHRoaXMuX2NvbnRyb2xzW2JdPXtjb250YWluZXI6Zyxjb250cm9sOmksdmFsdWVEaXY6aix2YWx1ZURpc3BsYXk6ZixsYWJlbDpoLHZhbHVlOmUsbWF4OmQsdGl0bGU6YixnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXt0aGlzLnZhbHVlPU1hdGgubWF4KDAsTWF0aC5taW4oYSx0aGlzLm1heCkpLHRoaXMudmFsdWVEaXYuc3R5bGUud2lkdGg9dGhpcy52YWx1ZS90aGlzLm1heCoxMDArXCIlXCIsXCJudW1iZXJzXCI9PT10aGlzLnZhbHVlRGlzcGxheT90aGlzLmxhYmVsLmlubmVySFRNTD1cIjxiPlwiK3RoaXMudGl0bGUrXCI6PC9iPiBcIit0aGlzLnZhbHVlK1wiIC8gXCIrdGhpcy5tYXg6XCJwZXJjZW50XCI9PT10aGlzLnZhbHVlRGlzcGxheSYmKHRoaXMubGFiZWwuaW5uZXJIVE1MPVwiPGI+XCIrdGhpcy50aXRsZStcIjo8L2I+IFwiK01hdGgucm91bmQodGhpcy52YWx1ZS90aGlzLm1heCoxMDApK1wiJVwiKX19LHRoaXN9LHNldFByb2dyZXNzTWF4OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5fY29udHJvbHNbYV07cmV0dXJuIGMubWF4PWIsYy52YWx1ZT1NYXRoLm1pbihjLnZhbHVlLGMubWF4KSxjLnZhbHVlRGl2LnN0eWxlLndpZHRoPWMudmFsdWUvYy5tYXgqMTAwK1wiJVwiLFwibnVtYmVyc1wiPT09Yy52YWx1ZURpc3BsYXk/Yy5sYWJlbC5pbm5lckhUTUw9XCI8Yj5cIitjLnRpdGxlK1wiOjwvYj4gXCIrYy52YWx1ZStcIiAvIFwiK2MubWF4OlwicGVyY2VudFwiPT09Yy52YWx1ZURpc3BsYXk/Yy5sYWJlbC5pbm5lckhUTUw9XCI8Yj5cIitjLnRpdGxlK1wiOjwvYj4gXCIrTWF0aC5yb3VuZChjLnZhbHVlL2MubWF4KjEwMCkrXCIlXCI6Yy5sYWJlbC5pbm5lckhUTUw9XCI8Yj5cIitjLnRpdGxlK1wiPC9iPlwiLHRoaXN9LGFkZFRleHQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLl9hZGRUZXh0KFwidGV4dFwiLGEsYixjKX0sX2FkZFRleHQ6ZnVuY3Rpb24oZCxlLGYsZyl7dmFyIGgsaT10aGlzLl9jcmVhdGVDb250YWluZXIoKSxqPWEoXCI8Yj5cIitlK1wiPC9iPlwiLGkpO1widGV4dGFyZWFcIj09PWQ/KGg9YyhcInRleHRhcmVhXCIsZSxcInFzX3RleHRhcmVhXCIsaSksaC5yb3dzPTUpOmg9YihkLGUsXCJxc190ZXh0X2lucHV0XCIsaSksaC52YWx1ZT1mfHxcIlwiLHRoaXMuX2NvbnRyb2xzW2VdPXtjb250YWluZXI6aSxjb250cm9sOmgsbGFiZWw6aixnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRyb2wudmFsdWV9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe3RoaXMuY29udHJvbC52YWx1ZT1hLGcmJmcoYSl9fTt2YXIgaz10aGlzO3JldHVybiBoLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKCl7ZyYmZyhoLnZhbHVlKSxrLl9jYWxsR0NIKCl9KSx0aGlzfSxiaW5kVGV4dDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuYWRkVGV4dChhLGIsZnVuY3Rpb24oYil7Y1thXT1ifSl9LGFkZFRleHRBcmVhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5fYWRkVGV4dChcInRleHRhcmVhXCIsYSxiLGMpfSxzZXRUZXh0QXJlYVJvd3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5fY29udHJvbHNbYV0uY29udHJvbC5yb3dzPWIsdGhpc30sYmluZFRleHRBcmVhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5hZGRUZXh0QXJlYShhLGIsZnVuY3Rpb24oYil7Y1thXT1ifSl9LGFkZFRpbWU6ZnVuY3Rpb24oYyxlLGYpe3ZhciBnO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXt2YXIgaD1lLmdldEhvdXJzKCk7aDwxMCYmKGg9XCIwXCIraCk7dmFyIGk9ZS5nZXRNaW51dGVzKCk7aTwxMCYmKGk9XCIwXCIraSk7dmFyIGo9ZS5nZXRTZWNvbmRzKCk7ajwxMCYmKGo9XCIwXCIraiksZz1oK1wiOlwiK2krXCI6XCIran1lbHNlIGc9ZTtpZihkKCkpcmV0dXJuIHRoaXMuYWRkVGV4dChjLGcsZik7dmFyIGs9dGhpcy5fY3JlYXRlQ29udGFpbmVyKCksbD1hKFwiPGI+XCIrYytcIjwvYj5cIixrKSxtPWIoXCJ0aW1lXCIsYyxcInFzX3RleHRfaW5wdXRcIixrKTttLnZhbHVlPWd8fFwiXCIsdGhpcy5fY29udHJvbHNbY109e2NvbnRhaW5lcjprLGNvbnRyb2w6bSxsYWJlbDpsLGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udHJvbC52YWx1ZX0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSBpbnN0YW5jZW9mIERhdGUpe3ZhciBjPWEuZ2V0SG91cnMoKTtjPDEwJiYoYz1cIjBcIitjKTt2YXIgZD1hLmdldE1pbnV0ZXMoKTtkPDEwJiYoZD1cIjBcIitkKTt2YXIgZT1hLmdldFNlY29uZHMoKTtlPDEwJiYoZT1cIjBcIitlKSxiPWMrXCI6XCIrZCtcIjpcIitlfWVsc2UgYj1hO3RoaXMuY29udHJvbC52YWx1ZT1ifHxcIlwiLGYmJmYoYil9fTt2YXIgbj10aGlzO3JldHVybiBtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLGZ1bmN0aW9uKCl7ZiYmZihtLnZhbHVlKSxuLl9jYWxsR0NIKCl9KSx0aGlzfSxiaW5kVGltZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuYWRkVGltZShhLGIsZnVuY3Rpb24oYil7Y1thXT1ifSl9fTtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1qOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoaik6d2luZG93LlF1aWNrU2V0dGluZ3M9an0oKTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKlxuU2ltcGxlIEphdmFzY3JpcHQgdW5kbyBhbmQgcmVkby5cbmh0dHBzOi8vZ2l0aHViLmNvbS9BcnRodXJDbGVtZW5zL0phdmFzY3JpcHQtVW5kby1NYW5hZ2VyXG4qL1xuXG47KGZ1bmN0aW9uKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21UbyhhcnJheSwgZnJvbSwgdG8pIHtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGZyb20sXG4gICAgICAgICAgICAhdG8gfHxcbiAgICAgICAgICAgIDEgKyB0byAtIGZyb20gKyAoISh0byA8IDAgXiBmcm9tID49IDApICYmICh0byA8IDAgfHwgLTEpICogYXJyYXkubGVuZ3RoKSk7XG4gICAgICAgIHJldHVybiBhcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIFVuZG9NYW5hZ2VyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGNvbW1hbmRzID0gW10sXG4gICAgICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICAgICAgbGltaXQgPSAwLFxuICAgICAgICAgICAgaXNFeGVjdXRpbmcgPSBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBmdW5jdGlvbnNcbiAgICAgICAgICAgIGV4ZWN1dGU7XG5cbiAgICAgICAgZXhlY3V0ZSA9IGZ1bmN0aW9uKGNvbW1hbmQsIGFjdGlvbikge1xuICAgICAgICAgICAgaWYgKCFjb21tYW5kIHx8IHR5cGVvZiBjb21tYW5kW2FjdGlvbl0gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNFeGVjdXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb21tYW5kW2FjdGlvbl0oKTtcblxuICAgICAgICAgICAgaXNFeGVjdXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBBZGQgYSBjb21tYW5kIHRvIHRoZSBxdWV1ZS5cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRXhlY3V0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgaGVyZSBhZnRlciBoYXZpbmcgY2FsbGVkIHVuZG8sXG4gICAgICAgICAgICAgICAgLy8gaW52YWxpZGF0ZSBpdGVtcyBoaWdoZXIgb24gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgY29tbWFuZHMuc3BsaWNlKGluZGV4ICsgMSwgY29tbWFuZHMubGVuZ3RoIC0gaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBpZiBsaW1pdCBpcyBzZXQsIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBzdGFydFxuICAgICAgICAgICAgICAgIGlmIChsaW1pdCAmJiBjb21tYW5kcy5sZW5ndGggPiBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVGcm9tVG8oY29tbWFuZHMsIDAsIC0obGltaXQrMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGN1cnJlbnQgaW5kZXggdG8gdGhlIGVuZFxuICAgICAgICAgICAgICAgIGluZGV4ID0gY29tbWFuZHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgUGFzcyBhIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiB1bmRvIGFuZCByZWRvIGFjdGlvbnMuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0Q2FsbGJhY2s6IGZ1bmN0aW9uIChjYWxsYmFja0Z1bmMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrRnVuYztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBQZXJmb3JtIHVuZG86IGNhbGwgdGhlIHVuZG8gZnVuY3Rpb24gYXQgdGhlIGN1cnJlbnQgaW5kZXggYW5kIGRlY3JlYXNlIHRoZSBpbmRleCBieSAxLlxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVuZG86IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4ZWN1dGUoY29tbWFuZCwgXCJ1bmRvXCIpO1xuICAgICAgICAgICAgICAgIGluZGV4IC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIFBlcmZvcm0gcmVkbzogY2FsbCB0aGUgcmVkbyBmdW5jdGlvbiBhdCB0aGUgbmV4dCBpbmRleCBhbmQgaW5jcmVhc2UgdGhlIGluZGV4IGJ5IDEuXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkbzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4ZWN1dGUoY29tbWFuZCwgXCJyZWRvXCIpO1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIENsZWFycyB0aGUgbWVtb3J5LCBsb3NpbmcgYWxsIHN0b3JlZCBzdGF0ZXMuIFJlc2V0IHRoZSBpbmRleC5cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2X3NpemUgPSBjb21tYW5kcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBjb21tYW5kcyA9IFtdO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgKHByZXZfc2l6ZSA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFzVW5kbzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPT0gLTE7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYXNSZWRvOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4IDwgKGNvbW1hbmRzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0Q29tbWFuZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRJbmRleDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0TGltaXQ6IGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICAgICAgbGltaXQgPSBsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIFVuZG9NYW5hZ2VyO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBVbmRvTWFuYWdlcjtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuVW5kb01hbmFnZXIgPSBVbmRvTWFuYWdlcjtcblx0fVxuXG59KCkpO1xuIiwiaW1wb3J0IHsgYmV0d2Vlbiwgcm91bmQgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBDb29yZCB9IGZyb20gXCIuL2NsYXNzLmNvb3JkXCI7XHJcbmltcG9ydCBwNSBmcm9tIFwicDVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcmVhIHtcclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2hhcGUgdGhlIHR5cGUgb2YgYXJlYVxyXG5cdCAqIEBwYXJhbSB7Q29vcmRbXX0gY29vcmRzIHRoZSBsaXN0IG9mIGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgdGhlIGxpbmsgdGhpcyBhcmVhIGlzIGdvaW5nIHRvIHBvaW50IHRvXHJcblx0ICogQHBhcmFtIHtpbnR9IGlkIHRoZSB1bmlxdWUgaWRcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihzaGFwZSwgY29vcmRzID0gW10sIGhyZWYsIHRpdGxlLCBpZCA9IDApIHtcclxuXHRcdHRoaXMuc2V0U2hhcGUoc2hhcGUpO1xyXG5cdFx0dGhpcy5zZXRDb29yZHMoY29vcmRzKTtcclxuXHRcdHRoaXMuc2V0SHJlZihocmVmKTtcclxuXHRcdHRoaXMuc2V0VGl0bGUodGl0bGUpO1xyXG5cdFx0dGhpcy5zZXRJZChpZCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZnJvbU9iamVjdChvKSB7XHJcblx0XHRzd2l0Y2ggKG8uc2hhcGUpIHtcclxuXHRcdFx0Y2FzZSAncmVjdCc6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBcmVhUmVjdChvLmNvb3Jkcy5tYXAoQ29vcmQuZnJvbU9iamVjdCksIG8uaHJlZiwgby50aXRsZSwgby5pZCk7XHJcblx0XHRcdGNhc2UgJ2NpcmNsZSc6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBcmVhQ2lyY2xlKG8uY29vcmRzLm1hcChDb29yZC5mcm9tT2JqZWN0KSwgby5yYWRpdXMsIG8uaHJlZiwgby50aXRsZSwgby5pZCk7XHJcblx0XHRcdGNhc2UgJ3BvbHknOlxyXG5cdFx0XHRcdHJldHVybiBuZXcgQXJlYVBvbHkoby5jb29yZHMubWFwKENvb3JkLmZyb21PYmplY3QpLCBvLmhyZWYsIG8udGl0bGUsIG8uaWQsIG8uY2xvc2VkKTtcclxuXHRcdFx0Y2FzZSAnZGVmYXVsdCc6XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBBcmVhRGVmYXVsdChvLmhyZWYsIG8udGl0bGUpO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93ICdOb3QgYW4gYXJlYSdcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldFNoYXBlKHNoYXBlKSB7XHJcblx0XHR0aGlzLnNoYXBlID0gc2hhcGU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzIGEgY29vcmRpbmF0ZSB0byB0aGUgY29vcmRzIGFycmF5LCBhbmQgcmV0dXJucyBpdCdzIG5ldyBsZW5ndGhcclxuXHQgKiBAcGFyYW0ge0Nvb3JkfSBjb29yZCBjb29yZGluYXRlXHJcblx0ICovXHJcblx0YWRkQ29vcmQoY29vcmQpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvb3Jkcy5wdXNoKGNvb3JkKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Q29vcmRbXX0gY29vcmRzIFxyXG5cdCAqL1xyXG5cdHNldENvb3Jkcyhjb29yZHMpIHtcclxuXHRcdHRoaXMuY29vcmRzID0gY29vcmRzO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29vcmRzKG1vZGUgPSBcImRlZmF1bHRcIikge1xyXG5cdFx0c3dpdGNoIChtb2RlKSB7XHJcblx0XHRcdGNhc2UgXCJkZWZhdWx0XCI6XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29vcmRzLnNsaWNlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRQb2ludHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb29yZHM7XHJcblx0fVxyXG5cclxuXHRpc0VtcHR5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29vcmRzLmxlbmd0aCA9PSAwO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtBcmVhfSBhcmVhIFxyXG5cdCAqL1xyXG5cdGVxdWFscyhhcmVhKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pZCA9PSBhcmVhLmlkO1xyXG5cdH1cclxuXHJcblx0Y29weUNvb3JkcygpIHtcclxuXHRcdGxldCBjb3B5ID0gW107XHJcblx0XHR0aGlzLmNvb3Jkcy5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XHJcblx0XHRcdGNvcHlbaW5kZXhdID0gbmV3IENvb3JkKHZhbC54LCB2YWwueSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBjb3B5O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGFzdENvb3JkKGNvb3JkKSB7XHJcblx0XHR0aGlzLmNvb3Jkc1t0aGlzLmNvb3Jkcy5sZW5ndGggLSAxXSA9IGNvb3JkO1xyXG5cdH1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU3RhcnQgSW50ZXJmYWNlIE1vdmFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdG1vdmUoY29vcmQpIHtcclxuXHRcdGxldCBmY29vcmQgPSB0aGlzLmZpcnN0Q29vcmQoKTtcclxuXHRcdGlmIChjb29yZCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0ZmNvb3JkLmFkZChjb29yZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmZpcnN0Q29vcmQoKTtcclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKGNvb3JkKSB7XHJcblx0XHRsZXQgbW92ZSA9IHRoaXMuY29vcmRzWzBdLmRpZmYoY29vcmQpO1xyXG5cdFx0IHRoaXMubW92ZShtb3ZlKTtcclxuXHR9XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBJbnRlcmZhY2UgTW92YWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRpc0RyYXdhYmxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29vcmRzLmxlbmd0aCA+PSAxO1xyXG5cdH1cclxuXHJcblx0aXNWYWxpZFNoYXBlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaXNEcmF3YWJsZSgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDb29yZH0gY29vcmQgXHJcblx0ICovXHJcblx0aXNPdmVyKGNvb3JkKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0Nvb3JkfSBjb29yZCBcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gdG9sZXJhbmNlXHJcblx0ICogQHJldHVybnMge0Nvb3JkfGZhbHNlfVxyXG5cdCAqL1xyXG5cdGlzT3ZlclBvaW50KGNvb3JkLCB0b2xlcmFuY2UpIHtcclxuXHRcdGxldCBwb2ludCA9IHRoaXMuZ2V0UG9pbnRzKCkuZmluZChjID0+IHtcclxuXHRcdFx0cmV0dXJuIENvb3JkLmRpc3QoY29vcmQsIGMpIDwgdG9sZXJhbmNlO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gcG9pbnQgPyBwb2ludCA6IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0c2V0SHJlZih1cmwpIHtcclxuXHRcdHRoaXMuaHJlZiA9IHVybDtcclxuXHR9XHJcblxyXG5cdHNldFRpdGxlKHRpdGxlKSB7XHJcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XHJcblx0fVxyXG5cclxuXHRzZXRJZChpZCkge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdH1cclxuXHJcblx0Zmlyc3RDb29yZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvb3Jkc1swXTtcclxuXHR9XHJcblxyXG5cdGh0bWxDb29yZHMoZGVjLCBzY2FsZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q29vcmRzKFwiaHRtbFwiKS5tYXAoYyA9PiB7XHJcblx0XHRcdHJldHVybiBjLnRvSHRtbChkZWMpO1xyXG5cdFx0fSkuam9pbignLCcpO1xyXG5cdH1cclxuXHJcblx0dG9IdG1sKHNjYWxlID0gMSkge1xyXG5cdFx0bGV0IGh0bWxDb29yZHMgPSB0aGlzLmh0bWxDb29yZHMoMCwgc2NhbGUpO1xyXG5cdFx0bGV0IHRpdGxlID0gXCJcIjtcclxuXHRcdGlmIChodG1sQ29vcmRzICE9IFwiXCIpIHtcclxuXHRcdFx0aHRtbENvb3JkcyA9IGBjb29yZHM9XCIke2h0bWxDb29yZHN9XCJgO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMudGl0bGUpIHtcclxuXHRcdFx0dGl0bGUgPSBgdGl0bGU9XCIke3RoaXMudGl0bGV9XCJgO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGA8YXJlYSBzaGFwZT1cIiR7dGhpcy5zaGFwZX1cIiAke2h0bWxDb29yZHN9IGhyZWY9XCIke3RoaXMuaHJlZn1cIiBhbHQ9XCIke3RoaXMuaHJlZn1cIiAke3RpdGxlfSAvPmA7XHJcblx0fVxyXG5cclxuXHRzdmdBcmVhKHNjYWxlKSB7IH1cclxuXHJcblx0dG9Tdmcoc2NhbGUgPSAxKSB7XHJcblx0XHRyZXR1cm4gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXMuaHJlZn1cIj4ke3RoaXMuc3ZnQXJlYShzY2FsZSl9PC9hPmA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXJlYUNpcmNsZSBleHRlbmRzIEFyZWEge1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7Q29vcmRbXX0gY29vcmRzIHRoZSBsaXN0IG9mIGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgdGhlIGNpcmNsZVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIHRoZSBsaW5rIHRoaXMgYXJlYSBpcyBnb2luZyB0byBwb2ludCB0b1xyXG5cdCAqIEBwYXJhbSB7aW50fSBpZCB0aGUgdW5pcXVlIGlkXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoY29vcmRzID0gW10sIHJhZGl1cyA9IDAsIGhyZWYsIHRpdGxlLCBpZCkge1xyXG5cdFx0c3VwZXIoXCJjaXJjbGVcIiwgY29vcmRzLCBocmVmLCB0aXRsZSwgaWQpO1xyXG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcblx0fVxyXG5cclxuXHRnZXRDZW50ZXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5maXJzdENvb3JkKCk7XHJcblx0fVxyXG5cclxuXHRpc1ZhbGlkU2hhcGUoKSB7XHJcblx0XHRyZXR1cm4gc3VwZXIuaXNWYWxpZFNoYXBlKCkgJiYgdGhpcy5yYWRpdXMgPiAwO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDb29yZH0gY29vcmQgXHJcblx0ICovXHJcblx0aXNPdmVyKGNvb3JkKSB7XHJcblx0XHRsZXQgY2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKTtcclxuXHRcdHJldHVybiBDb29yZC5kaXN0KGNvb3JkLCBjZW50ZXIpIDwgdGhpcy5yYWRpdXM7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVMYXN0Q29vcmQoY29vcmQpIHtcclxuXHRcdGxldCBjZW50ZXIgPSB0aGlzLmdldENlbnRlcigpO1xyXG5cdFx0dGhpcy5yYWRpdXMgPSBDb29yZC5kaXN0KGNlbnRlciwgY29vcmQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogZHJhdyB0aGUgYXJlYSB0byB0aGUgZ2l2ZW4gcDUgaW5zdGFuY2VcclxuXHQgKiBAcGFyYW0ge3A1fSBwNSBcclxuXHQgKi9cclxuXHRkaXNwbGF5KHA1KSB7XHJcblx0XHRwNS5lbGxpcHNlKHRoaXMuZ2V0Q2VudGVyKCkueCwgdGhpcy5nZXRDZW50ZXIoKS55LCB0aGlzLnJhZGl1cyAqIDIpO1xyXG5cdH1cclxuXHJcblx0aHRtbENvb3JkcyhkZWMsIHNjYWxlKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRDZW50ZXIoKS50b0h0bWwoZGVjLCBzY2FsZSkgKyBcIixcIiArIHJvdW5kKHRoaXMucmFkaXVzLCBkZWMpO1xyXG5cdH1cclxuXHJcblx0c3ZnQXJlYShzY2FsZSkge1xyXG5cdFx0bGV0IHggPSB0aGlzLmNvb3Jkc1swXS50b1N0cigwLCAneCcsIHNjYWxlKTtcclxuXHRcdGxldCB5ID0gdGhpcy5jb29yZHNbMF0udG9TdHIoMCwgJ3knLCBzY2FsZSk7XHJcblx0XHRsZXQgciA9IHJvdW5kKHRoaXMucmFkaXVzLCAwKTtcclxuXHRcdHJldHVybiBgPGNpcmNsZSBjeD1cIiR7eH1cIiBjeT1cIiR7eX1cIiByPVwiJHtyfVwiIC8+YDtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFyZWFQb2x5IGV4dGVuZHMgQXJlYSB7XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDb29yZFtdfSBjb29yZHMgdGhlIGxpc3Qgb2YgY29vcmRpbmF0ZXNcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHJlZiB0aGUgbGluayB0aGlzIGFyZWEgaXMgZ29pbmcgdG8gcG9pbnQgdG9cclxuXHQgKiBAcGFyYW0ge2ludH0gaWQgdGhlIHVuaXF1ZSBpZFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGNvb3JkcyA9IFtdLCBocmVmLCB0aXRsZSwgaWQsIGNsb3NlZCA9IGZhbHNlKSB7XHJcblx0XHRzdXBlcihcInBvbHlcIiwgY29vcmRzLCBocmVmLCB0aXRsZSwgaWQpO1xyXG5cdFx0dGhpcy5jbG9zZWQgPSBjbG9zZWQ7XHJcblx0fVxyXG5cclxuXHRpc0RyYXdhYmxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29vcmRzLmxlbmd0aCA+PSAyO1xyXG5cdH1cclxuXHJcblx0aXNWYWxpZFNoYXBlKCkge1xyXG5cdFx0cmV0dXJuIHN1cGVyLmlzVmFsaWRTaGFwZSgpICYmIHRoaXMuY2xvc2VkO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDb29yZH0gY29vcmQgXHJcblx0ICovXHJcblx0aXNPdmVyKGNvb3JkKSB7XHJcblx0XHRsZXQgeCA9IGNvb3JkLng7XHJcblx0XHRsZXQgeSA9IGNvb3JkLnk7XHJcblx0XHRsZXQgY29ybmVyc1ggPSB0aGlzLmNvb3Jkcy5tYXAoYyA9PiB7IHJldHVybiBjLnggfSk7XHJcblx0XHRsZXQgY29ybmVyc1kgPSB0aGlzLmNvb3Jkcy5tYXAoYyA9PiB7IHJldHVybiBjLnkgfSk7XHJcblxyXG5cdFx0bGV0IGksIGogPSBjb3JuZXJzWC5sZW5ndGggLSAxO1xyXG5cdFx0bGV0IG9kZE5vZGVzID0gZmFsc2U7XHJcblxyXG5cdFx0bGV0IHBvbHlYID0gY29ybmVyc1g7XHJcblx0XHRsZXQgcG9seVkgPSBjb3JuZXJzWTtcclxuXHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgY29ybmVyc1gubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKChwb2x5WVtpXSA8IHkgJiYgcG9seVlbal0gPj0geSB8fCBwb2x5WVtqXSA8IHkgJiYgcG9seVlbaV0gPj0geSkgJiYgKHBvbHlYW2ldIDw9IHggfHwgcG9seVhbal0gPD0geCkpIHtcclxuXHRcdFx0XHRvZGROb2RlcyBePSAocG9seVhbaV0gKyAoeSAtIHBvbHlZW2ldKSAvIChwb2x5WVtqXSAtIHBvbHlZW2ldKSAqIChwb2x5WFtqXSAtIHBvbHlYW2ldKSA8IHgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGogPSBpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBvZGROb2RlcztcclxuXHR9XHJcblxyXG5cdGlzQ2xvc2FibGUoY29vcmQsIHRvbGVyYW5jZSkge1xyXG5cdFx0bGV0IGRpc3QgPSBDb29yZC5kaXN0KGNvb3JkLCB0aGlzLmZpcnN0Q29vcmQoKSk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb29yZHMubGVuZ3RoID49IDQgJiYgZGlzdCA8IHRvbGVyYW5jZTtcclxuXHR9XHJcblxyXG5cdGdldENvb3Jkcyhtb2RlID0gXCJkZWZhdWx0XCIpIHtcclxuXHRcdGxldCBjb29yZHMgPSBzdXBlci5nZXRDb29yZHMoKTtcclxuXHRcdHN3aXRjaCAobW9kZSkge1xyXG5cdFx0XHRjYXNlIFwiZGVmYXVsdFwiOlxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGlmICh0aGlzLmNsb3NlZCkge1xyXG5cdFx0XHRcdFx0Y29vcmRzLnB1c2godGhpcy5maXJzdENvb3JkKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gY29vcmRzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xvc2UoKSB7XHJcblx0XHR0aGlzLmNsb3NlZCA9IHRydWU7XHJcblx0XHR0aGlzLmNvb3Jkcy5wb3AoKTtcclxuXHR9XHJcblxyXG5cdG1vdmUoY29vcmQpIHtcclxuXHRcdHRoaXMuY29vcmRzLm1hcChjID0+IGMuYWRkKGNvb3JkKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBkcmF3IHRoZSBhcmVhIHRvIHRoZSBnaXZlbiBwNSBpbnN0YW5jZVxyXG5cdCAqIEBwYXJhbSB7cDV9IHA1IFxyXG5cdCAqL1xyXG5cdGRpc3BsYXkocDUpIHtcclxuXHRcdHA1LmJlZ2luU2hhcGUoKTtcclxuXHRcdHRoaXMuZ2V0Q29vcmRzKCkuZm9yRWFjaChjID0+IHA1LnZlcnRleChjLngsIGMueSkpO1xyXG5cdFx0cDUuZW5kU2hhcGUoKTtcclxuXHR9XHJcblxyXG5cdHN2Z0FyZWEoc2NhbGUpIHtcclxuXHRcdGxldCBwb2ludHMgPSB0aGlzLmdldENvb3JkcygpLm1hcChjID0+IHtcclxuXHRcdFx0cmV0dXJuIGMudG9TdHIoMCwgJ3gnLCBzY2FsZSkgKyAnLCcgKyBjLnRvU3RyKDAsICd5Jywgc2NhbGUpO1xyXG5cdFx0fSkuam9pbignICcpO1xyXG5cdFx0cmV0dXJuIGA8cG9seWdvbiBwb2ludHM9XCIke3BvaW50c31cIiAvPmA7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXJlYVJlY3QgZXh0ZW5kcyBBcmVhUG9seSB7XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtDb29yZFtdfSBjb29yZHMgdGhlIGxpc3Qgb2YgY29vcmRpbmF0ZXNcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaHJlZiB0aGUgbGluayB0aGlzIGFyZWEgaXMgZ29pbmcgdG8gcG9pbnQgdG9cclxuXHQgKiBAcGFyYW0ge2ludH0gaWQgdGhlIHVuaXF1ZSBpZFxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKGNvb3JkcyA9IFtdLCBocmVmLCB0aXRsZSwgaWQpIHtcclxuXHRcdHN1cGVyKGNvb3JkcywgaHJlZiwgdGl0bGUsIGlkLCB0cnVlKTtcclxuXHRcdGlmICh0aGlzLmNvb3Jkcy5sZW5ndGggPiAwICYmIHRoaXMuY29vcmRzLmxlbmd0aCA8IDQpIHtcclxuXHRcdFx0bGV0IGNvb3JkID0gdGhpcy5maXJzdENvb3JkKCk7XHJcblx0XHRcdHRoaXMuY29vcmRzID0gW1xyXG5cdFx0XHRcdGNvb3JkLFxyXG5cdFx0XHRcdGNvb3JkLmNsb25lKCksXHJcblx0XHRcdFx0Y29vcmQuY2xvbmUoKSxcclxuXHRcdFx0XHRjb29yZC5jbG9uZSgpLFxyXG5cdFx0XHRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXBkYXRlTGFzdENvb3JkKGNvb3JkKSB7XHJcblx0XHR0aGlzLmNvb3Jkc1sxXS54ID0gY29vcmQueFxyXG5cdFx0dGhpcy5jb29yZHNbMl0gPSBjb29yZDtcclxuXHRcdHRoaXMuY29vcmRzWzNdLnkgPSBjb29yZC55O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcmVhRGVmYXVsdCBleHRlbmRzIEFyZWEge1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgdGhlIGxpbmsgdGhpcyBhcmVhIGlzIGdvaW5nIHRvIHBvaW50IHRvXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoaHJlZiwgdGl0bGUpIHtcclxuXHRcdHN1cGVyKFwiZGVmYXVsdFwiLCBbXSwgaHJlZiwgdGl0bGUpO1xyXG5cdFx0dGhpcy5pc0RlZmF1bHQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0aXNEcmF3YWJsZSgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0aXNPdmVyKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBkcmF3IHRoZSBhcmVhIHRvIHRoZSBnaXZlbiBwNSBpbnN0YW5jZVxyXG5cdCAqIEBwYXJhbSB7cDV9IHA1IFxyXG5cdCAqL1xyXG5cdGRpc3BsYXkocDUpIHtcclxuXHRcdHA1LnJlY3QoMCwgMCwgcDUuZ2V0TWFwKCkud2lkdGggLSAxLCBwNS5nZXRNYXAoKS5oZWlnaHQgLSAxKTtcclxuXHR9XHJcblxyXG5cdHN2Z0FyZWEoc2NhbGUpIHtcclxuXHRcdHJldHVybiAnPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPic7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIDJkIHh5IGNvb3JkaW5hdGVcclxuKi9cclxuZXhwb3J0IGNsYXNzIENvb3JkIHtcclxuXHRjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcblx0XHR0aGlzLnNldCh4LCB5KTtcclxuXHR9XHJcblxyXG5cdHNldCh4LCB5KSB7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBmcm9tT2JqZWN0KG9iaikge1xyXG5cdFx0cmV0dXJuIG5ldyBDb29yZChvYmoueCwgb2JqLnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28geHkgY29vcmRpbmF0ZXNcclxuXHQgKiBAcGFyYW0ge0Nvb3JkfSBjb29yZDEgXHJcblx0ICogQHBhcmFtIHtDb29yZH0gY29vcmQyIFxyXG5cdCAqL1xyXG5cdHN0YXRpYyBkaXN0KGNvb3JkMSwgY29vcmQyKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGNvb3JkMS54IC0gY29vcmQyLngsIDIpICsgTWF0aC5wb3coY29vcmQxLnkgLSBjb29yZDIueSwgMikpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICpleGNoYW5nZSBhIHZhbHVlIGJldHdlZW4gdHdvIHh5IGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtDb29yZH0gY29vcmQxIFxyXG5cdCAqIEBwYXJhbSB7Q29vcmR9IGNvb3JkMiBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsXHJcblx0ICovXHJcblx0c3RhdGljIHN3YXAoY29vcmQxLCBjb29yZDIsIHZhbCkge1xyXG5cdFx0bGV0IHRtcCA9IGNvb3JkMVt2YWxdO1xyXG5cdFx0Y29vcmQxW3ZhbF0gPSBjb29yZDJbdmFsXTtcclxuXHRcdGNvb3JkMlt2YWxdID0gdG1wO1xyXG5cdH1cclxuXHJcblx0aXNFbXB0eSgpIHtcclxuXHRcdHJldHVybiAhdGhpcy54ICYmICF0aGlzLnk7XHJcblx0fVxyXG5cclxuXHRvbmVJc0VtcHR5KCkge1xyXG5cdFx0cmV0dXJuICF0aGlzLnggfHwgIXRoaXMueVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcmV0dXJucyB0aGUgc3VtIG9mIHR3byB4eSBjb29yZGluYXRlc1xyXG5cdCAqIEBwYXJhbSB7Q29vcmR9IGNvb3JkIFxyXG5cdCAqL1xyXG5cdHN1bShjb29yZCkge1xyXG5cdFx0cmV0dXJuIG5ldyBDb29yZCh0aGlzLnggKyBjb29yZC54LCB0aGlzLnkgKyBjb29yZC55KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGNvb3JkaW5hdGUgdG8gdGhlIGN1cnJlbnQgb25lXHJcblx0ICogQHBhcmFtIHtDb29yZH0gY29vcmQgXHJcblx0ICovXHJcblx0YWRkKGNvb3JkKSB7XHJcblx0XHR0aGlzLnggKz0gY29vcmQueDtcclxuXHRcdHRoaXMueSArPSBjb29yZC55O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcmV0dXJucyB0aGUgZGlmZmVyZW5jZSBvZiB0d28geHkgY29vcmRpbmF0ZXNcclxuXHQgKiBAcGFyYW0ge0Nvb3JkfSBjb29yZCBcclxuXHQgKi9cclxuXHRkaWZmKGNvb3JkKSB7XHJcblx0XHRyZXR1cm4gbmV3IENvb3JkKHRoaXMueCAtIGNvb3JkLngsIHRoaXMueSAtIGNvb3JkLnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3Vic3RyYWN0IHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY29vcmRpbmF0ZSB0byB0aGUgY3VycmVudCBvbmVcclxuXHQgKiBAcGFyYW0ge0Nvb3JkfSBjb29yZCBcclxuXHQgKi9cclxuXHRzdWIoY29vcmQpIHtcclxuXHRcdHRoaXMueCAtPSBjb29yZC54O1xyXG5cdFx0dGhpcy55IC09IGNvb3JkLnk7XHJcblx0fVxyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTdGFydCBJbnRlcmZhY2UgTW92YWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0LyoqXHJcblx0ICogQWxpYXMgb2YgYWRkXHJcblx0ICogQHBhcmFtIHtDb29yZH0gY29vcmRcclxuXHQgKi9cclxuXHRtb3ZlKGNvb3JkKSB7XHJcblx0XHR0aGlzLmFkZChjb29yZCk7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0c2V0UG9zaXRpb24oY29vcmQpIHtcclxuXHRcdHRoaXMuc2V0KGNvb3JkLngsIGNvb3JkLnkpO1xyXG5cdH1cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kIEludGVyZmFjZSBNb3ZhYmxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdGNsb25lKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBDb29yZCh0aGlzLngsIHRoaXMueSk7XHJcblx0fVxyXG5cclxuXHRpbnZlcnQoKSB7XHJcblx0XHRyZXR1cm4gbmV3IENvb3JkKC0gdGhpcy54LCAtdGhpcy55KTtcclxuXHR9XHJcblxyXG5cdHRvU3RyKGRlYywgdmFsLCBzY2FsZSkge1xyXG5cdFx0cmV0dXJuIHJvdW5kKHRoaXNbdmFsXSAqIHNjYWxlLCBkZWMpXHJcblx0fVxyXG5cclxuXHR0b0h0bWwoZGVjLCBzY2FsZSA9IDEpIHtcclxuXHRcdHJldHVybiB0aGlzLnRvU3RyKGRlYywgXCJ4XCIsIHNjYWxlKSArIFwiLFwiICsgdGhpcy50b1N0cihkZWMsIFwieVwiLCBzY2FsZSk7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IEFyZWEsIEFyZWFEZWZhdWx0IH0gZnJvbSBcIi4vY2xhc3MuYXJlYVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlTWFwIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ29udHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSB7QXJlYVtdfSBhcmVhcyBcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcclxuXHQqIEBwYXJhbSB7Ym9vbGVhbn0gaGFzRGVmYXVsdEFyZWFcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBhcmVhcyA9IFtdLCBuYW1lLCBoYXNEZWZhdWx0QXJlYSA9IGZhbHNlKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0XHR0aGlzLmFyZWFzID0gYXJlYXM7XHJcblx0XHR0aGlzLmRBcmVhID0gbmV3IEFyZWFEZWZhdWx0KCk7XHJcblx0XHR0aGlzLmhhc0RlZmF1bHRBcmVhID0gaGFzRGVmYXVsdEFyZWE7XHJcblx0XHR0aGlzLmxhc3RJZCA9IDA7XHJcblx0fVxyXG5cclxuXHRzZXRGcm9tT2JqZWN0KG9iaikge1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcblx0XHRcdGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IG9ialtrZXldO1xyXG5cdFx0XHRcdGlmIChrZXkgPT0gJ2FyZWFzJykge1xyXG5cdFx0XHRcdFx0dGhpcy5hcmVhcyA9IHZhbHVlLm1hcChBcmVhLmZyb21PYmplY3QpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoa2V5ID09ICdkQXJlYScpIHtcclxuXHRcdFx0XHRcdHRoaXMuZEFyZWEgPSBBcmVhLmZyb21PYmplY3QodmFsdWUpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoT2JqZWN0LmtleXModGhpcykuaW5jbHVkZXMoa2V5KSkge1xyXG5cdFx0XHRcdFx0dGhpc1trZXldID0gdmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXROYW1lKG5hbWUpIHtcclxuXHRcdGlmIChuYW1lKSB7XHJcblx0XHRcdHRoaXMubmFtZSA9IG5hbWUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRzZXREZWZhdWx0QXJlYShib29sKSB7XHJcblx0XHR0aGlzLmhhc0RlZmF1bHRBcmVhID0gYm9vbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSBhcmVhIG9mIHRoZSBpbWFnZU1hcFxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gYWxsIHdpdGggdGhlIGRlZmF1bHQgYXJlYSAoaWYgZXhpc3QpIG9yIG5vdCAoZGVmYXVsdDogdHJ1ZSlcclxuXHQgKiBAcmV0dXJucyB7QXJlYVtdfSBhIGNvcHkgb2YgdGhlIGFyZWFzXHJcblx0ICovXHJcblx0Z2V0QXJlYXMoYWxsID0gdHJ1ZSkge1xyXG5cdFx0bGV0IGFyZWFzID0gdGhpcy5hcmVhcy5zbGljZSgpO1xyXG5cdFx0aWYgKGFsbCAmJiB0aGlzLmhhc0RlZmF1bHRBcmVhKSBhcmVhcy5wdXNoKHRoaXMuZEFyZWEpO1xyXG5cdFx0cmV0dXJuIGFyZWFzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcyBhbiBBcmVhIGF0IHRoZSBlbmQgb2YgdGhlIGFyZWFzIGFycmF5LCBhbmQgcmV0dXJucyB0aGUgbGFzdCBpbnNlcnRlZCBBcmVhJ3MgaWRcclxuXHQgKiBAcGFyYW0ge0FyZWF9IGFyZWEgYW4gYXJlYVxyXG5cdCAqL1xyXG5cdGFkZEFyZWEoYXJlYSwgc2V0SWQgPSB0cnVlKSB7XHJcblx0XHRpZiAoc2V0SWQpXHJcblx0XHRcdGFyZWEuc2V0SWQodGhpcy5nZXROZXdJZCgpKTtcclxuXHRcdHRoaXMuYXJlYXMudW5zaGlmdChhcmVhKTtcclxuXHRcdHJldHVybiBhcmVhLmlkO1xyXG5cdH1cclxuXHJcblx0cm12QXJlYShpZCkge1xyXG5cdFx0bGV0IGluZGV4ID0gdGhpcy5hcmVhSW5kZXgoaWQpO1xyXG5cdFx0dGhpcy5hcmVhcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0cmV0dXJuIGluZGV4O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTW92ZSBhbiBhcmVhIHVwIG9yIGRvd24gaW4gdGhlIGFyZWFzIGFycmF5XHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IGlkIFxyXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkaXJlY3Rpb24gXHJcblx0ICovXHJcblx0bW92ZUFyZWEoaWQsIGRpcmVjdGlvbikge1xyXG5cdFx0bGV0IGluZGV4ID0gdGhpcy5hcmVhSW5kZXgoaWQpO1xyXG5cdFx0bGV0IGFyZWEgPSB0aGlzLmFyZWFzW2luZGV4XTtcclxuXHRcdGxldCBuZXh0SW5kZXggPSBpbmRleCArIGRpcmVjdGlvbjtcclxuXHRcdGlmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA+PSB0aGlzLmFyZWFzLmxlbmd0aClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0dGhpcy5ybXZBcmVhKGlkKTtcclxuXHRcdHRoaXMuaW5zZXJ0QXJlYShhcmVhLCBuZXh0SW5kZXgpO1xyXG5cdFx0cmV0dXJuIG5leHRJbmRleDtcclxuXHR9XHJcblxyXG5cdHNoaWZ0QXJlYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmFyZWFzLnNoaWZ0KCk7XHJcblx0fVxyXG5cclxuXHRwb3BBcmVhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXJlYXMucG9wKCk7XHJcblx0fVxyXG5cclxuXHRpbnNlcnRBcmVhKGFyZWEsIGluZGV4KSB7XHJcblx0XHR0aGlzLmFyZWFzLnNwbGljZShpbmRleCwgMCwgYXJlYSk7XHJcblx0fVxyXG5cclxuXHRhcmVhSW5kZXgoaWQpIHtcclxuXHRcdHJldHVybiB0aGlzLmFyZWFzLmZpbmRJbmRleChhID0+IHtcclxuXHRcdFx0cmV0dXJuIGEuaWQgPT0gaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlzRmlyc3RBcmVhKGlkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmVhSW5kZXgoaWQpID09IDA7XHJcblx0fVxyXG5cclxuXHRpc0xhc3RBcmVhKGlkKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmVhSW5kZXgoaWQpID09IHRoaXMuYXJlYXMubGVuZ3RoIC0gMTtcclxuXHR9XHJcblxyXG5cdGdldE5ld0lkKCkge1xyXG5cdFx0dGhpcy5sYXN0SWQrKztcclxuXHRcdHJldHVybiB0aGlzLmxhc3RJZDtcclxuXHR9XHJcblxyXG5cdHRvSHRtbChzY2FsZSA9IDEpIHtcclxuXHRcdGxldCBhcmVhcyA9IFtdO1xyXG5cdFx0dGhpcy5nZXRBcmVhcygpLmZvckVhY2goYSA9PiB7XHJcblx0XHRcdGlmIChhLmlzVmFsaWRTaGFwZSgpKSB7XHJcblx0XHRcdFx0YXJlYXMucHVzaCgnXFx0JyArIGEudG9IdG1sKHNjYWxlKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuICc8bWFwIG5hbWU9XCInICsgdGhpcy5uYW1lICsgJ1wiIGlkPVwiJyArIHRoaXMubmFtZSArICdcIj5cXG4nICsgYXJlYXMuam9pbignXFxuJykgKyAnXFxuPC9tYXA+JztcclxuXHR9XHJcblxyXG5cdHRvU3ZnKHNjYWxlID0gMSkge1xyXG5cdFx0bGV0IGFyZWFzID0gW107XHJcblx0XHR0aGlzLmdldEFyZWFzKGZhbHNlKS5mb3JFYWNoKGEgPT4ge1xyXG5cdFx0XHRpZiAoYS5pc1ZhbGlkU2hhcGUoKSkge1xyXG5cdFx0XHRcdGFyZWFzLnB1c2goJ1xcdCcgKyBhLnRvU3ZnKHNjYWxlKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bGV0IHN0ciA9ICc8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCInICsgdGhpcy53aWR0aCArICdcIiBoZWlnaHQ9XCInICsgdGhpcy5oZWlnaHQgKyAnXCI+XFxuJztcclxuXHRcdHN0ciArPSBhcmVhcy5qb2luKCdcXG4nKTtcclxuXHRcdHN0ciArPSAnXFxuPC9zdmc+JztcclxuXHRcdHJldHVybiBzdHI7XHJcblx0fVxyXG5cclxuXHQvKiogUmVtb3ZlcyBldmVyeSBhcmVhcyBmcm9tIHRoZSBhcmVhcyBhcnJheSAqL1xyXG5cdGNsZWFyQXJlYXMoKSB7XHJcblx0XHR0aGlzLmFyZWFzID0gW107XHJcblx0fVxyXG5cclxuXHRzZXRBcmVhcyhhcmVhcykge1xyXG5cdFx0dGhpcy5hcmVhcyA9IGFyZWFzO1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBBcmVhIH0gZnJvbSBcIi4vY2xhc3MuYXJlYVwiO1xyXG5pbXBvcnQgeyBDb29yZCB9IGZyb20gXCIuL2NsYXNzLmNvb3JkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uIHtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtBcmVhfSBhcmVhICBhcmVhXHJcblx0ICogQHBhcmFtIHtDb29yZH0gcG9pbnQgIHBvaW50XHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoYXJlYSA9IG51bGwsIHBvaW50ID0gbnVsbCkge1xyXG5cdFx0dGhpcy5hcmVhID0gYXJlYTtcclxuXHRcdHRoaXMucG9pbnQgPSBwb2ludDtcclxuXHRcdHRoaXMuc2V0T3JpZ2luKG5ldyBDb29yZCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0ge0Nvb3JkfSBjb29yZCBcclxuXHQgKi9cclxuXHRzZXRPcmlnaW4oY29vcmQgPSBudWxsKSB7XHJcblx0XHR0aGlzLm9yaWdpbiA9IGNvb3JkLmNsb25lKCk7XHJcblx0fVxyXG5cclxuXHRhdXRvc2V0T3JpZ2luKCkge1xyXG5cdFx0aWYgKCF0aGlzLmlzRW1wdHkoKSkge1xyXG5cdFx0XHR0aGlzLnNldE9yaWdpbih0aGlzLmdldFBvc2l0aW9uKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogXHJcblx0ICogQHBhcmFtIHtBcmVhfSBhcmVhIFxyXG5cdCAqIEBwYXJhbSB7Q29vcmR9IHBvaW50IFxyXG5cdCAqIEBwYXJhbSB7Q29vcmR9IG9yaWdpbiBcclxuXHQgKi9cclxuXHR1cGRhdGUoYXJlYSwgcG9pbnQpIHtcclxuXHRcdHRoaXMuYXJlYSA9IGFyZWE7XHJcblx0XHR0aGlzLnBvaW50ID0gcG9pbnQ7XHJcblx0XHR0aGlzLmF1dG9zZXRPcmlnaW4oKTtcclxuXHR9XHJcblxyXG5cdGdldEFyZWEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmVhID8gdGhpcy5hcmVhIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXRQb2ludCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBvaW50ID8gdGhpcy5wb2ludCA6IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0dmFsdWUoKSB7XHJcblx0XHRpZiAodGhpcy5wb2ludCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQb2ludCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXJlYSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TW92ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCkuZGlmZih0aGlzLm9yaWdpbik7XHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuYXJlYSA9IG51bGw7XHJcblx0XHR0aGlzLnBvaW50ID0gbnVsbDtcclxuXHRcdHRoaXMub3JpZ2luID0gbmV3IENvb3JkKCk7XHJcblx0fVxyXG5cclxuXHRpc0VtcHR5KCkge1xyXG5cdFx0cmV0dXJuICF0aGlzLmFyZWEgJiYgIXRoaXMucG9pbnQ7XHJcblx0fVxyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTdGFydCBJbnRlcmZhY2UgTW92YWJsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0bW92ZShjb29yZCkge1xyXG5cdFx0aWYgKHRoaXMucG9pbnQpIHtcclxuXHRcdFx0dGhpcy5wb2ludC5tb3ZlKGNvb3JkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYXJlYS5tb3ZlKGNvb3JkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMucG9pbnQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmFyZWEuZ2V0UG9zaXRpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKGNvb3JkKSB7XHJcblx0XHRpZiAodGhpcy5wb2ludCkge1xyXG5cdFx0XHR0aGlzLnBvaW50LnNldFBvc2l0aW9uKGNvb3JkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYXJlYS5zZXRQb3NpdGlvbihjb29yZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmQgSW50ZXJmYWNlIE1vdmFibGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxufSIsImltcG9ydCB7IGltYWdlTWFwQ3JlYXRvciB9IGZyb20gXCIuL3A1LmltYWdlLW1hcC1jcmVhdG9yXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBzZW1pIHRyYW5zcGFyZW50IGxheWVyIHdoaWNoIGNhbiBhcHBlYXIgb24gdG9wIG9mIHRoZSBiYWNrZ3JvdW5kXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZCB0aGUgc3BlZWQgb2YgdGhlIG9wYWNpdHkgYW5pbWF0aW9uICgxLTI1NSwgZGVmYXVsdCAxNSlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCZ0xheWVyIHtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHtpbWFnZU1hcENyZWF0b3J9IGlNYXBcclxuXHQgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcclxuXHQgKi9cclxuXHRjb25zdHJ1Y3RvcihpTWFwLCBzcGVlZCA9IDE1KSB7XHJcblx0XHR0aGlzLnNwZWVkID0gc3BlZWQ7XHJcblx0XHR0aGlzLmFscGhhID0gMDtcclxuXHRcdHRoaXMub3ZlciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wNSA9IGlNYXAucDU7XHJcblx0fVxyXG5cdGFwcGVhcigpIHtcclxuXHRcdHRoaXMub3ZlciA9IHRydWU7XHJcblx0fVxyXG5cdGRpc2FwcGVhcigpIHtcclxuXHRcdHRoaXMub3ZlciA9IGZhbHNlO1xyXG5cdH1cclxuXHRkaXNwbGF5KCkge1xyXG5cdFx0aWYgKHRoaXMub3Zlcikge1xyXG5cdFx0XHRpZiAodGhpcy5hbHBoYSA8IDEwMClcclxuXHRcdFx0XHR0aGlzLmFscGhhICs9IHRoaXMuc3BlZWQ7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuYWxwaGEgPiAwKVxyXG5cdFx0XHRcdHRoaXMuYWxwaGEgLT0gdGhpcy5zcGVlZDtcclxuXHRcdH1cclxuXHRcdHRoaXMucDUubm9TdHJva2UoKTtcclxuXHRcdHRoaXMucDUuZmlsbCgyNTUsIDI1NSwgMjU1LCB0aGlzLmFscGhhKTtcclxuXHRcdHRoaXMucDUucmVjdChcclxuXHRcdFx0aU1hcC50cnVlWCgwKSxcclxuXHRcdFx0aU1hcC50cnVlWSgwKSxcclxuXHRcdFx0dGhpcy5wNS53aWR0aCAvIGlNYXAudmlldy5zY2FsZSxcclxuXHRcdFx0dGhpcy5wNS5oZWlnaHQgLyBpTWFwLnZpZXcuc2NhbGVcclxuXHRcdCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuLi9wYWNrYWdlLmpzb25cIjtcclxuaW1wb3J0IHsgSW1hZ2VNYXAgfSBmcm9tIFwiLi9jbGFzcy5pbWFnZS1tYXBcIjtcclxuaW1wb3J0IHsgQmdMYXllciB9IGZyb20gXCIuL3A1LmJnLWxheWVyXCI7XHJcbmltcG9ydCB7IEFyZWEsIEFyZWFDaXJjbGUsIEFyZWFSZWN0LCBBcmVhUG9seSB9IGZyb20gXCIuL2NsYXNzLmFyZWFcIjtcclxuaW1wb3J0IHsgQ29vcmQgfSBmcm9tIFwiLi9jbGFzcy5jb29yZFwiO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tIFwiLi9jbGFzcy5zZWxlY3Rpb25cIjtcclxuaW1wb3J0IHsgb3BlbldpbmRvdyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgZG93bmxvYWQgZnJvbSBcImRvd25sb2FkanNcIjtcclxuaW1wb3J0IFVuZG9NYW5hZ2VyIGZyb20gXCJ1bmRvLW1hbmFnZXJcIjtcclxuaW1wb3J0IFF1aWNrU2V0dGluZ3MgZnJvbSBcInF1aWNrc2V0dGluZ3NcIjtcclxuaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xyXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4uL2xpYi9jb250ZXh0bWVudS9jb250ZXh0bWVudVwiO1xyXG5pbXBvcnQgJy4uL2xpYi9jb250ZXh0bWVudS9jb250ZXh0bWVudS5jc3MnO1xyXG5cclxuLyoqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaW1hZ2VNYXBDcmVhdG9yIHtcclxuXHRjb25zdHJ1Y3Rvcih3aWR0aCA9IDYwMCwgaGVpZ2h0ID0gNDUwKSB7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHRcdHRoaXMudG9vbCA9IFwicG9seWdvblwiO1xyXG5cdFx0dGhpcy5kcmF3aW5nVG9vbHMgPSBbXCJyZWN0YW5nbGVcIiwgXCJjaXJjbGVcIiwgXCJwb2x5Z29uXCJdO1xyXG5cdFx0dGhpcy5zZXR0aW5ncztcclxuXHRcdHRoaXMubWVudSA9IHtcclxuXHRcdFx0U2V0VXJsOiB7XHJcblx0XHRcdFx0b25TZWxlY3Q6ICh0YXJnZXQsIGtleSwgaXRlbSwgYXJlYSkgPT4geyB0aGlzLnNldEFyZWFVcmwoYXJlYSk7IH0sXHJcblx0XHRcdFx0bGFiZWw6IFwiU2V0IHVybFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRTZXRUaXRsZToge1xyXG5cdFx0XHRcdG9uU2VsZWN0OiAodGFyZ2V0LCBrZXksIGl0ZW0sIGFyZWEpID0+IHsgdGhpcy5zZXRBcmVhVGl0bGUoYXJlYSk7IH0sXHJcblx0XHRcdFx0bGFiZWw6IFwiU2V0IHRpdGxlXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdERlbGV0ZTogKHRhcmdldCwga2V5LCBpdGVtLCBhcmVhKSA9PiB7IHRoaXMuZGVsZXRlQXJlYShhcmVhKTsgfSxcclxuXHRcdFx0TW92ZUZyb250OiB7XHJcblx0XHRcdFx0b25TZWxlY3Q6ICh0YXJnZXQsIGtleSwgaXRlbSwgYXJlYSkgPT4geyB0aGlzLm1vdmVBcmVhKGFyZWEsIC0xKTsgfSxcclxuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdGxhYmVsOiBcIk1vdmUgRm9yd2FyZFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRNb3ZlQmFjazoge1xyXG5cdFx0XHRcdG9uU2VsZWN0OiAodGFyZ2V0LCBrZXksIGl0ZW0sIGFyZWEpID0+IHsgdGhpcy5tb3ZlQXJlYShhcmVhLCAxKTsgfSxcclxuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdGxhYmVsOiBcIk1vdmUgQmFja3dhcmRcIixcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHRoaXMudGVtcEFyZWEgPSBuZXcgQXJlYSgpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZCA9IG5ldyBTZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMuaG92ZXJlZEFyZWEgPSBmYWxzZTtcclxuXHRcdHRoaXMuaG92ZXJlZFBvaW50ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1hcCA9IG5ldyBJbWFnZU1hcCh3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdHRoaXMudW5kb01hbmFnZXIgPSBuZXcgVW5kb01hbmFnZXIoKTtcclxuXHRcdHRoaXMuaW1nID0ge307XHJcblx0XHR0aGlzLnZpZXcgPSB7XHJcblx0XHRcdHNjYWxlOiAxLFxyXG5cdFx0XHR0cmFuc1g6IDAsXHJcblx0XHRcdHRyYW5zWTogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy56b29tUGFyYW1zID0ge1xyXG5cdFx0XHRtaW46IDAuMDMsXHJcblx0XHRcdG1heDogMyxcclxuXHRcdFx0c2Vuc2F0aXZpdHk6IDAuMDAxXHJcblx0XHR9XHJcblx0XHR0aGlzLm1hZ25ldGlzbSA9IHRydWU7XHJcblx0XHR0aGlzLmZ1c2lvbiA9IGZhbHNlO1xyXG5cdFx0dGhpcy50b2xlcmFuY2UgPSA2O1xyXG5cdH1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHA1IFNrZXRjaCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdC8qKlxyXG5cdCAqIE92ZXJyaWRlIHA1IG1ldGhvZHNcclxuXHQgKiBAcGFyYW0ge3A1fSBwNVxyXG5cdCAqL1xyXG5cdHNrZXRjaChwNSkge1xyXG5cdFx0dGhpcy5wNSA9IHA1O1xyXG5cdFx0dGhpcy5iZ0xheWVyID0gbmV3IEJnTGF5ZXIodGhpcyk7XHJcblxyXG5cdFx0cDUuc2V0dXAgPSAoKSA9PiB7XHJcblx0XHRcdGxldCBjYW52YXMgPSBwNS5jcmVhdGVDYW52YXModGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cdFx0XHRjYW52YXMuZHJvcCh0aGlzLmhhbmRlRmlsZS5iaW5kKHRoaXMpKS5kcmFnTGVhdmUodGhpcy5vbkxlYXZlLmJpbmQodGhpcykpLmRyYWdPdmVyKHRoaXMub25PdmVyLmJpbmQodGhpcykpO1xyXG5cdFx0XHR0aGlzLnNldHRpbmdzID0gUXVpY2tTZXR0aW5ncy5jcmVhdGUocDUud2lkdGggKyA1LCAwLCBcIkltYWdlLW1hcCBDcmVhdG9yXCIsIHA1LmNhbnZhcy5wYXJlbnRFbGVtZW50KVxyXG5cdFx0XHRcdC5zZXREcmFnZ2FibGUoZmFsc2UpXHJcblx0XHRcdFx0LmFkZFRleHQoXCJNYXAgTmFtZVwiLCBcIlwiLCAodikgPT4geyB0aGlzLm1hcC5zZXROYW1lKHYpIH0pXHJcblx0XHRcdFx0LmFkZERyb3BEb3duKFwiVG9vbFwiLCBbXCJwb2x5Z29uXCIsIFwicmVjdGFuZ2xlXCIsIFwiY2lyY2xlXCIsIFwic2VsZWN0XCIsIFwiZGVsZXRlXCIsIFwidGVzdFwiXSwgKHYpID0+IHsgdGhpcy5zZXRUb29sKHYudmFsdWUpIH0pXHJcblx0XHRcdFx0LmFkZEJvb2xlYW4oXCJEZWZhdWx0IEFyZWFcIiwgdGhpcy5tYXAuaGFzRGVmYXVsdEFyZWEsICh2KSA9PiB7IHRoaXMuc2V0RGVmYXVsdEFyZWEodikgfSlcclxuXHRcdFx0XHQuYWRkQnV0dG9uKFwiVW5kb1wiLCB0aGlzLnVuZG9NYW5hZ2VyLnVuZG8pXHJcblx0XHRcdFx0LmFkZEJ1dHRvbihcIlJlZG9cIiwgdGhpcy51bmRvTWFuYWdlci5yZWRvKVxyXG5cdFx0XHRcdC5hZGRCdXR0b24oXCJDbGVhclwiLCB0aGlzLmNsZWFyQXJlYXMuYmluZCh0aGlzKSlcclxuXHRcdFx0XHQuYWRkQnV0dG9uKFwiR2VuZXJhdGUgSHRtbFwiLCAoKSA9PiB7IHRoaXMuc2V0dGluZ3Muc2V0VmFsdWUoXCJPdXRwdXRcIiwgdGhpcy5tYXAudG9IdG1sKCkpIH0pXHJcblx0XHRcdFx0LmFkZEJ1dHRvbihcIkdlbmVyYXRlIFN2Z1wiLCAoKSA9PiB7IHRoaXMuc2V0dGluZ3Muc2V0VmFsdWUoXCJPdXRwdXRcIiwgdGhpcy5tYXAudG9TdmcoKSkgfSlcclxuXHRcdFx0XHQuYWRkVGV4dEFyZWEoXCJPdXRwdXRcIilcclxuXHRcdFx0XHQuYWRkQnV0dG9uKFwiU2F2ZVwiLCB0aGlzLnNhdmUuYmluZCh0aGlzKSk7XHJcblx0XHRcdC8vIEZpeCBmb3Igb25jb250ZXh0bWVudVxyXG5cdFx0XHRwNS5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgfSk7XHJcblx0XHRcdC8vIEZpeCBmb3IgbWlkZGxlIGNsaWNrIG1vdXNlIGRvd24gdHJpZ2dlcnMgc2Nyb2xsIG9uIHdpbmRvd3NcclxuXHRcdFx0cDUuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcclxuXHRcdFx0Ly8gU2VsZWN0IGFsbCBvbmNsaWNrIG9uIHRoZSBPdXRwdXQgZmllbGRcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJPdXRwdXRcIikuc2V0QXR0cmlidXRlKFwib25Gb2N1c1wiLCBcInRoaXMuc2VsZWN0KCk7XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHA1LmRyYXcgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlVGVtcEFyZWEoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVIb3ZlcmVkKCk7XHJcblx0XHRcdHRoaXMuc2V0Q3Vyc29yKCk7XHJcblx0XHRcdHRoaXMuc2V0T3V0cHV0KCk7XHJcblx0XHRcdHRoaXMuc2V0QmFja2dyb3VuZCgpO1xyXG5cdFx0XHR0aGlzLnNldFRpdGxlKHRoaXMuaG92ZXJlZEFyZWEpO1xyXG5cdFx0XHRwNS50cmFuc2xhdGUodGhpcy52aWV3LnRyYW5zWCwgdGhpcy52aWV3LnRyYW5zWSk7XHJcblx0XHRcdHA1LnNjYWxlKHRoaXMudmlldy5zY2FsZSk7XHJcblx0XHRcdHRoaXMuZHJhd0ltYWdlKCk7XHJcblx0XHRcdHRoaXMuYmdMYXllci5kaXNwbGF5KCk7XHJcblx0XHRcdHRoaXMuZHJhd0FyZWFzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cDUuZ2V0TWFwID0gKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcDUgRXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0cDUubW91c2VQcmVzc2VkID0gKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5tb3VzZUlzSG92ZXJTa2V0Y2goKSkge1xyXG5cdFx0XHRcdGxldCBjb29yZCA9IHRoaXMuZHJhd2luZ0Nvb3JkKCk7XHJcblx0XHRcdFx0aWYgKHA1Lm1vdXNlQnV0dG9uID09IHA1LkxFRlQgJiYgIUNvbnRleHRNZW51LmlzT3BlbigpKSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMudG9vbCkge1xyXG5cdFx0XHRcdFx0XHRjYXNlIFwiY2lyY2xlXCI6XHJcblx0XHRcdFx0XHRcdGNhc2UgXCJyZWN0YW5nbGVcIjpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFRlbXBBcmVhKGNvb3JkKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBcInBvbHlnb25cIjpcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy50ZW1wQXJlYS5pc0VtcHR5KCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0VGVtcEFyZWEoY29vcmQpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZW1wQXJlYS5pc0Nsb3NhYmxlKHRoaXMubUNvb3JkKCksIHRoaXMudG9sZXJhbmNlIC8gdGhpcy52aWV3LnNjYWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50ZW1wQXJlYS5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudGVtcEFyZWEuaXNWYWxpZFNoYXBlKCkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlQXJlYSh0aGlzLnRlbXBBcmVhKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudGVtcEFyZWEgPSBuZXcgQXJlYSgpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRlbXBBcmVhLmFkZENvb3JkKHRoaXMubUNvb3JkKCkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSBcInNlbGVjdFwiOlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWQudXBkYXRlKHRoaXMuaG92ZXJlZEFyZWEsIHRoaXMuaG92ZXJlZFBvaW50KTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRwNS5tb3VzZURyYWdnZWQgPSAoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLm1vdXNlSXNIb3ZlclNrZXRjaCgpICYmICFDb250ZXh0TWVudS5pc09wZW4oKSkge1xyXG5cdFx0XHRcdGlmIChwNS5tb3VzZUJ1dHRvbiA9PSBwNS5MRUZUKSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMudG9vbCkge1xyXG5cdFx0XHRcdFx0XHRjYXNlIFwic2VsZWN0XCI6XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWQudmFsdWUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWQuZ2V0UG9pbnQoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkLnNldFBvc2l0aW9uKHRoaXMuZHJhd2luZ0Nvb3JkKCkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IG12bXQgPSBuZXcgQ29vcmQodGhpcy5tWCgpIC0gdGhpcy50cnVlWChwNS5wbW91c2VYKSwgdGhpcy5tWSgpIC0gdGhpcy50cnVlWShwNS5wbW91c2VZKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWQubW92ZShtdm10KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwNS5tb3VzZUJ1dHRvbiA9PSBwNS5DRU5URVIpIHtcclxuXHRcdFx0XHRcdHRoaXMudmlldy50cmFuc1ggKz0gcDUubW91c2VYIC0gcDUucG1vdXNlWDtcclxuXHRcdFx0XHRcdHRoaXMudmlldy50cmFuc1kgKz0gcDUubW91c2VZIC0gcDUucG1vdXNlWTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRwNS5tb3VzZVJlbGVhc2VkID0gKGUpID0+IHtcclxuXHRcdFx0c3dpdGNoICh0aGlzLnRvb2wpIHtcclxuXHRcdFx0XHRjYXNlIFwicmVjdGFuZ2xlXCI6XHJcblx0XHRcdFx0Y2FzZSBcImNpcmNsZVwiOlxyXG5cdFx0XHRcdFx0aWYgKHRoaXMudGVtcEFyZWEuaXNWYWxpZFNoYXBlKCkpXHJcblx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlQXJlYSh0aGlzLnRlbXBBcmVhKTtcclxuXHRcdFx0XHRcdHRoaXMudGVtcEFyZWEgPSBuZXcgQXJlYSgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcInNlbGVjdFwiOlxyXG5cdFx0XHRcdFx0bGV0IHNlbGVjdCA9IHRoaXMuc2VsZWN0ZWQudmFsdWUoKTtcclxuXHRcdFx0XHRcdGlmIChzZWxlY3QpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG1vdmUgPSB0aGlzLnNlbGVjdGVkLmdldE1vdmUoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy51bmRvTWFuYWdlci5hZGQoe1xyXG5cdFx0XHRcdFx0XHRcdHVuZG86ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5tb3ZlKG1vdmUuaW52ZXJ0KCkpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0cmVkbzogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0Lm1vdmUobW92ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMub25DbGljayhlKTtcclxuXHRcdFx0dGhpcy5iZ0xheWVyLmRpc2FwcGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHA1Lm1vdXNlV2hlZWwgPSAoZSkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5tb3VzZUlzSG92ZXJTa2V0Y2goKSkge1xyXG5cdFx0XHRcdGxldCBjb2VmWm9vbSA9IHRoaXMudmlldy5zY2FsZSAqIHRoaXMuem9vbVBhcmFtcy5zZW5zYXRpdml0eSAqIC0gZS5kZWx0YTtcclxuXHRcdFx0XHR0aGlzLnpvb20oY29lZlpvb20pO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBlXHJcblx0XHQgKi9cclxuXHRcdHA1LmtleVByZXNzZWQgPSAoZSkgPT4ge1xyXG5cdFx0XHRpZiAoZS5jb21wb3NlZCAmJiBlLmN0cmxLZXkpIHtcclxuXHRcdFx0XHRzd2l0Y2ggKGUua2V5KSB7XHJcblx0XHRcdFx0XHRjYXNlICdzJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5zYXZlKCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAneic6XHJcblx0XHRcdFx0XHRcdHRoaXMudW5kb01hbmFnZXIudW5kbygpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3knOlxyXG5cdFx0XHRcdFx0XHR0aGlzLnVuZG9NYW5hZ2VyLnJlZG8oKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudG9vbCA9PSBcInBvbHlnb25cIiAmJiBlLmtleUNvZGUgPT0gdGhpcy5wNS5FU0NBUEUpIHtcclxuXHRcdFx0XHR0aGlzLnRlbXBBcmVhID0gbmV3IEFyZWEoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdHRydWVYKGNvb3JkKSB7XHJcblx0XHRyZXR1cm4gKGNvb3JkIC0gdGhpcy52aWV3LnRyYW5zWCkgLyB0aGlzLnZpZXcuc2NhbGU7XHJcblx0fVxyXG5cclxuXHR0cnVlWShjb29yZCkge1xyXG5cdFx0cmV0dXJuIChjb29yZCAtIHRoaXMudmlldy50cmFuc1kpIC8gdGhpcy52aWV3LnNjYWxlO1xyXG5cdH1cclxuXHJcblx0bVgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50cnVlWCh0aGlzLnA1Lm1vdXNlWCk7XHJcblx0fVxyXG5cclxuXHRtWSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRydWVZKHRoaXMucDUubW91c2VZKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgdHJ1ZSBjb29yZGluYXRlIG9mIHRoZSBtb3VzZSByZWxhdGl2ZSB0byB0aGUgaW1hZ2VNYXBcclxuXHQgKiBAcmV0dXJucyB7Q29vcmR9XHJcblx0ICovXHJcblx0bUNvb3JkKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBDb29yZCh0aGlzLm1YKCksIHRoaXMubVkoKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGNvb3JkaW5hdGUgb2YgdGhlIG1vdXNlIGZvciBkcmF3aW5nXHJcblx0ICogQHJldHVybnMge0Nvb3JkfVxyXG5cdCAqL1xyXG5cdGRyYXdpbmdDb29yZCgpIHtcclxuXHRcdGxldCBjb29yZCA9IHRoaXMubUNvb3JkKCk7XHJcblx0XHRjb29yZCA9IHRoaXMubWFnbmV0aXNtID8gdGhpcy5ob3ZlcmVkUG9pbnQgPyB0aGlzLmhvdmVyZWRQb2ludCA6IGNvb3JkIDogY29vcmQ7XHJcblx0XHRpZiAoIXRoaXMuZnVzaW9uKSB7XHJcblx0XHRcdGNvb3JkID0gY29vcmQuY2xvbmUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBjb29yZDtcclxuXHR9XHJcblxyXG5cdG1vdXNlSXNIb3ZlclNrZXRjaCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnA1Lm1vdXNlWCA8PSB0aGlzLnA1LndpZHRoICYmIHRoaXMucDUubW91c2VYID49IDAgJiYgdGhpcy5wNS5tb3VzZVkgPD0gdGhpcy5wNS5oZWlnaHQgJiYgdGhpcy5wNS5tb3VzZVkgPj0gMDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgaG92ZXJlZFBvaW50IGFuZCBob3ZlcmVkQXJlYSBleGNsdWRpbmcgY3VycmVudGx5IHNlbGVjdGVkIEFyZWFcclxuXHQgKi9cclxuXHR1cGRhdGVIb3ZlcmVkKCkge1xyXG5cdFx0dGhpcy5ob3ZlcmVkUG9pbnQgPSBmYWxzZTtcclxuXHRcdGxldCBhbGxBcmVhcyA9IHRoaXMubWFwLmdldEFyZWFzKCk7XHJcblx0XHRsZXQgYXJlYSA9IGFsbEFyZWFzLmZpbmQoYSA9PiB7XHJcblx0XHRcdGlmIChhLmVxdWFscyh0aGlzLnNlbGVjdGVkLmdldEFyZWEoKSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMudG9vbCAhPSBcInRlc3RcIikge1xyXG5cdFx0XHRcdGxldCBwb2ludCA9IGEuaXNPdmVyUG9pbnQodGhpcy5tQ29vcmQoKSwgdGhpcy50b2xlcmFuY2UgLyB0aGlzLnZpZXcuc2NhbGUpXHJcblx0XHRcdFx0aWYgKHBvaW50KSB7XHJcblx0XHRcdFx0XHR0aGlzLmhvdmVyZWRQb2ludCA9IHBvaW50O1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChhLmlzT3Zlcih0aGlzLm1Db29yZCgpKSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ob3ZlcmVkQXJlYSA9IGFyZWEgPyBhcmVhIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHRvbkNsaWNrKGV2ZW50KSB7XHJcblx0XHRpZiAodGhpcy5tb3VzZUlzSG92ZXJTa2V0Y2goKSkge1xyXG5cdFx0XHRpZiAodGhpcy5ob3ZlcmVkQXJlYSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnA1Lm1vdXNlQnV0dG9uID09IHRoaXMucDUuUklHSFQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWQudXBkYXRlKHRoaXMuaG92ZXJlZEFyZWEpO1xyXG5cdFx0XHRcdFx0dGhpcy5tZW51Lk1vdmVGcm9udC5lbmFibGVkID0gISh0aGlzLm1hcC5pc0ZpcnN0QXJlYSh0aGlzLmhvdmVyZWRBcmVhLmlkKSB8fCB0aGlzLmhvdmVyZWRBcmVhLnNoYXBlID09ICdkZWZhdWx0Jyk7XHJcblx0XHRcdFx0XHR0aGlzLm1lbnUuTW92ZUJhY2suZW5hYmxlZCA9ICEodGhpcy5tYXAuaXNMYXN0QXJlYSh0aGlzLmhvdmVyZWRBcmVhLmlkKSB8fCB0aGlzLmhvdmVyZWRBcmVhLnNoYXBlID09ICdkZWZhdWx0Jyk7XHJcblx0XHRcdFx0XHRDb250ZXh0TWVudS5kaXNwbGF5KGV2ZW50LCB0aGlzLm1lbnUsIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IFwiY2xpY2tcIixcclxuXHRcdFx0XHRcdFx0ZGF0YTogdGhpcy5ob3ZlcmVkQXJlYVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGRvZXNlbid0IHdvcmsgYXMgZXhwZWN0ZWRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucDUubW91c2VCdXR0b24gPT0gdGhpcy5wNS5MRUZUICYmICFDb250ZXh0TWVudS5pc09wZW4oKSkge1xyXG5cdFx0XHRcdFx0c3dpdGNoICh0aGlzLnRvb2wpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSBcInRlc3RcIjpcclxuXHRcdFx0XHRcdFx0XHRvcGVuV2luZG93KHRoaXMuaG92ZXJlZEFyZWEuaHJlZik7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgXCJkZWxldGVcIjpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRlbGV0ZUFyZWEodGhpcy5ob3ZlcmVkQXJlYSk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLnNlbGVjdGVkLmNsZWFyKCk7XHJcblx0fVxyXG5cclxuXHRvbk92ZXIoZXZ0KSB7XHJcblx0XHR0aGlzLmJnTGF5ZXIuYXBwZWFyKCk7XHJcblx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdG9uTGVhdmUoKSB7XHJcblx0XHR0aGlzLmJnTGF5ZXIuZGlzYXBwZWFyKCk7XHJcblx0fVxyXG5cclxuXHRoYW5kZUZpbGUoZmlsZSkge1xyXG5cdFx0aWYgKGZpbGUudHlwZSA9PSBcImltYWdlXCIpIHtcclxuXHRcdFx0dGhpcy5pbWcuZGF0YSA9IHRoaXMucDUubG9hZEltYWdlKGZpbGUuZGF0YSwgaW1nID0+IHRoaXMucmVzZXRWaWV3KGltZykpO1xyXG5cdFx0XHR0aGlzLmltZy5maWxlID0gZmlsZS5maWxlO1xyXG5cdFx0XHRpZiAoIXRoaXMubWFwLm5hbWUpIHtcclxuXHRcdFx0XHR0aGlzLm1hcC5zZXROYW1lKGZpbGUubmFtZSk7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zZXRWYWx1ZShcIk1hcCBOYW1lXCIsIHRoaXMubWFwLm5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKGZpbGUuc3VidHlwZSA9PSAnanNvbicpIHtcclxuXHRcdFx0ZmV0Y2goZmlsZS5kYXRhKVxyXG5cdFx0XHRcdC50aGVuKHJlcyA9PiByZXMuYmxvYigpKVxyXG5cdFx0XHRcdC50aGVuKGJsb2IgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblx0XHRcdFx0XHRyZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQganNvbiA9IHJlYWRlci5yZXN1bHQ7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGpzb24pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmltcG9ydE1hcChqc29uKTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dChibG9iKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYmdMYXllci5kaXNhcHBlYXIoKTtcclxuXHR9XHJcblxyXG5cdHJlc2V0VmlldyhpbWcpIHtcclxuXHRcdHRoaXMudmlldy5zY2FsZSA9IDE7XHJcblx0XHR0aGlzLnZpZXcudHJhbnNYID0gMDtcclxuXHRcdHRoaXMudmlldy50cmFuc1kgPSAwO1xyXG5cdFx0bGV0IHhTY2FsZSA9IHRoaXMucDUud2lkdGggLyBpbWcud2lkdGg7XHJcblx0XHRsZXQgeVNjYWxlID0gdGhpcy5wNS5oZWlnaHQgLyBpbWcuaGVpZ2h0O1xyXG5cdFx0aWYgKHhTY2FsZSA8IHRoaXMudmlldy5zY2FsZSlcclxuXHRcdFx0dGhpcy52aWV3LnNjYWxlID0geFNjYWxlO1xyXG5cdFx0aWYgKHlTY2FsZSA8IHRoaXMudmlldy5zY2FsZSlcclxuXHRcdFx0dGhpcy52aWV3LnNjYWxlID0geVNjYWxlO1xyXG5cdFx0dGhpcy5tYXAuc2V0U2l6ZShpbWcud2lkdGgsIGltZy5oZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0em9vbShjb2VmKSB7XHJcblxyXG5cdFx0bGV0IG5ld1NjYWxlID0gdGhpcy52aWV3LnNjYWxlICsgY29lZjtcclxuXHRcdGlmIChuZXdTY2FsZSA+IHRoaXMuem9vbVBhcmFtcy5taW4gJiYgbmV3U2NhbGUgPCB0aGlzLnpvb21QYXJhbXMubWF4KSB7XHJcblx0XHRcdGxldCBtb3VzZVhUb09yaWdpbiA9IHRoaXMubVgoKTtcclxuXHRcdFx0bGV0IG1vdXNlWVRvT3JpZ2luID0gdGhpcy5tWSgpO1xyXG5cdFx0XHRsZXQgdHJhbnNYID0gbW91c2VYVG9PcmlnaW4gKiBjb2VmO1xyXG5cdFx0XHRsZXQgdHJhbnNZID0gbW91c2VZVG9PcmlnaW4gKiBjb2VmO1xyXG5cclxuXHRcdFx0dGhpcy52aWV3LnNjYWxlID0gbmV3U2NhbGU7XHJcblx0XHRcdHRoaXMudmlldy50cmFuc1ggLT0gdHJhbnNYO1xyXG5cdFx0XHR0aGlzLnZpZXcudHJhbnNZIC09IHRyYW5zWTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRyYXdJbWFnZSgpIHtcclxuXHRcdGlmICh0aGlzLmltZy5kYXRhKVxyXG5cdFx0XHR0aGlzLnA1LmltYWdlKHRoaXMuaW1nLmRhdGEsIDAsIDAsIHRoaXMuaW1nLmRhdGEud2lkdGgsIHRoaXMuaW1nLmRhdGEuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdGRyYXdBcmVhcygpIHtcclxuXHRcdGxldCBhbGxBcmVhcyA9IFt0aGlzLnRlbXBBcmVhXS5jb25jYXQodGhpcy5tYXAuZ2V0QXJlYXMoKSk7XHJcblx0XHRmb3IgKGxldCBpID0gYWxsQXJlYXMubGVuZ3RoOyBpLS07KSB7XHJcblx0XHRcdGxldCBhcmVhID0gYWxsQXJlYXNbaV07XHJcblx0XHRcdHRoaXMuc2V0QXJlYVN0eWxlKGFyZWEpO1xyXG5cdFx0XHRpZiAoYXJlYS5pc0RyYXdhYmxlKCkpXHJcblx0XHRcdFx0YXJlYS5kaXNwbGF5KHRoaXMucDUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuaG92ZXJlZFBvaW50KSB7XHJcblx0XHRcdGxldCBwb2ludCA9IHRoaXMuaG92ZXJlZFBvaW50O1xyXG5cdFx0XHR0aGlzLnA1LmZpbGwoMCk7XHJcblx0XHRcdHRoaXMucDUubm9TdHJva2UoKTtcclxuXHRcdFx0dGhpcy5wNS5lbGxpcHNlKHBvaW50LngsIHBvaW50LnksIDYgLyB0aGlzLnZpZXcuc2NhbGUpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRUb29sKHZhbHVlKSB7XHJcblx0XHR0aGlzLnRvb2wgPSB2YWx1ZTtcclxuXHRcdHRoaXMudGVtcEFyZWEgPSBuZXcgQXJlYSgpO1xyXG5cdH1cclxuXHJcblx0c2V0Q3Vyc29yKCkge1xyXG5cdFx0aWYgKHRoaXMuZHJhd2luZ1Rvb2xzLmluY2x1ZGVzKHRoaXMudG9vbCkpIHtcclxuXHRcdFx0c3dpdGNoICh0aGlzLnRvb2wpIHtcclxuXHRcdFx0XHRjYXNlIFwicG9seWdvblwiOlxyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnRlbXBBcmVhLmlzRW1wdHkoKSAmJiB0aGlzLnRlbXBBcmVhLmlzQ2xvc2FibGUodGhpcy5tQ29vcmQoKSwgNSAvIHRoaXMudmlldy5zY2FsZSkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wNS5jdXJzb3IodGhpcy5wNS5IQU5EKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRoaXMucDUuY3Vyc29yKHRoaXMucDUuQ1JPU1MpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnA1LmN1cnNvcih0aGlzLnA1LkFSUk9XKTtcclxuXHRcdFx0aWYgKHRoaXMuaG92ZXJlZEFyZWEpIHtcclxuXHRcdFx0XHRzd2l0Y2ggKHRoaXMudG9vbCkge1xyXG5cdFx0XHRcdFx0Y2FzZSBcInRlc3RcIjpcclxuXHRcdFx0XHRcdGNhc2UgXCJkZWxldGVcIjpcclxuXHRcdFx0XHRcdFx0dGhpcy5wNS5jdXJzb3IodGhpcy5wNS5IQU5EKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwic2VsZWN0XCI6XHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5ob3ZlcmVkUG9pbnQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnA1LmN1cnNvcih0aGlzLnA1Lk1PVkUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0T3V0cHV0KCkge1xyXG5cdFx0c3dpdGNoICh0aGlzLnRvb2wpIHtcclxuXHRcdFx0Y2FzZSBcInRlc3RcIjpcclxuXHRcdFx0Y2FzZSBcInNlbGVjdFwiOlxyXG5cdFx0XHRcdGlmICh0aGlzLm1vdXNlSXNIb3ZlclNrZXRjaCgpKSB7XHJcblx0XHRcdFx0XHRsZXQgaHJlZiA9IHRoaXMuaG92ZXJlZEFyZWEgPyB0aGlzLmhvdmVyZWRBcmVhLmhyZWYgOiBcIm5vbmVcIjtcclxuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3Muc2V0VmFsdWUoXCJPdXRwdXRcIiwgaHJlZik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0QmFja2dyb3VuZCgpIHtcclxuXHRcdHRoaXMucDUuYmFja2dyb3VuZCgyMDApO1xyXG5cdFx0aWYgKCF0aGlzLmltZy5kYXRhKSB7XHJcblx0XHRcdHRoaXMucDUubm9TdHJva2UoKTtcclxuXHRcdFx0dGhpcy5wNS5maWxsKDApO1xyXG5cdFx0XHR0aGlzLnA1LnRleHRBbGlnbih0aGlzLnA1LkNFTlRFUiwgdGhpcy5wNS5DRU5URVIpO1xyXG5cdFx0XHR0aGlzLnA1LnRleHRTaXplKDE1KTtcclxuXHRcdFx0bGV0IHRleHQgPSAnRHJhZyBhbmQgZHJvcCBhbiBpbWFnZSBhbmQvb3IgYSAubWFwLmpzb24gc2F2ZSBmaWxlIGhlcmUnO1xyXG5cdFx0XHR0aGlzLnA1LnRleHQodGV4dCwgdGhpcy5wNS53aWR0aCAvIDIsIHRoaXMucDUuaGVpZ2h0IC8gMik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgdGhlIHRpdGxlIG9mIHRoZSBjYW52YXMgZnJvbSBhbiBhcmVhXHJcblx0ICogQHBhcmFtIHtBcmVhfSBhcmVhXHJcblx0ICovXHJcblx0c2V0VGl0bGUoYXJlYSkge1xyXG5cdFx0aWYgKHRoaXMudG9vbCA9PSBcInRlc3RcIiAmJiBhcmVhICYmIGFyZWEudGl0bGUpIHtcclxuXHRcdFx0dGhpcy5wNS5jYW52YXMuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgYXJlYS50aXRsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnA1LmNhbnZhcy5yZW1vdmVBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldEFyZWFTdHlsZShhcmVhKSB7XHJcblx0XHRsZXQgY29sb3IgPSB0aGlzLnA1LmNvbG9yKDI1NSwgMjU1LCAyNTUsIDE3OCk7XHJcblx0XHRpZiAodGhpcy50b29sID09IFwidGVzdFwiKSB7XHJcblx0XHRcdGNvbG9yID0gdGhpcy5wNS5jb2xvcigyNTUsIDApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCh0aGlzLm1vdXNlSXNIb3ZlclNrZXRjaCgpICYmIGFyZWEgPT0gdGhpcy5ob3ZlcmVkQXJlYSAmJiB0aGlzLnNlbGVjdGVkLmdldEFyZWEoKSA9PSBmYWxzZSAmJiAoXHJcblx0XHRcdHRoaXMudG9vbCA9PSBcImRlbGV0ZVwiIHx8XHJcblx0XHRcdHRoaXMudG9vbCA9PSBcInNlbGVjdFwiKSkgfHxcclxuXHRcdFx0dGhpcy5zZWxlY3RlZC5nZXRBcmVhKCkgPT0gYXJlYSkge1xyXG5cdFx0XHRjb2xvciA9IHRoaXMucDUuY29sb3IoMjU1LCAyMDAsIDIwMCwgMTc4KTsgLy8gaGlnaGxpZ2h0IChzZXQgY29sb3IgcmVkKVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5wNS5maWxsKGNvbG9yKTtcclxuXHRcdHRoaXMucDUuc3Ryb2tlV2VpZ2h0KDEgLyB0aGlzLnZpZXcuc2NhbGUpO1xyXG5cdFx0aWYgKHRoaXMudG9vbCA9PSBcInRlc3RcIikge1xyXG5cdFx0XHR0aGlzLnA1Lm5vU3Ryb2tlKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnA1LnN0cm9rZSgwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldFRlbXBBcmVhKGNvb3JkKSB7XHJcblx0XHRsZXQgY29vcmRzID0gW2Nvb3JkXTtcclxuXHRcdHN3aXRjaCAodGhpcy50b29sKSB7XHJcblx0XHRcdGNhc2UgXCJyZWN0YW5nbGVcIjpcclxuXHRcdFx0XHR0aGlzLnRlbXBBcmVhID0gbmV3IEFyZWFSZWN0KGNvb3Jkcyk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJjaXJjbGVcIjpcclxuXHRcdFx0XHR0aGlzLnRlbXBBcmVhID0gbmV3IEFyZWFDaXJjbGUoY29vcmRzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcInBvbHlnb25cIjpcclxuXHRcdFx0XHR0aGlzLnRlbXBBcmVhID0gbmV3IEFyZWFQb2x5KGNvb3Jkcyk7XHJcblx0XHRcdFx0dGhpcy50ZW1wQXJlYS5hZGRDb29yZChjb29yZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVUZW1wQXJlYSgpIHtcclxuXHRcdGxldCBjb29yZCA9IHRoaXMuZHJhd2luZ0Nvb3JkKCk7XHJcblx0XHRpZiAoIXRoaXMudGVtcEFyZWEuaXNFbXB0eSgpKSB7XHJcblx0XHRcdHRoaXMudGVtcEFyZWEudXBkYXRlTGFzdENvb3JkKGNvb3JkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydE1hcCgpIHtcclxuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdHZlcnNpb246IHZlcnNpb24sXHJcblx0XHRcdG1hcDogdGhpcy5tYXBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2F2ZSgpIHtcclxuXHRcdGxldCBibG9iID0gbmV3IEJsb2IoW3RoaXMuZXhwb3J0TWFwKCldLCB7IGVuY29kaW5nOiBcIlVURi04XCIsIHR5cGU6IFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIgfSlcclxuXHRcdGRvd25sb2FkKGJsb2IsIGAke3RoaXMubWFwLm5hbWV9Lm1hcC5qc29uYCwgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG5cdH1cclxuXHJcblx0aW1wb3J0TWFwKGpzb24pIHtcclxuXHRcdGxldCBvYmplY3QgPSBKU09OLnBhcnNlKGpzb24pO1xyXG5cdFx0bGV0IG9iamVjdE1hcCA9IG9iamVjdC5tYXA7XHJcblx0XHR0aGlzLm1hcC5zZXRGcm9tT2JqZWN0KG9iamVjdE1hcCk7XHJcblx0XHR0aGlzLnNldHRpbmdzLnNldFZhbHVlKFwiTWFwIE5hbWVcIiwgb2JqZWN0TWFwLm5hbWUpO1xyXG5cdFx0dGhpcy5zZXR0aW5ncy5zZXRWYWx1ZShcIkRlZmF1bHQgQXJlYVwiLCBvYmplY3RNYXAuaGFzRGVmYXVsdEFyZWEpO1xyXG5cdFx0dGhpcy5yZXNldCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGFuIGFyZWEgdG8gdGhlIGltYWdlTWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7QXJlYX0gYXJlYVxyXG5cdCAqL1xyXG5cdGNyZWF0ZUFyZWEoYXJlYSkge1xyXG5cdFx0dGhpcy5tYXAuYWRkQXJlYShhcmVhKTtcclxuXHRcdHRoaXMudW5kb01hbmFnZXIuYWRkKHtcclxuXHRcdFx0dW5kbzogKCkgPT4ge1xyXG5cdFx0XHRcdGFyZWEgPSB0aGlzLm1hcC5zaGlmdEFyZWEoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVkbzogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubWFwLmFkZEFyZWEoYXJlYSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJlbW92ZSBhbiBhcmVhIGZyb20gdGhlIGltYWdlTWFwIG9iamVjdFxyXG5cdCAqIEBwYXJhbSB7QXJlYX0gYXJlYVxyXG5cdCAqL1xyXG5cdGRlbGV0ZUFyZWEoYXJlYSkge1xyXG5cdFx0bGV0IGlkID0gYXJlYS5pZDtcclxuXHRcdGlmIChpZCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLnNldHRpbmdzLnNldFZhbHVlKFwiRGVmYXVsdCBBcmVhXCIsIGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCBpbmRleCA9IHRoaXMubWFwLnJtdkFyZWEoaWQpO1xyXG5cdFx0XHR0aGlzLnVuZG9NYW5hZ2VyLmFkZCh7XHJcblx0XHRcdFx0dW5kbzogKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXAuaW5zZXJ0QXJlYShhcmVhLCBpbmRleCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRyZWRvOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm1hcC5ybXZBcmVhKGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTW92ZSBhbiBhcmVhIGZvcndhcmQgb3IgYmFja3dhcmRcclxuXHQgKiBAcGFyYW0ge0FyZWF9IGFyZWFcclxuXHQgKi9cclxuXHRtb3ZlQXJlYShhcmVhLCBkaXJlY3Rpb24pIHtcclxuXHRcdGlmICh0aGlzLm1hcC5tb3ZlQXJlYShhcmVhLmlkLCBkaXJlY3Rpb24pICE9PSBmYWxzZSkge1xyXG5cdFx0XHR0aGlzLnVuZG9NYW5hZ2VyLmFkZCh7XHJcblx0XHRcdFx0dW5kbzogKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXAubW92ZUFyZWEoYXJlYS5pZCwgLWRpcmVjdGlvbik7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRyZWRvOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm1hcC5tb3ZlQXJlYShhcmVhLmlkLCBkaXJlY3Rpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgdGhlIHVybCBvZiBhbiBhcmVhXHJcblx0ICogQHBhcmFtIHtBcmVhfSBhcmVhXHJcblx0ICovXHJcblx0c2V0QXJlYVVybChhcmVhKSB7XHJcblx0XHRsZXQgaHJlZiA9IGFyZWEuaHJlZjtcclxuXHRcdGxldCBpbnB1dCA9IHByb21wdChcIkVudGVyIHRoZSBwb2ludGluZyB1cmwgb2YgdGhpcyBhcmVhXCIsIGhyZWYgPyBocmVmIDogXCJodHRwOi8vXCIpO1xyXG5cdFx0aWYgKGlucHV0ICE9IG51bGwpIHtcclxuXHRcdFx0YXJlYS5zZXRIcmVmKGlucHV0KTtcclxuXHRcdFx0dGhpcy51bmRvTWFuYWdlci5hZGQoe1xyXG5cdFx0XHRcdHVuZG86ICgpID0+IHtcclxuXHRcdFx0XHRcdGFyZWEuc2V0SHJlZihocmVmKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHJlZG86ICgpID0+IHtcclxuXHRcdFx0XHRcdGFyZWEuc2V0SHJlZihpbnB1dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCB0aGUgdGl0bGUgb2YgYW4gYXJlYVxyXG5cdCAqIEBwYXJhbSB7QXJlYX0gYXJlYVxyXG5cdCAqL1xyXG5cdHNldEFyZWFUaXRsZShhcmVhKSB7XHJcblx0XHRsZXQgdGl0bGUgPSBhcmVhLnRpdGxlO1xyXG5cdFx0bGV0IGlucHV0ID0gcHJvbXB0KFwiRW50ZXIgdGhlIHRpdGxlIG9mIHRoaXMgYXJlYVwiLCB0aXRsZSA/IHRpdGxlIDogXCJcIik7XHJcblx0XHRpZiAoaW5wdXQgIT0gbnVsbCkge1xyXG5cdFx0XHRhcmVhLnNldFRpdGxlKGlucHV0KTtcclxuXHRcdFx0dGhpcy51bmRvTWFuYWdlci5hZGQoe1xyXG5cdFx0XHRcdHVuZG86ICgpID0+IHtcclxuXHRcdFx0XHRcdGFyZWEuc2V0VGl0bGUodGl0bGUpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cmVkbzogKCkgPT4ge1xyXG5cdFx0XHRcdFx0YXJlYS5zZXRUaXRsZShpbnB1dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldERlZmF1bHRBcmVhKGJvb2wpIHtcclxuXHRcdHRoaXMubWFwLnNldERlZmF1bHRBcmVhKGJvb2wpO1xyXG5cdFx0dGhpcy51bmRvTWFuYWdlci5hZGQoe1xyXG5cdFx0XHR1bmRvOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5tYXAuc2V0RGVmYXVsdEFyZWEoIWJvb2wpOyAvLyBzZW1ibGUgcmVkb25kYW50XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zZXRWYWx1ZShcIkRlZmF1bHQgQXJlYVwiLCAhYm9vbClcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVkbzogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubWFwLnNldERlZmF1bHRBcmVhKGJvb2wpOyAvLyBzZW1ibGUgcmVkb25kYW50XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zZXRWYWx1ZShcIkRlZmF1bHQgQXJlYVwiLCBib29sKVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNsZWFyQXJlYXMoKSB7XHJcblx0XHRsZXQgYXJlYXMgPSB0aGlzLm1hcC5nZXRBcmVhcyhmYWxzZSk7XHJcblx0XHR0aGlzLm1hcC5jbGVhckFyZWFzKCk7XHJcblx0XHR0aGlzLnVuZG9NYW5hZ2VyLmFkZCh7XHJcblx0XHRcdHVuZG86ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1hcC5zZXRBcmVhcyhhcmVhcyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlZG86ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1hcC5jbGVhckFyZWFzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoKSB7XHJcblx0XHR0aGlzLnVuZG9NYW5hZ2VyLmNsZWFyKCk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGJldHdlZW4odmFsLCByZWZBLCByZWZCLCBpbmNsdWRlZCA9IHRydWUpIHtcclxuXHRpZiAocmVmQSA+IHJlZkIpIHtcclxuXHRcdGxldCByZWZUID0gcmVmQTtcclxuXHRcdHJlZkEgPSByZWZCO1xyXG5cdFx0cmVmQiA9IHJlZlQ7XHJcblx0fVxyXG5cdHJldHVybiBpbmNsdWRlZCA/IHZhbCA+PSByZWZBICYmIHZhbCA8PSByZWZCIDogdmFsID4gcmVmQSAmJiB2YWwgPCByZWZCXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3VuZCh4LCBkaWdpdHMpIHtcclxuXHRyZXR1cm4gcGFyc2VGbG9hdCh4LnRvRml4ZWQoZGlnaXRzKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5XaW5kb3codXJsLCB3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gMzAwKSB7XHJcblx0d2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiLCBgd2lkdGg9JHt3aWR0aH0saGVpZ2h0PSR7aGVpZ2h0fWApO1xyXG59IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcInA1XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=