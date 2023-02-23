let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const feelingsinput = document.getElementsByClassName("myInput");
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&units=metric&appid=914d764134f65e9d661f25d886ba8ba7';
const btn = document.getElementById('generate');

btn.addEventListener('click', performAction);

  function performAction(e){  
    const zipinput = document.getElementById('zip').value;
    const feelingsinput = document.getElementsByClassName("myInput").value;

    getzip(baseURL,zipinput, apiKey)
    .then(function(data){
      // Add data
      console.log(data);
      postData('/saveData', {temp:33.2,date:1/2/2022,'content':'fine'});
    })
      .then(
        updateUi()
        )
    if (data.cod !=200){
        alert(data.message);
        return false;
      }
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

const postData = async ( url = 'baseURL+zipinput+apiKey', data = {})=>{
    console.log(data)
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),       
  });

    try {
      const newData = await response.json();
      return newData
    }catch(error) {
    console.log("error", error);
    }
}

const updateUi = async ( url='') =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById('date').innerHTML = allData.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }

   function postGet(){
    postData('/saveData', {temp:33.2,date:1/2/2022,'content':'fine'})//.then(()=>{updateUi();});
    
      .then(function(data){
        updateUi('/all')
      })
  }
  
  postData()
// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */
