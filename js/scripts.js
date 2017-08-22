//Business Logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
  Ticket.prototype.price = function(){
    return typeof(parseInt(this.movie)) + " " + typeof(this.time) + " " + this.age
  }

//User Inerface Logic
$(document).ready(function(){
  $("form.tickets").submit(function(event){
    event.preventDefault();
    var movie = $('#movies').val();
    var time = $('#time').val();
    var age = $('input#age').val();

    //var movie = $('#movies option:selected').attr('value');
    var myMovie = new Ticket(movie, time, age);
    // console.log(myMovie);
    console.log('This is the result of my obj:', myMovie.price());
  });
});
