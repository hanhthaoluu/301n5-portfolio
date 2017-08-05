'use strict';
function projectData (name, path, description) {
  this.projectName = name;
  this.path = path;
  this.description = description;
}

$(document).ready(function(){
  $('.content div').not('#content-home').hide();
});

$('.main-nav').on('mouseover', function() {
  $(this).css("background-color", "grey");
});

$('.main-nav ul li').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('id');
  console.log(id);
  $('.content div').not(`#content-${id}`).hide();
  $(`#content-${id}`).show();
  $(`#content-${id}`).children().show();
});
