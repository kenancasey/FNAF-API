// Option 1 - LOCAL SERVER ONLY
// import data from "./data.json" assert {type: 'json'};
// console.log(data);


// Option 2 - Remote Server and Dynamic 
async function loadData()
{
    const response = await fetch("https://fnaf-api.netlify.app/data.json");
    const characters = await response.json();
    
    console.log(characters);
}

loadData()