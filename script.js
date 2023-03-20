// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () { 
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectPlanet.name, selectPlanet.diameter, selectPlanet.star, selectPlanet.distance, selectPlanet.moons, selectPlanet.image);
       console.log(selectPlanet.name)
    })
 let list = document.getElementById("faultyItems");
 list.style.visibility = "hidden";
 let form = document.querySelector("form");
 form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name=copilotName");
    let copilot = copilotInput.value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);
    let CargoLevelInput = document.querySelector("input[name=cargoMass");
    let cargoLevel = Number(CargoLevelInput.value);
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
 })

});

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;