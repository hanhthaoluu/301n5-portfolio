
    $.getJSON('./data/resumeData.json', function(data) {
      $.each(data, function(index, value) {
        var source = $('#resume-template').html();
        var template = Handlebars.compile(source);
        var html = template(value);
        $('#work').append(html);
      });
    }).fail(function(res, text, error){
      console.log(error);
    });

    $.getJSON('./data/educationData.json', function(data) {
      $.each(data, function(index, value) {
        var source = $('#education-template').html();
        var template = Handlebars.compile(source);
        var html = template(value);
        $('#schools').append(html);
      });
    });
