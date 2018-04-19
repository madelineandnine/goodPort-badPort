var http = require("http");

var goodPort = 7000; 
var badPort = 7500;

var compliments = [
    "You are a poetic and noble land-mermaid.", 
    "You are a beautiful, talented, brilliant, powerful muskox.",
    "You are an opalescent tree shark.",
    "You are a rainbow infused space unicorn",
    "You are a beautiful, naïve, sophisticated newborn baby",
]; 

var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

var insults = [
    "Can I just say that of all the idiots in all the idiot villages, in all the idiot worlds, you stand alone",
    "This is a place of welcoming and you should get the hell out of here",
    "Why are you the way you are?"
];

var randomInsults = insults[Math.floor(Math.random() * insults.length)]; 



function handleRequestGood(request, response) {
     response.end(randomCompliment)
}

function handleRequestBad(request, response) {
    response.end(randomInsults)
}

var serverGood = http.createServer(handleRequestGood);
var serverBad = http.createServer(handleRequestBad);

serverGood.listen(goodPort, function() {
    console.log("Server listening on: http://localhost:" + goodPort)
  });

serverBad.listen(badPort, function() {
    console.log("Server listening on: http://localhost:" + badPort)

}); 