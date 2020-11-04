// Write your JavaScript code here!
window.addEventListener("load", function() {
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let json=[];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*json.length);
         div.innerHTML += `
         <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[index].name}</li>
   <li>Diameter: ${json[index].diameter}</li>
   <li>Star: ${json[index].star}</li>
   <li>Distance from Earth: ${json[index].distance}</li>
   <li>Number of Moons: ${json[index].moons}</li>
</ol>
<img src="${json[index].image}"></img>
         `
       
      });
   });
   

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
   
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
       alert("All fields are required!");
       event.preventDefault();
   } else if( isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
      alert("PLease enter valid information");
      event.preventDefault();
   } else {
      pilotStatus.innerHTML = `Pilot Name ${pilotName.value} is READY.`;
      copilotStatus.innerHTML = `Copilot Name ${copilotName.value} is READY`;
   };
      

      if(fuelLevel.value < 10000 || cargoMass.value > 10000 ) {
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch.`;
         event.preventDefault();
         
         if (fuelLevel.value < 1000) {
         faultyItems.style.visibility= 'visible';
         fuelStatus.innerHTML =`Not enough fuel for the journey!`;
         event.preventDefault();
         } else if (cargoMass.value > 10000) {
         faultyItems.style.visibility= 'visible';
         cargoStatus.innerHTML =`Too much cargo!`;
         event.preventDefault();
        
      };
   } else {
      launchStatus.style.color = "green";
      launchStatus.innerHTML = `Shuttle is ready for launch.`;
      event.preventDefault();
   };
   });
});






