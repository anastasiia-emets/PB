/*      hamburger       */
var checkbox = document.querySelector('#myInput');
var icon = document.querySelector('#menuToggle span');
var listener = function (e) {
    if (e.target != checkbox && e.target != icon) {
        checkbox.checked = false;
        document.removeEventListener('click', listener);
    }
};

checkbox.addEventListener('click', function () {
    if (this.checked) {
        document.addEventListener('click', listener);
    }
});


/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
            /******/
        }
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
    /******/ 			i: moduleId,
    /******/ 			l: false,
    /******/ 			exports: {}
            /******/
        };
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
    /******/ 		if (!__webpack_require__.o(exports, name)) {
    /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
    /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
    /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
    /******/ 		if (mode & 1) value = __webpack_require__(value);
    /******/ 		if (mode & 8) return value;
    /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/ 		var ns = Object.create(null);
    /******/ 		__webpack_require__.r(ns);
    /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    /******/ 		return ns;
        /******/
    };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
    /******/ 		var getter = module && module.__esModule ?
    /******/ 			function getDefault() { return module['default']; } :
    /******/ 			function getModuleExports() { return module; };
    /******/ 		__webpack_require__.d(getter, 'a', getter);
    /******/ 		return getter;
        /******/
    };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "/";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
    /************************************************************************/
    /******/({


          /***/ "./themes/default/assets/js/app.js":
          /*!*****************************************!*\
            !*** ./themes/default/assets/js/app.js ***!
            \*****************************************/
          /*! no static exports found */
          /***/ (function (module, exports, __webpack_require__) {

            __webpack_require__(/*! ./home-slider.js */ "./themes/default/assets/js/home-slider.js");

            __webpack_require__(/*! ./services.js */ "./themes/default/assets/js/services.js");

            $(document).ready(function () {
                if (location.href.includes('open_popup')) {
                    $('body').addClass('open');
                    $('.popup').fadeIn(300);
                }   //burger


                $('.header__burger').click(function () {
                    $('.header__burger').toggleClass('active');
                    $('.header-mobile__sidebar').toggleClass('open');

                    if ($(this).hasClass('active')) {
                        $('.header-mobile__bg').fadeIn(400);
                    } else {
                        $('.header-mobile__bg').fadeOut(400);
                    }
                });
                $('.header-mobile__bg').click(function () {
                    $('.header__burger').removeClass('active');
                    $('.header-mobile__sidebar').removeClass('open');
                    $('.header-mobile__bg').fadeOut(400);
                });
            });

            /***/
        }),

          /***/ "./themes/default/assets/js/home-slider.js":
          /*!*************************************************!*\
            !*** ./themes/default/assets/js/home-slider.js ***!
            \*************************************************/
          /*! no static exports found */
          /***/ (function (module, exports) {

            $(document).ready(function () {
                if (window.innerWidth > 580) {
                    var initSliderHome = function initSliderHome() {
                        var $containerImgs = $('.home-item');
                        $($containerImgs.toArray()[0]).addClass('current');
                        var lengthSlider = $containerImgs.length;
                        var currentSlider = 0;
                        var delay = 1400;
                        var marker = true;

                        function generateClasses(className) {
                            var $item = $('.home-item');
                            marker = false;
                            $($containerImgs[currentSlider]).addClass(className);
                            $item.removeClass('current');
                            setTimeout(function () {
                                marker = true;
                                $($containerImgs[currentSlider]).addClass('current');
                                $item.removeClass('next').removeClass('prev');
                                $item.removeClass('going-prev');
                                $item.removeClass('going-next');
                            }, delay);
                        }

                        function increment() {
                            currentSlider++;

                            if (currentSlider > lengthSlider - 1) {
                                currentSlider = 0;
                                $($containerImgs[lengthSlider - 1]).addClass('next');
                            } else {
                                $($containerImgs[currentSlider]).prev().addClass('next');
                            }

                            generateClasses('going-next');
                        }

                        function decrement() {
                            currentSlider--;

                            if (currentSlider < 0) {
                                currentSlider = lengthSlider - 1;
                                $($containerImgs[0]).addClass('prev');
                            } else {
                                $($containerImgs[currentSlider]).next().addClass('prev');
                            }

                            generateClasses('going-prev');
                        }

                        $('.home .arrow-prev').click(function () {
                            if (marker) {
                                decrement();
                            }
                        });
                        $('.home .arrow-next').click(function () {
                            if (marker) {
                                increment();
                            }
                        });

                        if ($(window).width() < 1024) {
                            var currentX;
                            var lastX = 0;
                            var lastT;
                            $('.home-slider').bind('touchmove', function (e) {
                                // If still moving clear last setTimeout
                                clearTimeout(lastT);
                                currentX = e.originalEvent.touches[0].clientX; // After stoping or first moving

                                if (lastX === 0) {
                                    lastX = currentX;
                                }

                                if (currentX < lastX) {
                                    if (marker) {
                                        increment();
                                    }

                                    $('.slider-number').text('0' + (currentSlider + 1)); // Left
                                } else if (currentX > lastX) {
                                    // Right
                                    if (marker) {
                                        decrement();
                                    }
                                } // Save last position


                                lastX = currentX; // Check if moving is done

                                lastT = setTimeout(function () {
                                    lastX = 0;
                                }, 100);
                            });
                        }
                    };

                    initSliderHome();
                }
            });

            /***/
        }),

          /***/ 0:
          /*!*************************************************************************************!*\
            !*** multi ./themes/default/assets/js/app.js ./themes/default/assets/sass/app.scss ***!
            \*************************************************************************************/
          /*! no static exports found */
          /***/ (function (module, exports, __webpack_require__) {

            __webpack_require__(/*! /var/www/html/bunny/themes/default/assets/js/app.js */"./themes/default/assets/js/app.js");
            module.exports = __webpack_require__(/*! /var/www/html/bunny/themes/default/assets/sass/app.scss */"./themes/default/assets/sass/app.scss");


            /***/
        })

    /******/
});