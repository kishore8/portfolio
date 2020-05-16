const express = require('express');
const mg = require('mongoose');
const app = express();
require('dotenv/config');
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
//Middlewares in express
//function that executes when specific routes are being hit
app.use(bodyParser.json());
app.use('/posts',postsRoute); 

//we can do authentication before going to each route app.use(auth)



//connect to db

mg.connect('mongodb+srv://kishore:kishore@cluster0-ffmij.mongodb.net/kishPortfolio?retryWrites=true&w=majority',{ useNewUrlParser: true },function(){
  
})
//console.log(mongoose.connection.readyState);




//How to we start listening

app.listen(3000);


/**It is too much boiler plate code, so hence we have express */
// const http = require('http');
// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

