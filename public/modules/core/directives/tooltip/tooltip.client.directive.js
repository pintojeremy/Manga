'use strict';
angular.module('core.tooltip-directive', [])

.directive('tooltip', function() {
  return {
    restrict: 'A',
    scope: {},
    link: function (scope, element, attrs) {
      //TODO Fix this whenever we want if we want tooltips
    }
  };
});

// var attr_title = $(this).attr("data-title");
//
// if( attr_title == undefined || attr_title == "") return false;
//
// $(this).after('<span class="tooltip"></span>');
//
// var tooltip = $(".tooltip");
// tooltip.append($(this).data('title'));
//
//
// var tipwidth = tooltip.outerWidth();
// var a_width = $(this).width();
// var a_hegiht = $(this).height() + 3 + 4;
//
// //if the tooltip width is smaller than the a/link/parent width
// if(tipwidth < a_width){
//     tipwidth = a_width;
//     $('.tooltip').outerWidth(tipwidth);
// }
//
// var tipwidth = '-' + (tipwidth - a_width)/2;
// $('.tooltip').css({
//     'left' : tipwidth + 'px',
//     'bottom' : a_hegiht + 'px'
// }).stop().animate({
//     opacity : 1
// }, 200);
// $("a").mouseout(function(){
//     var tooltip = $(".tooltip");
//     tooltip.remove();
// });
