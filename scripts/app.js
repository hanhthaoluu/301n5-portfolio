'use strict';
function projectData (name, path, description) {
  this.projectName = name;
  this.path = path;
  this.description = description;
}

$(document).ready(function(){
  $('.content div').not('#content-home').children().hide();
});

$('.main-nav').on('mouseover', function() {
  $(this).css("background-color", "grey");
});

$('.main-nav ul li').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('id');
  $('.content div').not(`#content-${id}`).children().hide();
  $(`#content-${id}`).children().children().show();
  $(`#content-${id}`).children().show();
  $(`#content-${id}`).children().children().children().show();

});
