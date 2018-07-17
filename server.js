// setTimeout(function() {
//   console.log('3 seconds have passed');
// }, 3000);

// ==================================================

// var time = 0;
//
// setInterval(function() {
//   time += 2;
//   console.log(time + ' seconds have passed');
// }, 2000);

// ==================================================
// var time = 0 ;
//
// var timer = setInterval(function() {
//   time += 2;
//   console.log(time + ' seconds have passed');
//   if (time > 5){
//     clearInterval(timer);
//   }
// }, 2000);

// normal function statement

// ==================================================
// function callFunction(fun){
//   fun();
// }
//
// var sayBye = function () {
//   console.log('bye');
// }
//
// callFunction(sayBye);

// Load the express module (Where do you think this comes from?)
var express = require("express");
// invoke var express and store the resulting application in var app
var app = express();

// lets handle the base route "/" and respond with "Hello Express"
app.get('/index.html', function(request, response) {
  response.send("<h1>Counter</h1>");
})
// notice that the function is app.get(...) why do you think the function is called get?

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// root route
app.get('/', function (req, res){
  res.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
  // code to add user to db goes here!
  // redirect the user back to the root route.
  // All we do is specify the URL we want to go to:
  res.redirect('/');
})


// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)c
