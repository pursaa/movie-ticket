//Business Logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
  Ticket.prototype.price = function(){
    var total = this.movie + this.time + this.age;
        // var result;

    if(this.age <= 15 && this.time <=2 && this.movie === 4){
      $("#output").text("No Way!!   ");
    }else if(this.age <= 15 && this.time === 1 && this.movie < 4){
      $("#output").text(" $4.00");
    }else if(this.age <= 15 && this.time === 2 && this.movie < 4){
      $("#output").text(" $5.00   ");
    }else if(this.age > 64 && this.time <= 2 && this.movie <= 4){
      $("#output").text(" $4.50   ");
    }else if(this.age > 15 && this.age <65 && this.time === 1 && this.movie <= 4){
      $("#output").text(" $6.00   ");
    }else{
      $("#output").text(" $7.00   ");
    }
    return total;
}
//User Inerface Logic
$(document).ready(function(){
  $("form.tickets").submit(function(event){
    event.preventDefault();
    var movie = $('#movies').val();
    var time = $('#time').val();
    var age = $('input#age').val();

    //var movie = $('#movies option:selected').attr('value');
      var myTicket = new Ticket(parseInt(movie), parseInt(time), parseInt(age));    // console.log(myMovie);
      console.log('This is the result of my obj:', myTicket.price());

      var total = myTicket.price();
      // $("#output").append(myTicket.movie);
      $("#output").append(total);
  });
});
