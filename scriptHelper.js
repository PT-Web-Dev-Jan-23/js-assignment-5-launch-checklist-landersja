// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   
   missionTarget.innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
    if (testInput === ""){
return "Empty";
    }

    if(isNaN(testInput)){
        return "Not a Number";
    }

    if(testInput === Number){
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let coPilotStatus =  document.getElementById("copilotStatus");
   let fuelStatus =  document.getElementById("fuelStatus");
   let cargoStatus =  document.getElementById("cargoStatus");

   if(validateInput(pilot)=== "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel)=== "Empty"){
    alert ("Enter valid input in empty field");
   } else if(validateInput(pilot)=== "Is a Number" || validateInput(copilot) === "Is a Number"|| validateInput(fuelLevel) === "Not a Number"|| validateInput(cargoLevel) === "Not a Number" ){
    alert ("Enter a valid information");
   } else {
    let launchStatus = document.getElementById("launchStatus");
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
    coPilotStatus.innerHTML = `Copilot ${copilot} is ready`;
   } if(fuelLevel < 10000 && cargoLevel <= 10000){
    fuelStatus.innerHTML = "not enough fuel for takeoff";
    cargoStatus.innerHTML = "enough mass for takeoff";
    launchStatus.innerHTML = "shuttle not ready for launch";
    launchStatus.style.color = "red";
   } else if(fuelLevel >= 10000 && cargoLevel > 10000) {
    fuelStatus.innerHTML = "Enough fuel for takeoff";
    cargoStatus.innerHTML = "Mass exceeds weight for takeoff";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
   } else if(fuelLevel < 10000 && cargoLevel >10000) {
    fuelStatus.innerHTML   = "Not enough fuel for takeoff";
    cargoStatus.innerHTML = "Mass exceeds weight for takeoff";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
   } else {
    fuelStatus.innerHTML = "Enough fuel for takeoff";
    cargoStatus.innerHTML =" Enough mass for takeoff";
    launchStatus.innerHTML = "Shuttle ready for launch";
    launchStatus.style.color = "green";
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json()  });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
