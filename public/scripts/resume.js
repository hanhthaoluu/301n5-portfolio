'use strict';

var schools = [];

function School (educationDataObj) {
  this.schoolImage = educationDataObj.schoolImage;
  this.school = educationDataObj.school;
  this.location = educationDataObj.location;
  this.degreeCertificate = educationDataObj.degreeCertificate;
}

School.prototype.toHtml = function() {
  var source = $('#education-template').html();
  var template = Handlebars.compile(source);
  var context = {schoolImage: this.schoolImage, School: this.school, Location: this.location, Degree: this.degreeCertificate}
  var html = template(context);
  return html;
};

educationData.forEach(function(schoolObject) {
  schools.push(new School(schoolObject));
});

schools.forEach(function(school) {
  $('#content-resume').append(school.toHtml());
});

var workExperiences = [];

function WorkExperience (resumeDataObj) {
  this.title = resumeDataObj.title;
  this.duration = resumeDataObj.duration;
  this.employer = resumeDataObj.employer;
  this.city = resumeDataObj.city;
  this.description = resumeDataObj.description;
}

WorkExperience.prototype.toHtml = function() {
  var source = $('#resume-template').html();
  var template = Handlebars.compile(source);
  var context = {Title: this.title, Duration: this.duration, Employer: this.employer, City: this.city, Description: this.description};
  var html = template(context);
  return html;
};

resumeData.forEach(function(workExperienceObject){
  workExperiences.push(new WorkExperience(workExperienceObject));
});

workExperiences.forEach(function(WorkExperience) {
  $('#content-portfolio').append(WorkExperience.toHtml());
});
//not instance of school
School.fetchAll = function() {
  if (!localStorage.educationData) {
    console.log('fetchAll fire');
    $.getJSON('./public/data/resumeData.json', function(data) {
      console.log(data);
      localStorage.educationData = JSON.stringify(data);
    }).fail(function(res, text, error){
      console.log(error);
    });
  }
  schools.forEach(function(school) {
    school.toHtml(JSON.parse(localStorage.educationData));
  });
}

WorkExperience.fetchAll = function() {
  if (!localStorage.resumeData) {
    $.getJSON('./public/data/resumeData.json', function(data) {
      localStorage.resumeData = JSON.stringify(data);
    }).fail(function(res, text, error){
      console.log(error);
    });
  }
  workExperiences.forEach(function(workExperience) {
    workExperience.toHtml(JSON.parse(localStorage.resumeData));
  });
}
