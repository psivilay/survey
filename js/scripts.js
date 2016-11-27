$(document).ready(function() {

    $("form#name").submit(function(event) {
      event.preventDefault();
      var userName = $("#user-name").val();
      $("#output1").text("Your Name is " + userName);

      var foodType = $("#food-types").val();
      $("#output2").text("Your favorite type of food is " + foodType);

      var music = $("input:radio[name=music]:checked").val();
      $("#output3").text("Your favorite type of music is " + music);

      var day = $("#special-day").val();
      $("#output4").text("Your special day is " + day);

      var userColor = $("#color").val();
      $("#output5").text("Your favorite color is " + userColor);
    });
});
