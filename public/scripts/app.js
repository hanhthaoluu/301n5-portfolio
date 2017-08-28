'use strict';
function projectData (projectName, path, description) {
  this.projectName = name;
  this.path = path;
  this.description = description;
}

$(document).ready(function(){
  $('.content').children().not('#content-home').hide();

});

$('.main-nav').on('mouseover', function() {
  $(this).css("background-color", "grey");
});

$('.icon-menu').click(function() {
  var $navList = $('.main-nav>ul');
  $navList.attr('id') === 'hidden' ? $navList.attr('id', '') : $navList.attr('id', 'hidden');
});

$('.main-nav ul li').click(function(e) {
  e.preventDefault();
  $('.content').children().hide();
  $(`#content-${$(this).attr('id')}`).show();
  //backtick character is for string template to avoid doing string concatenation
  //$(`#${$(this).attr('id')}`).show();

});
