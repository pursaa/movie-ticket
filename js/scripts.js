//Business Logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
  Ticket.prototype.price = function(){
    var total = this.movie + this.time + this.age;
    var result;
    if(total <= 18 && total > 15){
      console.log("The price 5");
      result = 'The price is 5';

    } else if(total > 18) {
      console.log("the price of the movie is $6");

    }  else {
      console.log("you can't watch this movie");
    }
    return result;
  }

//User Inerface Logic
$(document).ready(function(){
  $("form.tickets").submit(function(event){

    event.preventDefault();
    var movie = $('#movies').val();
    var time = $('#time').val();
    var age = $('input#age').val();
    // var output = $('.output').text(myMovie.price());
    //var movie = $('#movies option:selected').attr('value');
    var myMovie = new Ticket(parseInt(movie), parseInt(time), parseInt(age));
    // console.log(myMovie);
    console.log('This is the result of my obj:', myMovie.price());
  });
});
