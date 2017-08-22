

$(document).ready(function(){
  $("form.tickets").submit(function(event){
    event.preventDefault();
    var movie = $('#movies').val();
    var time = $('#time').val();
    var age = $('input#age').val();

    //var movie = $('#movies option:selected').attr('value');

    console.log(movie, time, age);
  });
});
