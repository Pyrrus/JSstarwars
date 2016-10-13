$(document).ready(function() {
  var search;
  var people = [];
  var starshipsList = [];
  var planets = [];
  var species = [];
  var vehicles = [];

  var starshipName = "";

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
      starshipsList = response.results;

      if (starshipsList.length > 0) {
        displaystarships();
      }

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

  function moreData(url, id, type) {
    $.get(url).then(function(response) {
      if (url.match("starships")) {
        $("#" + type + id + " #ship").append("<li>" + response.name + "</li>");
      } else if (url.match("vehicles")) {
        $("#" + type + id + " #vel").append("<li>" + response.name + "</li>");
      } else if (url.match("species")) {
        $("#" + type + id + " #species").append("<li>" + response.name + "</li>");
      } else if (url.match("planets")) {
        $("#" + type + id + " #home").append(response.name);
      } else if (url.match("people")) {
        $("#" + type + id + " #people").append("<li>" + response.name + "</li>");
      } else {
        $("#" + type + id + " #movie").append("<li>" + response.title + "</li>");
      }
    });
  }

  function displaystarships() {
    $("#displayStarships").append(
      "<div class='col-md-12'>"
      + "<h1>starships</h1>"
      + "</div>");

      for (var i = 0; i < starshipsList.length; i++) {

        for (var j = 0; j < starshipsList[i].pilots.length; j++) {
          moreData(starshipsList[i].pilots[j], i, "ship");
        }

        for (var j = 0; j < starshipsList[i].films.length; j++) {
          moreData(starshipsList[i].films[j], i, "ship");
        }

          $("#displayStarships").append(
            "<div class='col-md-6' id='ship" + i + "'>"
              + "<img src='https://robohash.org/" + starshipsList[i].name + ".png?bgset=bg1' />"
              + "<h2>" + starshipsList[i].name + "</h2>"
              + "<h2>model: " + starshipsList[i].model + "</h2>"
              + "<h3>manufacturer: " + starshipsList[i].manufacturer + "</h3>"
              + "<h3>Starship Class: " + starshipsList[i].starship_class + "</h3>"
              + "<h3>Cost in Credits: " + starshipsList[i].cost_in_credits + "</h3>"
              + "<h3>Length: " + starshipsList[i].length + "</h3>"
              + "<h3>Crew size: " + starshipsList[i].crew + "</h3>"
              + "<h3>Passengers size: " + starshipsList[i].passengers + "</h3>"
              + "<h3>Cargo Capacity: " + starshipsList[i].cargo_capacity + "</h3>"
              + "<h3>Consumables: " + starshipsList[i].consumables + "</h3>"
              + "<h3>MGLT or FTL: " + starshipsList[i].MGLT + "</h3>"
              + "<h3>Famous Pilots: <ul id='people'></ul></h3>"
              + "<h3>films: <ul id='movie'></ul></h3>"
            + "</div>");

      }
  }

  function displayVehicles() {
    $("#displayVehicles").append(
      "<div class='col-md-12'>"
      + "<h1>Vehicles</h1>"
      + "</div>");

      for (var i = 0; i < vehicles.length; i++) {

        for (var j = 0; j < vehicles[i].pilots.length; j++) {
          moreData(vehicles[i].pilots[j], i, "veh");
        }

        for (var j = 0; j < vehicles[i].films.length; j++) {
          moreData(vehicles[i].films[j], i, "veh");
        }

          $("#displayVehicles").append(
            "<div class='col-md-6' id='veh" + i + "'>"
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
              + "<h3>Famous Pilots: <ul id='people'></ul></h3>"
              + "<h3>films: <ul id='movie'></ul></h3>"
            + "</div>");

      }
  }

  function displaySpecies() {
    $("#displaySpecies").append(
      "<div class='col-md-12'>"
      + "<h1>Species</h1>"
      + "</div>");

      for (var i = 0; i < species.length; i++) {

        for (var j = 0; j < species[i].people.length; j++) {
          moreData(species[i].people[j], i, "spe");
        }

        for (var j = 0; j < species[i].films.length; j++) {
          moreData(species[i].films[j], i, "spe");
        }

        moreData(species[i].homeworld, i, "spe");

          $("#displaySpecies").append(
            "<div class='col-md-4' id='spe" + i + "'>"
              + "<img src='https://robohash.org/" + species[i].name + ".png?set=set2' />"
              + "<h2>" + species[i].name + "</h2>"
              + "<h2>classification: " + species[i].classification + "</h2>"
              + "<h3>designation: " + species[i].designation + "</h3>"
              + "<h3>average height: " + species[i].average_height / 100 + " m</h3>"
              + "<h3>skin colors: " + species[i].skin_colors + "</h3>"
              + "<h3>hair colors: " + species[i].hair_colors + "</h3>"
              + "<h3>eye colors: " + species[i].eye_colors + "</h3>"
              + "<h3>average lifespan: " + species[i].average_lifespan + "</h3>"
              + "<h3>language: " + species[i].language + "</h3>"
              + "<h3>Famous people: <ul id='people'></ul></h3>"
              + "<h3>homeworld: <span id='home'></span></h3>"
              + "<h3>films: <ul id='movie'></ul></h3>"
            + "</div>");

      }
  }

  function displayPlanets() {
    $("#displayPlanets").append(
      "<div class='col-md-12'>"
      + "<h1>Planets</h1>"
      + "</div>");

      for (var i = 0; i < planets.length; i++) {

        for (var j = 0; j < planets[i].residents.length; j++) {
          moreData(planets[i].residents[j], i, "pla");
        }

        for (var j = 0; j < planets[i].films.length; j++) {
          moreData(planets[i].films[j], i, "pla");
        }

          $("#displayPlanets").append(
            "<div class='col-md-4' id='pla" + i + "'>"
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
              + "<h3>Famous people: <ul id='people'></ul></h3>"
              + "<h3>films: <ul id='movie'></ul></h3>"
            + "</div>");

      }
  }

  function displayPeople() {
    $("#displayPeople").append(
      "<div class='col-md-12'>"
      + "<h1>People</h1>"
      + "</div>");

      for (var i = 0; i < people.length; i++) {
        for (var j = 0; j < people[i].starships.length; j++) {
          moreData(people[i].starships[j], i, "col")
        }

        for (var j = 0; j < people[i].species.length; j++) {
          moreData(people[i].species[j], i, "col")
        }

        for (var j = 0; j < people[i].vehicles.length; j++) {
          moreData(people[i].vehicles[j], i, "col")
        }

        for (var j = 0; j < people[i].films.length; j++) {
          moreData(people[i].films[j], i, "col")
        }

        moreData(people[i].homeworld, i, "col");

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
          + "<h3>starships: <ul id='ship'></ul></h3>"
          + "<h3>vehicles: <ul id='vel'></ul></h3>"
          + "<h3>Species: <ul id='species'></ul></h3>"
          + "<h3>homeworld: <span id='home'></span></h3>"
          + "<h3>films: <ul id='movie'></ul></h3>"
          + "</div>");

      }
  }
});
