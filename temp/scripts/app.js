'use strict';

console.log('main.js loaded...');

function toTheBeer() {
  document.querySelector('#the-beer').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

function toCelebratingMastery() {
  document.querySelector('#celebrating-mastery').scrollIntoView({
    behavior: 'smooth',
    block: 'start'

  });
};

function toSince1871() {
  document.querySelector('#since-1871').scrollIntoView({
    behavior: 'smooth',
    block: 'start'

  });
};
// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function noop() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.