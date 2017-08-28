
$.getJSON('./data/seattleOutdoors.json', function(data) {
  $.each(data, function(index, value) {
    var source = $('#article-template').html();
    var template = Handlebars.compile(source);
    var html = template(value);
    $('#content-seattleOutdoors').append(html);
  });
}).fail(function(res, text, error){
  console.log(error);
});
