$(document).ready(function() {
  var search;
  var people = [];
  var starships = [];
  var planets = [];
  var species = [];
  var vehicles = [];

  $('#search').click(function() {
    search = $('#searchText').val();
    $('#searchText').val('');
    $("#displayStarships").html('');
    $("#displayPeople").html('');
    $.get('http://swapi.co/api/people/?search=' + search).then(function(response) {
      console.log("INININININININININININ");
      people = response.results;
      displayPeople();
    });
    $.get('http://swapi.co/api/starships/?search=' + search).then(function(response) {
      starships = response.results;
      displayStarships();
    });
    // $.get('http://swapi.co/api/planets/?search=' + search).then(function(response) {
    //   planets = response.results;
    //   displayPlanets();
    // });
    // $.get('http://swapi.co/api/species/?search=' + search).then(function(response) {
    //   species = response.results;
    //   displaySpecies();
    // });
    // $.get('http://swapi.co/api/vehicles/?search=' + search).then(function(response) {
    //   vehicles = response.results;
    //   displayVehicles();
    // });
  });

  function displayStarships() {
    $("#displayStarships").append(
      "<div class='col-md-12'>"
      + "<h1>Starships</h1>"
      + "</div>");

      for (var i = 0; i < starships.length; i++) {

          $("#displayStarships").append(
            "<div class='col-md-4' id='col" + i + "'>"
              + "<h2>" + starships[i].name + "</h2>"
              + "<h2>model: " + starships[i].model + "</h2>"
              + "<h3>manufacturer: " + starships[i].manufacturer + "</h3>"
              + "<h3>Starship Class: " + starships[i].starship_class + "</h3>"
              + "<h3>Cost in Credits: " + starships[i].cost_in_credits + "</h3>"
              + "<h3>Length: " + starships[i].length + "'</h3>"
              + "<h3>Crew size: " + starships[i].crew + "</h3>"
              + "<h3>Passengers size: " + starships[i].passengers + "</h3>"
              + "<h3>Cargo Capacity: " + starships[i].cargo_capacity + "</h3>"
              + "<h3>Consumables: " + starships[i].consumables + "</h3>"
              + "<h3>MGLT or FTL: " + starships[i].MGLT + "</h3>"
            + "</div>");

      }
  }

  function displayPeople() {
    $("#displayPeople").append(
      "<div class='col-md-12'>"
      + "<h1>People</h1>"
      + "</div>");

      for (var i = 0; i < people.length; i++) {

          $("#displayPeople").append(
            "<div class='col-md-4' id='col" + i + "'>"
              + "<h2>" + people[i].name + "</h2>"
              + "<h2>Height: " + people[i].height + "</h2>"
              + "<h3>mass: " + people[i].mass + "</h3>"
              + "<h3>hair color: " + people[i].hair_color + "</h3>"
              + "<h3>skin color: " + people[i].skin_color + "</h3>"
              + "<h3>eye color: " + people[i].eye_color + "</h3>"
              + "<h3>birth year: " + people[i].birth_year + "</h3>"
              + "<h3>gender: " + people[i].gender + "</h3>"
            + "</div>");

      }
  }
});
