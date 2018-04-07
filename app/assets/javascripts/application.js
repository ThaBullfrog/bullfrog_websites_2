// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require_tree .

$(document).on('turbolinks:load', function() {
  var navbarButton = document.querySelector('#navbar-button');
  var backgroundOnExpand = document.querySelector('#bg-on-expand');

  if(navbarButton != null) {
    function collapseSection(element) {
      element.style.height = null;
      navbarButton.setAttribute('data-collapsed', 'true');
      if (backgroundOnExpand) {
        setTimeout(function() {
          backgroundOnExpand.classList.remove('expanded');
        }, 300);
      }
    }

    function expandSection(element) {
      element.style.height = element.scrollHeight + 'px';
      navbarButton.setAttribute('data-collapsed', 'false');
      if (backgroundOnExpand) {
        backgroundOnExpand.classList.add('expanded');
      }
    }

    navbarButton.addEventListener('click', function(e) {
      var section = document.querySelector('#navbar-collapse');
      var isCollapsed = navbarButton.getAttribute('data-collapsed') === 'true';
      $('#navbar-button').toggleClass('close');
      if(isCollapsed) {
        expandSection(section);
      } else {
        collapseSection(section)
      }
      e.preventDefault();
    });
  }
});

$(document).on('turbolinks:render', function() {
  if (document.documentElement.hasAttribute("data-turbolinks-preview")) {
    var $animated = $(".animated");
    $animated.addClass('dont-animate-yet');
  }
});

var animation_elements = $('.animated');
var animation_elements_positions = [];
var win = $(window);

function update_animation_elements_positions() {
  animation_elements_positions = [];
  $.each(animation_elements, function() {
    var element = $(this);
    animation_elements_positions.push({
      elem: element, 
      position: element.offset().top + element.outerHeight() * 0.3
    });
  });
}

$(document).on('turbolinks:load', function() {
  animation_elements = $(".animated");
  animation_elements.addClass('dont-animate-yet');
  $(".animated-child").addClass('dont-animate-yet');
  update_animation_elements_positions();
  check_if_in_view();
});

function check_if_in_view() {
  var window_height = win.height();
  var window_top_position = win.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var array_length = animation_elements_positions.length;
  for (var i = 0; i < array_length; i++) {
    var info = animation_elements_positions[i];

    //check to see if this current container is within viewport
    if ((info.position <= window_bottom_position)) {
      info.elem.removeClass('dont-animate-yet');
    }
  }
}

win.on('scroll', check_if_in_view);
win.on('resize', function() {
  update_animation_elements_positions();
  check_if_in_view();
});
