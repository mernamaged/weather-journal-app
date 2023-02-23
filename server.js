/* Empty JS object to act as endpoint for all routes */
/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 8000;

projectData = {};
 app.listen(port, ()=>{
    console.log(`running on localhost: ${port}`);
  });
  app.get('/all',  function (req, res) {
    req.body=res.send(projectData);
    console.log(req.body);
    
  });



 app.post('/savedData', savedData); 
   function savedData(req, res){
    projectData = req.body;
   projectData['date'] = req.body.date;
projectData['temp'] = req.body.temp;
projectData['content'] = req.body.content;
res.send(projectData);
console.log(projectData);
console.log(req.body);
console.log("The data pushed is "+newData)
  };
  


// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'insta

// Post Route
  