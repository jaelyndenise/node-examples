const http = require("http");

function willItBlend(callback) {
  // should be true for anything divisible by 3 between 0 and 9
  const itBlends = Math.floor(Math.random() * 10) % 3 === 0;

  if (itBlends) {
    callback(null, "Good news bitches! It Blends!");
  } else {
    callback(new Error("Oh No bitches! It didn't Blend!"));
  }
}

//create a server object:
http
  .createServer(function(req, res) {
    /* delete the line below and replace it with a call to willItBlend.
     write the callback function that is passed to willItBlend inline,
     within the parameter list in the function call */   
    willItBlend((err, result) => {
      if (err) {
        res.setHeader('Content-Type', 'text/html')
        res.end(`${err.message}!`)
      } else {
        res.setHeader('Content-Type', 'text/html')
        res.end(`WOOHOO! ${result}`)
      }
    });
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080


// this is a fork of https://codesandbox.io/s/rl9v3156lp