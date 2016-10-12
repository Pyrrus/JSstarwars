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
    $("#displaySpecies").html('');
    $("#displayVehicles").html('');
    $("#displayPlanets").html('');
    $.get('http://swapi.co/api/people/?search=' + search).then(function(response) {
      people = response.results;
      if (people.length > 0)
        displayPeople();
    });
    $.get('http://swapi.co/api/starships/?search=' + search).then(function(response) {
      starships = response.results;
      if (starships.length > 0)
        displayStarships();
    });
    $.get('http://swapi.co/api/planets/?search=' + search).then(function(response) {
      planets = response.results;
      if (planets.length > 0)
        displayPlanets();
    });
    $.get('http://swapi.co/api/species/?search=' + search).then(function(response) {
      species = response.results;
      if (species.length > 0)
        displaySpecies();
    });
    $.get('http://swapi.co/api/vehicles/?search=' + search).then(function(response) {
      vehicles = response.results;
      if (vehicles.length > 0)
        displayVehicles();
    });
  });

  function displayStarships() {
    $("#displayStarships").append(
      "<div class='col-md-12'>"
      + "<h1>Starships</h1>"
      + "</div>");

      for (var i = 0; i < starships.length; i++) {

          $("#displayStarships").append(
            "<div class='col-md-6' id='col" + i + "'>"
              + "<img src='https://robohash.org/" + starships[i].name + ".png?bgset=bg1' />"
              + "<h2>" + starships[i].name + "</h2>"
              + "<h2>model: " + starships[i].model + "</h2>"
              + "<h3>manufacturer: " + starships[i].manufacturer + "</h3>"
              + "<h3>Starship Class: " + starships[i].starship_class + "</h3>"
              + "<h3>Cost in Credits: " + starships[i].cost_in_credits + "</h3>"
              + "<h3>Length: " + starships[i].length + "</h3>"
              + "<h3>Crew size: " + starships[i].crew + "</h3>"
              + "<h3>Passengers size: " + starships[i].passengers + "</h3>"
              + "<h3>Cargo Capacity: " + starships[i].cargo_capacity + "</h3>"
              + "<h3>Consumables: " + starships[i].consumables + "</h3>"
              + "<h3>MGLT or FTL: " + starships[i].MGLT + "</h3>"
            + "</div>");

      }
  }

  function displayVehicles() {
    $("#displayVehicles").append(
      "<div class='col-md-12'>"
      + "<h1>Vehicles</h1>"
      + "</div>");

      for (var i = 0; i < vehicles.length; i++) {

          $("#displayVehicles").append(
            "<div class='col-md-6' id='col" + i + "'>"
              + "<img src='https://robohash.org/" + vehicles[i].name + ".png?set=set3' />"
              + "<h2>" + vehicles[i].name + "</h2>"
              + "<h2>model: " + vehicles[i].model + "</h2>"
              + "<h3>manufacturer: " + vehicles[i].manufacturer + "</h3>"
              + "<h3>Vehicle Class: " + vehicles[i].vehicle_class + "</h3>"
              + "<h3>Cost in Credits: " + vehicles[i].cost_in_credits + "</h3>"
              + "<h3>Length: " + vehicles[i].length + "</h3>"
              + "<h3>Crew size: " + vehicles[i].crew + "</h3>"
              + "<h3>Passengers size: " + vehicles[i].passengers + "</h3>"
              + "<h3>Cargo Capacity: " + vehicles[i].cargo_capacity + "</h3>"
              + "<h3>Consumables: " + vehicles[i].consumables + "</h3>"
              + "<h3>Max Atmosphering Speed: " + vehicles[i].max_atmosphering_speed + "</h3>"
            + "</div>");

      }
  }

  function displaySpecies() {
    $("#displaySpecies").append(
      "<div class='col-md-12'>"
      + "<h1>Species</h1>"
      + "</div>");

      for (var i = 0; i < species.length; i++) {

          $("#displaySpecies").append(
            "<div class='col-md-4' id='col" + i + "'>"
              + "<img src='https://robohash.org/" + people[i].name + ".png?set=set2' />"
              + "<h2>" + species[i].name + "</h2>"
              + "<h2>classification: " + species[i].classification + "</h2>"
              + "<h3>designation: " + species[i].designation + "</h3>"
              + "<h3>average height: " + species[i].average_height / 100 + " m</h3>"
              + "<h3>skin colors: " + species[i].skin_colors + "</h3>"
              + "<h3>hair colors: " + species[i].hair_colors + "</h3>"
              + "<h3>eye colors: " + species[i].eye_colors + "</h3>"
              + "<h3>average lifespan: " + species[i].average_lifespan + "</h3>"
              + "<h3>language: " + species[i].language + "</h3>"

            + "</div>");

      }
  }

  function displayPlanets() {
    $("#displayPlanets").append(
      "<div class='col-md-12'>"
      + "<h1>Planets</h1>"
      + "</div>");

      for (var i = 0; i < planets.length; i++) {

          $("#displayPlanets").append(
            "<div class='col-md-4' id='col" + i + "'>"
              + "<img src='https://robohash.org/" + planets[i].name + ".png?set=set3' />"
              + "<h2>" + planets[i].name + "</h2>"
              + "<h2>Rotation period: " + planets[i].rotation_period + "</h2>"
              + "<h3>Orbital period: " + planets[i].orbital_period + "</h3>"
              + "<h3>Diameter: " + planets[i].diameter + "</h3>"
              + "<h3>Climate: " + planets[i].climate + "</h3>"
              + "<h3>Gravity: " + planets[i].gravity+ "</h3>"
              + "<h3>Terrain: " + planets[i].terrain + "</h3>"
              + "<h3>Surface water: " + planets[i].surface_water + "%</h3>"
              + "<h3>Population: " + planets[i].population + "</h3>"
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
              + "<img src='https://robohash.org/" + people[i].name + ".png' />"
              + "<h2>" + people[i].name + "</h2>"
              + "<h2>Height: " + people[i].height / 100 + " m</h2>"
              + "<h3>mass: " + people[i].mass + " kg</h3>"
              + "<h3>hair color: " + people[i].hair_color + "</h3>"
              + "<h3>skin color: " + people[i].skin_color + "</h3>"
              + "<h3>eye color: " + people[i].eye_color + "</h3>"
              + "<h3>birth year: " + people[i].birth_year + "</h3>"
              + "<h3>gender: " + people[i].gender + "</h3>"
            + "</div>");

      }
  }
});
