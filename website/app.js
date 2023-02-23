let d = new Date();
let newDate = 1 + d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&units=imperial&appid=914d764134f65e9d661f25d886ba8ba7';
let btn = document.getElementById('generate');
const feelingsinput=document.querySelector("#feelings");
btn.addEventListener('click', performAction);

  function performAction(e){  
   let zipinput = document.getElementById('zip').value;
   let feelingsInputValue=feelingsinput.value;
    getzip(baseURL,zipinput, apiKey,)
    .then(function(data){
      // Add data
      console.log(data);
      postData
      ("savedData",
      {date:newDate,
         temp:data.main.temp  ,
          content:feelingsInputValue});
    })
    .then(() => retrieveData());
  }
    const getzip = async (baseURL, zip , key)=>{
    
      const res = await fetch(baseURL+zip+key)
      
      try {
          
        const data = await res.json();
        console.log(data);
        return data;
      }  catch(error) {
        
        console.log("error", error);
      }
    }
    // Async POST
    const postData = async ( url = '', data = {})=>{
      console.log(data);
        const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
      });
  
        try {
          const newData = await response.json();
          console.log(newData);
          return newData;
        }catch(error) {
        console.log("error", error);
        }
    }
  
 

  /*function to get project data*/
  
  const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.content;
    document.getElementById('date').innerHTML =allData.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }
    

// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */
