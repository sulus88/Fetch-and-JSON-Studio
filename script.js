// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const div= document.getElementById("container");
            let counter =0;
            for(let index=0; index<json.length; index++){
                    if(json[index].active){
                        active = "green";
                    }
                sortedJson = json.sort((a,b) =>(a.hoursInSpace-b.hoursInSpace))                               
                div.innerHTML +=
            
            `<div class="astronaut">
            <div class="bio">
               <h3>${json[index].firstName} ${json[index].lastName}</h3>
               <ul>
                  <li>Hours in space: ${json[index].hoursInSpace}</li>
                  <li id="green">Active: ${json[index].active}</li>
                  <li>Skills: ${json[index].skills}</li>
               </ul>
            </div>
            <img class="avatar" src="${json[index].picture}">
         </div>`
         counter+=1;
         let printCrewCount = document.getElementById("crewCount");
         printCrewCount.innerHTML = `
         <h3>Astronaut Count: ${counter}</h3>
         `

            };
        });
    });
})