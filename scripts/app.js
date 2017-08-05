'use strict';
function projectData (name, path, description) {
  this.projectName = name;
  this.path = path;
  this.description = description;
}

$(document).ready(function(){
  $('.content div').not('.home').hide();
});

$('.main-nav').on('mouseover', function() {
  $(this).css("background-color", "grey");
});

$('.main-nav ul li').click(function(e) {
  e.preventDefault();
  var $id = $(this).attr('id');
console.log($id);
  $(`.${$id}`).show();
  $('.content div').not(`.${$(this).attr('id')}`).hide();


});
