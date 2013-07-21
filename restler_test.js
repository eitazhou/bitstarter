//http://stackoverflow.com/questions/17564255/getting-http-response-using-restler-in-node-js                                                              
/*
var fs = require('fs');
var rest = require('restler');
var getResp = function(url){
  rest.get(url).on('complete', function(data,response){
 if (response.statusCode !== 404) {
 //fs.writeFile('./temp.txt'  , data);
data;
 } else {
    console.log("%s does not exist. Exiting.", url);                                                                                               
    process.exit(1);}    
  })};
*/

var fs = require('fs');
var rest = require('restler');
/*
var assertUrlExists = function(url) {
var result = rest.get(url).on('complete', function(result,response){
if (response.statusCode == 404) {
        console.log("%s does not exist. Exiting.", url);
        process.exit(1); // http://nodejs.org/api/process.html#process_process_exit_code                                                                    
}
   else {result.toString();}
  });
  return result;
};

console.log(assertUrlExists("http://quiet-beyond-6899.herokuapp.com/"));
*/
//getResp("http://quiet-beyond-68991.herokuapp.com/");
//console.log(getResp("http://quiet-beyond-6899.herokuapp.com/"));


var assertUrlExists = function(url) {
    rest.get(url).on('complete', function(result,response) {
 if ((result instanceof Error) || (response.statusCode == 404)) {
    console.log('Error: ' + result.message);
    process.exit(1);     
   } else {
    //result;
    //console.log(response.statusCode);
//var getResp = function(url){
//  rest.get(url).on('complete', function(data){
 fs.writeFile('./temp.txt'  , result);
//  })};
}
});
  // return result;
}

//var t=assertUrlExists('http://quiet-beyond-6899.herokuapp.com/ue.html');
//assertUrlExists('http://quiet1-beyond-6899.herokuapp.com/');
assertUrlExists('http://www.google.com/');
