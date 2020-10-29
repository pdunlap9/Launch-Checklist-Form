// Write your JavaScript code here!
window.addEventListener("load", function() {
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         
         for(let index=0; index < json.results.length; index++) {
         missionTarget.innerHTML += `
         <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json.results[index].name}</li>
   <li>Diameter: ${json.results[index].diameter}</li>
   <li>Star: ${json.results[index].star}</li>
   <li>Distance from Earth: ${json.results[index].distance}</li>
   <li>Number of Moons: ${json.results[index].moons}</li>
</ol>
<img src="${json[index].image}">
         `;
         }
      });
   });


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      // // let pilotName = document.getElementById("pilotName").value;
      // // let copilotName = document.getElementById("copilotName").value;
      // // let fuelLevel = document.getElementById("fuelLevel").value;
      // // let cargoMass = document.getElementById("cargoMass").value;
       
      // if(pilotName.value === "") {
      //    alert("All Fields Required!");
      //    event.preventDefault();
      // } else {
      //    pilotStatus.innerHTML = `Pilot Name: ${pilotName.value}`
      // };

      // if(copilotName.value === "") {
      //    alert("All Fields Required!");
      //    event.preventDefault();
      // } else {
      //    copilotStatus.innerHTML = `Copilot Name: ${copilotName.value}`
      // };

      // if(fuelLevel.value === "") {
      //    alert("All Fields Required!");
      //    event.preventDefault();
      // } else if(fuelLevel.value < 10000) {
      //    faultyItems.style.visibility= 'visible';
      //    fuelStatus.innerHTML =`Not enough fuel for the journey!`;
      //    launchStatus.style.color = "red";
      //    launchStatus.innerHTML = `Shuttle not ready for launch.`;
      // } else {
      //    fuelStatus.innerHTML = `Fuel Level: ${fuelLevel.value}`
      // };

      // if(cargoMass.value === "") {
      //    alert("All Fields Required!");
      //    event.preventDefault();
      // } else {
      //    cargoStatus.innerHTML = `${cargoMass.value}`
      // };
       
   
   
   
   
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






