function findPrimes() {
  "use strict";
  var i,j, output;
  var primeNumbers = [];
  
  for ( i = 1; i <= 1000; i++){
    output = "";
    if( i === 1) {
      output = i;
      document.getElementById("mainDiv").innerHTML += "<p>" + output + " is not prime or composite" + "</p>";
      continue;
    }
    
  for (j = 0; j < primeNumbers.length; j++ ){
    if( i % primeNumbers[j] === 0){
      output = i;
      document.getElementById("mainDiv").innerHTML += "<p>" + output + " is composite" + "</p>";
      break;
    } 
  }
    if(output === ""){
      primeNumbers.push(i);
      output = i;
      document.getElementById("mainDiv").innerHTML += "<p>" + output + ".is prime" + "</p>";
      }   
  }
}
document.getElementById("myButton").onclick = function() {
  "use strict";
  findPrimes();
};