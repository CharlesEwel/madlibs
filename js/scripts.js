$(document).ready(function() {
    $("form").submit(function() {
      var person1Input = $("input#person1").val();
      var person2Input = $("input#person2").val();
      var animalInput= $("input#animal").val();
      var exclamationInput = $("input#exclamation").val();
      var verbInput = $("input#verb").val();
      var nounInput = $("input#noun").val();
      var name = $("input#name").val();
      var phrase = $("input#phrase").val();

      $(".person1").append(person1Input);
      $(".person2").append(person2Input);
      $(".animal").append(animalInput);
      $(".exclamation").append(exclamationInput);
      $(".verb").append(verbInput);
      $(".noun").append(nounInput);
      $(".name").append(name);
      $(".phrase").append(phrase.toUpperCase());

      $("#story").show();

      $("h1").show();
      $("p").show();

      event.preventDefault();
    });


});
