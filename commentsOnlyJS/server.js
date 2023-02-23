const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(cors());
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("website"));
projectData = [];

 app.listen(port, ()=>{
    console.log(`running on localhost: ${port}`);
  });
  app.get('/getData', function (req, res) {
    req.body=res.send(projectData);
    console.log(req.body);
    
  });

  app.post('/saveData',  
   function (req, res){
    projectData = req.body;
   
    newEntry = {
      temp:req.body.temp,
      date:req.body.date,
      content:req.body.content
    }
  projectData.push(newEntry)
   console.log(req.body);});


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
  