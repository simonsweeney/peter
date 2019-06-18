(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

   $('.bg h1').click(function () {
      $('.bg').fadeOut();
      $('.home .nav').fadeIn();
   });

   $('.work li.no-desktop').click(function () {
      $('.work li.no-desktop').removeClass('hide');
      $(this).addClass('hide');
   });
});

var $tooltip = $('.tooltip');

$(document).on('mousemove', function (e) {
   $tooltip.css({
      left: e.pageX + 10,
      top: e.pageY + 10
   });
});

$('.work a').on('mouseenter', function () {

   var title = $(this).attr('data-title');
   $tooltip.text(title);
});
$('.work a').on('mouseleave', function () {

   $tooltip.text('');
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVU7O0FBRXpCLEtBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTtBQUN6QixRQUFFLEtBQUYsRUFBUyxPQUFUO0FBQ0EsUUFBRSxZQUFGLEVBQWdCLE1BQWhCO0FBQ0YsSUFIRDs7QUFRQSxLQUFFLHFCQUFGLEVBQXlCLEtBQXpCLENBQStCLFlBQVU7QUFDdEMsUUFBRSxxQkFBRixFQUF5QixXQUF6QixDQUFxQyxNQUFyQztBQUNBLFFBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsTUFBakI7QUFDRixJQUhEO0FBSUYsQ0FkRDs7QUFrQkEsSUFBSSxXQUFXLEVBQUUsVUFBRixDQUFmOztBQUVBLEVBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxXQUFmLEVBQTRCLFVBQVMsQ0FBVCxFQUFXO0FBQ25DLFlBQVMsR0FBVCxDQUFhO0FBQ1YsWUFBTyxFQUFFLEtBQUYsR0FBVSxFQURQO0FBRVYsV0FBTyxFQUFFLEtBQUYsR0FBVTtBQUZQLElBQWI7QUFJSCxDQUxEOztBQVFBLEVBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsWUFBaEIsRUFBOEIsWUFBVTs7QUFFckMsT0FBSSxRQUFRLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxZQUFiLENBQVo7QUFDQSxZQUFTLElBQVQsQ0FBYyxLQUFkO0FBRUYsQ0FMRDtBQU1BLEVBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsWUFBaEIsRUFBOEIsWUFBVTs7QUFFckMsWUFBUyxJQUFULENBQWMsRUFBZDtBQUVGLENBSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgIFxuICAgJCgnLmJnIGgxJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQoJy5iZycpLmZhZGVPdXQoKTsgXG4gICAgICAkKCcuaG9tZSAubmF2JykuZmFkZUluKCk7XG4gICB9KTtcbiAgICBcblxuXG5cbiAgICQoJy53b3JrIGxpLm5vLWRlc2t0b3AnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLndvcmsgbGkubm8tZGVza3RvcCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdoaWRlJyk7XG4gICB9KTtcbn0pO1xuXG4gICAgXG4gICAgXG52YXIgJHRvb2x0aXAgPSAkKCcudG9vbHRpcCcpOyAgICBcblxuJChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xuICAgICR0b29sdGlwLmNzcyh7XG4gICAgICAgbGVmdDogIGUucGFnZVggKyAxMCxcbiAgICAgICB0b3A6ICAgZS5wYWdlWSArIDEwXG4gICAgfSk7XG59KTsgICAgXG5cblxuJCgnLndvcmsgYScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXsgXG4gICBcbiAgIHZhciB0aXRsZSA9ICQodGhpcykuYXR0cignZGF0YS10aXRsZScpO1xuICAgJHRvb2x0aXAudGV4dCh0aXRsZSk7XG5cbn0pO1xuJCgnLndvcmsgYScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXsgXG4gICBcbiAgICR0b29sdGlwLnRleHQoJycpO1xuICAgXG59KTtcblxuXG5cblxuIl19
